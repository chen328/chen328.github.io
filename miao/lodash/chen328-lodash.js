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
      let temp = [...array2];
      //console.log(temp);
      for(let i=0; i<array.length; i++){
        if (temp.indexOf(array[i]) === -1) {
          arr.push(array[i]);
        }
      }
      return arr;
    }

};
