export type typeClothes = "Baju" | "Celana";
export type cdTop = "a" | "b" | "c";
export type cdBottom = "a" | "b";

export const katalogTop: Record<cdTop, number> = {
    a: 50000,
    b: 80000,
    c: 30000
}

export const katalogBottom: Record<cdBottom, number> = {
    a: 75000,
    b: 40000
}

export type hasilTransaksi = {
    subttl: number;
    potongan: number;
    ttlBayar: number;
};

export function hitungTransaksi(hargaSat: number, qty:number): hasilTransaksi{
    const subttl = hargaSat * qty;
    let potongan = 0;

    if (subttl >= 100000) {
        potongan = subttl * 0.2;
    }else{
        potongan = 0;
    }

    const ttlBayar = subttl - potongan;

    return{
        subttl,
        potongan,
        ttlBayar
    }
}

