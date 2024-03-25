import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { userReducer } from './user/slice';
import { gymReducer } from './gym/slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        gym: gymReducer
    },
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        });

        if (process.env.NODE_ENV === 'development' || process.env.BUILD_ENV === 'qa') {
            /**
             * This inline require will get removed by Terser during minification
             * when NODE_ENV is not `development` and BUILD_ENV is not `qa`.
             * Do not make it an import.
             */
            // eslint-disable-next-line
            const { createLogger } = require('redux-logger');

            // eslint-disable-next-line
            const logger = createLogger({ collapsed: true, duration: true });

            return defaultMiddleware.concat(logger);
        }

        return defaultMiddleware;
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type GetAppState = () => RootState;
