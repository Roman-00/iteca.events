import type { SocialItemType } from '@/typings/social';

/**
 * Храним данные по контактам в константах
 */
export const contact = {
    EMAIL:      'contact@iteca.events',
    EMAIL_LINK: 'mailto:contact@iteca.events',
    PHONE:      '+7 727 258-34-34',
    PHONE_LINK: 'tel:77272583434',
};

/**
 * Храним данные о социальных сетях для сайта
 */
export const socialList: SocialItemType[] = [
    {
        id:   'facebook',
        icon: 'BiLogoFacebook',
        link: 'https://www.facebook.com/itecaevents'
    },
    {
        id:   'youtube',
        icon: 'BiLogoYoutube',
        link: 'https://www.youtube.com/user/ITECAAlmaty'
    },
    {
        id:   'linkedin',
        icon: 'BiLogoLinkedin',
        link: 'https://www.linkedin.com/company/iteca'
    },
    {
        id:   'instagram',
        icon: 'BiLogoInstagram',
        link: 'https://www.instagram.com/iteca.events/'
    }
];
