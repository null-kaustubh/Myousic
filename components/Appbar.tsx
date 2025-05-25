"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
  const session = useSession();

  return (
    <>
      <nav className="ml-auto flex gap-6">
        {session.data?.user ? (
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 text-black hover:bg-gray-900 hover:text-white"
            onClick={() => signOut()}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 text-black hover:bg-gray-900 hover:text-white"
            onClick={() => signIn()}
          >
            Sign in
          </Button>
        )}
      </nav>
    </>
  );
}
