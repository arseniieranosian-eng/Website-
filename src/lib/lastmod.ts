import { execSync } from 'node:child_process';

// "Last modified" date of a page's content, taken from git so it updates by itself with every edit:
//  - files with uncommitted changes -> today (the build is being made for a new edit)
//  - otherwise the date of the latest commit that touched them
// Falls back to `fallback` when git is unavailable (e.g. building from a plain copy of the sources).
export function lastModified(files: string[], fallback: string): string {
  const run = (cmd: string) => execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  try {
    const list = files.map((f) => `"${f}"`).join(' ');
    if (run(`git status --porcelain -- ${list}`)) return new Date().toISOString().slice(0, 10);
    const d = run(`git log -1 --format=%cs -- ${list}`);
    return d || fallback;
  } catch {
    return fallback;
  }
}

// 2026-10-19 -> "19. 10. 2026"
export const csDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d}. ${m}. ${y}`;
};
