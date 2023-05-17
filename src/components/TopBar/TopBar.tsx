import { FC } from 'react';
import { Contacts } from './components/Contacts/Contacts';
import { SocialLink } from './components/SocialLink/SocialLink';
import { LangSelect } from './components/LangSelect/LangSelect';

import styles from './topBar.module.scss';

export const TopBar: FC = () => {
    return (
        <div className={styles['top-bar']}>
            <Contacts />

            <SocialLink />

            <LangSelect />
        </div>
    );
};
