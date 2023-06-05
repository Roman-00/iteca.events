export type MenuItemLinksType = {
    id: string,
    label: string,
    link: string,
};

export type MenuItemType = {
    id: string,
    label: string,
    link: string,
    links?: MenuItemLinksType[]
};
