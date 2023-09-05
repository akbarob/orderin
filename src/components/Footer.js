import Image from "next/image";
import React from "react";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-black text-white p-4 px-20 mt-20">
      <div className="flex ">
        <div className="w-[600px] flex flex-col gap-y-20">
          <h1 className="text-4xl font-black">OrderIn.</h1>
          <div className="flex gap-10">
            <Image
              width={100}
              height={100}
              src={
                "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/783bb4a82e5be29e.svg"
              }
            />
            <Image
              width={100}
              height={100}
              src={
                "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/163bdc9b0f1e7c9e.png                "
              }
            />
          </div>
        </div>
        <div className="flex-1 flex justify-between">
          <ul className="flex flex-col gap-y-3 text-[12px]">
            <li>Get Help</li>
            <li>Buy gift card</li>

            <li>Add your restuarant</li>

            <li>Sign u to deliver</li>

            <li>Save on your first order</li>
          </ul>
          <ul className="flex flex-col gap-y-3 text-[12px]">
            <li>Nearby Restaurant</li>

            <li>View all Locations</li>

            <li>Pick up near me</li>

            <li>Language</li>
          </ul>
        </div>
      </div>

      <div className="h-[1px] bg-black mx-20s"></div>

      <div className="w-full  flex  mt-5">
        <div className="flex gap-6">
          <FaSquareFacebook size={30} />
          <FaSquareTwitter size={30} />
          <FaSquareInstagram size={30} />
        </div>

        <div className="flex flex-col items-end w-full ">
          <div className="flex gap-10">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Pricing</span>
            <span>Do not sell or share my personal information</span>
          </div>

          <div className="flex ">
            <h6>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </h6>
            <span>© 2023 OrderIn Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
