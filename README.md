# NexusAI-Client - Documentation Site ⚡

<p align="center">
  <img src="./nexusai-docs/public/assets/banner.jpg" alt="NexusAI-Client Documentation Site" width="100%">
</p>

<p align="center">
  <strong>Official documentation website for <a href="https://github.com/laurentvv/NexusAI-Client">NexusAI-Client</a>.</strong><br>
  <em>Built with Next.js 16.3 (Turbopack), Fumadocs 16.14, and Tailwind CSS. Hosted on Vercel.</em>
</p>

<p align="center">
  <a href="https://pypi.org/project/nexusai-client/"><img src="https://img.shields.io/pypi/v/nexusai-client.svg?style=flat-square&logo=pypi&logoColor=white" alt="PyPI version"></a>
  <a href="https://github.com/laurentvv/NexusAI-Client"><img src="https://img.shields.io/badge/main_repo-NexusAI--Client-10B981.svg?style=flat-square&logo=github&logoColor=white" alt="Main Repo"></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/framework-Next.js_16.3-black.svg?style=flat-square&logo=next.js" alt="Next.js"></a>
  <a href="https://fumadocs.dev/"><img src="https://img.shields.io/badge/docs_engine-Fumadocs_16.14-blue.svg?style=flat-square" alt="Fumadocs"></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/deployment-Vercel-black.svg?style=flat-square&logo=vercel" alt="Vercel"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License MIT"></a>
</p>

---

## 📖 About This Repository

This repository contains the source code for the official documentation website of **[NexusAI-Client](https://github.com/laurentvv/NexusAI-Client)**, an ultra-lightweight, strictly-typed, asynchronous Python 3.12+ gateway for multi-provider AI APIs (Cerebras, Cohere, DeepSeek, Google Gemini Free & Pro, Groq, Mistral, Nvidia NIM, and OpenRouter).

> [!NOTE]
> This repository is dedicated solely to the documentation site and its Vercel hosting. For the Python library source code, automated test suite, and issue tracker, please visit the primary repository: **[laurentvv/NexusAI-Client](https://github.com/laurentvv/NexusAI-Client)**.

---

## 🏗️ Project Structure

The code is located in the `nexusai-docs/` subdirectory, following modern documentation repository conventions:

- `/nexusai-docs`: The Next.js 16.3 application powered by [Fumadocs](https://fumadocs.vercel.app/).
  - `/content/docs`: Markdown/MDX documentation covering Installation, Configuration, Provider Matrix, Core Features, Cookbooks & Recipes, and API Reference.
  - `/src/app`: App Router structure, landing page, documentation layout, search routes, OpenGraph image generators, and `llms.txt` endpoints.
  - `/src/components`: UI components and AI search modal.
  - `/public/assets`: Static assets, banners, and preview screenshots.

---

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/laurentvv/NexusAI-Client-doc.git
cd NexusAI-Client-doc/nexusai-docs

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment (Vercel)

Deploying this documentation site to Vercel is seamless:

1. Log in to [Vercel](https://vercel.com/new).
2. Import this GitHub repository (`NexusAI-Client-doc`).
3. Under **Build and Output Settings**, set the **Root Directory** to `nexusai-docs`.
4. Click **Deploy**.

Vercel will automatically detect Next.js with Turbopack and build the production documentation site.

---

## 🤝 Main Project Links

- 🐍 **Python Library Repository**: [https://github.com/laurentvv/NexusAI-Client](https://github.com/laurentvv/NexusAI-Client)
- 📦 **PyPI Package**: [https://pypi.org/project/nexusai-client/](https://pypi.org/project/nexusai-client/)

---

## 📄 License

This documentation site is open-sourced under the **MIT License**.
