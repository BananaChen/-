<?php
$id = $_POST["id"];
$blood = $_POST["blood_type"];
if($blood){
  echo "Hello, {$id}, your blood type is {$blood}.<br>";
  echo "The personality of blood type {$blood}is <br>";
}
else{
  echo "please type your data<br>";
}

switch ($blood) {
  case 'A':
    echo "conservative, reponsible";
    break;
  case 'B':
    echo "passionate, confident";
    break;
  case 'O':
    echo "smbitious, sociable";
    break;
  case 'AB':
    echo "organized, rational";
    break;
  default:
    echo "please type in correct blood type!"
    break;
}

?>
