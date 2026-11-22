export type satPanjang = "cm" | "m" | "km";

// const tipMeter = {
//     cm: number,
//     m: number,
//     km: number
// }

const meter: Record<satPanjang, number> = {
    cm: 0.01,
    m: 1,
    km: 1000
};

export function konversPanjang(
    value: number,
    from: satPanjang,
    to: satPanjang
): Number{
    const keMeter = value * meter[from];
    return keMeter / meter[to];
}
