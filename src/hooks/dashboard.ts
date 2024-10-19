import { Router } from '@toolpad/core/AppProvider';
import * as React from 'react';

export const useDashboardRouter = (initialPath: string): Router => {
    const [pathname, setPathname] = React.useState(initialPath);

    return React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => setPathname(String(path))
        };
    }, [pathname]);
};
