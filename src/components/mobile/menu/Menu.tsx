import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { menu } from '@/constants/menu';
import { Group, Menu } from '@mantine/core';
import { FaAngleDown } from 'react-icons/fa';

import styles from './menu.module.scss';

export const MenuNav: FC = () => {
    const { t } = useTranslation('menu');

    const items = menu.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item
                key={item.id}
                className={styles['menu-nav__dropdown-item']}
            >
                <Link
                    href={item.link}
                    className={styles['menu-nav__dropdown-item-link']}
                >
                    { t(`${item.label}`) }
                </Link>
            </Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.id}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                >
                    <Menu.Target>
                        <Link
                            href={link.link}
                            className={styles['menu-nav__drop-link']}
                            onClick={(e) => e.preventDefault()}
                        >
                            <span className={styles['menu-nav__drop-link-label']}>
                                { t(`${link.label}`) }
                            </span>

                            <FaAngleDown className={styles['menu-nav__drop-link-icon']} />
                        </Link>
                    </Menu.Target>
                    <Menu.Dropdown className={styles['menu-nav__dropdown']}>
                        { menuItems }
                    </Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <Link
                key={link.id}
                href={link.link}
                className={styles['menu-nav__link']}
            >
                { t(`${link.label}`) }
            </Link>
        )
    });

    return (
        <Group className={styles['menu-nav-group']}>
            { items }
        </Group>
    )
}
