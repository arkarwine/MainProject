export interface TiktokApi {
    ok?: boolean;
    result?: {
        aweme_id?: string;
        video?: {
            url_list?: string[];
            data_size?: number;
            duration?: number;
            [k: string]: unknown;
        };
        music?: {
            url_list?: string[];
            matched_song?: {
                cover?: string;
                author?: string;
                title?: string;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        aweme_detail?: {
            cha_list?: {
                desc?: string;
                share_info?: {
                    share_weibo_desc?: string;
                    share_title?: string;
                    bool_persist?: number;
                    share_title_myself?: string;
                    share_title_other?: string;
                    share_signature_url?: string;
                    share_signature_desc?: string;
                    share_url?: string;
                    share_desc?: string;
                    share_quote?: string;
                    share_desc_info?: string;
                    [k: string]: unknown;
                };
                hashtag_profile?: string;
                cha_attrs?: null;
                banner_list?: null;
                show_items?: null;
                cid?: string;
                author?: {
                    can_set_geofencing?: null;
                    user_tags?: null;
                    bold_fields?: null;
                    advanced_feature_info?: null;
                    followers_detail?: null;
                    geofencing?: null;
                    mutual_relation_avatars?: null;
                    events?: null;
                    user_profile_guide?: null;
                    type_label?: null;
                    cha_list?: null;
                    white_cover_url?: null;
                    advance_feature_item_order?: null;
                    shield_edit_field_info?: null;
                    cover_url?: null;
                    item_list?: null;
                    relative_users?: null;
                    need_points?: null;
                    homepage_bottom_toast?: null;
                    search_highlight?: null;
                    platform_sync_info?: null;
                    ad_cover_url?: null;
                    [k: string]: unknown;
                };
                connect_music?: unknown[];
                is_challenge?: number;
                view_count?: number;
                sub_type?: number;
                collect_stat?: number;
                is_commerce?: boolean;
                search_highlight?: null;
                extra_attr?: {
                    is_live?: boolean;
                    [k: string]: unknown;
                };
                cha_name?: string;
                schema?: string;
                user_count?: number;
                type?: number;
                is_pgcshow?: boolean;
                [k: string]: unknown;
            }[];
            commerce_config_data?: null;
            green_screen_materials?: null;
            products_info?: null;
            follow_up_publish_from_id?: number;
            status?: {
                is_delete?: boolean;
                allow_comment?: boolean;
                private_status?: number;
                reviewed?: number;
                is_prohibited?: boolean;
                review_result?: {
                    review_status?: number;
                    [k: string]: unknown;
                };
                aweme_id?: string;
                allow_share?: boolean;
                in_reviewing?: boolean;
                self_see?: boolean;
                download_status?: number;
                [k: string]: unknown;
            };
            risk_infos?: {
                vote?: boolean;
                warn?: boolean;
                risk_sink?: boolean;
                type?: number;
                content?: string;
                [k: string]: unknown;
            };
            prevent_download?: boolean;
            nickname_position?: null;
            misc_info?: string;
            group_id_list?: {
                GroupdIdList0?: null;
                GroupdIdList1?: number[];
                [k: string]: unknown;
            };
            author?: {
                follower_status?: number;
                avatar_larger?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                following_count?: number;
                with_commerce_entry?: boolean;
                friends_status?: number;
                share_qrcode_uri?: string;
                qa_status?: number;
                short_id?: string;
                avatar_uri?: string;
                follower_count?: number;
                create_time?: number;
                signature?: string;
                with_shop_entry?: boolean;
                show_image_bubble?: boolean;
                room_id?: number;
                comment_setting?: number;
                live_commerce?: boolean;
                language?: string;
                white_cover_url?: null;
                special_lock?: number;
                is_discipline_member?: boolean;
                twitter_id?: string;
                has_insights?: boolean;
                item_list?: null;
                comment_filter_status?: number;
                stitch_setting?: number;
                uid?: string;
                total_favorited?: number;
                custom_verify?: string;
                relative_users?: null;
                user_period?: number;
                need_recommend?: number;
                ad_cover_url?: null;
                youtube_channel_title?: string;
                has_email?: boolean;
                type_label?: null;
                can_set_geofencing?: null;
                events?: null;
                follow_status?: number;
                is_ad_fake?: boolean;
                shield_digg_notice?: number;
                share_info?: {
                    share_qrcode_url?: {
                        uri?: string;
                        url_list?: unknown[];
                        width?: number;
                        height?: number;
                        [k: string]: unknown;
                    };
                    share_title_myself?: string;
                    share_title_other?: string;
                    share_desc_info?: string;
                    share_url?: string;
                    share_weibo_desc?: string;
                    share_desc?: string;
                    share_title?: string;
                    [k: string]: unknown;
                };
                advance_feature_item_order?: null;
                advanced_feature_info?: null;
                has_twitter_token?: boolean;
                live_verify?: number;
                hide_search?: boolean;
                enterprise_verify_reason?: string;
                prevent_download?: boolean;
                bold_fields?: null;
                account_region?: string;
                cv_level?: string;
                avatar_medium?: {
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    uri?: string;
                    [k: string]: unknown;
                };
                authority_status?: number;
                is_block?: boolean;
                user_rate?: number;
                download_setting?: number;
                verify_info?: string;
                mutual_relation_avatars?: null;
                has_facebook_token?: boolean;
                download_prompt_ts?: number;
                bind_phone?: string;
                platform_sync_info?: null;
                cover_url?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                }[];
                user_mode?: number;
                mention_status?: number;
                shield_follow_notice?: number;
                followers_detail?: null;
                secret?: number;
                has_orders?: boolean;
                geofencing?: null;
                apple_account?: number;
                search_highlight?: null;
                commerce_user_level?: number;
                video_icon?: {
                    uri?: string;
                    url_list?: unknown[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                youtube_channel_id?: string;
                avatar_168x168?: {
                    width?: number;
                    height?: number;
                    uri?: string;
                    url_list?: string[];
                    [k: string]: unknown;
                };
                aweme_count?: number;
                avatar_thumb?: {
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    uri?: string;
                    [k: string]: unknown;
                };
                duet_setting?: number;
                status?: number;
                verification_type?: number;
                accept_private_policy?: boolean;
                unique_id_modify_time?: number;
                user_profile_guide?: null;
                sec_uid?: string;
                shield_edit_field_info?: null;
                is_star?: boolean;
                cha_list?: null;
                user_canceled?: boolean;
                react_setting?: number;
                youtube_expire_time?: number;
                ins_id?: string;
                avatar_300x300?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                favoriting_count?: number;
                live_agreement?: number;
                unique_id?: string;
                user_tags?: null;
                tw_expire_time?: number;
                twitter_name?: string;
                homepage_bottom_toast?: null;
                nickname?: string;
                google_account?: string;
                need_points?: null;
                fb_expire_time?: number;
                has_youtube_token?: boolean;
                shield_comment_notice?: number;
                region?: string;
                is_phone_binded?: boolean;
                [k: string]: unknown;
            };
            item_comment_settings?: number;
            cover_labels?: null;
            mask_infos?: unknown[];
            search_highlight?: null;
            desc_language?: string;
            need_trim_step?: boolean;
            create_time?: number;
            is_ads?: boolean;
            geofencing?: null;
            with_promotional_music?: boolean;
            without_watermark?: boolean;
            share_url?: string;
            share_info?: {
                share_weibo_desc?: string;
                share_desc?: string;
                share_title?: string;
                share_desc_info?: string;
                share_link_desc?: string;
                share_signature_url?: string;
                share_signature_desc?: string;
                share_quote?: string;
                share_url?: string;
                bool_persist?: number;
                share_title_myself?: string;
                share_title_other?: string;
                [k: string]: unknown;
            };
            image_infos?: null;
            group_id?: string;
            geofencing_regions?: null;
            bodydance_score?: number;
            long_video?: null;
            origin_comment_ids?: null;
            content_desc?: string;
            disable_search_trending_bar?: boolean;
            anchors?: null;
            have_dashboard?: boolean;
            question_list?: null;
            music?: {
                id_str?: string;
                title?: string;
                duration?: number;
                prevent_download?: boolean;
                strong_beat_url?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                audition_duration?: number;
                duration_high_precision?: {
                    video_duration_precision?: number;
                    duration_precision?: number;
                    shoot_duration_precision?: number;
                    audition_duration_precision?: number;
                    [k: string]: unknown;
                };
                cover_large?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                cover_thumb?: {
                    width?: number;
                    height?: number;
                    uri?: string;
                    url_list?: string[];
                    [k: string]: unknown;
                };
                mid?: string;
                is_commerce_music?: boolean;
                is_author_artist?: boolean;
                is_matched_metadata?: boolean;
                matched_song?: {
                    id?: string;
                    author?: string;
                    title?: string;
                    h5_url?: string;
                    cover_medium?: {
                        width?: number;
                        height?: number;
                        uri?: string;
                        url_list?: string[];
                        [k: string]: unknown;
                    };
                    performers?: null;
                    chorus_info?: {
                        start_ms?: number;
                        duration_ms?: number;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                search_highlight?: null;
                author?: string;
                preview_start_time?: number;
                play_url?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                owner_nickname?: string;
                external_song_info?: unknown[];
                id?: number;
                extra?: string;
                user_count?: number;
                collect_stat?: number;
                is_original?: boolean;
                is_original_sound?: boolean;
                multi_bit_rate_play_info?: null;
                is_play_music?: boolean;
                album?: string;
                status?: number;
                author_deleted?: boolean;
                preview_end_time?: number;
                shoot_duration?: number;
                mute_share?: boolean;
                cover_medium?: {
                    width?: number;
                    height?: number;
                    uri?: string;
                    url_list?: string[];
                    [k: string]: unknown;
                };
                source_platform?: number;
                position?: null;
                binded_challenge_id?: number;
                author_position?: null;
                artists?: unknown[];
                lyric_short_position?: null;
                tag_list?: null;
                is_pgc?: boolean;
                can_not_reuse?: boolean;
                offline_desc?: string;
                owner_handle?: string;
                dmv_auto_show?: boolean;
                is_audio_url_with_cookie?: boolean;
                video_duration?: number;
                [k: string]: unknown;
            };
            video?: {
                is_bytevc1?: number;
                play_addr?: {
                    file_cs?: string;
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    url_key?: string;
                    data_size?: number;
                    file_hash?: string;
                    [k: string]: unknown;
                };
                is_callback?: boolean;
                big_thumbs?: null;
                meta?: string;
                ai_dynamic_cover_bak?: {
                    width?: number;
                    height?: number;
                    uri?: string;
                    url_list?: string[];
                    [k: string]: unknown;
                };
                width?: number;
                has_watermark?: boolean;
                download_suffix_logo_addr?: {
                    height?: number;
                    data_size?: number;
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    [k: string]: unknown;
                };
                ratio?: string;
                download_addr?: {
                    height?: number;
                    data_size?: number;
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    [k: string]: unknown;
                };
                has_download_suffix_logo_addr?: boolean;
                is_h265?: number;
                need_set_token?: boolean;
                height?: number;
                dynamic_cover?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                origin_cover?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                tags?: null;
                ai_dynamic_cover?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                cdn_url_expired?: number;
                misc_download_addrs?: string;
                cover?: {
                    uri?: string;
                    url_list?: string[];
                    width?: number;
                    height?: number;
                    [k: string]: unknown;
                };
                bit_rate?: {
                    [k: string]: unknown;
                }[];
                duration?: number;
                [k: string]: unknown;
            };
            rate?: number;
            cmt_swt?: boolean;
            position?: null;
            retry_type?: number;
            is_pgcshow?: boolean;
            video_text?: unknown[];
            label_top_text?: null;
            item_duet?: number;
            commerce_info?: {
                auction_ad_invited?: boolean;
                with_comment_filter_words?: boolean;
                adv_promotable?: boolean;
                study_id?: string;
                [k: string]: unknown;
            };
            aweme_id?: string;
            statistics?: {
                download_count?: number;
                share_count?: number;
                lose_count?: number;
                lose_comment_count?: number;
                collect_count?: number;
                aweme_id?: string;
                comment_count?: number;
                digg_count?: number;
                play_count?: number;
                forward_count?: number;
                whatsapp_share_count?: number;
                [k: string]: unknown;
            };
            is_vr?: boolean;
            author_user_id?: number;
            is_hash_tag?: number;
            is_relieve?: boolean;
            content_desc_extra?: unknown[];
            playlist_blocked?: boolean;
            desc?: string;
            label_top?: {
                uri?: string;
                url_list?: string[];
                width?: number;
                height?: number;
                [k: string]: unknown;
            };
            video_labels?: unknown[];
            region?: string;
            challenge_position?: null;
            item_stitch?: number;
            user_digged?: number;
            text_extra?: {
                [k: string]: unknown;
            }[];
            is_top?: number;
            item_react?: number;
            video_control?: {
                show_progress_bar?: number;
                draft_progress_bar?: number;
                allow_duet?: boolean;
                allow_react?: boolean;
                prevent_download_type?: number;
                allow_dynamic_wallpaper?: boolean;
                allow_stitch?: boolean;
                allow_download?: boolean;
                share_type?: number;
                timer_status?: number;
                allow_music?: boolean;
                [k: string]: unknown;
            };
            hybrid_label?: null;
            interact_permission?: {
                duet?: number;
                stitch?: number;
                duet_privacy_setting?: number;
                stitch_privacy_setting?: number;
                upvote?: number;
                allow_adding_to_story?: number;
                [k: string]: unknown;
            };
            distance?: string;
            aweme_type?: number;
            uniqid_position?: null;
            collect_stat?: number;
            is_preview?: number;
            sort_label?: string;
            interaction_stickers?: null;
            distribute_type?: number;
            music_begin_time_in_ms?: number;
            music_end_time_in_ms?: number;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
