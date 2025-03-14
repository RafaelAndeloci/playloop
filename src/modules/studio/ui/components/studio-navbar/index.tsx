import { Logo } from "@/components/ui/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthButton } from "@/modules/auth/components/auth-button";
import Link from "next/link";
import { StudioUploadModal } from "../studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center border-b bg-white px-2 pr-5 shadow-md">
      <div className="flex w-full items-center gap-4">
        {/* Menu and Logo */}
        <div className="flex flex-shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1 p-4">
              <Logo withText="Studio" />
            </div>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        <div className="flex flex-shrink-0 items-center gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
