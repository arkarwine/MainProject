export interface InnerTubeApi {
    streaming_data: {
        expires: string;
        formats: {
            itag: number;
            mime_type: string;
            is_type_otf: boolean;
            bitrate: number;
            average_bitrate?: number;
            width: number;
            height: number;
            last_modified: string;
            content_length?: number;
            quality: string;
            quality_label: string;
            fps: number;
            url: string;
            audio_quality: string;
            approx_duration_ms: number;
            audio_sample_rate: number;
            audio_channels: number;
            has_audio: boolean;
            has_video: boolean;
            language: string;
            is_dubbed: boolean;
            is_descriptive: boolean;
            is_original: boolean;
            [k: string]: unknown;
        }[];
        adaptive_formats: {
            itag: number;
            mime_type: string;
            is_type_otf: boolean;
            bitrate: number;
            average_bitrate: number;
            width?: number;
            height?: number;
            init_range: {
                start: number;
                end: number;
                [k: string]: unknown;
            };
            index_range: {
                start: number;
                end: number;
                [k: string]: unknown;
            };
            last_modified: string;
            content_length: number;
            quality: string;
            quality_label?: string;
            fps?: number;
            url: string;
            approx_duration_ms: number;
            audio_sample_rate?: number;
            has_audio: boolean;
            has_video: boolean;
            color_info?: {
                primaries: string;
                transfer_characteristics: string;
                matrix_coefficients: string;
                [k: string]: unknown;
            };
            audio_quality?: string;
            audio_channels?: number;
            loudness_db?: number;
            language?: string;
            is_dubbed?: boolean;
            is_descriptive?: boolean;
            is_original?: boolean;
            [k: string]: unknown;
        }[];
        dash_manifest_url: unknown;
        hls_manifest_url: unknown;
        [k: string]: unknown;
    };
    playability_status: {
        status: string;
        reason: string;
        embeddable: boolean;
        audio_only_playablility: unknown;
        error_screen: unknown;
        [k: string]: unknown;
    };
    basic_info: {
        id: string;
        channel_id: string;
        title: string;
        duration: number;
        keywords: string[];
        is_owner_viewing: boolean;
        short_description: string;
        thumbnail: {
            url: string;
            width: number;
            height: number;
            [k: string]: unknown;
        }[];
        allow_ratings: boolean;
        view_count: number;
        author: string;
        is_private: boolean;
        is_live: boolean;
        is_live_content: boolean;
        is_upcoming: boolean;
        is_crawlable: boolean;
        is_post_live_dvr: boolean;
        embed: {
            iframe_url: string;
            width: number;
            height: number;
            [k: string]: unknown;
        };
        channel: {
            id: string;
            name: string;
            url: string;
            [k: string]: unknown;
        };
        is_unlisted: boolean;
        is_family_safe: boolean;
        category: string;
        has_ypc_metadata: boolean;
        start_timestamp: unknown;
        like_count: number;
        is_liked: boolean;
        is_disliked: boolean;
        [k: string]: unknown;
    };
    annotations: {
        type: string;
        featured_channel: {
            start_time_ms: string;
            end_time_ms: string;
            watermark: {
                url: string;
                width: number;
                height: number;
                [k: string]: unknown;
            }[];
            channel_name: string;
            endpoint: {
                type: string;
                payload: {
                    browseId: string;
                    [k: string]: unknown;
                };
                metadata: {
                    url: string;
                    page_type: string;
                    api_url: string;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            subscribe_button: {
                type: string;
                title: {
                    text: string;
                    runs: {
                        text: string;
                        bold: boolean;
                        italics: boolean;
                        strikethrough: boolean;
                        [k: string]: unknown;
                    }[];
                    [k: string]: unknown;
                };
                subscribed: boolean;
                enabled: boolean;
                item_type: string;
                channel_id: string;
                show_preferences: boolean;
                subscribed_text: {
                    text: string;
                    runs: {
                        text: string;
                        bold: boolean;
                        italics: boolean;
                        strikethrough: boolean;
                        [k: string]: unknown;
                    }[];
                    [k: string]: unknown;
                };
                unsubscribed_text: {
                    text: string;
                    runs: {
                        text: string;
                        bold: boolean;
                        italics: boolean;
                        strikethrough: boolean;
                        [k: string]: unknown;
                    }[];
                    [k: string]: unknown;
                };
                notification_preference_button: unknown;
                endpoint: {
                    type: string;
                    payload: {
                        channelIds: string[];
                        params: string;
                        [k: string]: unknown;
                    };
                    metadata: {
                        api_url: string;
                        send_post: boolean;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        allow_swipe_dismiss: boolean;
        annotation_id: string;
        [k: string]: unknown;
    }[];
    storyboards: {
        type: string;
        boards: {
            template_url: string;
            thumbnail_width: number;
            thumbnail_height: number;
            thumbnail_count: number;
            interval: number;
            columns: number;
            rows: number;
            storyboard_count: number;
            [k: string]: unknown;
        }[];
        [k: string]: unknown;
    };
    endscreen: {
        type: string;
        elements: {
            type: string;
            style: string;
            title: {
                text: string;
                [k: string]: unknown;
            };
            endpoint: {
                type: string;
                payload: {
                    videoId: string;
                    watchEndpointSupportedOnesieConfig: {
                        html5PlaybackOnesieConfig: {
                            commonConfig: {
                                url: string;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                metadata: {
                    url: string;
                    page_type: string;
                    api_url: string;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            image: {
                url: string;
                width: number;
                height: number;
                [k: string]: unknown;
            }[];
            metadata: {
                text: string;
                [k: string]: unknown;
            };
            thumbnail_overlays: {
                type: string;
                text: string;
                style: string;
                [k: string]: unknown;
            }[];
            left: number;
            top: number;
            width: number;
            aspect_ratio: number;
            start_ms: number;
            end_ms: number;
            id: string;
            [k: string]: unknown;
        }[];
        start_ms: string;
        [k: string]: unknown;
    };
    captions: {
        type: string;
        caption_tracks: {
            base_url: string;
            name: {
                text: string;
                [k: string]: unknown;
            };
            vss_id: string;
            language_code: string;
            kind: string;
            is_translatable: boolean;
            [k: string]: unknown;
        }[];
        audio_tracks: {
            caption_track_indices: number[];
            [k: string]: unknown;
        }[];
        default_audio_track_index: number;
        translation_languages: {
            language_code: string;
            language_name: {
                text: string;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }[];
        [k: string]: unknown;
    };
    cards: {
        type: string;
        cards: {
            type: string;
            teaser: {
                type: string;
                message: {
                    text: string;
                    [k: string]: unknown;
                };
                prominent: boolean;
                [k: string]: unknown;
            };
            content: unknown;
            cue_ranges: {
                start_card_active_ms: string;
                end_card_active_ms: string;
                teaser_duration_ms: string;
                icon_after_teaser_ms: string;
                [k: string]: unknown;
            }[];
            [k: string]: unknown;
        }[];
        header: {
            text: string;
            [k: string]: unknown;
        };
        allow_teaser_dismiss: boolean;
        [k: string]: unknown;
    };
    primary_info: {
        type: string;
        title: {
            text: string;
            runs: {
                text: string;
                bold: boolean;
                italics: boolean;
                strikethrough: boolean;
                [k: string]: unknown;
            }[];
            [k: string]: unknown;
        };
        super_title_link: {
            text: string;
            runs: {
                text: string;
                endpoint?: {
                    type: string;
                    payload: {
                        browseId: string;
                        params: string;
                        [k: string]: unknown;
                    };
                    metadata: {
                        url: string;
                        page_type: string;
                        api_url: string;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                bold: boolean;
                italics: boolean;
                strikethrough: boolean;
                [k: string]: unknown;
            }[];
            endpoint: {
                type: string;
                payload: {
                    browseId: string;
                    params: string;
                    [k: string]: unknown;
                };
                metadata: {
                    url: string;
                    page_type: string;
                    api_url: string;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        view_count: {
            text: string;
            [k: string]: unknown;
        };
        short_view_count: {
            text: string;
            [k: string]: unknown;
        };
        badges: unknown[];
        published: {
            text: string;
            [k: string]: unknown;
        };
        relative_date: {
            text: string;
            [k: string]: unknown;
        };
        menu: {
            type: string;
            items: {
                type: string;
                text: string;
                icon_type: string;
                endpoint: {
                    type: string;
                    payload: {
                        modal?: {
                            modalWithTitleAndButtonRenderer: {
                                title: {
                                    runs: {
                                        text: string;
                                        [k: string]: unknown;
                                    }[];
                                    [k: string]: unknown;
                                };
                                content: {
                                    runs: {
                                        text: string;
                                        [k: string]: unknown;
                                    }[];
                                    [k: string]: unknown;
                                };
                                button: {
                                    buttonRenderer: {
                                        style: string;
                                        size: string;
                                        isDisabled: boolean;
                                        text: {
                                            simpleText: string;
                                            [k: string]: unknown;
                                        };
                                        navigationEndpoint: {
                                            clickTrackingParams: string;
                                            commandMetadata: {
                                                webCommandMetadata: {
                                                    url: string;
                                                    webPageType: string;
                                                    rootVe: number;
                                                    [k: string]: unknown;
                                                };
                                                [k: string]: unknown;
                                            };
                                            signInEndpoint: {
                                                hack: boolean;
                                                [k: string]: unknown;
                                            };
                                            [k: string]: unknown;
                                        };
                                        trackingParams: string;
                                        [k: string]: unknown;
                                    };
                                    [k: string]: unknown;
                                };
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        signal?: string;
                        actions?: {
                            clickTrackingParams: string;
                            showEngagementPanelEndpoint: {
                                panelIdentifier: string;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        }[];
                        [k: string]: unknown;
                    };
                    metadata: {
                        send_post?: boolean;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            }[];
            top_level_buttons: {
                type: string;
                like_button?: {
                    type: string;
                    text: {
                        text: string;
                        [k: string]: unknown;
                    };
                    toggled_text: {
                        text: string;
                        [k: string]: unknown;
                    };
                    tooltip: string;
                    toggled_tooltip: string;
                    is_toggled: boolean;
                    is_disabled: boolean;
                    icon_type: string;
                    like_count: number;
                    short_like_count: string;
                    endpoint: {
                        type: string;
                        payload: {
                            [k: string]: unknown;
                        };
                        metadata: {
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    toggled_endpoint: {
                        type: string;
                        payload: {
                            [k: string]: unknown;
                        };
                        metadata: {
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    button_id: string;
                    target_id: string;
                    [k: string]: unknown;
                };
                dislike_button?: {
                    type: string;
                    text: {
                        [k: string]: unknown;
                    };
                    toggled_text: {
                        [k: string]: unknown;
                    };
                    tooltip: string;
                    toggled_tooltip: string;
                    is_toggled: boolean;
                    is_disabled: boolean;
                    icon_type: string;
                    endpoint: {
                        type: string;
                        payload: {
                            [k: string]: unknown;
                        };
                        metadata: {
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    toggled_endpoint: {
                        type: string;
                        payload: {
                            [k: string]: unknown;
                        };
                        metadata: {
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    button_id: string;
                    target_id: string;
                    [k: string]: unknown;
                };
                text?: string;
                tooltip?: string;
                icon_type?: string;
                is_disabled?: boolean;
                endpoint?: {
                    type: string;
                    payload: {
                        serializedShareEntity: string;
                        commands: {
                            clickTrackingParams: string;
                            openPopupAction: {
                                popup: {
                                    unifiedSharePanelRenderer: {
                                        trackingParams: string;
                                        showLoadingSpinner: boolean;
                                        [k: string]: unknown;
                                    };
                                    [k: string]: unknown;
                                };
                                popupType: string;
                                beReused: boolean;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        }[];
                        [k: string]: unknown;
                    };
                    metadata: {
                        api_url: string;
                        send_post: boolean;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            }[];
            label: string;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    secondary_info: {
        type: string;
        owner: {
            type: string;
            subscription_button: {
                type: string;
                [k: string]: unknown;
            };
            subscriber_count: {
                text: string;
                [k: string]: unknown;
            };
            author: {
                id: string;
                name: string;
                thumbnails: {
                    url: string;
                    width: number;
                    height: number;
                    [k: string]: unknown;
                }[];
                endpoint: {
                    type: string;
                    payload: {
                        browseId: string;
                        canonicalBaseUrl: string;
                        [k: string]: unknown;
                    };
                    metadata: {
                        url: string;
                        page_type: string;
                        api_url: string;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                badges: unknown[];
                is_moderator: boolean;
                is_verified: boolean;
                is_verified_artist: boolean;
                url: string;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        description: {
            text: string;
            runs: {
                text: string;
                bold: boolean;
                italics: boolean;
                strikethrough: boolean;
                endpoint?: {
                    type: string;
                    payload: {
                        browseId?: string;
                        params?: string;
                        url?: string;
                        target?: string;
                        nofollow?: boolean;
                        [k: string]: unknown;
                    };
                    metadata: {
                        url: string;
                        page_type: string;
                        api_url?: string;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                attachment?: {
                    startIndex: number;
                    length: number;
                    element: {
                        type: {
                            imageType: {
                                image: {
                                    sources: {
                                        url: string;
                                        [k: string]: unknown;
                                    }[];
                                    [k: string]: unknown;
                                };
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        properties: {
                            layoutProperties: {
                                height: {
                                    value: number;
                                    unit: string;
                                    [k: string]: unknown;
                                };
                                width: {
                                    value: number;
                                    unit: string;
                                    [k: string]: unknown;
                                };
                                padding: {
                                    top: {
                                        value: number;
                                        unit: string;
                                        [k: string]: unknown;
                                    };
                                    [k: string]: unknown;
                                };
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    alignment: string;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            }[];
            [k: string]: unknown;
        };
        subscribe_button: {
            type: string;
            title: {
                text: string;
                runs: {
                    text: string;
                    bold: boolean;
                    italics: boolean;
                    strikethrough: boolean;
                    [k: string]: unknown;
                }[];
                [k: string]: unknown;
            };
            subscribed: boolean;
            enabled: boolean;
            item_type: string;
            channel_id: string;
            show_preferences: boolean;
            subscribed_text: {
                text: string;
                runs: {
                    text: string;
                    bold: boolean;
                    italics: boolean;
                    strikethrough: boolean;
                    [k: string]: unknown;
                }[];
                [k: string]: unknown;
            };
            unsubscribed_text: {
                text: string;
                runs: {
                    text: string;
                    bold: boolean;
                    italics: boolean;
                    strikethrough: boolean;
                    [k: string]: unknown;
                }[];
                [k: string]: unknown;
            };
            notification_preference_button: {
                type: string;
                states: {
                    id: number;
                    next_id: number;
                    state: {
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                }[];
                current_state_id: number;
                target_id: string;
                [k: string]: unknown;
            };
            endpoint: {
                type: string;
                payload: {
                    channelIds: string[];
                    params: string;
                    [k: string]: unknown;
                };
                metadata: {
                    api_url: string;
                    send_post: boolean;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        metadata: {
            type: string;
            rows: unknown[];
            collapsed_item_count: number;
            [k: string]: unknown;
        };
        show_more_text: {
            simpleText: string;
            [k: string]: unknown;
        };
        show_less_text: {
            simpleText: string;
            [k: string]: unknown;
        };
        default_expanded: boolean;
        description_collapsed_lines: number;
        [k: string]: unknown;
    };
    watch_next_feed: {
        type: string;
        id: string;
        thumbnails: {
            url: string;
            width: number;
            height: number;
            [k: string]: unknown;
        }[];
        title: {
            text: string;
            [k: string]: unknown;
        };
        author: {
            id: string;
            name: string;
            thumbnails: {
                url: string;
                width: number;
                height: number;
                [k: string]: unknown;
            }[];
            endpoint: {
                type: string;
                payload: {
                    browseId: string;
                    canonicalBaseUrl: string;
                    [k: string]: unknown;
                };
                metadata: {
                    url: string;
                    page_type: string;
                    api_url: string;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            badges: {
                type: string;
                icon_type: string;
                style: string;
                tooltip: string;
                [k: string]: unknown;
            }[];
            is_moderator: boolean;
            is_verified: boolean;
            is_verified_artist: boolean;
            url: string;
            [k: string]: unknown;
        };
        view_count: {
            text: string;
            [k: string]: unknown;
        };
        short_view_count: {
            text: string;
            [k: string]: unknown;
        };
        published: {
            text: string;
            [k: string]: unknown;
        };
        badges: {
            type: string;
            style: string;
            label: string;
            [k: string]: unknown;
        }[];
        duration: {
            text: string;
            seconds: number;
            [k: string]: unknown;
        };
        thumbnail_overlays: {
            type: string;
            text?: string;
            style?: string;
            is_toggled?: boolean;
            icon_type?: {
                toggled: string;
                untoggled: string;
                [k: string]: unknown;
            };
            tooltip?: {
                toggled: string;
                untoggled: string;
                [k: string]: unknown;
            };
            toggled_endpoint?: {
                type: string;
                payload: {
                    playlistId?: string;
                    actions?: {
                        action: string;
                        removedVideoId: string;
                        [k: string]: unknown;
                    }[];
                    [k: string]: unknown;
                };
                metadata: {
                    api_url?: string;
                    send_post?: boolean;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            untoggled_endpoint?: {
                type: string;
                payload: {
                    signal?: string;
                    actions: {
                        clickTrackingParams?: string;
                        addToPlaylistCommand?: {
                            openMiniplayer: boolean;
                            openListPanel: boolean;
                            videoId: string;
                            listType: string;
                            onCreateListCommand: {
                                clickTrackingParams: string;
                                commandMetadata: {
                                    webCommandMetadata: {
                                        sendPost: boolean;
                                        apiUrl: string;
                                        [k: string]: unknown;
                                    };
                                    [k: string]: unknown;
                                };
                                createPlaylistServiceEndpoint: {
                                    videoIds: string[];
                                    params: string;
                                    [k: string]: unknown;
                                };
                                [k: string]: unknown;
                            };
                            videoIds: string[];
                            [k: string]: unknown;
                        };
                        addedVideoId?: string;
                        action?: string;
                        [k: string]: unknown;
                    }[];
                    playlistId?: string;
                    [k: string]: unknown;
                };
                metadata: {
                    send_post: boolean;
                    api_url?: string;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }[];
        endpoint: {
            type: string;
            payload: {
                videoId: string;
                nofollow: boolean;
                watchEndpointSupportedOnesieConfig: {
                    html5PlaybackOnesieConfig: {
                        commonConfig: {
                            url: string;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            metadata: {
                url: string;
                page_type: string;
                api_url: string;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        menu: {
            type: string;
            items: {
                type: string;
                text: string;
                icon_type: string;
                endpoint: {
                    type: string;
                    payload: {
                        signal?: string;
                        actions?: {
                            clickTrackingParams: string;
                            addToPlaylistCommand?: {
                                openMiniplayer: boolean;
                                openListPanel: boolean;
                                videoId: string;
                                listType: string;
                                onCreateListCommand: {
                                    clickTrackingParams: string;
                                    commandMetadata: {
                                        webCommandMetadata: {
                                            sendPost: boolean;
                                            apiUrl: string;
                                            [k: string]: unknown;
                                        };
                                        [k: string]: unknown;
                                    };
                                    createPlaylistServiceEndpoint: {
                                        videoIds: string[];
                                        params: string;
                                        [k: string]: unknown;
                                    };
                                    [k: string]: unknown;
                                };
                                videoIds: string[];
                                [k: string]: unknown;
                            };
                            openPopupAction?: {
                                popup: {
                                    notificationActionRenderer: {
                                        responseText: {
                                            simpleText: string;
                                            [k: string]: unknown;
                                        };
                                        trackingParams: string;
                                        [k: string]: unknown;
                                    };
                                    [k: string]: unknown;
                                };
                                popupType: string;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        }[];
                        serializedShareEntity?: string;
                        commands?: {
                            clickTrackingParams: string;
                            openPopupAction: {
                                popup: {
                                    unifiedSharePanelRenderer: {
                                        trackingParams: string;
                                        showLoadingSpinner: boolean;
                                        [k: string]: unknown;
                                    };
                                    [k: string]: unknown;
                                };
                                popupType: string;
                                beReused: boolean;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        }[];
                        [k: string]: unknown;
                    };
                    metadata: {
                        send_post: boolean;
                        api_url?: string;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            }[];
            top_level_buttons: unknown[];
            label: string;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }[];
    player_overlays: {
        type: string;
        end_screen: {
            type: string;
            results: {
                type: string;
                id: string;
                title: {
                    text: string;
                    [k: string]: unknown;
                };
                thumbnails: {
                    url: string;
                    width: number;
                    height: number;
                    [k: string]: unknown;
                }[];
                thumbnail_overlays: {
                    type: string;
                    text: string;
                    style?: string;
                    [k: string]: unknown;
                }[];
                author: {
                    id: string;
                    name: string;
                    thumbnails: unknown[];
                    endpoint: {
                        type: string;
                        payload: {
                            browseId: string;
                            canonicalBaseUrl: string;
                            [k: string]: unknown;
                        };
                        metadata: {
                            url: string;
                            page_type: string;
                            api_url: string;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    badges: unknown[];
                    is_moderator: boolean;
                    is_verified: boolean;
                    is_verified_artist: boolean;
                    url: string;
                    [k: string]: unknown;
                };
                endpoint: {
                    type: string;
                    payload: {
                        videoId: string;
                        watchEndpointSupportedOnesieConfig: {
                            html5PlaybackOnesieConfig: {
                                commonConfig: {
                                    url: string;
                                    [k: string]: unknown;
                                };
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    metadata: {
                        url: string;
                        page_type: string;
                        api_url: string;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                short_view_count: {
                    text: string;
                    [k: string]: unknown;
                };
                badges: unknown[];
                duration: {
                    text: string;
                    seconds: number;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            }[];
            title: string;
            [k: string]: unknown;
        };
        autoplay: {
            type: string;
            title: {
                text: string;
                [k: string]: unknown;
            };
            video_id: string;
            video_title: {
                text: string;
                [k: string]: unknown;
            };
            short_view_count: {
                text: string;
                [k: string]: unknown;
            };
            prefer_immediate_redirect: boolean;
            count_down_secs_for_fullscreen: number;
            published: {
                text: string;
                [k: string]: unknown;
            };
            background: {
                url: string;
                width: number;
                height: number;
                [k: string]: unknown;
            }[];
            thumbnail_overlays: {
                type: string;
                text: string;
                style: string;
                [k: string]: unknown;
            }[];
            author: {
                id: string;
                name: string;
                thumbnails: unknown[];
                endpoint: {
                    type: string;
                    payload: {
                        browseId: string;
                        canonicalBaseUrl: string;
                        [k: string]: unknown;
                    };
                    metadata: {
                        url: string;
                        page_type: string;
                        api_url: string;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                badges: unknown[];
                is_moderator: boolean;
                is_verified: boolean;
                is_verified_artist: boolean;
                url: string;
                [k: string]: unknown;
            };
            cancel_button: {
                type: string;
                text: string;
                label: string;
                is_disabled: boolean;
                endpoint: {
                    type: string;
                    payload: {
                        endpoint: {
                            watch: {
                                hack: boolean;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        action: string;
                        [k: string]: unknown;
                    };
                    metadata: {
                        api_url: string;
                        send_post: boolean;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            next_button: {
                type: string;
                label: string;
                is_disabled: boolean;
                endpoint: {
                    type: string;
                    payload: {
                        videoId: string;
                        watchEndpointSupportedOnesieConfig: {
                            html5PlaybackOnesieConfig: {
                                commonConfig: {
                                    url: string;
                                    [k: string]: unknown;
                                };
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    metadata: {
                        url: string;
                        page_type: string;
                        api_url: string;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            close_button: {
                type: string;
                label: string;
                icon_type: string;
                is_disabled: boolean;
                endpoint: {
                    type: string;
                    payload: {
                        [k: string]: unknown;
                    };
                    metadata: {
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        share_button: {
            type: string;
            tooltip: string;
            icon_type: string;
            is_disabled: boolean;
            endpoint: {
                type: string;
                payload: {
                    serializedShareEntity: string;
                    commands: {
                        clickTrackingParams: string;
                        openPopupAction: {
                            popup: {
                                unifiedSharePanelRenderer: {
                                    trackingParams: string;
                                    showLoadingSpinner: boolean;
                                    [k: string]: unknown;
                                };
                                [k: string]: unknown;
                            };
                            popupType: string;
                            beReused: boolean;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    }[];
                    [k: string]: unknown;
                };
                metadata: {
                    api_url: string;
                    send_post: boolean;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        add_to_menu: {
            type: string;
            items: unknown[];
            top_level_buttons: unknown[];
            [k: string]: unknown;
        };
        fullscreen_engagement: unknown;
        actions: unknown[];
        browser_media_session: unknown;
        decorated_player_bar: unknown;
        [k: string]: unknown;
    };
    comments_entry_point_header: {
        type: string;
        header: {
            text: string;
            runs: {
                text: string;
                bold: boolean;
                italics: boolean;
                strikethrough: boolean;
                [k: string]: unknown;
            }[];
            [k: string]: unknown;
        };
        comment_count: {
            text: string;
            [k: string]: unknown;
        };
        content_renderer: {
            type: string;
            teaser_avatar: {
                url: string;
                width: number;
                height: number;
                [k: string]: unknown;
            }[];
            teaser_content: {
                text: string;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    autoplay: {
        sets: {
            autoplay_video: {
                type: string;
                payload: {
                    videoId: string;
                    params: string;
                    playerParams: string;
                    watchEndpointSupportedPrefetchConfig: {
                        prefetchHintConfig: {
                            prefetchPriority: number;
                            countdownUiRelativeSecondsPrefetchCondition: number;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                metadata: {
                    url: string;
                    page_type: string;
                    api_url: string;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }[];
        count_down_secs: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
