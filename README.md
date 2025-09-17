<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Diário Inteligente

## Visão Geral

O **Diário Inteligente** é uma aplicação que utiliza inteligência artificial para transformar a sua rotina de anotações diárias. Em vez de simplesmente registrar os seus pensamentos, 
a aplicação analisa as suas entradas e fornece **reflexões de apoio e perguntas instigantes**. O objetivo é ir além da superfície, ajudando você a obter novas perspectivas, aprofundar 
o autoconhecimento e processar suas emoções de forma mais construtiva.

## O Projeto
https://github.com/user-attachments/assets/76d2c742-151e-4341-9632-b724f80b91a0

## Experimente no AI Studio
https://ai.studio/apps/drive/1vLHzDv4DRvLDmKSAp4bY4ptLrjq2rEVZ

## Experimente no deploy no Google Cloud
https://di-rio-inteligente-677978838231.us-west1.run.app/

## Funcionalidades Principais

  * **Análise de Sentimento com IA**: A IA avalia o tom e o conteúdo da sua entrada diária para entender o seu estado emocional.
  * **Reflexões Personalizadas**: Receba reflexões que são geradas com base na sua anotação.
  * **Perguntas Instigantes**: A aplicação gera perguntas que te incentivam a pensar criticamente sobre o que você escreveu e a explorar novos caminhos de pensamento.

## Como Executar o Projeto

### **Pré-requisitos**

  * [Node.js](https://nodejs.org/)
    
### **Instalação e Execução**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/MaduAraujo/Diario-Inteligente.git
    cd Diario-Inteligente
    ```
2.  **Instale as dependências:**
    ```bash
    yarn install
    # ou
    npm install
    ```
3.  **Configure a sua chave de API:**
      * Crie um arquivo `.env.local` na raiz do projeto.
      * Adicione sua chave de API para o modelo de IA.
    <!-- end list -->
    ```env
    API_KEY = "sua_chave_aqui"
    ```
4.  **Execute a aplicação:**
    ```bash
    yarn dev
    # ou
    npm run dev
    ```
