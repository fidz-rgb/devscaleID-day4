// kalkulator Expedisi
import { input, number } from "@inquirer/prompts";
import {bratPaket} from "./libs/expedisi-03";
import type {zona, kecepatan} from "./libs/expedisi-03";

async function inputNmBarang(){
    const value = await input({
        message: "Masukkan nama barang! :",
        required: true,
    })
}

async function inputBerat(bratPaket: number){
    const value = await number({
        message: "input berat barang(kg) :",
        required: true,
    })
}
inputNmBarang();
