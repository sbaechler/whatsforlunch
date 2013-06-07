<?php

    $distance = $_GET['distance'];
    $lat = $_GET['lat'];
    $lon = $_GET['lon'];

    // cURL mit allen URL-Parametern initialisieren
    $curlHandle = curl_init("http://www.lunchgate.ch/api/1_0/?api_key=demo&action=getRestaurantsByDistance&latitude=".$lat."&longitude=".$lon."&distance=".$distance);
    
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