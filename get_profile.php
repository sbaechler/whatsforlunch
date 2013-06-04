<?php

    // cURL mit allen URL-Parametern initialisieren
    $restaurantId = $_GET['id'];
    $curlHandle = curl_init("http://www.lunchgate.ch/api/1_0/?api_key=demo&action=getFullProfile&restaurant_id=".$restaurantId."&response=all");
    
    // Authentifizierung festlegen
    curl_setopt($curlHandle, CURLOPT_HTTPAUTH, CURLAUTH_DIGEST);

    curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, TRUE);

    
    // Name und PW festlegen
    curl_setopt($curlHandle, CURLOPT_USERPWD, "demo:demo");
    
    // Antwortformat festlegen
    curl_setopt($curlHandle, CURLOPT_HTTPHEADER, array ("Accept: application/json"));
    
    // cURL ausführen und Antwort in $response schreiben
    $response = curl_exec($curlHandle);
    
    // cURL schliessen
    curl_close($curlHandle);
    echo($response);
?>