<?php

require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT game_details.date, game_details.time, game_details.field, game_details.level, ref_assignment.assign_status, ref_assignment.ref_assign_id, refs.first_name, ref_assignment.assign_id, ref_assignment.game_assign_id, refs.ref_id, refs.last_name
FROM game_details 
INNER JOIN ref_assignment ON game_details.game_id = ref_assignment.game_assign_id
INNER JOIN refs on ref_assignment.ref_assign_id = refs.ref_id
WHERE ref_assignment.ref_assign_id = ? AND game_details.date > ? AND game_details.date < ? ;';

$vars = [ $_GET['ref_assign_id'],
          $_GET['startDate'],
          $_GET['endDate'] ];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$fgames = $stmt->fetchAll();

if (isset($_GET['format']) && $_GET['format'] == 'csv' ) {
    header('Content-Type: text/csv');
    echo "Date , Time ,\"Field\",\"Level \"\r\n";
    foreach($fgames as $u) {
        echo $u['date'] . "," .$u['time'].','.$u['field']
          .','.$u['level']."\r\n";
    }
  } else {
  
    $json = json_encode($fgames, JSON_PRETTY_PRINT);
    // Step 4: Output
    header('Content-Type: application/json');
    echo $json;
  }