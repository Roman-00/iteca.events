import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { ContactsItemType } from '@/typings/contact';

import styles from './contact.module.scss';

export const Contact: FC<{ contacts: ContactsItemType[] }> = ({ contacts }) => {
    const { t } = useTranslation('contact');

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
