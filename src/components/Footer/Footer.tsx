import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { FooterContacts } from './components/Contacts';
import { UsefulLink } from './components/UsefulLink';
import { FollowUse } from './components/FollowUse';

import styles from './footer.module.scss';

const Footer: FC = () => {
    const { t } = useTranslation('footer');

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles['footer-wrap']}>
                    <FooterContacts />

                    <UsefulLink />

                    <FollowUse />
                </div>

                <div className={styles['footer__copyright']}>
                    © 2023 Iteca. { t('text') }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
