import { FC } from 'react';
import { Contacts } from './components/Contacts';
import { Social } from './components/Social';
import { LangSwitcher } from './components/LangSwitcher';

import styles from './topBar.module.scss';

export const TopBar: FC = () => {
    return (
        <div className={styles['top-bar']}>
            <Contacts />

            <Social />

            <LangSwitcher />
        </div>
    )
};
