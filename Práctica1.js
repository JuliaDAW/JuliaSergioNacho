const completar = document.getElementById("id_calendario")
const dias = new Array(31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31)
let fecha = new Date(window.prompt("Dame una fecha en este formato: MM/DD/YYYY", "10/19/2023"))
let calendario = new String()

let fecham = new Date(fecha)
fecham.setDate(1)

let hoy = fecha.getDate()
let cont = 1
let que_mes = fecha.getMonth()
let mes = dias[que_mes]

let inicial = fecham.getDay()
if(inicial == 0){
    inicial = 7
}
calendario += `<table><caption>${fecha.toLocaleDateString()}</caption><tr>`
calendario += "<th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th><th>Domingo</th></tr><tr>"

function crear_mes(){
    for(let i = 1; i<=7; i++){
        if(i >= inicial){
            calendario += `<td>${cont++}</td>`
        }else {
            calendario += "<td></td>"
        }
    }
    while(cont < mes){
        calendario += "</tr>"
        calendario += "<tr>"
        for(let i = 0; i <= 6; i++){
            if(cont > mes){
                calendario += "<td></td>"
            }else{
                if(cont == hoy){
                    calendario += `<td style='color:red'>${cont}</td>`
                } else{
                    calendario += `<td>${cont}</td>`
                }
            }
            cont++
        }
        calendario += "</tr>"
    }
    calendario += "</table>"
    completar.innerHTML += calendario
}
crear_mes()