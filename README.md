# My LitRPG Library

A small two-page Next.js 16 (App Router) app listing some favorite LitRPG / progression-fantasy book series. Built as a React coursework project.

- **`/`** — a searchable list of series, each with a cover, an expandable "quick look", and a link to its detail page.
- **`/books/[slug]`** — a detail page per series (title, author, cover, description).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

## Project layout

```
app/
  page.tsx              # list page (Server Component)
  books/[slug]/page.tsx # detail page (dynamic route, generateStaticParams)
  components/           # SearchBar, BookCard, BookList ('use client')
  data/books.ts         # the series data + Book type
public/covers/          # cover images
```

Built with Next.js 16, React 19, and Tailwind CSS v4.
