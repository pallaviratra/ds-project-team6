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
    'INSERT INTO refs (first_name, last_name, age, referee_grade, referee_skill, ref_role)
  VALUES (?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['first_name'],
  $_POST['last_name'],
  $_POST['age'],
  $_POST['referee_grade'],
  $_POST['referee_skill'],
  $_POST['ref_role']
]);


// Get auto-generated PK from DB
// https://www.php.net/manual/en/pdo.lastinsertid.php
// $pk = $db->lastInsertId();  

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../refs/');