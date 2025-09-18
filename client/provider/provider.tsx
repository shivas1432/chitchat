"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./theme-provider";
import ReceiverProvider from "@/context/ReceiverContext";
import ReceiverImageProvider from "@/context/ReceiverImageContext";

type Props = {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ReceiverImageProvider>
        <ReceiverProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReceiverProvider>
      </ReceiverImageProvider>
    </SessionProvider>
  );
};

export default Provider;