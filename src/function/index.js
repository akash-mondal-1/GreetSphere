<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World com um Toque Brasileiro</title>
    <style>
        body {
            background: linear-gradient(135deg, #00A859, #FFD700);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        h1 {
            color: #003366;
        }
        .highlight {
            color: red;
            font-weight: bold;
        }
        .play-button {
            padding: 10px 20px;
            background-color: #FF4500;
            color: white;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
        }
        .play-button:hover {
            background-color: #FF6347;
        }
    </style>
</head>
<body>
    <h1>👋 Olá Mundo!</h1>
    <p>Bem-vindos, amigos da Azion! 🌎</p>
    <p>Apresentamos a vocês um <span class="highlight">"Olá Mundo" com um toque do Brasil... e um pouco de phonk</span> no fundo para animar tudo! 🎶🇧🇷</p>
    <p><span class="highlight">Sério</span>, até colocamos o groove brasileiro no código! 🕺⚽</p>
    <p>Aproveitem o código e sintam a vibe tech com um toque do Brasil! 🎉🍻</p>

    <script>
        // Criar o elemento de áudio e definir a fonte para o arquivo de música
        const audio = document.createElement("audio");
        audio.src = "Brazill #shorts #poorda2.mp3"; // Certifique-se de que este arquivo está no mesmo diretório
        audio.preload = "auto";

        // Criar botão de play
        const playButton = document.createElement("button");
        playButton.className = "play-button";
        playButton.innerText = "Tocar Phonk Brasileiro 🎶";

        // Função para alternar play/pause
        playButton.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                playButton.innerText = "Pausar Phonk Brasileiro 🎶";
            } else {
                audio.pause();
                playButton.innerText = "Tocar Phonk Brasileiro 🎶";
            }
        });

        // Adicionar o botão de play ao corpo do documento
        document.body.appendChild(playButton);
    </script>
</body>
</html>
