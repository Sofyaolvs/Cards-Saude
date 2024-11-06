const card = document.getElementById('card');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const rollDiceBtn = document.getElementById('rollDiceBtn');
const diceResultEl = document.getElementById('diceResult');
const currentPositionEl = document.getElementById('currentPosition');
const boardCells = document.querySelectorAll('.cell');

let currentPosition = 1; // Posição inicial do jogador

// Conjunto de perguntas e respostas
const cards = [
    {
        questionTitle: 'Artrite Reumatóide ',
        question: ' Descreva sobre o fator reumatoide.',
        answer: `O fator reumatóide se liga a IgG e forma imunocomplexos que se depositam na articulação, causando lesões e um processo inflamatório adicional. 
        São autoanticorpos do tipo IgM que são reativos à porção Fc das IgG.`,
        image: './img/fotoArtrite.png'
    },
    {
        questionTitle: 'Artrite Reumatóide ',
        question: ' Descreva os achados morfológicos na Artrite Reumatóide.',
        answer: `Sinovite: inflamação da membrana sinovial das articulações. 
        Formação do Pannus: tecido inflamatório que danifica a cartilagem e o osso. 
        Infiltrado inflamatório mononuclear: linfócitos e macrófagos. 
        Destruição tecidual: membrana sinovial, cartilagem e osso. 
        Tentativa de reparo: Pannus.`,
        image: '../img/fotoArtrite.png'


    },
    {
        questionTitle: 'Artrite Reumatóide ',
        question: ' O que é uma Articulação Diartrodial?',
        answer: `São articulações que permitem um amplo movimento e são constituídas pelo encontro de dois ou mais ossos, 
        onde suas epífises são envolvidas por uma cartilagem articular (hialina). 
        Entre esses ossos, encontra-se a cavidade articular, que armazena o líquido sinovial produzido pela membrana sinovial, 
        estabilizando a articulação com a cápsula articular.`,
        image: './img/fotoArtrite.png'

    },
    {
        questionTitle: 'Artrite Reumatóide ',
        question: ' Como é transmitida a Tuberculose?',
        answer: `A tuberculose é transmitida através do ar, pela tosse, espirro ou fala de uma pessoa infectada.`,
        image: './img/fotoArtrite.png'


    },
    {
        questionTitle: 'Asma ',
        question: ' Descreva como ocorre a produção excessiva de muco nos pulmões.',
        answer: `A produção de muco ocorre quando células Th2 produzem IL-13, 
        e os mastócitos, por meio da degranulação, liberam leucotrienos e prostaglandinas, 
        resultando em uma produção excessiva de muco pelas células caliciformes.`,
        image: '../img/fotoAsma.png'

    },
    {
        questionTitle: 'Asma ',
        question: ' Descreva como ocorre a Broncoconstrição.',
        answer: `A broncoconstrição ocorre quando um alérgeno (proteico) atua na célula Th2, 
        que libera IL-4, ativando linfócitos que se diferenciam em plasmócitos e produzem IgE, 
        que se liga ao mastócito, tornando-o sensibilizado. Ao reconhecer o alérgeno, 
        o mastócito libera mediadores químicos (histamina, PGE2 e leucotrieno), 
        que causam a contração da musculatura lisa do brônquio e bronquíolo, resultando em broncoconstrição.`,
        image: '../img/fotoAsma.png'

    },
    {
        questionTitle: 'Asma' ,
        question: '  Descreva o processo da Hematose.',
        answer: `No alvéolo pulmonar, há uma grande quantidade de O2 e, no capilar sanguíneo, há CO2. 
        Ocorre uma troca gasosa onde o O2 vai para o capilar para oxigenar os órgãos do corpo, 
        e o CO2 no alvéolo será eliminado pela expiração.`,
        image: '../img/fotoAsma.png'

    },
    {
        questionTitle: 'Asma ',
        question: '  Quais são as células alveolares que participam desse processo e suas funções?',
        answer: `As células alveolares são os pneumócitos do tipo 1 (envolvidos na hematose) e os pneumócitos do tipo 2 (que produzem o surfactante pulmonar para impedir o colamento das paredes dos alvéolos).`,
        image: '../img/fotoAsma.png'

    },
    {
        questionTitle: 'Asma ',
        question: '  Descreva a porção respiratória do sistema respiratório.',
        answer: `A porção respiratória do sistema respiratório inclui: 
        brônquios respiratórios, ductos alveolares, sacos alveolares e alvéolos.`,
        image: '../img/fotoAsma.png'

    },
    {
        questionTitle: 'Asma ',
        question: ' Descreva o que é a Hematose.',
        answer: `A hematose é a transformação do sangue pobre em O2 em sangue rico em O2 que ocorre nos alvéolos pulmonares, 
        e isso acontece por um processo chamado difusão simples.`,
        image: '../img/fotoAsma.png'

    },
    {
        questionTitle: 'Asma ',
        question: '  Descreva a porção condutora do sistema respiratório.',
        answer: `A porção condutora do sistema respiratório inclui: nariz, faringe, laringe, traqueia, brônquios e brônquios terminais.`,
        image: '../img/fotoAsma.png'

    },
    {
        questionTitle: 'Asma ',
        question: ' Quais são as características presentes em cada um?',
        answer: `- Nariz: prepara o ar, aquecendo, umidificando e filtrando (com conchas nasais, pelos e muco). 
        - Faringe: comum ao sistema digestório e respiratório, com epitélio respiratório, conduz o ar até a laringe. 
        - Laringe: possui as pregas vocais que emitem som, tem epitélio respiratório e conduz o ar até a traqueia. 
        - Traqueia: tubo cartilaginoso em formato de letra C, possui cartilagem hialina e pouco músculo liso, revestido por epitélio respiratório.`,
        image: '../img/fotoAsma.png'

    },
    {
        questionTitle: 'Vírus da Imunodeficiência Humana ',
        question: ' Quais são os tratamentos para controlar o HIV?',
        answer: `Terapia Antirretroviral(TAR) como Inibidores da transcrição reversa,inibidores da integrase,]
        inibidores da protease,inibidores da fusão e inibidores da adesão.
            PREP: Profilaxia Pré exposição,
            PEP: Profilaxia Pós exposição(após 72H),
            HAART: Combinação de 3 fármacos.
        o objetivo principal dos antirretrovirais é controlar a infecção, mantendo uma baixa carga viral.`,
        image: '../img/fotoHIV.png'

    },
    {
        questionTitle: 'Vírus da Imunodeficiência Humana',
        question: 'Por que o nosso sistema imune não controla a infecção?',
        answer: `1- Hipermutabilidade do HIV- Alta taxa de mutação, e os anticorpos são ineficazes.\n
                 2- O Vírus consegue evitar o ataque das TCD8.\n
                 3- Inibição das citocinas liberadas pelo Th1.\n
                 4- O HIV ataca e destrói as células TDCD4`,
        image: '../img/fotoHIV.png'

    }, {
        questionTitle: 'Vírus da Imunodeficiência Humana',
        question: 'Quais defesas o nosso sistema imune realiza contra o HIV?',
        answer: `1- Ativação de TCD8, que induz a apoptose de células infectadas ao liberar perfurina e granzima\n
                 2- Anticorpos Anti-HIV, cuja alvo principal são as proteínas do envelope viral`,
        image: '../img/fotoHIV.png'

    }, {
        questionTitle: 'Vírus da Imunodeficiência Humana',
        question: 'Descreva a Infecção Aguda, Infecção Crônica e AIDS.',
        answer: `Infecção aguda: Febre,fadiga,cefaleia,sudorese noturna,problemas gastrointestinais ou pode ser assintomático.
                 Infecção crônica ou período de latência: pode ser assintomático por anos, baixa viremia, mas ocorre a
                 destruição dos linfócitos TCD4 no sangue.
                 Aids: Alta carga viral, 200- TCD4, surgimento de infecções oportunistas`,
        image: '../img/fotoHIV.png'

    },
    {
        questionTitle: 'Vírus da Imunodeficiência Humana',
        question: 'Qual a importância dos Co-receptores?',
        answer: ` É por causa dos receptores que o vírus entra nas células. Como o CCR5 presente nos Macrófagos,Monócitos, 
        Células dentriticas e Linfócitos Thelper, e o CXCR4 presente nos Thelper.`,
        image: '../img/fotoHIV.png'

    },
    {
        questionTitle: 'Vírus da Imunodeficiência Humana',
        question: 'O que é Soropositivo? Janela Imunológica? E período de incubação?',
        answer: `Soropositivo: uma pessoa que tem anticorpos anti-hiv circulando no plasma. Janela imunológica: Período entre a infecção
                pelo HIV e a detecção pelo teste.Período de incubação:Tempo entre a exposição do HIV e o aparecimento dos sintomas.`,
        image: '../img/fotoHIV.png'

    },
    {
        questionTitle: 'Vírus da Imunodeficiência Humana',
        question: 'O que é o HIV?',
        answer: `É um vírus da família retrovírus constituído por RNA fita simples, que
                ataca o sistema imunológico.`,
        image: '../img/fotoHIV.png'

    },
    {
        questionTitle: 'Vírus da Imunodeficiência Humana',
        question: ' Como ocorre a transmissão?',
        answer: `Sexual (transmissão por fluídos),
                Vertical (Mãe para filho), 
                Parenteral(sangue contaminado) e Ocupacional`,
        image: '../img/fotoHIV.png'

    },
    {
        questionTitle: 'Vírus da Imunodeficiência Humana',
        question: ' Quais as células que o HIV infecta?',
        answer: `Infecta Macrófagos,Monócitos,Células Dentriticas e Linfócitos Thelper.`,
        image: '../img/fotoHIV.png'

    },
    {
        questionTitle: 'Dengue',
        question: 'Qual o mecanismo de defesa contra o vírus da dengue?',
        answer: `IO vírus Denv infecta:células musculares,fibroblastos,monócitos e macrófagos.
                Ação da Imunidade Inata: macrógafos infectados-células Nk induzem a apoptose de 
                células infectadas(libera perfurina e granzima). Não resolve!!!
                Ação da Imunidade Adquirida celular:Dentritica ativa Thelper-Th1 libera Interferon
                gama(ativa macrófagos) e IL2 (indução da apoptose de células infectadas).
                Ocorre a ativação dos linfócitos B- Que se transformam em plasmócitos-IGM e IGG.`,
        image: '../img/fotoDengue.png'

    },
    {
        questionTitle: 'Dengue',
        question: 'Qual o tipo de choque que ocorre na dengue?',
        answer: ` O choque típico da dengue é o Hipovolêmico (diminuição do volume sanguíneo), mas também
                pode ser o choque Séptico (Ocorre da liberação exacerbada de mediadores)`,
        image: '../img/fotoDengue.png'

    },
    {
        questionTitle: 'Dengue',
        question: 'Quais são os sintomas de Suspeita de dengue, Alerta de dengue e Dengue hemorrágica?',
        answer: `1-Cefaleia,Dor retroorbital,Mialgia,Artralgia,Petequias(Prova do laço positiva),Leucopenia,Náuseas e vômitos.
            2-Dor abdominal intensa econtinua,Vômitos persistentes,Hepatomegalia, Sangramento de mucosas e 
            Aumento progressivo do hematocrito.
            3-Choque por causa do extravasamento grave de plasma, Sangramento grave e
            Comprometimento de órgãos (como Pulmão,Coração, Fígado, SNC).`,
        image: '../img/fotoDengue.png'

    },
    {
        questionTitle: 'Dengue',
        question: ' Quais são as características do mosquito Aedes aegypti?',
        answer: `Tem hábitos diurnos,vive por 45 dia, deposita ovos que podem ser
                viáveis por até um ano.`,
        image: '../img/fotoDengue.png'

    },
    {
        questionTitle: 'Dengue ',
        question: ' Como ocorre a transmissão?',
        answer: `- A transmissão se dá pelo mosquito fêmea infectado, através da hematofagia.`,
        image: '../img/fotoDengue.png'

    },
    {
        questionTitle: 'Dengue ',
        question: ' Quais são as estruturas do vírus?',
        answer: `É um parasita intracelular obrigatório, apresenta capsídeo e
                envelope, possui 4 sorotipos (Denv1 a Denv4),possui uma única fita de
                RNA com polaridade positiva.`,
        image: '../img/fotoDengue.png'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Quais são as características?',
        answer: ` BAAR de Ziehl-Neelsen, bacilo estreito,alongado,não esporulado,não encapsulado,imóvel,aeróbio
                estrito,parasita intracelular facultativo, parede celular com ácido micólico, sensível à radiação solar e ventilação.`,
        image: '../img/fotoTuberc.jpeg'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Como é transmitida?',
        answer: ` Pela inalação dos bacilos que são eliminados por tosse,espirro,fala por uma
                pessoa com a tuberculose ativa(sem tratamento).`,
        image: '../img/fotoTuberc.jpeg'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Quais são as prevenções?',
        answer: ` Vacina BCG, identificar casos suspeitos,diagnóstico precoce e início
                do tratamento,contato em locais abertos,ventilados.
`,
        image: '../img/fotoTuberc.jpeg'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Quais são os tratamentos?',
        answer: `6 meses a 1 ano (Rifampicina,Etambutal,Isonazida e Pirazinamida), uso de
                antibióticos,tratamento observado por uma equipe multiprofissional.`,
        image: '../img/fotoTuberc.jpeg'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Quais os sintomas?',
        answer: `Febre, perda de peso,escarro com sangue e fadiga.`,
        image: '../img/fotoTuberc.jpeg'
    },
    
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Qual a ação da imunidade inata?',
        answer: `Imunidade inata: inalação dos bacilossistema mucociliar-infecta os alvéolosmacrófago fagocita os bacilos-forma o fagossomo-bacilos se proliferam dentro
                do fagossomo-macrófagos não consegue formar o fagolisossomo(ácido micólico na parede celular)-macrófago se rompevarios bacilos liberados. 
                Células nk: faz a lise dos macrófagos infectados com perfurina e granzima). Imunidade Inata não resolve!`,
        image: '../img/fotoTuberc.jpeg'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' O que é?',
        answer: `É uma bactéria causadora da tuberculose,que afeta os pulmões.`,
        image: '../img/fotoTuberc.jpeg'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Qual a ação da imunidade adquirida celular?',
        answer: `LTH1 ativado libera: Interferon gama: Ativa macrofágoscélulas epitélioides-células gigantes.
            IL2: Ativa Linfócitos Tcd8, apoptose dos macrófagos infectados (ação de perfurina e granzima).
            TNF: Atraem as células de defesa para o local da inflamação para formar o granuloma.`,
        image: '../img/fotoTuberc.jpeg'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Qual a ação da imunidade adquirida celular?',
        answer: `Célula dentritica fagocita o bacilos e apresenta para Thelper-expansão clonal da Thelper-diferenciação em Th1.
                    Ex1: Célula dentritica libera IL4 (transformas os Linfócitos em Th2, que enfraquece os macrófagos)
                    Ex2: Célula dentritica libera IL12 (transforma os Linfócitos em Th1, que potencializa os macrógafos. IL12 é a resposta imune correta para
                    combater os bacilos!`,
        image: '../img/fotoTuberc.jpeg'
    },
    {
        questionTitle: 'Mycobacterium tuberculosis ',
        question: ' Qual é o tipo de Hipersensibilidade presente?',
        answer: `É a hipersensibilidade do tipo 4, onde o próprio sistema imune que causa a
lesão tecidual nos pulmões. A partir domomento que a Thelper ativa os macrófagos e linfócitos tcd8`,
        image: '../img/fotoTuberc.jpeg'
    },
    
];



const questionTitleElement = document.getElementById('questionTitle');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const cardElement = document.getElementById('card');
const nextCardBtn = document.getElementById('nextCardBtn');
const imageElement = document.getElementById('image');  // Elemento de imagem

let currentIndex = 0;
let showingAnswer = false; // Variável para controlar se a resposta está sendo exibida

// Função para sortear um cartão aleatório
function drawRandomCard() {
    // Gera um índice aleatório
    currentIndex = Math.floor(Math.random() * cards.length); 
    const card = cards[currentIndex]; // Seleciona o cartão aleatório

    // Atualiza o conteúdo do cartão com a pergunta
    questionTitleElement.textContent = card.questionTitle;
    questionElement.textContent = card.question;
    answerElement.textContent = 'Resposta aparecerá aqui.';
    imageElement.src = card.image; // Atualiza o caminho da imagem

    // Remove a classe 'flipped' para garantir que o cartão esteja na frente
    cardElement.classList.remove('flipped');
    showingAnswer = false; // Reseta para não mostrar a resposta
}

// Função para mostrar a resposta
function showAnswer() {
    if (!showingAnswer) {
        const card = cards[currentIndex];  // Obtém o cartão atual usando o índice
        answerElement.textContent = card.answer;  // Atualiza a resposta
        cardElement.classList.add('flipped'); // Vira o cartão para mostrar a resposta
        showingAnswer = true; // Marca que a resposta está sendo exibida
    } else {
        // Se já estiver mostrando a resposta, volte para a pergunta
        answerElement.textContent = 'Resposta aparecerá aqui.';
        cardElement.classList.remove('flipped'); // Vira o cartão para mostrar a pergunta
        showingAnswer = false; // Marca que estamos de volta à pergunta
    }
}

// Evento para o botão "Próxima Pergunta"
nextCardBtn.addEventListener('click', () => {
    drawRandomCard(); // Sorteia um novo cartão
    answerElement.textContent = 'Resposta aparecerá aqui.'; // Reseta a resposta
});

// Adiciona um evento de clique ao cartão para mostrar ou voltar à pergunta
cardElement.addEventListener('click', showAnswer);

// Sorteia o primeiro cartão quando a página carrega
window.onload = drawRandomCard;

