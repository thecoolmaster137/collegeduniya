import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background">
      {/* INFO[note-for-self]: using a container is easy-way to wrap nav components and use lesser code to get more done */}
      <MainNav />
      <MobileNav />
    </header>
  );
}
