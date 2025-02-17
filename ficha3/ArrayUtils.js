var arrayutils = {
    isEmpty:function(array){
        return array.length == 0;
    },

    max:function(array){

        if (this.isEmpty(array)){
            return 0;
        }
        else {
            var max = array[0];
            for (var i = 0; i < array.length; i++){
                if (max < array[i]){
                    max = array[i];
                }
            }
            return max; //retorna o valor mais alto
        }
        },
        
    min:function(array){

        if (this.isEmpty(array)){
            return 0;
        }
        else{
            min = array[0];
            for (var i = 0; i < array.length; i++){
                if (min > array[i]){
                    min = array[i];
                }
            }
            return min; //retorna o valor mais baixo
        }
        
    },

    average:function(array){

        if (this.isEmpty(array)){
            return 0;
        }
        else{
            var med = 0;
            for (var i = 0; i < array.length; i++){
                med += array[i];
            }
            var med = med / (array.length - 1);
            return med; //retorna o valor da média
        }
    },


};

module.exports = arrayutils;