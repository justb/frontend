const c = {
    timer: function A(){
        c.a=1
        setTimeout(() => {
            console.log(this)
        }, 1000);
    }
}
const {timer}=c
timer()