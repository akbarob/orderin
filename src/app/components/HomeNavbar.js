"use client";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import useContextAPI from "@/utils/contextAPI/context";

export default function HomeNavbar() {
  const router = useRouter();
  const { user, handleSignIn, handleSignOut, handleSignUp } = useContextAPI();

  return (
    <nav className="sticky top-0 flex h-[96px] w-full items-center justify-between p-4 bg-white text-black">
      <div className="flex gap-10">
        <RxHamburgerMenu size={35} />
        <h1 className="text-4xl font-black">OrderIn.</h1>
      </div>
      <div className="flex gap-7">
        {user?.email ? (
          <button onClick={handleSignOut}>LogOut</button>
        ) : (
          <button onClick={() => handleSignIn()}>LogIn</button>
        )}

        <button onClick={() => handleSignUp()}>Sign up</button>
      </div>
    </nav>
  );
}
