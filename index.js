const arr = {
    "name": 1,
    "items": [
        {
            "name": 2,
            "items": [
                { "name": 3 },
                { "name": 4 }
            ]
        },
        {
            "name": 5,
            "items": [
                { "name": 6 }
            ]
        }
    ]
}

const recc = (object, dash = '') => {         
    for (let i in object) {        
        if (!Array.isArray(object[i])) {
            if (dash.length == 6) {
                dash = '  '+dash.substring(3)
            }                       
            console.log(dash + object[i])
            dash += '|'                                 
        } else if (Array.isArray(object[i])) {
            object[i].forEach(el => {                
                recc(el, dash + '__')                
            })
        }
    }
}

recc(arr)