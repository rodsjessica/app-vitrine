# Uso de IA

## Ferramentas utilizadas

- ChatGPT

## Onde utilizei IA

- organização da arquitetura;
- criação de estruturas iniciais de código;
- investigação e correção de problemas;
- análise de performance;
- criação e ajuste de testes;
- revisão das decisões técnicas;
- apoio na documentação do projeto.

## Prompts relevantes

### Arquitetura

> "Me ajude a estruturar um projeto React Native CLI com TypeScript, styled-components e uma arquitetura baseada em features para um catálogo de produtos."
### Performance

> "Tenho uma lista com 5.000 produtos em React Native. Como posso investigar se existe um problema de performance sem aplicar otimizações desnecessárias?"

### Testes

> "Me ajude a criar testes para o hook useProducts, cobrindo carregamento, busca, categoria e estado vazio."

## Sugestões rejeitadas

### Renderizar todos os produtos na tela inicial

Foi considerada a possibilidade de apresentar os 5.000 produtos diretamente na tela inicial.

Essa abordagem foi modificada.

A tela inicial passou a funcionar como uma experiência de descoberta, mostrando produtos em destaque e banners.

A listagem completa dos produtos fica disponível através da opção `Todos`.

A decisão foi tomada para evitar uma experiência inicial desnecessariamente pesada.

### Utilizar Axios para carregar os produtos

Axios foi instalado no projeto pensando em uma futura integração com API.

Porém, como o desafio permite dados mockados e não existe uma API real fornecida, a implementação atual utiliza um JSON local através de `productsService.ts`.

Isso evita criar uma falsa camada de API apenas para simular uma integração que não existe.

## Validação

As sugestões da IA não foram consideradas automaticamente corretas.

As decisões foram validadas através de:

- execução do aplicativo no Android;
- testes manuais dos fluxos;
- teste com 5.000 produtos;
- comparação do carregamento com e sem imagens;
- análise dos warnings apresentados pelo React Native;
- execução dos testes automatizados;
- revisão do código produzido.

O comando utilizado para validar os testes foi:

yarn test --runInBand

## Reflexão

O que a IA acelerou?
A IA acelerou principalmente tarefas de pesquisa, geração de dados mockados e esclarecimento de dúvidas técnicas

O que continuou exigindo decisão humana?
Eu precisei decidir quais sugestões faziam sentido para o projeto, quais tecnologias utilizar, como organizar o código, quais abstrações evitar e como validar se a implementação realmente funcionava.
Além disso, entender o código gerado foi importante. 
No final, utilizei a IA como uma ferramenta de produtividade e aprendizado, e não como substituta do desenvolvimento.