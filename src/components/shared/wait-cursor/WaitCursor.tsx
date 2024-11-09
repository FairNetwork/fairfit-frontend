import './waitCursor.scss';

interface WaitCursorProps {
    shouldShowWaitCursor?: boolean;
}

const WaitCursor = ({ shouldShowWaitCursor }: WaitCursorProps) => {
    return (
        <div className="wait-cursor" style={{ opacity: shouldShowWaitCursor ? 1 : 0 }}>
            <div className="wait-cursor__spinner" />
        </div>
    );
};

WaitCursor.displayName = 'WaitCursor';

export default WaitCursor;
