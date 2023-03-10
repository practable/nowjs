export const deleteBearer = (state) => {
  state.bearer = "";
};
export const deleteToken = (state) => {
  state.token = "";
};

export const login = (state) => {
  state.bearer =
    "eykljdflkajsdfjlas.lkasjdfklasjdlkfjalskdf.ksdflkjaskldjflkasdjf";
};

export const setToken = (state, token) => {
  state.token = token;
};

export const setBookingToken = (state, token) => {
  state.bookingToken = token;
  state.bookingTokenValid = true;
  state.bookingTokenStatus = "valid";
  state.bookingTokenExpiresAt = 0;
};

export const setBookingTokenExpiresAt = (state, exp) => {
  state.bookingTokenExpiresAt = exp;
};

export const clearBookingToken = (state, reason) => {
  state.bookingToken = "";
  state.bookingTokenValid = false;
  state.bookingTokenStatus = "empty";
  state.loginResult = reason;
};

export const setStoreDetails = (state, details) => {
  state.storeStatusDetails = details;
};

export const setStoreStatus = (state, status) => {
  state.storeStatus = status;
};
