<?php
header('Access-Control-Allow-Origin: http://messing.pedak.me');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 600');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

if($_SERVER['REQUEST_METHOD'] != "POST") {
  header("HTTP/1.0 403 Forbidden");
  print("Forbidden");
  exit();
}

$data = json_decode(file_get_contents("php://input"));

// mail
$to      = 'ofmessing@gmail.com';
$subject = 'Reserve pair for: ' . $data->name;

$message = '<b>Reserver name</b><br>' . $data->name . "<br><br>" .
    '<b>Reserver email</b><br>' . $data->email . "<br><br>" .
    '<b>Series</b><br>' . $data->series . "<br><br>" .
    '<b>Color</b><br>' . $data->color;

$headers = 'From: ' . $data->name . ' <' . $data->email . '>' . "\r\n" .
    'Reply-To: ' . $data->name . ' <' . $data->email . '>' . "\r\n" .
    'Content-Type: text/html; charset=UTF-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$result = mail($to, $subject, $message, $headers);

if(!$result) {   
  print_r(json_encode("error"));  
} else {
  print_r(json_encode("success"));
}
