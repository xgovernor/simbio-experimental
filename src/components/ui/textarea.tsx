import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "border-primary-200 focus-visible:ring-primary-950 dark:border-primary-800 dark:focus-visible:ring-primary-300 dark:placeholder:text-zinc-[160px]0 flex min-h-[60px] w-full rounded border bg-transparent px-3 py-2 text-sm placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
