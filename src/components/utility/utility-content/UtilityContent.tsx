import './utilityContent.scss';
import { useCallback, useEffect } from 'react';
import { getPathFromUrl } from '../../../utils/routes';
import { useAppSelector } from '../../../hooks/redux';
import { selectUtilityByType } from '../../../redux/gym/selectors';
import { RootState } from '../../../redux/store';
import { getUtilityType } from '../../../utils/utility';
import SignUp from '../../sign-up/SignUp';

const UtilityContent = () => {
    const type = getPathFromUrl();

    const htmlSelector = useCallback(
        (state: RootState) => selectUtilityByType(state, getUtilityType(type)),
        [type]
    );

    const html = useAppSelector(htmlSelector) ?? '';

    useEffect(() => {
        if (typeof html === 'string') {
            window.scrollTo(0, 0);
        }
    }, [html]);

    return (
        <div className="utility-content">
            {type === 'register-studio' ? (
                <SignUp />
            ) : (
                <div dangerouslySetInnerHTML={{ __html: html }} />
            )}
        </div>
    );
};

UtilityContent.displayName = 'UtilityContent';

export default UtilityContent;
