"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function Social() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  function onClick(provider: "google" | "github") {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <button
        onClick={() => onClick("google")}
        className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-[0.5rem] h-10 font-medium shadow-input bg-size-200 bg-pos-0 dark:bg-pos-0 hover:bg-pos-100 dark:hover:bg-pos-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] bg-gradient-to-r from-gray-100 via-red-300 to-blue-300 dark:bg-gradient-to-r dark:from-zinc-800 dark:via-red-500 dark:to-blue-500 transition-all duration-300 ease-in-out"
      >
        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
          Google
        </span>
      </button>
      <button
        onClick={() => onClick("github")}
        className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-[0.5rem] h-10 font-medium shadow-input bg-size-200 bg-pos-0 dark:bg-pos-0 hover:bg-pos-100 dark:hover:bg-pos-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] bg-gradient-to-r from-black/15 via-gray-100 to-purple-700/30 dark:bg-gradient-to-r dark:from-black dark:via-black dark:to-purple-950 transition-all duration-300 ease-in-out"
      >
        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
          GitHub
        </span>
      </button>
    </div>
  );
}
