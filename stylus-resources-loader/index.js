const loaderUtils = require('loader-utils')
const fs = require('fs')


module.exports = function (source) {
    console.log(source)
    const options = loaderUtils.getOptions(this)
    // fs.readFile(options.import, function(err,res){
    //     if(err){
    //         return err
    //     }else{
    //         console.log(res)
    //     }
    // })
    console.log(loaderUtils.stringifyRequest(this, options.import))
    console.log(`@import '${options.import}'\n`+source)
    return `@import '${options.import}'\n`+source
}