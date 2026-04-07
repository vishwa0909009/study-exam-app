document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const els = {
    subjectList: document.getElementById('subject-list'),
    contentBody: document.getElementById('content-body'),
    headerTitle: document.getElementById('header-title'),
    menuToggle: document.getElementById('menu-toggle'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),
    modeQuiz: document.getElementById('mode-quiz'),
    modeFlash: document.getElementById('mode-flash'),
    resetSubject: document.getElementById('reset-subject'),
    
    // Stats
    statTotal: document.getElementById('stat-total'),
    statCorrect: document.getElementById('stat-correct'),
    statWrong: document.getElementById('stat-wrong'),
    statScore: document.getElementById('stat-score'),
  };

  // State
  const state = {
    mode: 'quiz', // 'quiz' or 'flash'
    currentSubject: null,
    questions: [], // Active questions for current view
    shuffled: false,
    filterWrong: false, // Show only incorrectly answered questions
    
    // Global stats tracking per subject
    progress: JSON.parse(localStorage.getItem('ce_progress_v2')) || {},
    
    // Quiz Mode State
    quizPage: 0,
    questionsPerPage: 10,
    
    // Flashcard Mode State
    flashcardIndex: 0
  };

  // Initialize
  init();

  function init() {
    renderSidebar();
    setupEventListeners();
    
    // Select first subject by default
    const firstSubject = Object.keys(subjects)[0];
    if (firstSubject) {
      selectSubject(firstSubject);
    }
  }

  function setupEventListeners() {
    // Mode Toggles
    els.modeQuiz.addEventListener('click', () => switchMode('quiz'));
    els.modeFlash.addEventListener('click', () => switchMode('flash'));

    // Reset Progress
    els.resetSubject.addEventListener('click', () => {
      if (!state.currentSubject) return;
      if (confirm(`Wait! This will reset all your progress in ${state.currentSubject}. Are you sure?`)) {
        state.progress[state.currentSubject] = {};
        saveProgress();
        selectSubject(state.currentSubject); // Re-render
      }
    });

    els.menuToggle.addEventListener('click', () => {
        els.sidebar.style.display = els.sidebar.style.display === 'none' ? 'flex' : 'none';
        els.sidebarOverlay.classList.toggle('show');
    });

    els.sidebarOverlay.addEventListener('click', () => {
        els.sidebar.style.display = 'none';
        els.sidebarOverlay.classList.remove('show');
    });
  }

  // --- Sidebar & Navigation ---
  function renderSidebar() {
    els.subjectList.innerHTML = '';
    
    for (const [subjName, subjData] of Object.entries(subjects)) {
      const btn = document.createElement('button');
      btn.className = 'subject-btn';
      btn.dataset.subject = subjName;
      
      const dot = document.createElement('div');
      dot.className = 'subject-dot';
      dot.style.color = subjData.color; 
      dot.style.backgroundColor = subjData.color;
      
      const text = document.createElement('span');
      text.textContent = subjName;
      
      const count = document.createElement('span');
      count.className = 'subject-count';
      count.textContent = subjData.questions.length;

      btn.appendChild(dot);
      btn.appendChild(text);
      btn.appendChild(count);

      btn.addEventListener('click', () => {
          selectSubject(subjName);
          if (window.innerWidth <= 1024) {
              els.sidebar.style.display = 'none';
              els.sidebarOverlay.classList.remove('show');
          }
      });

      els.subjectList.appendChild(btn);
    }
  }

  function selectSubject(subjName) {
    // Update active class
    document.querySelectorAll('.subject-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subject === subjName);
    });

    els.headerTitle.textContent = subjName;

    state.currentSubject = subjName;
    state.shuffled = false;
    state.filterWrong = false;
    state.quizPage = 0;
    state.flashcardIndex = 0;
    
    // Initialize progress object for this subject if not exists
    if (!state.progress[subjName]) {
      state.progress[subjName] = {}; 
    }

    // Set CSS variable for accent color to match subject
    document.documentElement.style.setProperty('--accent-primary', subjects[subjName].color);

    updateStats();
    loadQuestions();
  }

  function loadQuestions() {
    let qList = [...subjects[state.currentSubject].questions];
    
    // Attach original index so we can save progress accurately
    qList.forEach((q, i) => q.originalIndex = i);

    if (state.filterWrong) {
      const prg = state.progress[state.currentSubject] || {};
      qList = qList.filter(q => prg[q.originalIndex] === 'wrong');
    }

    if (state.shuffled) {
      qList.sort(() => Math.random() - 0.5);
    }

    state.questions = qList;
    renderContentBody();
  }

  function switchMode(newMode) {
    state.mode = newMode;
    els.modeQuiz.classList.toggle('active', newMode === 'quiz');
    els.modeFlash.classList.toggle('active', newMode === 'flash');
    
    state.quizPage = 0;
    state.flashcardIndex = 0;
    
    renderContentBody();
  }

  // --- Stats & Progress ---
  function saveProgress() {
    localStorage.setItem('ce_progress_v2', JSON.stringify(state.progress));
    updateStats();
  }

  function updateStats() {
    if (!state.currentSubject) return;
    
    const prg = state.progress[state.currentSubject] || {};
    const total = subjects[state.currentSubject].questions.length;
    
    let correct = 0;
    let wrong = 0;
    
    for (const key in prg) {
      if (prg[key] === 'correct') correct++;
      if (prg[key] === 'wrong') wrong++;
    }
    
    const answered = correct + wrong;
    const score = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    
    els.statTotal.textContent = total;
    els.statCorrect.textContent = correct;
    els.statWrong.textContent = wrong;
    els.statScore.textContent = answered > 0 ? `${score}%` : '—';
  }

  function markAnswer(originalIndex, isCorrect) {
    state.progress[state.currentSubject][originalIndex] = isCorrect ? 'correct' : 'wrong';
    saveProgress();
  }

  // --- View Rendering ---
  function renderContentBody() {
    els.contentBody.innerHTML = '';
    
    if (!state.currentSubject || state.questions.length === 0) {
       els.contentBody.innerHTML = `<div class="empty-state">
         <div class="empty-icon">📭</div>
         <h2 class="empty-title">Check Complete</h2>
         <p class="empty-desc">No questions available with the current filters.</p>
       </div>`;
       const headerHtml = renderControlsBar();
       els.contentBody.prepend(headerHtml);
       return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'view-container';

    // Header & Controls
    const controlsHtml = renderControlsBar();
    wrapper.appendChild(controlsHtml);

    if (state.mode === 'quiz') {
      wrapper.appendChild(renderQuizMode());
    } else {
      wrapper.appendChild(renderFlashcardMode());
    }

    els.contentBody.appendChild(wrapper);
  }

  function renderControlsBar() {
    const wrap = document.createElement('div');
    wrap.className = 'controls-bar';
    
    const subjData = subjects[state.currentSubject];
    const prg = state.progress[state.currentSubject] || {};
    const totalQuestions = subjData.questions.length;
    const answeredCount = Object.keys(prg).length;
    const pct = Math.round((answeredCount / totalQuestions) * 100) || 0;

    let html = `
      <div class="progress-container">
        <span class="progress-text">Progress ${pct}%</span>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${pct}%; background: ${subjData.color}; color: ${subjData.color}"></div>
        </div>
      </div>
      
      <div class="controls-actions">
        <button class="btn-glass filter-btn ${state.filterWrong ? 'active' : ''}" id="btn-filter-wrong">
          ${state.filterWrong ? '🎯 WRONG ONLY' : '🌪️ FILTER WRONG'}
        </button>
        <button class="btn-glass shuffle-btn ${state.shuffled ? 'active' : ''}" id="btn-shuffle">
          ${state.shuffled ? '🎲 SHUFFLED' : '🎲 SHUFFLE'}
        </button>
      </div>
    `;
    
    wrap.innerHTML = html;

    // Attach listeners
    setTimeout(() => {
      const btnFilter = document.getElementById('btn-filter-wrong');
      const btnShuffle = document.getElementById('btn-shuffle');
      
      if(btnFilter) btnFilter.addEventListener('click', () => {
        state.filterWrong = !state.filterWrong;
        state.quizPage = 0;
        state.flashcardIndex = 0;
        loadQuestions();
      });
      
      if(btnShuffle) btnShuffle.addEventListener('click', () => {
        state.shuffled = !state.shuffled;
        state.quizPage = 0;
        state.flashcardIndex = 0;
        loadQuestions();
      });
    }, 0);

    return wrap;
  }

  // --- Quiz Mode ---
  function renderQuizMode() {
    const container = document.createElement('div');
    
    const startIdx = state.quizPage * state.questionsPerPage;
    const endIdx = Math.min(startIdx + state.questionsPerPage, state.questions.length);
    const pageQuestions = state.questions.slice(startIdx, endIdx);

    const qListDiv = document.createElement('div');
    qListDiv.className = 'question-list';

    pageQuestions.forEach((q, idx) => {
      const actualIdx = startIdx + idx;
      const qCard = createQuestionCard(q, actualIdx);
      qListDiv.appendChild(qCard);
    });

    container.appendChild(qListDiv);

    // Pagination
    const totalPages = Math.ceil(state.questions.length / state.questionsPerPage);
    if (totalPages > 1) {
      const pag = document.createElement('div');
      pag.className = 'pagination';
      
      const prevBtn = document.createElement('button');
      prevBtn.className = 'page-btn';
      prevBtn.textContent = 'BACK';
      prevBtn.disabled = state.quizPage === 0;
      prevBtn.onclick = () => { state.quizPage--; renderContentBody(); els.contentBody.scrollTo({top:0, behavior:'smooth'}); };

      const info = document.createElement('span');
      info.className = 'page-info';
      info.textContent = `PAGE ${state.quizPage + 1} OF ${totalPages}`;

      const nextBtn = document.createElement('button');
      nextBtn.className = 'page-btn';
      nextBtn.textContent = 'NEXT';
      nextBtn.disabled = state.quizPage === totalPages - 1;
      nextBtn.onclick = () => { state.quizPage++; renderContentBody(); els.contentBody.scrollTo({top:0, behavior:'smooth'}); };

      pag.appendChild(prevBtn);
      pag.appendChild(info);
      pag.appendChild(nextBtn);
      container.appendChild(pag);
    }

    return container;
  }

  function createQuestionCard(q, displayIndex) {
    const card = document.createElement('div');
    card.className = 'question-card';
    
    const status = state.progress[state.currentSubject][q.originalIndex];
    if (status === 'correct') card.classList.add('answered-correct');
    if (status === 'wrong') card.classList.add('answered-wrong');

    const header = document.createElement('div');
    header.className = 'question-header';
    header.innerHTML = `
      <div class="question-number">Q${displayIndex + 1}</div>
      <div class="question-text">${q.q}</div>
    `;
    card.appendChild(header);

    const optionsGrid = document.createElement('div');
    optionsGrid.className = 'options-grid';

    const labels = ['A', 'B', 'C', 'D'];
    let answered = status ? true : false;

    q.opts.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      
      if (answered) {
        btn.disabled = true;
        if (optIdx === q.ans) {
          btn.classList.add('reveal-correct');
        } else if (status === 'wrong' && optIdx !== q.ans) {
          // Can't know exactly which one they clicked wrong before, just let correct glow
        }
      }

      btn.innerHTML = `
        <span class="option-label">${labels[optIdx]}</span> 
        <span class="option-text">${optText}</span>
        <span class="option-icon"></span>
      `;
      
      btn.onclick = () => {
        if (answered) return;
        answered = true;
        
        const isCorrect = (optIdx === q.ans);
        markAnswer(q.originalIndex, isCorrect);
        
        if (isCorrect) {
          btn.classList.add('reveal-correct');
          card.classList.add('answered-correct');
        } else {
          // Add massive shake and red flag to selected
          btn.classList.add('selected-wrong');
          card.classList.add('answered-wrong');
          // Add intense glow to correct answer
          optionsGrid.children[q.ans].classList.add('reveal-correct');
        }

        // Disable all
        Array.from(optionsGrid.children).forEach(b => b.disabled = true);
        
        // Show explanation smoothly
        showExplanation(card, q.exp);
      };

      optionsGrid.appendChild(btn);
    });

    card.appendChild(optionsGrid);

    // If already answered, show explanation immediately
    if (answered && q.exp) {
      showExplanation(card, q.exp);
    }

    return card;
  }

  function showExplanation(card, text) {
    const expDiv = document.createElement('div');
    expDiv.className = 'explanation-box';
    // Clean citation tags
    let formattedText = text.replace(/\[cite: (.*?)\]/g, '<span style="opacity:0.4; font-family:var(--font-mono); font-size:0.8em; margin-left: 8px;">[Ref: $1]</span>');
    expDiv.innerHTML = `<div class="explanation-title">💡 Explanation</div>${formattedText}`;
    card.appendChild(expDiv);
  }

  // --- Flashcard Mode ---
  function renderFlashcardMode() {
    const container = document.createElement('div');
    container.className = 'flashcard-container';

    const q = state.questions[state.flashcardIndex];
    if (!q) return container;

    // Progress bar
    const progWrap = document.createElement('div');
    progWrap.className = 'flashcard-progress';
    const pct = ((state.flashcardIndex + 1) / state.questions.length) * 100;
    progWrap.innerHTML = `
      <div class="progress-labels" style="display:flex; justify-content:space-between; margin-bottom: 8px; font-family:var(--font-mono); font-size: 0.85rem; color:var(--text-secondary);">
        <span>Card ${state.flashcardIndex + 1} of ${state.questions.length}</span>
        <span>${Math.round(pct)}%</span>
      </div>
      <div class="progress-bar-bg" style="height: 6px;">
        <div class="progress-bar-fill" style="width: ${pct}%; background: var(--accent-primary); box-shadow: 0 0 10px var(--accent-primary)"></div>
      </div>
    `;
    container.appendChild(progWrap);

    // The Card
    const card = document.createElement('div');
    card.className = 'flashcard';
    card.id = 'current-flashcard';
    
    let formattedExp = q.exp.replace(/\[cite: (.*?)\]/g, '');

    card.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-face flashcard-front">
          <div class="flashcard-label">Question</div>
          <div class="flashcard-question">${q.q}</div>
          <div class="flashcard-hint">Tap to flip</div>
        </div>
        <div class="flashcard-face flashcard-back">
          <div class="flashcard-label">Answer</div>
          <div class="flashcard-answer">${q.opts[q.ans]}</div>
          <div class="flashcard-explanation">${formattedExp}</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    container.appendChild(card);

    // Navigation
    const nav = document.createElement('div');
    nav.className = 'flashcard-nav';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'fc-btn';
    prevBtn.textContent = '← PREV';
    prevBtn.disabled = state.flashcardIndex === 0;
    prevBtn.onclick = () => {
      if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => changeFlashcard(-1), 300); // Wait for unflip
      } else {
        changeFlashcard(-1);
      }
    };

    const nextBtn = document.createElement('button');
    nextBtn.className = 'fc-btn';
    nextBtn.textContent = 'NEXT →';
    nextBtn.disabled = state.flashcardIndex === state.questions.length - 1;
    nextBtn.onclick = () => {
      if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => changeFlashcard(1), 300);
      } else {
        changeFlashcard(1);
      }
    };

    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    container.appendChild(nav);

    return container;
  }

  function changeFlashcard(dir) {
    state.flashcardIndex += dir;
    renderContentBody();
  }

});
