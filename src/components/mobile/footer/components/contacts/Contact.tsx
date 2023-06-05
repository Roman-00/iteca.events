import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { contact } from '@/constants/contact';
import { MaterialIcon } from '@/components/Ui/MaterialIcon';

import styles from './contact.module.scss';

export const FooterContact: FC = () => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles['footer-contact']}>
            <h3 className={styles['footer-contact__title']}>
                { t('contact.title') }
            </h3>

            <p className={styles['footer-contact__address']}>
                { t('contact.address') }
            </p>

            <button
                type="button"
                className={styles['footer-contact__map-btn']}
            >
                <MaterialIcon name="MdLocationOn" />

                { t('contact.map') }
            </button>

            <a
                href={contact.PHONE_LINK}
                className={styles['footer-contact__link']}
                target="_blank"
            >
                <MaterialIcon name="MdPhone" />

                { contact.PHONE }
            </a>

            <a
                href={contact.EMAIL_LINK}
                className={styles['footer-contact__link']}
                target="_blank"
            >
                <MaterialIcon name="MdEmail" />

                { contact.EMAIL }
            </a>
        </div>
    )
}
