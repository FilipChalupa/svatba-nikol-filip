# Svatba Nikol & Filip

Svatební web s informacemi pro hosty — program, místo konání, zasedací pořádek a další.

Živá verze: <https://svatba.chalupovi.net>

## Technologie

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)

## Vývoj

Projekt používá [Bun](https://bun.sh/).

```sh
bun install       # instalace závislostí
bun run dev       # vývojový server na http://localhost:8080
bun run build     # produkční build do dist/
bun run preview   # náhled produkčního buildu
bun run test      # unit testy (vitest)
bun run lint      # ESLint
```

## Nasazení

Web se automaticky nasazuje na GitHub Pages přes GitHub Actions
(workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
při pushi do větve `deploy`. Custom doména `svatba.chalupovi.net` je
nastavená přes soubor [`public/CNAME`](public/CNAME).
