import { FC } from 'react';
import { socialList } from '@/constants/contact';
import { TopBarSocialList } from './SocialList';

import styles from './social.module.scss';

export const TopBarSocial: FC = () => {
    return (
        <div className={styles['top-bar-social']}>
            <TopBarSocialList
                list={socialList}
            />
        </div>
    )
}
