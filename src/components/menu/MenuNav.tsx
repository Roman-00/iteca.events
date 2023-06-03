import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Menu, Group, Center } from '@mantine/core';
import { menu } from '@/constants/menu';

import styles from './menu.module.scss';

export const MenuNav: FC = () => {
    const { t } = useTranslation('menu');

    const items = menu.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item
                key={item.link}
                className={styles['sub-menu__item']}
            >
                <Link
                    href={item.link}
                    className={styles['sub-menu__item-link']}
                >
                    { t(`${item.label}`) }
                </Link>
            </Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                    classNames={styles.menu}
                >
                    <Menu.Target>
                        <Link
                            href={link.link}
                            className={styles['menu__item-link']}
                        >
                            <Center>
                                <span className={styles['menu__item-link-label']}>
                                    { t(`${link.label}`) }
                                </span>
                            </Center>
                        </Link>
                    </Menu.Target>
                    <Menu.Dropdown>{ menuItems }</Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <Link
                key={link.label}
                href={link.link}
                className={styles['menu__item-link']}
            >
                { t(`${link.label}`) }
            </Link>
        )
    });

    return (
        <nav className={styles.menu}>
            <Group>
                { items }
            </Group>
        </nav>
    )
};
