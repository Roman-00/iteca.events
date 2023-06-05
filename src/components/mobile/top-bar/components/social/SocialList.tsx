import { FC } from 'react';
import { SocialItemType } from '@/typings/social';
import { TopBarSocialLink } from './SocialLink';

import styles from './social.module.scss';

export const TopBarSocialList: FC<{ list: SocialItemType[] }> = ({ list }) => {
    return (
        <ul className={styles['top-bar-social-list']}>
            {list.map((item) => (
                <li
                    key={item.id}
                    className={styles['top-bar-social-list__item']}
                >
                    <TopBarSocialLink
                        item={item}
                    />
                </li>
            ))}
        </ul>
    )
}
