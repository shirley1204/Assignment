export const DROP_ACTIION_TYPES = {
  ON_SELECT_SUCCESS: "DROP/ON_SELECT_SUCCESS",
  ON_SELECT_FAILURE: "DROP/ON_SELECT_FAILURE",
};

export const onSelectSuccess = (data) => {
  return {
    type: DROP_ACTIION_TYPES.ON_SELECT_SUCCESS,
    payload: data,
  };
};

export const onSelect = (userData) => {
  return (dispatch) => {
    dispatch(onSelectSuccess(userData));
  };
};
