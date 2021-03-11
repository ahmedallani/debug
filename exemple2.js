function sum(arr){
    var rtn = 0
    for(var i=0;i<arr.length;i++){
        rtn += arr[i]
    }
    return rtn
}}
console.log(sum([1,2,3]))