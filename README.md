# NexusAI-Client - Documentation Site ⚡

This repository contains the official documentation website for **[NexusAI-Client](https://github.com/laurentvv/NexusAI-Client)**, an ultra-lightweight, strictly-typed, asynchronous Python 3.12+ gateway for multi-provider AI APIs (Cerebras, Cohere, DeepSeek, Google Gemini Free & Pro, Groq, Mistral, Nvidia NIM, and OpenRouter).

## 🏗️ Project Structure

The code is located in the `nexusai-docs/` subdirectory, following modern documentation repository conventions for Next.js and Fumadocs:

- `/nexusai-docs`: The Next.js application built with [Fumadocs](https://fumadocs.vercel.app/) and Tailwind CSS.
  - `/content/docs`: Markdown/MDX documentation content covering installation, configuration, provider matrix, cookbooks, and complete API reference.
  - `/src`: Next.js App Router source code, landing page, search system, and layout templates.

## 🚀 Running Locally

To run the documentation site locally:

```bash
# 1. Navigate to the documentation directory
cd nexusai-docs

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment (Vercel)

Deploying this documentation site to Vercel is seamless:

1. Log in to [Vercel](https://vercel.com/new).
2. Import this GitHub repository (`NexusAI-Client-doc`).
3. Under **Build and Output Settings**, set the **Root Directory** to `nexusai-docs`.
4. Click **Deploy**.

Vercel will automatically detect Next.js and build your documentation site.

## 🤝 Main Project

For the actual Python package source code, tests, and PyPI releases, please visit the main repository:
👉 [https://github.com/laurentvv/NexusAI-Client](https://github.com/laurentvv/NexusAI-Client)
