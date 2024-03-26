import './openingTimes.scss';

const OpeningTimes = () => {
    // const { gymId } = useContext(GymContext);

    /*
    const openingTimesSelector = useCallback(
        (state: RootState) => selectLocationById(state, gymId),
        [gymId]
    );

     */

    // const openingTimes = useAppSelector(openingTimesSelector);

    /*
    const content = useMemo(() => {
        const items: ReactElement[];

        if (!openingTimes) {
            return items;
        }

        for (const [key, value] of Object.entries(openingTimes)) {

            items.push(
                <div className="opening-times__day">
                    <div className="opening-times__day__weekday">{key}</div>
                    <div className="opening-times__day__time">{} - {}</div>
                </div>
            );
        }

        return items;
    }, [openingTimes]);

     */

    return (
        <div className="opening-times">
            <div className="opening-times__title">Öffnungszeiten</div>
            <div className="opening-times__day">
                <div className="opening-times__day__weekday">Montag</div>
                <div className="opening-times__day__time">09.00 - 22.00</div>
            </div>
            <div className="opening-times__day">
                <div className="opening-times__day__weekday">Dienstag</div>
                <div className="opening-times__day__time">09.00 - 22.00</div>
            </div>
            <div className="opening-times__day">
                <div className="opening-times__day__weekday">Mittwoch</div>
                <div className="opening-times__day__time">09.00 - 22.00</div>
            </div>
            <div className="opening-times__day">
                <div className="opening-times__day__weekday">Donnerstag</div>
                <div className="opening-times__day__time">09.00 - 22.00</div>
            </div>
            <div className="opening-times__day">
                <div className="opening-times__day__weekday">Freitag</div>
                <div className="opening-times__day__time">09.00 - 22.00</div>
            </div>
            <div className="opening-times__day">
                <div className="opening-times__day__weekday">Samstag</div>
                <div className="opening-times__day__time">10.00 - 16.30</div>
            </div>
            <div className="opening-times__day">
                <div className="opening-times__day__weekday">Sonntag</div>
                <div className="opening-times__day__time">10.00 - 15.00</div>
            </div>
        </div>
    );
};

OpeningTimes.displayName = 'OpeningTimes';

export default OpeningTimes;
