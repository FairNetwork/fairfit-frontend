import './errorMessage.scss';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return <div className="error-message">{message}</div>;
};

ErrorMessage.displayNAme = 'ErrorMessage';

export default ErrorMessage;
