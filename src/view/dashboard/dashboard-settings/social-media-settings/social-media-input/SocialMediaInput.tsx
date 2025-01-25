import './socialMediaInput.scss';
import { FC } from 'react';
import { SocialMediaType } from '../../../../../types/socialMedia';
import Input from '../../../../../components/shared/input/Input';
import { useSocialMediaInput } from '../../../../../hooks/socialMedia';
import Icon from '../../../../../components/shared/icon/Icon';

interface SocialMediaInputProps {
    type: SocialMediaType;
}

const SocialMediaInput: FC<SocialMediaInputProps> = ({ type }) => {
    const { socialMedia, updateSocialMedia, icon, name } = useSocialMediaInput(type);

    return (
        <div className="social-media-input">
            <Input
                placeholder={name}
                value={socialMedia.userName}
                onChange={(event) => updateSocialMedia(event.target.value)}
                leftElement={<Icon icon={icon} />}
                rightElement={<Icon icon="fas fa-xmark" onClick={() => updateSocialMedia('')} />}
            />
        </div>
    );
};

SocialMediaInput.displayName = 'SocialMediaInput';

export default SocialMediaInput;
