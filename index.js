var recipes = {}; // empty Object

function updateObjectWithKeyAndValue   (object, key, value) { 
  var valuePair;
  valuePair = {key : value};
  return Object.assign({}, object, valuePair);
}