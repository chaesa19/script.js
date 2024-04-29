document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "toko_buku.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            tampilkanInfoToko(data);
            tampilkanDaftarBuku(data.daftar_buku);
        }
    };
    xhr.send();
});

function tampilkanInfoToko(data) {
    var tokoInfoDiv = document.getElementById("toko-info");
    tokoInfoDiv.innerHTML = `
        <h2>Nama Toko: ${data.nama_toko}</h2>
        <p>Alamat: ${data.alamat}</p>
    `;
}

function tampilkanDaftarBuku(daftarBuku) {
    var daftarBukuDiv = document.getElementById("daftar-buku");
    var tabelBuku = "<h2>Koleksi Buku</h2><table border='1'><tr><th>Judul</th><th>Pengarang</th><th>Tahun Terbit</th><th>Harga</th></tr>";

    daftarBuku.forEach(function(buku) {
        tabelBuku += `<tr><td>${buku.judul}</td><td>${buku.pengarang}</td><td>${buku.tahun_terbit}</td><td>${buku.harga}</td></tr>`;
    });

    tabelBuku += "</table>";
    daftarBukuDiv.innerHTML = tabelBuku;
}
