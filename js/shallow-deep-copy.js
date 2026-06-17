let original = {
    name: "sumanth",
    address: {
        city: "macherla"
    }
};
let shallowCopy = { ...original };
let deepCopy = JSON.parse(JSON.stringify(original));

shallowCopy.address.city = "Mumbai";
deepCopy.address.city = "Chennai";

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopy);
