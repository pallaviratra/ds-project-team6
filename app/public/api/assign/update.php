<?php

try {
    $_POST = json_decode(
                file_get_contents('php://input'), 
                true,
                2,
                JSON_THROW_ON_ERROR
            );
} catch (Exception $e) {
    header($_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request");
    exit;
}

require("class/DbConnection.php");

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE ref_assignment SET
    ref_assign_id = ?,
    assign_status = ?,
    game_assign_id = ?
    WHERE assign_id = ?'
);

$stmt->execute([
  $_POST['ref_assign_id'],
  $_POST['assign_status'],
  $_POST['game_assign_id'],
  $_POST['assign_id']
]);


// Get auto-generated PK from DB
// https://www.php.net/manual/en/pdo.lastinsertid.php
// $pk = $db->lastInsertId();  

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../assign/?game=' . $_POST['game_assign_id']);