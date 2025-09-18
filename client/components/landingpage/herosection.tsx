"use client"
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Button } from '../ui/button'
import ChatMessage from './chatmessage'
import { Send, Shield, Zap, Users } from 'lucide-react'

const HeroSection = () => {
  const heroRef = useRef(null)

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-accent/5">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500" />
      
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center mb-8"
          >
            <Link href="/about" target='_blank' className="group relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Next-Generation Messaging</span>
                </div>
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-foreground">Redefining</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-primary bg-clip-text text-transparent">
              Communication
            </span>
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience enterprise-grade messaging with military-level encryption, 
            real-time collaboration tools, and seamless integration across all your devices.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-12 justify-center lg:justify-start"
          >
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 text-accent" />
              <span>End-to-End Encryption</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Zap className="w-5 h-5 text-accent" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Users className="w-5 h-5 text-accent" />
              <span>Team Collaboration</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link href="/room">
              <Button className="btn-red-hover h-14 px-8 rounded-xl bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="mr-2">Start Chatting</span>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/about" target='_blank'>
              <Button variant="outline" className="h-14 px-8 rounded-xl border-2 border-border hover:border-accent/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 font-semibold text-base transition-all duration-300">
                View Demo
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Enhanced Chat Preview */}
        <div className="flex-1 relative max-w-lg w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl scale-105" />
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl blur-3xl animate-pulse" />
            
            {/* Chat window */}
            <div className="relative bg-card/90 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative border-b border-border/50 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-xl px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
                    </div>
                    <div className="ml-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-foreground">Team Workspace</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                    5 online
                  </div>
                </div>
              </div>
              
              {/* Chat content */}
              <div className="p-6 h-[480px] flex flex-col">
                <div className="flex-1 space-y-4 overflow-y-auto pr-2 no-scrollbar">
                  <ChatMessage
                    sender="Alex Chen"
                    message="Just deployed the new authentication system. Performance improvements are significant!"
                    align="left"
                  />
                  <ChatMessage
                    sender="You"
                    message="Impressive work! The login speed feels instant now. How did you optimize it?"
                    align="right"
                  />
                  <ChatMessage
                    sender="Alex Chen"
                    message="Implemented JWT tokens with refresh logic and added Redis caching. Also switched to bcrypt for better security."
                    align="left"
                  />
                  <ChatMessage
                    sender="Sarah Kim"
                    message="The new dashboard analytics are looking great too. User engagement is up 40%!"
                    align="right"
                  />
                  <ChatMessage
                    sender="Alex Chen"
                    message="That's fantastic! The real-time features are really making a difference in user experience."
                    align="left"
                  />
                  <ChatMessage
                    sender="You"
                    message="Should we schedule a demo for the stakeholders? I think they'll be impressed with the progress."
                    align="right"
                  />
                  <ChatMessage
                    sender="Sarah Kim"
                    message="Absolutely! I'll prepare the presentation deck. The metrics speak for themselves."
                    align="left"
                  />
                </div>
                
                {/* Input area */}
                <div className="mt-6 flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/30">
                  <div className="flex-1 bg-background rounded-lg px-4 py-3 text-sm text-muted-foreground border border-border/50">
                    Share your thoughts...
                  </div>
                  <Button size="icon" className="rounded-lg bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-200">
                    <Send className='w-4 h-4 text-accent-foreground' />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  )
}

export default HeroSection