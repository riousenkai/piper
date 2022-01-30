const GET_USER = "/user/GET_USER";

const getUser = (user) => ({
  type: GET_USER,
  payload: user,
});

export const getOneUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/user/${userId}`);
  const data = await res.json();
  if (res.ok) {
    dispatch(getUser(data));
  }
};

const initialState = { user: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
}
