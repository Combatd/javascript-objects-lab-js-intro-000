var recipes = {}; // empty Object

function updateObjectWithKeyAndValue   (object, key, value) { 
  var valuePair;
  valuePair = {key : value};
  Object.assign({}, object, valuePair);
}