import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './about.module.scss';

export const AboutViews: FC<{ list: AboutParagraphType[] }> = ({ list }) => {
    const { t } = useTranslation('about');

    return (
        <div className={styles['about-views']}>
            <div className="container">
                <h2
                    className={cn('title', styles['about-views__title'])}
                    dangerouslySetInnerHTML={{ __html: t('title') || '' }}
                />

                <div className={styles['about-views-content']}>
                    {list.map((item, index) => (
                        <p
                            key={index}
                            className={styles['about-views__content-text']}
                            dangerouslySetInnerHTML={{ __html: item.text || '' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};
