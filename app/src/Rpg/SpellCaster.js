class SpellCaster extends Character {
    mana;

    constructor(jsonSpellCaster) {
        super(jsonSpellCaster);
        this.mana = jsonSpellCaster.mana * 100;
    }

    cast() {
        console.log('Je lance un sort de zinzin');
    }

}