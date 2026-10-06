# Decisões Técnicas

## 1. Arquitetura

A aplicação foi organizada utilizando uma estrutura baseada em features.

A feature de produtos concentra seus componentes, hooks, telas, serviços, tipos e dados relacionados ao catálogo.

Também foram criados componentes compartilhados em `src/components`, como `ProductCard`, `Loading`, `EmptyState` e `ErrorState`.

A navegação foi separada em `src/navigation` e o tema visual foi centralizado em `src/theme`.

A comunicação com os dados foi isolada em `productsService.ts`. Atualmente os produtos são carregados de um arquivo JSON local, mas essa abstração permite substituir a fonte de dados por uma API futuramente sem alterar diretamente as telas.

---

## 2. Estado

O estado relacionado ao catálogo foi concentrado no hook `useProducts`.

Atualmente ele controla:

- produtos;
- busca;
- categoria selecionada;
- loading;
- erro.

Também são utilizados `useMemo` para calcular categorias e produtos filtrados.

Não foi utilizado um gerenciador de estado global porque, neste momento, o estado necessário está concentrado no fluxo de produtos. Adicionar Redux, Zustand ou outra solução global neste estágio aumentaria a complexidade sem uma necessidade clara.

---

## 3. API / Dados

Para o desafio foi utilizado um arquivo JSON local com 5.000 produtos.

A aplicação acessa os dados através de `productsService.ts`, mantendo a origem dos dados isolada da interface.

O fluxo possui:

- estado de loading;
- tratamento de erro;
- possibilidade de tentar novamente através do `reload`.

Não foi implementado timeout, retry automático, cache de API ou paginação real porque não existe uma API remota neste desafio.

Em uma aplicação de produção, eu utilizaria uma camada de API com timeout, tratamento de erros, retry quando apropriado e cache.

A listagem utiliza `FlatList`, que permite renderização virtualizada dos itens.

---

## 4. Performance

### Problema investigado

O desafio considera cenários com milhares de produtos. Por isso, foi realizado um teste utilizando 5.000 produtos.

Durante o teste, a lista permaneceu responsiva e a rolagem apresentou comportamento adequado.

Foi observado um atraso de aproximadamente 2 segundos no carregamento das imagens.

### Investigação

Para identificar a origem do atraso, a renderização das imagens foi temporariamente removida da lista.

Após essa alteração, os produtos passaram a aparecer rapidamente.

Com isso, a evidência indicou que o principal gargalo observado não estava na quantidade de produtos ou na `FlatList`, mas no carregamento das imagens remotas utilizadas nos produtos.

### Alterações realizadas

Foram utilizadas algumas decisões para reduzir trabalho desnecessário:

- utilização de `FlatList` para a lista principal;
- `renderItem` e `keyExtractor` estabilizados com `useCallback`;
- utilização de `useMemo` para categorias e produtos filtrados;
- evitar `ScrollView` vertical envolvendo a `FlatList`;
- a tela inicial apresenta apenas produtos em destaque, em vez de renderizar os 5.000 produtos imediatamente;
- os 5.000 produtos ficam disponíveis através da opção `Todos`.

Não foram adicionadas configurações avançadas de performance da `FlatList` sem evidência de necessidade.

### Validação

O comportamento foi validado no Android utilizando 5.000 produtos.

A lista permaneceu utilizável e a rolagem continuou responsiva.

Também foi realizado um teste comparando o comportamento com e sem o carregamento das imagens, indicando que as imagens remotas eram a principal causa do atraso observado.

### Evolução em produção

Em uma aplicação real, eu avaliaria:

- CDN para imagens;
- imagens redimensionadas para o tamanho necessário;
- compressão;
- cache local;
- placeholders durante o carregamento;
- carregamento otimizado de imagens.

---

## 5. Testes

Foram priorizados testes para os comportamentos principais do catálogo.

Atualmente existem testes para:

- carregamento inicial dos produtos;
- busca por produto;
- filtro por categoria;
- resultado vazio;
- renderização inicial da aplicação.

A prioridade foi testar comportamentos que representam regras importantes da aplicação, principalmente carregamento e filtros.

O objetivo é garantir que alterações futuras na implementação não quebrem os fluxos principais.

---

## 6. Offline

O modo offline completo não foi implementado nesta versão.

Como evolução, eu criaria uma camada de persistência para armazenar localmente os produtos consultados.

O fluxo poderia funcionar da seguinte maneira:

1. consultar a API;
2. salvar os produtos consultados localmente;
3. caso o dispositivo esteja offline, utilizar os dados armazenados;
4. quando a conexão retornar, sincronizar alterações pendentes.

Para favoritos, as ações poderiam ser armazenadas localmente enquanto o dispositivo estiver offline e enviadas para o servidor quando a conexão fosse restabelecida.

Também seria necessário definir uma estratégia para conflitos de sincronização.

---

## 7. Escalabilidade

A estrutura baseada em features facilita a evolução da aplicação.

Novas funcionalidades poderiam ser organizadas separadamente, por exemplo:

- `features/favorites`;
- `features/cart`;
- `features/auth`.

A separação entre componentes compartilhados, features, serviços e navegação também facilita a divisão do trabalho entre diferentes desenvolvedores ou equipes.

O serviço de produtos também permite substituir posteriormente o JSON local por uma API sem acoplar essa mudança diretamente à interface.

---

## 8. Trade-offs

### JSON local

Foi utilizado JSON porque o desafio permite dados mockados e não existe uma API fornecida.

Como trade-off, o comportamento de uma API real não pode ser reproduzido completamente.

A criação de `productsService.ts` reduz o impacto dessa decisão, pois a fonte de dados pode ser substituída futuramente.

### Tela inicial

A tela inicial não renderiza os 5.000 produtos.

Ela apresenta uma experiência de descoberta com produtos em destaque e banners. A listagem completa fica disponível através da opção `Todos`.

Essa decisão evita colocar milhares de itens na experiência inicial e mantém o fluxo mais simples.

### FlatList

Foi utilizada `FlatList` para a listagem completa.

Não foram adicionadas otimizações avançadas antes de identificar um problema real, porque os testes com 5.000 produtos mostraram que a lista permanecia responsiva.

### Estado local

Foi escolhido estado local através do hook `useProducts` em vez de adicionar um gerenciador global.

Isso mantém a implementação mais simples enquanto o estado ainda pertence principalmente ao catálogo.

---

## 9. O que eu faria diferente

Em uma aplicação de produção, eu evoluiria a solução para:

- utilizar uma API paginada;
- implementar cache dos produtos;
- implementar suporte offline;
- adicionar sincronização de favoritos;
- utilizar uma estratégia de otimização e cache de imagens;
- implementar timeout e retry para chamadas de API;
- aumentar a cobertura de testes de integração;
- substituir o mock JSON por uma fonte de dados real.

Também corrigiria o warning relacionado ao `SafeAreaView` utilizado em `ProductDetailsScreen`, utilizando `react-native-safe-area-context`.