# OkyAi — AI Dashboard & Chatbot React Template

OkyAi is a **React 19** + **Vite 7** + **Tailwind CSS 4** admin-style template: chatbot UI, content tools, analytics, auth pages, settings, and subscription layouts. Demo data and AI replies are simulated for preview—connect your own APIs for production.

---

## Key features

- **AI Chatbot UI** — Conversation layout, voice UI hooks, syntax highlighting for code blocks
- **Content Tools** — Placeholder tools page for content workflows
- **Analytics** — Charts with Recharts (sample data)
- **UI components** — Radix-based primitives under `src/components/ui/`
- **Animations** — Framer Motion on key views
- **Authentication** — Login and Register pages (demo flow)
- **Theme** — Theme provider for light/dark-style usage
- **Responsive layout** — Mobile and desktop breakpoints
- **Fast dev builds** — Vite
- **Theming** — Tailwind CSS 4

---

## 📦 Project Structure

```
main-file/
├── public/
│   ├── documentation/      # Documentation files
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/            # Static assets (images, logos, SVGs)
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Radix UI components (Button, Dialog, Card, etc.)
│   │   └── theme-provider.tsx
│   ├── font/             # Custom fonts
│   ├── hooks/            # Custom React hooks
│   ├── layout/           # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── layout.tsx
│   │   ├── leftsidebar.tsx
│   │   └── loader.tsx
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── auth/        # Authentication (Login, Register)
│   │   ├── analytics.tsx
│   │   ├── chatbot.tsx
│   │   ├── content-tools.tsx
│   │   ├── dashboard.tsx
│   │   ├── settings.tsx
│   │   ├── subscription.tsx
│   │   ├── not-found.tsx
│   │   └── server-error.tsx
│   ├── router/           # React Router configuration
│   │   └── routesPaths.tsx
│   ├── App.tsx           # Main App component
│   ├── index.css         # Global styles with Tailwind
│   └── main.tsx          # Entry point
├── .gitignore
├── components.json       # shadcn/ui configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
├── CREDITS.txt
└── README.md
```

---

## ⚙️ Requirements

- **Node.js** 18.0.0 or later
- **npm** 9.0.0 or later
- Modern Web Browser (Chrome, Firefox, Edge, Safari)
- Code Editor (VS Code recommended)

### Development Knowledge

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- React Router DOM

---

## 🧩 Technologies Used

### Core
- **React** 19.2.0
- **React DOM** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 7.2.2
- **Tailwind CSS** 4.1.17
- **React Router DOM** 7.9.5

### UI Components (Radix UI)
- **@radix-ui/react-dialog** - Modal dialogs
- **@radix-ui/react-dropdown-menu** - Dropdown menus
- **@radix-ui/react-alert-dialog** - Alert dialogs
- **@radix-ui/react-popover** - Popovers
- **@radix-ui/react-select** - Select components
- **@radix-ui/react-switch** - Toggle switches
- **@radix-ui/react-tooltip** - Tooltips
- **@radix-ui/react-label** - Form labels
- **@radix-ui/react-separator** - Separators
- **@radix-ui/react-slot** - Slot components

### UI & Styling
- **Lucide React** 0.553.0 - Icon library
- **Framer Motion** 12.23.24 - Animation library
- **class-variance-authority** - Component variants
- **clsx** - Conditional classnames
- **tailwind-merge** - Merge Tailwind classes

### Data Visualization
- **Recharts** 2.15.4 - Charts and graphs

### Features
- **React Syntax Highlighter** 16.1.0 - Code syntax highlighting
- **React Day Picker** 9.11.1 - Date picker
- **simplebar-react** 3.3.2 - Custom scrollbar
- **@fancyapps/ui** 6.1.5 - Fancybox gallery
- **date-fns** 4.1.0 - Date utilities
- **OGL** 1.0.11 - WebGL library

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

---

## 🛠️ Available Features

### 🤖 AI Features
- **AI Chatbot** - Interactive AI assistant with conversation history
- **Voice Support** - Voice input and audio responses
- **Syntax Highlighting** - Code display with syntax highlighting
- **Content Tools** - AI-powered content generation and editing

### 📊 Dashboard Pages
- **Main Dashboard** - Overview and quick access
- **Analytics** - Data visualization and insights with charts
- **Settings** - User preferences and configuration
- **Subscription** - Subscription management and billing

### 🎨 UI Components (20+)
- **Alert Dialog** - Confirmation dialogs
- **Button** - Multiple button variants
- **Calendar** - Date picker component
- **Card** - Content containers
- **Chart** - Data visualization components
- **Dialog** - Modal dialogs
- **Dropdown Menu** - Context menus
- **Input** - Form inputs
- **Label** - Form labels
- **Popover** - Floating content
- **Select** - Dropdown selects
- **Separator** - Visual dividers
- **Sheet** - Side panels
- **Sidebar** - Navigation sidebar
- **Skeleton** - Loading placeholders
- **Switch** - Toggle switches
- **Table** - Data tables
- **Tooltip** - Helpful hints
- **Custom Loaders** - Audio and chat loaders
- **Voice Component** - Voice interaction UI

### 🔐 Authentication
- **Login** - User authentication
- **Register** - New user registration

### 📄 Error Pages
- **404 Not Found** - Page not found error
- **500 Server Error** - Server error page

### Animations & effects
- **Loader** - Full-screen entry loader before the app shell
- **Framer Motion** - Transitions on several pages
- **WebGL** - Decorative OGL-based effects where used

---


## 🎨 Customization

### Theme Configuration
The app uses a theme provider for easy customization. Modify colors, fonts, and styles in:
- `src/index.css` - Global styles and Tailwind configuration
- `src/components/theme-provider.tsx` - Theme context

### Adding New Components
UI components are built with Radix UI and can be customized in `src/components/ui/`

---

## 📄 License

This project is licensed under the MIT License.

---

## Credits

Third-party libraries are listed in `package.json`. See **`CREDITS.txt`** for attribution notes, fonts, and Envato-related reminders.

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)
- [Recharts](https://recharts.org)
- [Lucide](https://lucide.dev)

---

© 2026 Mantraksh Devs. All rights reserved.
