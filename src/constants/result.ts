import type { ResultItemType } from '@/typings/result';

/**
 * Храним данные о результатах выставки
 */
export const result: ResultItemType[] = [
    {
        id:           'exhibitions',
        title:        'exhibitions',
        currentValue: 0,
        targetValue:  26,
    },
    {
        id:           'square',
        title:        'square',
        currentValue: 0,
        targetValue:  46658,
    },
    {
        id:           'exhibitors',
        title:        'exhibitors',
        currentValue: 0,
        targetValue:  2355,
    },
    {
        id:           'visitors',
        title:        'visitors',
        currentValue: 0,
        targetValue:  47367,
    }
];
