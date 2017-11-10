setTimeout(function(){console.log(4)},0);
new Promise(function(resolve){
    console.log(1)
    for( var i=0 ; i<100000000 ; i++ ){
        if(i==99999999){
            resolve()
        }
    }
    console.log(2)
}).then(function(){
    console.log(5)
});
console.log(3);