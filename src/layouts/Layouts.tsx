import {FC, PropsWithChildren} from 'react';

import styles from './layouts.module.scss';

const Layouts: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={styles['layouts-content']}>
            { children }
        </div>
    )
};

export default Layouts;
