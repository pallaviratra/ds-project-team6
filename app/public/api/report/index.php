<?php
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT 
    name, username, 
    MAX(salary) AS maxSalary, 
    COUNT(salary) AS offerCount
FROM student LEFT OUTER JOIN 
    offer ON student.id = offer.studentId
GROUP BY username, name';

// $sql ='SELECT 
//     ra.ref_id,g.game_id, g.date, g.time, g.field, assign_status, r.first_name, r.last_name
// FROM ref_assignment as ra 
// LEFT OUTER JOIN game_details as g ON g.game_id = ra.game_id
// LEFT OUTER JOIN refs as r ON r.ref_id = ra.ref_id
// GROUP BY g.field, r.ref_id';


$vars = [];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$offers = $stmt->fetchAll();

// Step 4: Output

// if (isset($_GET['format']) && $_GET['format'] == 'csv' ) {
//     header('Content-Type: text/csv');
//     echo "Name,Username,\"Max Salary\",\"Count of Offers\"\r\n";

//     foreach($offers as $o) {
//         echo $o['name'] . "," .$o['username'].','.$o['maxSalary']
//           .','.$o['offerCount']."\r\n";
//     }

// } else {
//     $json = json_encode($offers, JSON_PRETTY_PRINT);

//     header('Content-Type: application/json');
//     echo $json;
// }

$json = json_encode($offers, JSON_PRETTY_PRINT);
header('Content-Type: application/json');
echo $json;