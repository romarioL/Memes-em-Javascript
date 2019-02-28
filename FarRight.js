const readline = require('readline-sync')

function start() {

	// varíáveis
	const facts = {}
	const  natural = {}

	// Attributes
    facts.hasFacts = askForFacts()
    natural.isNatural = isNatural()

    // funções 
    function askForFacts() {
    	return readline.question('Você  tem provas?(Digite true ou false)')
    }

    function isNatural() {
    	return readline.question(' Ser gay é natural e há muitas  espécies  animais que tem membros gays? (Digite true ou false)')
    }

   if(facts.hasFacts) {
   	console.log(" Isso é financiado por George Soros!")
   }

   if(natural.isNatural) {
   	console.log('Mas os seres humanos são seres sociáveis, não podemos nos basear na natureza!')
   }else{
   	console.log('Então ser gay não é correto!')
   }



}

start()