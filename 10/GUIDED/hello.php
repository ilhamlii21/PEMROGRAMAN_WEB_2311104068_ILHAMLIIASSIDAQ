<!-- <?php

function luasPermukaanKubus($sisi) {
    return 6 * $sisi * $sisi;
}

$a = 10;

echo "Luas permukaan kubus dengan sisi $a adalah: " . luasPermukaanKubus($a) . " cm2";

?> -->


<?php
$arrAlamat = [
    "Rona" => "Banjarmasin",
    "Dhiva" => "Bandung",
    "Ilham" => "Medan",
    "Oku" => "Hongkong",
];
echo $arrAlamat["Dhiva"] . "<br>"; //Bandung
echo $arrAlamat['Oku'] . "<br>"; //Hongkong

$arrNim = [];
$arrNim["Rona"] = "11011112";
$arrNim["Dhiva"] = "11011101";
$arrNim["Ilham"] = "11011309";
$arrNim["Oku"] = "11014765";
$arrNim["Fadhlan"] = "11011113";
$arrNim["Alya"] = "11011523";

$arrNim["Alya"] .= " nadhia";

echo $arrNim["Ilham"] . "<br>"; //11011309
echo $arrNim['Fadhlan'] . "<br>"; //11011113
echo $arrNim['Alya'] . "<br>"; //11011523
?>