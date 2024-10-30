import './openingTimes.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectOpeningTimes } from '../../../../redux/gym/selectors';
import { selectFiles } from '../../../../utils/selectFiles';

const OpeningTimes = () => {
    const dispatch = useAppDispatch();

    const openingTimes = useAppSelector(selectOpeningTimes);

    const handleAdd = (files: File[]) => {};

    const handleRemoveImage = () => {};

    const handleChangeImage = async () => {
        const files = await selectFiles({ multiple: true, type: 'image/*' });

        if (files) {
            handleAdd(files);
        }
    };

    return (
        <div className="opening-times">
            <h3>Öffnungszeiten</h3>
            <i>
                Gib die Öffnungszeiten deines Studios an, damit Kunden genau wissen, wann sie dich
                erreichen können.
            </i>
            <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </div>
    );
};

OpeningTimes.displayName = 'OpeningTimes';

export default OpeningTimes;
