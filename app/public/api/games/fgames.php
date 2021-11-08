<?php
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Received help from Prajwal Baskaran involving certain aspects of sql statement 
if (isset($_GET['ref'])) {
  $sql = 'SELECT game_details.date, game_details.time, ref_assignment.assign_status, ref_assignment.ref_assign_id, game_details.field, game_details.level FROM game_details INNER JOIN ref_assignment ON game_details.game_id = ref_assignment.game_assign_id WHERE game_details.date > CURDATE() and ref_assignment.ref_assign_id = ? ;';

  $vars = [ $_GET['ref'] ];

}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$fgames = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($fgames, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;