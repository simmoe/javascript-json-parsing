import {birdData} from './birds.js'

console.log( birdData.description )

birdData.birds.map( object => console.log(object.family) )

birdData.birds[2].members.map(
    bird => console.log(bird)
)

birdData.birds.map( 
    fullFam => {
        console.log(fullFam.family)
        fullFam.members.map(
            birdName => console.log(birdName)
        )
    }
)

