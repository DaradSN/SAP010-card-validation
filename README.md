# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Marco: Critérios de Aceitação Mínimos do Projeto](#4-marco-critérios-de-aceitação-mínimos-do-projeto)
* [5. Marco Opcional: Mostrar a franquia do cartão](#5-marco-opcional-mostrar-a-franquia-do-cartão)
* [6. Considerações técnicas](#6-considerações-técnicas)
* [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
* [8. Guias, dicas e leituras
  complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Para considerar o feedback do projeto](#9-para-considerar-o-feedback-do-projeto)

***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Neste projeto, criei um aplicativo da Web para validar números de cartão de crédito. Também adicionei a funcionalidade de ocultar todos os dígitos, exceto os quatro últimos. Durante o desenvolvimento, utilizei os fundamentos do JavaScript, como variáveis, condicionais e funções, além de trabalhar com eventos e manipulação do DOM. Também aprimorei meus conhecimentos em HTML e CSS. Além disso, aprendi sobre objetos, estruturas, métodos e iteração em JavaScript. Utilizei um boilerplate para estruturar o projeto em diferentes pastas e aprendi sobre ferramentas de melhoria de código, como linters e testes unitários. Durante o desenvolvimento, também fiz uso do controle de versão com o Git e a plataforma GitHub.

## 3. Considerações gerais

Resolvi este projeto individualmente, seguindo uma abordagem recomendada de 1-3 sprints para sua conclusão. Durante esse período,  segui a sugestão de não tentar saber tudo antes de começar a codificar, entendendo que não precisava me preocupar com o que ainda não entendia completamente. Acreditei no processo de aprendizado e confiei que iria aprender ao longo do caminho.
No geral, essa experiência me permitiu consolidar meus conhecimentos em JavaScript e suas principais tecnologias relacionadas, fornecendo uma base sólida para futuros projetos da mesma natureza. Estou satisfeita com o resultado alcançado e animada para continuar desenvolvendo minhas habilidades nessa área. 
Aprendi que o foco no aprendizado é fundamental e que o processo de desenvolvimento é tão importante quanto o resultado final.

## 4. Interface

![imagem](https://github.com/DaradSN/SAP010-card-validation/assets/128162905/c6d14901-1c2c-4532-a3ae-f960acb3a93a)
