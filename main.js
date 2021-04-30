let vieille_dame ={
    age : 175 +"ans",
    nom : {
        prenom: "jeanne",
        nom_de_famille: "Dark",
    },
    moral: "mal",
    objet: "canne",
    parle (){
        if(this.moral == "mal"){
            alert("Vous me dérangez et le frappe avec sa " + this.objet)
        }
        else if (this.moral == "bien"){
            alert(`bonjour ` + vieil_homme.nom)
        }
    }
}

let  vieil_homme ={
    nom: "Dark soul",
    adoucir (){
        vieille_dame.moral = "bien";
    }

}
// vieil_homme.adoucir();
vieille_dame.parle();