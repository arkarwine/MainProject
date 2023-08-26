export interface TiktokApi {
    video: string[];
    music: string[];
    cover: string[];
    originvideo: string[];
    [k: string]: unknown;
}

export type FacebookApi = {
    resourceId: string;
    urls: {
        url: string;
        name: string;
        subName: string;
        extension: string;
        [k: string]: unknown;
    }[];
    meta: {
        title: string;
        sourceUrl: string;
        duration: string;
        [k: string]: unknown;
    };
    pictureUrl: string;
    service: string;
    [k: string]: unknown;
}[];

export interface InstagramApi {
    Type: string;
    title: string;
    media: {
        media: string;
        Type: string;
        thumbnail: string;
        API: string;
        [k: string]: unknown;
    }[];
    media_with_thumb: {
        media: string;
        Type: string;
        thumbnail: string;
        API: string;
        [k: string]: unknown;
    }[];
    carousel_thumb: string;
    API: string;
    [k: string]: unknown;
}

export interface YoutubeApi {
    status: string;
    id: string;
    title: string;
    lengthSeconds: string;
    channelTitle: string;
    channelId: string;
    description: string;
    thumbnail: {
        url: string;
        width: number;
        height: number;
        [k: string]: unknown;
    }[];
    allowRatings: boolean;
    viewCount: string;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    isLiveContent: boolean;
    captions: {
        captionTracks: {
            baseUrl: string;
            name: string;
            vssId: string;
            languageCode: string;
            isTranslatable: boolean;
            [k: string]: unknown;
        }[];
        translationLanguages: {
            languageCode: string;
            languageName: string;
            [k: string]: unknown;
        }[];
        [k: string]: unknown;
    };
    expiresInSeconds: string;
    formats: {
        itag: number;
        url: string;
        mimeType: string;
        bitrate: number;
        width: number;
        height: number;
        lastModified: string;
        contentLength?: string;
        quality: string;
        fps: number;
        qualityLabel: string;
        projectionType: string;
        averageBitrate?: number;
        audioQuality: string;
        approxDurationMs: string;
        audioSampleRate: string;
        audioChannels: number;
        [k: string]: unknown;
    }[];
    adaptiveFormats: {
        itag: number;
        url: string;
        mimeType: string;
        bitrate: number;
        width?: number;
        height?: number;
        initRange: {
            start: string;
            end: string;
            [k: string]: unknown;
        };
        indexRange: {
            start: string;
            end: string;
            [k: string]: unknown;
        };
        lastModified: string;
        contentLength: string;
        quality: string;
        fps?: number;
        qualityLabel?: string;
        projectionType: string;
        averageBitrate: number;
        approxDurationMs: string;
        colorInfo?: {
            transferCharacteristics: string;
            [k: string]: unknown;
        };
        highReplication?: boolean;
        audioQuality?: string;
        audioSampleRate?: string;
        audioChannels?: number;
        loudnessDb?: number;
        [k: string]: unknown;
    }[];
    [k: string]: unknown;
}
