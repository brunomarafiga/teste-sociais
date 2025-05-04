// questions.js
// Contains all 150 questions for the Social Sciences Quiz

const questions = [
    // ==================================
    //         Bloco 1: Sociologia
    // ==================================

    // --- Sociologia - Múltipla Escolha (1-30) ---
    {
        tipo: 'MC',
        contexto: "(Contexto: Normas Sociais)",
        pergunta: "Em sua obra \"As Regras do Método Sociológico\", Émile Durkheim define o objeto de estudo da Sociologia. Ele argumenta que certas maneiras de agir, pensar e sentir são exteriores aos indivíduos e exercem sobre eles um poder coercitivo, devendo ser tratadas como \"coisas\". Esse conceito fundamental é o de:",
        opcoes: [
            "Anomia",
            "Solidariedade Orgânica",
            "Fato Social",
            "Consciência Coletiva",
            "Ação Social"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Racionalização Moderna)",
        pergunta: "Max Weber analisou extensivamente o processo de racionalização que caracteriza a modernidade ocidental. Uma de suas manifestações mais evidentes, segundo ele, é a expansão de uma forma de organização baseada em hierarquia clara, regras impessoais, especialização de funções e competência técnica. Essa forma de organização é a:",
        opcoes: [
            "Comunidade Tradicional",
            "Dominação Carismática",
            "Burocracia",
            "Sociedade de Corte",
            "Ordem Feudal"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Sistema Capitalista)",
        pergunta: "Na análise de Karl Marx sobre o capitalismo, a relação fundamental que estrutura a sociedade é a existente entre os proprietários dos meios de produção e aqueles que possuem apenas sua força de trabalho para vender. Essa relação antagônica entre grupos com interesses distintos é central ao conceito de:",
        opcoes: [
            "Alienação",
            "Luta de Classes",
            "Mais-Valia Relativa",
            "Fetiche da Mercadoria",
            "Modo de Produção Asiático"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Educação e Desigualdade)",
        pergunta: "Pierre Bourdieu investigou como o sistema educacional, apesar de sua aparência meritocrática, contribui para a reprodução das desigualdades sociais. Ele argumenta que a escola valoriza um tipo específico de conhecimento e linguagem, geralmente mais familiar às classes dominantes. Essa vantagem adquirida fora da escola é denominada:",
        opcoes: [
            "Capital Social",
            "Violência Simbólica Direta",
            "Habitus Primário",
            "Capital Cultural Herdado",
            "Campo Educacional"
        ],
        resposta: "D"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Globalização e Identidade)",
        pergunta: "Anthony Giddens, ao analisar a modernidade tardia ou alta modernidade, discute como a globalização e os sistemas peritos (abstratos) impactam a vida cotidiana e a construção do self. Nesse contexto, a relação entre as ações individuais (agência) e as regras e recursos sociais (estrutura) é vista como:",
        opcoes: [
            "Uma determinação unilateral da estrutura sobre o agente.",
            "Uma relação de dualidade, onde agência e estrutura se pressupõem e se reconstituem mutuamente.",
            "Um processo onde a agência individual se torna irrelevante diante das forças globais.",
            "Uma estrutura fixa e imutável que apenas restringe a ação.",
            "Uma interação caótica sem padrões recorrentes."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Coesão Social)",
        pergunta: "Comparando sociedades tradicionais e modernas, Durkheim identificou diferentes bases para a coesão social. Em sociedades mais simples, com baixa divisão do trabalho, onde os indivíduos compartilham crenças e sentimentos semelhantes, a coesão deriva da similitude. Esse tipo de coesão é a:",
        opcoes: [
            "Solidariedade Orgânica",
            "Anomia Coletiva",
            "Solidariedade Mecânica",
            "Interdependência Funcional",
            "Contratualismo Social"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Mídia e Manipulação)",
        pergunta: "A Escola de Frankfurt, especialmente Adorno e Horkheimer, criticou a produção cultural em massa no capitalismo por sua tendência à padronização, à criação de falsas necessidades e à promoção da passividade e conformismo no público. Esse fenômeno foi denominado:",
        opcoes: [
            "Esfera Pública Burguesa",
            "Indústria Cultural",
            "Ação Comunicativa Distorcida",
            "Cultura Popular Autêntica",
            "Racionalidade Instrumental Pura"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Construção da Realidade)",
        pergunta: "A abordagem sociológica que foca nas interações face a face e na maneira como os indivíduos utilizam símbolos (linguagem, gestos) para interpretar situações, negociar significados e construir a realidade social em conjunto, tem como um de seus principais expoentes George Herbert Mead. Essa abordagem é o:",
        opcoes: [
            "Funcionalismo Parsonsiano",
            "Estruturalismo Marxista",
            "Interacionismo Simbólico",
            "Positivismo Sociológico",
            "Fenomenologia Social"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Dominação Sutil)",
        pergunta: "Bourdieu argumenta que a dominação social não se exerce apenas pela força física ou econômica, mas também por mecanismos mais sutis, como a imposição de categorias de pensamento, gostos e valores que legitimam a ordem estabelecida, fazendo com que os dominados percebam a dominação como natural ou inevitável. Esse tipo de dominação é a:",
        opcoes: [
            "Coerção Estatal",
            "Violência Simbólica",
            "Dominação Carismática",
            "Anomia Institucionalizada",
            "Hegemonia Política Direta"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Ciência e Sociedade)",
        pergunta: "A Teoria Ator-Rede (ANT), associada a Bruno Latour e Michel Callon, oferece uma perspectiva inovadora para analisar a produção do conhecimento científico e a difusão de tecnologias. Uma característica central dessa teoria é:",
        opcoes: [
            "Focar exclusivamente nas estruturas sociais que determinam a ciência.",
            "Considerar que apenas os cientistas humanos têm agência no processo científico.",
            "Tratar simetricamente atores humanos e não-humanos (micróbios, equipamentos, artigos) na construção de redes sociotécnicas.",
            "Reduzir a ciência a um mero reflexo de interesses econômicos.",
            "Analisar a ciência apenas através de métodos quantitativos."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Desigualdades Múltiplas)",
        pergunta: "Uma socióloga estuda as dificuldades enfrentadas por mulheres imigrantes e de baixa renda no acesso ao mercado de trabalho formal. Ela argumenta que a experiência dessas mulheres não pode ser compreendida analisando apenas o gênero, a classe ou a origem nacional isoladamente, mas sim a interconexão desses fatores. Essa abordagem analítica é a:",
        opcoes: [
            "Assimilação Cultural",
            "Mobilidade Social Ascendente",
            "Interseccionalidade",
            "Etnocentrismo Metodológico",
            "Teoria da Dependência"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Ação Política)",
        pergunta: "Grupos de cidadãos que se organizam de forma coletiva, com identidades e objetivos compartilhados, para expressar demandas, contestar políticas ou promover mudanças sociais fora dos canais institucionais tradicionais (partidos, eleições), são conhecidos como:",
        opcoes: [
            "Grupos de Pressão (Lobbies)",
            "Elites Burocráticas",
            "Movimentos Sociais",
            "Públicos Eleitorais",
            "Corporações de Ofício"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Era Digital)",
        pergunta: "Manuel Castells descreve a sociedade contemporânea como organizada em torno de fluxos de informação, capital e poder que operam através de redes de comunicação digital em escala global. Essa nova morfologia social, que reconfigura a economia, a política e a cultura, é denominada por ele como:",
        opcoes: [
            "Sociedade Pós-Industrial",
            "Modernidade Líquida",
            "Sociedade em Rede",
            "Aldeia Global",
            "Sociedade do Conhecimento"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Justificação da Ordem Social)",
        pergunta: "Em diversas sociedades, circulam sistemas de crenças e representações que explicam o mundo social, atribuem valores a certas práticas e, frequentemente, servem para legitimar as relações de poder existentes, apresentando-as como naturais, justas ou inevitáveis. Esse conjunto de ideias é central ao conceito sociológico de:",
        opcoes: [
            "Senso Comum",
            "Ideologia",
            "Tradição Cultural",
            "Paradigma Científico",
            "Opinião Pública"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Segregação Urbana)",
        pergunta: "Estudos sobre grandes metrópoles frequentemente revelam padrões de distribuição desigual da população no espaço, com concentração de grupos de alta renda em certas áreas e de grupos de baixa renda em outras, geralmente com acesso diferenciado a serviços e infraestrutura. Esse fenômeno é um exemplo de:",
        opcoes: [
            "Gentrificação",
            "Mobilidade Pendular",
            "Segregação Socioespacial",
            "Conurbação",
            "Urbanização Acelerada"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Impacto Ambiental)",
        pergunta: "A sociologia que se dedica a analisar as interconexões entre sistemas sociais e ecossistemas naturais, investigando como padrões de produção e consumo afetam o meio ambiente e como problemas ambientais (mudanças climáticas, perda de biodiversidade) geram consequências sociais, é a:",
        opcoes: [
            "Sociologia Rural",
            "Sociologia do Risco",
            "Sociologia Ambiental",
            "Ecologia Política",
            "Sociologia do Desenvolvimento Sustentável"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Mundo do Trabalho)",
        pergunta: "As transformações recentes no mundo do trabalho, como o aumento do trabalho autônomo via plataformas digitais (\"uberização\"), a flexibilização de contratos e a redução de direitos trabalhistas, são frequentemente analisadas sob o conceito de:",
        opcoes: [
            "Fordismo",
            "Sindicalismo de Base",
            "Precarização do Trabalho",
            "Qualificação Profissional",
            "Pleno Emprego"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Determinantes Sociais da Saúde)",
        pergunta: "Pesquisas indicam que a expectativa de vida e a incidência de certas doenças variam significativamente entre diferentes grupos sociais dentro de uma mesma população, correlacionando-se com fatores como renda, escolaridade, condições de moradia e acesso a serviços. Esse campo de estudo é central para a:",
        opcoes: [
            "Genética Médica",
            "Psicologia Clínica",
            "Sociologia da Saúde",
            "Bioestatística",
            "Saúde Pública Comunitária"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Cultura e Globalização)",
        pergunta: "O processo de intensificação das interconexões globais leva, por um lado, à difusão de produtos e símbolos culturais em escala mundial (como a cultura pop americana) e, por outro, à mistura e reinterpretação desses elementos em contextos locais, gerando novas formas culturais. Esse fenômeno de mistura é conhecido como:",
        opcoes: [
            "Assimilação Forçada",
            "Etnocentrismo Global",
            "Hibridismo Cultural",
            "Isolacionismo Cultural",
            "Nacionalismo Cultural"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Pensamento Social Brasileiro)",
        pergunta: "Sérgio Buarque de Holanda, em \"Raízes do Brasil\", analisa a formação da sociedade brasileira, destacando a persistência de traços patriarcais e personalistas nas relações sociais e políticas, em contraste com a impessoalidade e o formalismo de outras tradições. Um conceito central em sua análise é o de:",
        opcoes: [
            "Democracia Racial",
            "Homem Cordial",
            "Casa-Grande e Senzala",
            "Coronelismo",
            "Bacharelismo"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Ação e Sentido)",
        pergunta: "Max Weber propôs uma tipologia da ação social baseada nas motivações dos agentes. A ação orientada por um cálculo racional de meios para atingir fins específicos e pragmaticamente definidos (ex: um engenheiro projetando uma ponte) é classificada como:",
        opcoes: [
            "Ação Racional com Relação a Valores",
            "Ação Afetiva",
            "Ação Tradicional",
            "Ação Racional com Relação a Fins",
            "Ação Carismática"
        ],
        resposta: "D"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Marxismo e Ideologia)",
        pergunta: "Na teoria marxista, o conjunto de instituições e formas de consciência (direito, política, religião, filosofia, arte) que se ergue sobre a base econômica da sociedade e serve para legitimar as relações de produção existentes é denominado:",
        opcoes: [
            "Estrutura (ou Infraestrutura)",
            "Forças Produtivas",
            "Superestrutura",
            "Falsa Consciência",
            "Capital Constante"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Mudança e Ordem)",
        pergunta: "Talcott Parsons, um dos expoentes do funcionalismo estrutural, via a sociedade como um sistema complexo cujas partes trabalham juntas para promover a solidariedade e a estabilidade. Para ele, a manutenção da ordem social depende fundamentalmente da internalização de:",
        opcoes: [
            "Conflitos de Classe",
            "Interesses Individuais Egoístas",
            "Normas e Valores Compartilhados",
            "Racionalidade Instrumental",
            "Símbolos Culturais Ambíguos"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Sociologia Brasileira - Florestan Fernandes)",
        pergunta: "Florestan Fernandes analisou criticamente as relações raciais no Brasil, questionando o mito da democracia racial. Ele argumentou que a modernização conservadora brasileira manteve barreiras estruturais que impediram a plena integração do negro na sociedade de classes após a abolição. Sua análise enfatiza a persistência do:",
        opcoes: [
            "Sincretismo Religioso",
            "Paternalismo Cordial",
            "Preconceito de Marca (associado à cor) e Racismo Estrutural",
            "Mobilidade Social Inter-racial",
            "Assimilação Cultural Completa"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Sociedade Contemporânea - Bauman)",
        pergunta: "Zygmunt Bauman utilizou uma metáfora para descrever a condição da sociedade contemporânea, caracterizada pela fluidez, incerteza, volatilidade das relações sociais, identidades e instituições, em contraste com a solidez da era moderna anterior. Essa metáfora é a de:",
        opcoes: [
            "Sociedade do Espetáculo",
            "Modernidade Líquida",
            "Aldeia Global",
            "Sociedade em Rede",
            "Fim da História"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Poder Simbólico)",
        pergunta: "Segundo Bourdieu, o poder simbólico é uma forma de poder que só se exerce com a cumplicidade (muitas vezes inconsciente) daqueles que o sofrem, pois eles incorporam as estruturas de percepção e classificação que legitimam esse poder. Um exemplo disso seria:",
        opcoes: [
            "A repressão policial a uma manifestação.",
            "A aceitação de padrões de beleza eurocêntricos por grupos não-brancos.",
            "A cobrança de impostos pelo Estado.",
            "A competição econômica entre empresas.",
            "A negociação salarial entre sindicato e patronato."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Sociologia e Biologia)",
        pergunta: "A sociobiologia, popularizada por E.O. Wilson, busca explicar o comportamento social humano e animal com base em princípios da biologia evolutiva e da genética. Essa abordagem foi criticada por muitos sociólogos por seu potencial de:",
        opcoes: [
            "Ignorar completamente a influência da cultura.",
            "Reduzir fenômenos sociais complexos a determinismos biológicos.",
            "Superestimar o papel da linguagem simbólica.",
            "Focar excessivamente em estruturas macro-sociais.",
            "Negar a existência de conflitos sociais."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Teoria Sociológica - Simmel)",
        pergunta: "Georg Simmel, um dos clássicos da sociologia, analisou as formas de interação social e os efeitos da vida urbana moderna sobre o indivíduo. Ele descreveu o tipo \"blasé\" como característico do habitante da metrópole, marcado por uma atitude de:",
        opcoes: [
            "Intensa excitação e engajamento emocional.",
            "Forte apego às tradições comunitárias.",
            "Indiferença e reserva calculada como proteção contra o excesso de estímulos.",
            "Busca incessante por relações sociais profundas e duradouras.",
            "Ingenuidade e desconhecimento dos códigos urbanos."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Trabalho e Tecnologia)",
        pergunta: "A introdução de novas tecnologias no processo produtivo, como a automação e a inteligência artificial, levanta debates sobre seus impactos no emprego e nas qualificações exigidas dos trabalhadores. Uma perspectiva otimista argumenta que a tecnologia cria novas ocupações e aumenta a produtividade geral, enquanto uma perspectiva crítica alerta para:",
        opcoes: [
            "O fortalecimento do poder sindical.",
            "A redução da jornada de trabalho para todos.",
            "O aumento do controle sobre o trabalhador e a desqualificação de certas funções.",
            "A democratização do acesso aos meios de produção.",
            "O fim da divisão técnica do trabalho."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Individualismo Moderno)",
        pergunta: "Durkheim observou que, paradoxalmente, o avanço da divisão do trabalho e da solidariedade orgânica na modernidade era acompanhado por um crescente \"culto do indivíduo\". Para ele, esse individualismo moderno:",
        opcoes: [
            "Era um sinal inequívoco de anomia e desintegração social.",
            "Representava um retrocesso a formas de solidariedade mecânica.",
            "Tornava-se ele próprio um valor moral central e uma base para a coesão na sociedade moderna, desde que regulado.",
            "Era incompatível com qualquer forma de ordem social.",
            "Limitava-se apenas às elites econômicas e intelectuais."
        ],
        resposta: "C"
    },

    // --- Sociologia - Verdadeiro ou Falso (31-40) ---
    {
        tipo: 'VF',
        contexto: "(Contexto: Teoria Durkheimiana)",
        pergunta: "Para Durkheim, o crime é um fato social normal em qualquer sociedade, pois reforça a consciência coletiva ao provocar repulsa e punição.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Teoria Weberiana)",
        pergunta: "Max Weber considerava a burocracia uma forma de dominação ineficiente e irracional, típica de sociedades tradicionais.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Teoria Marxista)",
        pergunta: "Segundo Marx, a superestrutura (política, direito, cultura) é, em última instância, determinada pela estrutura econômica (modo de produção).",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Teoria Bourdieu)",
        pergunta: "O conceito de \"habitus\" em Bourdieu refere-se exclusivamente às regras formais e escritas que governam um campo social.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Escola de Frankfurt)",
        pergunta: "A Teoria Crítica da Escola de Frankfurt questiona a neutralidade da ciência e da tecnologia, argumentando que elas podem servir a interesses de dominação.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Interacionismo Simbólico)",
        pergunta: "O Interacionismo Simbólico concentra sua análise nas grandes estruturas sociais (Estado, economia), ignorando as interações face a face.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Teoria da Estruturação)",
        pergunta: "A Teoria da Estruturação de Giddens enfatiza a capacidade dos agentes de refletir sobre suas ações e transformar as estruturas sociais.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Conceito de Anomia)",
        pergunta: "A anomia, para Durkheim, significa um excesso de regras e controle social, sufocando a individualidade.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Interseccionalidade)",
        pergunta: "A interseccionalidade argumenta que não se pode analisar opressões como racismo, sexismo e classismo de forma isolada, pois elas se articulam.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Globalização)",
        pergunta: "A globalização é um processo puramente econômico, sem implicações culturais, políticas ou sociais significativas.",
        resposta: "F"
    },

    // --- Sociologia - Afirmações de Grupo (41-50) ---
    {
        tipo: 'AG',
        contexto: "(Tema: Émile Durkheim - Conceitos Fundamentais)",
        pergunta: "Analise as afirmações sobre a teoria de Durkheim:",
        afirmacoes: [
            "I. A solidariedade mecânica, baseada na similitude, é típica das sociedades modernas complexas.",
            "II. O suicídio anômico ocorre em situações de súbita desregulação social, onde as normas perdem eficácia.",
            "III. A consciência coletiva é mais forte e abrangente nas sociedades de solidariedade orgânica.",
            "IV. Fatos sociais devem ser tratados como \"coisas\", ou seja, analisados objetivamente, independentemente das consciências individuais."
        ],
        opcoes: [
            "I e III.",
            "II e IV.",
            "I, II e III.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Karl Marx - Materialismo Histórico)",
        pergunta: "Analise as afirmações sobre a teoria de Marx:",
        afirmacoes: [
            "I. A base material (estrutura econômica) determina, em última instância, a superestrutura ideológica e política.",
            "II. A história de todas as sociedades até hoje existentes é a história das lutas de classes.",
            "III. A alienação no capitalismo afeta apenas a relação do trabalhador com o produto, não com o processo de trabalho ou consigo mesmo.",
            "IV. A mais-valia resulta da diferença entre o valor criado pelo trabalho e o valor da força de trabalho (salário)."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Max Weber - Sociologia Compreensiva)",
        pergunta: "Analise as afirmações sobre a teoria de Weber:",
        afirmacoes: [
            "I. O objetivo da sociologia compreensiva é entender o sentido subjetivo que os agentes atribuem às suas ações sociais.",
            "II. A dominação carismática baseia-se na crença na legitimidade de ordens impessoais e racionais.",
            "III. O processo de \"desencantamento do mundo\" refere-se à crescente racionalização e intelectualização que expulsa a magia e o mistério da vida social.",
            "IV. O \"tipo ideal\" é uma construção analítica que acentua certos traços da realidade para fins de comparação e análise, não um retrato fiel dela."
        ],
        opcoes: [
            "I e II.",
            "I, III e IV.",
            "II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Pierre Bourdieu - Reprodução Social)",
        pergunta: "Analise as afirmações sobre a teoria de Bourdieu:",
        afirmacoes: [
            "I. O capital econômico é a única forma de capital relevante para determinar a posição social dos indivíduos.",
            "II. O habitus, uma vez formado na infância, é imutável ao longo da vida do indivíduo.",
            "III. Os campos sociais são caracterizados pela ausência de conflito e pela cooperação entre os agentes.",
            "IV. A escola desempenha um papel crucial na reprodução das desigualdades ao legitimar o capital cultural dominante como se fosse universal."
        ],
        opcoes: [
            "Apenas IV.",
            "I e II.",
            "III e IV.",
            "II e III.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "A"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Teoria Crítica e Indústria Cultural)",
        pergunta: "Analise as afirmações sobre a Escola de Frankfurt:",
        afirmacoes: [
            "I. A Teoria Crítica busca não apenas descrever a sociedade, mas também apontar suas contradições e potencial emancipatório.",
            "II. A Indústria Cultural promove a diversidade artística e o pensamento crítico autônomo entre as massas.",
            "III. A razão instrumental, ao se tornar dominante, subordina os fins aos meios e pode levar à barbárie.",
            "IV. A Escola de Frankfurt rejeitou completamente as contribuições de Marx e Freud para a análise social."
        ],
        opcoes: [
            "I e III.",
            "II e IV.",
            "I, II e III.",
            "I, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "A"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Estratificação e Mobilidade Social)",
        pergunta: "Analise as afirmações sobre estratificação social:",
        afirmacoes: [
            "I. Estratificação refere-se à existência de desigualdades estruturadas entre grupos sociais, baseadas em fatores como classe, status e poder.",
            "II. A mobilidade social pode ser intrageracional (dentro da vida de um indivíduo) ou intergeracional (entre gerações).",
            "III. Sociedades de castas são caracterizadas por alta mobilidade social baseada no mérito.",
            "IV. A teoria funcionalista da estratificação argumenta que a desigualdade é necessária para motivar indivíduos a ocupar posições importantes."
        ],
        opcoes: [
            "I e II.",
            "I, II e IV.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Interacionismo Simbólico e Goffman)",
        pergunta: "Analise as afirmações sobre o Interacionismo Simbólico e a obra de Erving Goffman:",
        afirmacoes: [
            "I. O foco principal é a análise das estruturas macroeconômicas da sociedade.",
            "II. Goffman utilizou a metáfora dramatúrgica (teatro) para analisar as interações sociais como performances de papéis.",
            "III. O conceito de \"self\" (eu) é visto como fixo e determinado biologicamente, não construído na interação.",
            "IV. A definição da situação pelos atores envolvidos é crucial para orientar a interação social."
        ],
        opcoes: [
            "I e III.",
            "II e IV.",
            "I, II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Sociologia Digital e Redes)",
        pergunta: "Analise as afirmações sobre a sociologia do mundo digital:",
        afirmacoes: [
            "I. A Teoria Ator-Rede (ANT) é irrelevante para analisar fenômenos digitais, pois foca apenas em interações offline.",
            "II. A Sociologia Digital investiga como algoritmos e plataformas moldam as interações e a percepção da realidade social.",
            "III. O conceito de \"capital social online\" refere-se aos recursos e benefícios que indivíduos podem obter através de suas conexões em redes sociais digitais.",
            "IV. A privacidade e a vigilância digital são temas marginais na Sociologia Digital contemporânea."
        ],
        opcoes: [
            "I e IV.",
            "II e III.",
            "I, II e III.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Globalização - Dimensões e Efeitos)",
        pergunta: "Analise as afirmações sobre o processo de globalização:",
        afirmacoes: [
            "I. Envolve principalmente a dimensão econômica, com pouca influência sobre a cultura e a política.",
            "II. Contribui para a compressão do tempo e do espaço, intensificando as interconexões globais.",
            "III. Resulta em uma homogeneização cultural completa, eliminando todas as especificidades locais.",
            "IV. Pode gerar tanto novas oportunidades quanto novas formas de desigualdade e exclusão social em escala global."
        ],
        opcoes: [
            "I e III.",
            "II e IV.",
            "I, II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Movimentos Sociais Contemporâneos)",
        pergunta: "Analise as afirmações sobre movimentos sociais na atualidade:",
        afirmacoes: [
            "I. Os \"Novos Movimentos Sociais\" (pós-anos 60) tendem a focar mais em questões de identidade, cultura e estilo de vida do que apenas em demandas econômicas.",
            "II. O uso de redes sociais digitais tornou-se uma ferramenta central para organização, mobilização e difusão das pautas de muitos movimentos.",
            "III. A globalização levou ao surgimento de movimentos sociais transnacionais que atuam em rede para além das fronteiras nacionais.",
            "IV. Todos os movimentos sociais contemporâneos são exclusivamente pacíficos e rejeitam qualquer forma de confronto com o Estado."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e III.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },


    // ==================================
    //       Bloco 2: Antropologia
    // ==================================

    // --- Antropologia - Múltipla Escolha (51-80) ---
    {
        tipo: 'MC',
        contexto: "(Contexto: Trabalho de Campo)",
        pergunta: "Bronislaw Malinowski, em sua pesquisa nas Ilhas Trobriand, revolucionou a prática antropológica ao defender a necessidade de o pesquisador viver por um longo período entre o grupo estudado, aprendendo sua língua e participando de suas atividades. Essa imersão profunda para compreender a cultura \"de dentro\" é a base do método:",
        opcoes: [
            "Comparativo Estrutural",
            "Histórico-Cultural",
            "Etnográfico (com observação participante)",
            "Arqueológico Contextual",
            "Funcionalista Abstrato"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Interpretação Cultural)",
        pergunta: "Clifford Geertz argumenta que a cultura não é um poder ou uma entidade que causa comportamentos, mas sim um \"contexto dentro do qual [eventos sociais, comportamentos, instituições, processos] podem ser descritos de forma inteligível - isto é, descritos com densidade\". Fazer essa descrição densa significa:",
        opcoes: [
            "Quantificar todos os aspectos observáveis da cultura.",
            "Interpretar as camadas de significado que os próprios atores atribuem às suas ações.",
            "Comparar a cultura estudada com a cultura do pesquisador para julgá-la.",
            "Identificar as funções universais de cada instituição cultural.",
            "Reconstruir a história evolutiva daquela cultura específica."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Diversidade e Julgamento)",
        pergunta: "A postura intelectual e metodológica que preconiza a compreensão das crenças e práticas de uma cultura a partir de seus próprios termos e valores, suspendendo o julgamento baseado nos padrões da cultura do observador, é conhecida como:",
        opcoes: [
            "Etnocentrismo",
            "Evolucionismo Cultural",
            "Relativismo Cultural",
            "Difusionismo",
            "Universalismo Moral"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Crítica ao Evolucionismo)",
        pergunta: "Franz Boas, considerado o pai da antropologia cultural americana, combateu as teorias evolucionistas do século XIX que classificavam as culturas em estágios hierárquicos. Ele enfatizou a necessidade de estudar cada cultura em sua particularidade histórica e em seus próprios termos, uma abordagem conhecida como:",
        opcoes: [
            "Funcionalismo Britânico",
            "Estruturalismo Francês",
            "Particularismo Histórico",
            "Materialismo Cultural",
            "Neoevolucionismo Multilinear"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Estruturas Mentais)",
        pergunta: "Claude Lévi-Strauss buscou identificar as estruturas lógicas inconscientes que subjazem à diversidade das manifestações culturais (mitos, parentesco, culinária). Ele acreditava que essas estruturas, baseadas em oposições binárias, eram universais e refletiam o funcionamento do espírito humano. Essa abordagem é a do:",
        opcoes: [
            "Interpretativismo Simbólico",
            "Estruturalismo",
            "Pós-estruturalismo",
            "Funcionalismo-Estrutural",
            "Culturalismo Boasiano"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Ontologias Indígenas)",
        pergunta: "Eduardo Viveiros de Castro propôs o conceito de \"perspectivismo ameríndio\" para descrever uma cosmologia comum a muitos povos indígenas da América do Sul. Segundo essa visão, diferentes tipos de seres (humanos, animais, espíritos) veem a si mesmos como \"humanos\", mas percebem os outros seres de acordo com as especificidades de seus corpos e afecções. Isso implica:",
        opcoes: [
            "Uma natureza universal e múltiplas culturas (multiculturalismo).",
            "Uma cultura universal (humanidade) e múltiplas naturezas (corpos).",
            "A inexistência de qualquer ordem ou padrão nas cosmologias indígenas.",
            "Que apenas os humanos possuem perspectiva e agência.",
            "Que a natureza determina completamente a cultura."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Rituais de Transição)",
        pergunta: "Arnold van Gennep, em sua obra clássica \"Os Ritos de Passagem\", analisou rituais que acompanham mudanças de status ou condição social (nascimento, iniciação, casamento, morte). Ele identificou uma estrutura sequencial comum nesses rituais, composta por três fases. Qual alternativa apresenta corretamente essas fases na ordem proposta por Van Gennep?",
        opcoes: [
            "Liminaridade, Separação, Agregação.",
            "Separação, Liminaridade (Margem), Agregação.",
            "Agregação, Separação, Liminaridade.",
            "Preparação, Execução, Celebração.",
            "Crise, Clímax, Resolução."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Reciprocidade)",
        pergunta: "Marcel Mauss, no \"Ensaio sobre a Dádiva\", descreveu sistemas de troca baseados na reciprocidade, onde dar um presente cria uma obrigação no receptor de retribuir futuramente, estabelecendo e mantendo laços sociais. A força que compele a retribuição, segundo relatos Maori citados por Mauss, residiria no \"espírito da coisa dada\", chamado:",
        opcoes: [
            "Mana",
            "Kula",
            "Potlatch",
            "Hau",
            "Tabu"
        ],
        resposta: "D"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Organização Familiar)",
        pergunta: "O estudo das diferentes formas como as sociedades organizam as relações de descendência, casamento e residência, definindo direitos, deveres e identidades com base em laços de sangue e afinidade, é o campo da antropologia do(a):",
        opcoes: [
            "Economia",
            "Política",
            "Religião",
            "Parentesco",
            "Corpo"
        ],
        resposta: "D"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Corpo e Sociedade)",
        pergunta: "A antropologia contemporânea tem dedicado crescente atenção ao corpo, não apenas como entidade biológica, mas como lócus de inscrição cultural, expressão de identidade, performance social e alvo de técnicas de poder. Essa abordagem entende o corpo como:",
        opcoes: [
            "Um dado natural universal e imutável.",
            "Um objeto passivo determinado exclusivamente pela genética.",
            "Uma construção sociocultural, histórica e politicamente situada.",
            "Irrelevante para a compreensão das estruturas sociais.",
            "Um mero suporte para a mente racional."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Fronteiras Sociais)",
        pergunta: "Fredrik Barth, em sua análise sobre grupos étnicos, argumentou que o mais importante para definir um grupo étnico não são os traços culturais \"objetivos\" que ele possui, mas sim as fronteiras sociais que o separam de outros grupos e a forma como essas fronteiras são mantidas e negociadas através da interação. Essa abordagem foca na etnicidade como:",
        opcoes: [
            "Essência biológica imutável.",
            "Sobrevivência de culturas primitivas.",
            "Processo relacional e organizacional de distinção social.",
            "Manifestação de patologia social.",
            "Resultado direto da globalização econômica."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Relações de Poder Pós-Coloniais)",
        pergunta: "A antropologia que se volta para a análise crítica dos legados do colonialismo nas sociedades contemporâneas, examinando como as relações de poder coloniais continuam a estruturar desigualdades, como as culturas locais resistem e se hibridizam, e como o conhecimento antropológico foi historicamente cúmplice desse processo, insere-se no campo:",
        opcoes: [
            "Da Antropologia Física Clássica",
            "Do Evolucionismo Cultural Ortodoxo",
            "Da Antropologia Pós-colonial e Decolonial",
            "Do Funcionalismo Sincrónico",
            "Da Etnociência Cognitiva"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Tecnologia e Cultura)",
        pergunta: "A análise antropológica de como a introdução e o uso de tecnologias (desde um machado de pedra até um smartphone) transformam las relações sociais, as práticas culturais e as visões de mundo, considerando a tecnologia não como neutra, mas como socialmente moldada e moldadora, é foco da:",
        opcoes: [
            "Antropologia Linguística",
            "Antropologia da Religião",
            "Antropologia da Ciência e Tecnologia",
            "Arqueologia Pré-histórica",
            "Antropologia Médica"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Etnografia e Imagem)",
        pergunta: "O uso da fotografia e do filme como ferramentas para registrar e analisar a vida social e cultural, bem como a análise crítica das próprias imagens como formas de representação cultural, constituem o campo da:",
        opcoes: [
            "Etnomusicologia",
            "Antropologia Visual",
            "Antropologia da Performance",
            "Museologia Etnográfica",
            "Semiótica da Cultura"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Vida Social Online)",
        pergunta: "A aplicação de métodos e conceitos antropológicos para estudar as interações, comunidades, identidades e práticas culturais que se desenvolvem em ambientes mediados por computador e pela internet (redes sociais, jogos online, etc.) é conhecida como:",
        opcoes: [
            "Antropologia Urbana",
            "Antropologia do Consumo",
            "Ciberantropologia (ou Antropologia Digital)",
            "Antropologia do Desenvolvimento",
            "Antropologia Cognitiva"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Identidades Híbridas)",
        pergunta: "O conceito de \"ciborgue\", popularizado por Donna Haraway, refere-se a um híbrido de organismo e máquina. Na teoria social e antropológica, ele é frequentemente utilizado para questionar dualismos clássicos (natureza/cultura, humano/animal, homem/mulher, físico/não-físico) e pensar as identidades na era da tecnociência. Essa discussão se enquadra no campo do:",
        opcoes: [
            "Estruturalismo Clássico",
            "Pós-humanismo e Estudos de Gênero e Tecnologia",
            "Funcionalismo Malinowskiano",
            "Evolucionismo do Século XIX",
            "Materialismo Histórico Ortodoxo"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Preconceito Cultural)",
        pergunta: "Avaliar negativamente ou com estranhamento os costumes, crenças e valores de uma sociedade diferente, tomando os padrões da própria cultura como referência única e superior, é uma atitude conhecida como:",
        opcoes: [
            "Relativismo Cultural",
            "Etnocentrismo",
            "Perspectivismo",
            "Exotismo Romântico",
            "Aculturação Voluntária"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Sistemas de Parentesco)",
        pergunta: "Em um sistema de parentesco onde a linhagem, a herança de bens e títulos, e a residência pós-casamento são predominantemente definidas pela linha paterna, temos um sistema:",
        opcoes: [
            "Matrilinear",
            "Bilateral",
            "Cognático",
            "Patrilinear",
            "Avuncular"
        ],
        resposta: "D"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Troca Cerimonial)",
        pergunta: "O \"Potlatch\", praticado por povos indígenas da Costa Noroeste da América do Norte, era uma cerimônia complexa envolvendo festas suntuosas e a distribuição ou destruição ostentatória de grandes quantidades de bens pelo anfitrião. O objetivo principal dessas práticas era:",
        opcoes: [
            "Acumular capital para investimento futuro.",
            "Afirmar ou elevar o status social e o prestígio do anfitrião e seu grupo, humilhando rivais.",
            "Garantir a subsistência alimentar da comunidade durante o inverno.",
            "Realizar trocas comerciais justas e equilibradas entre tribos.",
            "Celebrar alianças militares contra inimigos comuns."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Crise da Representação)",
        pergunta: "A partir dos anos 1980, a antropologia passou por um intenso debate sobre a natureza da escrita etnográfica. Autores como James Clifford e George Marcus (\"Writing Culture\") argumentaram que as etnografias não são descrições objetivas, mas sim construções textuais, parciais e historicamente situadas, influenciadas pela subjetividade e posição de poder do etnógrafo. Essa crítica ficou conhecida como:",
        opcoes: [
            "Virada Linguística",
            "Crise da Representação Etnográfica (ou Antropologia Pós-moderna)",
            "Retorno ao Positivismo",
            "Reafirmação do Funcionalismo",
            "Consolidação do Estruturalismo"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Antropologia e Saúde)",
        pergunta: "O uso de conhecimentos antropológicos sobre crenças culturais, organização social e práticas locais para melhorar a eficácia de programas de saúde pública, adequando-os aos contextos específicos das comunidades atendidas, é um exemplo de:",
        opcoes: [
            "Antropologia Forense",
            "Antropologia Filosófica",
            "Antropologia Aplicada à Saúde",
            "Etnobotânica Médica",
            "Paleopatologia"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Cultura e Natureza)",
        pergunta: "A antropologia simbólica, associada a Geertz, Schneider e outros, enfatiza a cultura como um sistema de símbolos e significados compartilhados que guiam a percepção e a ação humana. Nessa perspectiva, a relação entre natureza e cultura é vista como:",
        opcoes: [
            "A natureza determinando completamente a cultura.",
            "A cultura sendo um mero epifenômeno da biologia.",
            "A cultura impondo significados e classificações sobre uma natureza que só é apreendida através de filtros simbólicos.",
            "Uma separação radical e intransponível entre os dois domínios.",
            "Irrelevante para a análise antropológica."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Relações Interétnicas no Brasil)",
        pergunta: "Darcy Ribeiro, em sua obra, analisou a formação do povo brasileiro a partir do encontro e confronto entre matrizes indígenas, europeias e africanas. Ele descreveu diferentes processos de interação, incluindo a \"transfiguração étnica\", que se refere:",
        opcoes: [
            "À manutenção de identidades étnicas puras e isoladas.",
            "À dizimação completa dos povos indígenas.",
            "À criação de novas identidades e configurações socioculturais a partir da mestiçagem e do conflito.",
            "À assimilação passiva da cultura dominante pelos grupos subalternos.",
            "Ao retorno dos grupos étnicos às suas culturas originais pré-coloniais."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Gênero como Construção)",
        pergunta: "Margaret Mead, em seus estudos pioneiros na Nova Guiné (\"Sexo e Temperamento\"), demonstrou a grande variabilidade dos papéis e temperamentos considerados masculinos e femininos em diferentes culturas, desafiando a ideia de que essas características seriam biologicamente determinadas. Sua obra foi fundamental para o desenvolvimento da perspectiva antropológica que entende o gênero como:",
        opcoes: [
            "Um destino biológico imutável.",
            "Uma construção sociocultural.",
            "Um conceito universalmente uniforme.",
            "Irrelevante para a organização social.",
            "Determinado exclusivamente pela classe social."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Religião e Magia)",
        pergunta: "Edward Tylor, um dos pioneiros do evolucionismo antropológico, propôs o conceito de \"animismo\" como a forma mais primitiva de religião, baseada na crença em almas ou espíritos que habitariam pessoas, animais, plantas e objetos. Para ele, a magia seria:",
        opcoes: [
            "Uma forma mais evoluída de pensamento religioso, baseada na ética.",
            "Uma pseudociência primitiva, baseada em associações lógicas equivocadas (ex: similaridade, contágio).",
            "Sinônimo de religião monoteísta.",
            "Uma prática exclusiva de sociedades complexas e urbanas.",
            "Um sistema simbólico sem qualquer lógica interna."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Antropologia e Alimentação)",
        pergunta: "O estudo das práticas alimentares (o que se come, como se come, com quem se come) como um fenômeno cultural que envolve classificações simbólicas (puro/impuro, comestível/não comestível), rituais, identidades sociais e relações de poder, é o foco da:",
        opcoes: [
            "Nutrição Clínica",
            "Bromatologia",
            "Antropologia da Alimentação",
            "Agronomia Social",
            "Gastronomia Molecular"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Mudança Cultural)",
        pergunta: "O processo pelo qual uma sociedade ou grupo adota traços culturais (crenças, tecnologias, costumes) de outra sociedade, geralmente em um contexto de contato prolongado e assimétrico, é conhecido como:",
        opcoes: [
            "Inovação Endógena",
            "Aculturação (ou Difusão Cultural)",
            "Isolamento Cultural",
            "Revitalização Cultural",
            "Etnogênese"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Estrutura e Agência na Cultura)",
        pergunta: "Marshall Sahlins, em sua análise do encontro entre o Capitão Cook e os havaianos, buscou conciliar a abordagem estruturalista (que enfatiza as categorias culturais preexistentes) com a consideração da história e da agência dos indivíduos. Ele argumentou que a estrutura cultural:",
        opcoes: [
            "É totalmente estática e imune a eventos históricos.",
            "Determina completamente a ação individual, sem espaço para agência.",
            "É reproduzida, mas também potencialmente transformada, através das práticas e dos eventos históricos.",
            "É irrelevante para entender encontros interculturais.",
            "Existe apenas na mente do antropólogo, não na realidade social."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Direitos Indígenas)",
        pergunta: "A antropologia contemporânea tem se engajado ativamente nos debates sobre os direitos dos povos indígenas, incluindo o direito à terra, à autodeterminação e à preservação de suas culturas e conhecimentos tradicionais. Nesse contexto, o papel do antropólogo muitas vezes envolve:",
        opcoes: [
            "Defender a assimilação forçada dos indígenas à sociedade nacional.",
            "Fornecer laudos e perícias que subsidiem as reivindicações indígenas com base em estudos etnográficos e históricos.",
            "Negar a existência de culturas indígenas distintas e autênticas.",
            "Promover a exploração econômica das terras indígenas por empresas externas.",
            "Atuar como missionário religioso para converter os indígenas."
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Performance e Identidade)",
        pergunta: "A abordagem antropológica que analisa como as identidades (de gênero, étnicas, etc.) são construídas e comunicadas através de ações corporais, vestimentas, falas e rituais no palco da vida social, enfatizando o caráter ativo e muitas vezes estratégico dessas apresentações do \"eu\", é a antropologia da:",
        opcoes: [
            "Ecologia",
            "Cognição",
            "Performance",
            "Demografia",
            "Nutrição"
        ],
        resposta: "C"
    },

    // --- Antropologia - Verdadeiro ou Falso (81-90) ---
    {
        tipo: 'VF',
        contexto: "(Contexto: Método Etnográfico)",
        pergunta: "O método etnográfico pressupõe uma interação prolongada do pesquisador com o grupo estudado, buscando compreender seu ponto de vista.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Estruturalismo)",
        pergunta: "O estruturalismo de Lévi-Strauss nega a existência de quaisquer padrões universais no pensamento humano, enfatizando a particularidade radical de cada cultura.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Postura Antropológica)",
        pergunta: "Relativismo cultural, como postura metodológica, implica suspender julgamentos morais baseados na própria cultura para compreender outra cultura em seus termos.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: História da Antropologia)",
        pergunta: "Franz Boas foi um defensor das teorias evolucionistas que hierarquizavam as culturas em estágios de desenvolvimento.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Antropologia Interpretativa)",
        pergunta: "A \"descrição densa\", segundo Geertz, envolve a interpretação dos múltiplos significados contextuais de uma prática cultural.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Ontologias Ameríndias)",
        pergunta: "O perspectivismo ameríndio sustenta que animais e espíritos possuem corpos idênticos aos dos humanos, diferindo apenas em suas almas.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Rituais)",
        pergunta: "A fase de liminaridade nos ritos de passagem é frequentemente marcada por ambiguidades, inversões e um senso de communitas (Turner).",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Teoria da Dádiva)",
        pergunta: "A teoria da dádiva de Mauss demonstra que as trocas em sociedades \"primitivas\" eram puramente econômicas e desinteressadas.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Antropologia do Corpo)",
        pergunta: "A antropologia do corpo considera as modificações corporais (tatuagens, escarificações) como inscrições culturais significativas.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Etnocentrismo)",
        pergunta: "Etnocentrismo é a valorização da diversidade cultural e a busca por compreender o ponto de vista do \"outro\".",
        resposta: "F"
    },

    // --- Antropologia - Afirmações de Grupo (91-100) ---
    {
        tipo: 'AG',
        contexto: "(Tema: Etnografia e Método Antropológico)",
        pergunta: "Analise as afirmações sobre o método etnográfico:",
        afirmacoes: [
            "I. A observação participante é uma técnica chave, implicando viver com e como o grupo estudado.",
            "II. A \"descrição densa\" (Geertz) foca apenas nos aspectos quantificáveis da cultura.",
            "III. A reflexividade exige que o etnógrafo considere sua própria posição e influência na pesquisa.",
            "IV. O trabalho de campo prolongado é essencial para a profundidade da análise etnográfica."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Correntes Teóricas Clássicas e Críticas)",
        pergunta: "Analise as afirmações sobre correntes teóricas:",
        afirmacoes: [
            "I. O Evolucionismo do século XIX (Tylor, Morgan) classificava culturas em estágios hierárquicos (selvageria, barbárie, civilização).",
            "II. O Particularismo Histórico (Boas) criticou o evolucionismo, enfatizando a história única de cada cultura.",
            "III. O Funcionalismo (Malinowski) focava na função das instituições para satisfazer necessidades biológicas e sociais.",
            "IV. O Estruturalismo (Lévi-Strauss) via a cultura como determinada exclusivamente por fatores econômicos."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Parentesco e Aliança)",
        pergunta: "Analise as afirmações sobre antropologia do parentesco:",
        afirmacoes: [
            "I. A teoria da aliança (Lévi-Strauss) vê a proibição do incesto e as regras de casamento como fundamentais para a troca social.",
            "II. Sistemas de filiação unilinear (patrilinear ou matrilinear) traçam a descendência por apenas uma linha.",
            "III. A residência neolocal implica que o novo casal estabeleça moradia independente dos pais.",
            "IV. O estudo do parentesco limita-se exclusivamente às relações biológicas de consanguinidade."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e III.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Ritual e Simbolismo)",
        pergunta: "Analise as afirmações sobre rituais:",
        afirmacoes: [
            "I. Ritos de passagem marcam transições de status e seguem a estrutura separação-liminaridade-agregação (Van Gennep).",
            "II. A liminaridade (Turner) é uma fase de anti-estrutura, potencial criativo e communitas.",
            "III. A antropologia simbólica (Geertz) interpreta rituais como sistemas de significados culturais.",
            "IV. Rituais são sempre irracionais e desprovidos de lógica interna para os participantes."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Antropologia da Dádiva e Economia)",
        pergunta: "Analise as afirmações sobre trocas e economia na antropologia:",
        afirmacoes: [
            "I. A teoria da dádiva (Mauss) enfatiza a reciprocidade e as obrigações sociais nas trocas não-mercantis.",
            "II. O Kula e o Potlatch são exemplos de sistemas de troca cerimonial ligados a prestígio e relações sociais.",
            "III. A antropologia econômica demonstra que a lógica do mercado capitalista é universal e se aplica a todas as sociedades.",
            "IV. O conceito de \"fato social total\" (Mauss) indica que a dádiva articula múltiplas dimensões da vida social."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Antropologia do Corpo e Gênero)",
        pergunta: "Analise as afirmações sobre corpo e gênero:",
        afirmacoes: [
            "I. A antropologia do corpo trata o corpo como uma construção sociocultural, além de biológica.",
            "II. Estudos antropológicos (como os de Margaret Mead) evidenciaram a variabilidade cultural dos papéis de gênero.",
            "III. A perspectiva antropológica considera que as identidades de gênero são universalmente binárias (apenas masculino/feminino).",
            "IV. A performance de gênero refere-se à maneira como as identidades de gênero são expressas e encenadas socialmente."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Etnicidade e Identidade)",
        pergunta: "Analise as afirmações sobre etnicidade:",
        afirmacoes: [
            "I. Etnicidade é um sentimento de pertencimento baseado em ancestralidade, cultura ou história comum (real ou imaginada).",
            "II. As identidades étnicas são fluidas, contextuais e construídas relacionalmente (em contraste com outros grupos).",
            "III. Fredrik Barth enfatizou a importância das fronteiras étnicas e sua manutenção na interação social.",
            "IV. O conceito de etnicidade aplica-se exclusivamente a grupos minoritários, nunca a grupos dominantes."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Antropologia Visual e Digital)",
        pergunta: "Analise as afirmações sobre antropologia visual e digital:",
        afirmacoes: [
            "I. A antropologia visual utiliza e analisa criticamente imagens (fotos, filmes) como dados e representações culturais.",
            "II. A ciberantropologia estuda as culturas e interações que ocorrem em ambientes digitais.",
            "III. Ambas as abordagens consideram que as tecnologias visuais e digitais são neutras e não afetam as relações sociais.",
            "IV. A etnografia online (netnografia) é um método adaptado para pesquisa em comunidades virtuais."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Pós-colonialismo e Perspectivismo)",
        pergunta: "Analise as afirmações sobre abordagens contemporâneas:",
        afirmacoes: [
            "I. A antropologia pós-colonial critica o eurocentrismo e analisa os legados do colonialismo nas relações de poder atuais.",
            "II. O perspectivismo ameríndio (Viveiros de Castro) propõe uma ontologia multinaturalista e monoculturalista.",
            "III. Ambas as abordagens questionam dualismos clássicos ocidentais (natureza/cultura, sujeito/objeto).",
            "IV. O perspectivismo nega a importância da corporalidade na definição das diferentes perspectivas."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Ética e Antropologia Aplicada)",
        pergunta: "Analise as afirmações sobre ética e aplicação da antropologia:",
        afirmacoes: [
            "I. O consentimento livre e esclarecido é um requisito ético fundamental na pesquisa com seres humanos.",
            "II. A antropologia aplicada busca utilizar conhecimentos antropológicos para intervir e solucionar problemas práticos.",
            "III. O relativismo cultural radical isenta o antropólogo de qualquer responsabilidade ética em situações de violação de direitos humanos.",
            "IV. A proteção da confidencialidade e do bem-estar dos colaboradores é uma preocupação ética central."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },


    // ==================================
    //      Bloco 3: Ciência Política
    // ==================================

    // --- Ciência Política - Múltipla Escolha (101-130) ---
    {
        tipo: 'MC',
        contexto: "(Contexto: Origem do Estado)",
        pergunta: "Na filosofia política de Thomas Hobbes, o \"Leviatã\" representa o Estado soberano absoluto. Segundo Hobbes, a criação desse poder centralizado é justificada como a única forma de superar uma condição pré-social caracterizada por:",
        opcoes: [
            "Cooperação universal e altruísmo.",
            "Direitos naturais plenamente garantidos.",
            "Uma \"guerra de todos contra todos\" (bellum omnium contra omnes).",
            "Igualdade econômica e ausência de propriedade privada.",
            "Governo democrático e participativo."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Limitação do Poder)",
        pergunta: "Montesquieu, em \"O Espírito das Leis\", argumentou que \"só o poder freia o poder\". Para evitar o abuso e garantir a liberdade, ele propôs um arranjo institucional específico, que se tornou um pilar do constitucionalismo moderno. Esse arranjo é a:",
        opcoes: [
            "Monarquia Absoluta Esclarecida",
            "Democracia Direta Ateniense",
            "Separação e Equilíbrio entre Poderes (Legislativo, Executivo, Judiciário)",
            "Ditadura do Proletariado",
            "Teocracia Papal"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Formas de Autoridade)",
        pergunta: "Max Weber identificou três tipos puros de dominação legítima. Aquela que se baseia na crença nas qualidades excepcionais (santidade, heroísmo, exemplaridade) de um líder individual e na devoção pessoal dos seguidores a ele é a dominação:",
        opcoes: [
            "Racional-Legal",
            "Tradicional",
            "Burocrática",
            "Carismática",
            "Patrimonial"
        ],
        resposta: "D"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Poder e Ideologia)",
        pergunta: "Antonio Gramsci argumentou que a classe dominante mantém seu poder não apenas pela força (dominação), mas também pela capacidade de direcionar a sociedade moral e intelectualmente, obtendo o consentimento ativo das classes subalternas através da cultura, da educação e das instituições. Esse conceito é o de:",
        opcoes: [
            "Aparelho Repressivo de Estado",
            "Hegemonia",
            "Bloco Histórico Estático",
            "Guerra de Movimento",
            "Intelectual Tradicional"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Sistemas de Governo)",
        pergunta: "Em um sistema onde o chefe de governo (primeiro-ministro) e seu gabinete são membros do parlamento e dependem da manutenção da confiança da maioria parlamentar para permanecer no poder, sendo possível a dissolução do parlamento e a convocação de novas eleições, temos um sistema:",
        opcoes: [
            "Presidencialista",
            "Semipresidencialista",
            "Parlamentarista",
            "Monárquico Constitucional Puro",
            "Diretorial (como na Suíça)"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Divisão Territorial do Poder)",
        pergunta: "O Brasil, os Estados Unidos e a Alemanha são exemplos de Estados onde a soberania é compartilhada entre um governo central e unidades regionais (estados ou Länder), com competências definidas constitucionalmente para cada nível. Essa forma de organização territorial do poder é o:",
        opcoes: [
            "Estado Unitário",
            "Confederação",
            "Federalismo",
            "Regionalismo Assimétrico",
            "Império"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Eleições e Representação)",
        pergunta: "As regras específicas que determinam como os votos dos eleitores são traduzidos em assentos no parlamento ou em cargos executivos (ex: voto distrital majoritário, representação proporcional de lista, sistema misto) constituem o:",
        opcoes: [
            "Sistema de Governo",
            "Regime Político",
            "Sistema Eleitoral",
            "Código de Ética Partidária",
            "Estatuto do Eleitor"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Intermediação de Interesses)",
        pergunta: "Organizações que se formam para agregar interesses comuns e competir pelo poder político, apresentando candidatos em eleições e buscando implementar um programa de governo, são definidas como:",
        opcoes: [
            "Movimentos Sociais",
            "Grupos de Interesse (Lobbies)",
            "Partidos Políticos",
            "Organizações Não Governamentais (ONGs)",
            "Sindicatos Trabalhistas"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Democracia Real)",
        pergunta: "Robert Dahl utilizou o termo \"poliarquia\" para descrever os regimes democráticos existentes na prática, que se aproximam do ideal democrático através de duas dimensões principais: alta inclusão (direito de participação estendido a quase todos os adultos) e alta:",
        opcoes: [
            "Eficiência econômica.",
            "Estabilidade governamental.",
            "Contestação pública (liberdade de oposição e competição política).",
            "Coesão social e cultural.",
            "Autonomia militar."
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Comportamento Político)",
        pergunta: "A abordagem teórica que aplica pressupostos da microeconomia ao estudo da política, assumindo que os indivíduos (eleitores, políticos, burocratas) agem racionalmente para maximizar sua utilidade ou interesse próprio ao tomar decisões políticas, é conhecida como Teoria da:",
        opcoes: [
            "Dependência",
            "Mobilização de Recursos",
            "Escolha Racional (ou Escola da Escolha Pública)",
            "Elite",
            "Cultura Política"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Ação Governamental)",
        pergunta: "O estudo de como os governos identificam problemas, formulam, implementam e avaliam ações para lidar com questões de interesse público (saúde, educação, segurança, meio ambiente), envolvendo um ciclo e a interação de múltiplos atores, é o campo de análise de:",
        opcoes: [
            "Teoria dos Jogos",
            "Relações Internacionais",
            "Políticas Públicas",
            "Marketing Político",
            "Direito Administrativo"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Responsabilização dos Governantes)",
        pergunta: "O conceito que se refere aos mecanismos pelos quais os detentores de poder político são obrigados a justificar suas ações perante os cidadãos ou outros órgãos e podem sofrer sanções em caso de desempenho insatisfatório ou abuso de poder (ex: eleições, impeachment, controle judicial, mídia) é:",
        opcoes: [
            "Legitimidade Carismática",
            "Governança Corporativa",
            "Accountability (Responsabilização)",
            "Soberania Popular Direta",
            "Eficiência Burocrática"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Ideologias - Crítica ao Capitalismo)",
        pergunta: "O conjunto de doutrinas políticas e econômicas que se opõem ao capitalismo, defendendo formas de propriedade coletiva ou social dos meios de produção, buscando maior igualdade social e, em suas vertentes revolucionárias (como o marxismo-leninismo), a tomada do poder pelo proletariado para construir uma sociedade sem classes, refere-se ao:",
        opcoes: [
            "Liberalismo",
            "Conservadorismo",
            "Socialismo/Comunismo",
            "Fascismo",
            "Anarquismo Individualista"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Ideologias - Valorização da Tradição)",
        pergunta: "A ideologia política que tende a valorizar as instituições, costumes e hierarquias herdados do passado, mostrando ceticismo em relação a mudanças sociais abruptas e à engenharia social racionalista, e que geralmente defende a ordem, a autoridade e a propriedade privada, é o:",
        opcoes: [
            "Progressismo",
            "Socialismo Democrático",
            "Conservadorismo",
            "Libertarianismo",
            "Populismo Radical"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Regimes de Extrema-Direita)",
        pergunta: "O regime político totalitário de extrema-direita, caracterizado pelo nacionalismo agressivo, militarismo, autoritarismo, unipartidarismo, culto ao líder, forte controle estatal sobre a economia e a sociedade, e supressão violenta da oposição, exemplificado historicamente pela Itália de Mussolini e pela Alemanha de Hitler, é o:",
        opcoes: [
            "Comunismo Soviético",
            "Anarco-Sindicalismo",
            "Fascismo",
            "Absolutismo Monárquico",
            "Social-Democracia Corporativista"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Estilo Político)",
        pergunta: "Um tipo de discurso e prática política que opõe um \"povo\" virtuoso e homogêneo a uma \"elite\" corrupta e ilegítima, liderado por uma figura carismática que busca uma conexão direta com as massas, muitas vezes contornando instituições intermediárias e podendo apresentar tendências autoritárias, é denominado:",
        opcoes: [
            "Tecnocracia",
            "Pluralismo Moderado",
            "Populismo",
            "Parlamentarismo Consensual",
            "Federalismo Cooperativo"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Papel das Instituições)",
        pergunta: "A abordagem teórica na Ciência Política que ganhou força a partir dos anos 1980 e que ressalta a importância das regras formais (constituições, leis), das normas informais e das organizações (parlamentos, partidos, burocracias) na moldagem das preferências, estratégias e resultados políticos, é o:",
        opcoes: [
            "Behaviorismo (Comportamentalismo)",
            "Marxismo Clássico",
            "Neoinstitucionalismo",
            "Pós-modernismo Político",
            "Funcionalismo Sistêmico"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Qualidade da Democracia)",
        pergunta: "O modelo normativo de democracia que valoriza a formação de preferências e a tomada de decisões através da discussão pública racional e inclusiva entre cidadãos, buscando o entendimento mútuo e o consenso argumentativo, em vez da mera agregação de interesses pré-definidos, é a democracia:",
        opcoes: [
            "Elitista (Schumpeter)",
            "Participativa Direta",
            "Deliberativa (Habermas, Cohen)",
            "Consociativa (Lijphart)",
            "Majoritária Competitiva"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Orientações Políticas)",
        pergunta: "O conjunto de valores, crenças, atitudes e símbolos relativos à política que são predominantes em uma sociedade e que influenciam a percepção dos cidadãos sobre o sistema político e seu próprio papel nele, é conhecido como:",
        opcoes: [
            "Capital Simbólico",
            "Cultura Política",
            "Ideologia Dominante",
            "Opinião Pública Momentânea",
            "Socialização Partidária"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Esfera Pública)",
        pergunta: "O espaço de associações e organizações voluntárias (ONGs, movimentos sociais, sindicatos, igrejas, mídia independente, etc.) que atuam entre o Estado, o mercado e a esfera privada da família, articulando interesses, formando opiniões e exercendo influência sobre a política, constitui a:",
        opcoes: [
            "Burocracia Pública",
            "Classe Política Profissional",
            "Sociedade Civil",
            "Elite Econômica Transnacional",
            "Comunidade Científica"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Variedades do Liberalismo)",
        pergunta: "A corrente do pensamento liberal que defende la máxima liberdade individual e a mínima intervenção estatal, limitando o papel do Estado à proteção dos direitos negativos (vida, liberdade, propriedade) e à garantia da ordem e dos contratos voluntários, opondo-se a impostos redistributivos e ao Estado de bem-estar social, é o:",
        opcoes: [
            "Liberalismo Social",
            "Social Democracia",
            "Libertarianismo",
            "Conservadorismo Liberal",
            "Republicanismo Cívico"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Anti-Estatismo Radical)",
        pergunta: "A ideologia política que propõe a eliminação completa do Estado e de qualquer forma de governo coercitivo, defendendo uma sociedade organizada com base na associação voluntária, na autogestão e na ajuda mútua, possuindo diversas vertentes (individualista, coletivista, sindicalista), é o:",
        opcoes: [
            "Comunismo Autoritário",
            "Fascismo Corporativista",
            "Anarquismo",
            "Absolutismo Esclarecido",
            "Teocracia Fundamentalista"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Tipos de Partidos Políticos)",
        pergunta: "Segundo a tipologia clássica de Maurice Duverger, os partidos que surgiram no século XIX, baseados em redes de personalidades influentes (notáveis) com atuação parlamentar, estrutura organizacional fraca e pouca dependência de filiados, são os partidos:",
        opcoes: [
            "De Massas",
            "De Quadros",
            "Catch-All (Pega-Tudo)",
            "Cartel",
            "Movimento"
        ],
        resposta: "B"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Atores e Processos Políticos)",
        pergunta: "O estudo científico e sistemático dos fenômenos políticos, incluindo o Estado, o governo, as instituições, os processos eleitorais, os partidos, as ideologias, as políticas públicas e as relações internacionais, é o objeto da:",
        opcoes: [
            "Sociologia Política",
            "Filosofia Política",
            "Ciência Política",
            "História Política",
            "Antropologia Política"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Gestão Pública Contemporânea)",
        pergunta: "Em contraste com modelos hierárquicos e centralizados de administração, o conceito que descreve arranjos mais flexíveis e em rede para a formulação e implementação de políticas, envolvendo a colaboração entre atores estatais e não-estatais (setor privado, ONGs) na busca por soluções para problemas complexos, é o de:",
        opcoes: [
            "Burocracia Weberiana Pura",
            "Patrimonialismo Clientelista",
            "Governança (em Rede)",
            "Comando e Controle Estatal",
            "Corporativismo Autoritário"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Fundamento Legal do Estado)",
        pergunta: "O princípio segundo o qual o exercício do poder político deve ser limitado pela lei, e todos, incluindo os governantes, estão sujeitos ao império da lei, garantindo direitos individuais e previsibilidade nas relações sociais, é conhecido como:",
        opcoes: [
            "Razão de Estado",
            "Soberania Absoluta",
            "Estado de Direito (Rule of Law)",
            "Lei do Mais Forte",
            "Vontade Geral Pura"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Sistema Político Brasileiro)",
        pergunta: "O arranjo institucional brasileiro, que combina um presidente eleito com forte legitimidade popular e poderes significativos, com um sistema partidário altamente fragmentado no Congresso, obrigando à formação de amplas e muitas vezes instáveis alianças para governar, é caracterizado por Linz e outros como:",
        opcoes: [
            "Parlamentarismo Puro",
            "Bipartidarismo Estável",
            "Presidencialismo de Coalizão",
            "Semipresidencialismo Equilibrado",
            "Monarquia Parlamentarista"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Distribuição do Poder)",
        pergunta: "A teoria política que sustenta que, nas democracias modernas, o poder não está concentrado em uma única elite, mas sim disperso entre múltiplos grupos de interesse (empresariais, sindicais, étnicos, etc.) que competem entre si para influenciar as decisões políticas, é a teoria:",
        opcoes: [
            "Elitista (Mosca, Pareto)",
            "Marxista (Luta de Classes)",
            "Pluralista (Dahl, Truman)",
            "Corporativista",
            "Anarquista"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Política Externa)",
        pergunta: "A escola de pensamento em Relações Internacionais que enfatiza o papel das ideias, normas, identidades e interações sociais na construção dos interesses e comportamentos dos Estados, contrapondo-se às visões que focam apenas em poder material (Realismo) ou cooperação racional (Liberalismo), é o:",
        opcoes: [
            "Neorrealismo Estrutural",
            "Neoliberalismo Institucional",
            "Construtivismo Social",
            "Teoria Crítica (Escola de Frankfurt)",
            "Pós-estruturalismo"
        ],
        resposta: "C"
    },
    {
        tipo: 'MC',
        contexto: "(Contexto: Influência Política)",
        pergunta: "Steven Lukes expandiu a noção de poder para além da capacidade de vencer conflitos abertos (primeira dimensão) e da capacidade de controlar a agenda política impedindo que certos temas sejam discutidos (segunda dimensão). Sua \"terceira dimensão\" do poder refere-se à capacidade de:",
        opcoes: [
            "Usar a força militar de forma eficaz.",
            "Moldar as percepções, cognições e preferências das pessoas, fazendo-as aceitar a situação como natural ou desejar algo contrário aos seus \"reais\" interesses.",
            "Vencer eleições com grande margem de votos.",
            "Controlar os meios de comunicação de massa.",
            "Negociar acordos internacionais favoráveis."
        ],
        resposta: "B"
    },

    // --- Ciência Política - Verdadeiro ou Falso (131-140) ---
    {
        tipo: 'VF',
        contexto: "(Contexto: Conceito de Soberania)",
        pergunta: "O conceito de soberania, fundamental para o Estado moderno, refere-se ao poder supremo e independente dentro de um território.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Sistema Parlamentarista)",
        pergunta: "No sistema parlamentarista, o chefe de Estado sempre acumula a função de chefe de governo.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Sistemas Eleitorais)",
        pergunta: "Sistemas eleitorais de representação proporcional tendem a produzir parlamentos mais fragmentados do que os sistemas majoritários.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Federalismo)",
        pergunta: "O federalismo é uma forma de governo onde todo o poder se concentra nas mãos do governo central.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Teoria da Escolha Racional)",
        pergunta: "A teoria da escolha racional parte do pressuposto de que os indivíduos agem politicamente buscando maximizar sua utilidade.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Democracia Deliberativa)",
        pergunta: "A democracia deliberativa, segundo seus proponentes, deve evitar o debate público e focar apenas na votação individual.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Separação de Poderes)",
        pergunta: "A separação de poderes visa criar um sistema de freios e contrapesos (checks and balances) para limitar o poder governamental.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Conceito de Hegemonia)",
        pergunta: "Hegemonia, no sentido gramsciano, significa exclusivamente o uso da força militar para impor a vontade de um grupo.",
        resposta: "F"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Tipos de Partidos)",
        pergunta: "Partidos \"catch-all\" (pega-tudo) buscam ampliar sua base eleitoral suavizando suas posições ideológicas para atrair eleitores diversos.",
        resposta: "V"
    },
    {
        tipo: 'VF',
        contexto: "(Contexto: Estado de Direito)",
        pergunta: "O Estado de Direito significa que os governantes estão acima da lei e podem agir arbitrariamente.",
        resposta: "F"
    },

    // --- Ciência Política - Afirmações de Grupo (141-150) ---
    {
        tipo: 'AG',
        contexto: "(Tema: Formas de Dominação Legítima - Weber)",
        pergunta: "Analise as afirmações sobre os tipos puros de dominação legítima de Weber:",
        afirmacoes: [
            "I. Racional-Legal: Baseada na crença na legalidade das normas e na autoridade formal. Ex: Burocracia.",
            "II. Tradicional: Baseada na crença na santidade de tradições antigas e na autoridade herdada. Ex: Monarquia patriarcal.",
            "III. Carismática: Baseada na devoção a qualidades excepcionais de um líder. Ex: Profeta religioso, líder revolucionário.",
            "IV. A dominação patrimonialista é um subtipo da dominação carismática."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Contratualismo Clássico)",
        pergunta: "Analise as afirmações sobre os filósofos contratualistas:",
        afirmacoes: [
            "I. Hobbes defende um soberano absoluto (Leviatã) para garantir a ordem e evitar la guerra de todos contra todos.",
            "II. Locke argumenta que o governo deve proteger direitos naturais preexistentes (vida, liberdade, propriedade) e pode ser derrubado se se tornar tirânico.",
            "III. Rousseau propõe que a soberania reside na \"vontade geral\" do povo, expressa através da participação direta.",
            "IV. Todos os contratualistas concordam que o estado de natureza era pacífico e cooperativo."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Democracia - Conceitos e Modelos)",
        pergunta: "Analise as afirmações sobre democracia:",
        afirmacoes: [
            "I. A definição minimalista de Schumpeter foca na competição eleitoral pelo voto popular como método para escolher líderes.",
            "II. A Poliarquia de Dahl descreve democracias reais com altos níveis de contestação e inclusão.",
            "III. A Democracia Deliberativa enfatiza a justificação pública e a argumentação racional na tomada de decisões.",
            "IV. A Democracia Direta é o modelo predominante nas grandes nações contemporâneas."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Sistemas de Governo Comparados)",
        pergunta: "Analise as afirmações sobre sistemas de governo:",
        afirmacoes: [
            "I. Presidencialismo: Separação rígida entre Executivo e Legislativo, com mandatos fixos para ambos.",
            "II. Parlamentarismo: Fusão de poderes, com o governo emanando do parlamento e dependendo de sua confiança.",
            "III. Semipresidencialismo: Combina um presidente eleito diretamente com um primeiro-ministro responsável perante o parlamento.",
            "IV. O sistema de governo brasileiro é um exemplo clássico de Parlamentarismo."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Federalismo vs. Unitarismo)",
        pergunta: "Analise as afirmações sobre formas de Estado:",
        afirmacoes: [
            "I. Estado Federal: O poder político é constitucionalmente dividido entre o governo central e unidades regionais autônomas.",
            "II. Estado Unitário: O poder político é concentrado no governo central, que pode delegar tarefas a níveis locais, mas detém a soberania final.",
            "III. O Reino Unido é um exemplo típico de Estado Federal.",
            "IV. O federalismo visa acomodar a diversidade regional dentro de um mesmo Estado."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "C"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Ideologias Políticas Fundamentais)",
        pergunta: "Analise as afirmações sobre ideologias:",
        afirmacoes: [
            "I. Liberalismo: Enfatiza a liberdade individual, os direitos civis e, geralmente, a economia de mercado.",
            "II. Conservadorismo: Valoriza a tradição, a ordem, a autoridade e mudanças graduais.",
            "III. Socialismo: Critica desigualdades capitalistas e propõe maior igualdade e controle social/coletivo sobre a economia.",
            "IV. Fascismo: Rejeita a democracia liberal e o socialismo, propondo um Estado totalitário nacionalista e autoritário."
        ],
        opcoes: [
            "I e III.",
            "II e IV.",
            "I, II e III.",
            "I, II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "D"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Partidos Políticos - Tipologias)",
        pergunta: "Analise as afirmações sobre tipos de partidos:",
        afirmacoes: [
            "I. Partidos de Quadros (Duverger): Baseados em notáveis, estrutura fraca, foco na atuação parlamentar.",
            "II. Partidos de Massas (Duverger): Grande número de filiados, estrutura forte, base ideológica clara, foco na mobilização.",
            "III. Partidos Catch-All (Kirchheimer): Buscam atrair eleitores diversos, suavizam ideologia, foco na eficiência eleitoral.",
            "IV. Partidos Cartel (Katz & Mair): Colaboram entre si para obter recursos do Estado e limitar a competição externa."
        ],
        opcoes: [
            "I e II.",
            "III e IV.",
            "I, II e III.",
            "I, II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "D"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Accountability e Controle Governamental)",
        pergunta: "Analise as afirmações sobre accountability:",
        afirmacoes: [
            "I. Accountability vertical refere-se ao controle dos cidadãos sobre os governantes (ex: eleições).",
            "II. Accountability horizontal refere-se ao controle entre instituições estatais (ex: controle judicial de atos do executivo).",
            "III. A transparência governamental é um pré-requisito importante para a accountability.",
            "IV. Regimes autoritários são caracterizados por altos níveis de accountability."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Neoinstitucionalismo - Vertentes)",
        pergunta: "Analise as afirmações sobre o Neoinstitucionalismo:",
        afirmacoes: [
            "I. Neoinstitucionalismo Histórico: Enfatiza como decisões passadas e trajetórias institucionais (path dependence) moldam resultados políticos presentes.",
            "II. Neoinstitucionalismo da Escolha Racional: Analisa como instituições (regras) estruturam o comportamento estratégico de atores racionais.",
            "III. Neoinstitucionalismo Sociológico: Vê instituições como normas culturais, scripts e modelos cognitivos que conferem legitimidade e moldam identidades.",
            "IV. Todas as vertentes concordam que as instituições são meros reflexos passivos das preferências individuais."
        ],
        opcoes: [
            "I e II.",
            "I, II e III.",
            "III e IV.",
            "II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "B"
    },
    {
        tipo: 'AG',
        contexto: "(Tema: Estado, Poder e Sociedade Civil)",
        pergunta: "Analise as afirmações sobre conceitos políticos:",
        afirmacoes: [
            "I. O Estado moderno detém o monopólio legítimo do uso da força física (Weber).",
            "II. A Sociedade Civil é o espaço de organização autônoma da sociedade fora do Estado e do mercado.",
            "III. Poder, em sentido amplo, envolve a capacidade de produzir efeitos desejados nas ações de outros.",
            "IV. A legitimidade torna o poder mais estável e eficaz, baseando a obediência no consentimento ou na crença na validade da autoridade."
        ],
        opcoes: [
            "I e IV.",
            "II e III.",
            "I, II e III.",
            "I, II, III e IV.",
            "Todas as afirmações estão incorretas."
        ],
        resposta: "D"
    }
];
