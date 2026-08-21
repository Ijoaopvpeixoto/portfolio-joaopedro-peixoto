/* ==========================================================================
   script.js
   Todas as interações do portfólio, em JavaScript puro (sem frameworks),
   conforme exigido na atividade.
   ========================================================================== */

// Executa somente depois que o HTML estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  atualizarAnoRodape();
  configurarMenuMobile();
  configurarTemaClaroEscuro();
  configurarFormularioContato();
  configurarFechamentoModal();
});

/* --------------------------------------------------------------------------
   1) Ano atual no rodapé
   -------------------------------------------------------------------------- */
function atualizarAnoRodape() {
  const spanAno = document.getElementById('ano-atual');
  if (spanAno) {
    spanAno.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   2) Menu responsivo (mostra/esconde em dispositivos móveis)
   -------------------------------------------------------------------------- */
function configurarMenuMobile() {
  const botaoMenu = document.getElementById('menu-toggle');
  const nav = document.getElementById('menu-nav');

  botaoMenu.addEventListener('click', () => {
    const estaAberto = nav.classList.toggle('is-open');
    botaoMenu.classList.toggle('is-open', estaAberto);
    botaoMenu.setAttribute('aria-expanded', String(estaAberto));
    botaoMenu.setAttribute('aria-label', estaAberto ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha o menu automaticamente ao clicar em um link (útil no mobile)
  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      botaoMenu.classList.remove('is-open');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   3) Alternância de tema claro/escuro
   O tema escolhido é salvo no localStorage para persistir entre visitas.
   -------------------------------------------------------------------------- */
function configurarTemaClaroEscuro() {
  const botaoTema = document.getElementById('theme-toggle');
  const raizHtml = document.documentElement;
  const CHAVE_ARMAZENAMENTO = 'tema-preferido';

  // Recupera preferência salva; caso não exista, mantém o padrão (escuro)
  const temaSalvo = localStorage.getItem(CHAVE_ARMAZENAMENTO);
  if (temaSalvo === 'light') {
    raizHtml.setAttribute('data-theme', 'light');
  }

  botaoTema.addEventListener('click', () => {
    const temaAtual = raizHtml.getAttribute('data-theme');
    const novoTema = temaAtual === 'light' ? 'dark' : 'light';

    if (novoTema === 'light') {
      raizHtml.setAttribute('data-theme', 'light');
    } else {
      raizHtml.removeAttribute('data-theme'); // ausência do atributo = tema escuro (padrão)
    }

    localStorage.setItem(CHAVE_ARMAZENAMENTO, novoTema);
  });
}

/* --------------------------------------------------------------------------
   4) Validação e simulação de envio do formulário de contato
   -------------------------------------------------------------------------- */
function configurarFormularioContato() {
  const formulario = document.getElementById('contact-form');

  const campoNome = document.getElementById('nome');
  const campoEmail = document.getElementById('email');
  const campoMensagem = document.getElementById('mensagem');

  const erroNome = document.getElementById('erro-nome');
  const erroEmail = document.getElementById('erro-email');
  const erroMensagem = document.getElementById('erro-mensagem');

  // Expressão regular simples para validar o formato "usuario@dominio.com"
  const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // impede o recarregamento da página (não há backend real)

    let formularioValido = true;

    // Limpa mensagens de erro e estilos de campos inválidos da tentativa anterior
    [campoNome, campoEmail, campoMensagem].forEach((campo) => campo.classList.remove('is-invalid'));
    [erroNome, erroEmail, erroMensagem].forEach((span) => (span.textContent = ''));

    // Validação: campo nome não pode estar vazio
    if (campoNome.value.trim() === '') {
      erroNome.textContent = 'Por favor, informe seu nome.';
      campoNome.classList.add('is-invalid');
      formularioValido = false;
    }

    // Validação: e-mail obrigatório e em formato válido
    if (campoEmail.value.trim() === '') {
      erroEmail.textContent = 'Por favor, informe seu e-mail.';
      campoEmail.classList.add('is-invalid');
      formularioValido = false;
    } else if (!REGEX_EMAIL.test(campoEmail.value.trim())) {
      erroEmail.textContent = 'Informe um e-mail válido (ex: usuario@dominio.com).';
      campoEmail.classList.add('is-invalid');
      formularioValido = false;
    }

    // Validação: mensagem não pode estar vazia
    if (campoMensagem.value.trim() === '') {
      erroMensagem.textContent = 'Escreva uma mensagem antes de enviar.';
      campoMensagem.classList.add('is-invalid');
      formularioValido = false;
    }

    if (!formularioValido) {
      return; // interrompe o envio se algum campo estiver inválido
    }

    // Simulação de envio: como não há servidor real, apenas limpamos o formulário
    // e exibimos uma confirmação visual ao usuário.
    formulario.reset();
    abrirModalConfirmacao();
  });
}

/* --------------------------------------------------------------------------
   5) Modal de confirmação de envio
   -------------------------------------------------------------------------- */
function abrirModalConfirmacao() {
  const overlay = document.getElementById('modal-overlay');
  overlay.hidden = false;
  document.getElementById('modal-close').focus();
}

function configurarFechamentoModal() {
  const overlay = document.getElementById('modal-overlay');
  const botaoFechar = document.getElementById('modal-close');

  const fecharModal = () => {
    overlay.hidden = true;
  };

  botaoFechar.addEventListener('click', fecharModal);

  // Fecha o modal também ao clicar fora da caixa de diálogo
  overlay.addEventListener('click', (evento) => {
    if (evento.target === overlay) {
      fecharModal();
    }
  });

  // Fecha o modal com a tecla Esc
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && !overlay.hidden) {
      fecharModal();
    }
  });
}
