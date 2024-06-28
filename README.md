# Chitchat ðŸ’¬

*Enterprise-grade real-time messaging platform built for modern teams*

![Chitchat Banner](https://img.shields.io/badge/Chitchat-Real--Time%20Chat-brightgreen?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTYuNSAzaDExYzEuMzI1IDAgMi41IDEgMi41IDIuNWMwIDIgLTEuNzA1IDMuMjY0IC0yIDMuNWwtNC41IDRsMiAtNWgtOWEyLjUgMi41IDAgMCAxIDAgLTV6Ii8+PHBhdGggZD0iTTE3LjUgMjFoLTExYy0xLjMyNSAwIC0yLjUgLTEgLTIuNSAtMi41YzAgLTIgMS43MDUgLTMuMjY0IDIgLTMuNWw0LjUgLTRsLTIgNWg5YTIuNSAyLjUgMCAxIDEgMCA1eiIvPjwvc3ZnPg==)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

## ðŸš€ Introduction

Chitchat is a cutting-edge real-time messaging platform designed for the modern enterprise. Built with performance, security, and user experience at its core, Chitchat delivers seamless communication with features like instant messaging, typing indicators, read receipts, online user tracking, and responsive design. Whether for personal conversations or team collaboration, Chitchat keeps you connected with a modern and intuitive interface.

### Core Features
- ðŸ” **End-to-End Encryption** - Bank-level security for all communications
- âš¡ **Lightning Fast** - Sub-millisecond message delivery
- ðŸ‘¥ **Team Collaboration** - Advanced workspace management
- ðŸ“± **Cross-Platform** - Works seamlessly on all devices
- ðŸŽ¨ **Modern UI/UX** - Beautiful, intuitive interface
- ðŸ”„ **Real-Time Sync** - Instant message delivery and updates

---

## ðŸ› ï¸ Technologies Used

### Frontend (Next.js Application)
- **[Next.js 15](https://nextjs.org/)** - Full-stack React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and enhanced developer experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[NextAuth.js](https://next-auth.js.org/)** - Complete authentication solution with Google OAuth
- **[Prisma ORM](https://www.prisma.io/)** - Modern database toolkit with type-safe queries
- **[Socket.io Client](https://socket.io/)** - Real-time bidirectional communication
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library

### Backend (Node.js with Socket.io)
- **[Express.js](https://expressjs.com/)** - Fast, unopinionated web framework
- **[Socket.io](https://socket.io/)** - Real-time engine with WebSocket fallbacks
- **[MySQL](https://www.mysql.com/)** - Reliable relational database
- **[CORS](https://www.npmjs.com/package/cors)** - Cross-origin resource sharing middleware
- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **[dotenv](https://www.npmjs.com/package/dotenv)** - Environment variable management

---

## ðŸŽ¯ Live Demo Screenshots

Experience Chitchat's powerful features through these interactive demonstrations:

### ðŸ“± Demo 1: Real-Time Messaging
![Real-Time Messaging Demo](./client/demo/demo1.png)
Experience lightning-fast message delivery and real-time synchronization across devices with instant typing indicators and message status updates.

### ðŸ‘¥ Demo 2: Team Collaboration
![Team Collaboration Demo](./client/demo/demo2.png)
See how teams can collaborate efficiently with workspace management, user presence indicators, and seamless group communication features.

### ðŸ”’ Demo 3: Security Features
![Security Features Demo](./client/demo/demo3.png)
Explore our end-to-end encryption, secure authentication, and advanced privacy controls that keep your conversations protected.

### ðŸ“± Demo 4: Mobile Experience
*Mobile demo screenshot coming soon*
Test the responsive design and mobile-first approach that ensures perfect functionality across all screen sizes and devices.

---

## ðŸš€ Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **MySQL** database
- **Google OAuth** credentials
- **npm** or **yarn** package manager

### 1. Clone the Repository
```bash
git clone https://github.com/shivas1432/chitchat.git
cd Chitchat
```

### 2. Client Setup
```bash
cd client
npm install
```

Create `.env` file in the client directory:
```env
# Database Configuration
DATABASE_URL="mysql://username:password@host:port/database"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# NextAuth Configuration
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:3000"
NEXT_PUBLIC_SOCKET_URL="http://localhost:5000"
```

### 3. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 4. Server Setup
```bash
cd ../server
npm install
```

Create `.env` file in the server directory:
```env
PORT=5000
CLIENT_URL="http://localhost:3000"

# Database Configuration
DB_HOST="your-mysql-host"
DB_USER="your-mysql-user"
DB_PASSWORD="your-mysql-password"
DB_NAME="chitchat"
```

### 5. Launch the Application
```bash
# Terminal 1: Start the server
cd server
npm run dev

# Terminal 2: Start the client
cd client
npm run dev
```

Visit `http://localhost:3000` to see Chitchat in action!

---

## ðŸ“š API Documentation

### Socket.io Events

#### Client â†’ Server
- `join-room` - Join a specific chat room
- `send-message` - Send a message to a room
- `typing` - Indicate user is typing
- `stop-typing` - Stop typing indicator

#### Server â†’ Client  
- `receive-message` - Receive new messages
- `user-joined` - User joined notification
- `user-typing` - Typing indicator from other users
- `online-users` - List of currently online users

### REST API Endpoints
- `GET /api/health` - Server health check
- `GET /api/rooms/:roomId/messages` - Fetch message history
- `POST /api/rooms` - Create new chat room

---

## ðŸ—ï¸ Architecture

```
â”œâ”€â”€ client/                 # Next.js Frontend
â”‚   â”œâ”€â”€ app/               # App Router pages
â”‚   â”œâ”€â”€ components/        # Reusable UI components
â”‚   â”œâ”€â”€ lib/              # Utility libraries
â”‚   â””â”€â”€ prisma/           # Database schema
â”‚
â”œâ”€â”€ server/                # Express.js Backend  
â”‚   â”œâ”€â”€ src/              # Source code
â”‚   â””â”€â”€ dist/             # Compiled JavaScript
â”‚
â””â”€â”€ README.md             # Project documentation
```

---

## ðŸ¤ Contributing

Contributions are welcome! Here's how you can help improve Chitchat:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## ðŸ“ž Contact & Support

**Developer:** [Kanugula Shivashanker](https://www.shivashanker.com)  
**Role:** Full-Stack Developer | React, Node.js, Express, MySQL Expert  
**Specialization:** Building dynamic web applications | Continuous learner | Open to collaboration

### Connect With Me
- ðŸ’¼ **LinkedIn:** [shivashanker-kanugula](https://www.linkedin.com/in/shivashanker-kanugula)
- ðŸ’» **GitHub:** [ss_web_innovations](https://github.com/ss_web_innovations)
- ðŸ“§ **Email:** Contact via [website](https://www.shivashanker.com)
- ðŸ’¬ **Telegram:** [@helpme_coder](https://t.me/helpme_coder)

---

## ðŸ“„ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ðŸ™ Acknowledgments

- Built with modern web technologies
- Inspired by the need for secure, real-time communication
- Special thanks to the open-source community

---

<div align="center">

**[â¬† Back to Top](#chitchat-)**

Made with â¤ï¸ by [Kanugula Shivashanker](https://www.shivashanker.com)

</div>


## 🔧 Development Status

- ✅ Real-time messaging
- ✅ User authentication
- ✅ Database integration
- ✅ Responsive design
- 🔄 File sharing (coming soon)
- 🔄 Video calls (planned)
