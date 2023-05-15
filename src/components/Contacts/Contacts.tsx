import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import styles from './contacts.module.scss';

export const Contacts: FC<{ contacts: ContactsItemType[] }> = ({ contacts }) => {
    const { t } = useTranslation('contacts');

    return (
        <div className={styles.contacts}>
            {contacts.map(item => (
                <p
                    key={item.id}
                    className={styles['contacts__item']}
                >
                    <span>
                        { t(`${item.label}`) }:&nbsp;
                    </span>
                    { item.value }
                </p>
            ))}
        </div>
    );
};
