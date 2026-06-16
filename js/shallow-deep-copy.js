let original = {
  name: "sumanth",
  address: {
    city: "macherla"
  }
};
let shallowCopy = { ...original };
let deepCopy = JSON.parse(JSON.stringify(original));

console.log(shallowCopy);
console.log(deepCopy);