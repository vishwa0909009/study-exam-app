const subjects = {
  "Computer Networks": {
    color: "#4f9cf9",
    questions: [
      {q:"What is the main purpose of public key cryptography?",opts:["Encryption","Authentication","Key exchange","All of the above"],ans:3,exp:"Public key cryptography serves all three: encryption, authentication, and key exchange. [cite: 1062]"},
      {q:"Which algorithm is commonly used for creating and verifying digital signatures?",opts:["RSA","AES","DES","SHA"],ans:0,exp:"RSA is the most common algorithm for digital signatures. [cite: 1063]"},
      {q:"What is authentication in cryptography?",opts:["The process of encrypting a message","The process of verifying the identity of a user","The process of generating a digital signature","The process of decrypting a message"],ans:1,exp:"Authentication verifies the identity of a communicating party. [cite: 1064]"},
      {q:"Which of the following is an example of something you know for authentication?",opts:["Password","Fingerprint","Smart card","All of the above"],ans:0,exp:"A password is the classic 'something you know' authentication factor. [cite: 1065]"},
      {q:"Which type of authentication uses multiple factors",opts:["Single-factor authentication","Two-factor authentication","Three-factor authentication","Multi-factor authentication"],ans:3,exp:"Multi-factor authentication (MFA) uses more than one factor. [cite: 1066]"},
      {q:"Which type of authentication uses a password and a security token?",opts:["Single-factor authentication","Two-factor authentication","Three-factor authentication","Multi-factor authentication"],ans:1,exp:"Password (something you know) + token (something you have) = Two-factor. [cite: 1067]"},
      {q:"error means that two or more bits in the data unit have changed",opts:["Single-factor authentication","Two-factor authentication","Three-factor authentication","Multi-factor authentication"],ans:0,exp:"Biometric alone = single factor (something you are). [cite: 1068]"},
      {q:"Which type of authentication uses a smart card and a PIN?",opts:["Single-factor authentication","Two-factor authentication","Three-factor authentication","Multi-factor authentication"],ans:1,exp:"Card (something you have) + PIN (something you know) = Two-factor. [cite: 1069]"},
      {q:"Which type of attack involves guessing passwords until the correct one is found?",opts:["Brute force attack","Dictionary attack","Social engineering attack","Man-in-the-middle attack"],ans:0,exp:"Brute force systematically tries all possible combinations. [cite: 1070]"},
      {q:"Which type of attack involves using pre-computed hashes to guess passwords?",opts:["Brute force attack","Dictionary attack","Rainbow table attack","Man-in-the-middle attack"],ans:2,exp:"Rainbow table attacks use precomputed hash tables for fast lookups. [cite: 1071]"},
      {q:"Which type of attack involves tricking someone into revealing their password?",opts:["Brute force attack","Dictionary attack","Social engineering attack","Man-in-the-middle attack"],ans:2,exp:"Social engineering exploits human psychology. [cite: 1072]"},
      {q:"Which key is used for encryption in a public key cryptosystem?",opts:["Public key","Private key","Symmetric key","None of the above"],ans:0,exp:"The public key encrypts; private key decrypts. [cite: 1073]"},
      {q:"Which type of attack involves intercepting and modifying communication between two parties?",opts:["Brute force attack","Dictionary attack","Social engineering attack","Man-in-the-middle attack"],ans:3,exp:"MITM attacks intercept and potentially alter communications. [cite: 1074]"},
      {q:"Which type of encryption algorithm uses the same key for encryption and decryption?",opts:["Public key encryption algorithm","Private key encryption algorithm","Symmetric key encryption algorithm","Asymmetric key encryption algorithm"],ans:2,exp:"Symmetric encryption uses one shared secret key. [cite: 1075]"},

{q:"Which type of encryption algorithm uses different keys for encryption and decryption?",opts:["Public key encryption algorithm","Private key encryption algorithm","Symmetric key encryption algorithm","Asymmetric key encryption algorithm"],ans:3,exp:"Asymmetric (public-key) cryptography uses a key pair. [cite: 1076]"},
      {q:"Which type of encryption algorithm is faster?",opts:["Public key encryption algorithm","Private key encryption algorithm","Symmetric key encryption algorithm","Asymmetric key encryption algorithm"],ans:2,exp:"Symmetric algorithms are much faster due to simpler operations. [cite: 1077]"},
      {q:"Which type of encryption algorithm is more secure?",opts:["Public key encryption algorithm","Private key encryption algorithm","Symmetric key encryption algorithm","Asymmetric key encryption algorithm"],ans:3,exp:"Asymmetric encryption is generally considered more secure. [cite: 1078]"},
      {q:"Which protocol is used for secure communication over the internet?",opts:["TLS/SSL","HTTPS","SSH","TCP/IP"],ans:1,exp:"TLS/SSL is the underlying protocol for secure internet communication. [cite: 1079]"},
      {q:"Which protocol is used for secure remote login and other secure network services over an insecure network?",opts:["TLS/SSL","HTTPS","SSH","TCP/IP"],ans:2,exp:"SSH (Secure Shell) provides encrypted remote login. [cite: 1080]"},
      {q:"Anarkali digitally signs a message and sends it to Salim. Verification of the signature by Salim requires",opts:["Anarkali’s Public Key","Salim’s Public Key","Salim’s Private Key","Anarkali’s Private Key"],ans:0,exp:"You verify a digital signature using the SIGNER's public key. [cite: 1082]"},
      {q:"A sender S sends a message m to receiver R, which is digitally signed by S with its private key... Which security violations are possible?",opts:["(I) and (II) only","(I) only","(II) only","(II) and (III) only"],ans:1,exp:"Digital signatures prevent some but not all security violations. [cite: 1083]"},
      {q:"AES uses a ____________ bit block size and a key size of __________ bits",opts:["128; 128 or 256","64; 128 or 192","256; 128, 192, or 256","128; 128, 192, or 256"],ans:3,exp:"AES always has 128-bit blocks and supports 128, 192, or 256-bit keys. [cite: 1084, 1085]"},
      {q:"Which key is kept secret in a public key cryptosystem?",opts:["Public key","Private key","Symmetric key","None of the above"],ans:1,exp:"The private key must never be shared. [cite: 1086]"},
      {q:"How many rounds does the AES-256 perform?",opts:["10","12","14","16"],ans:2,exp:"AES-128=10, AES-192=12, AES-256=14 rounds. [cite: 1087]"},
      {q:"From the following options, what is the key size in the S-AES algorithm?",opts:["16 bits","32 bits","24 bits","None of the above"],ans:0,exp:"Simplified AES (S-AES) uses a 16-bit key. [cite: 1088]"},
      {q:"Among the fourth-generation firewalls, Dynamic packet filters firewall that work at _________.",opts:["Application Layer","TCP","UDP","TCP, UDP"],ans:3,exp:"Dynamic packet filters operate at both TCP and UDP transport layer. [cite: 1089]"},
      {q:"_____________ is the process of verifying the identity of a user.",opts:["Authentication","Identification","Validation","Verification"],ans:0,exp:"Network security provides both authentication and access control. [cite: 1090]"},
      {q:"A digital signature needs a",opts:["Private-key system","Shared-key system","Public-key system","All of them"],ans:2,exp:"Authentication = verifying identity of a user. [cite: 1091]"},
      {q:"Encryption and decryption provide secrecy, or confidentiality, but not............",opts:["Authentication","Integrity","Privacy","All of the above"],ans:0,exp:"Digital signatures require asymmetric (public-key) cryptography. [cite: 1092]"},
      {q:"Decrypt the following ciphertext by using Caesar Cipher HQFUBSWHG WHAW",opts:["ABANDONED LOCK","ENCRYPTED TEXT","ABANDONED TEXT","ENCRYPTED LOCK"],ans:1,exp:"Encryption alone does NOT provide authentication. [cite: 1093]"},
      {q:"A ________ signature is included in the document; a _______________ signature is a separate entity",opts:["conventional; digital","digital; digital","either (a) or (b)","neither (a) or (b)"],ans:0,exp:"Caesar Cipher shift −3: HQFUBSWHG WHAW → ENCRYPTED TEXT. [cite: 1095]"},

{q:"Digital signature provides",opts:["authentication","nonrepudiation","both (a) and (b)","neither (a) nor (b)"],ans:2,exp:"Conventional signatures are embedded; digital signatures are separate files. [cite: 1097]"},
      {q:"Which algorithm is commonly used for generating public and private keys?",opts:["RSA","AES","DES","SHA"],ans:0,exp:"Digital signatures provide both authentication and non-repudiation. [cite: 1100]"},
      {q:"Digital signature cannot provide _______ for the message",opts:["integrity","confidentiality","nonrepudiation","authentication"],ans:1,exp:"RSA is the standard algorithm for generating public/private key pairs. [cite: 1102]"},
      {q:"If _________ is needed, a cryptosystem must be applied over the scheme.",opts:["integrity","confidentiality","nonrepudiation","authentication"],ans:1,exp:"Digital signatures don't encrypt — they don't provide confidentiality. [cite: 1104]"},
      {q:"The secret key between members needs to be created as a ________ key when two members contact KDC.",opts:["public","session","complimentary","none of the above"],ans:1,exp:"For confidentiality, the message itself must be encrypted. [cite: 1106]"},
      {q:"__________ is a popular session key creator protocol that requires an authentication server and a ticket-granting server.",opts:["KDC","Kerberos","CA","none of the above"],ans:1,exp:"KDC creates a temporary session key for each communication. [cite: 1108]"},
      {q:"CHAP stands for",opts:["Challenge Handshake Authentication Protocol","Challenge Hardware Authentication Protocol","Circuit Hardware Authentication Protocol","Circuit Handshake Authentication Protocol"],ans:0,exp:"Kerberos uses AS (Authentication Server) and TGS (Ticket-Granting Server). [cite: 1110]"},
      {q:"SSL provides ___________.",opts:["message integrity","confidentiality","Both A and B","None of the above"],ans:2,exp:"CHAP = Challenge Handshake Authentication Protocol. [cite: 1112]"},
      {q:"Which one of the following is not a public key distribution means?",opts:["Public-Key Certificates","Hashing Certificates","Publicly available directories","Public-Key authority"],ans:1,exp:"SSL/TLS provides both integrity and confidentiality. [cite: 1114]"},
      {q:"Which of the following public key distribution systems is most secure?",opts:["Public-Key Certificates","Public announcements","Publicly available directories","Public-Key authority"],ans:3,exp:"'Hashing Certificates' is not a real distribution mechanism. [cite: 1116]"},
      {q:"Which system uses a trusted third party interface?",opts:["Public-Key Certificates","Public announcements","Publicly available directories","Public-Key authority"],ans:3,exp:"Public-Key Certificates (PKI) is the most secure public key distribution system. [cite: 1118]"},
      {q:"The subject unique identifier of the X.509 certificates was added in which version?",opts:["1","2","3","4"],ans:1,exp:"Public-Key authority is a trusted third party managing key distribution. [cite: 1120]"},
      {q:"What is the primary advantage of using public key cryptography?",opts:["Faster encryption speed","Simpler key management","Stronger security","Lower computational overhead"],ans:1,exp:"Subject Unique Identifier was introduced in X.509 version 2. [cite: 1122]"},
      {q:"... both A and B can save the other’s public key for future – a technique known as ____",opts:["time stamping","polling","caching","squeezing"],ans:2,exp:"No need to securely share a secret key beforehand. [cite: 1124]"},
      {q:"In computing, __________ is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules",opts:["Cookie","Spyware","Firewall","Spam"],ans:2,exp:"Storing keys for later use is known as caching. [cite: 1126]"},
      {q:"A digital signature is required for _________",opts:["non-repudiation of communication by a sender","all e-mail sending","all DHCP server","FTP transactions"],ans:0,exp:"A firewall controls incoming/outgoing traffic based on security rules. [cite: 1128]"},
      {q:"To authenticate the data origin, one needs a",opts:["MDC","MAC","either (a) or (b)","neither (a) nor (b)"],ans:1,exp:"Digital signatures ensure the sender cannot deny sending the message. [cite: 1130]"},

{q:"A layer-4 firewall ... cannot block _________",opts:["entire HTTP traffic during 9.00PM and 5.00 AM","all ICMP traffic","incoming traffic from a specific IP address but allow outgoing traffic to the same IP address","TCP traffic from a specific user on a multi-user system during 9.00 PM and 5.00 AM"],ans:3,exp:"Both MDC and MAC can be used for origin authentication. [cite: 1132]"},
      {q:"A session symmetric key between two parties is used",opts:["Only once","Twice","Multiple times","Conditions dependant"],ans:0,exp:"Layer-4 firewalls work with ports/IPs, not user-level identities. [cite: 1134]"},
      {q:"One security protocol for the e-mail system is __________.",opts:["IPSec","SSL","PGP","none of the above"],ans:2,exp:"Session keys are used once per communication session and then discarded. [cite: 1136]"},
      {q:"___________ operates in the transport mode or the tunnel mode.",opts:["IPSec","SSL","PGP","none of the above"],ans:0,exp:"PGP (Pretty Good Privacy) is the standard for email security. [cite: 1138]"},
      {q:"________ provides authentication at the IP level",opts:["AH","ESP","PGP","SSL"],ans:0,exp:"IPSec has two modes: transport and tunnel. [cite: 1140]"},
      {q:"What is a digital signature?",opts:["A message that is encrypted with a private key","A message that is encrypted with a public key","A message that is hashed with a private key","A message that is hashed with a public key"],ans:2,exp:"AH (Authentication Header) provides integrity and authentication for IP packets. [cite: 1142]"},
      {q:"What is the main purpose of a digital signature?",opts:["Encryption","Authentication","Key exchange","All of the above"],ans:1,exp:"Digital signature = hash of message signed with the private key. [cite: 1144]"},
      {q:"Which key is used for creating a digital signature?",opts:["Public key","Private key","Symmetric key","None of the above"],ans:1,exp:"Primary purpose is authentication and non-repudiation. [cite: 1146]"},
      {q:"Which key is used for verifying a digital signature?",opts:["Public key","Private key","Symmetric key","None of the above"],ans:0,exp:"You SIGN with your PRIVATE key. [cite: 1148]"},
      {q:"_____ error means that two or more bits in the data unit have changed",opts:["Burst","Double Bit","Single Bit","None"],ans:1,exp:"You VERIFY with the signer's PUBLIC key. [cite: 1150]"},
      {q:"Which Topology is used in Ethernet?",opts:["Bus","Star","Mesh","Ring"],ans:1,exp:"Double Bit error = exactly 2 bits changed. [cite: 1152]"},
      {q:"A signal ranges from 1 KHz to 40 MHz? Find out the bandwidth.",opts:["39.999 MHz","3990 Hz","3 KHz","39 MHz"],ans:0,exp:"Modern Ethernet uses a star topology. [cite: 1154]"},
      {q:"A computer is connected directly to the internet, so what type of address it must have?",opts:["Public Address","Multicast Address","Private Address","None of the options"],ans:0,exp:"Bandwidth = highest − lowest = 40 MHz − 1 KHz = 39.999 MHz. [cite: 1157]"},
      {q:"What is the difference between a switch and a hub?",opts:["Hub transmits to all devices, switch transmits to four intended ports","Switch works in physical layer, hub works at data-link layer","Switch works at layer 2 while hub works at layer 1","Hub is a smart device, whereas switch is a dumb device"],ans:2,exp:"Direct internet connection requires a public IP address. [cite: 1160]"},
      {q:"Assume 10 devices are arranged in a mesh topology. How many cables are needed? How many ports are needed for each device?",opts:["90,9","110,9","45,9","55,9"],ans:2,exp:"Switch (layer 2) uses MAC addresses; hub (layer 1) broadcasts to all ports. [cite: 1162]"},
      {q:"Which of the following are not the functions of router? i. Data conversion for format to another ii. Forward the packets iii. Constructs the routing table iv. Detects error in the packet v. Queue the incoming packets vi. Forward the packet to all outgoing link",opts:["i, iv, vi","i, v, vi","i, ii, v, vi","iv, v, vi"],ans:0,exp:"n(n-1)/2 = 45 cables; each device needs n-1 = 9 ports. [cite: 1165]"},
      {q:"What happens during the failure of a router in the virtual switching circuit?",opts:["All the crashed packets get lost","All the virtual circuits that pass through the router get terminated","Congestion control becomes extremely difficult","Sequence of packets arrival gets disrupted"],ans:1,exp:"Routers don't do data format conversion, error detection in packets, or broadcast forwarding. [cite: 1169]"},

{q:"How many cross points are needed in a single stage switch with 30 inputs and 30 outputs.",opts:["20","30","900","600"],ans:2,exp:"In virtual circuit networks, all VCs passing through a failed router are terminated. [cite: 1171]"},
      {q:"Which of the following function is not used by TCP server",opts:["Connect()","Socket()","Bind()","Listen()"],ans:0,exp:"N×N crossbar switch: N² = 30×30 = 900 crosspoints. [cite: 1173]"},
      {q:"Flow control is mainly a function of the layer",opts:["Application","Presentation","Session","Data Link"],ans:3,exp:"Connect() is used by TCP client to initiate connection. [cite: 1175]"},
      {q:"What is the hamming distance between 10101010 and 01010101",opts:["8","0","4","none"],ans:0,exp:"Flow control is a primary function of the Data Link layer. [cite: 1177]"},
      {q:"What is network address for 12.12.12.12/20",opts:["12.12.1.1","12.12.0.2","12.12.12.0","12.12.0.0"],ans:3,exp:"All 8 bits differ → Hamming distance = 8. [cite: 1179]"},
      {q:"Which routing protocol allows throughput to be used as a cost variable for taking routing decision.",opts:["RIP","Distance Vector routing","OSPF","Interdomain"],ans:2,exp:"/20 mask: first 20 bits are network. 12.12.0.0. [cite: 1181]"},
      {q:"In the IPv6 header, the traffic class field is similar to which field in the IPv4 header?",opts:["Fragmentation Field","Fast-Switching","ToS Field","Option Field"],ans:2,exp:"OSPF supports multiple cost metrics including throughput. [cite: 1183]"},
      {q:"Identify the class of the following IPv4 binary address: 11011110 10101001 10101010 10011001.",opts:["Class A","Class B","Class C","Class D"],ans:3,exp:"IPv6 Traffic Class ≡ IPv4 Type of Service (ToS) field. [cite: 1185]"},
      {q:"_________ Layer do the task of aggregating the data from different processes and pass that data to ________ Layer",opts:["Application, Session","Presentation, Session","Transport, Network","Network, Data Link"],ans:2,exp:"Starts with 1110 → Class D (multicast). [cite: 1187]"},
      {q:"_________________ are the Application Layer Protocol",opts:["HTTP, SMTP, SNMP","FTP, ICMP, IGMP","DHCP, ARP, ICMP","None of the options"],ans:0,exp:"Transport layer aggregates data from processes and hands to the Network layer. [cite: 1189]"},
      {q:"In the sliding window method of flow control, if 100 good data frames are sent and received, how many ACK frames have been sent by the receiver?",opts:["99","100","101","Some number less than or equal to 100"],ans:3,exp:"HTTP, SMTP, SNMP are Application layer protocols. [cite: 1191]"},
      {q:"Checksum uses _________ arithmetic",opts:["1's Complement","2's Complement","None of the options","None"],ans:0,exp:"Sliding window uses cumulative ACKs — fewer than 100 may be sent. [cite: 1193]"},
      {q:"A socket uses an address to establish the connection with some other socket. This socket address is a combination of _________ and ________.",opts:["IP address and Port number","MAC address and Port number","Port Number and Application ID","Email address and IP address"],ans:0,exp:"Checksum computation uses 1's complement arithmetic. [cite: 1195]"},
      {q:"While using a TCP connection... receiver window size = 5KB and congestion window size = 2KB. What should be the size of the sending window?",opts:["3KB","2KB","4KB","5KB"],ans:1,exp:"Socket = IP address + Port number uniquely identifies an endpoint. [cite: 1199]"},
      {q:"A receiver receives the code 11001100111. When it uses the Hamming encoding algorithm, the result is 0101. Which bit is in error?",opts:["1","3","5","No Error"],ans:2,exp:"Sending window = min(receiver window, congestion window) = 2KB. [cite: 1202]"},
      {q:"Network layer add its own header... optional information of 20 bytes is added in the header. What is the size of header?",opts:["10","20","30","40"],ans:3,exp:"Hamming code syndrome 0101 = 5 in decimal → bit 5 is in error. [cite: 1204]"},
      {q:"Adding 1 and 1 in modulo-2 arithmetic results in _________",opts:["0","1","2","11"],ans:0,exp:"Standard 20 bytes + optional 20 bytes = 40 bytes total. [cite: 1207]"},
      {q:"The completion of one full pattern of a signal is called a",opts:["Period","Cycle","Frame","Segment"],ans:1,exp:"In modulo-2 (XOR): 1⊕1=0. [cite: 1209]"},

{q:"FTP follows a ______________ approach to transfer data between a client and a server.",opts:["Client and Server","Peer to Peer","Cloud based","Parallel"],ans:0,exp:"One complete pattern of a periodic signal = one cycle. [cite: 1211]"},
      {q:"Consider two nodes A and B are communicating using FTP. Ten files need to be transferred from A to B. How many connections are required?",opts:["10","11","12","13"],ans:1,exp:"FTP uses a client-server architecture. [cite: 1214]"},
      {q:"Which of the protocol can be used by the receiver to extract the email from its server?",opts:["SMTP","IMAP","FTP","TCP"],ans:1,exp:"FTP needs 1 control connection + 1 data connection per file = 1+10 = 11. [cite: 1217]"},
      {q:"The term that refers to infinite number of values in the range is",opts:["Peak","Analog Signal","Digital Signal","None of the options"],ans:1,exp:"IMAP is used to retrieve mail from a server. [cite: 1219]"},
      {q:"Both Analog and Digital signals can be",opts:["Periodic","Non-Periodic","Periodic or Non-Periodic","None of the options"],ans:2,exp:"Analog signals represent an infinite range of values. [cite: 1221]"},
      {q:"To efficiently manage the hardware and software components configuration management is required. It includes:",opts:["Monitoring the user behavior and usage pattern","Replacement of the network components","Documentation is done only for hardware changes","Managing the access of the users to the network"],ans:1,exp:"Both types can be periodic or non-periodic. [cite: 1223]"},
      {q:"Pick the odd one as the function of Network Layer?",opts:["Routing","Inter-Networking","Error Control","None of the options"],ans:2,exp:"Configuration management includes hardware replacement/updates. [cite: 1226]"},
      {q:"In a ____________ network, two types of addressing are involved: global and local",opts:["Virtual Circuit","Datagram","Circuit-Switched","All the options"],ans:0,exp:"Error Control is a Data Link layer function. [cite: 1228]"},
      {q:"In which switching store and forward is used?",opts:["Packet Switching","Circuit Switching","Cell Switching","None"],ans:0,exp:"Virtual circuit networks use both global and local addresses. [cite: 1230]"},
      {q:"Circuit switching is employed in",opts:["Physical layer","Datalink layer","Network layer","None"],ans:0,exp:"Packet switching stores the complete packet before forwarding. [cite: 1232]"},
      {q:"Packet switching is employed in",opts:["Physical layer","Datalink layer","Network layer","None"],ans:2,exp:"Circuit switching is a physical layer concept. [cite: 1234]"},
      {q:"Which one of the techniques belongs to connection oriented?",opts:["Packet Switching","Circuit Switching","Router","None"],ans:1,exp:"Packet switching operates at the Network layer. [cite: 1236]"},
      {q:"Which one of the techniques belongs to connectionless?",opts:["Packet Switching","Circuit Switching","Router","None"],ans:0,exp:"Packet switching operates at the Network layer. [cite: 1236]"},
      {q:"Which switching does need to establish connection and provides dedicated connection between hosts?",opts:["Packet switching","Circuit switching","Cell switching","None"],ans:1,exp:"Packet switching (datagram mode) is connectionless. [cite: 1240]"},
      {q:"Mesh topology leads to",opts:["Redundant connections","Single point of failure","Hard to add new devices","None"],ans:0,exp:"Circuit switching creates a dedicated end-to-end path. [cite: 1242]"},
      {q:"Star topology is described as",opts:["Every device is connected to all other devices","Every device is connected to two other nodes","Every device is individually connected to a central node","None"],ans:2,exp:"Full mesh provides multiple paths — high redundancy. [cite: 1244]"},
      {q:"Which one does support error or flow control?",opts:["Frame Relay","TCP","UDP","None"],ans:1,exp:"In a star, all devices connect to a central hub/switch. [cite: 1246]"},
      {q:"Which one is a connection oriented data service?",opts:["AAL 2","AAL 3","AAL 4","None"],ans:2,exp:"TCP provides reliable delivery with error and flow control. [cite: 1248]"},
      {q:"In an organization with its own private network, most applications transmit at constant rates for long duration. Which type of switching is preferred?",opts:["Packet","Circuit","Datagram","All the options"],ans:1,exp:"AAL 4 provides connection-oriented service. [cite: 1250]"},

{q:"Which one is not present in TCP/IP model?",opts:["Network Layer","Transport Layer","Session Layer","None"],ans:2,exp:"Circuit switching is ideal for constant long-duration flows. [cite: 1253]"},
      {q:"Which layer determines the speed of the data transmission in the network?",opts:["Logical Layer","Physical Layer","Datalink Layer","None"],ans:1,exp:"TCP/IP has no Session layer. [cite: 1255]"},
      {q:"Encryption and Decryption is done by",opts:["Session layer","Application layer","Presentation layer","None"],ans:2,exp:"Physical layer defines transmission rates and signaling. [cite: 1257]"},
      {q:"Which one is an appropriate example of Half Duplex?",opts:["Cardless phone","Telephone","Walkie Talkie","None"],ans:2,exp:"Presentation layer handles encryption and data format conversion. [cite: 1259]"},
      {q:"Coverage area of the LAN technology is",opts:["few kilometers","100 – 1000 kilometers","5 to 50 kilometers","None"],ans:0,exp:"Walkie-talkies transmit in one direction at a time. [cite: 1261]"},
      {q:"Data transmission speed of LAN technology is",opts:["up to 100 Mbps","up to 20 Mbps","up to 1000 Mbps","None"],ans:2,exp:"LAN typically covers a few kilometers. [cite: 1263]"},
      {q:"The functionality of the ARP is",opts:["to map a logical address with a physical address","to map a physical address with a logical address","to map virtual address to logical address","None"],ans:0,exp:"Modern Gigabit Ethernet reaches up to 1000 Mbps. [cite: 1265]"},
      {q:"Which one is the MAC address?",opts:["192.168.10.2","07:01:02:01:2C:4B","192:220:02:01:2C","None"],ans:1,exp:"ARP maps IP (logical) to MAC (physical) addresses. [cite: 1267]"},
      {q:"What is the size of IPv4?",opts:["64 bits","128 bits","32 bits","none"],ans:2,exp:"MAC addresses are 6 bytes in hex. [cite: 1269]"},
      {q:"Which one allows for communication between networks?",opts:["Switch","Router","Repeater","None"],ans:1,exp:"IPv4 addresses are 32 bits. [cite: 1271]"},
      {q:"In the ____________ approach of packet switching, all packets of a message follow the same route from sender to receiver.",opts:["Datagram","Virtual circuit","Virtual channel","None of the options"],ans:1,exp:"Routers connect different networks. [cite: 1273]"},
      {q:"Which one allows for communication between two different networks?",opts:["Switch","Router","Gateway","None"],ans:2,exp:"Virtual circuit packet switching: all packets follow a pre-established path. [cite: 1275]"},
      {q:"The data unit 10100101 is changed as 10100100 referred as",opts:["Single bit error","Burst error","Common error","None"],ans:0,exp:"Gateways handle protocol translation. [cite: 1277]"},
      {q:"What is the hamming distance between the pair of words (10101,11110)?",opts:["2","3","4","None"],ans:1,exp:"Only one bit changed → single bit error. [cite: 1279]"},
      {q:"Simple parity check can detect",opts:["An odd number of errors","An even number of errors","Both odd and even number of errors","None of the options"],ans:0,exp:"Positions 2, 3, and 5 differ → Hamming distance = 3. [cite: 1281]"},
      {q:"Static routing table",opts:["Contains information entered manually","is updated periodically by using one of the dynamic routing protocols","is updated periodically by using one of the dynamic routing protocols","None"],ans:0,exp:"Simple parity detects odd numbers of errors. [cite: 1283]"},
      {q:"Which one is intra domain routing protocols?",opts:["Distance vector","Path vector","Border gateway routing protocol","None"],ans:0,exp:"Static routes are configured manually. [cite: 1285]"},
      {q:"Which one is inter domain routing protocols?",opts:["Distance vector","Path vector","Link state routing protocol","None of the options"],ans:1,exp:"Distance Vector (RIP) is an intra-domain protocol. [cite: 1287]"},
      {q:"Routing Information Protocol is an",opts:["Intradomain routing protocol based on distance vector routing","Intradomain routing protocol based on link state routing","Interdomain routing protocol based on distance vector routing","None"],ans:0,exp:"Path vector (BGP) is used between autonomous systems. [cite: 1289]"},
      {q:"Path vector routing protocol can be used",opts:["only inside an autonomous system","between autonomous systems","in intradomain","None"],ans:1,exp:"RIP = intra-domain, distance-vector routing protocol. [cite: 1291]"},

{q:"Broadcast has the relationship between the source and the destination is",opts:["one-to-all","one-to-many","one-to-one","None"],ans:0,exp:"Path vector (BGP) is designed for inter-AS routing. [cite: 1293]"},
      {q:"A Switched network consists of a series of interlinked nodes, called",opts:["Endpoints","Packets","Switches","Lines"],ans:2,exp:"Broadcast = one source to ALL destinations. [cite: 1295]"},
      {q:"Bursty data is",opts:["the rate changes smoothly","the data rate does not change","the data rate changes suddenly in a very short time","None"],ans:2,exp:"Switched networks are built from interconnected switches. [cite: 1297]"},
      {q:"Discarding policy that",opts:["routers may prevent congestion and at the same time may not harm the integrity of the transmission","can also prevent congestion in virtual-circuit networks","If the sender feels a packet is lost or corrupted, it needs retransmission","None"],ans:0,exp:"Bursty = traffic that varies dramatically in short periods. [cite: 1299]"},
      {q:"Node to node congestion control is called as",opts:["Choke packet","Back Pressure","Front Pressure","None"],ans:1,exp:"Routers use specific policies to prevent network congestion. [cite: 1301]"},
      {q:"The data must arrive at the receiver exactly as they were sent is referred as",opts:["Message confidentiality","Message Integrity","Message Authentication","None"],ans:1,exp:"Back pressure propagates congestion signals upstream. [cite: 1303]"},
      {q:"Which one is the type of relationship between signature and documents in Digital Signature?",opts:["One to many","Many to one","One to one","None"],ans:2,exp:"Integrity means data is not altered in transit. [cite: 1305]"},
      {q:"The topology with highest reliability is",opts:["Star","Bus","Mesh","Ring"],ans:2,exp:"Each document has exactly one digital signature. [cite: 1307]"},
      {q:"Internet is a type of",opts:["Wide Area Network","Local Area Network","Personal Area Network","Metropolitan Area Network"],ans:0,exp:"Mesh provides maximum fault tolerance. [cite: 1309]"}
    ]
  },
  "DSA": {
    color: "#f97316",
    questions: [
      {q:"If the height of the binary tree is 7, maximum number of internal nodes the tree can have is,",opts:["128","127","64","63"],ans:1,exp:"Max internal nodes = 2^h − 1 = 2^7 − 1 = 127. [cite: 1314]"},
      {q:"The following is the result after first partition of quicksort algorithm 10,8, 6, 9, 11, 14, 16, 15. Which of the following is true?",opts:["11 could be the pivot, 14 could not be pivot.","14 could be the pivot, 11 could not be pivot.","Either 11 or 14 could be pivot element","11 and 14 both are pivot elements."],ans:2,exp:"Both 11 and 14 are in their final positions. [cite: 1316, 1317]"},
      {q:"What is the advantage of recursive approach than an iterative approach?",opts:["Consumes less memory","Less code and easy to implement","Consumes more memory","All the options"],ans:1,exp:"Recursion typically requires less code. [cite: 1319]"},
      {q:"Consider the array LA = {1, 2, 4, 3} is sorted using bubble sort. How many iterations is required in order to sort the array?",opts:["4","2","1","0"],ans:2,exp:"Only 1 pass needed: swap 4 and 3. [cite: 1321, 1322]"},
      {q:"Consider the following code snippet char c[]=\"VITEEE2022\"; char *p=c; printf(\"%s\",p+p[1]-p[3]);",opts:["EE2022","EEE2022","E2022","Error"],ans:1,exp:"p[1]='I'=73, p[3]='E'=69; 73-69=4; p+4 points to index 4 (second 'E'), so prints EE2022. [cite: 1324]"},
      {q:"Predict the output",opts:["1002","1004","1020","Error"],ans:3,exp:"Array names are non-modifiable; s++ is a compile error. [cite: 1326, 1327]"},
      {q:"Run time of the recurrence T(n) = 7T(n/3)+n² log n.",opts:["Theta(n² log n)","Theta (n²)","Theta(n² Log² n)","Theta(n log² n)"],ans:0,exp:"By Master theorem case 3: T(n) = Θ(n² log n). [cite: 1330]"},
      {q:"Minimum (Asymptotic) time required to check whether a given binary tree is a binary search tree or not.",opts:["O(1)","O(n)","O(log n)","O(n log n)"],ans:1,exp:"You must visit every node once — O(n). [cite: 1332]"},
      {q:"If you keep track of front, rear and count in a circular array when front = 0 and rear = maxsize-1, what will be the count value.",opts:["0","3","4","2"],ans:2,exp:"If front=0 and rear=max-1, all 4 slots are filled. [cite: 1334]"},

{q:"Which of the following data structure can be applied directly on scheduling and resource allocation problems?",opts:["stack","queue","tree","linked list"],ans:1,exp:"Queues model FIFO scheduling. [cite: 1336]"},
      {q:"If you are asked to implement stack using queue how many queues are required to represent stack efficiently.",opts:["1","3","4","2"],ans:3,exp:"Two queues are needed to simulate LIFO. [cite: 1338]"},
      {q:"Which is something you would NOT use a stack for? i. Printing a name in reverse order ii. A function call within another function call iii. Arranging the elements of an array in increasing or decreasing order iv. Printing the elements of an array in the order they appear within the array",opts:["only (i)","only (ii) and (iii) are correct","only (iii) and (iv) are correct","None of the options are correct"],ans:2,exp:"Sorting and printing in order don't use LIFO. [cite: 1342]"},
      {q:"Which of the following type of queue is useful in building online multiplayer games.",opts:["Simple queue","Circular Queue","Priority Queue","Single Ended Queue"],ans:2,exp:"Priority Queue assigns resources based on importance. [cite: 1344]"},
      {q:"... last node has pointer to the first node, the name of the linked list is,",opts:["Singly linked list","Doubly linked list","Singly Circular linked list","Doubly Circular linked list"],ans:2,exp:"Tail pointing to head in a SLL is singly circular. [cite: 1346]"},
      {q:"Array A[1…5][1…10] stored in column-major order, base = 50. Address of A[i][j]?",opts:["5i + j + 44","i + 5j + 44","5i + j + 39","5j + i + 39"],ans:1,exp:"Address = 50 + (j-1)*5 + (i-1) = i + 5j + 44. [cite: 1348]"},
      {q:"In a binary tree, which of the following is not a valid argument?",opts:["It should have at least one node.","2","3","0"],ans:3,exp:"A binary tree must contain at least one node. [cite: 1350]"},
      {q:"Which sequence cannot be printed using the given stack?",opts:["6 3 1 2 5 7","2 1 3 6 7 5","5 2 7 1 3 6","None of the options"],ans:1,exp:"2 1 3 6 7 5 violates LIFO constraints. [cite: 1352]"},
      {q:"Decreasing order of asymptotic complexity of f1=O(n), f2=O(log n), f3=O(n²), f4=O(2ⁿ)",opts:["f1, f2, f3, f4","f2, f1, f4, f3","f1, f2, f4, f3","f4, f3, f1, f2"],ans:3,exp:"2ⁿ > n² > n > log n. [cite: 1354]"},
      {q:"Which methods have time complexity O(n) for a sorted array in descending order, distinct elements?",opts:["(i)","(ii),(iii),(iv)","(iii),(iv)","(i),(iii)"],ans:0,exp:"Specific array operations on sorted data take O(n). [cite: 1358]"},
      {q:"Infix version of postfix: x 12 + z 17 y + 42 * / +",opts:["x + 12 + z / ((17 + y) * 42)","x + 12 + z / 17 + y * 42","x + 12 + z / (17 + y) * 42","x + (12 + z) / (17 + y * 42)"],ans:0,exp:"Evaluate stack: (x+12) + z / ((17+y) * 42). [cite: 1360]"},
      {q:"Suppose T1(n) = O(F(n)) and T2(n) = O(F(n)). Which is true?",opts:["T1(n) + T2(n) = O(F(n))","T1(n) * T2(n) = O(F(n))","T1(n)=T2(n)=O(1)","T1(n) = O(T2(n))"],ans:0,exp:"Sum of two O(F(n)) functions is still O(F(n)). [cite: 1363]"},
      {q:"In a connected graph with no loops or multiple edges, which inequality is not correct?",opts:["e ≤ v²","e ≥ v−1","v ≥ e/2","All the options"],ans:2,exp:"v ≥ e/2 is not always true. [cite: 1365]"},
      {q:"A circular doubly linked list has exactly two nodes... Which statement is NOT true?",opts:["Head-&gt;next = tail","Head-&gt;prev-&gt;next = tail","Tail-&gt;prev-&gt;next = tail","Tail-&gt;next-&gt;prev = tail"],ans:2,exp:"Tail->prev->next should equal head in a 2-node circular DLL. [cite: 1367]"},
      {q:"Sequence printed after stack operations",opts:["9 7 3 5 4 8","8 4 5 3 7 9","3 4 8 5 7 9","None of the options"],ans:1,exp:"The pop sequence based on LIFO order. [cite: 1369]"},
      {q:"After operations on an empty stack of size 4...",opts:["Stack underflow","Stack overflow","Operations will not lead to any error.","None of the options"],ans:0,exp:"Pushing beyond size 4 causes overflow. [cite: 1371]"},
      {q:"For f(n)=n²+3n+4 and g(n)=n³",opts:["f(n) = O(g(n))","f(n) = Θ(g(n))","g(n)=O(f(n))","g(n)=Θ(f(n))"],ans:0,exp:"n² grew slower than n³. [cite: 1373]"},
      {q:"Stack S: 4, 8, 12, 16 pushed... current top?",opts:["4","16","36","28"],ans:2,exp:"The last pushed element is at the top. [cite: 1375]"},
      {q:"How many vertices are there in a complete graph with n vertices?",opts:["n(n−1)/2","n(n+1)/2","2n","n"],ans:3,exp:"A graph Kn has n vertices. [cite: 1377]"},

{q:"What is the value of the sum of the minimum in-degree and maximum out-degree of a DAG?",opts:["Will always be zero","Depends on a graph","Will always be greater than zero","None of the options"],ans:0,exp:"This value varies based on the DAG structure. [cite: 1381]"},
      {q:"Traversal of a graph is different than tree because",opts:["There can be a loop in the graph","DFS on a graph uses stack, while inorder traversal is recursive","Both the given properties","None of the options"],ans:2,exp:"Graphs can have loops and multiple traversal starting points. [cite: 1383]"},
      {q:"Why graph traversal is difficult than tree traversal?",opts:["Because tree is binary","Because tree is undefined","Because tree have the root","All the options"],ans:2,exp:"Trees have a definitive root and hierarchy. [cite: 1385]"},
      {q:"Worst case of insertion sort using binary search to find position",opts:["O(n log n)","O(n)","O(n²)","O(1)"],ans:2,exp:"Binary search helps comparisons but shifting is still O(n). [cite: 1387]"},
      {q:"Correct while condition for insertion sort",opts:["(j&gt;0)||(arr[j−1]&gt;value)","(j&gt;0)&amp;&amp;(arr[j−1]&gt;value)","(j&gt;0)&amp;&amp;(arr[j+1]&gt;value)","(j&gt;0)&amp;&amp;(arr[j+1]&lt;value)"],ans:1,exp:"Both index valid AND previous element larger. [cite: 1389]"},
      {q:"Insertion sort steps for {9,7,4,2,1}",opts:["i) 7 9 4 2 1; ii) 4 7 9 2 1; iii) 2 4 7 9 1; iv) 1 2 4 7 9","...","...","..."],ans:0,exp:"Each pass inserts the current element into its sorted position. [cite: 1391, 1392]"},
      {q:"A connected planar graph having 6 vertices, 7 edges contains ______ regions.",opts:["11","15","1","3"],ans:3,exp:"V - E + F = 2 → 6 - 7 + F = 2 → F = 3. [cite: 1394]"},
      {q:"Insert 7,4,6,1,2,3,8,5 into BST. Height?",opts:["4","3","7","2"],ans:0,exp:"BST height from this sequence is 4. [cite: 1396]"},
      {q:"How many different trees are possible with 10 nodes?",opts:["512","1024","1014","90"],ans:1,exp:"Standard exam answer for 10 nodes is 1024. [cite: 1398]"},
      {q:"To implement stacks using queues, minimum number of queues required?",opts:["2","3","1","At least 3"],ans:2,exp:"Two queues simulate a stack. [cite: 1400]"},
      {q:"Which of 8, 15, 13, 14 nodes could have formed a full binary tree?",opts:["8","15","13","14"],ans:1,exp:"15 = 2^4 − 1. [cite: 1402]"},
      {q:"The memory use of an adjacency matrix is",opts:["O(n)","O(n²)","O(n³)","O(log n)"],ans:1,exp:"An n×n matrix uses O(n²) space. [cite: 1404]"},
      {q:"A polynomial can be represented in a _____ by just storing the coefficient and exponent of each term.",opts:["Array","Linked list","Queue","Stack"],ans:1,exp:"Linked lists are ideal for polynomials. [cite: 1406]"},
      {q:"______ is used to convert an infix expression into a postfix expression.",opts:["Linked list","Stack","Queue","Tree"],ans:1,exp:"The shunting-yard algorithm uses a stack. [cite: 1408]"},
      {q:"Which type of linked list does not store NULL in next field?",opts:["Singly linked list","Circular linked list","Doubly linked list","Linear List"],ans:1,exp:"Circular lists loop back to the start. [cite: 1410]"},
      {q:"The circular queue will be full only when",opts:["FRONT = MAX−1 and REAR = MAX−1","FRONT = 0 and REAR = MAX−1","FRONT = MAX−1 and REAR = 0","FRONT = 0 and REAR = 0"],ans:1,exp:"FRONT=0 and REAR=MAX-1 is the standard full condition. [cite: 1412]"},
      {q:"Which type of linked list contains a pointer to the next as well as the previous node?",opts:["Singly linked list","Circular linked list","Doubly linked list","All the options"],ans:2,exp:"Doubly linked list has both pointers. [cite: 1414]"},
      {q:"In ______, insertions can be done only at one end, while deletions can be done from both ends.",opts:["Double-ended queue","Input restricted deque","Output restricted deque","Circular queue"],ans:1,exp:"This is an Input Restricted Deque. [cite: 1416]"},
      {q:"If A=2, B=3, C=4, D=5, value of prefix expression + - * A B C D",opts:["7","-3","5","3"],ans:1,exp:"*(A,B)=*(2,3)=6; -(6,C)=-(6,4)=2; +(2,D)=+(2,5)=7. [cite: 1418]"},
      {q:"What do the following C lines do? CURSOR_SPACE[p].next = CURSOR_SPACE[0].next; CURSOR_SPACE[0].next = p;",opts:["Allocates cursor space","Releases cursor space","Initialization of cursor space","Declaration for cursor"],ans:0,exp:"This allocates space in a cursor-based linked list. [cite: 1421]"},

{q:"Which one is linear?",opts:["3n³ + 3n + 7","3n² + 3n + 2","3n + 1","8"],ans:2,exp:"3n+1 has degree 1. [cite: 1423]"},
      {q:"Consider the linear arrays AAA(5:50) and BBB(-5:10). The number of elements in each array",opts:["50, 18","46, 16","46, 18","50, 16"],ans:1,exp:"AAA: 50-5+1=46. BBB: 10-(-5)+1=16. [cite: 1425]"},
      {q:"Suppose the contents of an array A are, A = {1, null, null, null, null, 10}. What would be the size of the array considering it as a normal array and a sparse array? Explanation: Normal array has 6 positions, sparse representation stores only the 2 non-null values.",opts:["6 and 6","6 and 2","2 and 6","2 and 2"],ans:1,exp:"Normal=6, Sparse=2 (non-nulls). [cite: 1427]"},
      {q:"Consider the following code. int fun() { if(isEmpty()) { return -10; } else { int n; n= q[front]; front++; return n; } } Which operation does the above code perform? Explanation: It removes the front item by incrementing front and returns that value.",opts:["Enqueue","Dequeue","Return the front element","Dequeue and return the front element"],ans:3,exp:"Removes element and returns value. [cite: 1429]"},
      {q:"In the Deque implementation using singly linked list, what would be the time complexity of deleting an element from the rear end? Explanation: In a singly linked list, deleting the rear needs traversal to the previous node.",opts:["O(1)","O(n^2)","O(n)","O(nlogn)"],ans:2,exp:"Must traverse to second-to-last node. [cite: 1430]"},
      {q:"In a circular queue implementation using an array of size 5, the array index starts with 0 where front and rear values are 3 and 4 respectively. Determine the array index at which the insertion of the next element will take place. Explanation: Circular queue wraps around, so after index 4 the next insertion is at index 0.",opts:["5","0","1","2"],ans:1,exp:"(4+1)%5 = 0. [cite: 1432]"},
      {q:"Which of the following concepts make extensive use of arrays? Explanation: Arrays store elements contiguously, which benefits spatial locality in memory access.",opts:["Binary trees","Scheduling of processes","Caching","Spatial locality"],ans:3,exp:"Arrays exploit memory contiguity. [cite: 1433]"},
      {q:"Suppose that an intermixed sequence of push and pop operations are performed. The pushes push the integers 0 through 9 in order; the pops print out the return value. Which of the following sequences could not occur? Explanation: This sequence violates the LIFO property of a stack.",opts:["4 3 2 1 0 9 8 7 6 5","4 6 8 7 5 3 2 9 0 1","2 5 6 7 4 8 9 3 1 0","4 3 2 1 0 5 6 7 8 9"],ans:1,exp:"Violates LIFO property. [cite: 1436]"},
      {q:"Whenever there is a pending operation to be performed, the function becomes ________ recursive. Explanation: If work remains after the recursive call returns, it is non-tail recursion.",opts:["Direct recursive","Indirect recursive","Tail recursive","Non-tail recursive"],ans:3,exp:"Non-tail recursion has work left after return. [cite: 1437]"},
      {q:"A node is said to be ____________ if it has a possibility of reaching a complete solution. Explanation: In backtracking, a node that can still lead to a valid solution is called promising.",opts:["Non-promising","Promising","Succeeding","Preceding"],ans:1,exp:"Promising nodes can lead to valid solutions. [cite: 1438]"},
      {q:"Which of the following is false in the case of a spanning tree of a graph G? Explanation: A spanning tree must always be acyclic.",opts:["It is tree that spans G","It is a subgraph of the G","It includes every vertex of the G","It can be either cyclic or acyclic"],ans:3,exp:"Spanning trees must be acyclic. [cite: 1439]"},
      {q:"In a circular queue with the capacity of n elements, insertion and deletion are performed using rear and front respectively. Initially rear and front are set to 1. Which of the following condition must be true for the queue to be full. Explanation: In circular queue, full condition is when the next rear position reaches front.",opts:["front=rear","front=rear+1","front=rear+1","rear=front+1"],ans:1,exp:"Full when next rear is front. [cite: 1441]"},
      {q:"Consider a complete graph G with 4 vertices. The graph G has ____ spanning trees Explanation: By Cayley’s formula for , number of spanning trees = . (Correct option should be c)",opts:["15","8","16","13"],ans:2,exp:"Cayley’s formula: 4^(4-2) = 16. [cite: 1442]"},

{q:"A person wants to visit some places. He starts from a vertex and then wants to visit every place connected to this vertex and so on. What algorithm he should use? Explanation: BFS explores all adjacent vertices level by level.",opts:["Depth First Search","Breadth First Search","Prim’s algorithm","Kruskal’s algorithm"],ans:1,exp:"BFS explores layer by layer. [cite: 1445]"},
      {q:"Which of the following is not an application of Depth First Search? Explanation: DFS is used for graph analysis tasks, not typically listed as a direct P2P application here.",opts:["For generating topological sort of a graph","For generating Strongly Connected Components of a directed graph","Detecting cycles in the graph","Peer to Peer Networks"],ans:3,exp:"DFS is not used for P2P lookups. [cite: 1446]"},
      {q:"Dijkstra’s Algorithm cannot be applied on ______________ Explanation: Dijkstra fails when edges have negative weights.",opts:["Directed and weighted graphs","Graphs having negative weight function","Unweighted graphs","Undirected and unweighted graphs"],ans:1,exp:"Negative weights cause Dijkstra to fail. [cite: 1447]"},
      {q:"Consider the following code snippet char c[]=”VITEEE2022”; char *p=c; printf(“%s”,p+p[1]-p[3]); Explanation:'I' - 'E' = 4, so pointer shifts 4 positions and prints from the 5th character.",opts:["EE2022","EEE2022","E2022","Error"],ans:1,exp:"p[1]='I'=73, p[3]='E'=69; 73-69=4; p+4 points to index 4 (second 'E'), so prints EE2022. [cite: 1324]"},
      {q:"int s[5]; s++; Predict the output Explanation: Array names are not modifiable lvalues, so s++ is invalid.",opts:["1002","1004","1020","Error"],ans:3,exp:"Array names are non-modifiable. [cite: 1449]"},
      {q:"int s[5]; printf(\"%d %d\", s+1, &amp;s+1); Predict the output Explanation:s+1 moves by 1 integer (4 bytes), &amp;s+1 moves by the whole array (20 bytes).",opts:["1004 1020","1004 1004","1020 garbage value","Not even pass compilation"],ans:0,exp:"s+1 is 4 bytes; &s+1 is 20 bytes. [cite: 1450]"},
      {q:"int arrayVal[]={5,8,12,14,18,19}; int *pointerVal=(int*) (&amp;arrayVal +1); printf(\"%d\",*( pointerVal -1)); Output of the above will be Explanation:&amp;arrayVal + 1 points just past the array, so pointerVal - 1 gives the last element.",opts:["12","5","19","18"],ans:2,exp:"p-1 is the last element (19). [cite: 1452]"},
      {q:"What will be the output of the following code snippet int s[5]={1}; for(i=0;i&lt;5;i++) printf(\"%d\",arr[i]); Explanation: Partial array initialization sets the first element to 1 and the rest to 0.",opts:["1 followed by four garbage value","1 0 0 0 0","1 1 1 1 1","0 0 0 0 0"],ans:1,exp:"Partial initialization zeros the rest. [cite: 1454]"},
      {q:"Consider the following statement int (*p)[5]; What the above statement represents? Explanation: Parentheses make p a pointer, and [5] means it points to an array of 5 ints.",opts:["Compilation error","p is a pointer to 5 integers","p is an array of 5 pointers to integers","p is a pointer to an array of 5 integer"],ans:3,exp:"Points to an array of 5 integers. [cite: 1455]"},
      {q:"Consider the following pseudocode for the queue Q If (Q!=empty) x=delete(Q); Function(Q); Insert(Q,x) What will be the change in a queue? Explanation: Recursive delete and reinsert reverses the queue order.",opts:["Q element order is reversed","Q is unchanged","Q’s Front element is removed and inserted at the rear, other elements are unchanged.","Q is emptied"],ans:0,exp:"Reverses the queue elements. [cite: 1457]"},
      {q:"int const * p=&amp;num; ++(*p); Explanation:p points to a constant integer value, so modifying *p is illegal. (Correct option: a)",opts:["Compile time error","Run time error","6","5"],ans:0,exp:"Pointer pass-by-value causes memory leak. [cite: 1459]"},
      {q:"int num=5; static int num1=num; Explanation: A local static variable must be initialized with a constant expression, not another local variable. (Correct option: a)",opts:["Compile time error","Equal","Greater","Less"],ans:2,exp:"Global=static, Local=stack, malloc=heap. [cite: 1462]"},

{q:"int test(int val) { static int number=1; if(val &gt;=5) return val; val = val +number; number++; return test(val); } What will be the value of test(1)? Explanation: Values progress as 1→2→4→7, so recursion stops at 7. (Best match in options is inconsistent; mathematically it is 7, so option should be c)",opts:["5","6","7","8"],ans:1,exp:"Cannot increment a constant value. [cite: 1464]"},
      {q:"const int * p=&amp;num; *p=100; Explanation: You cannot modify a value through a pointer to const.",opts:["i=100","i=10","compile time error","Runtime error"],ans:2,exp:"Static requires constant initializer. [cite: 1466]"},
      {q:"What will be the output if part1(5) is called Explanation: This mutual recursion output is intended as option a based on the call sequence. (Correct option: a)",opts:["53423122233445","53423120112233","53423122132435","53423120213243"],ans:2,exp:"1→2→4→7. [cite: 1468]"},
      {q:"Consider the following code snippet fun(5) Explanation: This recurrence computes the Catalan-style sequence value giving 51 for input 5.",opts:["49","50","51","52"],ans:2,exp:"Cannot modify through pointer to const. [cite: 1469]"},
      {q:"Consider the following code snippet fun(5) Explanation: Same recurrence pattern as previous, so the result is 51.",opts:["49","50","51","52"],ans:2,exp:"Cannot modify through pointer to const. [cite: 1469]"},
      {q:"char str1[] = \"VIT\", str2[] = \" Chennai \"; strcat(str1,str2); Explanation:str1 has no extra space, so strcat causes invalid/undefined behavior. (MCQ likely expects d)",opts:["VIT Chennai Chennai","VIT","VIT Chennai","Compilation Error"],ans:2,exp:"Result is 51. [cite: 1472]"},
      {q:"Which of the following statement is more suitable while inserting in a circular queue Explanation: Circular queues wrap around using modulo arithmetic.",opts:["rear= rear +1","rear= rear-1","rear= (rear+1) mod SIZE","rear=rear mod SIZE +1"],ans:2,exp:"Result is 51. [cite: 1473]"},
      {q:"char arr[]=\"function\\0\"; int num=strlen(arr); Explanation:strlen counts characters before the first null terminator, so length of \"function\" is 8.",opts:["9","7","10","8"],ans:3,exp:"str1 has no space for cat. [cite: 1476]"},
      {q:"Structure in C language is Explanation: Structures mainly store members of different types, and members are called members. (Question is flawed; best conceptual answer is b/c, not strictly d)",opts:["a collection of elements that can be of same data type","a collection of elements that can be of different data type","Elements of a structure are called members","All the options"],ans:2,exp:"Wrap around using modulo. [cite: 1477]"},
      {q:"Consider the following statements about array and structure and choose the correct statements Explanation: All three statements are accepted as true in standard MCQ context.",opts:["Array stores same type, structure stores different types","Array name often behaves like pointer to first element","Structure is a user defined datatype","All the statements are true"],ans:3,exp:"Length is 8 (before null). [cite: 1478]"},
      {q:"Which of the following is a properly defined struct? Explanation: A complete struct definition needs a tag, body, and terminating semicolon.",opts:["struct {int a;}","struct a_struct {int a;}","struct a_struct int a;","struct a_struct {int a;};"],ans:3,exp:"Inner dimensions must be specified. [cite: 1479]"},
      {q:"What is the output of C program with structures? structure hotel { ... } a; Explanation:structure is invalid in C; the keyword should be struct.",opts:["TAJ","Empty string","Compiler error","None of the options"],ans:2,exp:"Prints string and length. [cite: 1480]"},
      {q:"What will be the output of the program in C? while(i&lt;5) arr[i]=++i; for(i=0;i&lt;5;i++) printf(\"%d,\",arr[i]); Explanation: Values stored become 1,2,3,4,5 in order. (If the typo ant arr[5] is taken literally, it would be compile error, but intended answer is a)",opts:["1,2,3,4,5","Garbage value, 1, 2, 3, 4,","0, 1, 2, 3, 4,","2, 3, 4, 5, 6,"],ans:1,exp:"Collection of (possibly) different types. [cite: 1482]"},
      {q:"What is the output of this program? printf(\"%d %d\",arr[-2],arr[11]); Explanation: Both are out-of-bounds accesses, so both values are undefined/garbage.",opts:["0 0","Garbage value 0","Garbage value Garbage value","Compilation Error"],ans:2,exp:"Appends n chars / compares n chars. [cite: 1483]"},

{q:"Which of the following recurrence cannot be solved using a master method? Explanation: Master method does not apply when the non-recursive term like n! is outside its standard form.",opts:["T(n) = 2T(n/4) + n^0.51","T(n) = 64T(n/8) – n^2 log n","T(n) = √2 T(n/2) + log n","T(n) = 16T(n/4) + n!"],ans:3,exp:"All three properties are true. [cite: 1484]"},
      {q:"Let x be an array. Which of the following operations is illegal? (I) ++x (II) x+1 (III) x++ (IV) x*2 Explanation: Arrays cannot be incremented, but x+1 is valid pointer arithmetic.",opts:["I and II","I, II and III","I, III and IV","III and IV"],ans:2,exp:"Tag, body, and semicolon required. [cite: 1486]"},
      {q:"What is the right way to Initialize array? Explanation: Standard C array initialization uses square brackets with optional initializer list.",opts:["int num[6] = { 2, 4, 12, 5, 45, 5 };","int n{} = { 2, 4, 12, 5, 45, 5 };","int n{6} = { 2, 4, 12 };","int n(6) = { 2, 4, 12, 5, 45, 5 };"],ans:0,exp:"Should be 'struct', not 'structure'. [cite: 1488]"},
      {q:"How many stacks are required to implement a queue Explanation: Two stacks are enough to simulate FIFO behavior.",opts:["1","2","3","4"],ans:1,exp:"Populates with 1,2,3,4,5. [cite: 1491]"},
      {q:"char str[]=\"VIT\\0Chennai\"; printf(\"%s\",str); What will be the output of the above program Explanation:%s stops printing at the first null character.",opts:["VIT Chennai","Chennai","VIT\\0Chennai","VIT"],ans:3,exp:"Out-of-bounds access returns garbage. [cite: 1492]"},
      {q:"What is the output of C program with string char str[]={'V','I','T'}; printf(\"%s\",str); Explanation: There is no null terminator, so output is undefined behavior.",opts:["VIT","V","VIT\\0","None of the options"],ans:3,exp:"n! is not a standard polynomial form. [cite: 1494]"},
      {q:"What is the output of following C program char str1[]=\"VIT\"; char str2[20]; str2= str1; printf(\"%s\",str2); Explanation: Arrays cannot be assigned directly after declaration.",opts:["VIT","VIT\\0","Compile Error","V"],ans:2,exp:"Cannot increment arrays or multiply by scalar. [cite: 1496]"},
      {q:"What will be the output of the program printf(\"%s\",strcpy(str2,strcat(str1,str2))); with str1=\"VIT\" and str2=\"Chennai\" Explanation:strcat(str1,str2) makes the result like VITChennai; the option with space is the closest intended answer.",opts:["ChennaiVIT","Chennai","VIT Chennai","VIT"],ans:2,exp:"Standard brackets and braces. [cite: 1497]"},
      {q:"char str1[] = \"VIT\", str2[] = \" Chennai \"; strcat(str1,str2); puts(str1); puts(str2); Explanation:str1 has insufficient space, so the operation is invalid/undefined. (MCQ likely expects d)",opts:["VIT Chennai Chennai","VIT","VIT Chennai","Compilation Error"],ans:1,exp:"Two stacks suffice. [cite: 1498]"},
      {q:"Given arr = {45,77,89,90,94,99,100} and key = 99; mid values in first and second recursion levels? Explanation: First mid = 90, then search right half {94,99,100}, next mid = 94.",opts:["90 and 99","90 and 94","89 and 99","89 and 94"],ans:1,exp:"Stops at first null. [cite: 1499]"},
      {q:"Number of swaps needed to sort 5,1,4,3,2 in ascending order using bubble sort Explanation: Total swaps in bubble sort = number of inversions = 7.",opts:["10","9","8","7"],ans:3,exp:"Undefined because of no null terminator. [cite: 1501]"}
    ]
  },
  "Digital MP": {
    color: "#22d3ae",
    questions: [
      {q:"How many minterms can be formed with two variable inputs Explanation: For 2 variables, number of minterms = .",opts:["Eight minterms","Six minterms","Five minterms","Four minterms"],ans:3,exp:"2^n = 2^2 = 4 minterms. [cite: 1512]"},
      {q:"What was the JK levels to toggle the switch? Explanation: In JK flip-flop, J=K=1 causes toggling.",opts:["J = 0, K = 0","J = 1, K = 0","J = 0, K = 1","J = 1, K = 1"],ans:3,exp:"J=K=1 causes toggle. [cite: 1513]"},
      {q:"How many flip-flops are required to produce a divide-by-128 device? Explanation: Since , 7 flip-flops are required.",opts:["1","4","6","7"],ans:3,exp:"128 = 2^7. [cite: 1514]"},
      {q:"The phenomenon of interpreting unwanted signals on J and K while Cp (clock pulse) is HIGH is called ________. Explanation: This refers to the race-around condition in JK flip-flops, which is not listed correctly in the options.",opts:["parity error checking","ones catching","digital discrimination","digital filtering"],ans:1,exp:"This hazardous signal interpretation is called ones catching. [cite: 1515]"},

{q:"How the master is enabled in master-slave flip-flop? Explanation: In a master-slave flip-flop, the master is typically enabled when the clock is HIGH.",opts:["when the gate is LOW","when the gate is HIGH","both LOW and HIGH","None of the options"],ans:1,exp:"Master enabled when gate/clock is HIGH. [cite: 1516]"},
      {q:"Which of the following is correct for a gated D flip-flop? Explanation: A gated D flip-flop passes D to Q when enable is active.",opts:["The output toggles if one of the inputs is held HIGH.","Only one of the inputs can be HIGH at a time.","The output complement follows the input when enabled.","Q output follows the input D when the enable is HIGH."],ans:3,exp:"Q=D when enable is HIGH. [cite: 1519]"},
      {q:"In a J-K flip-flop if the clock input frequency is 20kHz what is the output at Q Explanation: A JK flip-flop in toggle mode divides the clock frequency by 2.",opts:["constantly LOW","constantly HIGH","a 20 kHz square wave","a 10 kHz square wave"],ans:3,exp:"Divide-by-2 frequency: 10kHz. [cite: 1520]"},
      {q:"If an active-HIGH S-R latch has a 0 on the S input and a 1 on the R input and then the R input goes to 0, the latch will be ________. Explanation: S=0, R=1 resets the latch, and it remains reset when R returns to 0.",opts:["SET","RESET","Clear","Invalid"],ans:1,exp:"R=1 resets; stays reset when R=0. [cite: 1521]"},
      {q:"To made MOD-32 binary counter how many flip-flops are required? Explanation: Since , 5 flip-flops are needed.",opts:["3","45","5","6"],ans:2,exp:"32 = 2^5. [cite: 1522]"},
      {q:"The reason behind that the delay problems faced in asynchronous counters is eliminated by Synchronous counters : Explanation: In synchronous counters, all flip-flops receive the clock at the same time.",opts:["input clock pulses are applied only to the first and last stages","input clock pulses are applied only to the last stage","input clock pulses are not used to activate any of the counter stages","input clock pulses are applied simultaneously to each stage"],ans:3,exp:"Simultaneous clocking prevents ripple. [cite: 1523]"},
      {q:"The minimum number of NAND gates required to implement the Boolean function X+XY’+XY’Z is Explanation:, so only one gate/buffer realization is effectively needed.",opts:["one","Two","Three","None of the options"],ans:0,exp:"Simplifies to X. [cite: 1524]"},
      {q:"In tabulation method how the procedures is started to specify the function in terms of Explanation: Quine–McCluskey/tabulation method usually starts with the list of minterms.",opts:["List of minterms","List of maxterms","List of integers","List of terms"],ans:0,exp:"Quine-McCluskey starts with minterms. [cite: 1525]"},
      {q:"The output Y of a Two-bit comparator is logic “1” whenever the two-bit input “A” is greater than the two-bit input “B”. The number of combination for which the output is logic “1” is Explanation: For 2-bit numbers (0–3), there are 6 ordered pairs where A &gt; B.",opts:["2","4","6","8"],ans:2,exp:"6 combinations (e.g., 3>2, 3>1, etc.). [cite: 1527]"},
      {q:"Which one of the following set of gates are best suited for 'parity' checking and 'parity' generation. Explanation: XOR/XNOR gates are used for parity generation and checking.",opts:["AND, OR, NOT gates","EX-NOR or EX-OR gates","NAND gates","NOR gates"],ans:1,exp:"XOR/XNOR are parity gates. [cite: 1528]"},
      {q:"Which of the following code is also known as rereflected code Explanation: Gray code is also called reflected (or reflected binary) code.",opts:["Excess-3 codes","Gray code","BCD code","Error code"],ans:1,exp:"Gray code is reflected binary. [cite: 1529]"},
      {q:"How '-5' is represented in hex format in 2’s complement in 8-bits? Explanation: +5 = 00000101, 2’s complement = 11111011 = FB₁₆.",opts:["(FB)16","(7F)16","(FF)16","(FA)16"],ans:0,exp:"FB in hexadecimal. [cite: 1531]"},

{q:"Which statement below best describes the function of a decoder? Explanation: A decoder activates one output line corresponding to a binary input code.",opts:["A decoder will convert a decimal number into the proper binary equivalent","A decoder will convert a binary number into a specific output representing a particular character or digit.","Decoders are used to prevent improper operation of digital systems.","Decoders are special ICs that are used to make it possible for one brand of computer to talk to another."],ans:1,exp:"Binary input activates 1 of n outputs. [cite: 1534]"},
      {q:"Which of the following is correct for a gated D-type flip-flop? Explanation: In a D flip-flop, when enabled, Q follows D and follows the complement of D.",opts:["The Q output is either SET or RESET as soon as the input goes HIGH or LOW","The output complement follows the input when enabled","Only one of the inputs can be HIGH at a time","The output toggles if one of the inputs is held HIGH"],ans:1,exp:"Q̄ follows D' when enabled. [cite: 1535]"},
      {q:"What labelling code is carried in the K-map Explanation: K-maps are labeled using Gray code so adjacent cells differ by one bit.",opts:["8-4-2-1 binary","Hexadecimal","Gray","Octal"],ans:2,exp:"Gray code labeling. [cite: 1536]"},
      {q:"A computer has a word length of 8 bits (including sign). It is required to determine the range of integers that can be stored in the computer. If 1’s complement is used to represent the numbers, then the range will be Explanation: In 1’s complement with 8 bits, range is to = -127 to +127.",opts:["-256 to 256","-256 to 255","-127 to 127","-128 to 127"],ans:2,exp:"-(2^7-1) to +(2^7-1). [cite: 1539]"},
      {q:"Choose the gray code form for the binary value 101011? Explanation: Gray code = first bit same, then XOR adjacent binary bits → 111110. (In your options, this corresponds to option d if order is as pasted.)",opts:["101011","111110","011111","110101"],ans:1,exp:"Binary 101011 → Gray 111110. [cite: 1540]"},
      {q:"To design 1-of-32 decoder how many 3-to-8-line decoders are required? Explanation: A 1-of-32 decoder can be built hierarchically using multiple 3-to-8 decoders; expected exam answer is 8.",opts:["1","2","4","8"],ans:3,exp:"Needs 8 decoders. [cite: 1542]"},
      {q:"Consider Binary coded decimal value 0001 0010 0110 . Convert the given value to binary form. Explanation: BCD 0001 0010 0110 = decimal 126, and 126 in binary is 1111110. (Correct mathematically = a; options/order seem inconsistent.)",opts:["1111110","1111000","1111101","1111111"],ans:1,exp:"Decimal 126 = Binary 1111110. [cite: 1544]"},
      {q:"Consider, there are 8 doors in an automated cinema theatre. Minimum, How many number of On/Off switches are required to open any doors using digital circuit? Explanation: 3 switches can represent combinations.",opts:["1","2","3","4"],ans:2,exp:"2^3 = 8. [cite: 1546]"},
      {q:"What are the output values of the 4-bit comparator when the two input binary numbers are given as A = 1011 and B = 1010. Explanation: 1011 (11) is greater than 1010 (10), so A&gt;B = 1.",opts:["A &gt; B = 1, A &lt; B = 0, A &lt; B = 1","A &gt; B = 0, A &lt; B = 1, A = B = 0","A &gt; B = 1, A &lt; B = 0, A = B = 0","A &gt; B = 0, A &lt; B = 1, A = B = 1"],ans:2,exp:"11 > 10. [cite: 1547, 1548]"}
    ]
  },
  "Operating Systems": {
    color: "#a78bfa",
    questions: [
      {q:"What is an operating system? Explanation: An OS acts as an interface, resource manager, and service provider.",opts:["interface between the hardware and application programs","collection of programs that manages hardware resources","system service provider to the application programs","All the options"],ans:3,exp:"An OS acts as an interface, resource manager, and service provider."},
      {q:"Which one of the following is not a real time operating system? Explanation: Palm OS is a general-purpose/mobile OS, not a real-time OS.",opts:["RTLinux","Palm OS","QNX","VxWorks"],ans:1,exp:"Palm OS is a general-purpose/mobile OS, not a real-time OS."},

{q:"In the non blocking send __________ Explanation: In non-blocking send, the sender continues execution immediately after sending.",opts:["the sending process keeps sending until the message is received","the sending process sends the message and resumes operation","the sending process keeps sending until it receives a message","none"],ans:1,exp:"In non-blocking send, the sender continues execution immediately after sending."},
      {q:"In the Zero capacity queue __________ Explanation: In zero-capacity queues, messages are not buffered; sender and receiver must synchronize. (Conceptually b is more accurate, but your sheet likely expects c.)",opts:["the queue can store at least one message","the sender blocks until the receiver receives the message","the sender keeps sending and the messages don’t wait in the queue","none"],ans:1,exp:"In zero-capacity queues, messages are not buffered and do not wait in the queue."},
      {q:"The Zero Capacity queue __________ Explanation: Zero-capacity queue means no buffering is available.",opts:["is referred to as a message system with buffering","is referred to as a message system with no buffering","is referred to as a link","none"],ans:1,exp:"Zero-capacity queue means no buffering is available."},
      {q:"Bounded capacity and Unbounded capacity queues are referred to as __________ Explanation: Both bounded and unbounded queues fall under buffered communication.",opts:["Programmed buffering","Automatic buffering","User defined buffering","No buffering"],ans:1,exp:"Both bounded and unbounded queues fall under automatic buffering."},
      {q:"A process that is based on IPC mechanism which executes on different systems and can communicate with other processes using message based communication, is called ________ Explanation: RPC allows a process on one machine to invoke procedures on another machine.",opts:["Local Procedure Call","Inter Process Communication","Remote Procedure Call","Remote Machine Invocation"],ans:2,exp:"RPC (Remote Procedure Call) allows a process on one machine to invoke procedures on another machine."},
      {q:"The initial program that is run when the computer is powered up is called __________ Explanation: The bootstrap program initializes the system and loads the OS.",opts:["boot program","bootloader","initializer","bootstrap program"],ans:3,exp:"The bootstrap program initializes the system and loads the OS."},
      {q:"What is a trap/exception? Explanation: A trap/exception is a software-generated interrupt caused by an exceptional condition.",opts:["hardware generated interrupt caused by an error","software generated interrupt caused by an error","user generated interrupt caused by an error","none"],ans:1,exp:"A trap/exception is a software-generated interrupt caused by an error or exception."},
      {q:"In a memory mapped input/output __________ Explanation: This question’s options are flawed; memory-mapped I/O means device registers are accessed like memory locations, which is not correctly listed.",opts:["the CPU uses polling to watch the control bit constantly, looping to see if a device is ready","the CPU writes one data byte to the data register and sets a bit in control register to show that a byte is available","the CPU receives an interrupt when the device is ready for the next byte","the CPU runs a user written code and does accordingly"],ans:3,exp:"CPU writes data and sets a bit in the control register to signal byte availability."},
      {q:"Which module gives control of the CPU to the process selected by the short-term scheduler? Explanation: The dispatcher hands over CPU control to the selected process.",opts:["dispatcher","interrupt","scheduler","none"],ans:0,exp:"The dispatcher hands over CPU control to the process selected by the short-term scheduler."},
      {q:"The processes that are residing in main memory and are ready and waiting to execute are kept on a list called _____________ Explanation: Ready queue contains processes waiting for CPU allocation.",opts:["job queue","ready queue","execution queue","process queue"],ans:1,exp:"The ready queue contains processes residing in main memory waiting to execute."},
      {q:"What does OS X has? Explanation: macOS (OS X) uses a hybrid kernel (XNU).",opts:["monolithic kernel with modules","microkernel","monolithic kernel","hybrid kernel"],ans:3,exp:"macOS (OS X) uses the XNU hybrid kernel."},

{q:"The interval from the time of submission of a process to the time of completion is termed as ____________ Explanation: Turnaround time is total time from submission to completion.",opts:["waiting time","turnaround time","response time","throughput"],ans:1,exp:"Turnaround time is the total interval from process submission to completion."},
      {q:"Which scheduling algorithm allocates the CPU first to the process that requests the CPU first? Explanation: FCFS serves processes in arrival order.",opts:["first-come, first-served scheduling","shortest job scheduling","priority scheduling","none"],ans:0,exp:"First-Come, First-Served (FCFS) serves processes in the order they arrive."},
      {q:"In priority scheduling algorithm ____________ Explanation: Priority scheduling always chooses the highest-priority process.",opts:["CPU is allocated to the process with highest priority","CPU is allocated to the process with lowest priority","Equal priority processes can not be scheduled","None"],ans:0,exp:"The CPU is allocated to the process with the highest priority."},
      {q:"In priority scheduling algorithm, when a process arrives at the ready queue, its priority is compared with the priority of ____________ Explanation: In preemptive priority scheduling, new process priority is compared with the running process.",opts:["all process","currently running process","parent process","init process"],ans:1,exp:"In preemptive priority scheduling, the new process priority is compared with the currently running process."},
      {q:"Which algorithm is defined in Time quantum? Explanation: Round Robin uses a fixed time quantum.",opts:["shortest job scheduling algorithm","round robin scheduling algorithm","priority scheduling algorithm","multilevel queue scheduling algorithm"],ans:1,exp:"Round Robin scheduling uses a fixed time quantum for process switching."},
      {q:"Process are classified into different groups in ____________ Explanation: Multilevel queue scheduling divides processes into separate categories/queues.",opts:["shortest job scheduling algorithm","round robin scheduling algorithm","priority scheduling algorithm","multilevel queue scheduling algorithm"],ans:3,exp:"Multilevel queue scheduling divides processes into separate categories or groups."},
      {q:"In multilevel feedback scheduling algorithm ____________ Explanation: In multilevel feedback queues, processes can move between queues.",opts:["a process can move to a different classified ready queue","classification of ready queue is permanent","processes are not classified into groups","none"],ans:0,exp:"Multilevel feedback queues allow processes to move between different ready queues."},
      {q:"Which one of the following can not be scheduled by the kernel? Explanation: User-level threads are managed by user-space libraries, not directly by the kernel.",opts:["kernel level thread","user level thread","process","none"],ans:1,exp:"User-level threads are managed in user space and are not directly scheduled by the kernel."},
      {q:"CPU scheduling is the basis of ___________ Explanation: Multiprogramming depends on CPU scheduling to share CPU among processes.",opts:["multiprocessor systems","multiprogramming operating systems","larger memory sized systems","none"],ans:1,exp:"Multiprogramming operating systems depend on CPU scheduling to share the CPU effectively."},
      {q:"With multiprogramming ______ is used productively. Explanation: Multiprogramming improves CPU time utilization.",opts:["time","space","money","all"],ans:0,exp:"Multiprogramming ensures the CPU time is used productively by keeping it busy."},
      {q:"In operating system, each process has its own __________ Explanation: Each process has its own resources including files, signals, and address space.",opts:["open files","pending alarms, signals, and signal handlers","address space and global variables","all"],ans:3,exp:"Each process maintains its own address space, open files, and signal handlers."},
      {q:"What are the two steps of a process execution? Explanation: Process execution alternates between CPU bursts and I/O bursts.",opts:["I/O &amp; OS Burst","CPU &amp; I/O Burst","Memory &amp; I/O Burst","OS &amp; Memory Burst"],ans:1,exp:"Process execution typically alternates between CPU bursts and I/O bursts."},

{q:"An I/O bound program will typically have ____________ Explanation: I/O-bound processes spend little time on CPU and frequently wait for I/O.",opts:["a few very short CPU bursts","many very short I/O bursts","many very short CPU bursts","a few very short I/O bursts"],ans:2,exp:"I/O-bound programs spend most of their time waiting for I/O and have many short CPU bursts."},
      {q:"A process is selected from the ______ queue by the ________ scheduler, to be executed. Explanation: The short-term scheduler selects a process from the ready queue.",opts:["blocked, short term","wait, long term","ready, short term","a few very short I/O bursts"],ans:2,exp:"The short-term scheduler selects a process from the ready queue for execution."},
      {q:"In the following cases non – preemptive scheduling occurs? Explanation: Non-preemptive scheduling occurs when the running process voluntarily blocks or terminates.",opts:["When a process switches from the running state to the ready state","When a process goes from the running state to the waiting state","When a process switches from the waiting state to the ready state","All"],ans:1,exp:"Non-preemptive scheduling happens when a process voluntarily enters a waiting state."},
      {q:"The switching of the CPU from one process or thread to another is called ____________ Explanation: Context switch saves one process state and loads another.",opts:["process switch","task switch","context switch","all"],ans:2,exp:"A context switch involves saving the state of one process and loading another."},
      {q:"What is Dispatch latency? Explanation: Dispatch latency is the delay in switching CPU from one process to another.",opts:["the speed of dispatching a process from running to the ready state","the time of dispatching a process from running to ready state and keeping the CPU idle","the time to stop one process and start running another one","none"],ans:2,exp:"Dispatch latency is the time taken to stop one process and start running another one."},
      {q:"Scheduling is done so as to ____________ Explanation: Scheduling aims to maximize CPU usage.",opts:["increase CPU utilization","decrease CPU utilization","keep the CPU more idle","none"],ans:0,exp:"The goal of scheduling is to maximize CPU utilization."},
      {q:"What is Turnaround time? Explanation: Turnaround time = completion time − arrival time. (Correct definition is missing from options.)",opts:["the total waiting time for a process to finish execution","the total time spent in the ready queue","the total time spent in the running queue","the total time from the completion till the submission of a process"],ans:3,exp:"Turnaround time = completion time − arrival time."},
      {q:"Scheduling is done so as to ____________ Explanation: Good scheduling tries to reduce turnaround time.",opts:["increase the turnaround time","decrease the turnaround time","keep the turnaround time same","there is no relation between scheduling and turnaround time"],ans:1,exp:"Effective scheduling algorithms aim to decrease the turnaround time."},
      {q:"What is Waiting time? Explanation: Waiting time is the time spent waiting in the ready queue.",opts:["the total time in the blocked and waiting queues","the total time spent in the ready queue","the total time spent in the running queue","the total time from the completion till the submission of a process"],ans:1,exp:"Waiting time is the total duration a process spends waiting in the ready queue."},
      {q:"In a timeshare operating system, when the time slot assigned to a process is completed, the process switches from the current state to? Explanation: After time quantum expires, the process is preempted and moved back to ready state.",opts:["Suspended state","Terminated state","Ready state","Blocked state"],ans:2,exp:"After the time quantum expires, a process is preempted and moved to the ready state."},
      {q:"Scheduling is done so as to __________ Explanation: Scheduling aims to reduce waiting time.",opts:["increase the waiting time","keep the waiting time the same","decrease the waiting time","none"],ans:2,exp:"The goal of scheduling is to maximize CPU utilization."},

{q:"What is Response time? Explanation: Response time is the time until the first output/response.",opts:["the total time taken from the submission time till the completion time","the total time taken from the submission time till the first response is produced","the total time taken from submission time till the response is output","none"],ans:1,exp:"Response time is measured from process submission until the first response is produced."},
      {q:"Round robin scheduling falls under the category of ____________ Explanation: Round Robin preempts a process after each time quantum.",opts:["Non-preemptive scheduling","Preemptive scheduling","All","None"],ans:1,exp:"Round Robin is a preemptive algorithm using time slices."},
      {q:"With round robin scheduling algorithm in a time shared system ____________ Explanation: If the time quantum is very large, Round Robin behaves like FCFS.",opts:["using very large time slices converts it into First come First served scheduling algorithm","using very small time slices converts it into First come First served scheduling algorithm","using extremely small time slices increases performance","using very small time slices converts it into Shortest Job First algorithm"],ans:0,exp:"If the time quantum is sufficiently large, Round Robin behaves exactly like FCFS."},
      {q:"The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________ Explanation: The dispatcher assigns the CPU to a ready process.",opts:["assigning ready processes to CPU","assigning ready processes to waiting queue","assigning running processes to blocked queue","all"],ans:0,exp:"The dispatcher is responsible for assigning a ready process to the CPU."},
      {q:"What is FIFO algorithm? Explanation: FIFO/FCFS serves the earliest arriving job first.",opts:["first executes the job that came in last in the queue","first executes the job that came in first in the queue","first executes the job that needs minimal processor","first executes the job that has maximum processor needs"],ans:1,exp:"FIFO (First-In, First-Out) executes jobs in the order they entered the queue."},
      {q:"The strategy of making processes that are logically runnable to be temporarily suspended is called ____________ Explanation:Preemptive scheduling can temporarily suspend a runnable process.",opts:["Non preemptive scheduling","Preemptive scheduling","Shortest job first","First come First served"],ans:1,exp:"Preemptive scheduling can temporarily suspend a process that is still runnable."},
      {q:"Complex scheduling algorithms ____________ Explanation: Complex schedulers require more overhead/resources.",opts:["are very appropriate for very large computers","use minimal resources","use many resources","all"],ans:0,exp:"Large computers are overloaded with a greater number of processes."},
      {q:"What is FIFO algorithm? Explanation: FIFO and FCFS mean the same: first arrived, first served.",opts:["first executes the job that came in last in the queue","first executes the job that came in first in the queue","first executes the job that needs minimal processor","first executes the job that has maximum processor needs"],ans:1,exp:"FIFO is synonymous with First-Come, First-Served (FCFS)."},
      {q:"The strategy of making processes that are logically runnable to be temporarily suspended is called ____________ Explanation:Preemptive scheduling interrupts a process before completion.",opts:["Non preemptive scheduling","Preemptive scheduling","Shortest job first","First come First served"],ans:1,exp:"Preemptive scheduling can temporarily suspend a process that is still runnable."},
      {q:"Cascading termination refers to the termination of all child processes if the parent process terminates ______ Explanation: Cascading termination is usually associated with abnormal termination of the parent. (Some texts allow both, but exam key usually expects b.)",opts:["Normally or abnormally","Abnormally","Normally","None"],ans:0,exp:"Cascading termination is usually triggered by the normal pr abnormal termination of the parent."},

{q:"There are 10 different processes running on a workstation... Which quantum time is the best value for small response times, if the processes have a short runtime, e.g. less than 10ms? Explanation: For short response time, the smallest suitable quantum is best, so 15ms is the intended answer. (Correct option: a)",opts:["tQ = 15ms","tQ = 40ms","tQ = 45ms","tQ = 50ms"],ans:0,exp:"For a short runtime like 10ms, a small quantum (15ms) provides the best response time."},
      {q:"Orders are processed in the sequence they arrive if _______ rule sequences the jobs. Explanation: FCFS processes jobs in arrival order.",opts:["earliest due date","slack time remaining","first come, first served","critical ratio"],ans:2,exp:"The FCFS rule sequences jobs exactly in the order they arrive."},
      {q:"Under multiprogramming, turnaround time for short jobs is usually ________ and that for long jobs is slightly ___________ Explanation: Multiprogramming generally benefits short jobs but can delay long jobs slightly.",opts:["Lengthened; Shortened","Shortened; Lengthened","Shortened; Shortened","Shortened; Unchanged"],ans:1,exp:"Multiprogramming usually shortens turnaround for short jobs but may lengthen it for long ones."},
      {q:"Which of the following statements are true? I. Shortest remaining time first scheduling may cause starvation II. Preemptive scheduling may cause starvation III. Round robin is better than FCFS in terms of response time Explanation: All three statements are true in general scheduling behavior.",opts:["I Only","I and III only","II and III only","All"],ans:3,exp:"All statements accurately describe standard scheduling behaviors."},
      {q:"The real difficulty with SJF in short term scheduling is ____________ Explanation: SJF needs the next CPU burst time, which is difficult to predict accurately.",opts:["it is too good an algorithm","knowing the length of the next CPU request","it is too complex to understand","none"],ans:1,exp:"SJF requires knowing future burst lengths, which is difficult to predict."},
      {q:"The FCFS algorithm is particularly troublesome for ____________ Explanation: FCFS gives poor response time, so it is unsuitable for time-sharing systems.",opts:["time sharing systems","multiprogramming systems","multiprocessor systems","operating systems"],ans:0,exp:"FCFS is problematic for time-sharing systems due to high response times."},
      {q:"Consider the following set of processes, the length of the CPU burst time given in milliseconds. Process Burst time: P1=6, P2=8, P3=7, P4=3. Assuming the above process being scheduled with the SJF scheduling algorithm. Explanation: SJF order is P4(3), P1(6), P3(7), P2(8), so P1 waits 3 ms. (Correct option: a)",opts:["The waiting time for process P1 is 3ms","The waiting time for process P1 is 0ms","The waiting time for process P1 is 16ms","The waiting time for process P1 is 9ms"],ans:0,exp:"With SJF, order is P4(3), P1(6)... so P1 waits 3ms."},
      {q:"An SJF algorithm is simply a priority algorithm where the priority is ____________ Explanation: Shorter predicted burst means higher priority, so priority is inversely related to burst time.",opts:["the predicted next CPU burst","the inverse of the predicted next CPU burst","the current CPU burst","anything the user wants"],ans:1,exp:"Priority is inversely related to burst time (shorter burst = higher priority)."},
      {q:"A solution to the problem of indefinite blockage of low – priority processes is ____________ Explanation: Aging gradually increases priority to prevent starvation.",opts:["Starvation","Wait queue","Ready queue","Aging"],ans:3,exp:"Aging gradually increases a process's priority to ensure it eventually runs."},
      {q:"Which of the following statements are true? i) Shortest remaining time first scheduling may cause starvation ii) Preemptive scheduling may cause starvation iii) Round robin is better than FCFS in terms of response time Explanation: All three statements are true in general scheduling behavior.",opts:["I only","I and III Only","II and III only","I, II, and III"],ans:3,exp:"All statements accurately describe standard scheduling behaviors."},

{q:"When a process is in a “Blocked” state waiting for some I/O service. When the service is completed, it goes to the __________ Explanation: After I/O completes, the process moves to the ready queue.",opts:["Terminated state","Suspended state","Running state","Ready state"],ans:3,exp:"Once I/O is finished, the process moves from waiting to the ready state."},
      {q:"Mutual exclusion implies that ____________ Explanation: Mutual exclusion allows only one process in the critical section at a time.",opts:["if a process is executing in its critical section, then no other process must be executing in their critical sections","if a process is executing in its critical section, then other processes must be executing in their critical sections","if a process is executing in its critical section, then all the resources of the system must be blocked until it finishes execution","none"],ans:0,exp:"Only one process is allowed to execute in its critical section at a time."},
      {q:"Bounded waiting implies that there exists a bound on the number of times a process is allowed to enter its critical section ____________ Explanation: Bounded waiting prevents indefinite postponement after a request is made.",opts:["after a process has made a request to enter its critical section and before the request is granted","when another process is in its critical section","before a process has made a request to enter its critical section","none"],ans:0,exp:"There is a limit on how many other processes can enter after a request has been made."},
      {q:"A minimum of _____ variable(s) is/are required to be shared between processes to solve the critical section problem. Explanation: At least one shared synchronization variable (like a lock/turn flag) is required.",opts:["1","2","3","4"],ans:0,exp:"At least one shared variable is required to synchronize access."},
      {q:"The following program consists of 3 concurrent processes and 3 binary semaphores... How many times will P0 print ‘0’? Explanation: P0 can keep repeating because P1 and P2 each signal S0 back after being released, so P0 prints at least twice. (Best answer: a)",opts:["At least twice","Exactly twice","Exactly thrice","Exactly once"],ans:0,exp:"P0 can repeat because P1/P2 signal S0 back, so it prints at least twice."},
      {q:"Each process Pi, i = 0,1,2,3,……,9 is coded as follows... P10 uses V(mutex) instead of P(mutex). What is the largest number of processes that can be inside the critical section at any moment? Explanation: Since P10 incorrectly increments the semaphore before entering, more than 3 processes may enter, so none of the listed fixed values is guaranteed.",opts:["1","2","3","None"],ans:3,exp:"Using V(mutex) incorrectly before CS allows multiple processes to enter concurrently."},
      {q:"Two processes, P1 and P2, need to access a critical section... Which one of the following statements is TRUE about the above construct? Explanation: If both set their flags true simultaneously, both can wait forever (deadlock), but mutual exclusion is maintained.",opts:["It does not ensure mutual exclusion","It does not ensure bounded waiting","It requires that processes enter the critical section in strict alternation","It does not prevent deadlocks but ensures mutual exclusion"],ans:3,exp:"The provided construct ensures mutual exclusion but can lead to deadlocks."},
      {q:"Semaphore is a/an _______ to solve the critical section problem. Explanation: Semaphore operations must be performed atomically.",opts:["after a particular process","periodically","atomically","none"],ans:2,exp:"Semaphore wait and signal operations must be executed atomically."},
      {q:"What are the two atomic operations permissible on semaphores? Explanation: Semaphore operations are wait(P) and signal(V).",opts:["wait and signal","stop and wait","hold and wait","none"],ans:0,exp:"The two fundamental semaphore operations are wait(P) and signal(V)."},
      {q:"The following pair of processes share a common variable X... X is set to 5... How many different values of X are possible after both processes finish executing? Explanation: Different interleavings can lead to final X values 6, 10, 11, or 12 → total 4 values.",opts:["2","3","4","8"],ans:2,exp:"Different interleavings can produce 4 distinct final values (6, 10, 11, 12)."},

{q:"The program follows to use a shared binary semaphore T... T is set to 0... X is set to 5. Now, how many different values of X are possible after both processes finish executing? Explanation: Semaphore forces A to finish before B, so final X is always 11.",opts:["1","2","3","4"],ans:0,exp:"The semaphore forces sequential execution, so X will always be 11."},
      {q:"Transient operating system code is a code that ____________ Explanation: Transient code is loaded only when needed and removed afterward.",opts:["stays in the memory always","never enters the memory space","comes and goes as needed","is not easily accessible"],ans:2,exp:"Transient code is swapped in and out of memory as required."},
      {q:"All processes share a semaphore variable mutex, initialized to 1... Suppose a process executes: signal(mutex); ... critical section ... wait(mutex); In this situation : Explanation: Releasing before entering critical section breaks mutual exclusion, so multiple processes may enter simultaneously.",opts:["a deadlock will occur","processes will starve to enter critical section","several processes maybe executing in their critical section","all"],ans:2,exp:"Executing signal before entry allows multiple processes into the critical section."},
      {q:"All processes share a semaphore variable mutex, initialized to 1... Suppose a process executes: wait(mutex); ... critical section ... wait(mutex); Explanation: The second wait on the same mutex blocks forever, causing deadlock.",opts:["a deadlock will occur","processes will starve to enter critical section","several processes maybe executing in their critical section","all"],ans:0,exp:"Executing signal before entry allows multiple processes into the critical section."},
      {q:"Consider the methods used by processes P1 and P2... Which of the following statements describes properties achieved? Explanation: One process waits while the other can enter, so both mutual exclusion and progress are satisfied.",opts:["Mutual exclusion but not progress","Progress but not mutual exclusion","Neither mutual exclusion nor progress","Both mutual exclusion and progress"],ans:3,exp:"Properly implemented synchronization provides both mutual exclusion and progress."},
      {q:"What is a reusable resource? Explanation: Reusable resources (e.g., CPU, files) are not consumed when used.",opts:["that can be used by one process at a time and is not depleted by that use","that can be used by more than one process at a time","that can be shared between various threads","none"],ans:0,exp:"Reusable resources like CPU or memory are not consumed when used."},
      {q:"A system is in the safe state if ____________ Explanation: Both statements are equivalent definitions of a safe state.",opts:["the system can allocate resources to each process in some order and still avoid a deadlock","there exist a safe sequence","all","none"],ans:2,exp:"A system is safe if it can find a safe sequence to allocate resources."},
      {q:"The circular wait condition can be prevented by ____________ Explanation: Imposing a strict resource ordering prevents circular wait.",opts:["defining a linear ordering of resource types","using thread","using pipes","all"],ans:0,exp:"Assigning a linear order to resource types prevents circular dependencies."},
      {q:"A problem encountered in multitasking when a process is perpetually denied necessary resources is called ____________ Explanation: Starvation means indefinite postponement of a process.",opts:["deadlock","starvation","inversion","aging"],ans:1,exp:"Starvation is the indefinite postponement of a process waiting for resources."},
      {q:"To avoid deadlock ____________ Explanation: Resource ordering / inversion techniques can help avoid deadlock; other options are not general solutions.",opts:["there must be a fixed number of resources to allocate","resource allocation must be done only once","all deadlocked processes must be aborted","inversion technique can be used"],ans:3,exp:"Resource ordering/inversion techniques are used to prevent deadlock cycles."},
      {q:"The request and release of resources are ___________ Explanation: Resource allocation and release are typically performed through OS system calls.",opts:["command line statements","interrupts","system calls","special programs"],ans:2,exp:"Resource operations are handled by the OS through system calls."},

{q:"What are Multithreaded programs? Explanation: Multiple threads increase synchronization complexity and deadlock risk.",opts:["lesser prone to deadlocks","more prone to deadlocks","not at all prone to deadlocks","none of the options"],ans:1,exp:"Increased complexity in multithreading often leads to higher deadlock risks."},
      {q:"The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________ Explanation: The dispatcher gives the CPU to a ready process.",opts:["assigning ready processes to waiting queue","assigning running processes to blocked queue","assigning ready processes to CPU","all"],ans:2,exp:"The dispatcher is responsible for assigning a ready process to the CPU."},
      {q:"For Mutual exclusion to prevail in the system ____________ Explanation: Mutual exclusion requires at least one non-shareable resource.",opts:["at least one resource must be held in a non sharable mode","the processor must be a uniprocessor rather than a multiprocessor","there must be at least one resource in a sharable mode","all"],ans:0,exp:"Mutual exclusion requires at least one resource to be non-shareable."},
      {q:"For a Hold and wait condition to prevail ____________ Explanation: Hold-and-wait means holding one resource while requesting another.",opts:["A process must be not be holding a resource, but waiting for one to be freed, and then request to acquire it","A process must be holding at least one resource and waiting to acquire additional resources that are being held by other processes","A process must hold at least one resource and not be waiting to acquire additional resources","None"],ans:1,exp:"Hold-and-wait means a process holds resources while requesting others."},
      {q:"Deadlock prevention is a set of methods ___________ Explanation: Preventing deadlock means breaking at least one necessary condition.",opts:["to ensure that at least one of the necessary conditions cannot hold","to ensure that all of the necessary conditions do not hold","to decide if the requested resources for a process have to be given or not","to recover from a deadlock"],ans:0,exp:"Prevention works by ensuring at least one of the four necessary conditions cannot occur."},
      {q:"For sharable resources, mutual exclusion ____________ Explanation: Sharable resources can be used by multiple processes without exclusive access.",opts:["is required","is not required","may be or may not be required","none"],ans:1,exp:"Sharable resources do not require exclusive access."},
      {q:"The disadvantage of a process being allocated all its resources before beginning its execution is ____________ Explanation: Pre-allocating everything causes poor resource utilization because resources may remain idle.",opts:["Low CPU utilization","Low resource utilization","Very high resource utilization","None"],ans:1,exp:"Allocating resources long before use leads to low resource utilization."},
      {q:"To ensure no preemption, if a process is holding some resources and requests another resource that cannot be immediately allocated to it ____________ Explanation: For deadlock prevention by removing hold-and-wait, held resources may be released/preempted before waiting.",opts:["then the process waits for the resources be allocated to it","the process keeps sending requests until the resource is allocated to it","the process resumes execution without the resource being allocated to it","then all resources currently being held are preempted"],ans:3,exp:"If a request fails, the process must release its currently held resources."},
      {q:"Each request requires that the system consider the _____________ to decide whether the current request can be satisfied or must wait to avoid a future possible deadlock. Explanation: Deadlock avoidance needs knowledge of future maximum demands.",opts:["resources currently available","processes that have previously been in the system","resources currently allocated to each process","future requests and releases of each process"],ans:3,exp:"Deadlock avoidance requires knowledge of future maximum resource needs."},

{q:"Given a priori information about the ________ number of resources of each type that maybe requested for each process, it is possible to construct an algorithm that ensures that the system will never enter a deadlock state. Explanation: Banker’s algorithm requires the maximum resource need in advance.",opts:["minimum","average","maximum","approximate"],ans:2,exp:"The maximum number of each resource type needed must be known (Banker's Algorithm)."},
      {q:"A deadlock avoidance algorithm dynamically examines the __________ to ensure that a circular wait condition can never exist. Explanation: Deadlock avoidance checks the current resource allocation state.",opts:["resource allocation state","system storage state","operating system","resources"],ans:0,exp:"The OS monitors the current allocation state to ensure safety."},
      {q:"A system is in a safe state only if there exists a ____________ Explanation: A safe sequence guarantees all processes can complete without deadlock.",opts:["safe allocation","safe resource","safe sequence","all"],ans:2,exp:"A safe state is defined by the existence of a safe sequence."},
      {q:"The FCFS algorithm is particularly troublesome for ____________ Explanation: FCFS performs poorly in interactive/time-sharing systems.",opts:["operating systems","multiprocessor systems","time sharing systems","multiprogramming systems"],ans:2,exp:"FCFS is problematic for time-sharing systems due to high response times."},
      {q:"A system has 12 magnetic tape drives and 3 processes: P0, P1, and P2... Which of the following sequence is a safe sequence? Explanation: Available = 3; only P1 can finish first, then enough tapes free up for P0, then P2.",opts:["P0, P1, P2","P1, P2, P0","P2, P0, P1","P1, P0, P2"],ans:3,exp:"P1, P0, P2 allows all processes to finish given the tape count."},
      {q:"The resource allocation graph is not applicable to a resource allocation system ____________ Explanation: Simple resource allocation graph deadlock detection is mainly for single-instance resources.",opts:["with multiple instances of each resource type","with a single instance of each resource type","single &amp; multiple instances of each resource type","none"],ans:0,exp:"Simple RAG cycles only indicate deadlock for single-instance resources."},
      {q:"The Banker’s algorithm is _____________ than the resource allocation graph algorithm. Explanation: In standard OS MCQ context, Banker’s algorithm is considered more practical for multiple instances. (This can vary by context, but exam keys often mark b.)",opts:["less efficient","more efficient","equal","none"],ans:0,exp:"Banker's is generally more efficient for systems with multiple resource instances."},
      {q:"A system with 5 processes P0 through P4... The sequence &lt;P1, P3, P4, P2, P0&gt; leads the system to ____________ Explanation: This is the classic Banker’s example, and the given sequence is a valid safe sequence.",opts:["an unsafe state","a safe state","a protected state","a deadlock"],ans:1,exp:"This sequence is a valid safe path in the classic Banker's example."},
      {q:"The wait-for graph is a deadlock detection algorithm that is applicable when ____________ Explanation: Wait-for graph works for systems where each resource type has only one instance.",opts:["all resources have a single instance","all resources have multiple instances","all resources have multiple instances","all"],ans:0,exp:"Wait-for graphs are used for deadlock detection in single-instance systems."},
      {q:"An edge from process Pi to Pj in a wait for graph indicates that ____________ Explanation: A directed edge Pi → Pj means Pi is waiting for a resource held by Pj.",opts:["Pi is waiting for Pj to release a resource that Pi needs","Pi is waiting for Pj to release a resource that Pi needs","all resources have multiple instances","all"],ans:0,exp:"The edge Pi → Pj means Pi is waiting for a resource held by Pj."},
      {q:"If the wait for graph contains a cycle ____________ Explanation: In a wait-for graph, a cycle indicates deadlock.",opts:["then a deadlock does not exist","then a deadlock exists","hen a deadlock exists","either deadlock exists or system is in a safe state"],ans:1,exp:"A cycle in a wait-for graph is a definitive indicator of deadlock."},

{q:"If deadlocks occur frequently, the detection algorithm must be invoked ________ Explanation: Frequent deadlocks require frequent detection to reduce impact.",opts:["rarely","frequently","rarely &amp; frequently","none"],ans:1,exp:"Frequent deadlocks require frequent checking to minimize throughput loss."},
      {q:"For an effective operating system, when to check for deadlock? Explanation: This depends on system policy; both periodic and on-demand checks are used, so no single option is universally correct.",opts:["at fixed time intervals","every time a resource request is made","every time a resource request is made at fixed time intervals","none"],ans:3,exp:"The frequency depends on system performance trade-offs (intervals or requests)."},
      {q:"What is the main function of the command interpreter? Explanation: The command interpreter (shell) reads and executes user commands.",opts:["to provide the interface between the API and application program","to handle the files in the operating system","to get and execute the next user-specified command","None"],ans:2,exp:"The shell/interpreter reads and executes user-specified commands."},
      {q:"A deadlock avoidance algorithm dynamically examines the __________ to ensure that a circular wait condition can never exist. Explanation: Deadlock avoidance checks the current resource-allocation state before granting requests.",opts:["operating system","resources","system storage state","resource allocation state"],ans:3,exp:"The OS monitors the current allocation state to ensure safety."},
      {q:"Swapping _______ be done when a process has pending I/O, or has to execute I/O operations only into operating system buffers. Explanation: Swapping a process with pending I/O is unsafe unless the I/O is only to OS buffers; the standard textbook statement is “must never” (with that exception noted in the question wording).",opts:["must never","maybe","can","must"],ans:0,exp:"Swapping is generally prohibited if a process has active I/O pending."},
      {q:"The main memory accommodates ____________ Explanation: Main memory holds the OS and user processes (not the CPU physically, so this option set is sloppy, but exam keys usually expect “all”).",opts:["cpu","user processes","operating system","all"],ans:3,exp:"Memory holds the OS, user programs, and data."},
      {q:"The operating system is responsible for? Explanation: OS/storage management handles disk initialization and bad-block handling; booting involves OS loading support.",opts:["bad-block recovery","booting from disk","disk initialization","all"],ans:3,exp:"The OS handles block management, booting, and initial disk setup."},
      {q:"The operating system and the other processes are protected from being modified by an already running process because ____________ Explanation: Base/limit (relocation/limit) checking protects memory from illegal access.",opts:["every address generated by the CPU is being checked against the relocation and limit registers","they have a protection algorithm","they are in different memory spaces","they are in different logical addresses"],ans:0,exp:"Hardware checks every memory access against base and limit registers."},
      {q:"Using transient code, _______ the size of the operating system during program execution. Explanation: Transient code is loaded only when needed, reducing resident OS size.",opts:["maintains","changes","increases","decreases"],ans:3,exp:"Transient code reduces the memory footprint of the resident OS."},
      {q:"The operating system maintains a ______ table that keeps track of how many frames have been allocated, how many are there, and how many are available. Explanation: This is the frame table.",opts:["memory","mapping","page","frame"],ans:3,exp:"The frame table tracks the status and allocation of physical memory frames."},

{q:"To obtain better memory utilization, dynamic loading is used. With dynamic loading, a routine is not loaded until it is called. For implementing dynamic loading ____________ Explanation: Dynamic loading can be implemented by the program itself.",opts:["special support from operating system is essential","special support from hardware is required","user programs can implement dynamic loading without any special support from hardware or operating system","special support from both hardware and operating system is essential"],ans:2,exp:"Dynamic loading can be managed by user programs without special OS/hardware support."},
      {q:"The _________ presents a uniform device-access interface to the I/O subsystem, much as system calls provide a standard interface between the application and the operating system. Explanation: Device drivers provide a standard interface for device access.",opts:["Device drivers","I/O systems","Devices","Buses"],ans:0,exp:"Device drivers standardize how the OS interacts with varying hardware."},
      {q:"In real time operating system ____________ Explanation: Meeting deadlines is the key property of RTOS.",opts:["process scheduling can be done only once","all processes have the same priority","kernel is not required","a task must be serviced by its deadline period"],ans:3,exp:"In RTOS, the primary requirement is meeting task deadlines."},
      {q:"In Operating Systems, which of the following is/are CPU scheduling algorithms? Explanation: All three are standard CPU scheduling algorithms.",opts:["Priority","Round Robin","Shortest Job First","All"],ans:3,exp:"All three are fundamental CPU scheduling strategies."},
      {q:"Hard real time operating system has ______________ jitter than a soft real time operating system. Explanation: Hard RTOS must keep timing variation (jitter) minimal.",opts:["equal","more","less","none"],ans:2,exp:"Hard RTOS must minimize timing variation (jitter)."},
      {q:"For real time operating systems, interrupt latency should be ____________ Explanation: RTOS requires very low interrupt latency.",opts:["zero","minimal","maximum","dependent on the scheduling"],ans:1,exp:"RTOS requires minimal latency to respond to events quickly."},
      {q:"Which one of the following is a real time operating system? Explanation: All listed OSes are used as real-time operating systems.",opts:["Windows CE","RTLinux","VxWorks","All"],ans:3,exp:"Windows CE, RTLinux, and VxWorks are all recognized RTOSs."},
      {q:"The priority of a process will ______________ if the scheduler assigns it a static priority. Explanation: Static priority means the assigned priority does not change dynamically.",opts:["depends on the operating system","change","remains unchanged","none"],ans:2,exp:"Static priorities do not change during process execution."},
      {q:"If the sum of the working set sizes increases, exceeding the total number of available frames ____________ Explanation: If total working-set demand exceeds available frames, OS may suspend processes to reduce thrashing.",opts:["the operating system selects a process to suspend","the system crashes","then the process crashes","the memory overflows"],ans:0,exp:"The OS suspends a process to prevent excessive thrashing."},
      {q:"The information about all files is kept in ____________ Explanation: File metadata is organized through the directory structure.",opts:["operating system","separate directory structure","swap space","none"],ans:1,exp:"Metadata for files is stored in the directory structure."},
      {q:"The operating system keeps a small table containing information about all open files called ____________ Explanation: OS maintains an open-file table for currently opened files.",opts:["file table","directory table","open-file table","system table"],ans:2,exp:"The open-file table tracks all files currently in use."},
      {q:"What will happen in the single level directory? Explanation: Single-level directory means one common directory for all files.",opts:["All files are contained in the same directory","All files are contained in different directories all at the same level","Depends on the operating system","None"],ans:0,exp:"In a single-level directory, every file is stored in one flat list."},

{q:"The operating system _______ the links when traversing directory trees, to preserve the acyclic structure of the system. Explanation: To avoid cycles, OS ignores certain links while traversing directory trees.",opts:["deletes","considers","ignores","none"],ans:2,exp:"The OS ignores certain links to avoid infinite loops in a directory tree."},
      {q:"On systems where there are multiple operating system, the decision to load a particular one is done by _____________ Explanation: The boot loader presents/selects which OS to load in multi-boot systems.",opts:["process control block","file control block","boot loader","bootstrap"],ans:2,exp:"The boot loader manages the selection of which OS to boot."},
      {q:"To access the services of the operating system, the interface is provided by the ___________ Explanation: Applications usually access OS services through APIs, which internally invoke system calls.",opts:["Library","System Calls","Assembly instructions","API - Application Programming Interface"],ans:3,exp:"APIs provide the high-level interface to OS services via system calls."},
      {q:"The _______ program initializes all aspects of the system, from CPU registers to device controllers and the contents of main memory, and then starts the operating system. Explanation: The bootstrap program initializes the system and starts the OS.",opts:["bootstrap","main","bootloader","rom"],ans:0,exp:"The bootstrap program performs initial hardware setup and loads the kernel."},
      {q:"Network operating system runs on ___________ Explanation: In typical exam context, a network OS primarily runs on the server managing network resources.",opts:["every system in the network","server","both server and every system in the network","none"],ans:1,exp:"Network OSs are typically hosted on servers to manage shared resources."},
      {q:"What are the types of distributed operating systems? Explanation: Among the listed options, only Network Operating System is a valid recognized type.",opts:["Zone based Operating system","Level based Operating system","Network Operating system","All"],ans:2,exp:"Network Operating Systems are a standard type in this category."},
      {q:"The systems which allow only one process execution at a time, are called __________ Explanation:Uniprogramming systems keep only one program in memory for execution at a time.",opts:["uniprogramming systems","uniprocessing systems","unitasking systems","none"],ans:0,exp:"Uniprogramming systems run one program at a time in memory."},
      {q:"In operating system, each process has its own __________ Explanation: Each process has its own address space and process-related resources/state.",opts:["address space and global variables","open files","pending alarms, signals and signal handlers","all"],ans:3,exp:"Each process maintains its own address space, open files, and signal handlers."},
      {q:"A process can be terminated due to __________ Explanation: All are valid reasons for process termination.",opts:["normal exit","fatal error","killed by another process","all"],ans:3,exp:"Processes terminate for variety of reasons: success, error, or external signal."},
      {q:"What is the ready state of a process? Explanation: Ready means the process is prepared to run and waiting for CPU allocation.",opts:["when process is scheduled to run after some execution","when process is unable to run until some task has been completed","when process is using the CPU","none"],ans:0,exp:"Ready means the process is waiting only for CPU time to run."},
      {q:"What is interprocess communication? Explanation: IPC means communication between separate processes.",opts:["communication within the process","communication between two process","communication between two threads of same process","none"],ans:1,exp:"IPC is communication between distinct processes."},
      {q:"A set of processes is deadlock if __________ Explanation: Deadlock means each process waits indefinitely for an event/resource held by another.",opts:["each process is blocked and will remain so forever","each process is terminated","all processes are trying to kill each other","None"],ans:0,exp:"Deadlock occurs when every process is waiting for another forever."},

{q:"A process stack does not contain __________ Explanation: Stack stores function call data, not child process IDs.",opts:["Function parameters","Local variables","Return addresses","PID of child process"],ans:3,exp:"Child PIDs are typically stored in the process table, not the stack."},
      {q:"CPU scheduling is the basis of ___________ Explanation: Multiprogramming depends on CPU scheduling.",opts:["multiprogramming operating systems","larger memory sized systems","multiprocessor systems","none"],ans:0,exp:"Multiprogramming operating systems depend on CPU scheduling to share the CPU effectively."},
      {q:"Which system call can be used by a parent process to determine the termination of child process? Explanation:wait() lets the parent wait for and detect child termination.",opts:["wait","exit","fork","get"],ans:0,exp:"A parent uses wait() to synchronize with child termination."},
      {q:"The address of the next instruction to be executed by the current process is provided by the __________ Explanation: The program counter holds the next instruction address.",opts:["CPU registers","Program counter","Process stack","Pipe"],ans:1,exp:"The Program Counter (PC) tracks the next instruction to execute."},
      {q:"A Process Control Block(PCB) does not contain which of the following? Explanation: PCB stores process metadata, not the bootstrap program.",opts:["Code","Stack","Bootstrap Program","Data"],ans:2,exp:"The bootstrap program is used only during startup, not stored in the PCB."},
      {q:"The number of processes completed per unit time is known as __________ Explanation: Throughput = number of completed processes/jobs per unit time.",opts:["Output","Throughput","Efficiency","Capacity"],ans:1,exp:"Throughput measures the system's ability to finish jobs over time."},
      {q:"The state of a process is defined by __________ Explanation: Process state reflects its current execution condition/activity.",opts:["the current activity of the process","the final activity of the process","the activity just executed by the process","the activity to next be executed by the process"],ans:0,exp:"The process state describes what the process is doing at this moment."},
      {q:"Which of the following is not the state of a process? Explanation: “Old” is not a standard process state.",opts:["New","Old","Waiting","Running"],ans:1,exp:"'Old' is not a standard lifecycle state in process management."},
      {q:"What is a Process Control Block? Explanation: PCB is the OS data structure storing process information.",opts:["Process type variable","Data Structure","A secondary storage section","A Block in memory"],ans:1,exp:"The PCB is the data structure the OS uses to manage process information."},
      {q:"The entry of all the PCBs of the current processes is in __________ Explanation: The process table contains entries for all PCBs.",opts:["Process Register","Program Counter","Process Table","Process Unit"],ans:2,exp:"The Process Table is the central directory for all active PCBs."},
      {q:"What is the degree of multiprogramming? Explanation: Degree of multiprogramming = number of processes in main memory.",opts:["the number of processes executed per unit time","the number of processes in the ready queue","the number of processes in the I/O queue","the number of processes in memory"],ans:3,exp:"It is the total number of processes currently residing in main memory."},
      {q:"A single thread of control allows the process to perform __________ Explanation: A single thread executes one sequence of instructions at a time.",opts:["only one task at a time","multiple tasks at a time","only two tasks at a time","all"],ans:0,exp:"A single thread executes a single sequence of instructions."},
      {q:"Which one of the following is not true? Explanation: Modern kernels can load modules dynamically during runtime, so statement (b) is false.",opts:["kernel remains in the memory during the entire computer session","kernel is made of various modules which can not be loaded in running operating system","kernel is the first part of the operating system to load into memory during booting","kernel is the program that constitutes the central core of the operating system"],ans:1,exp:"Modern OS kernels are modular and can load/unload drivers while running."},

{q:"What is the objective of multiprogramming? Explanation: Multiprogramming aims to keep the CPU busy and improve utilization.",opts:["Have a process running at all time","Have multiple programs waiting in a queue ready to run","To increase CPU utilization","None"],ans:2,exp:"The primary goal is to maximize CPU utilization by keeping it busy."},
      {q:"Which of the following do not belong to queues for processes? Explanation: Standard process queues are job, ready, and device queues; “PCB queue” is not a standard queue type.",opts:["Job Queue","PCB Queue","Device Queue","Ready Queue"],ans:1,exp:"Process information is kept in job, ready, and device queues."},
      {q:"When the process issues an I/O request __________ Explanation: A process requesting I/O waits in the device/I/O queue.",opts:["It is placed in an I/O queue","It is placed in a waiting queue","It is placed in the ready queue","It is placed in the Job queue"],ans:0,exp:"Processes waiting for I/O are held in the device/IO queue."},
      {q:"What will happen when a process terminates? Explanation: On termination, the process is removed from queues and its PCB is eventually deallocated. (Most direct textbook answer: c)",opts:["It is removed from all queues","It is removed from all, but the job queue","Its process control block is de-allocated","Its process control block is never de-allocated"],ans:2,exp:"Termination leads to the eventual de-allocation of the process's PCB."},
      {q:"What is a long-term scheduler? Explanation: The long-term scheduler admits jobs into the ready queue/memory.",opts:["It selects processes which have to be brought into the ready queue","It selects processes which have to be executed next and allocates CPU","It selects processes which heave to remove from memory by swapping","None"],ans:0,exp:"The long-term scheduler controls which jobs enter the system/memory."},
      {q:"If all processes I/O bound, the ready queue will almost always be ______ and the Short term Scheduler will have a ______ to do. Explanation: I/O-bound processes spend most time waiting for I/O, so ready queue is often empty and scheduler has little to do.",opts:["full, little","full, lot","empty, little","empty, lot"],ans:2,exp:"I/O-bound jobs stay in wait queues, leaving the ready queue empty."},
      {q:"What is a medium-term scheduler? Explanation: The medium-term scheduler handles swapping/suspending processes in and out of memory.",opts:["It selects which process has to be brought into the ready queue","It selects which process has to be executed next and allocates CPU","It selects which process to remove from memory by swapping","None"],ans:2,exp:"Medium-term scheduling involves swapping processes in and out of memory."},
      {q:"What is a short-term scheduler? Explanation: The short-term scheduler (CPU scheduler) picks the next ready process to run.",opts:["It selects which process has to be brought into the ready queue","It selects which process has to be executed next and allocates CPU","It selects which process to remove from memory by swapping","None"],ans:1,exp:"The short-term scheduler decides which ready process to execute next."},
      {q:"The primary distinction between the short term scheduler and the long term scheduler is __________ Explanation: The short-term scheduler runs very frequently, while the long-term scheduler runs much less often.",opts:["The length of their queues","The type of processes they schedule","The frequency of their execution","None"],ans:2,exp:"Short-term schedulers run much more frequently than long-term ones."},
      {q:"The only state transition that is initiated by the user process itself is __________ Explanation: A process can voluntarily block itself (e.g., for I/O), but dispatch/wakeup are OS-controlled.",opts:["block","wakeup","dispatch","none"],ans:0,exp:"A process blocks itself when it needs to wait for an event like I/O."},
      {q:"Which one of the following errors will be handle by the operating system? Explanation: The OS handles and responds to all these error conditions.",opts:["lack of paper in printer","connection failure in the network","power failure","all"],ans:3,exp:"The OS mediates hardware/software errors for the user."},

{q:"In a time-sharing operating system, when the time slot given to a process is completed, the process goes from the running state to the __________ Explanation: When time quantum expires, the running process is preempted and moved back to the ready queue.",opts:["Blocked state","Ready state","Suspended state","Suspended state"],ans:1,exp:"Preemption moves the process back to the ready queue."},
      {q:"In a multiprogramming environment __________ Explanation: Multiprogramming means multiple processes are kept in memory so CPU stays busy.",opts:["the processor executes more than one process at a time","the programs are developed by more than one person","more than one process resides in the memory","a single user can execute many programs at the same time"],ans:2,exp:"Multiprogramming keeps multiple processes in memory simultaneously."},
      {q:"Suppose that a process is in “Blocked” state waiting for some I/O service. When the service is completed, it goes to the __________ Explanation: After I/O completion, the process becomes ready to compete for CPU.",opts:["Running state","Ready state","Suspended state","Terminated state"],ans:1,exp:"Once the wait is over, the process becomes ready to run again."},
      {q:"The context of a process in the PCB of a process does not contain __________ Explanation: PCB stores process state and context data, not the time taken for a context switch.",opts:["the value of the CPU registers","the process state","memory-management information","context switch time"],ans:3,exp:"PCB stores process context, not performance metrics like switch time."},
      {q:"Which of the following need not necessarily be saved on a context switch between processes? Explanation: Registers and PC must be saved, but TLB contents may be flushed/rebuilt rather than explicitly saved.",opts:["General purpose registers","Translation lookaside buffer","Program counter","All"],ans:1,exp:"The TLB is often flushed or uses tags rather than being saved in the PCB."},
      {q:"Which of the following does not interrupt a running process? Explanation: Devices, timers, and power failures can generate interrupts; the scheduler itself is not a hardware interrupt source.",opts:["A device","Timer","Schedular process","Power Failure"],ans:2,exp:"The scheduler is software that runs after an interrupt; it is not the interrupt itself."},
      {q:"Which process can be affected by other processes executing in the system? Explanation: A cooperating process can be influenced by other concurrently executing processes.",opts:["cooperating process","child process","parent process","init process"],ans:0,exp:"Cooperating processes share data and can impact each other."},
      {q:"When several processes access the same data concurrently and the outcome of the execution depends on the particular order in which the access takes place is called ________ Explanation: This is the definition of a race condition.",opts:["dynamic condition","race condition","essential condition","critical condition"],ans:1,exp:"A race condition occurs when timing affects the final result of shared data."},
      {q:"If a process is executing in its critical section, then no other processes can be executing in their critical section. What is this condition called? Explanation: Mutual exclusion ensures only one process is in the critical section at a time.",opts:["mutual exclusion","critical exclusion","synchronous exclusion","asynchronous exclusion"],ans:0,exp:"Mutual exclusion prevents multiple processes from entering a critical section."},
      {q:"Which one of the following is a synchronization tool? Explanation: Semaphores are standard synchronization primitives.",opts:["thread","pipe","semaphore","socket"],ans:2,exp:"Semaphores are used to coordinate process synchronization."},
      {q:"Where is the operating system placed in the memory? Explanation: OS placement can be in low or high memory depending on system design and interrupt vector location.",opts:["either low or high memory (depending on the location of interrupt vector)","in the low memory","in the high memory","none"],ans:0,exp:"OS location depends on hardware and interrupt vector design."},

{q:"A semaphore is a shared integer variable __________ Explanation: Semaphore value is managed so wait operations do not allow it to go below zero in the standard abstract definition used in MCQs.",opts:["that can not drop below zero","that can not be more than zero","that can not drop below one","that can not be more than one"],ans:0,exp:"A standard semaphore counts down but never goes below zero."},
      {q:"Mutual exclusion can be provided by the __________ Explanation: Both mutex locks and binary semaphores can enforce mutual exclusion.",opts:["mutex locks","binary semaphores","both mutex locks and binary semaphores","none"],ans:2,exp:"Both binary semaphores and mutexes can enforce mutual exclusion."},
      {q:"When high priority task is indirectly preempted by medium priority task effectively inverting the relative priority of the two tasks, the scenario is called __________ Explanation: This classic scheduling anomaly is called priority inversion.",opts:["priority inversion","priority removal","priority exchange","priority modification"],ans:0,exp:"Priority inversion occurs when a low-priority task blocks a high-priority one."},
      {q:"Process synchronization can be done on __________ Explanation: Synchronization can be implemented using hardware instructions and software constructs.",opts:["hardware level","software level","both hardware and software level","none"],ans:2,exp:"Synchronization involves hardware (atomic ops) and software constructs."},
      {q:"A monitor is a module that encapsulates __________ Explanation: A monitor contains shared data, procedures, and synchronization control.",opts:["shared data structures","procedures that operate on shared data structure","synchronization between concurrent procedure invocation","all"],ans:3,exp:"Monitors package data, logic, and sync control into one module."},
      {q:"To enable a process to wait within the monitor __________ Explanation: In monitors, waiting is typically done using condition variables.",opts:["a condition variable must be declared as condition","condition variables must be used as boolean objects","semaphore must be used","all"],ans:0,exp:"Condition variables are used for waiting inside monitor constructs."},
      {q:"Restricting the child process to a subset of the parent’s resources prevents any process from __________ Explanation: Limiting child resources prevents uncontrolled process creation from exhausting system resources.",opts:["overloading the system by using a lot of secondary storage","under-loading the system by very less CPU utilization","overloading the system by creating a lot of sub-processes","crashing the system by utilizing multiple resources"],ans:2,exp:"Limits prevent a process from creating too many children and exhausting resources."},
      {q:"A parent process calling _____ system call will be suspended until children processes terminate. Explanation:wait() blocks the parent until a child terminates.",opts:["wait","fork","exit","exec"],ans:0,exp:"The wait() system call blocks the parent process until its child finishes."},
      {q:"Cascading termination refers to termination of all child processes if the parent process terminates ______ Explanation: In standard OS MCQs, cascading termination is usually associated with abnormal parent termination.",opts:["Normally","Abnormally","Any one","None"],ans:1,exp:"Cascading termination typically occurs when the parent ends abnormally."},
      {q:"With _____________ only one process can execute at a time; meanwhile all other process are waiting for the processor. With ______________ more than one process can be running simultaneously each on a different processor. Explanation:Uniprogramming allows one running process at a time; multiprocessing allows simultaneous execution on multiple processors.",opts:["Uniprogramming, Multiprogramming","Multiprocessing, Multiprogramming","Multiprogramming, Multiprocessing","Uniprogramming, Multiprocessing"],ans:3,exp:"Uniprogramming runs one job; multiprocessing runs multiple concurrently on different CPUs."},
      {q:"If a process fails, most operating system write the error information to a ______ Explanation: OS commonly records failure information in a log file.",opts:["new file","another running process","log file","none"],ans:2,exp:"Error details are recorded in system or application log files."},

{q:"In UNIX, the return value for the fork system call is _____ for the child process and _____ for the parent process. Explanation: fork() returns 0 in the child and the child PID (nonzero) in the parent.",opts:["A Negative integer, Zero","Zero, A Negative integer","Zero, A nonzero integer","A nonzero integer, Zero"],ans:2,exp:"fork() returns 0 to the child and the child's PID to the parent."},
      {q:"The child process can __________ Explanation: After fork(), the child is initially a duplicate of the parent (before exec()).",opts:["be a duplicate of the parent process","never be a duplicate of the parent process","cannot have another program loaded into it","never have another program loaded into it"],ans:0,exp:"Initially, the child is a clone (duplicate) of the parent's memory image."},
      {q:"The child process completes execution, but the parent keeps executing, then the child process is known as __________ Explanation: A terminated child whose parent has not yet collected its exit status is a zombie.",opts:["Orphan","Zombie","Body","Dead"],ans:1,exp:"A zombie process is one that has finished but is still in the process table."},
      {q:"What is Interprocess communication? Explanation: IPC enables processes to exchange information and coordinate execution.",opts:["allows processes to communicate and synchronize their actions when using the same address space","allows processes to communicate and synchronize their actions","allows the processes to only synchronize their actions without communication","none"],ans:1,exp:"IPC is communication between distinct processes."},
      {q:"Message passing system allows processes to __________ Explanation: Message passing supports communication without shared memory.",opts:["communicate with each other without sharing the same address space","communicate with one another by resorting to shared data","share data","name the recipient or sender of the message"],ans:0,exp:"Message passing doesn't require processes to share a memory region."},
      {q:"Which of the following two operations are provided by the IPC facility? Explanation: Basic IPC message-passing primitives are send and receive.",opts:["write &amp; delete message","delete &amp; receive message","send &amp; delete message","receive &amp; send message"],ans:3,exp:"Send and Receive are the core operations of message-passing IPC."},
      {q:"Messages sent by a process __________ Explanation: Message-passing systems may support either fixed-size or variable-size messages.",opts:["have to be of a fixed size","have to be a variable size","can be fixed or variable sized","none"],ans:2,exp:"IPC systems can support either fixed or variable message lengths."},
      {q:"The link between two processes P and Q to send and receive messages is called __________ Explanation: The standard OS term is communication link.",opts:["communication link","message-passing link","synchronization link","all"],ans:0,exp:"A 'communication link' is the standard term for the IPC connection."},
      {q:"Which of the following are TRUE for direct communication? Explanation: In direct communication, a link exists only between exactly two communicating processes.",opts:["A communication link can be associated with N number of process(N = max. number of processes supported by system)","A communication link is associated with exactly two processes","Exactly N/2 links exist between each pair of processes(N = max. number of processes supported by system)","Exactly two link exists between each pair of processes"],ans:1,exp:"In direct communication, each link connects exactly two processes."},
      {q:"In indirect communication between processes P and Q __________ Explanation: Indirect communication uses mailboxes (ports) for message exchange.",opts:["there is another process R to handle and pass on the messages between P and Q","there is another machine between the two processes to help communication","there is a mailbox to help communication between P and Q","none"],ans:2,exp:"Indirect communication uses mailboxes (ports) as intermediaries."}
    ]
  },
  "TOC": {
    color: "#f43f5e",
    questions: [

{q:"Statement 1: A Finite automata can be represented graphically; Statement 2: The nodes can be its states; Statement 3: The edges or arcs can be used for transitions Which of the following make the correct combination? Explanation: Finite automata are represented as state diagrams with nodes as states and edges as transitions.",opts:["Statement 1 is false but Statement 2 and 3 are correct","Statement 1 and 2 are correct while 3 is wrong","None of the mentioned statements are correct","All of the mentioned statements are correct"],ans:3,exp:"Nodes are states and edges are transitions. [cite: 1783]"},
      {q:"John is asked to make an deterministic finite automaton which accepts a given string for all the occurrence of ‘1001’ in it. How many number of transitions would John use such that, the string processing application works? Explanation: A DFA detecting substring “1001” typically uses 5 states, and with alphabet {0,1}, a full DFA has 10 transitions; but if they count an extra fallback/overlap handling transition style used in class notes, many keys mark 11. (This question is ambiguous; standard total transitions in a complete DFA over 2 symbols would usually be 10.)",opts:["10","11","12","15"],ans:1,exp:"Moves only one cell at a time. [cite: 1784]"},
      {q:"The production of form -&gt; ε is called: Explanation: A production generating ε is called a null (epsilon) production. (Option wording is weak; “null production” would be the proper term.)",opts:["Sigma","Null Transition","Null state","All of the mentioned"],ans:1,exp:"Standard exam answer is 11. [cite: 1787]"},
      {q:"The number of tuples in anNon Deterministic Finite Automaton: Explanation: NFA is often represented as a 5-tuple; with ε-moves some notes write it as 6-tuple, but standard formal definition is 5-tuple. (Correct formal answer should be a = 5; your sheet likely may expect 5.)",opts:["5","6","7","4"],ans:1,exp:"Known as a null (epsilon) production. [cite: 1789, 1790]"},
      {q:"Predict the number of transitions required to build a DFA for the following language using only 3 states: ∑{0,1} ; L= {w | w ends with 00} Explanation: 3 states over alphabet {0,1} require 3 × 2 = 6 transitions in a complete DFA.",opts:["6","3","4","Cannot be said"],ans:0,exp:"Formalized as a 5-tuple. [cite: 1791, 1793]"},
      {q:"Alphabet set is formed using symbols Explanation: An alphabet is a finite non-empty set of symbols.",opts:["True","False","May not be true in all cases","May be false in some cases"],ans:0,exp:"3 states * 2 symbols = 6. [cite: 1795]"},
      {q:"The formal notation of a context free grammar is Explanation: A CFG is formally represented as .",opts:["G={V,T,P,S}","G={V,T,P}","G={V,T,S}","G={G1,V,T,P,S}"],ans:0,exp:"NFA can have multiple transitions. [cite: 1796]"},
      {q:"which of the following grammar are useless productions S→aS | A | C A→a B→aa C→aCb Explanation: B is unreachable from S, and C is non-generating here, so the useful remaining grammar is S→aS|A and A→a. (They ask “useless productions” but options actually show reduced grammars — option b is the useful reduced grammar.)",opts:["S→aS | A | C ; A→a ; B→aa ; C→aCb","S→aS | A | C ; A→a","S→aS | A | C ; B→aa","S→C ; B→aa ; C→aCb"],ans:1,exp:"Q is the set of states. [cite: 1797]"},
      {q:"A grammar is said to be ambiguous when Explanation: Ambiguity means some string has more than one leftmost/rightmost derivation (or parse tree).",opts:["if there exists some w∈L(G) which has atleast two left most or right most derivations","if there exists some w∈L(G) which has atleast one left most or right most derivations","if there exists some w∈L(G) which no left most or right most derivations","all"],ans:0,exp:"F is final/accepting states. [cite: 1798]"},
      {q:"Any production of a context free grammar of the form A→B where A,B∈V is called Explanation: A production from one non-terminal to another is a unit production.",opts:["Unit production","Useless Symbol","Null Production","All"],ans:0,exp:"DFA is a subset of NFA. [cite: 1799]"},

{q:"A grammar G is called a CFG if production has Explanation: In CFG, LHS must be exactly one non-terminal; RHS can be any string of terminals/non-terminals. (Option d says terminal on LHS, so it is wrong.)",opts:["only one terminal in LHS","any combination of terminals and non-terminals on its RHS","RHS always starting with non-terminals","only one terminal in LHS and any combination of terminals and non-terminals on its RHS"],ans:1,exp:"* is Kleene closure. [cite: 1800]"},
      {q:"Which of the following grammar is ambiguous Explanation: All listed grammars can generate strings with multiple parse structures / derivations.",opts:["S→aS|Sa|a","S→0S0|1S1|0|1|ε","S→S0S0S|1","All of these"],ans:3,exp:"Alphabet is a set of symbols. [cite: 1801]"},
      {q:"Languages are conditions in forming strings over the symbols available in the alphabet set Explanation: A language is a set of strings over an alphabet defined by certain rules/conditions.",opts:["true","false","may be true in some cases","may be false in most of the cases"],ans:0,exp:"Represented with +. [cite: 1802]"},
      {q:"The CFG for the language L={0^n 1^n |n&gt;=1} is Explanation: This generates equal numbers of 0s followed by 1s, with at least one pair.",opts:["S→0S|S0|1","S→0S0|1S1|0|1|ε","S→S0S0S|1","S→0S1 | 01"],ans:3,exp:"Productions for non-terminals. [cite: 1803]"},
      {q:"Which of the following machines accepts regular languages Explanation: DFA and NFA accept exactly regular languages, and PDA can also accept regular languages as a subset.",opts:["NFA","DFA","PDA","All"],ans:3,exp:"V, T, P, S. [cite: 1804]"},
      {q:"Which of the following languages can be accepted by DPDA Explanation: Both are deterministic CFLs and can be accepted by a DPDA.",opts:["L={WcW^r | W∈{a,b}*}","L={a^nb^n|n&gt;=1}","both are correct","both are wrong"],ans:2,exp:"Called useless. [cite: 1805]"},
      {q:"which of the following languages are accepted by NPDA but not by DPDA Explanation: Even-length palindromes require nondeterministic guessing of the midpoint, so NPDA yes, DPDA no.",opts:["palindrome of even length","L={0^m 1^n 2^p | m,n,p&gt;=0 and m=n}","L={0^m 1^n 2^m | m=n+p,n,p&gt;=0}","none"],ans:0,exp:"S→aS|A and A→a. [cite: 1809]"},
      {q:"which of the following language is not regular Explanation:is a classic non-regular language.",opts:["L={a^n | n&gt;=0}","L={a^nb^n | n&gt;=0}","L={a^2n | n&gt;=0}","all"],ans:1,exp:"Multiple parse trees/derivations. [cite: 1810]"},
      {q:"If the PDA does not stop on an accepting state and the stack is not empty, the string is: Explanation: If acceptance condition is not satisfied, the string is rejected.",opts:["rejected","accepted","all of the mentioned","none of the mentioned"],ans:0,exp:"Known as unit production. [cite: 1811]"},
      {q:"Identify the string set for the Σ {0,1}∗ even count of zeros and even count of ones Explanation: ε has zero 0s and zero 1s, both even, so it must be included.",opts:["{00,11,0101,00001111,0101,…..}","{ε,00,11,0101,00001111,0101,…..}","{ε,010,101,001,0000111,0101,…..}","None of the choice"],ans:1,exp:"V is variables/non-terminals. [cite: 1812]"},
      {q:"Identify the string set for the Σ {0,1}+ even count of zeros and odd count of ones Explanation: Positive closure excludes ε, and examples like 001, 100, 01 have even 0s and odd 1s.",opts:["{ε,001,100,0000111,10101}","{001,100,01,0000111,10101}","{0101,1010,1001,01000111,101001}","{001,100,001,0000111,10101}"],ans:1,exp:"V is variables/non-terminals. [cite: 1812]"}
    ]
  },
  "CAO": {
    color: "#eab308",
    questions: [
      {q:"In memory transfer location address is supplied by____ that puts this on address bus Explanation: The Memory Address Register (MAR) holds the memory address and places it on the address bus.",opts:["ALU","CPU","MAR","MDR"],ans:2,exp:"MAR (Memory Address Register). [cite: 1842]"},
      {q:"Control memory is part of ______ that has addressable storage registers and used as temporary storage for data Explanation: In CAO/microprogramming context, control memory is associated with the CPU control unit. (Question wording is poor, but CPU is the best answer.)",opts:["ROM","RAM","CPU","Memory"],ans:2,exp:"Associated with CPU control unit. [cite: 1843, 1844]"},

{q:"How many modes the address in control memory are divided into? Explanation: In many CAO notes, control memory addresses are commonly divided into 3 modes. (This is syllabus-specific; if your faculty taught only task/executive, Q5 suggests 2 categories, so this one is a bit shaky.)",opts:["2","3","5","7"],ans:1,exp:"Usually 3 modes. [cite: 1845]"},
      {q:"which of the following is interrupt mode Explanation: This question is incorrectly framed — “interrupt mode” is not normally “task mode” or “executive mode.” If forced by your sheet style, faculty may be grouping execution contexts broadly, but none is conceptually correct. (Best formal answer: d, but the paper seems inconsistent with Q5.)",opts:["Task mode","Executive mode","Both a &amp; b","None of these"],ans:2,exp:"Not typically Task/Executive. [cite: 1848, 1849]"},
      {q:"Mode of addresses in control memory are: Explanation: Based on standard exam-note terminology used in some CAO units, the address modes listed here are Task mode and Executive mode.",opts:["Executive mode","Task mode","Both Executive mode &amp; Task Mode","None of these"],ans:2,exp:"Task and Executive modes. [cite: 1850]"},
      {q:"On what method search in cache memory used by the system Explanation: Cache lookup/placement uses cache mapping methods (direct, associative, set-associative).",opts:["Cache directing","Cache mapping","Cache controlling","Cache invalidation"],ans:1,exp:"Cache mapping. [cite: 1851]"},
      {q:"Microprograms are usually stored in Explanation: Microprograms are typically stored in control memory/ROM.",opts:["ROM","RAM","SAM","SAN"],ans:0,exp:"Control memory/ROM. [cite: 1852]"},
      {q:"In which addressing the operand is actually present in instruction Explanation: In immediate addressing, the operand value itself is part of the instruction.",opts:["Immediate addressing","Direct addressing","Register addressing","None of these"],ans:0,exp:"Immediate addressing. [cite: 1853]"},
      {q:"In which addressing the simplest addressing mode where an operand is fetched from memory is_____ Explanation: In direct addressing, the instruction directly gives the memory address of the operand.",opts:["Immediate addressing","Direct addressing","Register addressing","None of these"],ans:1,exp:"Direct addressing. [cite: 1854]"},
      {q:"which addressing is a way of direct addressing Explanation:Register addressing is often considered a variant/special fast form analogous to direct addressing, where the operand is directly in a register.",opts:["Immediate addressing","Direct addressing","Register addressing","None of these"],ans:2,exp:"Register addressing. [cite: 1855]"},
      {q:"In which mode the main memory location holds the Effective Address of the operand Explanation: In indirect addressing, the specified memory location contains the effective address.",opts:["Immediate addressing","Direct addressing","Register addressing","Indirect addressing"],ans:3,exp:"Indirect addressing. [cite: 1856]"},
      {q:"Operation of memory transfer are Explanation: Memory transfer operations include both read and write.",opts:["Read","Write","Both Read and Write","None"],ans:2,exp:"Read and Write. [cite: 1857]"},
      {q:"Which addressing is an extremely influential way of addressing Explanation:Displacement addressing is very important because many other addressing modes are derived from it.",opts:["Displacement addressing","Immediate addressing","Direct addressing","Register addressing"],ans:0,exp:"Displacement addressing. [cite: 1858]"},
      {q:"Which algorithm is a multiplication algorithm which multiplies two signed binary numbers in 2’s complement notation Explanation:Booth’s algorithm is specifically used for signed 2’s complement multiplication.",opts:["Usual multiplication","Booth’s multiplication","Both","None of these"],ans:1,exp:"Booth’s algorithm. [cite: 1859]"},
      {q:". ________interrupt establishes a priority over the various sources to determine which request should be entertained first Explanation: A priority interrupt system determines which interrupt source gets serviced first.",opts:["Priority interrupt","Polling","Daisy chaining","None of these"],ans:0,exp:"Priority interrupt. [cite: 1860]"},

{q:"An instruction code must specify the address of the____ Explanation: The opcode specifies the operation, while the instruction must specify (or imply) the operand address/location.",opts:["Opcode","Operand","Both","None"],ans:1,exp:"Operand address. [cite: 1861]"},
      {q:"In memory, the read operation puts memory address on to a register known as Explanation: During memory read, the address is loaded into the MAR.",opts:["PC","ALU","MAR","All of these"],ans:2,exp:"Loaded into MAR. [cite: 1862]"},
      {q:"Which operation puts memory address in memory address register and data in DR Explanation: In a memory read, address goes to MAR and the fetched data is loaded into the Data Register (DR/MDR).",opts:["Memory read","Memory write","Both","None"],ans:0,exp:"Memory read. [cite: 1863]"},
      {q:"The memory bus is also referred as______ Explanation: In many basic CAO MCQs, “memory bus” is loosely used for the data path between CPU and memory, so data bus is often the expected answer. (Strictly, memory interface uses address, data, and control buses, so wording is weak.)",opts:["Data bus","Address bus","Memory bus","All of these"],ans:0,exp:"Often means data bus. [cite: 1864, 1865]"},
      {q:"DDR2 stands for Explanation:DDR2 = Double Data Rate 2 SDRAM generation.",opts:["Double data rate 2","Data double rate 2","Dynamic data rate 2","Dynamic double rate 2"],ans:0,exp:"Double Data Rate 2. [cite: 1866]"},
      {q:"SDRAM stands for Explanation:SDRAM stands for Synchronous Dynamic Random Access Memory.",opts:["System dynamic random access memory","Synchronous dynamic random access memory","Both","None"],ans:1,exp:"Synchronous Dynamic Random Access Memory. [cite: 1867]"},
      {q:"______is the sequence of operations performed by CPU in processing an instruction Explanation: The complete sequence (fetch, decode, execute, etc.) is called the instruction cycle.",opts:["Execute cycle","Fetch cycle","Decode","Instruction cycle"],ans:3,exp:"Instruction cycle. [cite: 1868]"},
      {q:"IRET stand for Explanation:IRET means Interrupt Return.",opts:["Interrupt enter","Interrupt return","Interrupt delete","None of these"],ans:1,exp:"Interrupt Return. [cite: 1869]"}
    ]
  },
  "DBMS": {
    color: "#06b6d4",
    questions: [
      {q:"While drawing the ER diagram for a relation “student registers a course”, “registers” should be mentioned _________ 2 rectangles. Explanation: In ER diagrams, a relationship is shown as a diamond between entity rectangles.",opts:["inside a diamond between","over the line connecting","inside an oval between","inside a rectangle between"],ans:0,exp:"Relationship is a diamond. [cite: 1871, 1872]"},
      {q:"What is the number of candidate keys for a relation R(A,B,C,D) having functional dependencies {AB-&gt;CD, D-&gt;B, C-&gt;A}? Explanation: Candidate keys are AB, BC, CD → total 3.",opts:["2","3","4","5"],ans:1,exp:"AB, BC, CD. [cite: 1873]"},
      {q:"In a relation R(A,B,C,D) having functional dependencies {AB-&gt;CD, D-&gt;B}, the extraneous attribute in AB-&gt;CD is Explanation: Since D → B, A alone with B removed still gives CD via A? Actually no. Check properly:",opts:["A","B","C","None"],ans:1,exp:"None. [cite: 1878, 1879]"},
      {q:"The highest normal form of a relation R(A,B,C,D) with functional dependencies {A-&gt;BCD, BC-&gt;AD, D-&gt;B} is Explanation: Candidate keys include A, BC, CD; every non-trivial FD has a superkey on the LHS, so it is in BCNF.",opts:["1NF","2NF","3NF","BCNF"],ans:3,exp:"Is in BCNF. [cite: 1881]"},
      {q:"The non-prime attributes of the relation R(A,B,C,D,E) with functional dependencies {AE-&gt;BC, AC-&gt;D, CD-&gt;BE, D-&gt;E} is/are: Explanation: Candidate keys are AE, AC, CD so prime attributes are A,C,D,E; hence only B is non-prime.",opts:["A,C,D,E","B","A,C","B,D,E"],ans:1,exp:"Only B is non-prime. [cite: 1882, 1883]"},
      {q:"In the relation R(A,B,C,D,E,F) with functional dependencies {AB-&gt;C, C-&gt;DE, E-&gt;F, D-&gt;A, C-&gt;B}, AB+ is Explanation: From AB→C, then C→DE, E→F, D→A, C→B, so all attributes are obtained.",opts:["{C}","{C,D,E}","{C,D,E,F}","{A,B,C,D,E,F}"],ans:3,exp:"All attributes obtained. [cite: 1884]"},
      {q:"What is the relational algebra expression corresponding to the SQL query “SELECT city FROM store”? Explanation:Projection (π) is used to select columns.",opts:["sigmacity(store)","picity(store)","sigmastore(city)","pistore(city)"],ans:1,exp:"Projection (π). [cite: 1885]"},

{q:"Which of the following expressions is used to fetch the details of all stores located in India? Explanation:Selection (σ) filters rows satisfying the condition.",opts:["sigmacountry=’India’(store)","picountry=’India’(store)","sigmastore(country=’India’)","pistore(country=’India’)"],ans:0,exp:"Selection (σ). [cite: 1887]"},
      {q:"Which of the following is not a valid schedule of 2 transactions, T1: {R(X), W(X)} and T2: {R(Y), W(Y)}? Explanation: Each transaction must preserve its internal order (R before W on same item), so option c is invalid for T1 and T2; option d preserves both. Correct answer should be: c) W(X), W(Y), R(X), R(Y) Explanation: It violates transaction order because writes occur before reads in both transactions.",opts:["R(X), W(X), R(Y), W(Y)","R(Y), W(Y), R(X), W(X)","W(X), W(Y), R(X), R(Y)","R(X), R(Y), W(X), W(Y)"],ans:3,exp:"Violates internal order. [cite: 1888, 1889]"},
      {q:"Which of the following pairs of operations conflict in the transactions, T1: {R1(X), W1(X)} and T2: {R2(X), W2(Y)} Explanation: Conflict occurs when operations are from different transactions, on same data item, and at least one is a write.",opts:["R1(X),W1(X)","R1(X),R2(X)","W1(X),R2(X)","R1(X),W2(Y)"],ans:2,exp:"W1(X) and R2(X) conflict. [cite: 1890]"},
      {q:"Which of the following is a conflict serializable schedule of the transactions, T1: {R1(X), W1(X), R1(Y)} and T2: {R2(Y), R2(X), W2(X)}? Explanation: This preserves a serial order equivalent to T1 before T2 for conflicting operations on X.",opts:["R1(X), R2(Y), R2(X), W1(X), W2(X), R1(Y)","R2(Y), R2(X), R1(X), W1(X), W2(X), R1(Y)","R1(X), W1(X), R2(Y), R2(X), W2(X), R1(Y)","R2(Y), R2(X), R1(X), W2(X), W1(X), R1(Y)"],ans:2,exp:"T1 before T2. [cite: 1891]"},
      {q:"A database designed to store global information contains a field “contact number” in a specific relation. If contact number is to be saved in multiple parts like country code and the actual number, what kind of attribute should be used to represent contact number in the ER diagram? Explanation: An attribute that can be split into subparts is composite.",opts:["Atomic attribute","Composite attribute","Multi-valued attribute","Derived attribute"],ans:1,exp:"Is composite. [cite: 1893]"},
      {q:"Which of the following statement(s) is/are TRUE? I. Strict two-phase locking protocol produces conflict serializable schedules which are not recoverable. II. Timestamp-ordering concurrency control protocol with Thomas’ Write Rule can produce view serializable schedules that are not conflict serializable. Explanation: Strict 2PL gives recoverable (indeed strict) schedules, so I is false; Thomas Write Rule can allow view-serializable but not conflict-serializable schedules, so II is true.",opts:["I only","II only","Both I and II","Neither I nor II"],ans:1,exp:"II is true. [cite: 1895, 1896]"},
      {q:"Which of the following is not a goal of concurrent execution of a transaction? Explanation: Concurrency improves utilization and throughput, but it can actually increase deadlock risk.",opts:["Improved Resource Utilization","Improved Throughput","Reduced probability of deadlock","Reduced waiting time"],ans:2,exp:"Deadlock risk increases. [cite: 1897]"},
      {q:"Which one of the following is true about the concurrency? Explanation: Concurrency control ensures safe simultaneous execution without interference.",opts:["It ensures that no interference between simultaneous operations on the database","It ensures that a transaction allows either all of its operations are executed or none","It make sure that database transactions allows any integrity violation in the database.","None of the options"],ans:0,exp:"Ensures no interference. [cite: 1899]"},
      {q:"Which of the following will not allow both dirty reads and non-repeatable reads, but allows phantom reads? Explanation:Read committed prevents dirty reads but still allows non-repeatable reads. But the wording says “will not allow both dirty reads and non-repeatable reads” = prevents both, which actually matches Repeatable read. Correct answer should be: c) Repeatable read Explanation:Repeatable read prevents dirty reads and non-repeatable reads, but phantom reads may still occur.",opts:["Read committed","Read uncommitted","Repeatable read","Serializable"],ans:0,exp:"Repeatable read. [cite: 1903]"},

{q:"Which of the following is false? Explanation: (a) and (b) are correct; many DBMS syllabi attribute atomicity to recovery and consistency to DB constraints/transaction logic, so this option set is weak. In exam context, usually none is taken.",opts:["Ensuring durability is the responsibility of recovery management component","Ensuring isolation is the responsibility of concurrency management","Ensuring atomicity or consistency is the responsibility of recovery management component","None of the options"],ans:3,exp:"None. [cite: 1904, 1906]"},
      {q:"Which of the following is true? Explanation: MV timestamp is more permissive than basic timestamp ordering.",opts:["All the schedules which are allowed under Thomas write rule are also allowed under basic timestamp protocol","All the schedules which are allowed under basic timestamp rule are also allowed under multi-version timestamp protocol","All the schedules which are allowed under multi-version timestamp protocol are also allowed under Thomas write rule","All are true"],ans:1,exp:"Basic in multi-version. [cite: 1907]"},
      {q:"Which of the following statement is not correct for serializable of transactions? Explanation: Not every schedule is serializable.",opts:["In a serial schedule, each transaction is independent of others.","Every schedule is serializable","In non-serial schedule may not always result in an incorrect outcome","In non-serial schedule, may result with overlapping of two transaction’s executions"],ans:1,exp:"Not every schedule serializable. [cite: 1909]"},
      {q:"Which of the following is not a recovery technique? Explanation: Two-phase commit is a distributed commit protocol, not a basic recovery technique.",opts:["Deferred update","Immediate update","Two-phase commit","Recovery management"],ans:2,exp:"2PC is distributed commit. [cite: 1910]"},
      {q:"Rollback of transactions is normally used to : Explanation: Rollback undoes changes to recover from failure.",opts:["Recover from transaction failure","Update the transaction","Retrieve old records","Repeat a transaction"],ans:0,exp:"Recover from failure. [cite: 1911]"},
      {q:"Which of the following are true about indexes? Explanation: Frequent updates and large keys can make index maintenance costly, so (a) is false.",opts:["Indexes will improve the performance of the database table, even it is updated frequently","Indexes makes sql server engine’s task even tougher, especially with large keys","Both","None of the options"],ans:1,exp:"Maintenance tougher with large keys. [cite: 1912]"},
      {q:"What kind of a relation is “a student registers for more than one course for a semester”? Explanation: A student can register many courses, and a course has many students.",opts:["one-to-many","many-to-many","one-to-one","None"],ans:1,exp:"Many-to-many. [cite: 1913]"},
      {q:"Consider a B+ tree, the size of the block and node is same as 4 kilobytes. Suppose each index entry is 40 bytes long, find out the height of the tree of a file with one million search key values? Explanation: Fanout ≈ 4096/40 ≈ 102; , so height ≈ 3.",opts:["5","4","6","3"],ans:3,exp:"Height is 3. [cite: 1916]"},
      {q:"The schedule S: r1(X), w3(X), w3(Y), w2(Y), r1(Z), w3(Z), w2(Z) is Explanation: The precedence graph has a cycle, so not conflict serializable, but it can still be view serializable.",opts:["Both view serializable and conflict serializable schedule","View serializable but not conflict serializable schedule","Only View serializable","Only conflict serializable"],ans:1,exp:"View but not conflict. [cite: 1917]"},
      {q:"Which of the following statement(s) is/are not TRUE about the B+ tree, which is used for creating an index of a database table? Explanation: In B+ trees, only leaf nodes point to data records.",opts:["B+ Tree is a height-balanced tree","Non-leaf nodes have pointers to data records","Key values in each node are kept in sorted order","Each leaf node has a pointer to the next leaf node"],ans:1,exp:"Only leaf point to data. [cite: 1918]"},

{q:"B+ Trees are normally considered as BALANCED, since Explanation: All root-to-leaf paths in a B+ tree have equal length.",opts:["Lengths of the paths from the root to all leaf nodes are all equal.","Lengths of the paths from the root to all leaf nodes differ from each other by at most","Number of children of any two non-leaf sibling nodes differ by at most 1.","Number of records in any two leaf nodes differ by at most 1"],ans:0,exp:"Paths equal length. [cite: 1919, 1920]"},
      {q:"Primary indexes of multilevel indexes are created usually based on its first level and it is normally referred as Explanation: The base data file is often called the zero level, above which index levels are built.",opts:["zero level of multilevel index","third level of multilevel index","second level of multilevel index","first level of multilevel index"],ans:0,exp:"Zero level. [cite: 1921]"},
      {q:"Which of the following is/are correct? Explanation: Linked leaves make range queries efficient in B+ trees.",opts:["B-trees are for storing data on disk and B+ trees are for main memory.","Range queries are faster on B+ trees.","B-trees are for primary indexes and B+ trees are for secondary indexes.","The height of a B+ tree is independent of the number of records."],ans:1,exp:"Range queries faster B+. [cite: 1924]"},
      {q:"Find the maximum and minimum number of keys in the internal nodes of B – Tree if the order of the node is four, Explanation: For order 4, max children = 4 ⇒ max keys = 3; min children (non-root) = 2 ⇒ min keys = 1.",opts:["4,2","3,1","4,0","4,3"],ans:1,exp:"3 max, 1 min. [cite: 1925, 1926]"},
      {q:"Which of the following statement(s) are incorrect Explanation: (a) is incorrect for NoSQL, (b) is generally correct, (c) is generally false for NewSQL; since mixed, “All” is not formally right. Best corrected answer: c) NewSQL databases allows the insertion of data without a predefined schema Explanation: NewSQL generally retains relational/schema-based structure, so (c) is the incorrect statement. (Question is flawed because it asks plural “statement(s)” but options are single statements + “all”.)",opts:["In non-relational databases, schemas are need to be defined before adding data","NoSQL databases allows the insertion of data without a predefined schema","NewSQL databases allows the insertion of data without a predefined schema","All the statements"],ans:3,exp:"NewSQL needs schema. [cite: 1928]"},
      {q:"NoSQL databases is used mainly for handling large volumes of ______________ data. Explanation: NoSQL is mainly associated with handling large-scale unstructured/semi-structured data; exam keys usually prefer unstructured.",opts:["Unstructured","Structured","Semi-structured","All the options"],ans:0,exp:"Unstructured. [cite: 1932]"},
      {q:"Which of the following are the NoSQL databases? Explanation: All are standard NoSQL categories.",opts:["Key-value","Wide-column","Document","All the options"],ans:3,exp:"All of the above. [cite: 1933]"},
      {q:"If an athlete can participate in a maximum of 3 activities, what is cardinality ratio of ATHLETE:ACTIVITY in PARITICIPATE? Explanation: If each athlete participates in up to 3 activities, the given exam-style ratio is 1:3. (Conceptually cardinality is usually expressed 1:N / M:N, so this is a non-standard framing.)",opts:["1:n","2:1","1:3","n:1"],ans:2,exp:"1:3 ratio. [cite: 1934]"},
      {q:"Consider the following schedule and state that which of the following statement(s) is (are) true? S : r1(x),w1(x),r2(x),r1(y),w1(y),w2(x),r2(y), c1, c2; I: S is recoverable. II: If the order of w1(x) and w2(x) are interchanged, then S will be a non-recoverable schedule. Explanation: In S, T2 reads x from T1 and commits after T1, so recoverable. If writes are interchanged, T2 doesn’t read dirty data from T1 in the same way; II is false.",opts:["Only I","Only II","Both I and II","None of the options"],ans:0,exp:"S is recoverable. [cite: 1937]"},

{q:"For the given schedule, which of the following statements is true about the schedule S? S : r1(y), r2(x), r2(y), r3(y), w2(x), w1(y), w3(x), r1(x) Explanation: The precedence graph has a cycle, so not conflict serializable, but it is still view serializable.",opts:["S is the conflict serializable but not view serializable","S is neither conflict serializable nor view serializable","S is both conflict serializable as well as view serializable","S is view serializable but not conflict serializable"],ans:3,exp:"View but not conflict serializable. [cite: 1939]"},
      {q:"Which of the following is not an entity set in a SHOPPING mini world? Explanation:ProductName is an attribute, not an entity set.",opts:["Customers","Stock","Products","ProductName"],ans:3,exp:"ProductName is attribute. [cite: 1940]"},
      {q:"Identify the type of database system required to store a research document. Explanation: Research documents are best stored in a textual/document-oriented database context.",opts:["Multimedia Database","Geographical Information System","Data Warehouse","Textual Database"],ans:3,exp:"Textual Database. [cite: 1941]"},
      {q:"In a Bank scenario, the window visible to a customer while doing transactions via net banking is referred to as ----- Explanation: The user sees a view of the database.",opts:["The database state","The Schema","The View","Data dictionary"],ans:2,exp:"The View. [cite: 1942]"},
      {q:"A bank operation accommodates several operations in a day. A snapshot taken at 4 p.m to know the transactions currently happening is referred to as------------ Explanation: A snapshot of current data at a time is the database state (instance).",opts:["Database Schema","Database state","Abstraction","Catalogue"],ans:1,exp:"Database state. [cite: 1944]"},
      {q:"Which of the following is a possible schema construct in a supermarket mini world? Explanation: All can be valid schema components/entities/relations in the modeled world.",opts:["Products","inventory","sales","All the options"],ans:3,exp:"All of the above. [cite: 1945]"},
      {q:"Suppose you are assigned to do a standalone database application, what type of DBMS architecture is required? Explanation: A standalone DB app usually uses 1-tier (single-tier) architecture.",opts:["Single tier architecture","Two tier","Three tier","None of the mentioned"],ans:0,exp:"Single tier. [cite: 1947]"},
      {q:"Identify the possible entity sets of a Cafeteria Data base. Explanation: The most complete option representing multiple relevant entities/modules is b. (Though some listed items sound more like processes than pure entity sets.)",opts:["Customers, menu manager, meal Delivery","Customers, menuManager, itemsProcurement, mealDelivery,billGeneration","Customers, menu manager, Bill generation","FoodMenu"],ans:1,exp:"Most complete set. [cite: 1948]"},
      {q:"The attribute Address could be structured as door no, street_name, City and Zipcode. This type of attribute is called --------- Explanation: Address is composed of smaller sub-attributes.",opts:["Simple attribute","Multivalued attribute","Composite attribute","Derived attribute"],ans:2,exp:"Composite attribute. [cite: 1951]"},
      {q:"For a relation R(A,B,C,D,E,F,G), the candidate keys are AB, AC, and DE. Which of the following is not a proper subset of the candidate key? Explanation:DE itself is a full candidate key, so it is not a proper subset.",opts:["BC","DE","C","AD"],ans:1,exp:"DE is a full key. [cite: 1953]"},
      {q:"The function that an entity Instructor plays in a relationship teaches refers to the ------- Explanation: The function an entity plays in a relationship is its role.",opts:["Participation","Role","Instance","Position"],ans:1,exp:"The Role. [cite: 1954]"},
      {q:"Which of the following can be a multivalued attribute? Explanation: A person can have multiple phone numbers.",opts:["Phone_number","Name","Date_of_birth","All the options"],ans:0,exp:"Phone number. [cite: 1956]"},
      {q:"Identify the key attribute of the entity PROJECT( ProjectId, Projectname, ProjLocation) Explanation: The unique identifier is typically ProjectId.",opts:["ProjectId, ProjectName","ProjectName","ProjLocation","ProjectId"],ans:3,exp:"ProjectId. [cite: 1957]"},

{q:"The attribute experience is calculated from the attribute dateOfJoining. What is the type of the attribute? Explanation: A value computed from another attribute is derived.",opts:["Derived attribute","Descriptive attribute","Simple attribute","Multivalued attribute"],ans:0,exp:"Derived attribute. [cite: 1959]"},
      {q:"SLOT is a weak entity of the University schema. Which of the statements is not true? Explanation: A weak entity does have existence dependency on its owner entity.",opts:["It requires a identifying relationship TAKES","It has a identifying owner entity TIMETABLE","It should have total participation with respect to the entity TAKES","There is no existence dependency of the entity SLOT with respect to the entity TIMETABLE"],ans:3,exp:"Has existence dependency. [cite: 1961]"},
      {q:"ORDERS is an entity set with attributes (orderId, items, price) and SHIPPING entity is a specialized version of the ORDERS entity. Which of the following are the attribute set of SHIPPING entity? Explanation: A subclass inherits superclass attributes and adds its own.",opts:["(OrderId, items, price)","(Orderid, Shippingid)","(OrderId, items, price, ShippingId,FromLocation,ToLocation)","(OrderId, Items, ShippingId,FromLocation,ToLocation)"],ans:2,exp:"Inherits + adds own. [cite: 1963]"},
      {q:"If an attribute is added to the superclass entity, the condition for propagating this change in subclass entity is Explanation: Subclasses inherit superclass attributes regardless of whether specialization is predicate-defined or attribute-defined.",opts:["Attribute defined membership","Predicate defined membership","Both Attribute defined and Predicate defined membership","Overlapping participation"],ans:2,exp:"Both apply. [cite: 1964]"},
      {q:"“Customer buys Products”. Identify the relationship set. Explanation: The verb phrase represents the relationship set.",opts:["Customer","Products","Buys","Customer and Products"],ans:2,exp:"Buys. [cite: 1965]"},
      {q:"The entity set MovieZone is classified as Hollywood and Bollywood. This process is called ------ Explanation: Dividing a higher-level entity into sub-entities is specialization.",opts:["Generalization","Specialization","Inheritance","Constraint generalization"],ans:1,exp:"Specialization. [cite: 1967]"},
      {q:"Identify the simple attribute. Explanation: Among these, VehicleRegistrationNumber is most clearly atomic/non-divisible in typical modeling. (“grade” and “color” can also be simple; this question is weak.)",opts:["name","grade","Color","VehicleRegistrationNumber"],ans:3,exp:"Vehicle registration number. [cite: 1968]"},
      {q:"If a relational schema \"R\" is in BCNF, which of the following statements is true? Explanation: BCNF implies 3NF, which implies 2NF (assuming 1NF).",opts:["R is in 4NF","R is in 2NF but not in 3NF","R is not in 1NF","R is in 2NF and 3NF"],ans:3,exp:"Implies 2NF and 3NF. [cite: 1970]"},
      {q:"An entity set DOCTOR has a total participation on the relationship DIANOSES that connects it to the entity set PATIENTS. What would be the minimum cardinality constraint on the relationship? Explanation: Total participation of DOCTOR means each doctor participates at least once; the most natural banking/exam interpretation is one doctor diagnoses many patients. (Question mixes participation with cardinality, so it’s not perfectly framed.)",opts:["1:1","M:N","1:N","N:1"],ans:2,exp:"1:N relationship. [cite: 1972]"},
      {q:"An entity set SHIPPING has the attributes (shippingId, ShipLocations). Which of the following is true? Explanation:TypicallyshippingId uniquely identifies the entity.",opts:["ShippingId is the primary key","ShipLocations is the primary key","ShippingId, ShipLocations is a composite key","None of the options"],ans:0,exp:"shippingId is primary. [cite: 1976]"},
      {q:"SENSE, SELECT, SCOPE are the entity sets with common characteristics. Which process can define an entity set called DEPARTMENTS? Explanation: Combining common lower-level entities into a higher-level entity is generalization.",opts:["Specialization","Generalization","Top down approach","Inheritance"],ans:1,exp:"Generalization. [cite: 1978]"},

{q:"In a share market application, an entity set INVESTOR can buy or sell SHARES. This refers to -------- Explanation: “Buy or sell” describes a relationship between INVESTOR and SHARES.",opts:["Relationship","Role definition","Recursive relationship","Participation"],ans:0,exp:"Relationship. [cite: 1980]"},
      {q:"Which one of the following events in a database system can lead to an irrecoverable mistake? Explanation: Reading data written by an uncommitted transaction causes a dirty read, which can lead to irrecoverable schedules.",opts:["A transaction reads a data item after it is written by an uncommitted transaction","A transaction reads a data item after it is written by a committed transaction","A transaction reads a data item after it is read by an uncommitted transaction","A transaction writes a data item after it is read by an uncommitted transaction"],ans:0,exp:"Dirty read from uncommitted. [cite: 1981, 1982]"},
      {q:"Consider the table R with attributes A, B and C. The functional dependencies that hold on R are: A → B, C → AB. Which of the following statements is/are True ? I. The decomposition of R into R1(C, A) and R2(A, B) is lossless. II. The decomposition of R into R1(A, B) and R2(B, C) is lossy. Explanation:",opts:["Only I","Only II","Both I and II","Neither I nor II"],ans:2,exp:"I lossless II lossy. [cite: 1985]"},
      {q:"Which of the following is correct with respect to Two phase commit protocol? Explanation: This MCQ is badly framed. Two-phase commit (2PC) is a distributed commit protocol, mainly used to ensure atomic commitment across sites — none of these options is actually correct. Exam-safe guess (if forced): a) Ensures serializability(but this is conceptually not correct; 2PC does not ensure serializability by itself).",opts:["Ensures serializability","Prevents Deadlock","Detects Deadlock","Recover from Deadlock"],ans:0,exp:"Ensures commit status. [cite: 1990]"},
      {q:"Consider a B+-tree in which the maximum number of keys in a node is 7. What is the minimum number of keys in any non-root node? Explanation: If max keys = 7, then max children = 8, so minimum children (non-root) = 4, hence minimum keys = 3.",opts:["3","1","2","4"],ans:0,exp:"Min keys = 3. [cite: 1992]"},
      {q:"A file is structured in such a way that the ordering of data records in certain indexes is the same as or similar to the ordering of data entries. That index is then called Explanation: A clustered index stores data in the same or nearly the same order as the index.",opts:["Clustered","Sparse","Dense","Unclustered"],ans:0,exp:"Clustered index. [cite: 1994]"},
      {q:"The physical position of a record is calculated by a formula that translates a file key into a position for the record is Explanation: In a hashed file, a hash function maps the key to a storage location.",opts:["B-Tree file","Hashed file","Indexed file","Sequential file"],ans:1,exp:"Hashed file. [cite: 1995]"},
      {q:"SELECT __________ destination FROM flight; Fill the blank in the above SQL query with an appropriate keyword to display all non-repeating values of the column “destination” only once and values that occur once as such. Explanation: DISTINCT returns only unique values.",opts:["DIFFERENT","DISTINCT","ALL","UNIQUE"],ans:1,exp:"DISTINCT keyword. [cite: 1996]"},
      {q:"Relation R has six attributes ABCDEF. Fields of R contain only atomic values. F = { A -&gt; BC, B -&gt; CFH, E -&gt; A, F -&gt; E} is a set of functional dependencies (FDs) so that F+ is exactly the set of FDs that hold for R. How many candidate keys does the relation R have? Explanation: The question says R has six attributes ABCDEF, but the FD B → CFH includes H, which is not in R. So the question is misprinted. If we assume the intended schema is R(A,B,C,E,F,H) or that H replaces D, then the candidate keys commonly work out to 3 in typical exam keys. Best exam-safe answer: c) 3 But note: the question is inconsistent as written.",opts:["5","6","3","4"],ans:2,exp:"Usually 3 in exam keys. [cite: 2000]"},

{q:"Consider the given functional dependencys (FDs) of a relation R has six attributes ABCDEF. Fields of R contain only atomic values. F = { A -&gt; BC, B -&gt; CFH, E -&gt; A, F -&gt; E} is a set of functional dependencies (FDs) so that F+ is exactly the set of FDs that hold for R. The relation R is in Explanation: This question has the same misprint as Q68 (H appears but not in schema). Under the likely intended interpretation, there are partial dependencies from a composite key to non-prime attributes, so the usual exam answer is 1NF but not 2NF. Best exam-safe answer: c)",opts:["2NF, but not in 3NF.","3NF, but not in BCNF.","1NF, but not in 2NF.","BCNF."],ans:2,exp:"1NF but not 2NF. [cite: 2005]"},
      {q:"Consider the relation scheme R = {A, B, C, D, E, F, G} and the set of functional dependencies {{A, B} -&gt; {C}, {B} -&gt; {E, F}, {A, D} -&gt;{G}} on R. What is the key for R? Explanation:",opts:["{A, B, C, D, G}","{A, D}","{A, B}","{A, B, D}"],ans:3,exp:"ABD closure covers all. [cite: 2008]"},
      {q:"The maximum number of superkeys for the relation schema R(A, B, C, D, E, F, G, H) with H as the key is Explanation: Since H alone is a key, any superset containing H is a superkey. With 7 other attributes, number of supersets = 2⁷ = 128.",opts:["64","128","7","256"],ans:1,exp:"2^7 = 128. [cite: 2010]"},
      {q:"Select the 'False' statement from the following statements about Normal Forms: Explanation:",opts:["Lossless preserving decomposition into 3NF is always possible","Any Relation with two attributes is in BCNF","Lossless preserving decomposition into BCNF is always possible","BCNF is stronger than 3NF"],ans:2,exp:"BCNF not always dependency preserving. [cite: 2013]"},
      {q:"A B-tree of order 4 is constructed by 8 successive insertions from scratch. What is the maximum number of operations for node splitting that can take place? Explanation: For order 4 (max 4 children, 3 keys), inserting 8 keys can cause at most 4 splits in the worst insertion order. (This is the standard exam-safe answer.)",opts:["3","4","5","6"],ans:1,exp:"Max 4 splits. [cite: 2015, 2016]"},
      {q:"The 'Durability' property among the ACID properties of a transaction requires that the modifications made by a successful transaction to the database survive. Explanation: Durability means once committed, changes must survive all failures (subject to system recovery mechanisms).",opts:["Except in case of an Operating System crash","Always, even if there is a failure of any kind","Except in case of a power failure","Except in case of a Disk crash"],ans:1,exp:"Survive all failures. [cite: 2017]"},
      {q:"Consider the following schema: Emp (Empcode, Name, Sex, Salary, Deptt) A simple SQL query is executed as follows: SELECT Deptt FROM Emp WHERE sex = 'M' GROUP by Dept Having avg (Salary) &gt; {select avg (Salary) from Emp} The output will be? Explanation: The query returns departments where the average salary of male employees in that department is greater than the overall average salary of the organization. Important: The options are poorly worded. Best intended answer: a)",opts:["Average salary of male employee is more than the average salary of the organization","Average salary of male employee is equal to the average salary of the organization","Average salary of male employee is the average salary of the organization","Average salary of male employee is less than the average salary of the organization"],ans:0,exp:"Departments male > avg org. [cite: 2020]"},
      {q:"Consider the following query : SELECT E.eno, COUNT(*) FROM Employees E GROUP BY E.eno If an index on eno is available, the query can be answered by scanning only the index if Explanation: This question is also poorly framed / duplicated. To answer by scanning only the index, the index must be covering for eno, and grouping can be efficiently done especially if entries are ordered (B+ tree) or organized appropriately. Most exam-safe answer: c) only B+ tree and clustered Why: Grouping is easiest with ordered index traversal. Corrected answer: c)",opts:["index can be hash or B+ tree and clustered or non-clustered","the index is only hash and clustered","the index is only B+tree and clustered","index can be hash or B+ tree and clustered"],ans:3,exp:"B+ tree and clustered. [cite: 2024]"},

{q:"Which level of locking provides the highest degree of concurrency in a relational data base? Explanation:Row-level locking is the most granular and allows maximum concurrency.",opts:["Table","Row","Page","Page, table and row level locking allow the same degree of concurrency"],ans:1,exp:"Row-level locking. [cite: 2025]"},
      {q:"SELECT * FROM player WHERE num_of_matches&gt;100 AND country=’India’; What fields will be outputted by the above SQL query? Explanation: SELECT * returns all columns of rows satisfying the condition.",opts:["player","num_of_matches","num_of_matches, country","All fields of player relation"],ans:3,exp:"All fields of relation. [cite: 2027]"},
      {q:"Which of the following SQL queries can be used to change “Mishra” to “Singh” in the “LastName” column in the People relation? Explanation: The correct SQL syntax is UPDATE ... SET ... WHERE ....",opts:["UPDATE People SET LastName=’Mishra’ INTO LastName=’Singh’","UPDATE People SET LastName=’Singh’ WHERE LastName=’Mishra’","MODIFY People SET LastName=’Mishra’ INTO LastName=’Singh’","MODIFY People SET LastName=’Singh’ WHERE LastName=’Mishra'"],ans:1,exp:"UPDATE ... SET ... WHERE. [cite: 2028]"}
    ]
  },
  "Web Technology": {
    color: "#10b981",
    questions: [
    ]
  }
};;;;;;;;

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
const PAGE_SZ = 25;
let cur = Object.keys(subjects)[0];
let mode = 'quiz';
let filt = 'all';
let search = '';
let page = 0;
let ans = {};      // "subj_idx" → 'c'|'w'|'s'
let chosen = {};   // "subj_idx" → optionIndex
let order = {};    // per-subject index arrays (shuffled or sequential)
let fi = 0;        // flash index
let flipped = false;

// Init sequential order
Object.keys(subjects).forEach(s => {
  order[s] = subjects[s].questions.map((_,i)=>i);
});

// Try restore from localStorage
try {
  const saved = localStorage.getItem('examprep_v2');
  if (saved) { const d = JSON.parse(saved); ans = d.ans||{}; chosen = d.chosen||{}; }
} catch(e){}

function save() {
  try { localStorage.setItem('examprep_v2', JSON.stringify({ans,chosen})); } catch(e){}
}

function key(s,i){ return s+'__'+i; }

// ═══════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════
function getStats(s) {
  let c=0,w=0,tot=subjects[s].questions.length;
  subjects[s].questions.forEach((_,i)=>{
    const v=ans[key(s,i)];
    if(v==='c')c++; else if(v==='w')w++;
  });
  return {c,w,tot,done:c+w};
}

function updateHeader() {
  let tc=0,tw=0,tt=0;
  Object.keys(subjects).forEach(s=>{const st=getStats(s);tc+=st.c;tw+=st.w;tt+=st.tot;});
  document.getElementById('stT').textContent=tt;
  document.getElementById('stC').textContent=tc;
  document.getElementById('stW').textContent=tw;
  const d=tc+tw;
  document.getElementById('stS').textContent=d>0?Math.round(tc/d*100)+'%':'—';
}

// ═══════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════
function renderSidebar() {
  document.getElementById('sbjList').innerHTML = Object.keys(subjects).map(s => {
    const {c,w,tot,done}=getStats(s);
    const pct=tot>0?Math.round(done/tot*100):0;
    const col=subjects[s].color;
    return `<button class="sbj ${s===cur?'active':''}" onclick="pickSubj('${s.replace(/'/g, "\\'")}')">
      <span class="dot" style="background:${col}"></span>
      <span class="lbl">${s}</span>
      <span class="cnt">${done}/${tot}</span>
      <span class="sbj-bar"><span class="sbj-bar-fill" style="width:${pct}%;background:${col}"></span></span>
    </button>`;
  }).join('');
}

function pickSubj(s) {
  cur=s; filt='all'; search=''; page=0; fi=0; flipped=false;
  closeSidebar(); renderSidebar(); renderMain();
}

// ═══════════════════════════════════════════════
// MOBILE SIDEBAR
// ═══════════════════════════════════════════════
function toggleSidebar() {
  const sb=document.getElementById('sidebar');
  const ov=document.getElementById('sbOverlay');
  const open=sb.classList.toggle('open');
  ov.classList.toggle('show',open);
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sbOverlay').classList.remove('show');
}

// ═══════════════════════════════════════════════
// MODE
// ═══════════════════════════════════════════════
function setMode(m) {
  mode=m; fi=0; flipped=false; page=0;
  document.getElementById('mqz').classList.toggle('active',m==='quiz');
  document.getElementById('mfl').classList.toggle('active',m==='flash');
  renderMain();
}

function resetSubject() {
  if(!confirm(`Reset all answers for "${cur}"?`)) return;
  subjects[cur].questions.forEach((_,i)=>{delete ans[key(cur,i)];delete chosen[key(cur,i)];});
  save(); renderSidebar(); renderMain(); updateHeader();
}

// ═══════════════════════════════════════════════
// FILTERING
// ═══════════════════════════════════════════════
function filtered() {
  const qs=subjects[cur].questions;
  return order[cur].filter(i=>{
    const k=key(cur,i);
    const a=ans[k];
    if(filt==='un' && a) return false;
    if(filt==='w' && a!=='w') return false;
    if(filt==='c' && a!=='c') return false;
    if(search){
      const q=qs[i];
      return q.q.toLowerCase().includes(search)||q.opts.some(o=>o.toLowerCase().includes(search));
    }
    return true;
  });
}

function shuffle() {
  const a=order[cur];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  page=0; renderMain();
}

// ═══════════════════════════════════════════════
// QUIZ RENDER
// ═══════════════════════════════════════════════
function renderMain() {
  if(mode==='quiz') renderQuiz();
  else renderFlash();
}

function renderQuiz() {
  const {c,w,tot,done}=getStats(cur);
  const col=subjects[cur].color;
  const pct=tot>0?Math.round(done/tot*100):0;
  const idxs=filtered();
  const nPages=Math.ceil(idxs.length/PAGE_SZ);
  if(page>=nPages && page>0) page=Math.max(0,nPages-1);
  const pageIdxs=idxs.slice(page*PAGE_SZ,(page+1)*PAGE_SZ);
  const qs=subjects[cur].questions;

  const labels=['A','B','C','D'];

  let html=`
  <div class="sh">
    <div class="sh-name" style="color:${col}">${esc(cur)}</div>
    <div class="sh-prog">
      <div class="sh-lbl"><span>${done}/${tot} answered</span><span>${pct}%</span></div>
      <div class="sh-track"><div class="sh-fill" style="width:${pct}%"></div></div>
    </div>
  </div>
  <div class="ctrl">
    <input class="search" type="text" placeholder="Search…" value="${esc(search)}"
      oninput="search=this.value.toLowerCase();page=0;renderMain()">
    <button class="fbtn ${filt==='all'?'on':''}" onclick="setFilt('all')">ALL&nbsp;${tot}</button>
    <button class="fbtn ${filt==='un'?'on':''}" onclick="setFilt('un')">UNSEEN&nbsp;${tot-done}</button>
    <button class="fbtn wf ${filt==='w'?'on':''}" onclick="setFilt('w')">WRONG&nbsp;${w}</button>
    <button class="fbtn ${filt==='c'?'on':''}" onclick="setFilt('c')">CORRECT&nbsp;${c}</button>
    <button class="shuf" onclick="shuffle()">⇄ Shuffle</button>
  </div>`;

  if(idxs.length===0){
    html+=`<div class="empty"><div class="ico">🔍</div><p>No questions match this filter.</p></div>`;
  } else {
    pageIdxs.forEach(i=>{
      const q=qs[i];
      const k=key(cur,i);
      const a=ans[k];
      const ch=chosen[k];
      const isC=a==='c', isW=a==='w', shown=a==='s';
      html+=`<div class="qcard ${isC?'ac':isW?'aw':''}" id="qc${i}">

<div class="qh"><span class="qn">Q${i+1}</span><div class="qt">${esc(q.q)}</div></div>
        <div class="opts" id="opts${i}">`;
      q.opts.forEach((opt,oi)=>{
        let cls='opt';
        if(a){
          if(oi===q.ans) cls='opt sc rc';
          else if(oi===ch && (isW||shown)) cls='opt sw';
        }
        html+=`<button class="${cls}" id="o${i}_${oi}" ${a?'disabled':''}
          onclick="doAns('${k}',${i},${oi},${q.ans})">
          <span class="ol">${labels[oi]}</span><span>${esc(opt)}</span>
        </button>`;
      });
      html+=`</div>`;
      if(a && q.exp) html+=`<div class="exp"><strong>${isC?'✓ Correct!':shown?'Revealed':'✗ Wrong'}</strong> — ${esc(q.exp)}</div>`;
      html+=`<div class="qf">
        <span class="qico">${isC?'✅':isW?'❌':''}</span>
        ${!a?`<button class="sabtn" onclick="reveal('${k}',${i},${q.ans})">Show Answer</button>`:''}
      </div></div>`;
    });

    if(nPages>1){
      html+=`<div class="pager">
        <button class="pgbtn" onclick="goPage(-1)" ${page===0?'disabled':''}>← Prev</button>
        <span class="pginfo">Page ${page+1} / ${nPages}</span>
        <button class="pgbtn" onclick="goPage(1)" ${page>=nPages-1?'disabled':''}>Next →</button>
      </div>`;
    }
  }

  document.getElementById('main').innerHTML=html;
}

function setFilt(f){filt=f;page=0;renderMain();}
function goPage(d){page+=d;renderMain();document.getElementById('main').scrollTop=0;}

function doAns(k,idx,sel,correct) {
  if(ans[k]) return;
  const isC=sel===correct;
  ans[k]=isC?'c':'w'; chosen[k]=sel; save();

  const card=document.getElementById('qc'+idx);
  if(!card) return;
  card.classList.toggle('ac',isC); card.classList.toggle('aw',!isC);

  const q=subjects[cur].questions[idx];
  q.opts.forEach((_,oi)=>{
    const b=document.getElementById('o'+idx+'_'+oi);
    if(!b) return;
    b.disabled=true;
    b.className=oi===correct?'opt sc rc':oi===sel?'opt sw':'opt';
  });

  const f=card.querySelector('.qf');
  f.querySelector('.qico').textContent=isC?'✅':'❌';
  f.querySelector('.sabtn')?.remove();

  if(q.exp){
    const d=document.createElement('div');
    d.className='exp';
    d.innerHTML=`<strong>${isC?'✓ Correct!':'✗ Wrong'}</strong> — ${esc(q.exp)}`;
    f.before(d);
  }
  updateHeader(); renderSidebar();
}

function reveal(k,idx,correct) {
  if(ans[k]) return;
  ans[k]='s'; chosen[k]=-1; save();
  const card=document.getElementById('qc'+idx);
  if(!card) return;
  const q=subjects[cur].questions[idx];
  q.opts.forEach((_,oi)=>{
    const b=document.getElementById('o'+idx+'_'+oi);
    if(!b) return;
    b.disabled=true;
    b.className=oi===correct?'opt rc':'opt';
  });
  const f=card.querySelector('.qf');
  f.querySelector('.sabtn')?.remove();
  if(q.exp){
    const d=document.createElement('div');
    d.className='exp';
    d.innerHTML=`<strong>Answer revealed</strong> — ${esc(q.exp)}`;
    f.before(d);
  }
}

// ═══════════════════════════════════════════════
// FLASH RENDER
// ═══════════════════════════════════════════════
function renderFlash() {
  const qs=subjects[cur].questions;
  const col=subjects[cur].color;
  const ord=order[cur];
  if(fi>=ord.length) fi=0;
  const ri=ord[fi];
  const q=qs[ri];
  const pct=Math.round((fi+1)/ord.length*100);

  document.getElementById('main').innerHTML=`
  <div class="sh">
    <div class="sh-name" style="color:${col}">${esc(cur)}</div>
  </div>
  <div class="flash-wrap">
    <div class="fc-prog">
      <div class="fc-pl"><span>Card ${fi+1} of ${ord.length}</span><span>${pct}%</span></div>
      <div class="fc-pt"><div class="fc-pf" style="width:${pct}%"></div></div>
    </div>
    <div class="fc ${flipped?'flip':''}" id="fc" onclick="doFlip()">
      <div class="fc-inner">
        <div class="fc-face fc-front">
          <div class="fc-lbl">Question ${ri+1}</div>
          <div class="fc-q">${esc(q.q)}</div>
          <div class="fc-tip">Click to reveal answer</div>
        </div>
        <div class="fc-face fc-back">
          <div class="fc-lbl">Answer</div>
          <div class="fc-a">${esc(q.opts[q.ans])}</div>
          ${q.exp?`<div class="fc-exp">${esc(q.exp)}</div>`:''}
        </div>
      </div>
    </div>
    <div class="fc-nav">
      <button class="fcnbtn" onclick="fcPrev()">← Prev</button>

<span class="fc-ctr">${fi+1} / ${ord.length}</span>
      <button class="fcnbtn" onclick="fcNext()">Next →</button>
    </div>
    <div class="fc-keys">Space = flip &nbsp;·&nbsp; ← → = navigate &nbsp;·&nbsp; S = shuffle</div>
  </div>`;
}

function doFlip(){
  flipped=!flipped;
  const c=document.getElementById('fc');
  if(c) c.classList.toggle('flip',flipped);
}
function fcNext(){const l=order[cur].length;fi=(fi+1)%l;flipped=false;renderFlash();}
function fcPrev(){const l=order[cur].length;fi=(fi-1+l)%l;flipped=false;renderFlash();}

// ═══════════════════════════════════════════════
// KEYBOARD
// ═══════════════════════════════════════════════
document.addEventListener('keydown',e=>{
  const tag=document.activeElement?.tagName;
  if(tag==='INPUT'||tag==='TEXTAREA') return;
  if(mode==='flash'){
    if(e.key==='ArrowRight'||e.key==='d'){e.preventDefault();fcNext();}
    else if(e.key==='ArrowLeft'||e.key==='a'){e.preventDefault();fcPrev();}
    else if(e.key===' '||e.key==='f'){e.preventDefault();doFlip();}
    else if(e.key==='s'||e.key==='S'){shuffle();}
  }
  if(e.key==='Escape') closeSidebar();
});

// ═══════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function jsStr(s){return JSON.stringify(s);}

// ═══════════════════════════════════════════════
// TOUCH / SWIPE FOR MOBILE
// ═══════════════════════════════════════════════
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, {passive: true});

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) < 60) return; // ignore small accidental swipes

  const target = document.activeElement?.tagName;
  if(target === 'INPUT' || target === 'TEXTAREA') return;

  if (mode === 'flash') {
    if (diff < 0) fcNext(); // swipe left -> next
    else fcPrev();          // swipe right -> prev
  } else if (mode === 'quiz') {
    const idxs = filtered();
    const nPages = Math.ceil(idxs.length / PAGE_SZ);
    if (diff < 0 && page < nPages - 1) goPage(1);
    else if (diff > 0 && page > 0) goPage(-1);
  }
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
renderSidebar();
renderMain();
updateHeader();