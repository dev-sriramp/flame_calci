<?php
$user=filter_input(INPUT_POST,'user');
$user1=filter_input(INPUT_POST,'user1');
$final=filter_input(INPUT_POST,'final');
if(!empty($user)){
 if(!empty($user1)){
  if(!empty($final)){
 $host="localhost";
 $dbusername="root";
 $password="";
 $dbname="mydatabase";
 $conn= new mysqli($host,$dbusername,$password,$dbname);
  if(mysqli_connect_error()){
 die('connect error ( '.mysqli_connect_errno().')');
 }
 else{
 $sql="INSERT INTO data (name,crush,result)
 VALUES('$user','$user1','$final')";
 if($conn->query($sql)){
 echo "Thank You for Visiting Us";
 } 
 else{
 echo "error".$sql."<br>".$conn->error;
 $conn->close();
 }
 }
}
else{
echo "result not be empty";
die();
}
}
else{
echo "your crush name cannot be empty";
die();
}
}
else{
echo "your name cannot be empty";
}
?>