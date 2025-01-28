class Thief extends Character {

    constructor(jsonThief) {
        // super() est le constructeur du parent (Character)
        // En JS il est obligatoire de l'appeler en premier dans le constructeur enfant
        super(jsonThief);

        /*
         Opérateur ternaire
         variableAAssigner = testCondition ? valeurSiVrai : valeurSiFaux;
         */
        this.luck = this.luck ? this.luck * 1.5 : 100;
    }
    picklock() {
        console.log('Crochetage en cours ...');
    }

    walk() {
        super.walk();
        console.log('Je marche d\'une manière sympa');
    }

    // Méthode magique qui indique ce que renvoie l'objet lorsque tente de le convertir en string
    toString() {
        return this.nickname;
    }


    // Méthode magique qui indique ce que renvoie l'objet lorsque tente de le convertir en nombre
    valueOf() {
        return this.hp;
    }
}