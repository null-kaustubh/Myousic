import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Users,
  Music,
  Radio,
  Heart,
  Mic,
  Headphones,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Appbar } from "./Appbar";
import { Redirect } from "./Redirect";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="px-6 h-16 flex items-center border-b border-gray-800">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            <Music className="h-5 w-5 text-gray-300" />
          </div>
          <span className="font-bold text-xl text-white">Myousic</span>
        </Link>
        <Appbar />
        <Redirect />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Left Side - Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gray-800 text-gray-300 border-gray-700 text-sm px-3 py-1">
                  🎵 Interactive Music Streaming
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Let Your Fans{" "}
                  <span className="text-gray-300">Choose the Beat</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                  Stream live music while your audience votes on what plays
                  next. Create interactive experiences that bring you closer to
                  your fans.
                </p>
              </div>

              {/* Quick How It Works */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">
                  How it works:
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <Radio className="h-4 w-4 text-gray-400" />
                    </div>
                    <span className="text-gray-400">
                      Start your live stream
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-gray-400" />
                    </div>
                    <span className="text-gray-400">
                      Fans vote on songs in real-time
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-gray-400" />
                    </div>
                    <span className="text-gray-400">
                      Build engaged communities
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200"
                >
                  <Mic className="mr-2 h-5 w-5" />
                  Start Streaming
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-400 hover:bg-gray-900 hover:text-white"
                >
                  <Headphones className="mr-2 h-5 w-5" />
                  Explore Streams
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>10K+ Streamers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  <span>1M+ Songs Played</span>
                </div>
              </div>
            </div>

            {/* Right Side - App Mockup */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-[500px] bg-gray-800 rounded-3xl p-1">
                  <div className="w-full h-full bg-gray-900 rounded-2xl p-6 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-red-400 font-semibold text-sm">
                          LIVE
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>1,247</span>
                      </div>
                    </div>

                    {/* Currently Playing */}
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gray-800 rounded-xl mx-auto mb-3 flex items-center justify-center">
                        <Music className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-semibold text-white">
                        Midnight Vibes
                      </h3>
                      <p className="text-sm text-gray-500">The Weeknd</p>
                    </div>

                    {/* Voting Section */}
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-gray-400 mb-3">
                        Vote for Next Song
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            song: "Blinding Lights",
                            artist: "The Weeknd",
                            votes: 45,
                            percentage: 60,
                          },
                          {
                            song: "Good 4 U",
                            artist: "Olivia Rodrigo",
                            votes: 32,
                            percentage: 40,
                          },
                          {
                            song: "Stay",
                            artist: "The Kid LAROI",
                            votes: 28,
                            percentage: 35,
                          },
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-800 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-white">
                                  {item.song}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {item.artist}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-400">
                                  {item.votes}
                                </span>
                                <Heart
                                  className={`h-4 w-4 ${
                                    i === 0
                                      ? "text-white fill-white"
                                      : "text-gray-600"
                                  }`}
                                />
                              </div>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-1">
                              <div
                                className="bg-white h-1 rounded-full transition-all duration-300"
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-4">
                      <Button
                        size="sm"
                        className="w-full bg-white text-black hover:bg-gray-200"
                      >
                        Join the Stream
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center animate-bounce">
                  <Zap className="h-6 w-6 text-gray-300" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center animate-pulse">
                  <Play className="h-5 w-5 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
