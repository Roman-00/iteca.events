import { FC } from 'react';
import { contacts } from '@/constants/contacts';
import { MaterialIcon } from '@/components/Ui/MaterialIcon';

import styles from './contacts.module.scss';

export const Contacts: FC = () => {
    return (
        <div className={styles.contacts}>
            <a
                href={contacts.CONTACTS_EMAIL_LINK}
                className={styles['contacts__link']}
            >
                <MaterialIcon
                    name="MdPhone"
                    class={styles['contacts__link-icon']}
                />

                { contacts.CONTACTS_EMAIL }
            </a>

            <a
                href={contacts.CONTACTS_EMAIL_LINK}
                className={styles['contacts__link']}
            >
                <MaterialIcon
                    name="MdEmail"
                    class={styles['contacts__link-icon']}
                />

                { contacts.CONTACTS_EMAIL }
            </a>
        </div>
    )
};
