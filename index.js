var recipes = {}; // empty Object

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = new Object(object);
  newObj[key] = value;
  return newObj;
}