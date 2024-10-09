import './table.scss';

const Table = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="table">
            <div className="table__topic" onClick={() => scrollTo('table-studio-information')}>
                Studio Informationen
            </div>
            <div
                className="table__topic table__topic--children"
                onClick={() => scrollTo('table-social-media')}>
                Social Media Konten
            </div>
            <div
                className="table__topic table__topic--children"
                onClick={() => scrollTo('table-opening-times')}>
                Öffnungszeiten
            </div>
            <div
                className="table__topic table__topic--children"
                onClick={() => scrollTo('table-tags')}>
                Tags
            </div>
            <div className="table__topic" onClick={() => scrollTo('table-abonnements')}>
                Abonnements
            </div>
            <div className="table__topic" onClick={() => scrollTo('table-benefits')}>
                Leistungen
            </div>
        </div>
    );
};

Table.displayName = 'Table';

export default Table;
