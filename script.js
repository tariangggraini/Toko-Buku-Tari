// DATA
let buku = [
  {
    nama: "Spy x Family",
    harga: 50000
  },
  {
    nama: "One Piece",
    harga: 55000
  },
  {
    nama: "Jujutsu Kaisen",
    harga: 60000
  },
  {
    nama: "Dilan 1990",
    harga: 70000
  }
];

const list = document.getElementById("list");

// TAMPILKAN
function tampil() {
  list.innerHTML = "";

  buku.forEach((b, i) => {
    list.innerHTML += `
      <div class="card">
        <h3>${b.nama}</h3>
        <p>Rp ${b.harga}</p>
        <button onclick="hapus(${i})">Hapus</button>
      </div>
    `;
  });
}
tampil();

// TAMBAH
function tambah() {
  let nama = document.getElementById("namaBaru").value;
  let harga = document.getElementById("hargaBaru").value;

  if(nama === "" || harga === "") return;

  buku.push({
    nama: nama,
    harga: harga
  });

  tampil();
}

// HAPUS
function hapus(i) {
  buku.splice(i, 1);
  tampil();
}

// VALIDASI
document.getElementById("formBeli").addEventListener("submit", function(e){
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let harga = document.getElementById("harga").value;
  let kategori = document.getElementById("kategori").value;
  let metode = document.querySelector('input[name="metode"]:checked');

  let valid = true;

  document.querySelectorAll(".error").forEach(el => el.innerText = "");

  if(nama === ""){
    document.getElementById("err-nama").innerText = "Nama wajib diisi";
    valid = false;
  }

  if(!email.includes("@")){
    document.getElementById("err-email").innerText = "Email tidak valid";
    valid = false;
  }

  if(harga <= 0){
    document.getElementById("err-harga").innerText = "Harga harus lebih dari 0";
    valid = false;
  }

  if(kategori === ""){
    document.getElementById("err-kategori").innerText = "Pilih kategori";
    valid = false;
  }

  if(!metode){
    document.getElementById("err-metode").innerText = "Pilih metode pembayaran";
    valid = false;
  }

  if(valid){
    document.getElementById("hasil").innerText = "Pembelian Sukses 🎉";
    document.getElementById("formBeli").reset();
  }
});
