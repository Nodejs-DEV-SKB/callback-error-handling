module.exports = (x,y,callback) => {
    if(x <= 0 || y <= 0){
        setTimeout(() =>
            callback(new Error('Value should not be Zero'), null),
            3000
        );
    }else{
        setTimeout(() =>
            callback(null, {
                    area: () => (x*y), // Beacuse of closure x,y is available here
                    perimeter: () => (2*(x+y))
                }
            )
        );
    }
}