// ============================================================
// Caccia alle Parole - Lógica completa do jogo em italiano
// ============================================================

// Configuração das 6 rodadas: 1 Facile, 1 Difficile, 2 Super Difficile, 2 Estremo
const RODADAS = [
  {
    numero: 1,
    nivel: "Facile",
    tema: "Cibo",
    tamanhoGrade: 8,
    permitirInvertida: false,
    permitirDiagonal: false,
    pontosPorPalavra: 100,
    palavras: [
      {
        palavra: "MELA",
        dica: "Frutto rosso o verde molto croccante.",
        explicacao: "MELA = frutto comune dei meleti (mela)."
      },
      {
        palavra: "PANE",
        dica: "Alimento cotto al forno fatto con farina e acqua.",
        explicacao: "PANE = base della tavola italiana, fatto di farina e lievito."
      },
      {
        palavra: "LATTE",
        dica: "Bevanda bianca ricca di calcio.",
        explicacao: "LATTE = liquido bianco prodotto dai mammiferi."
      }
    ]
  },
  {
    numero: 2,
    nivel: "Difficile",
    tema: "Animali",
    tamanhoGrade: 9,
    permitirInvertida: true,
    permitirDiagonal: false,
    pontosPorPalavra: 150,
    palavras: [
      {
        palavra: "TARTARUGA",
        dica: "Rettile lento che porta la casa sulla schiena.",
        explicacao: "TARTARUGA = rettile protetto da un guscio rigido."
      },
      {
        palavra: "FARFALLA",
        dica: "Insetto con ali grandi e molto colorate.",
        explicacao: "FARFALLA = insetto che nasce da un bruco."
      },
      {
        palavra: "SQUALO",
        dica: "Grande pesce predatore dei mari.",
        explicacao: "SQUALO = grande pesce cartilagineo dell'oceano."
      },
      {
        palavra: "CIVETTA",
        dica: "Uccello notturno dagli occhi grandi e rotondi.",
        explicacao: "CIVETTA = rapace notturno simbolo di saggezza."
      }
    ]
  },
  {
    numero: 3,
    nivel: "Super Difficile",
    tema: "Parti del corpo",
    tamanhoGrade: 10,
    permitirInvertida: true,
    permitirDiagonal: true,
    pontosPorPalavra: 200,
    palavras: [
      {
        palavra: "GINOCCHIO",
        dica: "Articolazione centrale della gamba.",
        explicacao: "GINOCCHIO = unisce la coscia alla parte inferiore della gamba."
      },
      {
        palavra: "SPALLA",
        dica: "Parte del corpo che collega il braccio al tronco.",
        explicacao: "SPALLA = articolazione superiore del braccio."
      },
      {
        palavra: "GOMITO",
        dica: "Articolazione che permette di piegare il braccio.",
        explicacao: "GOMITO = si trova a metà del braccio."
      },
      {
        palavra: "POLSO",
        dica: "Punto in cui la mano si unisce all'avambraccio.",
        explicacao: "POLSO = dove si mette l'orologio."
      }
    ]
  },
  {
    numero: 4,
    nivel: "Super Difficile",
    tema: "Cibo",
    tamanhoGrade: 10,
    permitirInvertida: true,
    permitirDiagonal: true,
    pontosPorPalavra: 200,
    palavras: [
      {
        palavra: "MELANZANA",
        dica: "Ortaggio viola scuro usato nella parmigiana.",
        explicacao: "MELANZANA = verdura viola tipica della cucina mediterranea."
      },
      {
        palavra: "FRAGOLA",
        dica: "Piccolo frutto rosso con semini esterni.",
        explicacao: "FRAGOLA = frutto dolce di primavera."
      },
      {
        palavra: "FORMAGGIO",
        dica: "Prodotto derivato dal latte stagionato.",
        explicacao: "FORMAGGIO = alimento ottenuto dalla cagliatura del latte."
      },
      {
        palavra: "CARCIOFO",
        dica: "Ortaggio verde con foglie spinose e cuore tenero.",
        explicacao: "CARCIOFO = ortaggio tipico della cucina romana."
      }
    ]
  },
  {
    numero: 5,
    nivel: "Estremo",
    tema: "Animali",
    tamanhoGrade: 11,
    permitirInvertida: true,
    permitirDiagonal: true,
    pontosPorPalavra: 250,
    palavras: [
      {
        palavra: "PIPISTRELLO",
        dica: "Unico mammifero capace di volare davvero.",
        explicacao: "PIPISTRELLO = mammifero notturno che usa l'ecolocalizzazione."
      },
      {
        palavra: "SCOIATTOLO",
        dica: "Piccolo roditore agile con la coda folta.",
        explicacao: "SCOIATTOLO = vive sugli alberi e raccoglie noci."
      },
      {
        palavra: "CAMALEONTE",
        dica: "Rettile famoso perché cambia colore per mimetizzarsi.",
        explicacao: "CAMALEONTE = rettile dagli occhi indipendenti e lingua lunga."
      },
      {
        palavra: "RICCIO",
        dica: "Piccolo mammifero coperto di aculei.",
        explicacao: "RICCIO = si appallottola per difendersi dai predatori."
      },
      {
        palavra: "DELFINO",
        dica: "Mammifero marino molto intelligente e socievole.",
        explicacao: "DELFINO = cetaceo noto per i salti fuori dall'acqua."
      }
    ]
  },
  {
    numero: 6,
    nivel: "Estremo",
    tema: "Parti del corpo",
    tamanhoGrade: 11,
    permitirInvertida: true,
    permitirDiagonal: true,
    pontosPorPalavra: 300,
    palavras: [
      {
        palavra: "CAVIGLIA",
        dica: "Articolazione tra la gamba e il piede.",
        explicacao: "CAVIGLIA = sostiene il peso del corpo quando cammini."
      },
      {
        palavra: "SOPRACCIGLIO",
        dica: "Arco di peli sopra ciascun occhio.",
        explicacao: "SOPRACCIGLIO = protegge l'occhio dal sudore."
      },
      {
        palavra: "POLLICE",
        dica: "Il primo dito della mano, corto e opponibile.",
        explicacao: "POLLICE = dito indispensabile per afferrare gli oggetti."
      },
      {
        palavra: "SCHIENA",
        dica: "Parte posteriore del busto umano.",
        explicacao: "SCHIENA = va dalle spalle fino ai fianchi."
      },
      {
        palavra: "GUANCIA",
        dica: "Parte laterale del viso sotto l'occhio.",
        explicacao: "GUANCIA = arrossisce quando provi vergogna."
      }
    ]
  }
];

// Estado global do jogo
let indiceRodadaAtual = 0;
let vidasRestantes = 5;
let pontuacaoTotal = 0;
let tempoInicioMs = Date.now();
let jogoEncerrado = false;

// Estado da grade e seleção atual
let gradeAtual = [];
let palavrasDaRodada = [];
let celulasEncontradas = new Set();
let arrastando = false;
let celulaInicial = null;
let celulasSelecionadas = [];

// Referências aos elementos do HTML
const elGrade = document.getElementById("grade-letras");
const elListaDicas = document.getElementById("lista-dicas");
const elTema = document.getElementById("etiqueta-tema");
const elNivel = document.getElementById("valor-nivel");
const elRodada = document.getElementById("valor-rodada");
const elVidas = document.getElementById("valor-vidas");
const elPontos = document.getElementById("valor-pontos");
const elFeedback = document.getElementById("caixa-feedback");
const elBtnLimpar = document.getElementById("btn-limpar");
const elTelaFinal = document.getElementById("tela-final");
const elTituloModal = document.getElementById("titulo-modal");
const elTextoModal = document.getElementById("texto-modal");
const elPontosFinais = document.getElementById("pontos-finais");
const elTempoFinal = document.getElementById("tempo-final");
const elBtnReiniciar = document.getElementById("btn-reiniciar");

// ============================================================
// Comunicação obrigatória com o portal (vrgame)
// ============================================================

function avisarAlturaPortal() {
  const altura = document.documentElement.scrollHeight;
  window.parent.postMessage({ type: "vrgame:resize", height: altura }, "*");
}

window.addEventListener("message", (evento) => {
  const dados = evento.data;
  if (!dados || typeof dados !== "object") return;

  if (dados.type === "vrgame:theme") {
    const temaEscuro = dados.theme === "dark";
    document.documentElement.setAttribute("data-theme", temaEscuro ? "dark" : "light");
  }

  if (dados.type === "vrgame:fullscreen") {
    avisarAlturaPortal();
  }
});

window.addEventListener("resize", avisarAlturaPortal);

// ============================================================
// Montagem do tabuleiro (caça-palavras)
// ============================================================

function obterDirecoesPermitidas(configRodada) {
  // Direções básicas: horizontal para direita e vertical para baixo
  const direcoes = [
    { dl: 0, dc: 1 },
    { dl: 1, dc: 0 }
  ];

  if (configRodada.permitirInvertida) {
    direcoes.push({ dl: 0, dc: -1 });
    direcoes.push({ dl: -1, dc: 0 });
  }

  if (configRodada.permitirDiagonal) {
    direcoes.push({ dl: 1, dc: 1 });
    direcoes.push({ dl: 1, dc: -1 });
    if (configRodada.permitirInvertida) {
      direcoes.push({ dl: -1, dc: 1 });
      direcoes.push({ dl: -1, dc: -1 });
    }
  }

  return direcoes;
}

function criarGradeVazia(tamanho) {
  return Array.from({ length: tamanho }, () => Array(tamanho).fill(""));
}

function tentarInserirPalavra(grade, palavra, direcoes) {
  const tamanho = grade.length;
  const tentativasMax = 250;

  for (let t = 0; t < tentativasMax; t++) {
    const dir = direcoes[Math.floor(Math.random() * direcoes.length)];
    const linhaIni = Math.floor(Math.random() * tamanho);
    const colIni = Math.floor(Math.random() * tamanho);

    const linhaFim = linhaIni + dir.dl * (palavra.length - 1);
    const colFim = colIni + dir.dc * (palavra.length - 1);

    if (linhaFim < 0 || linhaFim >= tamanho || colFim < 0 || colFim >= tamanho) {
      continue;
    }

    let cabe = true;
    for (let i = 0; i < palavra.length; i++) {
      const l = linhaIni + dir.dl * i;
      const c = colIni + dir.dc * i;
      const letraAtual = grade[l][c];
      if (letraAtual !== "" && letraAtual !== palavra[i]) {
        cabe = false;
        break;
      }
    }

    if (cabe) {
      for (let i = 0; i < palavra.length; i++) {
        const l = linhaIni + dir.dl * i;
        const c = colIni + dir.dc * i;
        grade[l][c] = palavra[i];
      }
      return true;
    }
  }

  return false;
}

function gerarGradeDaRodada(configRodada) {
  const alfabetoItaliano = "ABCDEFGHILMNOPQRSTUVZ";
  const direcoes = obterDirecoesPermitidas(configRodada);
  const palavrasOrdenadas = [...configRodada.palavras].sort(
    (a, b) => b.palavra.length - a.palavra.length
  );

  // Tenta montar a grade até todas as palavras caberem perfeitamente
  for (let tentativaGeral = 0; tentativaGeral < 50; tentativaGeral++) {
    const grade = criarGradeVazia(configRodada.tamanhoGrade);
    let todasCouberam = true;

    for (const item of palavrasOrdenadas) {
      const ok = tentarInserirPalavra(grade, item.palavra, direcoes);
      if (!ok) {
        todasCouberam = false;
        break;
      }
    }

    if (todasCouberam) {
      for (let l = 0; l < configRodada.tamanhoGrade; l++) {
        for (let c = 0; c < configRodada.tamanhoGrade; c++) {
          if (grade[l][c] === "") {
            const letraAleatoria =
              alfabetoItaliano[Math.floor(Math.random() * alfabetoItaliano.length)];
            grade[l][c] = letraAleatoria;
          }
        }
      }
      return grade;
    }
  }

  return criarGradeVazia(configRodada.tamanhoGrade);
}

// ============================================================
// Renderização da interface e atualização de status
// ============================================================

function atualizarCabecalho() {
  const rodada = RODADAS[indiceRodadaAtual];
  elTema.textContent = `Tema: ${rodada.tema}`;
  elNivel.textContent = rodada.nivel;
  elRodada.textContent = `${rodada.numero} / ${RODADAS.length}`;
  elPontos.textContent = pontuacaoTotal;

  const coracoes = "❤️".repeat(Math.max(0, vidasRestantes)) + "🖤".repeat(Math.max(0, 5 - vidasRestantes));
  elVidas.textContent = coracoes;
  elVidas.setAttribute("aria-label", `${vidasRestantes} vite rimaste`);
}

function mostrarFeedback(mensagem, tipo = "neutro") {
  elFeedback.textContent = mensagem;
  elFeedback.className = `feedback ${tipo}`;
}

function renderizarDicas() {
  elListaDicas.innerHTML = "";
  palavrasDaRodada.forEach((item) => {
    const li = document.createElement("li");
    li.className = `item-dica ${item.encontrada ? "resolvida" : ""}`;
    li.innerHTML = `
      <span>${item.dica}</span>
      ${item.encontrada ? `<span class="palavra-revelada">✓ ${item.palavra}</span>` : ""}
    `;
    elListaDicas.appendChild(li);
  });
}

function renderizarGrade() {
  const tamanho = gradeAtual.length;
  elGrade.innerHTML = "";
  elGrade.style.gridTemplateColumns = `repeat(${tamanho}, minmax(0, 1fr))`;

  for (let l = 0; l < tamanho; l++) {
    for (let c = 0; c < tamanho; c++) {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "celula";
      botao.textContent = gradeAtual[l][c];
      botao.dataset.linha = l;
      botao.dataset.coluna = c;
      botao.setAttribute("aria-label", `Lettera ${gradeAtual[l][c]}, riga ${l + 1}, colonna ${c + 1}`);

      const chave = `${l}-${c}`;
      if (celulasEncontradas.has(chave)) {
        botao.classList.add("encontrada");
      }

      // Eventos de ponteiro para funcionar arrastando no mouse ou dedo
      botao.addEventListener("pointerdown", (e) => iniciarSelecao(l, c, e));
      botao.addEventListener("pointerenter", () => atualizarArrasto(l, c));

      elGrade.appendChild(botao);
    }
  }
}

function pintarSelecaoAtual() {
  const conjuntoSelecionado = new Set(celulasSelecionadas.map((pos) => `${pos.l}-${pos.c}`));
  const botoes = elGrade.querySelectorAll(".celula");

  botoes.forEach((btn) => {
    const chave = `${btn.dataset.linha}-${btn.dataset.coluna}`;
    btn.classList.toggle("selecionada", conjuntoSelecionado.has(chave));
  });
}

// ============================================================
// Lógica de seleção (Arrastar OU Clicar na primeira e última)
// ============================================================

function calcularLinhaReta(inicio, fim) {
  const diffL = fim.l - inicio.l;
  const diffC = fim.c - inicio.c;
  const absL = Math.abs(diffL);
  const absC = Math.abs(diffC);

  // Só aceita linhas retas horizontais, verticais ou diagonais exatas
  if (diffL !== 0 && diffC !== 0 && absL !== absC) {
    return null;
  }

  const passos = Math.max(absL, absC);
  const passoL = passos === 0 ? 0 : diffL / passos;
  const passoC = passos === 0 ? 0 : diffC / passos;

  const caminho = [];
  for (let i = 0; i <= passos; i++) {
    caminho.push({
      l: inicio.l + passoL * i,
      c: inicio.c + passoC * i
    });
  }
  return caminho;
}

function limparSelecao() {
  arrastando = false;
  celulaInicial = null;
  celulasSelecionadas = [];
  pintarSelecaoAtual();
}

function iniciarSelecao(l, c, evento) {
  if (jogoEncerrado) return;
  if (evento && evento.preventDefault) evento.preventDefault();

  // Caso 1: Já existe uma primeira letra clicada -> o jogador clicou na última letra
  if (!arrastando && celulaInicial && (celulaInicial.l !== l || celulaInicial.c !== c)) {
    const caminho = calcularLinhaReta(celulaInicial, { l, c });
    if (caminho) {
      celulasSelecionadas = caminho;
      validarPalavraSelecionada();
    } else {
      limparSelecao();
      mostrarFeedback("Seleziona in linea retta (orizzontale, verticale o diagonale).", "erro");
    }
    return;
  }

  // Caso 2: Começando um novo arrasto ou marcando a primeira letra
  arrastando = true;
  celulaInicial = { l, c };
  celulasSelecionadas = [{ l, c }];
  pintarSelecaoAtual();
}

function atualizarArrasto(l, c) {
  if (!arrastando || !celulaInicial || jogoEncerrado) return;
  const caminho = calcularLinhaReta(celulaInicial, { l, c });
  if (caminho) {
    celulasSelecionadas = caminho;
    pintarSelecaoAtual();
  }
}

// Suporte para arrastar o dedo na tela do celular (touchmove)
elGrade.addEventListener("pointermove", (e) => {
  if (!arrastando || jogoEncerrado) return;
  const elementoSobDedo = document.elementFromPoint(e.clientX, e.clientY);
  if (elementoSobDedo && elementoSobDedo.classList.contains("celula")) {
    const l = Number(elementoSobDedo.dataset.linha);
    const c = Number(elementoSobDedo.dataset.coluna);
    atualizarArrasto(l, c);
  }
});

window.addEventListener("pointerup", () => {
  if (!arrastando || jogoEncerrado) return;
  arrastando = false;

  // Se o jogador arrastou por 2 ou mais letras, valida na hora.
  // Se só clicou em 1 letra, mantém selecionada aguardando o clique na última letra!
  if (celulasSelecionadas.length > 1) {
    validarPalavraSelecionada();
  }
});

function validarPalavraSelecionada() {
  if (celulasSelecionadas.length < 2) {
    limparSelecao();
    return;
  }

  const textoSelecionado = celulasSelecionadas
    .map((pos) => gradeAtual[pos.l][pos.c])
    .join("");
  const textoInvertido = textoSelecionado.split("").reverse().join("");

  const rodada = RODADAS[indiceRodadaAtual];
  const encontrada = palavrasDaRodada.find(
    (item) =>
      !item.encontrada &&
      (item.palavra === textoSelecionado || item.palavra === textoInvertido)
  );

  if (encontrada) {
    // Acerto!
    encontrada.encontrada = true;
    pontuacaoTotal += rodada.pontosPorPalavra;
    celulasSelecionadas.forEach((pos) => celulasEncontradas.add(`${pos.l}-${pos.c}`));

    limparSelecao();
    atualizarCabecalho();
    renderizarGrade();
    renderizarDicas();
    mostrarFeedback(`Bravissima! ${encontrada.explicacao}`, "acerto");

    verificarFimDaRodada();
  } else {
    // Erro: perde 1 vida
    vidasRestantes -= 1;
    limparSelecao();
    atualizarCabecalho();

    if (vidasRestantes <= 0) {
      encerrarJogo(false);
    } else {
      mostrarFeedback(
        `Non è una parola nascosta ("${textoSelecionado}"). Hai perso 1 vita!`,
        "erro"
      );
    }
  }
}

// ============================================================
// Progressão das rodadas e encerramento
// ============================================================

function verificarFimDaRodada() {
  const todasEncontradas = palavrasDaRodada.every((p) => p.encontrada);
  if (!todasEncontradas) return;

  if (indiceRodadaAtual < RODADAS.length - 1) {
    indiceRodadaAtual += 1;
    setTimeout(() => {
      carregarRodada(indiceRodadaAtual);
      mostrarFeedback(
        `Round ${indiceRodadaAtual + 1} (${RODADAS[indiceRodadaAtual].nivel})! Trova le nuove parole.`,
        "acerto"
      );
    }, 900);
  } else {
    encerrarJogo(true);
  }
}

function calcularPontuacaoMaxima() {
  return RODADAS.reduce(
    (soma, r) => soma + r.palavras.length * r.pontosPorPalavra,
    0
  );
}

function encerrarJogo(vitoria) {
  jogoEncerrado = true;
  const tempoTotalMs = Date.now() - tempoInicioMs;
  const segundos = Math.round(tempoTotalMs / 1000);
  const maxScore = calcularPontuacaoMaxima();

  elTituloModal.textContent = vitoria ? "Complimenti! Hai vinto!" : "Vite terminate!";
  elTextoModal.textContent = vitoria
    ? "Hai completato tutti e 6 i round di Caccia alle Parole in italiano!"
    : "Hai esaurito tutte e 5 le vite. Riprova per battere la sfida!";
  elPontosFinais.textContent = `${pontuacaoTotal} / ${maxScore}`;
  elTempoFinal.textContent = `${segundos}s`;
  elTelaFinal.classList.remove("escondido");

  // Envia resultado final para o portal
  window.parent.postMessage(
    {
      type: "vrgame:finish",
      score: pontuacaoTotal,
      maxScore: maxScore,
      timeMs: tempoTotalMs,
      detail: { jogo: "caccia-alle-parole" }
    },
    "*"
  );

  avisarAlturaPortal();
}

function carregarRodada(indice) {
  const rodada = RODADAS[indice];
  celulasEncontradas = new Set();
  palavrasDaRodada = rodada.palavras.map((p) => ({ ...p, encontrada: false }));
  gradeAtual = gerarGradeDaRodada(rodada);

  limparSelecao();
  atualizarCabecalho();
  renderizarGrade();
  renderizarDicas();
  avisarAlturaPortal();
}

function iniciarNovoJogo() {
  indiceRodadaAtual = 0;
  vidasRestantes = 5;
  pontuacaoTotal = 0;
  tempoInicioMs = Date.now();
  jogoEncerrado = false;

  elTelaFinal.classList.add("escondido");
  mostrarFeedback("Trascina sulle lettere o clicca sulla prima e sull'ultima lettera!", "neutro");
  carregarRodada(0);
}

// Eventos dos botões
elBtnLimpar.addEventListener("click", () => {
  limparSelecao();
  mostrarFeedback("Selezione annullata.", "neutro");
});

elBtnReiniciar.addEventListener("click", iniciarNovoJogo);

// Inicialização ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  // Detecta tema escuro do sistema caso o portal ainda não tenha enviado mensagem
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  iniciarNovoJogo();
  window.parent.postMessage({ type: "vrgame:ready" }, "*");
  avisarAlturaPortal();
});