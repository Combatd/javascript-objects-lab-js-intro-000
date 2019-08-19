var recipes = {}; // empty Object

function updateObjectWithKeyAndValue   (object, key, value) { 
  var valuePair;
  valuePair = {key : value};
  var newObj =Object.assign({}, object, valuePair);
}