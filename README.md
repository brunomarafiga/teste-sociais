<div align="center">

# 🏛️ Exame Simulado Interativo — Ciências Sociais & Humanidades

**Plataforma Web de Avaliação Formativa, Simulação de Exames e Fixação de Conceitos Teóricos**

[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?logo=javascript&logoColor=black)](#-tecnologias-utilizadas)
[![CSS3](https://img.shields.io/badge/Style-Modern%20Responsive%20CSS-1572B6?logo=css3&logoColor=white)](#-tecnologias-utilizadas)
[![Questões](https://img.shields.io/badge/Banco%20de%20Quest%C3%B5es-100%20Itens%20Classificados-purple)](#-cobertura-disciplinar)
[![Status](https://img.shields.io/badge/Status-Funcional%20%2F%20Ativo-success)](#)

</div>

---

## 📌 Visão Geral

O **Simulado de Ciências Sociais** é uma aplicação web interativa projetada para auxiliar estudantes universitários e pré-vestibulandos na preparação para avaliações teóricas densas (como ENADE, concursos públicos e exames acadêmicos de graduação).

A plataforma oferece uma experiência de simulação rigorosa com questões contextualizadas, categorização por subáreas do conhecimento humanístico, controle de tempo e cálculo imediato de desempenho com gabarito comentado.

---

## ✨ Funcionalidades Principais

- **⏱️ Modo Exame com Tempo Limite:** Simulação realista de prova com cronômetro regressivo e alerta de encerramento automático.
- **📊 Análise de Desempenho Segmentada:** Exibição da taxa de acerto global e aproveitamento por disciplina ao final do teste.
- **📝 Formatos Variados de Questões:**
  - Questões de múltipla escolha tradicionais.
  - Análise de proposições compostas (Afirmações em Grupo - I, II, III).
  - Estudos de caso e interpretação de texto contemporâneo (ex.: netnografia, cibercultura, políticas públicas).
- **💡 Feedback Pedagógico e Gabarito Justificado:** Visualização imediata das razões teóricas que validam a alternativa correta.
- **📱 Responsividade Completa:** Interface adaptável com transições suaves para smartphones, tablets e computadores.

---

## 📚 Cobertura Disciplinar (100 Questões)

O banco estruturado em [`questions.js`](questions.js) abrange os eixos axiais das Humanidades:

| Disciplina | Qtd. Itens | Principais Temas Abordados |
|---|---|---|
| **Antropologia** | 20 | Etnografia clássica (Malinowski, Boas), Antropologia Digital/Netnografia, Teoria da Cultura, Relativismo Cultural. |
| **Sociologia** | 20 | Clássicos (Durkheim, Marx, Weber), Teoria Crítica, Estruturalismo, Desigualdades e Dinâmicas de Trabalho. |
| **Ciência Política** | 20 | Teoria do Estado, Democracia e Representação, Contratualismo, Instituições Políticas e Opinião Pública. |
| **Economia** | 10 | Macroeconomia, Desenvolvimento Econômico, Economia Política e Políticas de Renda. |
| **Epistemologia** | 10 | Filosofia da Ciência, Critérios de Demarcação (Popper, Kuhn, Feyerabend) e Metodologia Científica. |
| **Psicologia Social** | 10 | Identidade Social, Comportamento de Massa, Representações Sociais e Processos de Socialização. |
| **Geografia Humana** | 10 | Urbanização, Geopolítica, Produção do Espaço, Globalização e Meio Ambiente. |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Semântica estrutural e acessibilidade.
- **CSS3 Moderno:** Flexbox, CSS Grid, variáveis customizadas (*custom properties*) e animações de interface.
- **Vanilla JavaScript (ES6+):** Manipulação eficiente de DOM, gerenciamento de estado do simulado, motor de pontuação e lógica de paginação sem sobrecarga de frameworks.

---

## 🚀 Como Executar

### Opção 1: Diretamente no Navegador
Por ser uma aplicação baseada em Vanilla JS e sem dependências de compilação, você pode clonar e abrir o arquivo `index.html` em qualquer navegador:

```bash
git clone https://github.com/brunomarafiga/teste-sociais.git
cd teste-sociais
# Abra o index.html no navegador de sua preferência
```

### Opção 2: Servidor Local
```bash
python -m http.server 3000
```
Navegue para `http://localhost:3000`.

---

## 🎯 Configuração do Exame

É possível customizar o comportamento do simulado editando [`script.js`](script.js):
- **Quantidade de questões por rodada:** Parâmetro `TOTAL_QUESTIONS`.
- **Duração do cronômetro:** Parâmetro `TIME_LIMIT_MINUTES`.
- **Modo Aleatório (*Shuffle*):** Ativação de sorteio para que cada tentativa apresente questões e alternativas em ordem randômica.

---

<div align="center">
Desenvolvido por <strong>Bruno Marafiga</strong><br>
Curso de Gestão da Informação • Universidade Federal do Paraná (UFPR)
</div>
