import './utility.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import UtilityContent from './utility-content/UtilityContent';

const Utility = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //if (isGymPage && loadingState === 'rejected') {
        //  navigate('/no_content');
        //}
    }, [navigate]);

    return (
        <div className="utility">
            <UtilityContent />
        </div>
    );
};

Utility.displayName = 'Utility';

export default Utility;
