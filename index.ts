// Studi Kasus 1

interface Order {
    id: number 
    customer: string
    menu: string
    qty: number
    price: number
}

interface AnotherOrder {
    Customer: string
    total: number
}

const orders : Order[] = [
      { id: 1, customer: "Andi", menu: "Nasi Goreng", qty: 2, price: 20000 },
  { id: 2, customer: "Budi", menu: "Mie Ayam", qty: 1, price: 15000 },
  { id: 3, customer: "Citra", menu: "Es Teh", qty: 3, price: 5000 },
  { id: 4, customer: "Andi", menu: "Es Jeruk", qty: 1, price: 8000 },
];

let totalharga = orders.map((x) => x.qty * x.price) 
console.log(totalharga);
let totalorder: AnotherOrder[] = []
orders.forEach((x) => totalorder.push({Customer: x.customer, total: x.qty * x.price}))
console.log(totalorder)

let pesananlebihdari1 = orders.filter((x) => x.qty > 1)
console.log(pesananlebihdari1);
console.log(`-----------------------------------------------------------`);

// Studi Kasus 2

interface Book {
    id: number
    judul: string
    kategori: string
    harga: number
    stok: number
}

interface ringkas {
    judul: string
    Harga: number
    stok: number
}

const books: Book[] = [
    {id: 1, judul:`TS Dasar`, kategori: `Pemrograman`, harga:150_000, stok:10},
    {id: 2, judul:`NetJS Lanjutan`, kategori: `Web`, harga:200_000, stok:5},
    {id: 3, judul:`Data Strcutures`, kategori: `Ilmu Komputer`, harga:180_000, stok:8}
]
// Nomor 1
console.log(books.filter((x) => x.kategori === `Web`));

// Nomor 2

let stok_harga = books.map((x) => x.stok * x.harga)
console.log(stok_harga);

// Nomor 3

let buku_stok_besar = books.sort((a , b) => a.stok + b.stok )
let smallestvalue = buku_stok_besar[0]
smallestvalue.stok+=10
console.log(smallestvalue);

// Nomor 4

let reengkas : ringkas[] = []
books.forEach((x) => reengkas.push({judul: x.judul, Harga: x.harga, stok: x.stok}) )
console.log(reengkas);

// Nomor 5

books.forEach((x) => console.log(x.judul)); 

