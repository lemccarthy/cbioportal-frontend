import * as request from "superagent";

export interface IAnalyticsResponse {
    totalUses: number;
    totalUniqueUses: number;
    timesVisited: number;
    timesUniqueVisited: number;
}

export interface IQueryResponse extends request.Response {
    body: IAnalyticsResponse;
}

export default async function queryStudyAnalytics(
    studyIds: string[],
    apiURL: string
): Promise<IAnalyticsResponse> {
    try {
        const res: IQueryResponse = await request.get(`${apiURL}?studyName=${studyIds[0]}`);
        return res.body;
    } catch (error) {
        throw new Error("400");
    }
}
