import { FC } from 'react';
import { contacts } from '@/constants/contacts';
import { MaterialIcon } from '@/components/ui/MaterialIcon';

import styles from './contacts.module.scss';

export const Contacts: FC = () => (
    <div className={styles.contacts}>
        <a
            href={contacts.CONTACTS_PHONE_LINK}
            target="_blank"
            className={styles['contacts__item']}
        >
            <MaterialIcon
                name='MdPhone'
            />

            { contacts.CONTACTS_PHONE }
        </a>

        <a
            href={contacts.CONTACTS_EMAIL_LINK}
            target="_blank"
            className={styles['contacts__item']}
        >
            <MaterialIcon
                name='MdEmail'
            />

            { contacts.CONTACTS_EMAIL }
        </a>
    </div>
);
