// A single card in the list. This component is "dumb": it receives everything
// it needs through props and reports clicks back up via the `onToggle`
// event-handler prop. Because it only renders props (no state, no hooks), it
// does NOT need the "use client" directive itself.

import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/app/data/books";

type BookCardProps = {
  book: Book; // passing a prop: the whole book object
  isExpanded: boolean; // controlled by the parent's state
  onToggle: () => void; // event-handler prop, wired to a button's onClick
};

export default function BookCard({ book, isExpanded, onToggle }: BookCardProps) {
  return (
    <li className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* next/image: built-in component for optimized images served from /public */}
      <Image
        src={book.cover}
        alt={`Cover art for ${book.title}`}
        width={320}
        height={480}
        className="h-36 w-24 flex-none rounded-md object-cover"
      />

      <div className="flex min-w-0 flex-col">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {book.title}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          by {book.author}
        </p>
        <span className="mt-1 inline-block w-fit rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
          {book.genre}
        </span>

        <div className="mt-auto flex items-center gap-4 pt-3">
          {/* onClick uses the event-handler prop passed down from BookList */}
          <button
            type="button"
            onClick={onToggle}
            className="text-sm font-medium text-zinc-600 underline-offset-2 hover:underline dark:text-zinc-300"
          >
            {isExpanded ? "Hide quick look" : "Quick look"}
          </button>

          {/* next/link: client-side navigation to the detail page */}
          <Link
            href={`/books/${book.slug}`}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            View details →
          </Link>
        </div>

        {/* Conditional rendering based on state owned by the parent */}
        {isExpanded && (
          <p className="mt-3 border-t border-zinc-100 pt-3 text-sm leading-6 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            {book.tagline}
          </p>
        )}
      </div>
    </li>
  );
}
