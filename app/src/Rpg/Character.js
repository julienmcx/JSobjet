// La classe 🥸

class Character {
    // Déclaration de propriétés statiques
    static counter = 0

    // Déclaration de propriétés publiques
    nickname;
    hp;
    armor;
    luck;


    static getCounter() {

        // Dans un contexte statique, "this" équivault au "self" de PHP
        // Dans le contexte statique, "this" représente la classe
        // return this.counter;
        // On peut aussi utiliser ce type d'appel qui est identique a celui du contexte non-statique
        // Pour des raisons de lisibilité, on va priviléger cette forme
        return Character.counter;
    }

    // Constructeur
    constructor(jsonCharacter) {
        Character.counter++;
        let jsonProps = Object.getOwnPropertyNames(jsonCharacter);
        let validProps = jsonProps.filter(p => this.hasOwnProperty(p));

        for (let prop of validProps) {
            this[prop] = jsonCharacter[prop];
        }
    }
    // Déclaration de méthodes publiques
    walk() {
        console.log('Je marche')
    }
}