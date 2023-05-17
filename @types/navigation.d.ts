type NavigationSubItemType = {
    id: string,
    label: string,
    link: string
}

type NavigationItemType = {
    id: string,
    label: string,
    link?: string
    submenu?: NavigationSubItemType[]
};
