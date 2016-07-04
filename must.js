const log = (args) => {
  if(typeof args === 'string'){
    console.log('', args);
    return true;
  }
  try {
    var props = Object.getOwnPropertyNames(args);
    for (var i = 0; i < props.length; i++) {
      console.log(Object.keys(args)[i] + ': ', props[i]);
    }
  } catch (e) {
    console.log('', args);
  }
}
