function jogar() 
{
  var rodada = 1;
  const nomeusuario = prompt ("Digite seu nome, jogador")
  
  if (nomeusuario.includes("0") || nomeusuario.includes("1") || nomeusuario.includes("2") ||
  nomeusuario.includes("3") || nomeusuario.includes("4") || nomeusuario.includes("5") ||
  nomeusuario.includes("6") || nomeusuario.includes("7") || nomeusuario.includes("8") ||
  nomeusuario.includes("9")) 
  {
  alert("Nome inválido! Não pode conter números.");
  }
   
  else {
    numeroaleatoriojogador = Math.floor(Math.random() * 456) + 1
    
    alert ("Seja bem-vindo " + nomeusuario + " - Jogador número " + numeroaleatoriojogador)
    

  while (rodada <= 3) 
    {
    
    console.log("Rodada " + rodada);
    escolhajogador = prompt("Nível " + rodada + " Escolha o vidro (1, 2 ou 3)? ");
    pisoquebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhajogador > 3)
    {
      alert ("O guarda te empurrou da ponte por tentativa de trapaça... Tente novamente!")
      break
    }
    else if (escolhajogador == pisoquebrado) 
    {
      alert("OPS! O vidro quebrou, você caiu... Boa sorte na próxima vez!");
      break;
    } 
    else 
    {
      alert("UFA! Seu vidro se manteve inteiro. " + "O número do piso quebrado era: " + pisoquebrado);
    }
    rodada = rodada + 1;
  }

  if (rodada == 4)
  {
    alert ("Você concluiu essa fase do jogo " + "Meus parabéns " + nomeusuario + "!")
  }

}
}
