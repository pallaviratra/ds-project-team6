<?php

require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT game_details.field, game_details.date, game_details.time   
FROM game_details 
INNER JOIN ref_assignment ON game_details.game_id = ref_assignment.game_assign_id 
WHERE game_details.date> curdate() AND ref_assignment.assign_status = "Unassigned" 
GROUP BY game_details.game_id;';

$vars = [];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$futUnass = $stmt->fetchAll();

if (isset($_GET['format']) && $_GET['format'] == 'csv' ) {
    header('Content-Type: text/csv');
    echo "Field, Game Date,\"Game Time\",\r\n";
    foreach($futUnass as $u) {
        echo $u['field'] . "," .$u['date'].','.$u['time'] ."\r\n";
    }
} else {
    // Step 3: Convert to JSON
$json = json_encode($futUnass, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
}

