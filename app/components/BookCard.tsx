import Link from "next/link";
import CoverImage from "./CoverImage";
import type { Book } from "@/app/data/books";

type BookCardProps = {
  book: Book;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function BookCard({ book, isExpanded, onToggle }: BookCardProps) {
  return (
    <li className="flex gap-5 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <CoverImage
        src={book.cover}
        alt={`Cover art for ${book.title}`}
        className="h-40 w-28 flex-none rounded-md"
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
          <button
            type="button"
            onClick={onToggle}
            className="text-sm font-medium text-zinc-600 underline-offset-2 hover:underline dark:text-zinc-300"
          >
            {isExpanded ? "Hide quick look" : "Quick look"}
          </button>

          <Link
            href={`/books/${book.slug}`}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            View details →
          </Link>
        </div>

        {isExpanded && (
          <p className="mt-3 border-t border-zinc-100 pt-3 text-sm leading-6 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            {book.tagline}
          </p>
        )}
      </div>
    </li>
  );
}
