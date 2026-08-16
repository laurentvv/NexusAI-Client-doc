import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-black text-xs font-mono font-black shadow-[0_0_12px_rgba(16,185,129,0.5)]">
            ⚡
          </span>
          <span>{appName}</span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
