import { ReactNode, MouseEvent } from 'react';
import './dialog.scss';

interface DialogProps {
    children: ReactNode;
}

const Dialog = ({ children }: DialogProps) => {
    const handleClick = (event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        window.closeDialog();
    };

    return (
        <div className="dialog">
            <div className="dialog__background" onClick={handleClick} />
            <div className="dialog__content">{children}</div>
        </div>
    );
};

Dialog.displayName = 'Dialog';

export default Dialog;
