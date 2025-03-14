import { ReactNode } from 'react';

export {};

declare global {
    interface Window {
        openDialog: (content: ReactNode) => void;
        closeDialog: () => void;
    }
}
