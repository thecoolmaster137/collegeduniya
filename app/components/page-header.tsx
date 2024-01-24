import React from "react";
// import Balance from "react-wrap-balancer";
import { cn } from "~/lib/utils";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      {...props}
      className={cn(
        "flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12",
        className
      )}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  );
}

// TODO[fix]: Getting below error message on using Balancer
/*
 * Error: Element type is invalid: expected a string
 * (for built-in components)
 * or a class/function (for composite components) but got: object.
 */
function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-[750px] text-lg text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  );
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription };
