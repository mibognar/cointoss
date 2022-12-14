<?php
$jsonString = file_get_contents('php://input');
$jsonDecoded = json_decode($jsonString, true);
echo $jsonDecoded['neptun'];
$date = date("Y-m-d_h-i-sa");

//Give our CSV file a name.
$csvFileName = 'data/toss_data.csv';

//Open file pointer.
$fp = fopen($csvFileName, 'a');

fputcsv($fp, $jsonDecoded);
fclose($fp);
exit("saved");

 ?>
