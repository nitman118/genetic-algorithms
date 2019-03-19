"use strict";

    // const imports = require('./phrase.js');
// const Phrase = imports.phrase;
// const target = imports.target;
const phrase = new Phrase();

const bestSol_Div=document.querySelector('#best-solution');
const allSol_Div=document.querySelector('#all-solutions');

const div_sol = document.createElement('div');
const div_all_sol = document.createElement('div');

bestSol_Div.appendChild(div_sol);
/**
 * sets a timeout to display string in the best solution
 * @param {string} someText 
 */
function changeBestSol(someText){
    setTimeout(()=>{
        div_sol.innerHTML=someText;
    },1000)
    div_sol.innerHTML = someText;
}

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
            changeBestSol(`Generation ${generation},${population[i].getContents()}`);
            // div_sol.innerText=`Generation ${generation},${population[i].getContents()}`;
            console.log(`Generation ${generation},${population[i].getContents()}`);
        }
        div_all_sol.innerHTML=`${population[i].getContents()}`
        allSol_Div.appendChild(div_all_sol);
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



