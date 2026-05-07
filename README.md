# Calculus Vault

A small interactive math puzzle web app built with React + Vite.

## Features

- A collection of interactive calculus puzzles and screens
- Clean component structure using Vite, React, and Tailwind CSS
- Docker-ready with an Nginx configuration for static serving

## Tech Stack

- Vite
- React
- Tailwind CSS
- Docker + Nginx (optional)

## Quick Start

Prerequisites: Node.js (16+), npm or pnpm, Docker (optional)

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build (Vite)

```bash
npm run preview
```

## Docker (optional)

This repository contains a Dockerfile and nginx.conf for building a static container.

Build the image:

```bash
docker build -t calculus-vault .
```

Run the container (serves on port 80):

```bash
docker run -p 8080:80 calculus-vault
```

## Project Structure

- `src/` - application source
  - `components/` - reusable UI components
  - `screens/` - different app screens (Intro, PuzzleScreen, Victory, etc.)
  - `data/` - puzzle definitions

## Development Notes

- The app is scaffolded with Vite. Use the scripts in package.json to run, build, and preview.
- Tailwind configuration is present in `tailwind.config.js`.
- If you add routes or new screens, keep components small and update `src/main.jsx` accordingly.

## Contributing

Feel free to open issues or PRs. Add a `LICENSE` file to clarify terms before accepting contributions.

## License

This project is licensed under the MIT License — see the `LICENSE` file for details.
