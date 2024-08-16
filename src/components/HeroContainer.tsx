import React from "react";

const HeroContainer = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
            href="#"
          >
            Shopping made convenient!! (+233 55 1993 405)
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                Give us a Call
              </span>
              <svg
                className="shrink-0 size-4 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold tracking-tight text-gray-700 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Premium Afripro Global Limited
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            Fresh produce to your location Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque eos
            assumenda id possimus consectetur laboriosam blanditiis optio corrupti veritatis harum quisquam dignissimos
            reprehenderit, dolorem impedit. Possimus inventore accusamus maiores.
          </p>
        </div>

        <div className="mt-8 gap-3 flex justify-center">
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-xl py-3 px-4">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
