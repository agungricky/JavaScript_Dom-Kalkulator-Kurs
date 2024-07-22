const body = document.body;

const usd = "16,190";
const eur = "17,633";

function cekkurs() {
    let mataUang = document.querySelector('#mataUang').value;
    let kata;

    if (mataUang == 'EUR') {
        kata = "Saat ini nilai 1 " + mataUang + " = " + eur + " Rupiah";
    } else {
        kata = "Saat ini nilai 1 " + mataUang + " = " + usd + " Rupiah";
    }

    alert(kata);
}

function konversi() {
    let uangAwal = document.querySelector('#inputUang').value;
    // Bersihkan format dari koma
    let normalisasi = uangAwal.replace(/,/g, "");
    let normalisasi_usd = usd.replace(/,/g, "");
    let normalisasi_eur = eur.replace(/,/g, "");


    let hasilKonversi;
    let mataUang = document.querySelector('#mataUang').value;
    if (mataUang == "EUR") {
        hasilKonversi = normalisasi / normalisasi_eur;
    } else {
        hasilKonversi = normalisasi / normalisasi_usd;
    }

    let tampil = document.querySelector('.hiden');
    tampil.style.display = 'block';

    let hasil = document.querySelector('#Hasil');

    if (mataUang == 'EUR') {
        hasil.innerHTML = '€ ' + hasilKonversi
    } else {
        hasil.innerHTML = '$ ' + hasilKonversi
    }
}