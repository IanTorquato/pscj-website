# Getting Started

> Antes de mais nada, aconselho para os usuários do Windows instalarem o [chocolatey](https://chocolatey.org/). Ele facilita muito a questão de instalar, atualizar e principalmente remover "programas".
>
> Uso ele para instalações desde fontes como **fira-code**, até o próprio **yarn** e **nvm**.

## Pré-requisitos

* NodeJS - Procure instalar com o _nvm_
* Yarn
* VS Code

## Instalar e configurar

1. Clone o repositório
2. Instale as dependências rodando `yarn` na raiz do projeto
3. Crie um arquivo `.env` baseado no `.env.example`
4. Na pasta `.vscode` crie um arquivo `.settings.json` baseado no `.settings.example.json`

# Estrutura

* Arquivos devem ser escritos no padrão **camelCase**, exceto:
  * Arquivos `.tsx` e arquivos `.ts` que contenham uma classe - devem ser escritos no padrão **PascalCase**

# Padrões e normas

### Geral
* Permitido uso de **português** somente para palavras sem tradução, relacionadas ao negócio ou com uma tradução pouco conhecida (procure antes por sinônimos)
  * O mesmo se aplica aos comentários no código

### TypeScript
* Exportar preferencialmente **sem default**
* Não é permitida importação de arquivos **parent** - usando `../`
* Imports sem uso do **from** devem ficar por último e em ordem alfabética
* Constantes devem ficar logo após as importações
* A criação de tipos deve ser feita com **type**
  * Uso de **interface** somente quando há necessidade de estender (_extends_) outros tipos
* Contextos devem conter 3 coisas:
  * Criação do contexto em si (**createContext**)
  * Criação e exportação do provider (**ContextNameProvider**)
  * Criação e exportação do hook para usar o contexto (**useContextName**)
* Na construção de componentes e afins deve-se respeitar a seguinte ordem:
  * Hook `useState`
  * Demais variáveis/hooks criados com `const` e `let`
  * Hook `useEffect`
  * Funções
      * Devem ser escritas como **arrow functions**
      * Caso sejam desencadeadas por uma ação do usuário, iniciar com **handle**

### Testes
* Usar a ordem indicada pela **documentação oficial** de ["Which Query Should I Use"](https://testing-library.com/docs/queries/about/#priority)
* Seguir o que é mostrado no artigo [Erros comuns com React Testing Library](https://giovanisleite.dev/erros-comuns-com-react-testing-library)
