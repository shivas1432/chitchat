'use client'
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Themetoggle } from '../shared/ThemeToggle';
import SignInButton from '../shared/SignInButoon';
import UserAccountNav from '../shared/UserAccountNav';

const Navbar = () => {

  const { data: session } = useSession();

  return (
    <nav className="z-50 sticky top-0 w-full bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-b border-primary/10 px-4 lg:px-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className='flex items-center space-x-12'>
            <Link href="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0bda19"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-zulip rounded-xl mt-1 flex-shrink-0"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6.5 3h11c1.325 0 2.5 1 2.5 2.5c0 2 -1.705 3.264 -2 3.5l-4.5 4l2 -5h-9a2.5 2.5 0 0 1 0 -5z" />
                <path d="M17.5 21h-11c-1.325 0 -2.5 -1 -2.5 -2.5c0 -2 1.705 -3.264 2 -3.5l4.5 -4l-2 5h9a2.5 2.5 0 1 1 0 5z" />
              </svg>
              <h3 className="text-2xl font-bold ml-1">Chitchat</h3>
            </Link>
           </div>
           <div className="flex items-center space-x-1">
            <Themetoggle />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text={"Sign In"} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;