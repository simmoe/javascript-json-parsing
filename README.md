# json parsing excercise 

## Introduction 
Parsing JSON eloquently with javascript is a skill that only gets more crucial, as the use and importance of *online data* increases. These introductory excercises gets you off to a good start.

### A word on JSON and arrays 
JSON - the Javascript Object Notation - is a super widely spread standard that is used to describe and exchange data about almost everything. The more you think about it, the more potent this fact is. Anything from school classrooms, to individuals whereabouts, to oceanographic curves and tendencies, to outerspace observations, to you name it, are mapped, exchanged and manipulated in JSON notation. 

Getting philosophical about that is not the immediate purpose of this excercise however. We will move directly into practising the most relevant functions at hand, to parse and filter JSON objects.

JSON objects are most often stored in arrays. Thus the following walkthrough begins with iterating arrays, and then move on to iterating arrays storing JSON objects.   

### The *map* function
The javascript Array.map() function iterates every element of an array, as in

````javascript
a = [1, 2, 3, 4]
a.map( element => console.log(element) )        //1, 2, 3, 4
````
But the function also returns a *new* array, you can use to create something, like

````javascript
const newA = a.map( element => element + 1)
newA.map( element => console.log(element) )     //2, 3, 4, 5
````

So if you have a more complex structure, like an array of JSON objects, you can easily iterate and modify them, using map, like

````javascript
const objArray = [
    {title:'Steppenwolf', author:'Hermann Hesse', pub:1927},
    {title:'To the Lighthouse', author:'Virginia Wolf', pub:1927},
    {title:'The Magic Mountain', author:'Thomas Mann', pub:1924}
    ]

objArray.map(
    book => console.log( book.title )     
)
//Steppenwolf, To the Lighthouse, The Magic Mountain
````

### The *forEach* function
The Array.forEach() function iterates every element in the excact same way as map(), but without returning a new array. Thus forEach may be preferable, if you only need to iterate, not manipulate, like

````javascript
a.forEach( element => console.log(element) )        //1, 2, 3, 4
````
If you value not having to many things in your head, use the map() function

### The *filter* function
The javascript Array.filter() function also iterates every element of an array, but returns a new array with every element that satisfies a condition, like

````javascript
a = [1, 2, 3, 4]
const filtered = a.filter( element => element > 2 )        
console.log(filtered)                           //1, 2, 3, 4
````
So if we use the above object array as an example, we can use filter like
````javascript
const filtered = objArray.filter( book => book.published === 1927 )     
````
Filtered now contains the two books that satisfies the condition, and we can use map() to iterate the result, as  
````javascript
filtered.map = objArray.filter( book => book.published === 1927 )     
````

### The *find()* function 
Array.find() behaves excactly like filter(), but *only returns the first occurence of an element that satisfies the condition, otherwise undefined*. Thus we can use the function to get the first occurence of some element, or simply to check if such en element exists at all, like

````javascript
objArray.find( book => book.pub === 1927)
//returns first occurence: {title: "Steppingwolf", author: "Hermann Hesse", pub: 1927}
objArray.find( book => book.pub === 1930)
//returns undefined
````

### The *spread* operator
The javascript spread operator can be used as a very easy and convenient way to concatenate two arrays. It works like this
````javascript
a1 = [1, 2, 3]
a2 = [4, 5, 6]
a3 = [...a1, ...a2]
console.log(a3)                     //[1, 2, 3, 4, 5, 6]
````
Often we need to create new arrays on the fly, in order to ease our parsing. Say we had a more complex JSON structure, with each object carrying a subset of some values:

````javascript
const objArray = [
    {title:'Steppenwolf', author:'Hermann Hesse', pub:1927, 
    characters:['harry haller', 'paplo', 'franz']},
    {title:'To the Lighthouse', author:'Virginia Wolf', pub:1927, 
    characters:['lily briscoe', 'james ramsay', 'charles tansley']},
    {title:'The Magic Mountain', author:'Thomas Mann', pub:1924, 
    characters:['hans castorp', 'james tienappel', 'munheer peperkorn']}
    ]
````
Admittedly this might be a bit of an odd scenario - but say we wanted to make a list of all character names throughout all books. In this case we could generate a new array, as

````javascript
let characterNames = []
objArray.map(
    book => book.characters.map(
        character => characterNames = [...characterNames, character]
    )
)
console.log(characterNames)
//["harry haller", "paplo", "franz", "lily briscoe", "james ramsay", "charles tansley", "hans castorp", "james tienappel", "munheer peperkorn"]
````

## The repository 
This repo consists of a basic html/javascript setup, but note that *everything is executed in the browser console*. Opening the projects index.html file will just give you a blank page. Head on and downlod the repo to your favorite code editor - the file you will be writing in, is the index.js file. The results of your efforts will be seen in the browser console.

## The JSON data 
The data we will be parsing are stored in a local js file and exported at the top of index.js. It has the following structure

````javascript
export const birdData = {
    "description": "Birds of Antarctica, grouped by family",
    "source": "https://en.wikipedia.org/wiki/List_of_birds_of_Antarctica",
    "birds": [
        {
            "family": "Albatrosses",
            "members": [
                "Wandering albatross",
                "Grey-headed albatross",
                "Black-browed albatross",
                "Sooty albatross",
                "Light-mantled albatross"
            ]
        },
        {
            "family": "Cormorants",
            "members": [
                "Antarctic shag",
                "Imperial shag",
                "Crozet shag"
            ]
        },
        ...
````
As you can see birdData is a JSON object including some preliminary properties, and thereafter an array of JSON objects describing Birds of antarctica (btw these data comes from the excellent <a href ="https://github.com/dariusk/corpora">corpora repo</a>).

Using the functions described above, you will be able to solve the following tasks. If you get *really* stuck, you can see solution suggestions in the solutions.js file. 

Happy hacking - go change the world

### Tasks

1. log the description field from birdData
2. use the javascript map() function to log all bird family names
3. use map() to log all birdnames from the family 'Diving Petrels'
4. use two nested map() functions to log ALL birdmembers
5. use two nested map() functions to log all families followed by its members
6. use the javascript filter() function to log all bird families which name includes a 'g' 
7. use the javascript spread() function to create a new array with ALL birdnames
8. use the javascript filter() to log all birds that includes the word 'Antarctic' 
