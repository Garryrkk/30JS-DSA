var exppect = function(val){
    function toBe(val2) {
        if (val === val2){
            return true;
        }else{
            throw new Error('Not Equal')
        }
    }
    function notTobe(val2){
        if (val !== val2){
            return true
        }
        else{
            throw new Error('Equal')
        }
    }
    return {
        toBe,
        notTobe
    }
}

/*
var exppect = function(val){ this lune delare a variable named expect and assigns a function
func takes an argument val. Tgis argu will hold the value we want.
fun tobe takes  another argument val2, this will hold the value we want to compare the original val
*/