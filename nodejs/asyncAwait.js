const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout( function (){
            return resolve({
                id: 1,
                nome:'Aladin',
                dataNascimento: new Date()
            })
         }, 1000)
    })

}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '152464',
                ddd: 11
            }) 
        }, 2000);
    })

}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

main()
// async retornara uma promise automaticamente
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        // para execucao independente e paralela
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
        Nome: ${usuario.nome},
        Telefone: (${telefone.ddd}) ${telefone.telefone},
        Endereco: ${endereco.rua}, ${endereco.numero}`)
        console.timeEnd('medida-promise')
    } catch(error) {
        console.error('DEU ERRO', error)
    }
}

// const usuarioPromise = obterUsuario()
// // then para sucesso
// // catch para manipular erros
// usuarioPromise
// .then(function (usuario){
//     return obterTelefone(usuario.id)
//     .then(function resolverTelefone(result) {
//         return {
//             usuario: {
//                 nome: usuario.nome,
//                 id: usuario.id
//             },
//             telefone: result
//         }
//     })
// })
// .then(function (resultado){
//     const endereco = obterEnderecoAsync(resultado.usuario.id)
//     return endereco.then(function resolverEndereco(result){
//         return {
//             usuario: resultado.usuario,
//             telefone: resultado.telefone,
//             endereco: result
//         }
//     });
// })
// .then(function (resultado){
//     console.log(`
//     Nome: ${resultado.usuario.nome}
//     Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//     Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//     `)
// })
// .catch(function (error){
//     console.error('DEU RUIM', error)
// })
// obterUsuario(function resolverUsuario(error, usuario){
//     if(error) {
//         console.error('DEU RUIM O USUARIO', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error, telefone){
//         if(error) {
//             console.error('DEU RUIM O TELEFONE', error)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error, endereco){
//             if(error) {
//                 console.error('DEU RUIM O ENDERECO', error)
//                 return;
//             }
            
//             console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.rua}, ${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}`)
//         })
//     })
// })

// const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)
