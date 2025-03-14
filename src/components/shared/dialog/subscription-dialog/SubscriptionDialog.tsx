import './subscriptionDialog.scss';
import Button from '../../button/Button';
import { useNavigate } from 'react-router-dom';

const SubscriptionDialog = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/utility/pricing');

        window.closeDialog();
    };

    return (
        <div className="subscription-dialog">
            <h2 className="subscription-dialog__headline">Limit erreicht – Upgrade erforderlich</h2>
            <div className="subscription-dialog__content">
                Du hast die maximale Anzahl an eingestellten Leistungen erreicht. Um weitere
                Leistungen hinzuzufügen, upgrade bitte auf ein höheres Abonnement.
            </div>
            <div className="subscription-dialog__button">
                <Button onClick={handleClick}>Jetzt upgraden</Button>
            </div>
        </div>
    );
};

SubscriptionDialog.displayName = 'SubscriptionDialog';

export default SubscriptionDialog;
