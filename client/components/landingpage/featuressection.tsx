"use client"
import React from 'react'
import { ArrowRight, Check, Shield, Zap, Users, Globe, Lock, MessageSquare, Eye, Smartphone, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../ui/button'
import ChatMessage from './chatmessage'

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-card/60 backdrop-blur-xl border border-border/50 shadow-lg"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-semibold text-sm">Enterprise-Grade Features</span>
            <div className="w-8 h-[1px] bg-gradient-to-r from-accent to-transparent" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight"
          >
            <span className="text-foreground">Built for the</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-primary bg-clip-text text-transparent">
              Modern Enterprise
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Every feature is engineered for performance, security, and scalability. 
            Experience communication technology that adapts to your business needs.
          </motion.p>
        </motion.div>

        {/* Main Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          
          {/* Security Feature */}
          <motion.div
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                  Military-Grade
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                End-to-End Encryption
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bank-level security with AES-256 encryption ensures your conversations remain private and secure across all channels.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Zero-knowledge architecture", "Perfect forward secrecy", "Compliance ready (SOC 2, GDPR)"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/security" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium group/link">
                Security Details
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Performance Feature */}
          <motion.div
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                  Ultra-Fast
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                Lightning Performance
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sub-millisecond message delivery with intelligent caching and global CDN infrastructure for instant communication.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["< 50ms message delivery", "99.99% uptime SLA", "Global edge optimization"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/performance" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium group/link">
                Performance Metrics
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Collaboration Feature */}
          <motion.div
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                  Team-First
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                Smart Collaboration
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Advanced team management with role-based access, custom workflows, and intelligent conversation routing.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Unlimited team spaces", "Advanced admin controls", "API & webhook integration"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/room" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium group/link">
                Start Collaborating
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl blur-2xl" />
          <div className="relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 xl:grid-cols-2">
              
              {/* Left Content */}
              <div className="p-12 xl:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <Eye className="w-4 h-4 text-accent" />
                  <span className="text-accent font-medium text-sm">Live Demo</span>
                </div>
                
                <h3 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  See It In Action
                </h3>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Experience the power of enterprise communication with our interactive demo. 
                  See how Chitchat transforms team collaboration in real-time.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Real-time Sync</div>
                      <div className="text-xs text-muted-foreground">Instant updates</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Secure Channels</div>
                      <div className="text-xs text-muted-foreground">End-to-end encrypted</div>
                    </div>
                  </div>
                </div>
                
                <Link href="/room">
                  <Button className="btn-red-hover h-14 px-8 rounded-xl bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground font-semibold">
                    Try Interactive Demo
                  </Button>
                </Link>
              </div>
              
              {/* Right Demo */}
              <div className="relative bg-gradient-to-br from-accent/5 to-primary/5 p-8 xl:p-12 flex items-center justify-center min-h-[500px]">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl" />
                  <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* Demo Header */}
                    <div className="border-b border-border/50 bg-gradient-to-r from-card/90 to-card/70 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-medium">Enterprise Demo</span>
                          </div>
                        </div>
                        <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          Live
                        </div>
                      </div>
                    </div>
                    
                    {/* Demo Chat */}
                    <div className="p-6 h-96 flex flex-col">
                      <div className="flex-1 space-y-4 overflow-y-auto pr-2 no-scrollbar">
                        <ChatMessage
                          sender="Product Team"
                          message="Q4 metrics are exceeding projections by 23%. Great work everyone!"
                          align="left"
                        />
                        <ChatMessage
                          sender="Engineering"
                          message="New deployment pipeline reduced build time by 40%. Ready for production."
                          align="right"
                        />
                        <ChatMessage
                          sender="Product Team"
                          message="Excellent! Let&apos;s schedule the release for Monday. Security review complete?"
                          align="left"
                        />
                        <ChatMessage
                          sender="Security"
                          message="All clear. Penetration testing passed with zero critical vulnerabilities."
                          align="right"
                        />
                        <ChatMessage
                          sender="Product Team"
                          message="Perfect. I&apos;ll notify stakeholders. This will be our most secure release yet."
                          align="left"
                        />
                      </div>
                      
                      <div className="mt-6 flex items-center gap-3 p-3 bg-muted/20 rounded-xl border border-border/30">
                        <div className="flex-1 bg-background/80 rounded-lg px-4 py-3 text-sm text-muted-foreground border border-border/50">
                          Type your message...
                        </div>
                        <Button size="icon" className="rounded-lg bg-accent hover:bg-accent/90">
                          <ArrowRight className='w-4 h-4 text-accent-foreground' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cross-Platform Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-card/60 backdrop-blur-xl border border-border/50">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium text-sm">Universal Access</span>
          </div>
          
          <h3 className="text-4xl xl:text-5xl font-bold mb-6">
            Works Everywhere You Do
          </h3>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Seamless experience across all platforms and devices. Your conversations sync instantly, 
            whether you&apos;re on desktop, mobile, or web.
          </p>
          
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Monitor className="w-6 h-6 text-accent" />
              <span className="font-medium">Desktop</span>
            </div>
            <div className="w-8 h-[1px] bg-gradient-to-r from-accent/50 to-transparent" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <Smartphone className="w-6 h-6 text-accent" />
              <span className="font-medium">Mobile</span>
            </div>
            <div className="w-8 h-[1px] bg-gradient-to-r from-accent/50 to-transparent" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <Globe className="w-6 h-6 text-accent" />
              <span className="font-medium">Web</span>
            </div>
          </div>
          
          <Link href="/room">
            <Button variant="outline" className="h-14 px-8 rounded-xl border-2 border-accent/20 hover:border-accent/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 font-semibold text-lg">
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
