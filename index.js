const express = require('express');
const app = express();
const unitConverter = require('./coversion');

// app.get('/', (req, res) =>{
//     res.send("How far");
// });

app.get('/unitConverter', (req , res) =>{
   let number = req.query.value;
   let type = req.query.type;
   

   let convert = unitConverter[type];

   if(!convert){
    return res.json({
        error: 'Unknown conversion type',
        message: `${type} is not supored`
    });    
   }
 const  result = convert.formula(number)
   res.json({
    input:{
        value: number,
        unit: unitConverter.from
    },
    output:{
        value: result,
        unit: unitConverter.to
    },
    unitConverterType: type
   })
});

app.listen (3000, ()=>{
    console.log('Server is running on localhost');
    
})