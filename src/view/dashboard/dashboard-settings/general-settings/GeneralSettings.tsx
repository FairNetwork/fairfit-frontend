import './generalSettings.scss';
import Input from '../../../../components/shared/input/Input';
import ComboBox from '../../../../components/shared/combo-box/ComboBox';
import { useState } from 'react';
import { GYM_TYPES } from '../../../../constants/gym';

const GeneralSettings = () => {
    const [selectedGymTypeId, setSelectedGymTypeId] = useState<string>();

    return (
        <div className="general-settings">
            <div className="general-settings__headline">Grundlegende Einstellungen</div>
            <div className="general-settings__wrapper">
                <Input placeholder="Name" value="" />
                <Input placeholder="Adresse" value="" />
                <Input placeholder="Kontakt E-Mail" value="" />
                <ComboBox
                    placeholder="Sportart"
                    onSelect={(id) => setSelectedGymTypeId(id)}
                    selectedItemId={selectedGymTypeId}
                    items={GYM_TYPES}
                />
            </div>
        </div>
    );
};

GeneralSettings.displayName = 'GeneralSettings';

export default GeneralSettings;
