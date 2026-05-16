# 📱 Time Fleet Mobile - Guia de Instalação e Build do APK

## Pré-requisitos

1. **Node.js v20+** instalado
2. **Android Studio** instalado: https://developer.android.com/studio
   - Durante a instalação, aceite a instalação do Android SDK
3. **Java JDK 17+**: Geralmente instalado junto com o Android Studio

---

## Passo 1: Entrar na pasta do app mobile

```bash
cd mobile-app
```

## Passo 2: Instalar as dependências

```bash
npm install
```

## Passo 3: Fazer o build (copiar arquivos para dist)

```bash
npm run build
```

## Passo 4: Inicializar o Capacitor (apenas na primeira vez)

```bash
npx cap init "Time Fleet OS" "com.timefleet.solicitar" --web-dir dist
```

## Passo 5: Adicionar a plataforma Android (apenas na primeira vez)

```bash
npx cap add android
```

## Passo 6: Sincronizar com o Android

```bash
npx cap sync android
```

## Passo 7: Abrir no Android Studio para gerar o APK

```bash
npx cap open android
```

No Android Studio:
1. Aguarde o Gradle sincronizar (barra de progresso na parte inferior)
2. Menu **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. O APK estará em: `android/app/build/outputs/apk/debug/app-debug.apk`
4. Clique em "locate" no balão que aparecer no canto inferior direito

---

## Após alterar o código (fluxo diário)

```bash
npm run build
npx cap sync android
```
Depois abra o Android Studio e gere o APK novamente.

---

## Distribuindo o APK

Envie o arquivo `app-debug.apk` para os motoristas via WhatsApp ou e-mail.
No celular, eles devem:
1. Habilitar "Instalar apps de fontes desconhecidas" nas configurações
2. Abrir o arquivo .apk e instalar
3. Na primeira abertura, configurar o endereço do servidor Time Fleet

---

## Configurando o Endereço do Servidor no App

Na primeira vez que abrir o app, ele pedirá o endereço do servidor.
- Se o Pterodactyl tiver domínio: `https://meusite.com.br`
- Se for IP da rede local: `http://192.168.1.5:7011`
- O servidor precisa estar rodando para o app funcionar

---

## CORS no Servidor (Importante!)

Para o APK conseguir se comunicar com o servidor, adicione ao server.js:

```javascript
const cors = require('cors');
app.use(cors({ origin: '*' }));
```

E instale o cors:
```bash
npm install cors
```
