import React, { FC } from 'react';
import { useRouter } from 'next/router';

type Option = {
    label: string,
    value: string,
    flag: string,
}

import styles from './langSelect.module.scss';

export const LangSelect: FC = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState(router.locale);

    const options: Option[] = [
        { label: 'Русский', value: 'ru', flag: '/flags/ru.png' },
        { label: 'English', value: 'en', flag: '/flags/en.png' }
    ];

    const handleChange = (value: string) => {
        setSelected(value);
        setIsOpen(false);

        router.push(router.pathname, router.asPath, { locale: value });
    };

    return (
        <div className={styles['lang-select']}>
            <div
                className={styles['lang-select__selected']}
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={options.find((lang) => lang.value === selected)?.flag}
                    alt={selected}
                    width={22}
                    height={16}
                    className={styles['lang-select__selected-img']}
                />

                { options.find((lang) => lang.value === selected)?.label }
            </div>
            {isOpen && (
                <div className={styles['lang-select__options']}>
                    {options.map(option => (
                        <div
                            key={option.label}
                            className={styles['lang-select__option']}
                            onClick={() => handleChange(option.value)}
                        >
                            <img
                                src={option.flag}
                                alt={option.value}
                                width={22}
                                height={16}
                                className={styles['lang-select__option-img']}
                            />

                            { option.label }
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
