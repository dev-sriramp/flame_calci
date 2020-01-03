var user = prompt("Please enter your name");
document.getElementById("user").value = user;
if(user.length>0){
var user1 = prompt("enter your crush name");
document.getElementById("user1").value = user1;
if(user1.length>0){
var k=0;
for(var i=0;i<user.length;i++){
   k=k+user.charCodeAt(i);} 
var k1=0;
for(var j=0;j<user1.length;j++){
   k1=k1+user1.charCodeAt(j);}
var k1 = k1+k;
var di=0;
while(k1>0){
  di=di+k1%10;
  k1=Math.floor(k1/10);
  }
var abc=0;
if(di<=10){
 abc = di;
 }
while(di>10){
  abc=abc+di%10;
  di=Math.floor(di/10);
  }
switch(abc){
    case 1:
     alert("your relation with"+user1+"is friends");
     var final="friends";
     document.write("your relationship with ",user1," is friends");
 document.getElementById("final").value = final;
     break;
    case 2:
     alert("your relation with "+user1+" is love");
     var final="love";
     document.write("your relationship with ",user1," is love");
 document.getElementById("final").value = final
     break;
    case 3:
     alert("your relation with "+user1+" is affection");
     var final="affection";
     document.write("your relationship with ",user1," is affection");
 document.getElementById("final").value = final
     break;   
    case 4:
     alert("your relation with "+user1+" is marriage");
     var final="marriage";
     document.write("your relationship with ",user1," is marriage");
document.getElementById("final").value = final
     break;    
    case 5:
     alert("your relation with "+user1+" is enemy");
     var final="enemy";
     document.write("your relationship  with ",user1," is enemy");
document.getElementById("final").value = final
     break;    
    case 6:
     alert("your relation with "+user1+" is sibling");
     var final="siblings";
     document.write("your relationship with ",user1," is sibling");
document.getElementById("final").value = final
     break;    
    case 7:
     alert("your relation with "+user1+" is friends");
     var final="friends";
     document.write("your relationship with ",user1," is friends");
document.getElementById("final").value = final
     break;    
    case 8:
     alert("your relation with "+user1+" is love");
     var final="love";
     document.write("your relationship with ",user1," is love");
document.getElementById("final").value = final
     break;
    case 9:
     alert("your relation with "+user1+" is affection");
     var final="affection";
     document.write("your relationship with ",user1," is affection");
document.getElementById("final").value = final
     break;   
    case 10:
     alert("your relation with "+user1+" is marriage");
     var final="marriage";
     document.write("your relationship with ",user1," is marriage");
document.getElementById("final").value = final
     break;
    default:
     alert("your relationship with "+user1+" is love");
     var final="love";
     document.write("your relationship with ",user1,"is love");
document.getElementById("final").value = final
     }
     }
else{
    alert("you did not enter your crush name");
    }
    }
else{
     alert("you doesnot enter your name itself");
     }
     