var chen328 = {
    chunk: function(array, size) {
      let len = size || 1;
      let arr = [];
      let arr1 = [];
      for(let i=0;i<array.length; i++){
        arr1.push(array[i]);
        len--;
        if (len === 0) {
          arr.push(arr1);
          arr1 = [];
          len = array.length - 1 - i ;
        }
      }
      return arr;
    },

    compact: function(array){
      let arr = [];
      for(let i=0; i<array.length; i++){
        if (array[i] !== '' && array[i] !== null && array[i] !== 0 && array[i] !== undefined && array[i] !== false && array[i] === array[i]) {
          arr.push(array[i]);
        }
      }
      return arr;
    },

    difference: function(array,...array2){
      let arr= [];
      let temp = [].concat(...array2);
      //console.log(temp);
      for(let i=0; i<array.length; i++){
        if (temp.indexOf(array[i]) === -1) {
          arr.push(array[i]);
        }
      }
      return arr;
    },
     /**
     *
     * @param array(Array)
     * @param n(number)
     */
    drop:(array,n=1) =>{
        let arr = [];
        for (let i=0;i<array.length; i++){
            arr.push(array[i]);
        }
        if (n >= arr.length){return []}
        for (let i=0; i<n; i++){
            arr.shift();
        }
        return arr;
    },
    /**
     *
     * @param array(Array)
     * @param n(number)
     */
    dropRight:(array,n=1) =>{
        let arr = [];
        for (let i=0;i<array.length; i++){
            arr.push(array[i]);
        }
        if (n >= arr.length){return []}
        for (let i=0; i<n; i++){
            arr.pop();
        }
        return arr;
    },

    fill:(array,value,start=0,end=array.length) => {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i]);
        }
        for (let i=start;i<end; i++){
            arr[i] = value;
        }
        return arr
    },

    concat:(array,...value) => {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i]);
        }
        for (let i = 0; i < value.length; i++) {
            if (Array.isArray(value[i]) === true){
                value[i].forEach(item =>{
                    arr.push(item);
                })
            } else{
                arr.push(value[i]);
            }
        }
        return arr;
    },

    flatten:(array) => {
        let arr = [];
        array.forEach(item => {
            if (Array.isArray(item) === true){
                arr = arr.concat(item);
            } else {
                arr.push(item);
            }
        });
        return arr
    },

    flattenDeep:(array) => {
        let arr = [];
        (function fn(array){
            array.forEach(item => {
                if (Array.isArray(item) === true){
                    fn(item);
                } else {
                    arr.push(item);
                }
            });
        }(array));

        return arr
    },

    flattenDepth:(array,depth=1) => {
        let fn = function (array){
            let arr = [];
            array.forEach(item => {
                if (Array.isArray(item) === true){
                    arr = arr.concat(item);
                } else {
                    arr.push(item);
                }
            });
            return arr ;
        };
        for (let i=0;i<depth;i++){
            array = fn(array);
        }
        return array
    },

    fromPairs:(pairs) => {
        let obj = {};
        (function fn(array) {
            array.forEach((item) => {
                if (Array.isArray(item) === true) {
                    fn(item);
                } else {
                    let str = ""+array[0]+"";
                    obj[str] = array[1];
                }
            });
        }(pairs));
        return obj
    },

    head:array => {
        return array[0];
    },

    indexOf:(array,value,fromIndex=0) => {
        for (let i = fromIndex; i < array.length; i++) {
            if(array[i] === value){
               return i
            }
        }
    },

    initial:array => {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i]);
        }
        arr.pop();
        return arr;
    },

    intersection:(...arrays) => {
        let arr = [];
        for (let i = 0; i < arrays[0].length; i++) {
            let bool = true;
            for ( let n=1; n<arrays.length; n++){
                if (arrays[n].includes(arrays[0][i]) === false){
                    bool = false;
                    break;
                }
            }
            if (bool){arr.push(arrays[0][i])};
        }
        return arr
    },

    join:(array,separator = ',') => {
        let str = '';
        str += ''+array[0]+'';
        for (let i = 1; i < array.length; i++) {
            str += separator;
            str += ''+array[i]+'';
        }
        return str
    },

    last:(array) => {
      if (array.length === 0) {return undefined}
      return array[array.length -1];
    },

    lastIndexOf:(array,value,fromIndex=array.length-1) => {
        for (let i = fromIndex; i >=0 ; i--) {
            if(array[i] === value){
                return i
            }
        }
        return -1;
    },

    nth:(array,n=0) => {
        if (n >= 0){
            return array[n];
        } else {
            return array[array.length + n]
        }
    },

    pull:(array,...value) => {
       for (let i=0; i<value.length;i++){
           while (array.indexOf(value[i]) !== -1){
               let ind = array.indexOf(value[i]);
               array.splice(ind,1);
           }
       }
       return array
    },

    pullAll:(array,values) => {
       for (let i=0; i<values.length;i++){
           while (array.indexOf(values[i]) !== -1){
               let ind = array.indexOf(values[i]);
               array.splice(ind,1);
           }
       }
       return array
    },

    reverse:(array) => {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            arr.unshift(array[i]);
        }
        array = arr;
        return array
    },

    sortedIndex:(array,value) => {
        if (value < array[0]){
            return 0
        }
        for (let i = 0; i < array.length; i++) {
            if (value >= array[i] && value < array[i+1]){
                return i+1
            }
        }
    },

    sortedLastIndex:(array,value) => {
        if (value < array[0]){
            return 0
        }
        if (value > array[array.length-1]){
            return array.length -1
        }
        for (let i = array.length-1; i >= 1; i--) {
            if (value >= array[i-1] && value < array[i]){
                return i
            }
        }
    },

    sortedLastIndexOf:(array,value) => {
        return array.lastIndexOf(value)
    }






};
