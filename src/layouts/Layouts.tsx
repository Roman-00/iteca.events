import React, { FC, PropsWithChildren } from 'react';
import Header from '@/components/header/Header';

const Layouts: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <>
        <Header />

        <main className="content">
            { children }
        </main>

        <footer id="footer" className="footer">
            Footer
        </footer>
    </>
};

export default Layouts;
