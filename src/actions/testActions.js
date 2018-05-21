export const startTest = () => {
  return (dispatch, getState) => {
    dispatch(startCountdown())
  }
};
