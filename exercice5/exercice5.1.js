const readline = require('readline-sync');

let TvSerie = {} ;

const askTvSerie = () => {
    let names       =  readline.question('Entrer le  nom');
    let production  = readline.question('Date de production production');
    let CastMember  = readline.question('Nom du cast members');
  
    TvSerie.names      = names;
    TvSerie.production = production ;
    TvSerie.CastMember = CastMember;


    let jsonParse =  JSON.stringify(TvSerie, null, 6);
    return jsonParse;
}  
console.log(askTvSerie());