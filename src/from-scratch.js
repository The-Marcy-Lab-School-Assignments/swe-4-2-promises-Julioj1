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
  return promise
    .then((message) => {
    console.log(message);
    return message.toUpperCase();
  })
    .catch((error) => {
      console.error(`Your error message was: ${error.message}`);
      return null;
    })
};

const pauseForMs = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(undefined);
    }, ms)
  })
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
