import './footer.scss';
import { ReactElement, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterItem } from '../../../types/footer';
import { Gym } from '../../../types/gym';

interface FooterProps {
    items: FooterItem[];
    gymId?: Gym['internalId'];
}

const Footer = ({ items, gymId }: FooterProps) => {
    const navigate = useNavigate();

    const content = useMemo(() => {
        const renderedItems: ReactElement[] = [];

        items.forEach(({ path, id, name }) => {
            renderedItems.push(
                <div
                    className="footer__item"
                    key={`footer-item__${id}`}
                    onClick={() => {
                        navigate(`/${path}${gymId ? `?gymId=${gymId}` : ''}`);
                    }}>
                    {name}
                </div>
            );
        });

        return renderedItems;
    }, [gymId, items, navigate]);

    return <div className="footer">{content}</div>;
};

Footer.displayName = 'Footer';

export default Footer;
