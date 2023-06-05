import { FC } from 'react';
import { contact } from '@/constants/contact';
import { MaterialIcon } from '@/components/Ui/MaterialIcon';

import styles from './contact.module.scss';

export const TopBarContacts: FC = () => {
    return (
        <div className={styles['top-bar-contacts']}>
            <a
                href={contact.PHONE_LINK}
                className={styles['top-bar-contacts__link']}
                target="_blank"
            >
                <MaterialIcon name="MdPhone" />

                { contact.PHONE }
            </a>

            <a
                href={contact.EMAIL_LINK}
                className={styles['top-bar-contacts__link']}
                target="_blank"
            >
                <MaterialIcon name="MdEmail" />

                { contact.EMAIL }
            </a>
        </div>
    )
}
