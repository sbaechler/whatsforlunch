<?php

    // cURL mit allen URL-Parametern initialisieren
    $curlHandle = curl_init("http://www.lunchgate.ch/api/1_0/?api_key=demo&action=getRestaurantsByDistance&latitude=47.3760303&longitude=8.5263574&distance=1000"); 
    
    // Authentifizierung festlegen
    curl_setopt($curlHandle, CURLOPT_HTTPAUTH, CURLAUTH_DIGEST);
    
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