import { FC } from 'react';
import { TopBarContacts } from './components/contact/Contact';
import { TopBarSocial } from './components/social/Social';
import { TopBarLang } from './components/lang/Lang';
import { TopBarSearch } from './components/search/Search';

import styles from './topBar.module.scss';

export const TopBar: FC = () => {
    return (
        <div className={styles['top-bar']}>
            <TopBarContacts />

            <TopBarSocial />

            <TopBarLang />

            <TopBarSearch />
        </div>
    )
};
