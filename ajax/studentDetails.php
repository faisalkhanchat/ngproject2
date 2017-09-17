<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "customer");

//echo $request_type = $_GET['id'];;
 //$outp = $data->$request_type;
// echo $outputid = 2;
//$dataid =  2; //$_GET['id'];


$data = json_decode(file_get_contents("php://input"));
$dataid = $data->id;

/*
$dataid= 2;
*/

$result = $conn->query("SELECT  id, name, gender, city FROM tblstudents where id = '".$dataid."' ");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"] . '",';
    $outp .= '"name":"'   . $rs["name"]        . '",';
    $outp .= '"gender":"'   . $rs["gender"]        . '",';
    $outp .= '"city":"'. $rs["city"]     . '"}';
}
$outp =$outp;
$conn->close();

echo($outp);


?>