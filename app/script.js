console.log('OUAAAAH')

//La classe 🥸

class Personnage {
    // Déclaration de propriétés publiques
    age;
    flow;
    renommée;
    impro;

    // Constructeur
    constructor(jsonPersonnage) {
        this.age = jsonPersonnage.age
    }

    // Déclaration de méthodes publiques
    sing() {
        console.log('je chante bien')
    }

    punchline() {
        console.log('je suis un punchliner')
    }
}

class Chanteur extends Personnage {

    constructor(jsonChanteur) {

        // super() est le constructeur de la classe parente (Personnage)
        // Il est obligatoire d'appeler super() dans le constructeur d'une classe enfant en JS

        super(jsonChanteur)
        this.flow = jsonChanteur.flow
        this.renommée = jsonChanteur.renommée * 1.5
        this.impro = jsonChanteur.impro
    }


    punchline() {
        console.log("ouais ouais ouais")
    }

    sing() {
        console.log('je chante très bien')
    }
}

class Rappeur extends Chanteur {

    rime() {
        console.log('je manie le maniement')
    }
}

class Bushi extends Rappeur {

    rime() {
        console.log('je suis un rimeur')
    }
}

let dali = new Chanteur({ age: 21, flow: 9, renommée: 4 });

console.log(dali)
dali.sing();
dali.punchline();

let bushi = new Rappeur({ age: 24, flow: 8, renommée: 5, impro: 7 });

console.log(bushi)
bushi.rime();
