# Regras de TypeScript

- Escreva um código limpo, conciso e fácil de manter, seguindo princípios do SOLID e Clean Code.
- Use nomes de variáveis descritivos (exemplos: isLoading, hasError).
- Use kebab-case para nomes de pastas e arquivos.
- Use cameon-case para nomes de variaveis.
- Sempre use TypeScript para escrever código.
- DRY (Don't Repeat Yourself). Evite duplicidade de código. Quando necessário, crie funções/componentes reutilizáveis.
- NUNCA escreva comentários no seu código.
- NUNCA rode `pnpm run dev` para verificar se as mudanças estão funcionando.
- **SEMPRE** use a biblioteca `dayjs` para manipulação e formatação de datas.
- **SEMPRE** use arrow functions: const () => {}
- **SEMPRE** use type no lugar de interface
- **SEMPRE** use sufixo type no nome de variaveis que sao tipo: productType

## Tipagem

- **Obrigatório:** Todo o código do projeto deve ser escrito em TypeScript.
- **Declaração de Tipos:** **SEMPRE** utilize `type` no lugar de `interface` para declaração de tipos e tipagem de props.

## Nomenclatura de Variáveis

- Use nomes de variáveis altamente descritivos que deixem claro o contexto e o tipo de dado.
- Todos os nomes de variáveis devem ser em Inglês US.
- Para booleanos, sempre utilize prefixos semânticos (exemplos: `isLoading`, `hasError`, `isSubmitting`, `canEdit`).
