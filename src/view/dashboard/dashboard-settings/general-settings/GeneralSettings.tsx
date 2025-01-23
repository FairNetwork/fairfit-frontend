import './generalSettings.scss';
import Input from '../../../../components/shared/input/Input';

const GeneralSettings = () => {
    return (
        <div className="general-settings">
            <Input placeholder="Name" value="" />
            <Input placeholder="Adresse" value="" />
            <Input placeholder="Kontakt E-Mail" value="" />
        </div>
    );
};

GeneralSettings.displayName = 'GeneralSettings';

export default GeneralSettings;
