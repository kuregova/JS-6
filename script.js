let arr = []

for(let i = 0; i < Infinity; i++){
    let command = prompt('Введите команду')
    let newArr = command.split(', ')

    if(newArr[0] == 'add') {
        arr.push(newArr[1])
        console.log()
    }else if(newArr[0] == 'del') {
        arr.splice(newArr[1])
        console.log()
    }else if(newArr[0] == 'stop'){
        break
        console.log()
    }
}
