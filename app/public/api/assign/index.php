<?php
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// $sql = 'SELECT * FROM ref_assignment';
// $vars = [];

if (isset($_GET['game'])) {
  $sql = 'SELECT game_details.date, game_details.time, ref_assignment.assign_status, ref_assignment.ref_assign_id, refs.first_name, ref_assignment.assign_id, ref_assignment.game_assign_id
  FROM game_details 
  INNER JOIN ref_assignment ON game_details.game_id = ref_assignment.game_assign_id
  INNER JOIN refs on ref_assignment.ref_assign_id = refs.ref_id
  WHERE ref_assignment.game_assign_id = ?;';

  $vars = [ $_GET['game'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$assignedGames = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($assignedGames, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;