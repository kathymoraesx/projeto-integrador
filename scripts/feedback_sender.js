// Seleção das estrelas
const allStar = document.querySelectorAll('.rating-stars .star');

// Lógica de seleção das estrelas
allStar.forEach((item, idx) => {
  item.addEventListener('click', function() {
    let click = 0;
    // Desmarcando todas as estrelas
    allStar.forEach(i => {
      i.classList.replace('ph-fill', 'ph');  // Troca o ícone de estrela preenchida para estrela vazia
      i.classList.remove('active');          // Remove a classe ativa
    });
    // Marcando as estrelas até o índice clicado
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace('ph', 'ph-fill'); // Marca as estrelas até o índice clicado
        allStar[i].classList.add('active');            // Adiciona a classe ativa
      } else {
        allStar[i].classList.replace('ph-fill', 'ph'); // Reseta as estrelas após o índice
        allStar[i].classList.remove('active');
      }
    }
  });
});

// Função para resetar o formulário
function resetFeedbackForm() {
  // Limpar o conteúdo do textarea
  const textarea = document.querySelector('textarea[name="opinion"]');
  textarea.value = '';

  // Desmarcar as estrelas
  allStar.forEach(star => {
    star.classList.replace('ph-fill', 'ph');  // Troca todas as estrelas preenchidas para vazias
    star.classList.remove('active');         // Remove a classe ativa
  });

  // Limpar o valor da classificação numérica
  const ratingInput = document.querySelector('.client-rating');
  ratingInput.value = '';
}

// Evento do botão "Enviar"
document.querySelector('.submit').addEventListener('click', function(event) {
  event.preventDefault(); // Impede o envio real do formulário
  
  // Exibir alerta de sucesso
  alert('Mensagem Enviada com Sucesso!');
  
  // Resetar o formulário
  resetFeedbackForm();
});

// Evento do botão "Cancelar"
document.querySelector('.cancel').addEventListener('click', function(event) {
  event.preventDefault(); // Impede o envio real do formulário
  
  // Resetar o formulário sem mostrar alerta
  resetFeedbackForm();
});
