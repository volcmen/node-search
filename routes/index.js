let router = require('express').Router();

const array = require('../controller/createMap')


router.get('/', function (req, res) {
    res.render('index', {title: 'Express', array: JSON.stringify(array)});
});

router.post('/search', (req, res) => {
    let str = Object.keys(req.body).toString()
    let response
    let objConstuctor = array

    for (let char in str){
        let arrPos = str[char]
        response = objSearch(response||array, arrPos)
        objConstuctor += '.'+str[char]
        if (!response) response='Not found'
    }
    
    function objSearch(array, char) {
        if (array.hasOwnProperty(char)) return array[char]
    }


    if (!str) response='Empty input'
    response=response.shortest?response.shortest:'Not found'

    res.end(response.toString())
});

module.exports = router;



