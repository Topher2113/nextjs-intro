import { notFound } from "next/navigation";
import Link from "next/link";
import { books } from "@/app/data/books";
import CoverImage from "@/app/components/CoverImage";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <Link
        href="/"
        className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
      >
        ← Back to library
      </Link>

      <article className="mt-6 flex flex-col gap-8 sm:flex-row">
        <CoverImage
          src={book.cover}
          alt={`Cover art for ${book.title}`}
          priority
          className="h-72 w-48 flex-none self-center rounded-lg shadow-md sm:self-start"
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
