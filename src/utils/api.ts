export const getExplore = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
        const exploreData = await res.json();
        return exploreData;
    } catch (error) {
        console.log(error);
    }
};


export const getLiveWhere = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
        const LiveWhereData = await res.json();
        return LiveWhereData;
    } catch (error) {
        console.log(error);
    }
};


export const getCardSearch = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS` , {
            cache:'force-cache'
        });
        const CardSearchData = await res.json();
        return CardSearchData;
    } catch (error) {
        console.log(error);
    }
};