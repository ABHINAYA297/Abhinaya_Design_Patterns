import Factory from "./factory";

const factory = new Factory();
const ABC = factory.getInstance("shopper", "ABC Banks", 100);
console.log("ABC", ABC);
const XYZ = factory.getInstance("employee", "XYZ caper", 100);
console.log("XYZ", XYZ);


const x2 = factory.getInstance("employee", "Different person", 100);
console.log("Another XYZ", x2);