import HashMap from "./hashMap.js";

const map = new HashMap();

map.set("test", "Hello World");
console.log(map.get("test")); // Hello World

console.log();

console.log(map.has("test")); // true
console.log(map.has("test2")); // false

console.log();

console.log(map.remove("test")); // true
console.log(map.remove("test2")); // false

map.clear();

console.log();

map.set("q", 1);
map.set("w", 2);
map.set("e", 3);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

console.log();

console.log(map.toString());
