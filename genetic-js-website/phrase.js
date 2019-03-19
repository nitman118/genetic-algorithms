
"use strict";
const target = document.querySelector('#target').innerHTML;
console.log(target);
/**Phrase Class */
class Phrase{

    constructor(){
        this.characters=[];
        for (let i=0; i<target.length;i++){
            const key = Math.floor(Math.random() * (127 - 32) + 32);
            // console.log(key)
            const character = String.fromCharCode(key);
            // console.log('char:'+character);
            this.characters.push(character);
        }
    }

    /**
 * return contents for characters array in string format
 */
    getContents(){
        return this.characters.join('');
    }

    /**Set Fitness based on current strings charectersitics */
    setFitness(){
        this.fitness = 0;
        for (let i=0; i<this.characters.length;i++){
            if(this.characters[i]===target[i]){
                this.fitness+=1;
            }
        }
    }

    crossover(partner){
        const child = new Phrase();
        for (let i=0; i<this.characters.length;i++){
            if (Math.random()<0.5){
                child.characters[i]=this.characters[i];
            }
            else{
                child.characters[i]=partner.characters[i];
            }
        }

        return child;
    }

    mutate(){
        for (let i=0; i<this.characters.length;i++){
            if (Math.random()<0.01){
                this.characters[i]=String.fromCharCode(Math.floor(Math.random() * (127 - 32) + 32));
            }
        }
    }

}

//Exports
// module.exports = {
//     phrase:Phrase,
//     target:target,
// };