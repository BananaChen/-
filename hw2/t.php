<?php
$id = $_POST["id"];
$blood_type = $_POST["blood_type"];
if($blood_type){
  echo "Hello,{$id}, your blood type is {$blood_type}.";
  echo "The personality of blood type {$blood_type} is ";
}
else{
  echo "please type your data\<br>";
}

switch ($blood_type) {
  case 'A':
    echo "conservative, reponsible";
    break;
  case 'B':
    echo "passionate, confident";
    break;
  case 'O':
    echo "ambitious, sociable";
    break;
  case 'AB':
    echo "organized, rational";
    break;
  default:
    echo " Idiot!!! cause there is no blood type {$blood_type}! please type in correct blood type!";
    break;
    }
?>
