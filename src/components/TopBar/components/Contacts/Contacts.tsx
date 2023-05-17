import { FC } from 'react';
import { contacts } from '@/constants/contacts';
import { MaterialIcon } from '@/components/MaterialIcon';

import styles from './contacts.module.scss';

export const Contacts: FC = () => {
    return (
        <div className={styles['top-bar-contacts']}>
            <a
                href={contacts.CONTACTS_EMAIL_LINK}
                className={styles['top-bar-contacts__link']}
            >
                <MaterialIcon
                    name="MdPhone"
                />

                { contacts.CONTACTS_EMAIL }
            </a>

            <a
                href={contacts.CONTACTS_PHONE_LINK}
                className={styles['top-bar-contacts__link']}
            >
                <MaterialIcon
                    name="MdEmail"
                />

                { contacts.CONTACTS_PHONE }
            </a>
        </div>
    );
};
