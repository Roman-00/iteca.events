import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { contacts } from '@/constants/contacts';
import { MaterialIcon } from '@/components/ui/MaterialIcon';

import styles from './contacts.module.scss';

export const FooterContacts: FC = () => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles['footer-contacts']}>
            <h3 className={styles['footer-contacts__title']}>
                { t('contacts.title') }
            </h3>

            <p className={styles['footer-contacts__address']}>
                { t('contacts.address') }
            </p>

            <button className={styles['footer-contacts__map']}>
                <MaterialIcon
                    name="MdLocationOn"
                />

                { t('contacts.office-map') }
            </button>

            <a
                href={contacts.CONTACTS_PHONE_LINK}
                className={styles['footer-contacts__phone']}
                target="_blank"
            >
                <MaterialIcon
                    name="MdPhone"
                />

                { contacts.CONTACTS_PHONE }
            </a>

            <a
                href={contacts.CONTACTS_EMAIL_LINK}
                className={styles['footer-contacts__email']}
                target="_blank"
            >
                <MaterialIcon
                    name="MdEmail"
                />

                { contacts.CONTACTS_EMAIL }
            </a>
        </div>
    );
};
