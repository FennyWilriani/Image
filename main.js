const scientists= [
    {name: 'scientist isaac newton', category: 'mathematics', born: 1643, die: 1727},
    {name: 'scientist albert einstein', category: 'physics', born: 1879, die: 1955},
    {name: 'scientist marie curie', category: 'chemistry', born: 1867, die: 1934},
    {name: 'scientist charles darwin', category: 'biology', born: 1809, die: 1882},
    {name: 'scientist nicolaus copernicus ', category: 'astronomy', born: 1473, die: 1543},
    {name: 'scientist ada lovelace', category: 'technology', born: 1815, die: 1852},
    {name: 'scientist galileo galilei', category: 'astronomy', born: 1564, die: 1642},
    {name: 'scientist alfred nobel', category: 'chemistry', born: 1822, die: 1896},
    {name: 'scientist nikola tesla', category: 'technology', born: 1856, die: 1943},
    {name: 'scientist roger arliner young', category: 'biology', born: 1899, die: 1964},
];

const ages = [33, 23, 11, 8, 54, 61, 15, 21, 44, 45, 25, 64, 32, 34, 42];

//for(let i = 0; i < scientists.length; i++) {
//    console.log(scientists[i]);
//}

// for each

scientists.forEach(function(scientist) {
    console.log(scientist.name);
})

//filter
//map
//sort
//reduce