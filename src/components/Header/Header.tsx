import React, { FC } from 'react';
import cn from 'classnames';
import { Logo } from '@/components/Logo/Logo';
import { TopBar } from '@/components/TopBar/TopBar';
import { Menu } from '@/components/Menu/Menu';

import styles from './header.module.scss';

const Header: FC = () => {
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset > 100) {
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
        <header className={cn({
            'header--active': isScrolled
        }, styles.header)}>
            <div className="container">
                <div className={styles['header-wrap']}>
                    <div className={styles['header-right']}>
                        <Logo />
                    </div>

                    <div className={styles['header-left']}>
                        <TopBar />

                        <Menu />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
