"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronUp,
  ChevronDown,
  Play,
  Users,
  Clock,
  Share2,
  Check,
} from "lucide-react";

interface Song {
  id: string;
  title: string;
  channel: string;
  duration: string;
  votes: number;
  videoId: string;
  thumbnail: string;
  submittedBy: string;
}

export default function Page() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [currentSong, setCurrentSong] = useState<Song>({
    id: "current",
    title: "Bohemian Rhapsody",
    channel: "Queen Official",
    duration: "5:55",
    votes: 0,
    videoId: "fJ9rUzIMcZQ",
    thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg",
    submittedBy: "StreamHost",
  });

  const [queue, setQueue] = useState<Song[]>([
    {
      id: "1",
      title: "Don't Stop Me Now",
      channel: "Queen Official",
      duration: "3:29",
      votes: 15,
      videoId: "HgzGwKwLmgM",
      thumbnail: "https://img.youtube.com/vi/HgzGwKwLmgM/maxresdefault.jpg",
      submittedBy: "MusicLover123",
    },
    {
      id: "2",
      title: "Sweet Child O' Mine",
      channel: "Guns N' Roses",
      duration: "5:03",
      votes: 12,
      videoId: "1w7OgIMMRc4",
      thumbnail: "https://img.youtube.com/vi/1w7OgIMMRc4/maxresdefault.jpg",
      submittedBy: "RockFan456",
    },
    {
      id: "3",
      title: "Hotel California",
      channel: "Eagles",
      duration: "6:30",
      votes: 8,
      videoId: "BciS5krYL80",
      thumbnail: "https://img.youtube.com/vi/BciS5krYL80/maxresdefault.jpg",
      submittedBy: "ClassicRock",
    },
    {
      id: "4",
      title: "Stairway to Heaven",
      channel: "Led Zeppelin",
      duration: "8:02",
      votes: 6,
      videoId: "QkF3oxziUI4",
      thumbnail: "https://img.youtube.com/vi/QkF3oxziUI4/maxresdefault.jpg",
      submittedBy: "ZeppelinFan",
    },
  ]);

  const [shareSuccess, setShareSuccess] = useState(false);

  const extractVideoId = (url: string): string | null => {
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getVideoPreview = (url: string) => {
    const videoId = extractVideoId(url);
    if (!videoId) return null;

    return {
      videoId,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
    };
  };

  const handleSubmitSong = () => {
    const videoId = extractVideoId(youtubeUrl);
    if (!videoId) return;

    const newSong: Song = {
      id: Date.now().toString(),
      title: "New Song", // In a real app, you'd fetch this from YouTube API
      channel: "Unknown Artist",
      duration: "0:00",
      votes: 0,
      videoId,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      submittedBy: "You",
    };

    setQueue((prev) => [...prev, newSong]);
    setYoutubeUrl("");
  };

  const handleVote = (songId: string, increment: number) => {
    setQueue((prev) =>
      prev
        .map((song) =>
          song.id === songId
            ? { ...song, votes: Math.max(0, song.votes + increment) }
            : song
        )
        .sort((a, b) => b.votes - a.votes)
    );
  };

  const playNext = () => {
    if (queue.length > 0) {
      setCurrentSong(queue[0]);
      setQueue((prev) => prev.slice(1));
    }
  };

  const handleShare = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    }
  };

  const videoPreview = getVideoPreview(youtubeUrl);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white mt-6">
              🎵 Live Stream Song Queue
            </h1>
            <p className="text-gray-300">
              Vote for your favorite songs and shape the playlist!
            </p>
          </div>

          {/* Share Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleShare}
              className="bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-2 px-6 py-2"
            >
              {shareSuccess ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share with Fans</span>
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Song Submission */}
          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Submit a Song
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Paste YouTube URL here..."
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Button
                    onClick={handleSubmitSong}
                    disabled={!extractVideoId(youtubeUrl)}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    Add to Queue
                  </Button>
                </div>

                {/* Video Preview */}
                {videoPreview && (
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Preview:</h4>
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={videoPreview.thumbnail || "/placeholder.svg"}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Queue Stats */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {queue.length}
                    </div>
                    <div className="text-gray-300 text-sm">Songs in Queue</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {queue.reduce((sum, song) => sum + song.votes, 0)}
                    </div>
                    <div className="text-gray-300 text-sm">Total Votes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Current Player */}
          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Now Playing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${currentSong.videoId}?autoplay=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-lg">
                    {currentSong.title}
                  </h3>
                  <p className="text-gray-300">{currentSong.channel}</p>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {currentSong.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {currentSong.submittedBy}
                    </span>
                  </div>
                </div>
                <Button
                  onClick={playNext}
                  disabled={queue.length === 0}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                >
                  Play Next Song
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Song Queue */}
          <div>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Song Queue ({queue.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-[600px] overflow-y-auto">
                {queue.length === 0 ? (
                  <div className="text-center py-8 text-gray-300">
                    No songs in queue. Be the first to add one!
                  </div>
                ) : (
                  queue.map((song, index) => (
                    <div
                      key={song.id}
                      className="bg-gray-900/30 rounded-lg p-3 space-y-2"
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <img
                            src={song.thumbnail || "/placeholder.svg"}
                            alt={song.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <Badge
                            variant="secondary"
                            className="absolute -top-2 -left-2 bg-gray-800 text-white text-xs"
                          >
                            #{index + 1}
                          </Badge>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm truncate">
                            {song.title}
                          </h4>
                          <p className="text-gray-300 text-xs truncate">
                            {song.channel}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-gray-400 text-xs">
                              {song.duration}
                            </span>
                            <span className="text-gray-400 text-xs">
                              by {song.submittedBy}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleVote(song.id, 1)}
                            className="h-8 w-8 p-0 text-gray-300 hover:text-green-500 hover:bg-green-500/10 hover:border-green-500 border border-transparent"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </Button>
                          <span className="text-white font-semibold min-w-[2rem] text-center">
                            {song.votes}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleVote(song.id, -1)}
                            className="h-8 w-8 p-0 text-gray-300 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500 border border-transparent"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-gray-300 border-gray-500"
                        >
                          {song.votes} votes
                        </Badge>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
