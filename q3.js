let str = "Washington"
let revstr = []
for (let i = str.length -1; i >= 0; i--) { 
    revstr.push(str[i])
}
let newstr= (str) + revstr.join("")
console.log(newstr)
