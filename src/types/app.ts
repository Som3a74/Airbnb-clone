export interface ExploreTypeItem {
    img: string,
    location: string,
    distance: string,
}
export type ExploreTypeArray = ExploreTypeItem[];


export interface LiveWhereTypeItem {
    img: string,
    title: string,
}
export type LiveWhereTypeArray = LiveWhereTypeItem[];






export interface CardItemType {
    img: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string,
    total: string,
    long: number,
    lat: number,
}
export type CardListType = CardItemType[];
