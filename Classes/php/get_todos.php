<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "testdatabase";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

$sql = "SELECT * FROM todos";
$result = $conn->query($sql);

$todos = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $todos[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($todos);

$conn->close();
?>
