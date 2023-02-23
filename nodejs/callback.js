function obterUsuario(callback){
 setTimeout( function (){
    return callback(null, {
        id: 1,
        nome:'Aladin',
        dataNascimento: new Date()
    })
 }, 1000)
}

function obterTelefone(idUsuario){
    setTimeout(() => {
        return {
            telefone: '152464',
            ddd: 11
        } 
    }, 2000);
}

function obterEndereco(){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero:0
        })
    }, 2000);
}

function resolverUsuario(err, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    if(error) {
        console.error('DEU RUIM O USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error, telefone){
        if(error) {
            console.error('DEU RUIM O TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error, endereco){
            if(error) {
                console.error('DEU RUIM O ENDERECO', error)
                return;
            }
            
            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}`)
        })
    })
})

// const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)
