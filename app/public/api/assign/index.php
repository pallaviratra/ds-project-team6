<?php
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql ='SELECT 
    ref_id,g.game_id, g.date, g.time, g.field, assign_status, r.first_name, r.last_name
FROM ref_assignment as ra 
LEFT OUTER JOIN game_details as g ON g.game_id = game_id
LEFT OUTER JOIN refs as r ON r.ref_id = ref_id
GROUP BY g.field, r.ref_id';


$vars = [];
$stmt = $db->prepare($sql);
$stmt->execute($vars);
$offers = $stmt->fetchAll();



 ?>
        <h2>Competitions</h2>
<article>
    <p id="TableHeader1">Fixture Information</p>
    <P>Select Round and Game number from the dropdown list under Round Number.</P>
    <br>

<br><form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
<p id="TableHeader2">Round Number &nbsp; &nbsp; 
<select style="width:250px"></select>&emsp;&emsp;<input class="button" 
type="submit" name="Get" value="Get Data"></p>

<p id="TableHeader2">Referee ID</p>
<table class="table">
<tr><td><b>Ref ID:</b></td>
<?php foreach( $offers as $row ){
    echo "<td>";
    echo $row['ref_id'];
 }
?>
</tr>

<tr>
<td><b>Game Date:</b></td>.
<?php foreach( $offers as $row ){
    echo "<td>";
    echo $row['date'];
 }
 ?>
</tr>

<tr>
<td><b>Game Field:</b></td>
<?php foreach( $offers as $row ){
    echo "<td>";
    echo $row['field'];
 }
 ?>
</tr>

<tr>
<td><b>Referee Name:</b></td>
<?php foreach( $offers as $row ){
    echo "<td>";
    echo $row['first_name'];
   }
 ?> 
</tr>


 ?> 
            <td colspan="2><?php echo $message; ?>"></td>
</tr>

 </table>

</form>

// Step 4: Output

$json = json_encode($offers, JSON_PRETTY_PRINT);
header('Content-Type: application/json');
echo $json;
