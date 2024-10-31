/**
 * Handle Request
 * This is the input function where you can perform your implementation.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {*} args function args e.g args.my_secret
 * @returns {Response} https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
async function handleRequest(request, args) {
  const htmlContent = `
    <html>
      <head>
        <title>Olá Mundo Brasileiro!</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            background: linear-gradient(135deg, #34A853, #FFCC00); /* Brazilian flag-inspired gradient */
            color: #FFFFFF; /* White text for contrast */
            text-align: center; 
            padding: 50px;
          }
          h1 {
            font-size: 3em;
            color: #003366; /* Dark blue for Brazil's flag */
          }
          p {
            font-size: 1.5em;
            margin: 20px 0;
          }
          .highlight {
            color: #FF5733;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1>👋 Olá Mundo!</h1>
        <p>Bem-vindos, amigos da Azion! 🌎</p>
        <p>A gente trouxe um <span class="highlight">"Hello World"</span> pra vocês, com aquele toque de Brasil... e um pouco de <span class="highlight">phonk</span> no background pra animar! 🎶🇧🇷</p>
        <p><span class="highlight">Fala sério</span>, até no código a gente coloca o groove brasileiro! 🕺⚽</p>
        <p>Curta o código e sinta a vibe tech com uma pitada de Brasil! 🎉🍻</p>
      </body>
    </html>`;

  return new Response(htmlContent, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
    status: 200,
  });
}

export { handleRequest };
