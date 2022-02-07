const GET_USER = "/user/GET_USER";
const GET_API = "/user/GET_API";

const getUser = (user) => ({
  type: GET_USER,
  payload: user,
});

const getAPI = (id) => ({
  type: GET_API,
  payload: id,
});

export const getOneUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/user/${userId}`);
  const data = await res.json();
  if (res.ok) {
    dispatch(getUser(data));
  }
};

export const getAPIKey = () => async (dispatch) => {
  const res = await fetch("/api/google");
  const data = await res.json();
  console.log(data)
  if (res.ok) {
    dispatch(getAPI(data));
  }
};

const initialState = { user: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload.user };
    case GET_API:
      return { ...state, key: action.payload.key };
    default:
      return state;
  }
}
