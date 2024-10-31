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
            animation: fadeIn 2s; /* Fade in effect for the body */
          }
          h1 {
            font-size: 3em;
            color: #003366; /* Dark blue for Brazil's flag */
            opacity: 0; /* Start hidden for fade-in */
            animation: fadeIn 2s forwards; /* Fade-in effect */
            animation-delay: 0.5s; /* Delay before fade-in */
          }
          p {
            font-size: 1.5em;
            margin: 20px 0;
          }
          .highlight {
            color: #FF5733;
            font-weight: bold;
          }
          .flag-emoji {
            display: inline-block;
            font-size: 4em; /* Increase size of the flag emoji */
            animation: rotate 4s linear infinite; /* Rotate animation for the flag emoji */
          }
          .thumbs-up {
            cursor: pointer;
            font-size: 2em; /* Size for thumbs up icon */
            margin-top: 20px;
          }
          .discover-button {
            background-color: #FFCC00; /* Button background color */
            color: #003366; /* Button text color */
            border: none;
            padding: 10px 20px;
            font-size: 1.2em;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 20px;
            transition: background-color 0.3s;
          }
          .discover-button:hover {
            background-color: #FFD700; /* Button hover color */
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
        <script>
          function handleFeedback() {
            alert('Thank you for your feedback! 🎉');
          }

          function showFunFact() {
            alert('Did you know? Brazil is home to the Amazon Rainforest, which is the largest rainforest in the world and is vital for the Earth\'s climate! 🌿');
          }
        </script>
      </head>
      <body>
        <h1>👋 Olá Mundo!</h1>
        <p>Bem-vindos, amigos da Azion! 🌎</p>
        <p>A gente trouxe um <span class="highlight">"Hello World"</span> pra vocês, com aquele toque de Brasil... e um pouco de <span class="highlight">phonk</span> no background pra animar! 🎶<span class="flag-emoji">🇧🇷</span></p>
        <p><span class="highlight">Fala sério</span>, até no código a gente coloca o groove brasileiro! 🕺⚽</p>
        <p>Curta o código e sinta a vibe tech com uma pitada de Brasil! 🎉🍻</p>
        
        <div>
          <span class="thumbs-up" onclick="handleFeedback()">👍</span> <!-- Thumbs up icon for feedback -->
          <p>Se você gostou, clique no "👍"! 👆</p>
        </div>

        <button class="discover-button" onclick="showFunFact()">Click to Discover Brazil</button> <!-- Discover button -->
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
