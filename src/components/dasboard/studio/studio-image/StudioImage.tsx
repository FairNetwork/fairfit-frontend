import './studioImage.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectImage } from '../../../../redux/gym/selectors';
import FileInput from '../../../shared/file-input/FileInput';
import Icon from '../../../shared/icon/Icon';
import { selectFiles } from '../../../../utils/selectFiles';
import { updateGymAction } from '../../../../redux/gym/actions';

const StudioImage = () => {
    const dispatch = useAppDispatch();

    const image = useAppSelector(selectImage);

    const handleAdd = (files: File[]) => {
        const file = files[0];

        void dispatch(updateGymAction({}, file));
    };

    const handleRemoveImage = () => {};

    const handleChangeImage = async () => {
        const files = await selectFiles({ multiple: true, type: 'image/*' });

        if (files) {
            handleAdd(files);
        }
    };

    return (
        <div className="studio-image">
            <h3>Studio Bild</h3>
            <i>
                Wähle ein ansprechendes Bild deines Studios aus, um es noch besser präsentieren zu
                können.
            </i>
            {image ? (
                <div className="studio-image__image">
                    <img src={image} alt="Studio" />
                    <div className="studio-image__image__actions">
                        <Icon
                            icon="bi bi-arrow-repeat"
                            onClick={handleChangeImage}
                            style={{ rotate: '45deg' }}
                        />
                        <Icon icon="bi bi-trash3-fill" onClick={handleRemoveImage} />
                    </div>
                </div>
            ) : (
                <FileInput onSelect={handleAdd} />
            )}
        </div>
    );
};

StudioImage.displayName = 'StudioImage';

export default StudioImage;
