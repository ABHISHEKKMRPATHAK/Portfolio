let brands = ['levis','lee','us-polo','zara','gucci']

//brands.push('prada') 
//for(items of brands){console.log(items)}

//brands.pop()
//for(items of brands){console.log(items)}

//for(items of brands){console.log(items)}

/*
brands.shift();                                            // remove first element of the array:
console.log("after shifting :");
for(items of brands){console.log(items)}
*/

/* brands.unshift('asd')                                   //adds new elements to the beginning of an array.
console.log("after unshifting :");
for(items of brands){console.log(items)}      */

//console.log(brands.includes('lee'));
//console.log(brands.indexOf('gucci'));


//const newArr = brands.join()
//console.log(newArr);


/*
const newArr = brands.slice(1,3)         // doesn't affect the original array
console.log(newArr);

const newArray = brands.splice(3,4)     //splice changes the original array by removing, replacing, or adding values and returns the affected values.
console.log(newArray);

*/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log((marvel_heros));
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

//const allHeroes = [...marvel_heros,...brands,...dc_heros];    --> SPREAD Operator
//console.log(allHeroes[1]);

//const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//console.log(another_array.flat(Infinity));

//console.log(Array.isArray("RAMESH"))
//console.log(Array.from("RAMESH"))

//console.log(Array.from({name :"RAMESH"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
