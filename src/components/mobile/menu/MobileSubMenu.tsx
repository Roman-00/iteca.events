import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { MenuItemLinksType } from '@/typings/menu';

import styles from './menu.module.scss';

export const MobileSubMenu: FC<{ links: MenuItemLinksType[] }> = ({ links }) => {
    const { t } = useTranslation('menu');

    return (
        <ul className={styles['mobile-sub-menu']}>
            {links.map((item) => (
                <li
                    key={item.id}
                    className={styles['mobile-sub-menu__item']}
                >
                    <Link
                        href={item.link}
                        className={styles['mobile-sub-menu__item-link']}
                    >
                        { t(`${item.label}`) }
                    </Link>
                </li>
            ))}
        </ul>
    )
}
