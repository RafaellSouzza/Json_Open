var salvar = (arquivo, objeto) => {
    //Passando Objeto para Arquivo json JSON.stringify(objeto)//
    const objetoJson = JSON.stringify(objeto);
    //Metodo para abertura de arquivo require("fs")//
    const fs = require("fs");
    // Salvando arquivo de forma sincrona //
    fs.writeFileSync(arquivo, objetoJson);
    console.log("JSON data is saved.");
  };