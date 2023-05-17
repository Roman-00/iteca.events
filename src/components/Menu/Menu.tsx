import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { navigation } from '@/constants/navigation';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { SubMenu } from './SubMenu';

import styles from './menu.module.scss';

export const Menu: FC = () => {
    const { t } = useTranslation('menu');

    const [isOpen, setIsOpen] = React.useState<string | null>(null);

    const handle = (id: string) => {
        setIsOpen((item) => (item === id ? null : id));
    };

    return (
        <ul className={styles.menu}>
            {navigation.map((item: NavigationItemType) => (
                <li
                    key={item.id}
                    className={styles['menu__item']}
                    onClick={() => handle(item.id)}
                >
                    {item.link
                        ? (<Link href={item.link} className={styles['menu__item-link']}>
                            { t(`${item.label}`) }
                        </Link>)
                        : (<div className={styles['menu__item-link']}>
                            { t(`${item.label}`) }
                            <MaterialIcon name="MdKeyboardArrowDown" />
                        </div>)
                    }

                    {item.submenu && isOpen === item.id && <SubMenu submenu={item.submenu} />}
                </li>
            ))}
        </ul>
    )
};
