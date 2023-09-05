"use client";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import useContextAPI from "@/utils/contextAPI/context";
import { FaUserAlt, FaOpencart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

export default function FeedNavbar() {
  const router = useRouter();
  const [cartColor, setCartColor] = useState(false);
  const { user, handleSignIn, handleSignOut, handleSignUp } = useContextAPI();

  return (
    <nav className="sticky top-0 flex h-[96px] w-full items-center justify-between p-4 bg-white text-black">
      <div className="flex gap-10">
        <RxHamburgerMenu size={35} />
        <h1 className="text-4xl font-black">OrderIn.</h1>
      </div>
      <div>
        <span className="rounded-full bg-black/10 w-[500px] flex px-4 gap-x-4 items-center">
          <BsSearch />
          <input
            className="bg-transparent flex-1 outline-none px-[16px] py-[8px] gap-2"
            placeholder="food, snacks, drinks"
          />
        </span>
      </div>
      <div className="flex gap-7">
        <button
          onClick={() => handleSignUp()}
          onMouseEnter={() => setCartColor(true)}
          onMouseLeave={() => setCartColor(false)}
          className={`relative flex items-center justify-center ${
            !cartColor ? "bg-[#00F026]" : "bg-black"
          } text-white  rounded-full shadow-2xl hover:shadow-inner px-[16px] py-[8px] gap-2`}
        >
          <div
            className={`absolute -right-4 -top-2 ${
              cartColor ? "bg-[#00F026]" : "bg-black"
            } rounded-full h-[30px] w-[30px] flex justify-center items-center`}
          >
            0
          </div>
          <FaOpencart />
          Cart
        </button>
        {user?.email ? (
          <button
            onClick={handleSignOut}
            className="bg-black/10 text-black rounded-full shadow-2xl hover:shadow-inner px-[16px] py-[4px] flex justify-center items-center gap-x-2"
          >
            <FaUserAlt size={14} />
            LogOut
          </button>
        ) : (
          <button
            onClick={() => handleSignIn()}
            className="bg-black/10 text-black rounded-full shadow-2xl hover:shadow-inner px-[16px] py-[4px] flex justify-center items-center gap-x-2 border-[1px] "
          >
            <FaUserAlt size={14} />
            LogIn
          </button>
        )}

        <button
          onClick={() => handleSignUp()}
          className="bg-black/10 text-black  rounded-full shadow-2xl hover:shadow-inner px-[16px] py-[8px]"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}
