const readline = require('readline-sync')

function start() {

	// varíáveis
	const vivence = {}


	// Atributos
    vivence.hasVivence = askForVivence()
    

    // funções 
    function askForVivence() {
    	return readline.question('Você  tem vivência?(Digite true ou false)')
    }
    
    if(vivence.hasVivence) {
      console.log("Você 'é um capacho da elite branca, não pode opinar!")
    }else{
      console.log("Você não tem vivência, não pode opinar!")
    }
}

start()