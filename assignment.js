const ages = [23,45,66,23,5,7,87,232,2];
const areas = [
[34,234],[232,2423],[2342,453], [232,534]
];

// transverse concatenate ages array
let ageResult = 0;
for(const age of ages){
    ageResult += age
}

console.log({ageResult});

// transverse and concatenate areas multidimensional array 
let areasResult = 0;
for(const area of areas){
    let innerAreaResult = 0;
    for(size of area){
        innerAreaResult += size
    }

    areasResult += innerAreaResult
}

console.log({areasResult});
