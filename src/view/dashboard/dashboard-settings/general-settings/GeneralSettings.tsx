import './generalSettings.scss';
import Input from '../../../../components/shared/input/Input';
import ComboBox from '../../../../components/shared/combo-box/ComboBox';
import { useState } from 'react';
import { GYM_TYPES } from '../../../../constants/gym';
import { useGeneralSettings } from '../../../../hooks/settings';

const GeneralSettings = () => {
    const { setField, formData } = useGeneralSettings();

    const { type, mail, name, address } = formData;

    const [selectedGymTypeId, setSelectedGymTypeId] = useState<string>();

    return (
        <div className="general-settings">
            <div className="general-settings__headline">Grundlegende Einstellungen</div>
            <div className="general-settings__wrapper">
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setField('name', event.target.value)}
                />
                <Input
                    placeholder="Adresse"
                    value={address}
                    onChange={(event) => setField('address', event.target.value)}
                />
                <Input
                    placeholder="Kontakt E-Mail"
                    value={mail}
                    onChange={(event) => setField('mail', event.target.value)}
                />
                <ComboBox
                    placeholder="Sportart"
                    onSelect={(id) => setField('type', Number(id))}
                    selectedItemId={String(type)}
                    items={GYM_TYPES}
                />
            </div>
        </div>
    );
};

GeneralSettings.displayName = 'GeneralSettings';

export default GeneralSettings;
