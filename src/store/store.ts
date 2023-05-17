import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const middleware = getDefaultMiddleware({
    serializableCheck: false,
});

/**
 * Глобальное хранилище для приложения
 */
export const store = configureStore({
    reducer:  {},
    middleware,
    devTools: process.env.MODE === 'development',
});

export const wrapper = createWrapper(() => store);

export type RootState = ReturnType<typeof store.getState>;
