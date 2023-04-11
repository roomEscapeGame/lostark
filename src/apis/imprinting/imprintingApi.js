import { instance } from "../instance";

export const getAuctions = async () => {
    const response = await instance.get("auctions/options");
    return response.data;
}