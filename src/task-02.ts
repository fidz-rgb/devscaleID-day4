// program belanja pakaian dgn diskon
import { number, select } from "@inquirer/prompts";
import { katalogTop, katalogBottom, hitungTransaksi } from "./libs/blanjaPakaian-02";
import type {cdTop, cdBottom, typeClothes} from "./libs/blanjaPakaian-02";

const toko: typeClothes = await select({
    message: "Selamat datang, silahkan liat katalognya:",
    choices: [
        {name: "Baju", value: "Baju"},
        {name: "Celana", value: "Celana"},
    ],
});

let hargaSatuan = 0;

if(toko === "Baju"){
    const pilihTop: cdTop = await select({
        message: "berikut katalog baju:",
        choices: [
            {name: "kaos polos", value: "a"},
            {name: "kaos grafik", value: "b"},
            {name: "kemeja", value: "c"},        
            
        ]
    });
    hargaSatuan = katalogTop[pilihTop];
}else{
    const pilihBottom: cdBottom = await select({
        message: "berikut katalog celana:",
        choices: [
            {name: "celana pendek", value: "a"},
            {name: "celana jeans", value: "b"},        
            
        ]
    });
    hargaSatuan = katalogBottom[pilihBottom];
}

const jumlahPcs = await number({
    message: `Harga satuan Rp${hargaSatuan}, berapa pcs ?`,
    required: true,
    min: 1,
});

const qty = jumlahPcs ?? 1;
const hasil = hitungTransaksi(hargaSatuan, qty);

console.log(`Subtotal   : Rp${hasil.subttl}`);
console.log(`Diskon     : Rp${hasil.potongan}`);
console.log(`Total      : Rp${hasil.ttlBayar}`);