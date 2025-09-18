import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import { CustomInput } from "../ui/custom-input"

interface ChatInputProps {
  message: string
  setMessage: (val: string) => void
  sendMessage: () => void
  handleTyping: () => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  isConnected: boolean
}

const ChatInput = ({
  message,
  setMessage,
  sendMessage,
  handleTyping,
  handleKeyDown,
  isConnected
}: ChatInputProps) => {
  return (
    <div className="p-4 border-t border-neutral-900 bg-neutral-950 z-10">
      <div className="flex items-center gap-2">
        <CustomInput
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            handleTyping()
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={!isConnected}
          className="flex-1 border-neutral-900 rounded-full"
        />
        <Button onClick={sendMessage} size="icon" disabled={!isConnected} className="rounded-full bg-green-500 hover:bg-green-600">
          <Send className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  )
}

export default ChatInput
