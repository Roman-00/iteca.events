import React, { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { Logo } from '@/components/mobile/logo/Logo';
import { TopBar } from '@/components/mobile/top-bar/TopBar';
import { MenuNav } from '@/components/mobile/menu/Menu';
import { MobileMenu } from '@/components/mobile/menu/MobileMenu';
import { MaterialIcon } from '@/components/Ui/MaterialIcon';

import styles from './header.module.scss';

const Header: FC = () => {
    const { t } = useTranslation('common');

    const [isActive, setIsActive] = React.useState<boolean>(false);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const shouldBeActive = scrollTop > 120;

            setIsActive(shouldBeActive);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header
            id="header"
            className={cn({
                [styles.header]:            true,
                [styles['header--active']]: isActive
            })}
        >
            <div className="container">
                <div className="mobile-only">
                    <div className={styles['header__mobile']}>
                        <Logo />

                        <button
                            type="button"
                            className={cn('menu-btn', styles['header__menu-btn'])}
                            onClick={() => setIsOpen(true)}
                        >
                            { t('buttons.menu') }
                        </button>
                    </div>
                </div>
                <nav className={cn('menu-nav', {
                    [styles['header__menu']]:         true,
                    [styles['header__menu--active']]: isOpen
                })}>
                    <div className={styles['header__menu--right']}>
                        <Logo />

                        <button
                            type="button"
                            className={styles['header__menu-close']}
                            onClick={() => setIsOpen(false)}
                        >
                            <MaterialIcon name="MdClose" />
                        </button>
                    </div>

                    <div className={styles['header__menu--left']}>
                        <TopBar />

                        <h3 className={styles['header__menu-title']}>
                            Меню
                        </h3>

                        <MenuNav />

                        <MobileMenu />
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;
