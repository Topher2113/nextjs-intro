// Page 2: the detail view for a single series, at /books/[slug].
// [slug] is a dynamic route segment, so this one file serves all six books.
// It is a Server Component (no "use client") — it just reads data and renders.

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { books } from "@/app/data/books";

// Pre-render a static page for every book at build time.
export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

// Give each generated page a proper <title>.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  return { title: book ? `${book.title} — LitRPG Library` : "Not found" };
}

export default async function BookDetailPage({
  params,
}: {
  // In Next.js 16, `params` is a Promise and must be awaited.
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  // If someone visits an unknown slug, show the 404 page.
  if (!book) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <Link
        href="/"
        className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
      >
        ← Back to library
      </Link>

      <article className="mt-6 flex flex-col gap-6 sm:flex-row">
        <Image
          src={book.cover}
          alt={`Cover art for ${book.title}`}
          width={320}
          height={480}
          priority
          className="h-64 w-44 flex-none self-center rounded-lg object-cover shadow-md sm:self-start"
        />

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {book.title}
          </h1>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
            by {book.author} · {book.genre}
          </p>
          <p className="mt-5 leading-7 text-zinc-700 dark:text-zinc-300">
            {book.description}
          </p>
        </div>
      </article>
    </main>
  );
}
