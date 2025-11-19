# Alloro Site

A modern React application built with TypeScript, React Router, and Tailwind CSS.

## Features

- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🚀 Vite for fast development and building
- 🔄 React Router v6 for client-side routing
- 📦 ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This project uses GitHub Actions for automatic deployment to the production server. When code is pushed to the `main` branch, the workflow will:

1. Build the frontend application
2. Deploy the built files to `/var/www/site` on the server

### Required GitHub Secrets

Configure these secrets in your GitHub repository settings (Settings → Secrets and variables → Actions):

- `SERVER_HOST` - The hostname or IP address of your server
- `SERVER_USER` - SSH username for server access
- `SSH_PRIVATE_KEY` - Private SSH key for authentication

### Deployment Workflow

The deployment workflow is defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml:1) and automatically triggers on push to the main branch.

## Project Structure

```
alloro-site/
├── src/
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind directives
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Available Routes

- `/` - Home page
- `/about` - About page

## Technologies

- **React** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## License

MIT
