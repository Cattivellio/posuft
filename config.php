<?php
$conn = new mysqli("sql303.infinityfree.com","if0_36858889","ufetista2024","if0_36858889_posuftdb");

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}
?>