var expRect = require("./rect")


function calculateArea(l,b){
    console.log('Process Started !!!!!')
    expRect(l,b, (err, value) => {
        if(err){
            console.log('Error occured and Handled from Callback ====', err.message);
        }else{
            console.log('Output recieved in callback ===== ', value.area())
            console.log('Output recieved in callback ===== ', value.perimeter())
        }
    })
    console.log('Process Completed !!!!!')
}

calculateArea(0,1)
calculateArea(0,0)
calculateArea(33,35)