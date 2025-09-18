interface ChatMessageProps {
  sender: string;
  message: string;
  align: "left" | "right";
  small?: boolean;
}

function ChatMessage({ sender, message, align, small = false }: ChatMessageProps) {
  const isLeft = align === "left"
  const textSize = small ? "text-xs" : "text-sm"

  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] ${isLeft ? "bg-zinc-600 dark:bg-zinc-800" : "bg-green-600"} ${isLeft ? "rounded-tr-xl rounded-br-xl rounded-bl-xl" : "rounded-tl-xl rounded-bl-xl rounded-br-xl"} px-4 py-2 ${textSize}`}
      >
        {isLeft && <div className="font-semibold text-zinc-200 dark:text-zinc-300 mb-1">{sender}</div>}
        <div className={isLeft ? "text-zinc-300" : "text-white"}>{message}</div>
      </div>
    </div>
  )
}

export default ChatMessage;