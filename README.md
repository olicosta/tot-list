# 📱 To-do List App (React Native + Expo)

Aplicativo de lista de tarefas desenvolvido em **React Native com Expo**, com suporte a **persistência local utilizando AsyncStorage**.

O objetivo do projeto é permitir que o usuário gerencie tarefas e mantenha os dados salvos mesmo após fechar o aplicativo.

---

## 🚀 Funcionalidades

O aplicativo permite:

- ✅ Adicionar novas tarefas  
- ✅ Marcar tarefas como concluídas  
- ✅ Editar tarefas  
- ✅ Excluir tarefas com confirmação (modal)  
- ✅ Visualizar tarefas com status (feitas / pendentes)  
- ✅ Persistir dados localmente com AsyncStorage  

---

## 💾 Persistência de Dados

Foi utilizado o **AsyncStorage**, que armazena os dados no dispositivo em formato chave/valor.

### Funcionamento:

- Ao adicionar, editar ou excluir uma tarefa → os dados são salvos automaticamente  
- Ao abrir o aplicativo → as tarefas são carregadas automaticamente  

Isso garante que nenhuma informação seja perdida.


---

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- AsyncStorage

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/olicosta/tot-list.git
cd tot-list
npm run web