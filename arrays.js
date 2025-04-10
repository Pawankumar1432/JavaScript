
//Array Methods 
var a=[1,2,3,4,5]
//push()
a.push(6)
console.log(a)
//unshift()
a.unshift(0)
console.log(a)
//splice
a.splice(2,0,8)
console.log(a)
//pop()
a.pop()
console.log(a)
//shift()
a.shift()
console.log(a)
//delete
delete a[1]
console.log(a)
//slice
a.splice(1,1)
console.log(a)
//sort()
b=[7,6,5,4,7]
b.sort()
console.log(b)
//reverse()
b.reverse()
console.log(b)
//To-String
s=["A","B","C","D"]
r=s.toString()
console.log(r)
//join
r=s.join("-")
console.log(r)
//slice
r=b.slice(1,4)
console.log(r)
//at
r=b.at(2)
console.log(r)

var a=[1,10,5,6,14]

var res=a.find(find)

console.log(res)

function find(value)
{
    return value>4
}

var ar=["M","A","D","H","U"]
ar=ar.slice(0,5)
ar=ar.join("")
console.log(ar)

 