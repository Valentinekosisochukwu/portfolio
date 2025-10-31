import Link from "next/link";
import React from "react";
import { Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Arrow } from "@radix-ui/react-tooltip";

function footer() {
  return (
    <div className="mx-4 md:mx-10 px-2 pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 jusctify-center md:justify-even items-center gap-8">
      <div className="flex flex-col justify-center py-4 items-center gap-4">
        <h1 className="flex justify-center capitalize text-2xl md:text-3xl font-bold items-center">
          get in touch <ArrowRight className="ml-2 hidden md:inline-block" size={40} />
        </h1>
        <p className="text-center w-fit lg:w-[400px]">
          Have a project in mind or just want to say hello? I'm always open to
          new opportunities. Feel free to reach out and let's build something
          nice together!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 justify-items-center">
        <p>
          <i className="hidden lg:inline-block lg:px-1">
            You can reach me at
          </i>
          <Link href="mailto:valentinekosisochukwu@gmail.com" className="font-bold underline ml-2">
          
          <b>valentinekosisochukwu@gmail.com</b>
          </Link> 
        </p>
        <h2 className="uppercase text-2xl">or</h2>
        <h4 className="font-semibold">Let's connect via</h4>
        <span className="flex flex-row gap-4 font-bold underline">
          <Link
            href="https://twitter.com/KosisoValentine"
            target="_blank"
            className="text-3xl"
            title="Follow & chat me on Twitter"
          >
            <Twitter size={30} />
          </Link>
          <Link href="https://www.facebook.com/share/17BTLE6vyB/" target="_blank" className="text-3xl" title="Add & chat me on Facebook">
            <Facebook size={30} />
          </Link>
          {/* <Link href="" target="_blank">
          <Linkedin size={30} />
            LinkedIn
          </Link> */}
        </span>
      </div>
    </div>
  );
}

export default footer;
