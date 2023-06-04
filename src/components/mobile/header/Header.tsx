import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { Logo } from '@/components/mobile/logo/Logo';

import styles from './header.module.scss';

const Header: FC = () => {
    const { t } = useTranslation('common');

    const [isActive, setIsActive] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const shouldBeActive = scrollTop > 100;

            setIsActive(shouldBeActive);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            id="header"
            className={cn('', {
                [styles['header--active']]: isActive,
                [styles.header]:            true
            })}
        >
            <div className="mobile-only">
                <div className="container">
                    <div className={styles['header__mb-wrap']}>
                        <Logo />

                        <button
                            type="button"
                            className={styles['header__btn-mb-menu']}
                        >
                            { t('buttons.menu') }
                        </button>
                    </div>
                </div>
            </div>

            <div className="desktop-only">
                Desktop Only
            </div>
        </header>
    );
};

export default Header;
