import {birdData} from './birds.js'


/*  
Oppgaver

1. skriv ut description feltet fra birdData
2. skriv ut alle fuglefamilier
3. skriv ut alle medlemmer av fuglefamilien 'Diving Petrels'
4. skriv ut ALLE fuglemedlemmer 
5. skriv ut alle fuglefamilier etterfulgt av familens medlemmer
6. skriv ut alle fuglefamilier som har ett 'g' i familienavnet sitt
7. bruk javascript spread() funksjonen til å opprette et nytt array med alle fuglemedlemmer
8. bruk filter() funksjonen til å skrive ut alle fuglenavn som inneholder 'Antarctic' 
*/

/*  
Tips

Array.map() funksjonen løper igjennom alle elementer i et array, fx

a = [1, 2, 3, 4]
a.map( element => console.log(element) )        //1, 2, 3, 4

Samtidig returnerer den også et nyt array, så den kan brukes til å opprette noe nytt, fx

const newA = a.map( element => element + 1)
newA.map( element => console.log(element) )       //2, 3, 4, 5

*/

const a = [1, 2, 3, 4]
const newA = a.map( element => element + 1)
newA.map( e => console.log(e) ) 





















//Oppgave løsninger

//1
console.log(birdData.description)

//2
birdData.birds.map(
    fam => console.log(fam.family)
)
    
//3
birdData.birds[2].members.map(
    petrel => console.log(petrel)
)

//4
birdData.birds.map(
    fam => fam.members.map(
        mem => console.log(mem)
    )
)

//5
birdData.birds.map(
    fam => {
        console.log(fam.family);
        fam.members.map(
            mem => console.log(mem)
        )
})


//6
const gFamilies = birdData.birds.filter(
    fam => fam.family.includes('g') 
)

gFamilies.map(
    fam => console.log(fam.family)
)

//7
let allBirdMembers = []
birdData.birds.map( 
    fam => fam.members.map( 
        mem => allBirdMembers = [...allBirdMembers, mem ] ) )

console.log(allBirdMembers)

//8
const antarctics = allBirdMembers.filter(
    mem => mem.includes('Antarctic')
)

console.log(antarctics)

