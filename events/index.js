const EventEmitter = require('events')
class meuEmissor extends EventEmitter {

}

const meuEmi = new meuEmissor()
const nomeEvento = 'usuario:click'
meuEmi.on(nomeEvento, function (click) {
    console.log('um usuario clicou', click)
})

// meuEmi.emit(nomeEvento, 'na barra de rolagem')
// meuEmi.emit(nomeEvento, 'no ok')

// let count = 0
// setInterval(function () {
//     meuEmi.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)

const stdin = process.openStdin()
stdin.addListener('data', function (value){
    console.log(`Voce digitou: ${value.toString().trim()}`)
})