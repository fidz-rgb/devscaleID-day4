export type zona = "dalam kota" | "luar kota";
export type kecepatan = "Reguler" | "Premium";

export const zonTujuan: Record<zona, number> = {
    "dalam kota": 7000,
    "luar kota": 15000,
};

export const kecepatanPaket: Record<kecepatan, number> = {
    "Reguler": 10000,
    "Premium": 20000, 
}

export const bratPaket = 5000;

export function ttlBayar(): hasil{
    const bayar = zonTujuan + kecepatanPaket * bratPaket;
}