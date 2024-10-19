import './studio.scss';
import { Divider } from '@mui/material';
import SocialMedia from './social-media/SocialMedia';
import Tags from './tags/Tags';
import General from './general/General';

const Studio = () => {
    return (
        <div className="studio">
            <General />
            <Divider variant="middle" />
            <SocialMedia />
            <Divider variant="middle" />
            <Tags />
        </div>
    );
};

Studio.displayName = 'Studio';

export default Studio;
