
// at the first any untill assind to spacific type
let Name="mohamed";//name is any
Name=16;//name is string

//explicty take annotaion type
let age:number=20;  
function addEx(str:string){
    return str +"!"
}
console.log(addEx("5"))//if you try to addEx(5) will give error
// Any type can change any time to any type
let allTypes:any="mostafa";
allTypes=10;

// merge two datatype
let id:string | number ;
id =100;
id ="4545457ssf"

// Array of types 
let users:string[]=["mohamed","ali"]

// multidimeision array 
let randoms:(number |string |boolean[])[]=[2,"afdfds",[true,false]]

// anotiaon of input and output function and option parameter
function getInfo(name: string,age: number,id?: number) :string{
    if(age >20){
        return `my name is ${name}, my age is ${age} , my id is ${id}`
    }
    return ``
}
console.log(getInfo("mmohamed",20))

// rest parameters
function calu(...nums:number[]):number{
    let result:number=0
    for(let i=0;i<nums.length;i++){
        result += nums[i];
    }
    return result
}
console.log(calu(1,2,4),"hi")

// type alias like struct c++
type st=string;
let nn:st="mostafa"
console.log(nn)
// type alias like struct c++



// custom type
type multible=-1|0|1

function allofall():multible{
    return 0
}

// tuple
let tbl :readonly [number,string,boolean]=[12,"mohamed",false]
tbl.push(50)
console.log(tbl)