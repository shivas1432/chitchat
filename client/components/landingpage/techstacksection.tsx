"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const technologies = [
  { name: "Next.js", category: "frontend" },
  { name: "Socket.io", category: "backend" },
  { name: "NextAuth", category: "auth" },
  { name: "Prisma", category: "database" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "TypeScript", category: "language" },
]

export default function TechStackSection() {
  return (
    <section className="py-20 mt-8 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Powered by Modern <span className="text-green-600 dark:text-green-400">Technology</span>
            </h2>
            <p className="text-sm md:text-[16px] text-zinc-500 dark:text-zinc-400 mb-8">
              Chitchat leverages cutting-edge technologies to deliver a seamless, reliable, and secure communication
              experience. Our tech stack is carefully chosen to provide the best performance and user experience.
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`text-sm py-1 px-3 border 
                    ${tech.category === "frontend" ? "border-green-200 bg-green-50 text-green-700 dark:border-green-700 dark:bg-green-900 dark:text-green-200" : ""}
                    ${tech.category === "backend" ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-700 dark:bg-blue-900 dark:text-blue-200" : ""}
                    ${tech.category === "auth" ? "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-700 dark:bg-purple-900 dark:text-purple-200" : ""}
                    ${tech.category === "database" ? "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-700 dark:bg-amber-900 dark:text-amber-200" : ""}
                    ${tech.category === "language" ? "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-700 dark:bg-cyan-900 dark:text-cyan-200" : ""}
                  `}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-700 dark:to-emerald-700 rounded-xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-black/95 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="flex-1"></div>
                  </div>

                  <div className="bg-neutral-50 dark:bg-black p-4 rounded-md font-mono text-sm text-neutral-800 dark:text-neutral-200">
                    <div className="text-green-600 dark:text-green-400">{`// Chitchat's real-time messaging`}</div>
                    <div className="mt-2">
                      <span className="text-purple-600 dark:text-purple-400">import</span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">{"{ io }"}</span>{" "}
                      <span className="text-purple-600 dark:text-purple-400">from</span>{" "}
                      <span className="text-green-600 dark:text-green-400">&apos;socket.io-client&apos;</span>;
                    </div>
                    <div className="mt-1">
                      <span className="text-purple-600 dark:text-purple-400">const</span> socket = io(
                      <span className="text-green-600 dark:text-green-400">&apos;https://chitchat-server.render.com&apos;</span>);
                    </div>
                    <div className="mt-3">
                      socket.on(<span className="text-green-600 dark:text-green-400">&apos;message&apos;</span>, (data) {"=> {"}
                    </div>
                    <div className="ml-4">
                      console.log(<span className="text-green-600 dark:text-green-400">&apos;New message:&apos;</span>, data);
                    </div>
                    <div>{"}"});</div>
                    <div className="mt-3">
                      <span className="text-purple-600 dark:text-purple-400">function</span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">sendMessage</span>(message) {"{"}
                    </div>
                    <div className="ml-4">
                      socket.emit(<span className="text-green-600 dark:text-green-400">&apos;send-message&apos;</span>, message);
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
