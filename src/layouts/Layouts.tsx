import React, { FC, PropsWithChildren } from 'react';
import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';

import styles from './layouts.module.scss';

const Layouts: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <>
            <Header />

            <Banner />

            <div className={styles['layouts-content']}>
                { children }
            </div>
        </>
    )
};

export default Layouts;
