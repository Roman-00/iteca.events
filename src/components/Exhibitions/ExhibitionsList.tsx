import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getImages } from '@/helpers/images';

import styles from './exhibitionsList.module.scss';

export const ExhibitionsList: FC<{ list: ExhibitionsItemType[] }> = ({ list }) => {
    const router = useRouter();

    return (
        <ul className={styles['exhibitions-list']}>
            {list.map((item) => (
                <li
                    key={item.id}
                    className={styles['exhibitions-list__item']}
                >
                    <Link
                        href={`${item.link}&id=${item.id}&lang=${router.locale}`}
                        className={styles['exhibitions-list__item-link']}
                    >
                        <div className={styles['exhibitions-list__item-images']}>
                            <Image
                                src={getImages(item.id, 'events-industry').bw}
                                alt={item.label}
                                width={350}
                                height={350}
                                sizes="(max-width: 320px) 30vw"
                            />

                            <Image
                                src={getImages(item.id, 'events-industry').hover}
                                alt={item.label}
                                width={350}
                                height={350}
                            />
                        </div>

                        <div className={styles['exhibitions-list__item-content']}>
                            <h3 className={styles['exhibitions-list__item-title']}>
                                { item.label }
                            </h3>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
};
