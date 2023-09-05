import React from "react";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { MdLocationOn } from "react-icons/md";
import { GrFormSchedule } from "react-icons/gr";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data: akbardev07, error } = await supabase.from("pl_clubs").select(`
  *,
  club_status (
    europe
  )
`);
  console.log(akbardev07);

  return (
    <div className="">
      <HomeNavbar className="" />
      <div className="bg-[#00F026]">
        <div className="h-[100vh] p-10 bg-[url('/images/orderin_bg.png')] bg-contain bg-center bg-no-repeat px-20">
          <h1 className="text-black text-3xl font-bold">
            OrderIn your desires
          </h1>

          <h3>Get food, snack, drinks and more deliverd</h3>
          <div className="flex gap-10  mt-44">
            <div className="flex px-2 gap-3 justify-center items-center bg-white text-black">
              <MdLocationOn />
              <input
                className="h-[40px] outline-none"
                placeholder="Enter delivery address"
              />
            </div>
            <div className="flex px-2 gap-3 justify-center items-center bg-white text-black">
              <GrFormSchedule />
              <select className="h-[40px] outline-none">
                <option>Deliver Now</option>
                <option>Schedule delivery</option>
              </select>
            </div>
            <button className="h-[56] rounded-full px-[16px] py-[12px] font-bold bg-black/80 text-white  hover:bg-black shadow-sm">
              Find food
            </button>
          </div>
          <div className="mt-10 ">
            <h6>Sign in for your recent address</h6>
          </div>
        </div>
      </div>
      {/* <div className="bg-rose-600  justify-between">
        {akbardev07.map((item) => (
          <div key={item.id} className="flex gap-10">
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.club_status?.europe}</div>
          </div>
        ))}
      </div> */}
      <Footer />
    </div>
  );
}
