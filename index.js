var recipes = {}; // empty Object

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object); // assign a new object
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; // add new key value pair directly to object
  return object;
}