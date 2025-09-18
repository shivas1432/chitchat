"use client"
import { useContext } from "react";
import { ReceiverContext } from "@/context/ReceiverContext";
export default function useReceiver() {
  const context = useContext(ReceiverContext);
  if (!context) {
    throw new Error('useReceiver must be used within a ReceiverProvider');
  }
  return context;
}