import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { contacts } from '@/constants/contacts';
import { MaterialIcon } from '@/components/MaterialIcon';

import styles from './banner.module.scss';

const Banner: FC = () => {
    const { t } = useTranslation('banner');

    return (
        <div className={styles.banner}>
            <div className="container">
                <h3
                    className={cn({
                        'animate__animated animate__fadeInLeft': true,
                    }, styles['banner__title'])}
                    dangerouslySetInnerHTML={{ __html: t('title') || '' }}
                />

                <p className={cn({
                    'animate__animated animate__delay-1s animate__fadeInUp': true,
                }, styles['banner__description'])}>
                    { t('description') }
                </p>

                <a
                    href={contacts.CONTACTS_EMAIL_LINK}
                    className={cn({
                        'animate__animated animate__delay-2s animate__fadeInUp': true,
                    }, styles['banner__link'])}
                    target="_blank"
                >
                    <MaterialIcon
                        name="MdEmail"
                    />

                    { t('link') }
                </a>
            </div>
        </div>
    );
};

export default Banner;
