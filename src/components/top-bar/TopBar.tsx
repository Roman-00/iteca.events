import { FC } from 'react';
import { Contacts } from './components/contacts/Contacts';
import { Search } from './components/search/Search';
import { LangSwitcher } from '@/components/lang/LangSwitcher';

import styles from './topBar.module.scss';

export const TopBar: FC = () => {
    return (
        <div className={styles['top-bar']}>
            <Contacts />

            <LangSwitcher />

            <Search />
        </div>
    )
};
