// This is the interactive heart of the list page. It uses state and event
// handlers, so it must be a Client Component.
"use client";

import { useState } from "react";
import type { Book } from "@/app/data/books";
import SearchBar from "./SearchBar";
import BookCard from "./BookCard";

type BookListProps = {
  books: Book[]; // data passed in from the Server Component page
};

export default function BookList({ books }: BookListProps) {
  // useState #1: the live search text.
  const [query, setQuery] = useState("");
  // useState #2: which card has its "quick look" panel open (or none).
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  // Derive the visible list from state instead of storing a second copy.
  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />

      {/* Conditional rendering: show a message when nothing matches. */}
      {filtered.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          No series match &ldquo;{query}&rdquo;. Try another title.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {/* Render the list with map, giving each item a stable key. */}
          {filtered.map((book) => (
            <BookCard
              key={book.slug}
              book={book}
              isExpanded={expandedSlug === book.slug}
              // Event-handler prop: toggle this card open/closed.
              onToggle={() =>
                setExpandedSlug((current) =>
                  current === book.slug ? null : book.slug
                )
              }
            />
          ))}
        </ul>
      )}
    </div>
  );
}
