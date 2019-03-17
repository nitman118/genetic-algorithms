import random
from phrase import Phrase, target
from helpers import summarize

popSize=int(input("Set population size:"))
bestScore=0
generation=1

population=[]

for i in range(popSize):
    population.append(Phrase())

while bestScore < len(target):
    for i in range(popSize):
        population[i].setFitness()
        if population[i].fitness>bestScore:
            bestScore=population[i].fitness
            summarize(generation,population[i].getContents(),bestScore)

    matingPool=[]

    parents=population[:]
    population=[]

    for i in range(popSize):
        for j in range(parents[i].fitness):
            matingPool.append(parents[i])
        
    for i in range(popSize):
        x=random.choice(range(len(matingPool)))
        y=random.choice(range(len(matingPool)))
        child = matingPool[x].crossover(matingPool[y])
        child.mutate()
        population.append(child)

    generation+=1



