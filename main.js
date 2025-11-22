alert("Hallo world")

function qoshgich(a,b){
    return Math.round(a * b)
}
let a = Number(prompt("Birinchi raqam"))
let b = Number(prompt("Ikkinchi raqam"))
let natija = qoshgich(a,b);
alert(`
    ${natija}
`)
if (natija > 0){
    let togri = confirm("Natija to'gri")
    console.log(togri)
}else if(natija < 0){
    let hato = confirm("Natija hato")
    console.log(hato)
}else{
    let tent = confirm("Natija 0 ga teng")
    console.log(teng)
}