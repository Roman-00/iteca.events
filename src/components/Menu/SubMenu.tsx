import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import styles from './subMenu.module.scss';

export const SubMenu: FC<{ submenu: NavigationSubItemType[] }> = ({ submenu }) => {
    const { t } = useTranslation('menu');

    return (
        <ul className={styles['sub-menu']}>
            {submenu.map(item => (
                <li
                    key={item.id}
                    className={styles['sub-menu__item']}
                >
                    <Link
                        href={item.link}
                        className={styles['sub-menu__item-link']}
                    >
                        { t(`${item.label}`) }
                    </Link>
                </li>
            ))}
        </ul>
    );
};
