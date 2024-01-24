import { SearchIcon } from "lucide-react";
import React from "react";
import { cn } from "~/lib/utils";

type SearchProps = React.JSX.IntrinsicElements["input"];

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, ...props }, ref) => (
    <div className="flex items-center border px-3">
      <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        type="search"
        name="search"
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
);

Search.displayName = "Search";
