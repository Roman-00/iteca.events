/**
 * Храним id индустрий выставок
 */
export const INDUSTRY_ID = {
    build:      'build',
    power:      'power',
    healthcare: 'healthcare',
    mining:     'mining',
    travel:     'travel',
    food:       'food',
    secures:    'secures',
    oilgas:     'oilgas',
    transit:    'transit'
};

/**
 * Храним название идустрий выставок по id и по языку
 */
export const INDUSTRY_NAME_RU = {
    [INDUSTRY_ID.build]:      'Строительство и инженерное оборудование',
    [INDUSTRY_ID.power]:      'Энергетическое и электрическое оборудование',
    [INDUSTRY_ID.healthcare]: 'Здравоохранение и фармацевтическая промышленность',
    [INDUSTRY_ID.mining]:     'Горнодобывающая промышленность',
    [INDUSTRY_ID.travel]:     'Туризм и путешествия',
    [INDUSTRY_ID.food]:       'Пищевая индустрия и гостеприимство',
    [INDUSTRY_ID.secures]:    'Охрана и безопасность',
    [INDUSTRY_ID.oilgas]:     'Нефть и газ',
    [INDUSTRY_ID.transit]:    'Транспорт и логистика',
};

/**
 * Храним название идустрий выставок по id и по языку
 */
export const INDUSTRY_NAME_EN = {
    [INDUSTRY_ID.build]:      'Construction and Engineering Equipment',
    [INDUSTRY_ID.power]:      'Energy and Electrical Equipment',
    [INDUSTRY_ID.healthcare]: 'Healthcare & Pharmaceutical Industry',
    [INDUSTRY_ID.mining]:     'Mining Industry',
    [INDUSTRY_ID.travel]:     'Tourism and Travel',
    [INDUSTRY_ID.food]:       'Food Industry and Hospitality',
    [INDUSTRY_ID.secures]:    'Security and Safety',
    [INDUSTRY_ID.oilgas]:     'Oil and Gas',
    [INDUSTRY_ID.transit]:    'Transport and Logistic',
};
