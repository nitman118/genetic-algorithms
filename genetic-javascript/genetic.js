"use strict";

const imports = require('./phrase.js');
const Phrase = imports.phrase;
const target = imports.target;
const phrase = new Phrase();
console.log(phrase.getContents());
console.log(target);

const popSize = 500;
let bestScore = 0;
let generation = 1;

let population = []

for (let i = 0; i < popSize; i++) {
    population.push(new Phrase());
}

while (bestScore < target.length) {
    for (let i = 0; i < popSize; i++) {
        population[i].setFitness();
        if (population[i].fitness > bestScore) {
            bestScore = population[i].fitness;
            console.log(`Generation ${generation},${population[i].getContents()}`);
        }
    }

    const matingPool = [];
    const parents = population.slice(0); //copy contents of array
    population = []

    //create mating pool and add parents based on their fitness
    for (let i = 0; i < popSize; i++) {
        for (let j = 0; j < parents[i].fitness; j++) {
            matingPool.push(parents[i]);
        }
    }

    for(let i=0;i<popSize;i++){
        const x=Math.floor(Math.random()*matingPool.length);
        const y=Math.floor(Math.random()*matingPool.length);

        let child = matingPool[x].crossover(matingPool[y]);
        child.mutate();
        population.push(child);
    }

    generation+=1;

}

