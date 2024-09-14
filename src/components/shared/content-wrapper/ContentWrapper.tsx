import { ReactNode } from 'react';
import './contentWrapper.scss';

interface ContentWrapperProps {
    children: ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
    return <div className="content-wrapper">{children}</div>;
};

ContentWrapper.displayName = 'ContentWrapper';

export default ContentWrapper;
