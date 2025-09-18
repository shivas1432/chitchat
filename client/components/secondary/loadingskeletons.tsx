export const HeaderSkeleton = () => {
  return (
    <div className="flex items-center w-full pl-2 py-1 rounded-md animate-pulse bg-neutral-950 transition-colors">
      <div className="relative mr-3">
        <div className="w-12 h-12 rounded-full bg-neutral-800" />
      </div>
      <div className="flex-1 text-start">
        <div className="flex justify-between">
          <div className="h-4 bg-neutral-800 rounded w-24" />
        </div>
        <div className="h-3 bg-neutral-800 rounded w-16 mt-1" />
      </div>
    </div>
  )
}


export const MessagesSkeleton = () => {
  return (
    <div className="space-y-2 px-4">
      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-40 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-52 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-32 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>
      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-52 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-10 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-40 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-8 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-52 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-8 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>
      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>
    </div>
  );
};

export const ChatSkeleton = () => {
  return (
    <div className="space-y-2 px-4">
      <div className="flex items-center w-full pl-2 py-3 rounded-md animate-pulse bg-neutral-950 transition-colors">
        <div className="relative mr-3">
          <div className="w-12 h-12 rounded-full bg-neutral-800" />
        </div>
        <div className="flex-1 text-start">
          <div className="flex justify-between">
            <div className="h-4 bg-neutral-800 rounded w-24" />
          </div>
          <div className="h-3 bg-neutral-800 rounded w-16 mt-1" />
        </div>
      </div>
      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-40 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-52 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-32 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>
      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-52 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-10 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-40 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-8 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>

      <div className={`flex justify-start w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-52 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tl-none`}
        >
          <div className="h-8 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>
      <div className={`flex justify-end w-full animate-pulse`}>
        <div
          className={`inline-block relative py-2 px-4 rounded-xl text-sm min-w-20 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] break-words bg-neutral-700/90 rounded-tr-none`}
        >
          <div className="h-4 w-3/4 bg-bg-neutral-700/90 rounded mb-1"></div>
        </div>
      </div>
    </div>
  );
};


export const UserSkeleton = () => {
  return (
    <div className="flex items-center w-full pl-2 py-3 rounded-md animate-pulse bg-neutral-950 transition-colors">
      <div className="relative mr-3">
        <div className="w-12 h-12 rounded-full bg-neutral-800" />
      </div>
      <div className="flex-1 text-start">
        <div className="flex justify-between">
          <div className="h-4 bg-neutral-800 rounded w-1/4" />
        </div>
        <div className="h-3 bg-neutral-800 rounded w-2/4 mt-1" />
      </div>
    </div>
  );
}