/*chamando o inquirer */
const { select, input } = require('@inquirer/prompts');

let meta ={
    value: "Tomar agua",
    checked: false,
}
let metas = [meta]

// cadastrando meta e verificando com length se há + de 1 caracter
const  cadastrarMeta = async () =>{
    const meta = await input({message: "Digite a meta:"})

    if(meta.length == 0){
        console.log("A meta não pode ser vazia");
        return
    }

    metas.push(
        { 
            value: meta, 
            checked: false
        }
    )
}

/*estrutura do menu*/
const start = async() =>{

    while(true){

     const opcao = await select({
        message: "Menu >",
        choices: [
            {
                name: "Cadastrar meta",
                value:"cadastrar"
            },

            {
                name: "Listar metas",
                value:"listar"
            },

            {
                name:"Sair",
                value: "sair"
            }
        ]
     })

       switch(opcao){

            case "cadastrar":
             await cadastrarMeta()
             console.log(metas);
             
                break;

            case "listar":
                    console.log("Vamos Listar");
                    break;

            case "sair":
                console.log("Até a próxima!");
                
                   return   // return encerra o while 
       }
    }
}

start()