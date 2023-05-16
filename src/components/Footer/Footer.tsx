import { FC } from 'react';

import styles from './footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                Hello Footer
            </div>
        </footer>
    );
};

export default Footer;
