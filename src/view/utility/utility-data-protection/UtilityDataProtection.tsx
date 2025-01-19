import './utilityDataProtection.scss';

const UtilityDataProtection = () => {
    return (
        <div className="utility-data-protection">
            <h1>Datenschutzerklärung</h1>
            <p>
                Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen
                besonders hohen Stellenwert für die Geschäftsleitung der Musterfirma. Eine Nutzung
                der Internetseiten der Musterfirma ist grundsätzlich ohne jede Angabe
                personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services
                unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte
                jedoch eine Verarbeitung personenbezogener Daten erforderlich werden.
            </p>

            <h2>Verantwortliche Stelle</h2>
            <p>
                Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:
                <br />
                Max Mustermann
                <br />
                Mustermannstraße 1<br />
                12345 Musterstadt
                <br />
                Deutschland
                <br />
                E-Mail: datenschutz@mustermann.de
            </p>

            <h2>Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
                Wir erheben und speichern folgende personenbezogene Daten: Name, Adresse,
                E-Mail-Adresse, Telefonnummer.
            </p>

            <h2>Rechte der betroffenen Person</h2>
            <p>
                Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen
                Daten, Berichtigung unrichtiger Daten sowie auf Löschung oder Einschränkung der
                Verarbeitung.
            </p>
        </div>
    );
};

UtilityDataProtection.displayName = 'UtilityDataProtection';

export default UtilityDataProtection;
