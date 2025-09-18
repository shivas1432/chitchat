"use client"
import { useContext } from "react";
import { ReceiverImageContext } from "@/context/ReceiverImageContext";
export default function useReceiverImage() {
  const context = useContext(ReceiverImageContext);
  if (!context) {
    throw new Error('useReceiver must be used within a ReceiverImageProvider');
  }
  return context;
}