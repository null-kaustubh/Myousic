"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
  const session = useSession();

  return (
    <>
      <div className="flex justify-between">
        <div>Myousic</div>
        <div>
          {session.data?.user ? (
            <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>
              Log out
            </button>
          ) : (
            <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </>
  );
}
