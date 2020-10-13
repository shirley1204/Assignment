

export const AUTH_ACTIION_TYPES = {
  
  ON_LOGIN_SUCCESS: "AUTH/ON_LOGIN_SUCCESS",
  ON_LOGIN_FAILURE: "AUTH/ON_LOGIN_FAILURE",

};

export const onLoginSuccess = (user) => {
  return {
    type: AUTH_ACTIION_TYPES.ON_LOGIN_SUCCESS,
    payload: user,
  };
};



export const onLogin = (userData) => {
    return (dispatch) => {
    console.log(userData)
    
    dispatch(onLoginSuccess(userData));
 
    }
}

 