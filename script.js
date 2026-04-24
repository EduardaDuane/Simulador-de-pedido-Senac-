function calcular(){

    let hamburguer = document.getElementById("hamburguer")
    let batata = document.getElementById("batata")
    let nuggets = document.getElementById("nuggets")
    let suco = document.getElementById("suco")
    let pizza = document.getElementById("pizza")
    let sorvete = document.getElementById("sorvete")

    let total = 0

    let itens = ""

    if(hamburguer.checked){
        total = total + 62,50
        itens = itens + "hamburguer 🍔 <br>"
    }

    if(batata.checked){
        total = total + 22,50
        itens = itens + "Batata Frita 🍟 <br>"
    }

    if(nuggets.checked){
        total = total + 15,50
        itens = itens + "Nuggets 🐔 <br>"
    }
    if(suco.checked){
        total = total + 12,50
        itens = itens + "Suco natural de laranja 🥤 <br>"
    }

    if(sorvete.checked){
        total = total + 35,50
        itens = itens + "Sorvete 🍦 <br>"
    }

    if(pizza.checked){
        total = total + 102,50
        itens = itens + "Pizza de 6 queijos 🍕 <br>"
    }

    let resultado = document.getElementById("resultado")

    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos de um item!"
        return
    }

    let subtotal = total
    let desconto = 0

    if(subtotal >= 60){
        desconto = subtotal * 0.10
    }
     
    let entrega = 5

    if(subtotal - desconto >=60){
        entrega= 0 
    }

    let totalFinal = subtotal - desconto + entrega

    resultado.innerHTML=
    "<strong>Itens:</strong><br>" + itens + 
    "<br> Subtotal: R$" + subtotal.toFixed(2)+
    "<br> Desconto: R$" + desconto.toFixed(2) +
    "<br> Entrega: R$" + entrega.toFixed(2) +
    "<br><strong> : R$" + totalFinal.toFixed(2) + "</strong>"

}
