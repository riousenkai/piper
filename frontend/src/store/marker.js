const GET_MARKER = "/marker/GET_MARKER";

const retrieveMarkers = (markers) => ({
  type: GET_MARKER,
  payload: markers,
});

export const getMarkers = () => async (dispatch) => {
  const res = await fetch(`/api/markers`);
  const data = await res.json();
  if (res.ok) {
    dispatch(retrieveMarkers(data));
  }
  return;
};

export const postMarker = (obj) => async (dispatch) => {
  const res = await fetch("/api/markers/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();

  if (res.ok) {
    dispatch(retrieveMarkers(data));
  }
  return;
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MARKER:
      return { ...state, markers: action.payload };
    default:
      return state;
  }
}
