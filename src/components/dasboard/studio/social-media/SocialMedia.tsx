import './socialMedia.scss';
import { Box, Grid2 } from '@mui/material';
import { ISocialMedia, SocialMediaType } from '../../../../types/socialMedia';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectSocialMedia } from '../../../../redux/gym/selectors';
import { useEffect, useRef, useState } from 'react';
import SocialMediaInput from './social-media-input/SocialMediaInput';
import { removeSocialMediaAction, updateSocialMediaAction } from '../../../../redux/gym/actions';

const INITIAL_STATE: ISocialMedia[] = [
    {
        id: 'tmp',
        type: SocialMediaType.INSTAGRAM,
        userName: ''
    },
    {
        id: 'tmp',
        type: SocialMediaType.FACEBOOK,
        userName: ''
    },
    {
        id: 'tmp',
        type: SocialMediaType.YOUTUBE,
        userName: ''
    },
    {
        id: 'tmp',
        type: SocialMediaType.TIKTOK,
        userName: ''
    },
    {
        id: 'tmp',
        type: SocialMediaType.TWITTER,
        userName: ''
    }
];

const SocialMedia = () => {
    const dispatch = useAppDispatch();

    const stateSocialMedia = useAppSelector(selectSocialMedia);

    const [socialMedia, setSocialMedia] = useState<ISocialMedia[]>(INITIAL_STATE);

    const timeoutRef = useRef(0);

    useEffect(() => {
        if (stateSocialMedia) {
            setSocialMedia((prevState) =>
                prevState.map((prev) => {
                    const currentSocialMedia = stateSocialMedia.find(
                        ({ type }) => type === prev.type
                    );

                    return currentSocialMedia ?? prev;
                })
            );
        }
    }, [stateSocialMedia]);

    const handleSocialMediaChange = (newValue: string, type: SocialMediaType) => {
        window.clearTimeout(timeoutRef.current);

        setSocialMedia((prevState) =>
            prevState.map((prev) => {
                if (prev.type === type) {
                    return {
                        ...prev,
                        userName: newValue
                    };
                }

                return prev;
            })
        );

        timeoutRef.current = window.setTimeout(() => {
            const id = socialMedia.find((media) => media.type === type)?.id;

            if (id && id !== 'tmp' && newValue === '') {
                void dispatch(removeSocialMediaAction(id));
            } else {
                void dispatch(updateSocialMediaAction({ type, userName: newValue, id: id ?? '' }));
            }
        }, 1000);
    };

    const getValue = (type: SocialMediaType) => {
        return socialMedia.find((socialMedia) => socialMedia.type === type)?.userName ?? '';
    };

    return (
        <div className="social-media">
            <h3>Social Media Konten</h3>
            <i>
                Verbinde dein Studio mit sozialen Netzwerken! Füge Links zu deinen Profilen hinzu,
                damit Kunden dich leicht finden und folgen können.
            </i>
            <Box sx={{ flexGrow: 1 }}>
                <Grid2 container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 2, md: 12 }}>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-instagram"
                            label="Instagram"
                            value={getValue(SocialMediaType.INSTAGRAM)}
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.INSTAGRAM)
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-facebook"
                            label="Facebook"
                            value={getValue(SocialMediaType.FACEBOOK)}
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.FACEBOOK)
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-tiktok"
                            label="TikTok"
                            value={getValue(SocialMediaType.TIKTOK)}
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.TIKTOK)
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-youtube"
                            label="YouTube"
                            value={getValue(SocialMediaType.YOUTUBE)}
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.YOUTUBE)
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-twitter-x"
                            label="Twitter"
                            value={getValue(SocialMediaType.TWITTER)}
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.TWITTER)
                            }
                        />
                    </Grid2>
                </Grid2>
            </Box>
        </div>
    );
};

SocialMedia.displayName = 'SocialMedia';

export default SocialMedia;
