let arr=[2,5,8,1,5];
max =arr[0];
arr.forEach(x => {
    if(max<x){
        max=x;
    }
});
console.log('max='+max);

str1="hello I am snehal learning JS"
console.log(str1.substring(8,0))
console.log(str1.substring(0,8))
//console.log(str1.slice(8,0))
