import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://nexusai-client-doc.vercel.app',
  ),
  title: {
    template: '%s | NexusAI-Client',
    default: 'NexusAI-Client - Unified Multi-Provider AI Gateway',
  },
  description:
    'An ultra-lightweight, strictly-typed, asynchronous Python 3.12+ gateway for multi-provider AI APIs.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
