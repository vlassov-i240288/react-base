import { getGistsRequest, getGistsSuccess } from "../actions";
import { GET_GISTS_REQUEST, GET_GISTS_SUCCESS } from "../actions";


describe("getGistsRequest", () => {
    it("return an object with specified type", () => {
        const result = getGistsRequest();

        expect(result).toEqual({ type: GET_GISTS_REQUEST });
    });
});

describe("getGistsSuccess", () => {
    it("returns an obj with payload from argument and specified type", () => {
        const result = getGistsSuccess([]);

        expect(result).toEqual({ type: GET_GISTS_SUCCESS, payload: [] });
    });
});