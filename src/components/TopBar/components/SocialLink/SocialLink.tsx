import { FC } from 'react';

import FacebookIcon from '@/assets/svg/facebook.svg';
import YoutubeIcon from '@/assets/svg/youtube.svg';
import LinkedinIcon from '@/assets/svg/linkedin.svg';
import InstagramIcon from '@/assets/svg/instagram.svg';

import styles from './socialLink.module.scss';

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

export const SocialLink: FC = () => {
    return (
        <div className={styles['social-link']}>
            {socials.map(item => (
                <a
                    key={item.id}
                    href={item.link}
                    className={styles['social-link__link']}
                    target={item.target}
                >
                    { item.id === 'facebook' && <FacebookIcon /> }
                    { item.id === 'youtube' && <YoutubeIcon /> }
                    { item.id === 'linkedin' && <LinkedinIcon /> }
                    { item.id === 'instagram' && <InstagramIcon /> }
                </a>
            ))}
        </div>
    );
};
