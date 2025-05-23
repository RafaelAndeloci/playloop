import { Logo } from "@/components/ui/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthButton } from "@/modules/auth/components/auth-button";
import Link from "next/link";
import { SearchInput } from "./search-input";

export const HomeNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center bg-white px-2 pr-5">
      <div className="flex w-full items-center gap-4">
        {/* Menu and Logo */}
        <div className="flex flex-shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/studio">
            <div className="flex items-center gap-1 p-4">
              <Logo withText="PlayLoop" />
            </div>
          </Link>
        </div>

        {/* Searchbar */}
        <div className="mx-auto flex max-w-[720px] flex-1 justify-center">
          <SearchInput />
        </div>

        <div className="flex flex-shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
