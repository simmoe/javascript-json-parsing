# json parsing excercise 

## Introduction 
Parsin JSON eloquently with javascript is a skill that only get s more crucial, as the use and importance of *data* increases. These introductory excercises gets you off to a good start 

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

### The *filter* function
The javascript Array.filter() function also iterates every element of an array, but returns a new array with every element that satisfies a condition, like

````javascript
a = [1, 2, 3, 4]
const filtered = a.filter( element => element > 2 )        
console.log(filtered)                           //1, 2, 3, 4
````

## Tasks

1. log the description field from birdData
2. use the javascript map() function to log all bird family names
3. use map() to log all birdnames from the family 'Diving Petrels'
4. use two nested map() functions to log ALL birdmembers
5. use two nested map() functions to log all families followed by its members
6. use the javascript filter() function to log all bird families which name includes a 'g' 
7. use the javascript spread() function to create a new array with ALL birdnames
8. use the javascript filter() to log all birds that includes the word 'Antarctic' 
