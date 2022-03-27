const catalogo = require('./catalogo');
catalogo.adicionarFilmes(
    2,
    "O Retorno Do Jeji - Star Wars",
    2.11,
    JSON.stringify(["marck Hammil", "Carrier Fisher", "Harrison Ford"]),
    1983,
    false
);
catalogo.adicionarFilmes(
    3,
    "É o fim",
    1.3,
    ["Jhonan Hill", 
    "Selena Gomez"], 
    2017, 
    false
);

catalogo.buscarFilmes(0);

catalogo.alterarStatusEmCartaz(0);




