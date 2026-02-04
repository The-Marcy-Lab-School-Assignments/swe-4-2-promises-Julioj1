const resolvedWrapper = (value) => {
  return new Promise((resolve, reject) => {
    resolve(value);
  })
};

const rejectedWrapper = (errorMessage) => {
  return Promise.reject(new Error (errorMessage));
};

const handleResolvedPromise = (promise) => {
  return promise.then((message) => {
    console.log(message);
    return message.toUpperCase();
  })
};

const handleResolvedOrRejectedPromise = (promise) => {
};

const pauseForMs = (ms) => {
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
