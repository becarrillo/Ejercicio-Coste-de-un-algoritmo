const n = 7;
let s;
// Algorithm 1
s = 0;
for (let i=0; i < n; ++i) {
    ++s;
}
console.log("El coste del primer algoritmo fue " + s);

// Algoritm 2
s = 0;      // Overwrite s variable to have 0 value again
for (let i=0; i < n; i+=2) {
    ++s;
}
console.log("El coste del segundo algoritmo fue " + s);