"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

// Spotlight Card Component with emerald glow
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden border border-white/[0.08] bg-white/[0.02] rounded-xl transition-all group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.12), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.35), transparent 40%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      <div className="relative h-full p-6 md:p-8">{children}</div>
    </div>
  );
};

// Icons
const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
);
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
);
const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);
const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
);
const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const CODE_EXAMPLES = {
  fallback: `# 1-Line Zero-Cost Smart Failover (Free Tiers -> Paid Backup)
import asyncio
from nexusai_client import AIGateway

async def main():
    # Discovers active keys in .env & tries: Gemini Free -> Groq -> Cerebras -> Paid
    async with AIGateway.auto_fallback() as client:
        response = await client.generate_text(
            "Explain quantum computing in 2 sentences."
        )
        print(f"Served by [{response.provider}] with zero downtime:")
        print(response.text)

if __name__ == "__main__":
    asyncio.run(main())`,
  tools: `# Universal Tool Calling / Function Calling Across All Providers
import asyncio
from nexusai_client import AIGateway, ChatMessage, FunctionDefinition, ToolDefinition

weather_tool = ToolDefinition(
    function=FunctionDefinition(
        name="get_current_weather",
        description="Get current temperature for a city.",
        parameters={
            "type": "object",
            "properties": {
                "location": {"type": "string", "description": "City name"},
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
            },
            "required": ["location"],
        },
    )
)

async def main():
    async with AIGateway.auto_fallback() as client:
        messages = [ChatMessage(role="user", content="What is the weather in Tokyo?")]
        response = await client.chat(messages=messages, tools=[weather_tool])

        if response.has_tool_calls:
            for call in response.tool_calls:
                print(f"🔧 Tool: {call.name} | Args: {call.arguments}")

if __name__ == "__main__":
    asyncio.run(main())`,
  stream: `# Real-Time SSE Token Streaming
import asyncio
from nexusai_client import AIGateway

async def main():
    async with AIGateway("groq") as client:
        print("Streaming from Groq LPU: ", end="")
        async for chunk in client.stream_text("Write a haiku about ultra-fast AI."):
            print(chunk, end="", flush=True)

if __name__ == "__main__":
    asyncio.run(main())`,
  vision: `# Multimodal Vision Analysis (Auto Model Routing)
import asyncio
from nexusai_client import AIGateway

async def main():
    async with AIGateway.auto_fallback_vision() as client:
        res = await client.analyze_image(
            prompt="Extract the invoice line items and total as JSON.",
            image="invoice.png", # Local path, URL, or raw bytes
            json_mode=True,
        )
        print(f"Provider: {res.provider} | Model: {res.model}")
        print(res.text)

if __name__ == "__main__":
    asyncio.run(main())`,
  chat: `# Stateful Multi-Turn Conversation
import asyncio
from nexusai_client import AIGateway, ChatMessage

async def main():
    messages = [
        ChatMessage(role="system", content="You are a senior algorithms expert."),
        ChatMessage(role="user", content="Compare QuickSort and MergeSort."),
    ]
    async with AIGateway("cohere") as client:
        reply = await client.chat(messages)
        print(reply.text)

if __name__ == "__main__":
    asyncio.run(main())`,
};

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof CODE_EXAMPLES>('fallback');

  const copyInstall = () => {
    navigator.clipboard.writeText('pip install nexusai-client');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-neutral-300 font-sans selection:bg-emerald-900 selection:text-emerald-50 relative overflow-hidden">
      
      {/* Background SVG Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
        <div className="absolute inset-0 bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#050505_100%)]"></div>
      </div>

      {/* Floating Ambient Glows */}
      <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[25%] right-[15%] w-[450px] h-[450px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Header */}
      <header className="relative z-50 w-full border-b border-white/[0.06] bg-[#050505]/70 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500 text-black flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              ⚡
            </div>
            <span className="text-white font-bold tracking-tight text-base">
              NexusAI<span className="text-emerald-400">-Client</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8 items-center text-neutral-400 text-xs tracking-wider uppercase font-semibold">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#routing" className="hover:text-white transition-colors">Zero-Cost Routing</Link>
            <Link href="#providers" className="hover:text-white transition-colors">Providers</Link>
            <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <a
              href="https://github.com/laurentvv/NexusAI-Client"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-lg border border-white/10 transition-all font-mono"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-8 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>PYTHON 3.12+ ASYNC AI GATEWAY • ZERO HEAVY SDKs</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.1]">
          One Unified Client. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            10 AI Providers. Zero Bloat.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed">
          Stop installing 10 separate heavyweight SDKs. Unify <strong>Cerebras, Cohere, DeepSeek, Google Gemini, Groq, Mistral, Nvidia NIM, OpenRouter, and OrcaRouter</strong> behind a strictly-typed, asynchronous interface with zero-cost failover.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
          <Link
            href="/docs"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-7 py-3.5 rounded-xl transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] text-sm"
          >
            <BoltIcon />
            Explore Documentation
          </Link>

          <button
            onClick={copyInstall}
            className="flex items-center gap-3 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 font-mono text-sm px-5 py-3.5 rounded-xl border border-white/10 transition-all group"
          >
            <span className="text-emerald-400">$</span>
            <span>pip install nexusai-client</span>
            <span className="text-neutral-500 group-hover:text-white transition-colors">
              {copied ? <CheckIcon /> : <CopyIcon />}
            </span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white font-mono">0</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Heavy SDK Deps</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-emerald-400 font-mono">2,000+</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider mt-1">tok/s (Cerebras CS-3)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-teal-300 font-mono">670+</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Models Discovered</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-cyan-400 font-mono">100%</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Free-First Failover</span>
          </div>
        </div>
      </section>

      {/* Zero-Cost Fallback Interactive Spotlight */}
      <section id="routing" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Resilience Architecture</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Zero-Cost-First Smart Routing</h3>
          <p className="mt-3 text-neutral-400 max-w-2xl mx-auto text-sm">
            Leverage high-throughput free tiers first. If rate-limited (HTTP 429) or experiencing latency, NexusAI-Client automatically fails over down the chain without breaking your app.
          </p>
        </div>

        {/* Pipeline Visualizer */}
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4 border-b border-white/[0.06] pb-4">
            <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              PRIORITY 1: 100% FREE ZERO-COST TIERS
            </span>
            <span className="text-xs text-neutral-500 font-mono">Auto-Failover on Rate-Limit (429) / Timeout</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-3 mb-8">
            {[
              { name: 'Gemini Free', desc: '1M Context • AI Studio', color: 'border-emerald-500/40 text-emerald-300' },
              { name: 'Groq LPU', desc: 'Llama 3.3 70B • 30 RPM', color: 'border-emerald-500/40 text-emerald-300' },
              { name: 'Cerebras', desc: 'CS-3 Engine • 2k tok/s', color: 'border-emerald-500/40 text-emerald-300' },
              { name: 'Nvidia NIM', desc: '1,000 GPU Credits', color: 'border-emerald-500/40 text-emerald-300' },
              { name: 'OpenRouter', desc: '19 Free Models Live', color: 'border-emerald-500/40 text-emerald-300' },
              { name: 'OrcaRouter', desc: 'Qwen & DeepSeek Free', color: 'border-emerald-500/40 text-emerald-300' },
              { name: 'Cohere', desc: 'Command R+ Trial', color: 'border-emerald-500/40 text-emerald-300' },
              { name: 'Mistral', desc: 'Codestral & Small', color: 'border-emerald-500/40 text-emerald-300' },
            ].map((node, i) => (
              <div key={node.name} className={`p-3.5 rounded-xl border ${node.color} bg-white/[0.02] flex flex-col justify-between`}>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500">#{i + 1}</span>
                  <div className="font-bold text-sm text-white mt-0.5">{node.name}</div>
                </div>
                <div className="text-[11px] text-neutral-400 mt-2 font-mono">{node.desc}</div>
              </div>
            ))}
          </div>

          <div className="mb-4 flex items-center justify-between flex-wrap gap-4 border-b border-white/[0.06] pb-4">
            <span className="text-xs font-mono font-semibold text-teal-400 tracking-wider uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400"></span>
              PRIORITY 2: ULTRA-LOW-COST PAID BACKUP TIERS
            </span>
            <span className="text-xs text-neutral-500 font-mono">Seamless 0-downtime safety net</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-500/[0.02] flex items-center justify-between">
              <div>
                <div className="font-bold text-white">DeepSeek V3 / R1</div>
                <div className="text-xs text-neutral-400 font-mono mt-0.5">$0.27 / 1M tokens • Real-time USD Balance Tracking</div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">Backup #1</span>
            </div>

            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-500/[0.02] flex items-center justify-between">
              <div>
                <div className="font-bold text-white">Google Gemini Pro</div>
                <div className="text-xs text-neutral-400 font-mono mt-0.5">Gemini 2.5 Pro • Enterprise GCP Pay-as-you-go</div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">Backup #2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Code Preview Tabs */}
      <section className="py-16 px-6 max-w-6xl mx-auto relative z-10">
        <div className="border border-white/[0.08] bg-[#0d0d0d] rounded-2xl overflow-hidden shadow-2xl">
          {/* Tabs bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-neutral-950/80 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/60"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500/60"></span>
              <span className="h-3 w-3 rounded-full bg-green-500/60"></span>
              <span className="ml-3 text-xs font-mono text-neutral-400 hidden sm:inline">example_gateway.py</span>
            </div>
            <div className="flex items-center gap-1">
              {[
                { id: 'fallback', label: 'Auto Fallback' },
                { id: 'tools', label: 'Tool Calling' },
                { id: 'stream', label: 'SSE Streaming' },
                { id: 'vision', label: 'Multimodal Vision' },
                { id: 'chat', label: 'Multi-Turn Chat' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as keyof typeof CODE_EXAMPLES)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === tab.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div className="p-6 font-mono text-xs sm:text-sm text-neutral-200 overflow-x-auto leading-relaxed">
            <pre>
              <code>{CODE_EXAMPLES[activeTab]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Core Capabilities</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Engineered for Production Resilience</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpotlightCard>
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
              <WrenchIcon />
            </div>
            <h4 className="text-lg font-bold text-white">Universal Tool Calling</h4>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Equip AI agents with callable Python functions. Standard schema translated automatically to OpenAI format, Gemini <code className="text-emerald-300 font-mono">functionDeclarations</code>, and Cohere V2 tools.
            </p>
          </SpotlightCard>

          <SpotlightCard>
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
              <RefreshIcon />
            </div>
            <h4 className="text-lg font-bold text-white">Smart Auto-Failover</h4>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Dynamically reads active <code className="text-emerald-300 font-mono">.env</code> keys and fails over instantly from Free Tiers to Paid Backups with a single async call.
            </p>
          </SpotlightCard>

          <SpotlightCard>
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
              <CpuIcon />
            </div>
            <h4 className="text-lg font-bold text-white">Hardware Accelerators</h4>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Tap into Cerebras CS-3 wafer engines (2,000+ tok/s) and Groq LPU inference for instantaneous response times.
            </p>
          </SpotlightCard>

          <SpotlightCard>
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
              <BoltIcon />
            </div>
            <h4 className="text-lg font-bold text-white">Zero Heavy SDKs</h4>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Powered exclusively by <code className="text-emerald-300 font-mono">httpx</code> and <code className="text-emerald-300 font-mono">python-dotenv</code>. No bulky vendor SDK conflicts or slow import times.
            </p>
          </SpotlightCard>

          <SpotlightCard>
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
              <EyeIcon />
            </div>
            <h4 className="text-lg font-bold text-white">Multimodal Vision</h4>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Pass local file paths, web image URLs, or raw bytes into <code className="text-emerald-300 font-mono">analyze_image()</code> with automatic vision model selection.
            </p>
          </SpotlightCard>

          <SpotlightCard>
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
              <DollarIcon />
            </div>
            <h4 className="text-lg font-bold text-white">Live Quota & Balances</h4>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Inspect real-time USD balances, NGC credits, and rate limits (RPM, TPM, RPD) directly from Python.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Supported Providers Matrix Section */}
      <section id="providers" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Provider Ecosystem</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Supported AI Providers Matrix</h3>
        </div>

        <div className="overflow-x-auto border border-white/[0.08] rounded-xl bg-white/[0.01]">
          <table className="w-full text-left text-sm font-mono">
            <thead className="border-b border-white/[0.08] bg-white/[0.03] text-xs text-neutral-400">
              <tr>
                <th className="p-4">Provider</th>
                <th className="p-4">Identifier</th>
                <th className="p-4">Tier</th>
                <th className="p-4">Default Model</th>
                <th className="p-4">Free Quota / Highlights</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04] text-neutral-300">
              <tr>
                <td className="p-4 font-bold text-white">Cerebras</td>
                <td className="p-4 text-emerald-400">"cerebras"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs">Free</span></td>
                <td className="p-4">gpt-oss-120b</td>
                <td className="p-4 text-neutral-400">2,000+ tok/s • 30 RPM / 60k TPM</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Google Gemini Free</td>
                <td className="p-4 text-emerald-400">"gemini_free"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs">Free</span></td>
                <td className="p-4">gemini-2.5-flash</td>
                <td className="p-4 text-neutral-400">1M Context • 15 RPM / 1,500 RPD</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Groq</td>
                <td className="p-4 text-emerald-400">"groq"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs">Free</span></td>
                <td className="p-4">llama-3.3-70b-versatile</td>
                <td className="p-4 text-neutral-400">LPU Ultra-Fast • 30 RPM / 14.4k RPD</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Nvidia NIM</td>
                <td className="p-4 text-emerald-400">"nvidia_free"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs">Free</span></td>
                <td className="p-4">meta/llama-3.1-8b-instruct</td>
                <td className="p-4 text-neutral-400">1,000 Free GPU Credits (NGC)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">OpenRouter</td>
                <td className="p-4 text-emerald-400">"openrouter"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs">Free / Paid</span></td>
                <td className="p-4">openrouter/free</td>
                <td className="p-4 text-neutral-400">19 Free Models + 390 Commercial</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">OrcaRouter</td>
                <td className="p-4 text-emerald-400">"orcarouter"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs">Free / Paid</span></td>
                <td className="p-4">qwen/qwen3.8-27b-free</td>
                <td className="p-4 text-neutral-400">Zero-Margin Gateway • Free Models (-free)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Cohere</td>
                <td className="p-4 text-emerald-400">"cohere"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs">Free Trial</span></td>
                <td className="p-4">command-r-plus-08-2024</td>
                <td className="p-4 text-neutral-400">Command R+ & Aya Vision</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Mistral AI</td>
                <td className="p-4 text-emerald-400">"mistral"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs">Free / Paid</span></td>
                <td className="p-4">mistral-small-latest</td>
                <td className="p-4 text-neutral-400">Codestral, Pixtral & Small</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">DeepSeek</td>
                <td className="p-4 text-emerald-400">"deepseek"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs">Ultra-Low Paid</span></td>
                <td className="p-4">deepseek-chat</td>
                <td className="p-4 text-neutral-400">$0.27 / 1M tokens • Real-time Balance</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Gemini Pro</td>
                <td className="p-4 text-emerald-400">"gemini_pro"</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs">Paid</span></td>
                <td className="p-4">gemini-2.5-pro</td>
                <td className="p-4 text-neutral-400">GCP Enterprise Pay-as-you-go</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center relative z-10">
        <div className="p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 to-black/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to streamline your AI pipeline?
          </h3>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
            Install <code className="text-emerald-300 font-mono">nexusai-client</code> now or dive into our comprehensive documentation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/docs"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3.5 rounded-xl transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] text-sm"
            >
              Read the Docs
            </Link>
            <a
              href="https://github.com/laurentvv/NexusAI-Client"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl border border-white/10 transition-all text-sm"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/[0.06] py-12 px-6 bg-neutral-950/80 text-xs text-neutral-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            NexusAI-Client • Built for resilient, asynchronous Python AI architectures.
          </div>
          <div className="flex gap-6 text-neutral-400">
            <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <a href="https://pypi.org/project/nexusai-client/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">PyPI</a>
            <a href="https://github.com/laurentvv/NexusAI-Client" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
