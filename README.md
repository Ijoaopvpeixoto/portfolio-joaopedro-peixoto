# Portfólio — João Pedro V. Peixoto

Portfólio pessoal (currículo online) desenvolvido para a Atividade Prática de
Fundamentos da Programação Web (UNINTER), utilizando **apenas HTML5, CSS3 e
JavaScript puros** (sem frameworks ou bibliotecas).

## Estrutura do projeto

```
portfolio-joaopedro-peixoto/
├── index.html   → página única, com as 4 seções (Sobre mim, Formação, Portfólio, Contato)
├── style.css    → estilos, temas claro/escuro e responsividade
├── script.js    → menu mobile, alternância de tema e validação do formulário
└── README.md    → este arquivo
```

Navegação: single page com âncoras (`#sobre`, `#formacao`, `#portfolio`, `#contato`),
menu fixo no topo, visível em todas as seções.

## Como publicar no GitHub Pages

1. Crie um repositório **público** no GitHub chamado, por exemplo,
   `portfolio-joaopedro-peixoto` (o nome deve conter seu nome, conforme exigido
   na atividade).
2. Envie estes 4 arquivos para o repositório. No terminal, dentro da pasta do projeto:

   ```bash
   git init
   git add .
   git commit -m "Primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/Ijoaopvpeixoto/portfolio-joaopedro-peixoto.git
   git push -u origin main
   ```

3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`. Clique em **Save**.
5. Aguarde 1–2 minutos. O site ficará disponível em:

   ```
   https://ijoaopvpeixoto.github.io/portfolio-joaopedro-peixoto/
   ```

6. Teste o link em uma aba anônima do navegador para confirmar que está público
   e acessível (o endereço na barra do navegador não deve conter `127.0.0.1`
   nem `localhost`).

## Checklist antes da entrega

- [ ] Site publicado e acessível pelo link do GitHub Pages
- [ ] Repositório público no GitHub com os 4 arquivos
- [ ] Testar o menu em celular/tablet (responsividade)
- [ ] Testar o formulário de contato: campos vazios, e-mail inválido, envio correto
- [ ] Testar o botão de tema claro/escuro
- [ ] Capturar prints de cada seção com a URL do site (não localhost) visível
      na barra de endereço, para colar no documento de entrega
