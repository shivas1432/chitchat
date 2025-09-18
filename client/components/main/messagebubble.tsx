import React from "react"

interface MessageBubbleProps {
  content: string
  createdAt: string
  isSender: boolean
}

const MessageBubble = ({ content, createdAt, isSender }: MessageBubbleProps) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} w-full px-4`}>
      <div
        className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words ${isSender
            ? "bg-green-500 text-white rounded-tr-none"
            : "bg-neutral-700/90 text-white rounded-tl-none"
          }`}
      >
        <p className="mb-0.5 mr-6">{content}</p>
        <span
          className={`text-[0.58rem] ${isSender ? "opacity-90" : "opacity-70"} ml-2 absolute bottom-0 right-2`}
        >
          {createdAt}
        </span>
      </div>
    </div>
  )
}

export default MessageBubble
