"use client";

import { useState } from "react";
import type { Book } from "@/app/data/books";
import SearchBar from "./SearchBar";
import BookCard from "./BookCard";

type BookListProps = {
  books: Book[];
};

export default function BookList({ books }: BookListProps) {
  const [query, setQuery] = useState("");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          No series match &ldquo;{query}&rdquo;. Try another title.
        </p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2">
          {filtered.map((book) => (
            <BookCard
              key={book.slug}
              book={book}
              isExpanded={expandedSlug === book.slug}
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
