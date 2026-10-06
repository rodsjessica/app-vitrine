# 🛍️ Vitrine

Aplicativo mobile desenvolvido em **React Native** para simular um catálogo de produtos, permitindo visualizar, pesquisar e filtrar produtos por categoria.

O projeto foi desenvolvido com foco em **organização de código, componentização, reutilização, performance e testes**, utilizando dados locais para simular o consumo de uma API.

---

## 📱 Sobre o projeto

O **Vitrine** é um catálogo de produtos desenvolvido em React Native.

A aplicação permite:

- 🔎 Pesquisar produtos
- 🏷️ Filtrar produtos por categoria
- 📦 Visualizar uma lista de produtos
- 📄 Acessar os detalhes de um produto
- ⏳ Exibir estados de carregamento
- ⚠️ Exibir estados de erro
- 📭 Exibir estado vazio quando não houver resultados

Além das funcionalidades da aplicação, o projeto possui uma massa de dados com **5.000 produtos**, utilizada para avaliar e trabalhar questões de performance da lista de produtos.

---

## 🛠️ Tecnologias utilizadas

- **React Native**
- **TypeScript**
- **React Navigation**
- **Styled Components**
- **Jest**
- **React Native Testing Library**
- **Yarn**

### Principais conceitos aplicados

- Componentização
- Hooks
- Custom Hooks
- Separação de responsabilidades
- Design System / Theme
- Tipagem com TypeScript
- Testes automatizados
- Otimização de listas com `FlatList`
- Organização por features

---

## 📂 Estrutura do projeto

```text
src/
├── assets/
│   └── images/
│
├── components/
│   ├── Button/
│   ├── EmptyState/
│   ├── ErrorState/
│   ├── Loading/
│   └── ProductCard/
│
├── features/
│   └── products/
│       ├── components/
│       │   ├── CategoryFilter/
│       │   ├── ProductList/
│       │   └── SearchInput/
│       │
│       ├── data/
│       │   └── products.json
│       │
│       ├── hooks/
│       │   └── useProducts.ts
│       │
│       ├── screens/
│       │   ├── CatalogScreen/
│       │   └── ProductDetailsScreen/
│       │
│       ├── services/
│       │   └── productsService.ts
│       │
│       └── types/
│           └── Product.ts
│
├── navigation/
│   └── AppNavigator.tsx
│
└── theme/
    ├── colors.ts
    ├── spacing.ts
    └── ...
```

A organização utiliza uma abordagem baseada em **features**, mantendo componentes, hooks, serviços, telas e tipos relacionados ao domínio de produtos próximos uns dos outros.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado e configurado:

- Node.js
- Yarn
- Android Studio
- Android SDK
- Java/JDK
- Ambiente React Native

Para mais informações sobre a configuração do ambiente, consulte a documentação oficial do React Native.

### 1. Instalar as dependências

Na raiz do projeto:

```bash
yarn
```

### 2. Iniciar o Metro

```bash
yarn start
```

### 3. Executar no Android

Em outro terminal:

```bash
yarn android
```

---

## 📦 Gerando os produtos

O projeto possui um script para geração da massa de dados utilizada pela aplicação.

Para gerar os produtos:

```bash
yarn generate:products
```

Esse comando gera/atualiza o arquivo:

```text
src/features/products/data/products.json
```

A massa de dados contém **5.000 produtos**, permitindo utilizar o aplicativo também como cenário para análise e otimização de performance.

---

## 🧪 Testes

Para executar toda a suíte de testes:

```bash
yarn test --runInBand
```

Para executar especificamente os testes do hook `useProducts`:

```bash
yarn test __tests__/useProducts.test.tsx --runInBand
```

### Por que `--runInBand`?

O parâmetro `--runInBand` faz com que o Jest execute os testes de forma sequencial, utilizando um único processo.

Isso pode ser útil em ambientes de desenvolvimento ou CI quando queremos uma execução mais previsível e com menor utilização de recursos.

---

## ⚡ Performance

Uma das etapas do projeto foi analisar o comportamento da aplicação utilizando uma lista com **5.000 produtos**.

### Baseline

Com 5.000 produtos, o carregamento inicial apresentou aproximadamente:

> **7 segundos**

Esse resultado foi utilizado como ponto de partida para identificar possíveis gargalos.

### Estratégia de otimização

A análise de performance segue uma abordagem incremental:

```text
5.000 produtos
      ↓
Medir baseline
      ↓
Identificar gargalos
      ↓
Otimizar FlatList
      ↓
Medir novamente
      ↓
Comparar resultados
```

O objetivo é evitar otimizações prematuras e conseguir medir o impacto real de cada alteração.

---

## 🎨 Design

O aplicativo utiliza um tema centralizado para manter consistência visual.

### Cores principais

| Cor | Valor |
|---|---|
| Primary | `#2563EB` |
| Background | `#F8FAFC` |
| Surface | `#FFFFFF` |
| Text | `#0F172A` |
| Text Secondary | `#64748B` |
| Border | `#E2E8F0` |
| Error | `#DC2626` |

O espaçamento também é centralizado no tema, facilitando a manutenção e evolução da interface.

---

## 🧩 Arquitetura

O projeto busca manter as responsabilidades separadas:

```text
Screen
  ↓
Hook
  ↓
Service
  ↓
Data
```

Por exemplo, a tela de catálogo não precisa conhecer os detalhes de como os produtos são carregados.

O `useProducts` concentra a lógica relacionada aos produtos, enquanto o `productsService` é responsável pela origem dos dados.

Essa separação facilita futuramente substituir o JSON local por uma API real sem precisar reestruturar toda a interface.

---

## 🔄 Dados

Atualmente os produtos são carregados a partir de um arquivo JSON local.

```text
productsService.ts
        ↓
products.json
```

A estrutura foi pensada para permitir uma futura substituição por uma API REST.

O projeto também possui `axios` instalado para facilitar essa evolução.

---

## 📋 Funcionalidades

### Catálogo

- Listagem de produtos
- Busca por nome
- Filtro por categoria
- Contagem de resultados
- Estados de loading
- Estados de erro
- Estado vazio

### Produto

- Visualização dos detalhes
- Imagem
- Nome
- Categoria
- Informações do produto

### Performance

- Massa de dados com 5.000 produtos
- Utilização de `FlatList`
- Análise de tempo de carregamento
- Estratégia incremental de otimização

### Qualidade

- TypeScript
- Componentização
- Hooks reutilizáveis
- Testes automatizados
- Separação de responsabilidades

---

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `yarn start` | Inicia o Metro |
| `yarn android` | Executa o aplicativo no Android |
| `yarn generate:products` | Gera a massa de produtos |
| `yarn test --runInBand` | Executa todos os testes |
| `yarn test __tests__/useProducts.test.tsx --runInBand` | Executa os testes do `useProducts` |

---

## 🎯 Objetivo do projeto

O Vitrine foi desenvolvido como um projeto prático para demonstrar conhecimentos em desenvolvimento mobile com React Native, com atenção especial a:

- Arquitetura e organização de código
- Experiência do usuário
- Componentização
- TypeScript
- Testes
- Performance
- Manutenibilidade

O projeto também serve como base para evoluções futuras, como integração com uma API real, autenticação, persistência de dados e novas funcionalidades de catálogo.

---

## 👩‍💻 Desenvolvimento

Projeto desenvolvido com **React Native CLI**, utilizando **TypeScript** e **Yarn**.

---

## 📚 Referências

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)