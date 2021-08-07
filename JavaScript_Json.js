var salvar = (arquivo, objeto) => {
  //Passando Objeto para Arquivo json JSON.stringify(objeto)//
  const objetoJson = JSON.stringify(objeto);
  //Metodo para abertura de arquivo require("fs")//
  const fs = require("fs");
  // Salvando arquivo de forma sincrona //
  fs.writeFileSync(arquivo, objetoJson);
  console.log("JSON data is saved.");
};

var ler = (arquivo) => {
  //Metodo para abertura de arquivo require("fs")//
  const fs = require("fs");
  //verifica se arquivo existe//
  if (!fs.existsSync(arquivo)) return "Arquivo não existe.";
  // lendo arquivo de forma sincrona //
  const data = fs.readFileSync(arquivo, "utf-8");
  // passando arquivo json pata objeto//
  const objeto = JSON.parse(data.toString());
  return objeto;
};

console.log(ler("user.json"));

const user = {
  id: 2,
  name: "Rafael",
  age: 24,
};

salvar("user.json", user);
