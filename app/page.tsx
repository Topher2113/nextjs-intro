// Page 1: the list page at "/".
// This is a Server Component — it loads the data and hands it to the
// interactive <BookList> Client Component as a prop.

import { books } from "@/app/data/books";
import BookList from "@/app/components/BookList";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          My LitRPG Library
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A few of my favorite progression-fantasy &amp; LitRPG series. Click a
          title to read more.
        </p>
      </header>

      <BookList books={books} />
    </main>
  );
}
