let arr = [2, 5, 4, 5, 6, 9, 8, 8, 1, 7]
let newarr = []

for (let i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i +1]){
        newarr.push()
    }
    else{
        newarr.push(arr[i],arr[i])
    }
}
console.log(newarr)