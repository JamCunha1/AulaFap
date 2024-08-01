function verificarSinal(number){
  if (number > 0) {
    console.log('Numero positivo')
  } else if (number == 0 ) {
    console.log('Número igual a zero')
  } else if (number < 0) {
    console.log('Numero negativo')
  }
}
console.log(verificarSinal(-2))