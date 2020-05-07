<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
echo "event: evento\n";
echo "data: La hora del servidor es: {$time}\n\n";
flush();
?>