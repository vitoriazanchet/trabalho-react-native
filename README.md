# Book & Brew

<p align="center">
    <img src="https://github.com/vitoriazanchet/trabalho-react-native/blob/main/assets/icons/cafe.png" alt="café" height="35px" />
    <img src="https://github.com/vitoriazanchet/trabalho-react-native/blob/main/assets/icons/gatinho3.png" alt="gato" height="35px" />
    <img src="https://github.com/vitoriazanchet/trabalho-react-native/blob/main/assets/icons/livro fechado.png" alt="livro" height="35px" />
</p>

Aplicativo mobile de uma cafeteria temática (livros, café e gatos), desenvolvido em React Native com Expo Router como trabalho da disciplina de Desenvolvimento de Aplicações Multiplataformas (Serratec).

> "Mais que um café, um lugar para pertencer."

## Sobre o projeto ✨

O Book & Brew é um aplicativo que une cafeteria, livraria e um cantinho para gatos. O app apresenta cardápio, catálogo de livros, a história do lugar, seus valores, fotos do ambiente, avaliação do atendimento, e uma seção de itens selecionados.

![Video do aplicativo](https://github.com/vitoriazanchet/trabalho-react-native/blob/main/assets/Book&Brew.gif)

## ⚛ Stack

- Expo SDK 54 / React Native 0.81
- Expo Router (navegação baseada em arquivos)
- TypeScript
- React Navigation Drawer (`@react-navigation/drawer`)
- React Navigation Bottom Tabs (`@react-navigation/bottom-tabs`) — usado nas tabs internas de Cardápio e Biblioteca do Gato
- `@expo/vector-icons` para ícones
- Fontes customizadas via `expo-font` (Playfair Display, Lato)
- `react-native-reanimated` / `react-native-worklets` (dependência do Drawer)

Cada arquivo de rota em `app/(drawer)/*/index.tsx` importa o componente correspondente de `pages/` e o envolve com `Base`, que aplica `Navbar` e `Footer` automaticamente em todas as telas.

## 🎯 Funcionalidades Implementadas

### Navegação

O projeto implementa duas formas de navegação, conforme exigido:

1. **Drawer (menu lateral)** — acionado pelo ícone de hambúrguer no `Navbar`, lista as 5 páginas com estilo customizado (cores da paleta do projeto, item ativo destacado).
2. **Tabs internas** — dentro das páginas **Cardápio** e **Biblioteca do Gato**, uma tab bar (`@react-navigation/bottom-tabs`) organiza o conteúdo em subcategorias: Salgados/Doces/Bebidas no Cardápio, e Destaque/Categorias/Recomendados na Biblioteca, cada uma com cores e ícones próprios.

### Integração com API

- **Biblioteca do Gato** — consome via `GET` a API pública do Google Books, trazendo dados reais de livros (capa, autor, sinopse) para o catálogo.
- **Nosso Refúgio** — envia avaliações (nome, e-mail, comentário) via `fetch` em `POST` para uma API mock (MockAPI), com validação de campos no front-end antes do envio e feedback visual de sucesso/erro.
- **Home** — consome via `GET` a mesma API mock (MockAPI) para exibir as avaliações já cadastradas.

### Componentização

O layout foi dividido em `Navbar`, `Footer`, `Base` (wrapper de página) e páginas individuais.

### Requisitos Mínimos Cumpridos

- [x] Duas bibliotecas de navegação (Drawer + Tabs)
- [x] Componentização
- [x] Requisição à API
- [x] Uso de Context API
- [x] Uso de AsyncStorage

## 🗂️ Estrutura do projeto

```
src/
  app/                   # rotas (Expo Router)
    _layout.tsx          # carrega fontes, ponto de entrada
    index.tsx            # redireciona para /(drawer)/Home
    (drawer)/
      _layout.tsx        # configuração visual do Drawer
      Home/index.tsx
      Cardapio/index.tsx
      NossoRefugio/index.tsx
      BibliotecaDoGato/index.tsx
      ItensSelecionados/index.tsx
  componentes/           # componentes reutilizáveis
    Base/                # wrapper com Navbar + conteúdo + Footer
    Navbar/              # cabeçalho fixo, abre o Drawer
    Footer/              # rodapé com tab bar de navegação
  pages/                 # conteúdo real de cada tela
    Home/
    Cardapio/
    NossoRefugio/
    BibliotecaDoGato/
    ItensSelecionados/
  styles/
    theme.ts             # cores, fontes e medidas centralizadas
assets/
  icons/
  images/
```

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/vitoriazanchet/trabalho-react-native.git
    ```
2.  **Entre na pasta do projeto:**
    ```bash
    cd trabalho-react-native
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
     ```
4.  **Rodar em ambiente de desenvolvimento:**
    ```bash
    npx expo start
    ```
5.  Abra o navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).

## 👩‍💻 Integrantes

| Nome | Responsabilidade | GitHub | LinkedIn |
|---|---|---|---|
| **Adriane** |  Página cardápio e subpáginas: salgados, doces e bebidas | [GitHub](https://github.com/AdrianeTranhaqui) | [LinkedIn](https://www.linkedin.com/in/adriane-tranhaqui-356806353/) |
| **Ana Luísa** | Página home, GET com MockAPI | [GitHub](https://github.com/devAnaLuX) | [LinkedIn](https://www.linkedin.com/in/ana-luisa-cunha-reis-8baa563a3/) |
| **Melissa** | Página itens selecionados, Context API, AsyncStorage | [GitHub](https://github.com/melissa-lima21) | [LinkedIn](https://www.linkedin.com/in/melissa-lima-0628a324b/) |
| **Raquel** | Página biblioteca do gato e subpáginas: destaque, categorias e recomendados, conexão com API pública | [GitHub](https://github.com/Raquel-Beep) | [LinkedIn](https://www.linkedin.com/in/raquel-taveira-02668423b/) |
| **Vitória** | Página nosso refugio, navegações, componentes básicos, POST com MockAPI | [GitHub](https://github.com/vitoriazanchet) | [LinkedIn](https://www.linkedin.com/in/vitoria-zanchet) |

---

## 📄 Licença

Projeto desenvolvido para fins educacionais no programa **Serratec** — Residência em Tecnologia da Informação.
