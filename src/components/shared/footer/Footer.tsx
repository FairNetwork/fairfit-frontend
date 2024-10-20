import { ReactElement, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterItem } from '../../../types/footer';
import './footer.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectCurrentGymId } from '../../../redux/gym/selectors';
import SocialMediaWrapper from '../social-media-wrapper/SocialMediaWrapper';

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
                    className="footer__content__item"
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

    return (
        <div className="footer">
            <SocialMediaWrapper />
            <div className="footer__content">{content}</div>
        </div>
    );
};

Footer.displayName = 'Footer';

export default Footer;
