import React, { FC } from 'react';
import cn from 'classnames';
import { Logo } from '@/components/logo/Logo';
import { TopBar } from '@/components/top-bar/TopBar';
import { MenuNav } from '@/components/menu/MenuNav';

import styles from './header.module.scss';

const Header: FC = () => {
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsScrolled(true);

                return;
            }

            setIsScrolled(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            id="header"
            className={cn({
                'header--active': isScrolled
            }, styles.header)}
        >
            <div className="container">
                <div className={styles['header-wrap']}>
                    <div className={styles['header-content-right']}>
                        <Logo />
                    </div>

                    <div className={styles['header-content-left']}>
                        <TopBar />

                        <MenuNav />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
