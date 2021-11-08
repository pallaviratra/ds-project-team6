<?php
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query

if (isset($_GET['ref'])) {
  $sql = 'SELECT game_details.date, game_details.time, game_details.field, game_details.level, ref_assignment.assign_status, ref_assignment.ref_assign_id, refs.first_name, ref_assignment.assign_id, ref_assignment.game_assign_id, refs.ref_id, refs.last_name
  FROM game_details 
  INNER JOIN ref_assignment ON game_details.game_id = ref_assignment.game_assign_id
  INNER JOIN refs on ref_assignment.ref_assign_id = refs.ref_id
  WHERE game_details.date > CURDATE() AND ref_assignment.ref_assign_id = ?;';

  $vars = [ $_GET['ref'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$assignedRefGames = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($assignedRefGames, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;