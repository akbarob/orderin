"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const Context = createContext();

export function ContextProvider({ children }) {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState("no user logged in");
  const [akbar, setakbar] = useState("badmus");

  console.log(user);

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
    if (data?.session) {
      setUser(data?.session.user);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "akbardev07@gmail.com",
      password: "asdf1234",
      options: {
        emailRedirectTo: `https://${location.origin}/auth/callback`,
      },
    });
    alert("signed up");
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "akbardev07@gmail.com",
      password: "asdf1234",
    });
    getUser();
    alert("In!!!");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser("no user logged in");
    alert("out!!!");
  };

  return (
    <Context.Provider
      value={{
        user,
        // getUser,
        akbar,
        handleSignIn,
        handleSignOut,
        handleSignUp,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default function useContextAPI() {
  return useContext(Context);
}
