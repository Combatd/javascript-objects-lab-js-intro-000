var recipes = {}; // empty Object

Function updateObjectWithKeyAndValue(object, key, value) {
  var valuePair;
  valuePair = {key : value};
  return Object.assign({}, object, valuePair);
}