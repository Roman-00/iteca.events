import { FC } from 'react';
import { Logo } from '@/components/Logo/Logo';
import { TopBar } from '@/components/TopBar/TopBar';

import styles from './header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles['header-content']}>
                    <div className={styles['header-content__left']}>
                        <Logo />
                    </div>

                    <div className={styles['header-content__right']}>
                        <TopBar />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
