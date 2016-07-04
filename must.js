const log = (args) => {
  try {
    var props = Object.getOwnPropertyNames(args);
    for (var i = 0; i < props.length; i++) {
      console.log(Object.keys(args)[i] + ': ', props[i]);
    }
  } catch (e) {
    console.log('', args);
  }
}

const response = (status = 'OK', statusCode = 200, statusMessage = 'Success') => ({
    statusCode: statusCode,
    status: status,
    statusMessage: statusMessage
})
