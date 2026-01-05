<?php

// $celcius = 30;       
// $fahrenheit = 86;    

// $celToFah = ($celcius * 9/5) + 32;
// $celToKel = $celcius + 273.15;
// $fahToCel = ($fahrenheit - 32) * 5/9;

// echo "<h3>1. Konversi Suhu</h3>";
// echo "Celcius ke Fahrenheit: " . number_format($celToFah, 2) . "<br>";
// echo "Celcius ke Kelvin: " . number_format($celToKel, 2) . "<br>";
// echo "Fahrenheit ke Celcius: " . number_format($fahToCel, 2) . "<br>";


// $totalBelanja = 750000; // contoh input
// $diskon = 0;

// if ($totalBelanja >= 1000000) {
//     $diskon = 0.30;
// } elseif ($totalBelanja >= 500000) {
//     $diskon = 0.20;
// } elseif ($totalBelanja >= 100000) {
//     $diskon = 0.10;
// }

// $nilaiDiskon = $totalBelanja * $diskon;
// $totalBayar = $totalBelanja - $nilaiDiskon;

// echo "<h3>2. Kalkulator Diskon</h3>";
// echo "Total Belanja : Rp " . number_format($totalBelanja, 2) . "<br>";
// echo "Diskon        : Rp " . number_format($nilaiDiskon, 2) . "<br>";
// echo "Total Bayar   : Rp " . number_format($totalBayar, 2) . "<br>";


$nilai = [75, 89, 65, 90, 85, 70, 98, 65, 69, 70, 12];

$nilaiTertinggi = max($nilai);
$nilaiTerendah = min($nilai);
$rataRata = array_sum($nilai) / count($nilai);

$jumlahLulus = 0;
foreach ($nilai as $n) {
    if ($n >= 70) {
        $jumlahLulus++;
    }
}


rsort($nilai);

echo "<h3>3. Manipulasi Array</h3>";
echo "Nilai Tertinggi : $nilaiTertinggi <br>";
echo "Nilai Terendah  : $nilaiTerendah <br>";
echo "Rata-rata Nilai : " . number_format($rataRata, 2) . "<br>";
echo "Jumlah Lulus    : $jumlahLulus <br>";
echo "Urutan Nilai (Tertinggi ke Terendah): <br>";
echo implode(", ", $nilai);
// ?>
