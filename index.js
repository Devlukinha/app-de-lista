/*chamando o inquirer */
const { select, input, checkbox } = require('@inquirer/prompts');

let meta ={
    value: "Tomar agua",
    checked: false,
}
let metas = [ meta ]

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

//Listando as metas
const  listarMetas = async () =>{
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o Espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta selecionada");
        return
    }

    metas.forEach((m) => { // percorrendo as metas
        m.checked = false // deixando elas falsas para que não haja erro
    })

// percorrendo as metas com foreach
    respostas.forEach((resposta) =>{
        const meta = metas.find((m) => { // procurando metas
            return m.value == resposta // verifcando se a meta e o valor são os mesmos. Ex: meta = andar é igual a value: andar?
        })

        meta.checked = true //colocando como verdadeiro a comparação anterior
    }) 

    console.log("Meta(s) marcadas como concluída(s)");
    
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
                   await listarMetas()
                    break;

            case "sair":
                console.log("Até a próxima!");
                
                   return   // return encerra o while 
       }
    }
}

start()