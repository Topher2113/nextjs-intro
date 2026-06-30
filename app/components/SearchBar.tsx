// A presentational search input.
// It holds no state of its own — the parent owns `value` and tells us how to
// update it through the `onChange` event-handler prop. This is a "controlled
// component": https://react.dev/learn/sharing-state-between-components

type SearchBarProps = {
  value: string;
  // Event-handler prop: the parent decides what happens when the text changes.
  onChange: (next: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      value={value}
      // Read the new text out of the DOM event and hand it up to the parent.
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search by title…"
      aria-label="Search series by title"
      className="mb-6 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
    />
  );
}
