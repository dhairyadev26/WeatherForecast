import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "jest-fetch-mock";
import { fetchData } from "../../actions/weatherStation";
import * as actionTypes from "../../constants/ActionTypes";

// Mock fetch API
fetchMock.enableMocks();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Weather Station Async Actions", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should dispatch FETCH_DATA_REQUEST at the beginning", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "mock data" }));
    
    const store = mockStore({});
    const dispatchPromise = store.dispatch(fetchData("london"));
    
    // Check if FETCH_DATA_REQUEST was dispatched first
    expect(store.getActions()[0].type).toEqual(actionTypes.FETCH_DATA_REQUEST);
    
    await dispatchPromise;
  });

  it("should dispatch FETCH_DATA_FULFILLED on successful API call", async () => {
    const mockResponse = { city: { name: "London" }, list: [] };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));
    
    const store = mockStore({});
    await store.dispatch(fetchData("london"));
    
    const actions = store.getActions();
    
    // Should have two actions: request and fulfilled
    expect(actions.length).toBe(2);
    expect(actions[1].type).toEqual(actionTypes.FETCH_DATA_FULFILLED);
    expect(actions[1].payload).toEqual(mockResponse);
  });

  it("should reject the request if no city is being passed", async () => {
    const store = mockStore({});
    await store.dispatch(fetchData(null));
    
    const actions = store.getActions();
    
    // Should have two actions: request and rejected
    expect(actions.length).toBe(2);
    expect(actions[1].type).toEqual(actionTypes.FETCH_DATA_REJECTED);
    expect(actions[1].payload.message).toEqual("Please provide a valid city name");
  });

  it("should handle API errors properly", async () => {
    fetchMock.mockRejectOnce(new Error("Network error"));
    
    const store = mockStore({});
    await store.dispatch(fetchData("london"));
    
    const actions = store.getActions();
    
    expect(actions[1].type).toEqual(actionTypes.FETCH_DATA_REJECTED);
    expect(actions[1].payload.message).toContain("Network error");
  });

  it("should handle API response with error status", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ cod: "404", message: "City not found" }), { 
      status: 404 
    });
    
    const store = mockStore({});
    await store.dispatch(fetchData("nonexistentcity"));
    
    const actions = store.getActions();
    
    expect(actions[1].type).toEqual(actionTypes.FETCH_DATA_REJECTED);
    expect(actions[1].payload.message).toContain("City not found");
  });

  it("should handle API timeout", async () => {
    // Mock a timeout by not responding
    fetchMock.mockResponse(() => new Promise((resolve) => {
      setTimeout(() => resolve({ body: JSON.stringify({ data: "too late" }) }), 10000);
    }));
    
    // Set timeout option in fetchData to be very short for testing
    const originalTimeout = global.setTimeout;
    jest.useFakeTimers();
    
    const store = mockStore({});
    const promise = store.dispatch(fetchData("london", { timeout: 100 }));
    
    // Fast-forward time
    jest.advanceTimersByTime(200);
    
    await promise;
    const actions = store.getActions();
    
    expect(actions[1].type).toEqual(actionTypes.FETCH_DATA_REJECTED);
    expect(actions[1].payload.message).toContain("timeout");
    
    // Cleanup
    jest.useRealTimers();
  });
});