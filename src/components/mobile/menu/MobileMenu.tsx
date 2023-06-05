import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { menu } from '@/constants/menu';
import { MobileSubMenu } from './MobileSubMenu';

import styles from './menu.module.scss';

export const MobileMenu: FC = () => {
    const { t } = useTranslation('menu');

    return (
        <ul className={styles['mobile-menu']}>
            {menu.map((item) => (
                <li
                    key={item.id}
                    className={styles['mobile-menu__item']}
                >
                    <Link
                        href={item.link}
                        className={styles['mobile-menu__item-link']}
                    >
                        { t(`${item.label}`) }
                    </Link>

                    {item.links ? <MobileSubMenu links={item.links} /> : <></>}
                </li>
            ))}
        </ul>
    )
}
