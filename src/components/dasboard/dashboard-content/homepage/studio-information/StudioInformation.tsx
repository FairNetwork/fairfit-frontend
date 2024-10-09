import './studioInformation.scss';
import { ChangeEvent, ReactElement, useEffect, useMemo, useState } from 'react';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import SocialMediaInput from './social-media-input/SocialMediaInput';
import { SocialMediaType } from '../../../../../types/socialMedia';
import { loadTags } from '../../../../../redux/gym/actions';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { selectGymTags, selectTags } from '../../../../../redux/gym/selectors';

const StudioInformation = () => {
    const dispatch = useAppDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const tags = useAppSelector(selectTags);
    const selectedTags = useAppSelector(selectGymTags);

    useEffect(() => {
        void dispatch(loadTags());
    }, [dispatch]);

    const handleSocialMediaChange = (newValue: string, type: SocialMediaType) => {};

    const tagContent = useMemo(() => {
        const items: ReactElement[] = [];

        tags.forEach(({ name, id }) => {
            items.push(
                <FormControlLabel
                    key={`tag-checkbox--${id}`}
                    control={
                        <Checkbox
                            id={id}
                            checked={((selectedTags ?? []) as unknown as string[]).includes(name)}
                        />
                    }
                    label={name}
                />
            );
        });

        return items;
    }, [selectedTags, tags]);

    return (
        <div className="studio-information">
            <h2 id="table-studio-information">Studio Informationen</h2>
            <i>
                Passe die grundlegenden Details deines Studios an, um eine optimale Darstellung für
                deine Nutzer zu gewährleisten.
            </i>
            <div className="studio-information__column">
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    style={{ width: '100%' }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                />
                <TextField
                    id="address"
                    label="Adresse"
                    variant="outlined"
                    value={address}
                    style={{ width: '100%' }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setAddress(event.target.value)
                    }
                />
            </div>
            <h3 id="table-social-media">Social Media Konten</h3>
            <i>
                Verbinde dein Studio mit sozialen Netzwerken! Füge Links zu deinen Profilen hinzu,
                damit Kunden dich leicht finden und folgen können.
            </i>
            <SocialMediaInput
                icon="bi bi-instagram"
                label="Instagram"
                value="test"
                onChange={(value) => handleSocialMediaChange(value, SocialMediaType.INSTAGRAM)}
            />
            <SocialMediaInput
                icon="bi bi-facebook"
                label="Facebook"
                value="test"
                onChange={(value) => handleSocialMediaChange(value, SocialMediaType.FACEBOOK)}
            />
            <SocialMediaInput
                icon="bi bi-tiktok"
                label="TikTok"
                value="test"
                onChange={(value) => handleSocialMediaChange(value, SocialMediaType.TIKTOK)}
            />
            <SocialMediaInput
                icon="bi bi-youtube"
                label="YouTube"
                value="test"
                onChange={(value) => handleSocialMediaChange(value, SocialMediaType.YOUTUBE)}
            />
            <SocialMediaInput
                icon="bi bi-twitter-x"
                label="Twitter"
                value="test"
                onChange={(value) => handleSocialMediaChange(value, SocialMediaType.TWITTER)}
            />
            <h3 id="table-opening-times">Öffnungszeiten</h3>
            <i>
                Gib die täglichen Öffnungs- und Schließzeiten deines Studios an, damit Kunden immer
                wissen, wann sie vorbeikommen können.
            </i>
            <h3 id="table-tags">Tags</h3>
            <i>
                Wähle aus verschiedenen Eigenschaften deines Studios aus, um es besser zu
                kategorisieren und auffindbar zu machen.
            </i>
            <div className="studio-information__tags">{tagContent}</div>
        </div>
    );
};

StudioInformation.displayName = 'StudioInformation';

export default StudioInformation;
