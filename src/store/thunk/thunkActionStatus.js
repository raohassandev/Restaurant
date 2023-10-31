const mapTypeOf = (thunkActionName) => ({
  [`${thunkActionName.toUpperCase()}_FULFILLED`]: `${thunkActionName}/fulfilled`,
  [`${thunkActionName.toUpperCase()}_PENDING`]: `${thunkActionName}/pending`,
  [`${thunkActionName.toUpperCase()}_REJECTED`]: `${thunkActionName}/rejected`,
});

export const ACTION_STATUS = {
  ...mapTypeOf("login"),
  ...mapTypeOf("register"),
};
