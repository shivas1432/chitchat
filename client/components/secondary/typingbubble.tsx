const TypingBubble = () => {
  return (
    <div className="flex justify-start w-full px-4">
      <div className="flex items-center h-8 py-2 px-4 rounded-xl rounded-tl-none text-sm max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-primary/10 text-black dark:text-white">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse"></span>
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse delay-75"></span>
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
        </span>
      </div>
    </div>
  )
}

export default TypingBubble