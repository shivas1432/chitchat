"use client"
import { createContext, useEffect, useState } from "react";
type ReceiverImageContextType = {
  receiverImage: string;
  setReceiverImage: (receiverImage: string) => void;
};
export const ReceiverImageContext = createContext<ReceiverImageContextType | undefined>(undefined);
export default function ReceiveImagerProvider({ children }: { children: React.ReactNode }) {
  const [receiverImage, setReceiverImage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("receiverImage") || "";
    }
    return "";
  });

  useEffect(() => {
    if (receiverImage) {
      localStorage.setItem("receiverImage", receiverImage);
    }
  }, [receiverImage]);
  return <ReceiverImageContext.Provider value={{ receiverImage, setReceiverImage }}>{children}</ReceiverImageContext.Provider>;
}