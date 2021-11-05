<?php
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql ='SELECT 
    ra.ref_id,g.game_id, g.date, g.time, g.field, assign_status, r.first_name, r.last_name
FROM ref_assignment as ra 
LEFT OUTER JOIN game_details as g ON g.game_id = ra.game_id
LEFT OUTER JOIN refs as r ON r.ref_id = ra.ref_id
GROUP BY g.field, r.ref_id';


$vars = [];
$stmt = $db->prepare($sql);
$stmt->execute($vars);
$offers = $stmt->fetchAll();

// Step 4: Output

$json = json_encode($offers, JSON_PRETTY_PRINT);
header('Content-Type: application/json');
echo $json;
