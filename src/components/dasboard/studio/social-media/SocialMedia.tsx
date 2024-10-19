import './socialMedia.scss';
import { Box, Grid2 } from '@mui/material';
import SocialMediaInput from '../../dashboard-content/homepage/studio-information/social-media-input/SocialMediaInput';
import { SocialMediaType } from '../../../../types/socialMedia';

const SocialMedia = () => {
    const handleSocialMediaChange = (newValue: string, type: SocialMediaType) => {};

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
                            value="test"
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.INSTAGRAM)
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-facebook"
                            label="Facebook"
                            value="test"
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.FACEBOOK)
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-tiktok"
                            label="TikTok"
                            value="test"
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.TIKTOK)
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-youtube"
                            label="YouTube"
                            value="test"
                            onChange={(value) =>
                                handleSocialMediaChange(value, SocialMediaType.YOUTUBE)
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <SocialMediaInput
                            icon="bi bi-twitter-x"
                            label="Twitter"
                            value="test"
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
