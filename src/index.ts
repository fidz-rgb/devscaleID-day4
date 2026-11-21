import {input, number, select} from "@inquirer/prompts";
import {add, substract } from "./libs/math";

const operasi = await select({
    message: "pilih operasi!:",
    choices: [
        {name: "Pertambahan", value: "add"},
        {name: "Pengurangan", value: "substract"}
    ]
});

const inputNumberFirst = await input({message: "masukkan angka pertama"});
const inputNumberSecond = await input({message: "masukkan angka kedua"});

if(operasi === "add"){
    const hasil = add(Number(inputNumberFirst), Number(inputNumberSecond));
    console.log(`hasil operasi: ${operasi}: ${hasil}`);
}else{
    const hasil = substract(Number(inputNumberFirst), Number(inputNumberSecond));
    console.log(`hasil operasi: ${operasi}: ${hasil}`);
}
