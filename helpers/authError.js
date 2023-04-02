const createValidationError = (err) => {
  err.message = `Validation error: ${err.message}`;
  err.status = 400;
  return err;
};

const createConflictError = () => {
  const err = new Error();
  err.message = "Email in use";
  err.status = 409;
  return err;
};
const createAuthError = (message) => {
  const err = new Error();
  err.message = message || "Not authorized";
  err.status = 401;
  return err;
};

const createCustomError = (status, message) => {
  const err = new Error();
  err.message = message || "Server error: Something went wrong...";
  err.status = status || 500;
  return err;
};

module.exports = {
  createValidationError,
  createConflictError,
  createAuthError,
  createCustomError,
};
