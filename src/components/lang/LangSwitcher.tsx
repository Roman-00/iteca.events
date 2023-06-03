import React, { FC } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { useRouter } from 'next/router';

import styles from './lang.module.scss';
import {it} from "node:test";

const data = [
    { label: 'Русский', value: 'ru', image: '/ru.png' },
    { label: 'English', value: 'en', image: '/en.png' }
];

export const LangSwitcher: FC = () => {
    const [opened, setOpened] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState(data[0]);

    const router = useRouter();

    const handleChange = (item) => {
        setSelected(item);

        router.push(router.pathname, router.asPath, { locale: item.value });
    };

    const items = data.map((item) => (
        <Menu.Item
            key={item.label}
            icon={<Image src={item.image} width={16} height={12} />}
            onClick={() => handleChange(item)}
        >
            { item.label }
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton className={styles['lang-switcher']}>
                    <Group spacing="xs">
                        <Image src={selected.image} width={16} height={12} />
                        <span className={styles['lang-switcher__title']}>{ selected.label }</span>
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{ items }</Menu.Dropdown>
        </Menu>
    )
};
