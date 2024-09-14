import './utilityContent.scss';
import { useCallback } from 'react';
import { getPathFromUrl } from '../../../utils/routes';
import { useAppSelector } from '../../../hooks/redux';
import { selectUtilityByType } from '../../../redux/gym/selectors';
import { RootState } from '../../../redux/store';
import { getUtilityType } from '../../../utils/utility';

const UtilityContent = () => {
    const type = getPathFromUrl();

    const htmlSelector = useCallback(
        (state: RootState) => selectUtilityByType(state, getUtilityType(type)),
        [type]
    );

    const html = useAppSelector(htmlSelector) ?? '';

    return (
        <div className="utility-content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

UtilityContent.displayName = 'UtilityContent';

export default UtilityContent;