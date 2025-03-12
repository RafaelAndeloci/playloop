"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";
interface AuthButtonProps {}
export function AuthButton({}: AuthButtonProps) {
  // TODO: Add different auth states
  return (
    <>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            {/* TODO: Add user profile menu button */}
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<ClapperboardIcon className="size-4" />}
            />
            <UserButton.Action label="manageAccount" />
          </UserButton.MenuItems>
        </UserButton>
        {/* TODO: Add menu items for studio and user profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="rounded-full border-blue-500/20 px-4 py-2 text-sm font-medium text-blue-600 shadow-none hover:text-blue-500"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
