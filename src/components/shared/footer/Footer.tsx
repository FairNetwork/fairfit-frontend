import { ReactElement, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterItem } from '../../../types/footer';
import './footer.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectCurrentGymId } from '../../../redux/gym/selectors';

interface FooterProps {
    items: FooterItem[];
}

const Footer = ({ items }: FooterProps) => {
    const navigate = useNavigate();

    const gymId = useAppSelector(selectCurrentGymId);

    const content = useMemo(() => {
        const renderedItems: ReactElement[] = [];

        items.forEach(({ path, id, name }) => {
            renderedItems.push(
                <div
                    className="footer__item"
                    key={`footer-item__${id}`}
                    onClick={() => {
                        navigate(
                            `/${path === 'register-studio' ? '' : 'utility/'}${path}?gymId=${gymId ?? 'fairfit'}`
                        );
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
