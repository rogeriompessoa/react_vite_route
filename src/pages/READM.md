# Git

## 1 - Configuração do usuário das alterações

Fonte: [Configuração do git]( https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git  )

### 1.1. Setando o nome

```js
git config --global user.name "Fulano de Tal"
```
### 1.2. Setando o email

```js
git config --global user.email fulanodetal@exemplo.br
```

## Subir alterações para o repositório remoto

### 1 - Verficar as alterações:
```js
git status
```
### 2 - Adiconar as alterações que serão enviadas

```js
git add .
```

### 3 - Conferir as alterações enviadas

```js
git status
```
### 4 - Preparar as alterações para serem enviadas

```js
git commit -m "comentario"
```
### 5 - Conferir a preparação

```js
git status
```
### 6 - Envia as alterações:

```js
git push
```

# 2 -subir projeto com vite  aparti de um reositorio remoto(git hub)

```js
git init
```
# 2.1
criar rpositorio no git hub

### 2.3. repeti a partir do item 2

