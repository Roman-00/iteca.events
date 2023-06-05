import { FC } from 'react';
import { SocialItemType } from '@/typings/social';

import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import styles from './social.module.scss';

export const TopBarSocialLink: FC<{ item: SocialItemType }> = ({ item }) => {
    const { id, link } = item;

    return (
        <a
            href={link}
            className={styles['top-bar-social-link']}
            target="_blank"
        >
            { id === 'facebook' ? <FaFacebookF /> : null }
            { id === 'youtube' ? <FaYoutube /> : null }
            { id === 'linkedin' ? <FaLinkedinIn /> : null }
            { id === 'instagram' ? <FaInstagram /> : null }
        </a>
    )
}
