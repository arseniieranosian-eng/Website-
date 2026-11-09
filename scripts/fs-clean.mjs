// node:fs with one difference: HTML read with an encoding comes back without the decorative illustrations (<div class="page-art">…</div>, src/lib/page-art.ts),
// and without the generated table of contents (<nav class="toc">, src/lib/toc.ts, checked by check-toc.mjs),
// so the content checks (answer right after the H2, text of sections) see the page text only. check-illustrations.mjs imports the real node:fs.
import * as fs from 'node:fs';
export * from 'node:fs';
export const readFileSync = (p, o) => {
  const r = fs.readFileSync(p, o);
  return typeof r === 'string' && String(p).endsWith('.html') ? r.replace(/<div class="page-art"[^>]*>(?:\s*<img[^>]*>|[\s\S]*?<\/svg>)\s*<\/div>/g, '').replace(/<nav class="toc"[\s\S]*?<\/nav>/g, '').replace(/(?:Zveřejněno|Опубликовано|Published|Опубліковано): <time[^>]*>[^<]*<\/time> · /g, '') : r;
};
