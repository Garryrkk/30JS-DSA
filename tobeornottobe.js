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