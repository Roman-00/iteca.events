import { FC } from 'react';
import { Logo } from '@/components/Logo/Logo';
import { TopBar } from '@/components/TopBar/TopBar';
import { Menu } from '@/components/Menu/Menu';

import styles from './header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
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
