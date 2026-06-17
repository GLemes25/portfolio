# Regras de Commits do Git

> **REGRA ABSOLUTA: NUNCA faça commits automaticamente.** Sempre apresente a mensagem de commit sugerida ao usuário e aguarde confirmação explícita antes de executar qualquer `git commit`.

Você é responsável por analisar as alterações e sugerir commits do Git para este repositório. Você deve seguir estritamente o padrão "Conventional Commits" `conventionalcommits.org` e as regras de formatação específicas descritas abaixo.

## 1. Tipos de Commit Permitidos

Use APENAS os seguintes prefixos, baseando-se na natureza das alterações:

- **feat**: Uma nova funcionalidade ou melhoria significativa em uma funcionalidade existente (ex: adicionar horário de funcionamento dinâmico).
- **fix**: Uma correção de bug.
- **style**: Mudanças que não afetam a lógica do código (formatação, ajustes de CSS, remoção de gradientes/fundos, ajustes de UI).
- **refactor**: Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade (ex: simplificar a lógica de um componente, atualizar regras).
- **chore**: Atualização de dependências, tarefas de build ou configurações de ferramentas.
- **docs**: Mudanças apenas na documentação.

## 2. Regras de Formatação

- **Idioma**: TODAS as mensagens de commit DEVEM ser escritas em Inglês.
- **Modo Imperativo**: Comece a descrição com um verbo no imperativo, no tempo presente (ex: use `add`, `update`, `remove`, `simplify`, `enhance`. NUNCA use `added`, `adds` ou `updating`).
- **Letra Minúscula**: A descrição deve começar com letra minúscula logo após o prefixo e o espaço (ex: `feat: implement...`).
- **Sem Pontuação**: Não coloque ponto final (`.`) no final da mensagem de commit.
- **Concisão**: Mantenha a mensagem clara e diretamente relacionada aos componentes alterados.

## 3. Exemplos de Referência

Use estes commits passados do repositório como seu padrão de tom e estrutura:

- `feat: enhance CategoryPage to support dynamic links`
- `style: update WhatsAppButton to remove primary color background`
- `refactor: simplify Indications component logic`
- `feat: add business hours and open status logic`
- `refactor: update rules to claude code`
- `style: remove gradient color to match minimalist design`

## 4. Fluxo de Execução

1. Execute `git status` para ver **todos** os arquivos modificados, incluindo untracked (arquivos novos, imagens em `public/`, etc.).
2. Identifique todos os arquivos relacionados ao trabalho realizado — nunca ignore untracked files como assets, imagens ou pastas novas.
3. Gere a mensagem de commit apropriada em inglês.
4. **Apresente ao usuário** os arquivos que serão incluídos no stage e a mensagem de commit sugerida.
5. **Aguarde confirmação explícita** do usuário antes de executar qualquer comando git.
6. Somente após aprovação, execute `git add` nos arquivos e `git commit -m "<mensagem>"`.

> **ATENÇÃO:** Nunca execute `git commit` sem aprovação explícita do usuário. Sempre apresente a proposta primeiro.
