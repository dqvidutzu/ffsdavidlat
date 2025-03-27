<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    $to = "regeledavid22@yahoo.com";
    $subject = "email de la $name folosing site ul";
    $headers = "From: noreply@yourdomain.com\r\n";
    $body = "nume: $name\n\nmesaj:\n$message";
    if (mail($to, $subject, $body, $headers)) {
        echo "multumesc pentru mesaj, $name";
    } else {
        echo "ceva nu merge, nu e de la tine";
    }
}
?>
