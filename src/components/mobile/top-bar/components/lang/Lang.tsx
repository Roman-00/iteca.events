import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import cn from 'classnames';
import { LangItemType } from '@/typings/lang';
import { FaAngleDown } from 'react-icons/fa';

const data: LangItemType[] = [
    { label: 'Русский', image: '/ru-lang.png', value: 'ru' },
    { label: 'English', image: '/en-lang.png', value: 'en' }
]

import styles from './lang.module.scss';

export const TopBarLang: FC = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState<LangItemType>(data[0]);

    /**
     * Обработчик клика при выборе языковой версии
     */
    const change = (item: LangItemType) => {
        setSelected(item);

        router.push(router.pathname, router.asPath, { locale: item.value });
    };

    const items = data.map((item) => (
        <Menu.Item
            key={item.label}
            icon={<Image src={item.image} alt={item.label} width={22} height={22} />}
            className={styles['top-bar-lang__dropdown-item']}
            onClick={() => change(item)}
        >
            { item.label }
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            width="target"
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton
                    className={cn('', {
                        [styles['top-bar-lang__ui-btn']]:         true,
                        [styles['top-bar-lang__ui-btn--active']]: isOpen
                    })}
                >
                    <Group spacing="xs">
                        <Image
                            src={selected.image}
                            alt={selected.label}
                            width={22}
                            height={22}
                        />

                        <span>{ selected.label }</span>

                        <FaAngleDown />
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown
                className={styles['top-bar-lang__dropdown']}
            >
                { items }
            </Menu.Dropdown>
        </Menu>
    )
}
