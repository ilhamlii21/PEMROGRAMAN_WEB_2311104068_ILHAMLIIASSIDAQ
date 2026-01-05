   // Deklarasi berbagai tipe data dasar
              var data = ["Satu", 2, true, "Tiga", 4]; // Array dengan tipe data campuran
              var arr2 = [
                ["satu", "dua"],
                ["tiga", "empat"],
              ]; // Array 2D
              document.getElementById("array").innerHTML =
                "Elemen pertama: " +
                data[0] +
                "<br>" +
                "Elemen ketiga: " +
                data[2] +
                "<br>" +
                "Isi arr2: " +
                arr2 +
                "<br>" +
                "Elemen arr2[0][1]: " +
                arr2[0][1] +
                "<br>" + //elemen pada baris 0, kolom 1
                data[10];

                // mengembvar data2 = ["pisang", "apel", "mangga"];
         // Menampilkan hasil ke HTML
            var data2 = ["pisang", "apel", "mangga"];
         // Menampilkan hasil ke HTML
         document.getElementById("array2").innerHTML =
         "Isi awal array: " + data2 + "<br>" +
         "Panjang awal array: " + data2.length + "<br><br>" +
         // Menambahkan elemen baru
         "Menambahkan durian (push): " + data2.push("durian") + "<br>" +
        //mengembalikan panjang baru array
         "Isi array setelah push: " + data2 + "<br>" +
         // Menghapus elemen terakhir
         "Menghapus elemen terakhir (pop): " + data2.pop() + "<br>" + // mengembalikan elemen yang dihapus
         "Isi array setelah pop: " + data2 + "<br>";

        var pendidikan = "S2";
        var gelar;
        if (pendidikan === "S1") {
          gelar = "Sarjana";
        } else if (pendidikan === "S2") {
          gelar = "Master";
        } else if (pendidikan === "S3") {
          gelar = "Doktor";
        } else {
          gelar = "Tidak diketahui";
        }
        document.getElementById("outputPercabangan").innerHTML = "Sekarang kamu: " + pendidikan + ", gelar kamu: " + gelar;

        var text1 = "";
        var i = 0;
        while (i < 3) {
          text1 += "Perulangan while ke-" + i + "<br>"; // perulangan
          i++;
        }
        document.getElementById("whileLoop").innerHTML = text1;

        var mobil = {
          "warna-badan": "merah",
          "nomor-polisi": "BK1234AB",
          merk: "Toyota", // properti dengan nama biasa
          tahun: 2020,
        };

        // Nested Object
        var jadwal = {
          platform: 34,
          telah_berangkat: false,
          asal: {
            kode_kota: "MDN",
            nama_kota: "Medan",
            waktu: "2023-12-29 14:00",
          },
          tujuan: {
            kode_kota: "JKT",
            nama_kota: "Jakarta",
            waktu: "2023-12-29 17:30",
          },
        };

        mobil.jumlahBan = 4;
        jadwal.asal.stasiun = "Medan Station";

        document.getElementById("outputObject").innerHTML =
          "Warna Mobil: " +
          mobil["warna-badan"] +
          "<br>" +
          "Nomor Polisi: " +
          mobil["nomor-polisi"] +
          "<br>" +
          "Merk: " +
          mobil.merk +
          "<br>" +
          "Tahun: " +
          mobil.tahun +
          "<br>" +
          "Asal: " +
          jadwal.asal.nama_kota +
          "<br>" +
          "Tujuan: " +
          jadwal.tujuan.nama_kota +
          "Jumlah Ban: " +
          mobil.jumlahBan +
          "<br>" +
          "Stasiun Asal: " +
          jadwal.asal.stasiun;

        var truk = Object.create(mobil);
        truk.merk = "Hino";
        truk["ukuran truk"] = "besar";

        document.getElementById("outputObject2").innerHTML = "Truk Merk: " + truk.jumlahBan + "<br>" + "Merk truk: " + truk.merk;
        +"<br>" + "Ukuran truk: " + truk["ukuran truk"];

      function tambah(a, b) {
        return a + b;
      }

      function kali(a, b) {
        return a * b;
      }

      document.getElementById("hasil").innerHTML = "Hasil dari tambah(3, 5) adalah " + tambah(3, 5) + "<br>" + "Hasil dari kali(4, 5) adalah " + kali(4, 5);

      var simpan = tambah(3, 5); // simpan === 8
      tambah(simpan, 2); // mengembalikan 10
      tambah(tambah(3, 5), 2); // juga mengembalikan 10
      tambah(tambah(2, 3), 4); // mengembalikan 9

      var naikkan = function (n) {
        var hasil = n + 10;
        return hasil;
      };

      // Pemanggilan fungsi dan penyimpanan hasilnya
      var simpan = tambah(3, 5); // simpan = 8
      var hasil1 = tambah(simpan, 2); // 8 + 2 = 10
      var hasil2 = tambah(tambah(3, 5), 2); // (8) + 2 = 10
      var hasil3 = tambah(tambah(2, 3), 4); // (5) + 4 = 9
      // Tampilkan hasil ke HTML
      document.getElementById("hasilTambah").innerHTML = "tambah(3,5) = " + simpan + "<br>" + "tambah(simpan,2) = " + hasil1 + "<br>" + "tambah(tambah(3,5),2) = " + hasil2 + "<br>" + "tambah(tambah(2,3),4) = " + hasil3;
      document.getElementById("hasilKali").innerHTML = "kali(4,5) = " + kali(4, 5); // contoh fungsi ekspresi
    