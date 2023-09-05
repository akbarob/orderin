"use client";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import useContextAPI from "@/utils/contextAPI/context";
import { FaUserAlt } from "react-icons/fa";

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
          <button
            onClick={handleSignOut}
            className="font-semibold rounded-full shadow-2xl hover:shadow-inner px-[16px] py-[12px] flex justify-center items-center gap-x-2"
          >
            <FaUserAlt size={25} />
            LogOut
          </button>
        ) : (
          <button
            onClick={() => handleSignIn()}
            className="font-semibold rounded-full shadow-2xl hover:shadow-inner px-[16px] py-[12px] flex justify-center items-center gap-x-2 border-[1px] "
          >
            <FaUserAlt size={25} />
            LogIn
          </button>
        )}

        <button
          onClick={() => handleSignUp()}
          className="bg-black text-white font-semibold rounded-full shadow-2xl hover:shadow-inner px-[16px] py-[12px]"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}
