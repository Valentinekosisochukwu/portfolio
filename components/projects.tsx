"use client";

import { useRef } from "react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

function projects() {
  return (
    <div className="mx-4 md:mx-10 lg:mx-30 px-2 flex flex-col py-8 relative h-[fit]">
      <div className="flex justify-center text-2xl md:text-3xl font-bold py-4 ">
        <h2 className="capitalize">things i've worked on</h2>
      </div>
      <div className="flex flex-col justify-between gap-8 px-2">
        <div className="flex flex-col-reverse lg:flex-row justify-between bg-white p-0 shadow-lg rounded ">
          <div className="flex flex-col justify-around lg:w-1/2 py-4 px-2">
            <h5 className="text-xl">01</h5>
            <h3 className="text-3xl font-medium py-2">Beam Chat</h3>

            {/* <p className="lg:bg-black lg:border lg:text-white lg:texxt-mono lg:w-[120%] z-50 lg:p-2"> */}
            <p>
              A chat application where users can chat in private and group
              chats. Comes with "Clerk" authentication and video call.
            </p>
            <div className="flex flex-row flex-wrap justify-even md:justify-start gap-2 sm:gap-4 py-2 text-sm md:text-xl font-light">
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                Next.Js
              </span>
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                Styled Components
              </span>
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                Convex
              </span>
            </div>
            <div className="flex flex-row justify-start gap-4 py-3 lg:py-0">
              <Link
                href={"https://telegram-six-chi.vercel.app/"}
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="mt-4 w-full md:w-fit cursor-pointer"
                >
                  view project
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              src="/images/beam.png"
              alt="project image"
              width={500}
              height={300}
              className="hidden lg:block p-1"
            />
            <img
              src="/images/beam.png"
              alt="project image"
              className="lg:hidden"
            />
          </div>
        </div>

                <div className="flex flex-col-reverse lg:flex-row justify-between bg-white p-0 shadow-lg rounded ">
          <div className="flex flex-col justify-around lg:w-1/2 py-4 px-2">
            <h5 className="text-xl">02</h5>
            <h3 className="text-3xl font-medium py-2">Val's Shop</h3>

            {/* <p className="lg:bg-black lg:border lg:text-white lg:texxt-mono lg:w-[120%] z-50 lg:p-2"> */}
            <p>
              A fullstack e-commerce site with auth(clerk), passkey and stripe payment method. Cart memory, category types and lots more.
            </p>
            <div className="flex flex-row flex-wrap justify-even md:justify-start gap-2 sm:gap-4 py-2 text-sm md:text-xl font-light">
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                Next.Js
              </span>
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                Styled Components
              </span>
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                Sanity
              </span>
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                Stripe
              </span>
            </div>
            <div className="flex flex-row justify-start gap-4 py-3 lg:py-0">
              <Link
                href={"https://val-ecomm.netlify.app/"}
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="mt-4 w-full md:w-fit cursor-pointer"
                >
                  view project
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              src="/images/ecomm.png"
              alt="project image"
              width={500}
              height={300}
              className="hidden lg:block p-1"
            />
            <img
              src="/images/ecomm.png"
              alt="project image"
              className="lg:hidden"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between bg-white p-0 shadow-lg rounded ">
          <div className="flex flex-col justify-around lg:w-1/2 py-4 px-2">
            <h5 className="text-xl">03</h5>
            <h3 className="text-3xl font-medium py-2">Tech Jobs</h3>

            <p>
              A fullstack web application where users can add/search for jobs
              and apply for them directly through the platform.
            </p>
            <div className="flex flex-row flex-wrap justify-even md:justify-start gap-2 sm:gap-4 py-2 text-sm md:text-xl font-light">
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                React
              </span>
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                Styled Components
              </span>
              <span className="border border-transparent md:border-0 rounded p-1 md:p-0 bg-transparent">
                MongoDB
              </span>
            </div>
            <div className="flex flex-row justify-start gap-4 py-3 lg:py-0">
              <Link
                href={"https://remote-dev-jobs-react.netlify.app/"}
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="mt-4 w-full md:w-fit cursor-pointer"
                >
                  view project
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              src="/images/react-jobs.png"
              alt="project image"
              width={500}
              height={300}
              className="hidden lg:block p-1"
            />
            <img
              src="/images/react-jobs.png"
              alt="project image"
              className="lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects;
