"use client"
import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'

const Footer = () => {

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20">
      <div className="max-w-7xl mx-auto text-sm px-4 text-gray-400 flex sm:flex-row flex-col justify-between items-start ">
        <div>
          <div className="mb-2 flex">
            <Link href="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0bda19"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-zulip rounded-xl object-cover flex-shrink-0 mt-1"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6.5 3h11c1.325 0 2.5 1 2.5 2.5c0 2 -1.705 3.264 -2 3.5l-4.5 4l2 -5h-9a2.5 2.5 0 0 1 0 -5z" />
                <path d="M17.5 21h-11c-1.325 0 -2.5 -1 -2.5 -2.5c0 -2 1.705 -3.264 2 -3.5l4.5 -4l-2 5h9a2.5 2.5 0 1 1 0 5z" />
              </svg>
              <h3 className="text-[1.2rem] font-extrabold text-black dark:text-white ml-1">Chitchat</h3>
            </Link>
          </div>
          <div className="mt-2 mr-2 max-w-fit">
            <Link href="https://x.com/compose/tweet?text=%F0%9F%93%A2%20Started%20a%20chat%20on%20%23Chitchat!%20Join%20the%20conversation%20and%20connect%20with%20friends%20%F0%9F%92%AC%20%40shivas1432" target='_blank'>
              <div className='flex flex-row items-center gap-2 text-zinc-900 dark:text-zinc-200 rounded-md px-3 py-2 bg-neutral-200 dark:bg-neutral-800'>
                Share Your Thoughts On
                <svg
                  height="14"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </div>
            </Link>
          </div>
          <p className="text-sm dark:text-zinc-400 mt-5">
            © {new Date().getFullYear()} Chitchat. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href='/'>
              <p className="hover:text-foreground/80 text-foreground/60">Home</p>
            </Link>
            <Link href='/room'>
              <p className="hover:text-foreground/80 text-foreground/60">Room</p>
            </Link>
            <Link href='/about' target='_blank'>
              <p className="hover:text-foreground/80 text-foreground/60">About</p>
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href='https://www.linkedin.com/in/shivashanker-kanugula' target="_blank">
              <p className="hover:text-foreground/80 text-foreground/60">LinkedIn</p>
            </Link>
            <Link href='https://github.com/ss_web_innovations' target='_blank'>
              <p className="hover:text-foreground/80 text-foreground/60">Github</p>
            </Link>
            <Link href='https://t.me/helpme_coder' target='_blank'>
              <p className="hover:text-foreground/80 text-foreground/60">Telegram</p>
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <p className="hover:text-foreground/80 text-foreground/60"><a href='/termsofservice' target='_blank'>Terms of Service</a></p>
            <p className="hover:text-foreground/80 text-foreground/60"><a href='/privacypolicy' target='_blank'>Privacy Policy</a></p>
          </div>
        </div>
      </div>
      <p className="w-full mt-12 -mb-6 text-center text-sm text-muted-foreground">
        Made with <CiHeart className="inline-block text-foreground align-middle w-5 h-5 pb-0.5" /> by{' '}
        <a
          href="https://www.shivashanker.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-zinc-500"
        >
          Kanugula Shivashanker
        </a>
      </p>
    </div>
  )
}

export default Footer