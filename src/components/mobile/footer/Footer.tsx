import { FC } from 'react';
import { FooterContact } from './components/contacts/Contact';
import { FooterUsefulLink } from './components/useful/UsefulLink';
import { FooterSocial } from './components/social/Social';

import styles from './footer.module.scss';

const Footer: FC = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className="container">
                <div className={styles['footer-wrap']}>
                    <FooterContact />

                    <FooterUsefulLink />

                    <FooterSocial />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
