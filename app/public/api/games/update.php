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
  'UPDATE game_details SET
    date = ?,
    time = ?,
    field = ?,
    level = ?
  WHERE game_id = ?'
);

$stmt->execute([
  $_POST['date'],
  $_POST['time'],
  $_POST['field'],
  $_POST['level'],
  $_POST['game_id']
]);


// Get auto-generated PK from DB
// https://www.php.net/manual/en/pdo.lastinsertid.php
// $pk = $db->lastInsertId();  

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../games/?game=' . $_POST['game_id']);