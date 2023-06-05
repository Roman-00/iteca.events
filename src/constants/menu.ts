import type { MenuItemType } from '@/typings/menu';

export const menu: MenuItemType[] = [
    {
        id:    'about',
        label: 'menu.about',
        link:  'about',
        links: [
            {
                id:    'about-company',
                label: 'menu.about-company',
                link:  'about-company'
            },
            {
                id:    'partners',
                label: 'menu.partners',
                link:  'partners'
            },
            {
                id:    'career',
                label: 'menu.career',
                link:  'career'
            }
        ]
    },
    {
        id:    'exhibition',
        label: 'menu.exhibition',
        link:  'exhibition',
    },
    {
        id:    'media-center',
        label: 'menu.media-center',
        link:  'media-center',
    },
    {
        id:    'contact',
        label: 'menu.contact',
        link:  'contact',
    }
];
