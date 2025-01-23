import './generalSettings.scss';
import Input from '../../../../components/shared/input/Input';
import ComboBox from '../../../../components/shared/combo-box/ComboBox';
import { useState } from 'react';
import { GYM_TYPES } from '../../../../constants/gym';

const GeneralSettings = () => {
    const [selectedGymTypeId, setSelectedGymTypeId] = useState<string>();

    return (
        <div className="general-settings">
            <Input placeholder="Name" value="" />
            <Input placeholder="Adresse" value="" />
            <Input placeholder="Kontakt E-Mail" value="" />
            <ComboBox
                placeholder="TEst"
                onSelect={(id) => setSelectedGymTypeId(id)}
                selectedItemId={selectedGymTypeId}
                items={GYM_TYPES}
            />
        </div>
    );
};

GeneralSettings.displayName = 'GeneralSettings';

export default GeneralSettings;
