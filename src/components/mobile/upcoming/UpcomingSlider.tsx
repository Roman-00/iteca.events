import { FC } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { EventItemType } from '@/typings/event';
import { EventCard } from '@/components/Ui/card/EventCard';

import styles from './upcoming.module.scss';

export const UpcomingSlider: FC<{ list: EventItemType[] }> = ({ list }) => {
    const options = {
        type:        'loop',
        perPage:     3,
        perMove:     1,
        gap:         '2rem',
        pagination:  false,
        breakpoints: {
            920: {
                perPage: 2,
            },
            575: {
                perPage: 1,
            }
        }
    };

    return (
        <Splide
            options={options}
            aria-label="upcoming-slider"
            className={styles['upcoming-slider']}
        >
            {list.map(item => (
                <SplideSlide
                    key={item.projectID}
                    className={styles['upcoming-slider__item']}
                >
                    <EventCard
                        item={item}
                    />
                </SplideSlide>
            ))}
        </Splide>
    );
};
