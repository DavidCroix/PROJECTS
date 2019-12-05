<?php   
$temperatura = $_POST["temperatura"];
$humedad = $_POST["humedad"];
$humedad2 = $_POST["humedad2"];
$humedad3 = $_POST["humedad3"];
require ("connection.php");
$sql = "INSERT INTO tblsensores(temperatura, humedad, humedad2, humedad3) VALUES ('$temperatura','$humedad','$humedad2','$humedad3')";
mysqli_query($con,$sql);
echo $sql;
?>
