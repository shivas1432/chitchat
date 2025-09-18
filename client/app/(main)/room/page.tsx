import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CustomScrollArea } from "@/components/ui/custom-scroll-area";
import UserDirectory from "@/components/main/userdirectory";

const EmptyStateUI = () => {
  return (
    <Sheet>
      <div className="flex items-center justify-center h-screen chitchat-pattern bg-neutral-950 text-white">
        <div className="text-center px-8 py-12 rounded-lg max-w-md">
          <div className="flex justify-center mb-8">
            <div className="bg-neutral-800 p-6 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0bda19"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-zulip"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6.5 3h11c1.325 0 2.5 1 2.5 2.5c0 2 -1.705 3.264 -2 3.5l-4.5 4l2 -5h-9a2.5 2.5 0 0 1 0 -5z" />
                <path d="M17.5 21h-11c-1.325 0 -2.5 -1 -2.5 -2.5c0 -2 1.705 -3.264 2 -3.5l4.5 -4l-2 5h9a2.5 2.5 0 1 1 0 5z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-6">Chitchat</h1>
          <p className="text-neutral-300 mb-4 text-lg">
            Connect and chat with friends anytime, anywhere.
          </p>
          <p className="text-neutral-400 mb-6">
            Welcome to your chat space – where conversations come to life.
          </p>
          <p className="text-neutral-500 text-sm">
            Your conversations are just a click away.
          </p>
           
          <div className="mt-10 flex justify-center">
            <div className="w-16 h-1 bg-neutral-700 rounded-full"></div>
          </div>
           
          <SheetTrigger asChild>
            <button className="md:hidden mt-8 px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg">
              Start Conversation
            </button>
          </SheetTrigger>
        </div>
      </div>
      <SheetContent className="bg-neutral-950 text-white border-neutral-900">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <CustomScrollArea className="h-full">
          <UserDirectory />
        </CustomScrollArea>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EmptyStateUI;