# Alloro Site

A modern React application built with TypeScript, React Router, and Tailwind CSS.

## Features

- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🚀 Vite for fast development and building
- 🔄 React Router v6 for client-side routing
- 📦 ESLint for code quality
- 🚀 Automated deployment via GitHub Actions

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

### Setting Up SSH Access

#### 1. Find Your Server User

Your `SERVER_USER` is the username you use to SSH into your server. Common usernames include:

- `root`
- `ubuntu` (on Ubuntu servers)
- Your custom user account name

To verify, try connecting to your server:

```bash
ssh username@your-server-ip
```

#### 2. Using an Existing SSH Key

If you already have an SSH key that can access your server, you can reuse it. Find it in your `~/.ssh/` directory:

```bash
ls -la ~/.ssh/
```

Common key files:

- `id_rsa` or `id_rsa.pub` (RSA key)
- `id_ed25519` or `id_ed25519.pub` (EdDSA key)
- `id_ecdsa` or `id_ecdsa.pub` (ECDSA key)

View your private key:

```bash
cat ~/.ssh/id_rsa
# or
cat ~/.ssh/id_ed25519
```

**Important:** Copy the entire output including the `-----BEGIN` and `-----END` lines.

#### 3. Generate a New SSH Key (Alternative)

If you prefer to create a new key specifically for GitHub Actions:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy
```

**Note:** When prompted for a passphrase, you can either:

- Press Enter twice to create a key without a passphrase (simpler for automation)
- Enter a passphrase (more secure, but requires adding `SSH_PASSPHRASE` secret)

This creates:

- Private key: `~/.ssh/github_actions_deploy` (keep secret)
- Public key: `~/.ssh/github_actions_deploy.pub` (safe to share)

#### 4. Add Public Key to Server

Copy the public key to your server's authorized keys:

```bash
ssh-copy-id -i ~/.ssh/github_actions_deploy.pub username@your-server-ip
```

Or manually:

```bash
cat ~/.ssh/github_actions_deploy.pub
# Copy the output, then on your server:
# echo "paste-public-key-here" >> ~/.ssh/authorized_keys
```

#### 5. Test SSH Connection

Verify the key works:

```bash
ssh -i ~/.ssh/github_actions_deploy username@your-server-ip
# or for existing keys:
ssh -i ~/.ssh/id_rsa username@your-server-ip
```

#### 6. Configure GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

1. **SERVER_HOST**: Your server's IP address or domain (e.g., `123.45.67.89` or `example.com`)

2. **SERVER_USER**: Your SSH username (e.g., `ubuntu`, `root`, or your custom user)

3. **SSH_PRIVATE_KEY**: Contents of your private key file

   ```bash
   cat ~/.ssh/github_actions_deploy
   # Or if using an existing key:
   cat ~/.ssh/id_rsa
   # Copy the entire output including -----BEGIN and -----END lines
   ```

4. **SSH_PASSPHRASE**: (Optional, only if your key is passphrase-protected)
   - If your SSH key has a passphrase, add it here
   - If your key has no passphrase, you can skip this secret or leave it empty

**Troubleshooting SSH Authentication:**

- If you see "ssh: this private key is passphrase protected" error, you must add the `SSH_PASSPHRASE` secret
- Alternatively, generate a new key without a passphrase for simpler deployment
- If you see "unable to authenticate" error, verify your public key is in the server's `~/.ssh/authorized_keys` file

### Deployment Workflow

The deployment workflow is defined in `.github/workflows/deploy.yml` and automatically triggers on push to the main branch.

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
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment workflow
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
- **GitHub Actions** - CI/CD for automated deployment

## License

MIT
