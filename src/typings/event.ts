export type EventItemType = {
    projectID: string,
    project: string,
    type: string,
    title: string,
    description: string,
    logo: string,
    logomini: string,
    logomax: string,
    beginDate: string,
    beginTime: string,
    endDate: string,
    endTime: string,
    address: string,
    location: string,
    latitude: string,
    longitude: string,
    programme: string,
    industry: string
};

export type EventResponseStatus = {
    message: string,
    messageId: number
};

export type EventResponseType = {
    responceStatus: EventResponseStatus,
    confList: EventItemType[]
};
