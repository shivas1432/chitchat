import {
  MessageSquare,
  Shield,
  Globe,
  Zap,
  HardDrive,
  Smartphone,
  Rocket,
  Database,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/landingpage/footer";
import Navbar from "@/components/landingpage/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-black">
        <section className="relative bg-gradient-to-b from-green-50 to-white dark:from-neutral-950 dark:to-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-6">
              About Chitchat
            </h1>
            <div className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto space-y-4">
              <p>
                Chitchat is a real-time collaborative messaging platform designed
                for seamless communication and teamwork, making online
                interactions feel natural and responsive.
              </p>
              <p>
                In today&apos;s fast-paced digital world, effective
                communication is essential for success. Chitchat bridges the gap
                between teams and individuals by providing a platform where
                ideas flow freely and collaboration happens naturally.
              </p>
              <p>
                Our platform is built on the foundation of real-time
                interaction, ensuring that every message, every update, and
                every notification reaches its destination instantly. This
                immediacy creates a more engaging and productive environment for
                teams of all sizes.
              </p>
              <p>
                Chitchat&apos;s mission is to redefine online communication by
                offering instant messaging, real-time collaboration, and a
                dynamic user experience that empowers users to connect, share
                ideas, and collaborate without any lag or disruptions.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50 dark:from-neutral-950 dark:to-neutral-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-4">
              Why Chitchat Stands Out
            </h2>
            <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
              Discover the key features that make Chitchat the preferred choice for
              teams and individuals
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={
                  <Globe className="h-8 w-8 text-green-600 dark:text-green-500" />
                }
                title="Real-Time Messaging"
                description="Stay in sync with your team through instantaneous updates and zero latency using Socket.io."
              />
              <FeatureCard
                icon={
                  <Zap className="h-8 w-8 text-green-600 dark:text-green-500" />
                }
                title="Smart and Intuitive UI"
                description="Built with Next.js, Chitchat provides a modern and smooth user experience."
              />
              <FeatureCard
                icon={
                  <Shield className="h-8 w-8 text-green-600 dark:text-green-500" />
                }
                title="Secure Authentication"
                description="Sign in quickly and securely with Google using NextAuth."
              />
              <FeatureCard
                icon={
                  <MessageSquare className="h-8 w-8 text-green-600 dark:text-green-500" />
                }
                title="Presence Indicators"
                description="Instantly see who's online and who's typing, creating a more interactive experience."
              />
              <FeatureCard
                icon={
                  <HardDrive className="h-8 w-8 text-green-600 dark:text-green-500" />
                }
                title="Persistent Conversations"
                description="Access your chat history anytime without losing important messages."
              />
              <FeatureCard
                icon={
                  <Smartphone className="h-8 w-8 text-green-600 dark:text-green-500" />
                }
                title="Cross-Device Compatibility"
                description="Continue conversations seamlessly on any device."
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-12">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-green-50 dark:bg-neutral-900 p-6 rounded-xl flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <Rocket className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                    Next.js
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    For a fast and responsive UI that delivers a seamless
                    experience.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-neutral-900 p-6 rounded-xl flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                    Socket.io
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    For real-time communication hosted on Render, ensuring
                    instant messaging.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-neutral-900 p-6 rounded-xl flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                    Prisma
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    For managing and persisting data efficiently, keeping your
                    conversations safe.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-neutral-900 p-6 rounded-xl flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                    NextAuth
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    For secure and streamlined authentication with Google.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-neutral-900 dark:shadow-neutral-950">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
          {title}
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
      </CardContent>
    </Card>
  );
}
