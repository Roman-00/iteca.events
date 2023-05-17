import React, { FC, PropsWithChildren } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Banner } from '@/components/Banner/Banner';
import { SkeletonLoader } from '@/components/ui/Skeleton';

import styles from './layouts.module.scss';

const Layouts: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLoading(true);
    }, []);

    return (
        <>
            <Header />

            {isLoading
                ? <Banner />
                : <SkeletonLoader count={1} height={525} />
            }

            <div className={styles['layouts-content']}>
                { children }
            </div>

            <Footer/>
        </>
    )
};

export default Layouts;
