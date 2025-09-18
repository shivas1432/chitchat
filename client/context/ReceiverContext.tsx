"use client";
import { createContext, useState, useEffect } from "react";

type ReceiverContextType = {
  receiver: string;
  setReceiver: (receiver: string) => void;
};

export const ReceiverContext = createContext<ReceiverContextType | undefined>(undefined);

export default function ReceiverProvider({ children }: { children: React.ReactNode }) {
  const [receiver, setReceiver] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("receiver") || "";
    }
    return "";
  });

  useEffect(() => {
    if (receiver) {
      localStorage.setItem("receiver", receiver);
    }
  }, [receiver]);

  return (
    <ReceiverContext.Provider value={{ receiver, setReceiver }}>
      {children}
    </ReceiverContext.Provider>
  );
}
