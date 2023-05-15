import { FC } from 'react';
import { social } from '@/constants/contacts';

import FaceBookIcon from '@/assets/svg/facebook.svg';
import YoutubeIcon from '@/assets/svg/youtube.svg';
import LinkedinIcon from '@/assets/svg/linkedin.svg';
import InstagramIcon from '@/assets/svg/instagram.svg';

import styles from './social.module.scss';

export const Social: FC = () => {
    return (
        <div className={styles.social}>
            {social.map((item) => (
                <a
                    href={item.link}
                    target="_blank"
                    key={item.id}
                    className={styles['social__link']}
                >
                    { item.icon === 'facebook' && <FaceBookIcon /> }
                    { item.icon === 'youtube' && <YoutubeIcon />}
                    { item.icon === 'linkedin' && <LinkedinIcon /> }
                    { item.icon === 'instagram' && <InstagramIcon /> }
                </a>
            ))}
        </div>
    )
};
