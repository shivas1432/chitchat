"use client"
import { MoreVertical } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import { SheetTrigger } from '../ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Link from 'next/link';

interface Props {
  clearChat: () => void;
}

const ChatDropDownMenu = ({ clearChat }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-neutral-900">
            <MoreVertical className="h-5 w-5 text-zinc-200" />
            <span className="sr-only">More options</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <Link href={"/"}>
            <DropdownMenuItem className="cursor-pointer">Home</DropdownMenuItem>
          </Link>
          <SheetTrigger className="w-full md:hidden block text-start">
            <DropdownMenuItem className="cursor-pointer">All Users</DropdownMenuItem>
          </SheetTrigger>
          <Link href={"/room"}>
            <DropdownMenuItem className="cursor-pointer">Chats</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={clearChat} className="text-red-500 focus:text-red-500 cursor-pointer">
            Clear Chat
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ChatDropDownMenu