
let message:string='helo ali';
console.log(message);
let num:number=2;

let is_ture:boolean=false;
console.log(is_ture);

let randomValue:any=22;
randomValue="22e";
console.log(randomValue);
let maybeName : string| null= null;
console.log(maybeName);
maybeName="ali";
console.log(maybeName);

let obj:object={name:'ali',phone:30252};
console.log(obj);

type USER={
name:string,
age:number,
subjects:Array<{book:string ,page :number}>
}
let users :USER={
    name:'',
    age:0,
    subjects:[]
}
users.name='ali'
console.log(users);

let userObj:object={};
userObj={name:"ali"}
for(let i:number=0;i<10;i++){
    console.log(i,'\n');
}

let accendingArray:any=[1,2,3,4,5,6];
console.log(accendingArray);
let j=0;
let mid:number=accendingArray.length/2;
console.log(`assending arry size ${accendingArray.length} and mid : ${mid}`)
for (let i:number=accendingArray.length-1;i>0;i--){
    if(mid==i){
            break;
        }
        let temp:any;
        temp=accendingArray[j];
    accendingArray[j]=accendingArray[i];
    accendingArray[i]=temp; 
    ++j
 
    console.log(accendingArray[i]);
}
console.log(accendingArray);
console.log("the end")

interface User{
    email:string,
    name:string,
}
interface employee  extends User{
employeid:number,
jobTitle:string
}
function userObject(obj:employee):void{
console.log(obj);
}
userObject({email:"aligmail.com",name:"ali",employeid:2,jobTitle:"nodejs"});

type Admin={
    name:string,
    role:string,
}
type user={
    name:string,
    email:string
}
type Account = Admin | user;
function printAccountName(account:Account){
  if("role" in account){
    console.log(`admin : <${account.name}>`)
  }
  else  console.log(`user : <${account.name}>`)

}
printAccountName({name:'umer',email:"ali@gmail.com"});