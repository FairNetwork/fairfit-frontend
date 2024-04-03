import './footer.scss';
import { ReactElement, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterItem } from '../../../types/footer';

interface FooterProps {
    items: FooterItem[];
}

const Footer = ({ items }: FooterProps) => {
    const navigate = useNavigate();

    const content = useMemo(() => {
        const renderedItems: ReactElement[] = [];

        items.forEach(({ path, id, name }) => {
            renderedItems.push(
                <div
                    className="footer__item"
                    key={`footer-item__${id}`}
                    onClick={() => {
                        navigate(`/${path}`);
                    }}>
                    {name}
                </div>
            );
        });

        return renderedItems;
    }, [items, navigate]);

    return <div className="footer">{content}</div>;
};

Footer.displayName = 'Footer';

export default Footer;
