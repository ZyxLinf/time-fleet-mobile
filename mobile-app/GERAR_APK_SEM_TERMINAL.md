# 📱 Time Fleet Mobile - Como Gerar o APK SEM precisar de terminal

## Método: GitHub Actions (Nuvem — GRÁTIS)
> Não precisa instalar nada. O APK é gerado automaticamente na internet.

---

## Passo 1: Criar uma conta no GitHub
Acesse: https://github.com e crie uma conta gratuita.

---

## Passo 2: Criar um repositório

1. Após logar no GitHub, clique em **"New repository"** (botão verde)
2. Nome: `time-fleet-mobile`
3. Deixe como **Public** (para usar GitHub Actions gratuitamente)
4. Clique em **"Create repository"**

---

## Passo 3: Fazer upload dos arquivos

Na tela do repositório criado, clique em **"uploading an existing file"**

Arraste e solte os seguintes arquivos e pastas da pasta `mobile-app`:
```
mobile-app/
├── .github/           ← OBRIGATÓRIO (contém o workflow)
├── src/               ← código do app
├── build.js
├── capacitor.config.json
└── package.json
```

> **ATENÇÃO:** A pasta `.github` começa com ponto. No Windows Explorer,
> vá em Exibir → marque "Itens Ocultos" para vê-la.

Clique em **"Commit changes"** para salvar.

---

## Passo 4: Aguardar o Build (automático)

1. Após o upload, o GitHub começa a compilar automaticamente.
2. Clique na aba **"Actions"** no topo do repositório.
3. Você verá um workflow rodando com o nome **"Build Android APK"**
4. Aguarde 5-10 minutos. Quando o círculo ficar **verde ✅**, está pronto.

---

## Passo 5: Baixar o APK

1. Clique no workflow concluído (círculo verde)
2. Role a página até a seção **"Artifacts"**
3. Clique em **"TimeFleet-OS-App"** para baixar o arquivo .zip
4. Descompacte o .zip — dentro estará o arquivo **app-debug.apk**

---

## Distribuição

Envie o `app-debug.apk` para os motoristas via WhatsApp, e-mail ou pendrive.

No celular:
1. Abrir o arquivo APK
2. Se aparecer "Fonte desconhecida": Configurações → Segurança → Instalar apps desconhecidos → Permitir
3. Na primeira abertura, informar o endereço do servidor Time Fleet

---

## Atualizar o APK no futuro

Sempre que alterar o código do app:
1. Acesse o repositório no GitHub
2. Clique no arquivo que quer alterar → ícone de lápis (editar)
3. Faça a alteração e clique em "Commit changes"
4. O GitHub compila um novo APK automaticamente!
