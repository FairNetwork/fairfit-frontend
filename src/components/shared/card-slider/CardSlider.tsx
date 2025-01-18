import Card from './card/Card';
import './cardSlider.scss';

const CardSlider = () => {
    return (
        <div className="card-slider" id="card-slider">
            <Card buttonText="Auswählen" badgeText="Angebot">
                Test
            </Card>
            <Card buttonText="Auswählen">Test</Card>
            <Card buttonText="Auswählen" badgeText="Angebot">
                Test
            </Card>
            <Card buttonText="Auswählen">Test</Card>
            <Card buttonText="Auswählen">Test</Card>
            <Card buttonText="Auswählen">Test</Card>
            <Card buttonText="Auswählen">Test</Card>
            <Card buttonText="Auswählen">Test</Card>
            <Card buttonText="Auswählen">Test</Card>
            <Card buttonText="Auswählen" badgeText="Angebot">
                Test
            </Card>
        </div>
    );
};

CardSlider.displayName = 'CardSlider';

export default CardSlider;
