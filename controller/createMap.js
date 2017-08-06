let fs = require('fs')

let arr=[]


let tmp = fs.readFileSync('dataDict/wordList.txt', 'utf8',).toString().replace(/^\s*\n/gm, '').split("\r");

for (i in tmp){
    arr.push(tmp[i])
}




let map = {}


createMap(arr)


function createMap(arr, map) {
    if (arr.constructor === Array) {
        for (let pos in arr) {
            createMap(arr[pos], map)
        }
    } else {
        createHashMap(arr)
    }
}


function createHashMap(word, array = map, position = 0) {

    if (position === word.length) {
        return
    }

    let char = word.toString().charAt(position)


    if (!array[char])
        array[word.toString().charAt(position)] = {shortest: word}

    else if (array[word.toString().charAt(position)].shortest.length > word.length)
        array[word.toString().charAt(position)].shortest = word

    else if (array[word.toString().charAt(position)].shortest.length === word.length) {
        let shotLst = [array[word.toString().charAt(position)].shortest, word]
        array[word.toString().charAt(position)].shortest = shotLst
    }


    createHashMap(word, array[char], position + 1)
}


module.exports = map