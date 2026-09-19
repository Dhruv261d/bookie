# Bookie (Bookified) — Real-Time Conversational Voice AI Book Companion 🎙️📚

Bookie is an AI-powered conversational platform that enables users to have real-time, bidirectional voice conversations with books and PDF documents. Built on **Next.js 16**, **Vapi AI**, and **ElevenLabs**, it transforms static literature and textbooks into interactive audio entities with voice synthesis and synchronized live transcripts.

---

## 🌟 Key Features

- **Real-Time Voice AI:** Natural, low-latency conversational audio streaming powered by **Vapi AI**.
- **Voice Persona Selection:** Choose from multiple natural-sounding AI voices powered by **ElevenLabs Text-to-Speech & Voice Synthesis**.
- **PDF Document Processing:** Upload and parse custom PDF books to engage in chapter-level summaries, Q&A, and interactive discussions.
- **Synchronized Live Transcripts:** Real-time speech-to-text transcript streaming displaying the live conversation on-screen.
- **Secure User Accounts & Cloud Library:** Complete authentication and session management with **Clerk**, persisting user libraries and session history in **MongoDB Atlas**.
- **Modern UI/UX:** Built with **Shadcn/UI**, **Tailwind CSS**, and **Next.js 16 App Router**.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (React 19, App Router, Server Actions)
- **Language:** TypeScript
- **Voice & Audio AI:** Vapi AI (Voice Agent Orchestration), ElevenLabs (TTS & Voice Synthesis)
- **Database & ODM:** MongoDB Atlas, Mongoose
- **Authentication:** Clerk
- **Styling & UI:** Tailwind CSS, Shadcn/UI, Lucide React

---

## 🏗️ System Architecture

```text
[ Next.js 16 App Router ] ── (Clerk Auth) ── [ MongoDB Atlas ]
       │                │
       ▼                ▼
[ Vapi AI WebRTC ]  [ ElevenLabs Voice Engine ]
       │                │
       └──── Audio ─────┘
             Stream
```

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas connection string
- Clerk API Keys
- Vapi & ElevenLabs API Keys

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhruv261d/bookie.git
   cd bookie
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
