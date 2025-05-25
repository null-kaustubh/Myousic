declare module "youtube-search-api" {
  export interface ThumbnailItem {
    url: string;
    width: number;
    height: number;
  }

  export interface VideoResult {
    id: string;
    title: string;
    description: string;
    thumbnail: {
      thumbnails: ThumbnailItem[];
    };
    duration: string;
    views: string;
    uploaded: string;
    channel: {
      name: string;
      url: string;
    };
    url: string;
  }

  export interface VideoDetails {
    id: string;
    title: string;
    description: string;
    thumbnail: {
      thumbnails: ThumbnailItem[];
    };
    duration: string;
    views: string;
    uploaded: string;
    channel: {
      name: string;
      url: string;
    };
    url: string;
  }

  export interface SearchOptions {
    type?: "video" | "channel" | "playlist";
    max?: number;
    key?: string;
  }

  export function GetListByKeyword(
    keyword: string,
    max?: number,
    options?: SearchOptions
  ): Promise<VideoResult[]>;

  export function GetVideoDetails(videoId: string): Promise<VideoDetails>;

  export interface ChannelResult {
    id: string;
    name: string;
    description: string;
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
    subscriberCount: string;
    videoCount: string;
    url: string;
  }

  export interface PlaylistResult {
    id: string;
    title: string;
    description: string;
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
    videoCount: string;
    videos: VideoResult[];
    url: string;
  }

  export function GetChannelById(channelId: string): Promise<ChannelResult>;

  export function GetPlaylistData(
    playlistId: string,
    max?: number
  ): Promise<PlaylistResult>;
}
