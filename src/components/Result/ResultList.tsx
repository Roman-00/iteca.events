import React, { FC } from 'react';
import CountUp from 'react-countup';

import styles from './result.module.scss';

export const ResultList: FC<{ list: ResultItemType[] }> = ({ list }) => {
    const [numbers, setNumbers] = React.useState<ResultItemType[]>(list);

    React.useEffect(() => {
        const update = () => {
            setNumbers(numbers => numbers.map(item => {
                if (item.currentValue < item.targetValue) {
                    return {
                        ...item,
                        currentValue: item.currentValue + 1 // Увеличиваем счетчик на 1
                    };
                }

                return item;
            }))
        };

        // Запускаем обновление значений каждую секунду
        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ul className={styles['result-list']}>
            {numbers.map(item => (
                <li
                    key={item.id}
                    className={styles['result-list__item']}
                >
                    <h3
                        className={styles['result-list__item-title']}
                        dangerouslySetInnerHTML={{ __html: item.title || '' }}
                    />

                    <CountUp
                        end={item.targetValue}
                        separator=" "
                        className={styles['result-list__item-count']}
                    />
                </li>
            ))}
        </ul>
    );
};
