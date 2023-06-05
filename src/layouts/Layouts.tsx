import React, { FC, PropsWithChildren } from 'react';
import Header from '@/components/mobile/header/Header';
import Banner from '@/components/mobile/banner/Banner';
import Footer from '@/components/mobile/footer/Footer';

const Layouts: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <>
        <Header />

        <main className="content">
            <Banner />

            { children }
        </main>

        <Footer />
    </>
};

export default Layouts;
