export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="h-4 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

      <div className="mt-6 flex flex-col gap-8 sm:flex-row">
        <div className="h-72 w-48 flex-none self-center rounded-lg bg-zinc-200 dark:bg-zinc-800 sm:self-start">
          <div className="flex h-full items-center justify-center">
            <span className="h-7 w-7 animate-spin rounded-full border-2 border-zinc-300 border-t-indigo-500 dark:border-zinc-600 dark:border-t-indigo-400" />
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <div className="h-8 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </main>
  );
}
