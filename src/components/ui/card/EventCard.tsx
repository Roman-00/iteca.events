import { FC } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { getImages } from '@/helpers/images';
import { MaterialIcon } from '@/components/ui/MaterialIcon';

import 'dayjs/locale/ru';
import 'dayjs/locale/en';

import styles from './event.module.scss';

export const EventCard: FC<{ item: EventItemType }> = ({ item }) => {
    /**
     * Форматируем дату в нужный формат
     *
     * @param {string} bebinTime - начало выставки
     * @param {string} endTime - конец выставки
     *
     * @return string
     */
    const formateDate = (bebinTime: string, endTime: string) => {
        const begin = dayjs(bebinTime).format('D MMMM');
        const end = dayjs(endTime).format('D MMMM YYYY');

        return `${begin} - ${end}`;
    }

    return (
        <a
            href={item.programme}
            target="_blank"
            className={styles['event-card']}
        >
            <div className={styles['event-card__images']}>
                <Image
                    src={getImages(item.projectID, 'events').bw}
                    alt={item.title}
                    width={350}
                    height={160}
                />

                <Image
                    src={getImages(item.projectID, 'events').hover}
                    alt={item.title}
                    width={350}
                    height={160}
                />
            </div>

            <div className={styles['event-card-wrap']}>
                <h3 className={styles['event-card__title']}>
                    { item.title }
                </h3>

                <p className={styles['event-card__date']}>
                    <MaterialIcon name="MdCalendarMonth" />

                    { formateDate(item.beginDate, item.endDate) }
                </p>

                <p className={styles['event-card__location']}>
                    <MaterialIcon name="MdLocationOn" />

                    { item.address }
                </p>

                <p className={styles['event-card__description']}>
                    { item.description }
                </p>

                <button
                    type="button"
                    className={styles['event-card__btn']}
                >
                    <span className={styles['event-card__btn-icon']}>
                        <MaterialIcon name="MdKeyboardDoubleArrowRight" />
                    </span>

                    Подробнее
                </button>
            </div>
        </a>
    );
};
