import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import FacebookIcon from '@/assets/svg/facebook.svg';
import YoutubeIcon from '@/assets/svg/youtube.svg';
import LinkedinIcon from '@/assets/svg/linkedin.svg';
import InstagramIcon from '@/assets/svg/instagram.svg';

import styles from './followUs.module.scss';

const socials = [
    {
        id:     'facebook',
        link:   'https://www.facebook.com/itecaevents',
        target: '_blank'
    },
    {
        id:     'youtube',
        link:   'https://www.youtube.com/user/ITECAAlmaty',
        target: '_blank'
    },
    {
        id:     'linkedin',
        link:   'https://www.linkedin.com/company/iteca/',
        target: '_blank'
    },
    {
        id:     'instagram',
        link:   'https://www.instagram.com/iteca.events/',
        target: '_blank'
    }
];

export const FollowUse: FC = () => {
    const { t } = useTranslation('footer');

    return (
        <div className={styles['follow-us']}>
            <h3 className={styles['follow-us__title']}>
                { t('follow-use.title') }
            </h3>

            <ul className={styles['follow-us__list']}>
                {socials.map(item => (
                    <li
                        key={item.id}
                        className={styles['follow-us__list-item']}
                    >
                        <a
                            href={item.link}
                            className={styles['follow-us__list-item-link']}
                            target={item.target}
                        >
                            { item.id === 'facebook' && <FacebookIcon /> }
                            { item.id === 'youtube' && <YoutubeIcon /> }
                            { item.id === 'linkedin' && <LinkedinIcon /> }
                            { item.id === 'instagram' && <InstagramIcon /> }
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
