/**
 * Handle Request
 * This is the input function where you can perform your implementation.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {*} args function args e.g args.my_secret
 * @returns {Response} https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
async function handleRequest(request, args) {
  // Fun, culturally relevant message for Brazilian friends!
  const message = `
  <html>
    <head>
      <title>Olá Mundo Brasileiro!</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          background-color: #34A853; /* Brazilian green */
          color: #FFCC00; /* Brazilian yellow */
          text-align: center; 
          padding: 50px;
        }
        h1 {
          font-size: 3em;
        }
        p {
          font-size: 1.5em;
          margin: 20px 0;
        }
        .highlight {
          color: #FF5733; /* Carnaval-inspired color */
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <h1>👋 Olá Mundo!</h1>
      <p>Bem-vindos, amigos da Azion! 🌎</p>
      <p>A gente trouxe um <span class="highlight">"Hello World"</span> pra vocês, mas com um jeitinho bem brasileiro... 😎🇧🇷</p>
      <p><span class="highlight">Fala sério</span>, se até o futebol e o samba a gente leva no coração, imagina o "Hello World"! ⚽🎶</p>
      <p>Curta o código, porque aqui é só alegria! 🎉🍻</p>
    </body>
  </html>`;

  return new Response(message, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
    status: 200,
  });
}

export { handleRequest };
