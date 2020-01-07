//Excercise solutions 

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
        mem => allBirdMembers = [...allBirdMembers, mem]))

console.log(allBirdMembers)

//8
const antarctics = allBirdMembers.filter(
    mem => mem.includes('Antarctic')
)

console.log(antarctics)
