import './utilityImpressum.scss';

const UtilityImpressum = () => {
    return (
        <div className="utility-impressum">
            <p>
                <strong>Angaben gemäß § 5 TMG:</strong>
            </p>
            <p>
                Max Mustermann
                <br />
                Mustermannstraße 1<br />
                12345 Musterstadt
                <br />
                Deutschland
            </p>

            <p>
                <strong>Vertreten durch:</strong> Max Mustermann
            </p>

            <p>
                <strong>Kontakt:</strong>
                <br />
                Telefon: +49 123 4567890
                <br />
                E-Mail: max@mustermann.de
            </p>

            <p>
                <strong>Umsatzsteuer-ID:</strong>
                <br />
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789
            </p>

            <p>
                <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
                <br />
                Max Mustermann
                <br />
                Mustermannstraße 1<br />
                12345 Musterstadt
            </p>

            <p>
                <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter
                Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
                Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich.
            </p>
        </div>
    );
};

UtilityImpressum.displayName = 'UtilityImpressum';

export default UtilityImpressum;
