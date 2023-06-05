import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { socialList } from '@/constants/contact';

import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import styles from './social.module.scss';

export const FooterSocial: FC = () => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles['footer-social']}>
            <h3 className={styles['footer-social__title']}>
                { t('social.title') }
            </h3>

            <ul className={styles['footer-social-list']}>
                {socialList.map((item) => (
                    <li
                        key={item.id}
                        className={styles['footer-social-list__item']}
                    >
                        <a
                            href={item.link}
                            className={styles['footer-social-list__item-link']}
                            target="_blank"
                        >
                            { item.id === 'facebook' ? <FaFacebookF /> : null }
                            { item.id === 'youtube' ? <FaYoutube /> : null }
                            { item.id === 'linkedin' ? <FaLinkedinIn /> : null }
                            { item.id === 'instagram' ? <FaInstagram /> : null }
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
