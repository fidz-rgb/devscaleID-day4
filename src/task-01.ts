// program konversi satuan panjang
import {number, select} from "@inquirer/prompts";
import { konversPanjang, type satPanjang } from "./libs/satPanjang-01";

async function main() {
    const value = await number({
        message: "masukkan nilai panjang:",
        required: true,
    }) 

    if (value === undefined) return;

    const from = await select<satPanjang>({
        message: "dari satuan ?",
        choices: [
            {name: "Centimeter (cm)", value: "cm"},
            {name: "Meter (m)", value: "m"},
            {name: "Kilometer (km)", value: "km"}
        ],
    });

    const to = await select<satPanjang>({
        message: "ke satuan ?",
        choices: [
            {name: "Centimeter (cm)", value: "cm"},
            {name: "Meter (m)", value: "m"},
            {name: "Kilometer (km)", value: "km"}
        ],
    });

    const result = konversPanjang(value, from, to);
    console.log(`${value} ${from} = ${result} ${to}`);
}

main();
