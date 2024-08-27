const questions = [
    {
        question: "Quem é conhecido como o 'Rei do Rock'?",
        options: ["Elvis Presley", "Mick Jagger", "Freddie Mercury"],
        answer: "Elvis Presley"
    },
    
    {
        question: "Qual banda é famosa pela música 'Stairway to Heaven'?",
        options: ["Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
        answer: "Led Zeppelin"
    },
    
    {
        question: "Qual movimento musical foi iniciado pelo álbum 'Nevermind' do Nirvana?",
        options: ["Grunge", "Punk", "Heavy Metal"],
        answer: "Grunge"
    },
    
    {
        question: "Qual banda é conhecida por ter lançado o álbum 'The Dark Side of the Moon'?",
        options: ["Pink Floyd", "The Beatles", "Queen"],
        answer: "Pink Floyd"
    },
    
    {
        question: "Quem é o guitarrista principal da banda AC/DC?",
        options: ["Angus Young", "Slash", "Jimmy Page"],
        answer: "Angus Young"
    },
    
    {
        question: "Qual música dos Beatles foi composta por John Lennon e é considerada um hino pela paz?",
        options: ["Imagine", "Let It Be", "Hey Jude"],
        answer: "Imagine"
    },
    
    {
        question: "Qual banda britânica é conhecida por seus elaborados shows ao vivo e pela música 'Bohemian Rhapsody'?",
        options: ["Queen", "The Rolling Stones", "The Who"],
        answer: "Queen"
    },
    
    {
        question: "Quem é o vocalista da banda Guns N' Roses?",
        options: ["Axl Rose", "Bono Vox", "Steven Tyler"],
        answer: "Axl Rose"
    },
    
    {
        question: "Qual álbum dos Beatles é frequentemente considerado o melhor álbum de todos os tempos?",
        options: ["Abbey Road", "Sgt. Pepper's Lonely Hearts Club Band", "Revolver"],
        answer: "Sgt. Pepper's Lonely Hearts Club Band"
    },
    
    {
        question: "Qual banda é conhecida como os 'Pioneiros do Heavy Metal'?",
        options: ["Black Sabbath", "Metallica", "Iron Maiden"],
        answer: "Black Sabbath"
    },
    
    {
        question: "Qual é o nome do primeiro álbum do Led Zeppelin?",
        options: ["Led Zeppelin", "Led Zeppelin II", "Physical Graffiti"],
        answer: "Led Zeppelin"
    },
    
    {
        question: "Quem é conhecido como o 'Deus da Guitarra' e tocou na banda Cream?",
        options: ["Eric Clapton", "Jimi Hendrix", "Jimmy Page"],
        answer: "Eric Clapton"
    },
    
    {
        question: "Qual vocalista dos Rolling Stones é famoso por suas performances energéticas e carisma no palco?",
        options: ["Mick Jagger", "Robert Plant", "Roger Daltrey"],
        answer: "Mick Jagger"
    },
    
    {
        question: "Qual música do AC/DC começa com um icônico riff de guitarra e fala sobre ser 'back in black'?",
        options: ["Back in Black", "Highway to Hell", "Thunderstruck"],
        answer: "Back in Black"
    },
    
    {
        question: "Quem foi o fundador e principal compositor da banda Nirvana?",
        options: ["Kurt Cobain", "Dave Grohl", "Krist Novoselic"],
        answer: "Kurt Cobain"
    },
    
    {
        question: "Qual é o nome do guitarrista conhecido por seu estilo único e por tocar na banda The Rolling Stones?",
        options: ["Keith Richards", "Brian May", "Pete Townshend"],
        answer: "Keith Richards"
    },
    
    {
        question: "Qual banda é conhecida por suas elaboradas maquiagens e performances ao vivo, além de músicas como 'Rock and Roll All Nite'?",
        options: ["KISS", "Alice Cooper", "Twisted Sister"],
        answer: "KISS"
    },
    
    {
        question: "Qual é o nome da banda liderada por Jim Morrison?",
        options: ["The Doors", "The Byrds", "The Beach Boys"],
        answer: "The Doors"
    },
    
    {
        question: "Qual música de Jimi Hendrix é conhecida por sua performance incendiária em Woodstock?",
        options: ["The Star-Spangled Banner", "Purple Haze", "Hey Joe"],
        answer: "The Star-Spangled Banner"
    },
    
    {
        question: "Qual banda britânica é famosa pela música 'Comfortably Numb'?",
        options: ["Pink Floyd", "Genesis", "Yes"],
        answer: "Pink Floyd"
    },
    
    {
        question: "Qual membro dos Beatles era conhecido por tocar a bateria?",
        options: ["Ringo Starr", "Paul McCartney", "George Harrison"],
        answer: "Ringo Starr"
    },
    
    {
        question: "Qual foi o primeiro single lançado pelos Rolling Stones?",
        options: ["Come On", "I Wanna Be Your Man", "Paint It Black"],
        answer: "Come On"
    },
    
    {
        question: "Qual álbum do Metallica é frequentemente chamado de 'The Black Album'?",
        options: ["Metallica", "Ride the Lightning", "Master of Puppets"],
        answer: "Metallica"
    },
    
    {
        question: "Qual é o nome do vocalista da banda Queen?",
        options: ["Freddie Mercury", "Brian May", "Roger Taylor"],
        answer: "Freddie Mercury"
    },
    
    {
        question: "Qual banda é conhecida pelo álbum 'Hotel California'?",
        options: ["Eagles", "Fleetwood Mac", "Lynyrd Skynyrd"],
        answer: "Eagles"
    },
    
    {
        question: "Qual música dos Beatles contém a famosa letra 'Yesterday, all my troubles seemed so far away'?",
        options: ["Yesterday", "Hey Jude", "Let It Be"],
        answer: "Yesterday"
    },
    
    {
        question: "Qual banda é famosa pelo hit 'Sweet Child O' Mine'?",
        options: ["Guns N' Roses", "Aerosmith", "Bon Jovi"],
        answer: "Guns N' Roses"
    },
    
    {
        question: "Quem foi o vocalista da banda Led Zeppelin?",
        options: ["Robert Plant", "Jimmy Page", "John Bonham"],
        answer: "Robert Plant"
    },
    
    {
        question: "Qual música de David Bowie é conhecida pela frase 'Ground control to Major Tom'?",
        options: ["Space Oddity", "Heroes", "Life on Mars?"],
        answer: "Space Oddity"
    },
    
    {
        question: "Qual banda é conhecida por seus longos solos de guitarra e hits como 'Free Bird'?",
        options: ["Lynyrd Skynyrd", "ZZ Top", "The Allman Brothers Band"],
        answer: "Lynyrd Skynyrd"
    },
    
    {
        question: "Qual é o nome do baterista do Led Zeppelin?",
        options: ["John Bonham", "Keith Moon", "Neil Peart"],
        answer: "John Bonham"
    },
    
    {
        question: "Qual banda de Seattle ajudou a popularizar o grunge nos anos 1990?",
        options: ["Nirvana", "Pearl Jam", "Soundgarden"],
        answer: "Nirvana"
    },
    
    {
        question: "Qual banda de heavy metal é famosa por músicas como 'Enter Sandman' e 'Master of Puppets'?",
        options: ["Metallica", "Slayer", "Megadeth"],
        answer: "Metallica"
    },
    
    {
        question: "Quem foi o guitarrista e vocalista principal da banda The Clash?",
        options: ["Joe Strummer", "Mick Jones", "Paul Simonon"],
        answer: "Joe Strummer"
    },
    
    {
        question: "Qual é o nome da primeira música do álbum 'Back in Black' do AC/DC?",
        options: ["Hells Bells", "Back in Black", "You Shook Me All Night Long"],
        answer: "Hells Bells"
    },
    
    {
        question: "Qual banda britânica de rock progressivo é conhecida pela música 'Roundabout'?",
        options: ["Yes", "King Crimson", "Genesis"],
        answer: "Yes"
    },
    
    {
        question: "Qual cantor foi apelidado de 'The Boss' e é famoso por músicas como 'Born to Run'?",
        options: ["Bruce Springsteen", "Bob Dylan", "Tom Petty"],
        answer: "Bruce Springsteen"
    },
    
    {
        question: "Qual banda dos anos 80 é conhecida por hits como 'Jump' e 'Panama'?",
        options: ["Van Halen", "Bon Jovi", "Def Leppard"],
        answer: "Van Halen"
    },
    
    {
        question: "Qual membro dos Beatles foi assassinado em 1980?",
        options: ["John Lennon", "George Harrison", "Paul McCartney"],
        answer: "John Lennon"
    },
    
    {
        question: "Qual banda americana é famosa por músicas como 'Dream On' e 'Sweet Emotion'?",
        options: ["Aerosmith", "Journey", "The Doors"],
        answer: "Aerosmith"
    },
    
    {
        question: "Qual banda de rock é conhecida por ter dois irmãos, Liam e Noel Gallagher?",
        options: ["Oasis", "Blur", "The Stone Roses"],
        answer: "Oasis"
    },
    
    {
        question: "Qual músico tocou guitarra na banda Cream e é famoso por hits como 'Layla'?",
        options: ["Eric Clapton", "Jimi Hendrix", "Jeff Beck"],
        answer: "Eric Clapton"
    }
];

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions [currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; 
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); 
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};
