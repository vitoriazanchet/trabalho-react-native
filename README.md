# Book & Brew

<p align="center">
    <img src="https://github.com/vitoriazanchet/trabalho-react-native/blob/main/assets/icons/cafe.png" alt="café" height="35px" />
    <img src="https://github.com/vitoriazanchet/trabalho-react-native/blob/main/assets/icons/gatinho3.png" alt="gato" height="35px" />
    <img src="https://github.com/vitoriazanchet/trabalho-react-native/blob/main/assets/icons/livro fechado.png" alt="livro" height="35px" />
</p>

Aplicativo mobile de uma cafeteria temática (livros, café e gatos), desenvolvido em React Native com Expo Router como trabalho da disciplina de Desenvolvimento de Aplicações Multiplataformas (Serratec).

> "Mais que um café, um lugar para pertencer."

## Sobre o projeto

O Book & Brew é um aplicativo que une cafeteria, livraria e um cantinho para gatos. O app apresenta cardápio, catálogo de livros, a história do lugar, seus valores, fotos do ambiente, avaliação do atendimento, e uma seção de itens selecionados.

## Stack

- Expo SDK 54 / React Native 0.81
- Expo Router (navegação baseada em arquivos)
- TypeScript
- React Navigation Drawer (`@react-navigation/drawer`)
- `@expo/vector-icons` para ícones
- Fontes customizadas via `expo-font` (Playfair Display, Lato)
- `react-native-reanimated` / `react-native-worklets` (dependência do Drawer)

Cada arquivo de rota em `app/(drawer)/*/index.tsx` importa o componente correspondente de `pages/` e o envolve com `Base`, que aplica `Navbar` e `Footer` automaticamente em todas as telas.

## Funcionalidades já implementadas

### Navegação

O projeto implementa duas formas de navegação, conforme exigido:

1. **Drawer (menu lateral)** — acionado pelo ícone de hambúrguer no `Navbar`, lista as 5 páginas com estilo customizado (cores da paleta do projeto, item ativo destacado).
2. **Tab bar no Footer** — linha horizontal de ícones com legenda, presente em todas as páginas, permite navegar diretamente entre as 5 telas sem abrir o Drawer.

### Integração com API

A página **Nosso Refúgio** envia avaliações (nome, e-mail, comentário) via `fetch` em `POST` para uma API mock (MockAPI), com validação de campos no front-end antes do envio e feedback visual de sucesso/erro.

### Componentização

O layout foi dividido em `Navbar`, `Footer`, `Base` (wrapper de página) e páginas individuais.

## Em desenvolvimento

- [x] Duas formas de navegação (Drawer + tab bar)
- [x] Componentização (Base, Navbar, Footer, páginas separadas)
- [x] Requisição à API (formulário de avaliação em Nosso Refúgio)
- [ ] Uso de Context API
- [ ] Uso de AsyncStorage

## Estrutura do projeto

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
| **Adriane** |  Página cardápio | [GitHub](https://github.com/AdrianeTranhaqui) | [LinkedIn](https://www.linkedin.com/in/adriane-tranhaqui-356806353/) |
| **Ana Luísa** | Página home | [GitHub](https://github.com/devAnaLuX) | [LinkedIn](https://www.linkedin.com/in/ana-luisa-cunha-reis-8baa563a3/) |
| **Melissa** | Página itens selecionados | [GitHub](https://github.com/melissa-lima21) | [LinkedIn](https://www.linkedin.com/in/melissa-lima-0628a324b/) |
| **Raquel** | Página biblioteca do gato  | [GitHub](https://github.com/Raquel-Beep) | [LinkedIn](https://www.linkedin.com/in/raquel-taveira-02668423b/) |
| **Vitória** | Iniciação do projeto, criação dos componentes gerais, página nosso refugio, conexão com MockAPI | [GitHub](https://github.com/vitoriazanchet) | [LinkedIn](https://www.linkedin.com/in/vitoria-zanchet) |

---

## 📄 Licença

Projeto desenvolvido para fins educacionais no programa **Serratec** — Residência em Tecnologia da Informação.
