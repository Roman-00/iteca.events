import { FC } from 'react';
import { EventCard } from '@/components/ui/card/EventCard';

import styles from './exhibitionsSlugList.module.scss';

export const ExhibitionsSlugList: FC<{ list: EventItemType[] }> = ({ list }) => {
    return (
        <ul className={styles['exhibitions-slug-list']}>
            {list.map(item => (
                <li
                    key={item.projectID}
                    className={styles['exhibitions-slug-list__item']}
                >
                    <EventCard
                        item={item}
                    />
                </li>
            ))}
        </ul>
    )
};
