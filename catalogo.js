// Variavel Global dentro do código 
var filmes = [          
 {
    id : 0,
    title : "Bee Movie - A História de uma Abelha",
    duracao : 1.31,
    actors :JSON.stringify( ["Chris Rock", "Jhon Goodman"]),
    anoDeLancamento : 2007,
    emCartaz : false
}
];

filmes.push(
    {
        id : 1,
        title : "Spider Man - No Way Home",
        duracao : 2.28,
        actors :JSON.stringify(["Tom Holland", "Tobey Maguire", "Adndrew Garfield"]),
        anoDeLancamento: 2021,
        emCartaz  : true
    }
)
/*
A função deve receber os parâmetros com as informações necessárias para criar um objeto do tipo filme ;
 */
function adicionarFilmes(
    id,
    title,
    duracao,
    actors,
    anoDeLancamento,
    emCartaz

){
        filmes.push(
            {
                id,
                title,
                duracao,
                actors,
                anoDeLancamento,
                emCartaz
            }
        )
}
/* 
A função deve receber como parâmetro um número identificador do filme e buscar no array de catalogo e ao fim retornar o objeto encontrado;
*/

function buscarFilmes(identificador){
let achou = null
    for(let i = 0; i<filmes.length; i++ ){
        if(filmes[i].id === identificador){
            achou = filmes[i];
            break;
        }
    }
    console.log(achou);
}


function alterarStatusEmCartaz (identificador){
    let filme = buscarFilmes(identificador)
    return console.log(filme === true? false:true);
    
        
    };

module.exports = {
    filmes,
    adicionarFilmes,
    buscarFilmes,
    alterarStatusEmCartaz
    
};

