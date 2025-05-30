# 2048 Oyun Otomasyonu / 2048 Game Automation

**Geliştirici / Developer:** eCox

Bu proje, testnet.succinct.xyz üzerindeki 2048 oyununu otomatik olarak oynayan bir Node.js uygulamasıdır. Playwright kullanarak mevcut Chrome tarayıcısına bağlanır ve oyunu sürekli oynar.

This project is a Node.js application that automatically plays the 2048 game on testnet.succinct.xyz. It connects to an existing Chrome browser using Playwright and continuously plays the game.

---

## 🎯 Özel Açıklama / Special Description

**Türkçe:**
Bu proje, sizin için özel olarak geliştirilmiş gelişmiş bir 2048 oyun otomasyonudur. eCox tarafından titizlikle kodlanmış bu araç, testnet.succinct.xyz platformunda kesintisiz oyun deneyimi sunar. Akıllı algoritması sayesinde oyunu sürekli oynayarak skorunuzu maksimize eder. MetaMask entegrasyonu ile blockchain tabanlı oyunlarda bile sorunsuz çalışır. Kullanıcı dostu arayüzü ve detaylı dokümantasyonu ile hem yeni başlayanlar hem de deneyimli geliştiriciler için idealdir.

**English:**
This project is an advanced 2048 game automation specially developed for you. Meticulously coded by eCox, this tool provides a seamless gaming experience on the testnet.succinct.xyz platform. Thanks to its intelligent algorithm, it continuously plays the game to maximize your score. With MetaMask integration, it works flawlessly even in blockchain-based games. With its user-friendly interface and detailed documentation, it is ideal for both beginners and experienced developers.

### 🌟 Öne Çıkan Özellikler / Key Features

- 🤖 **Akıllı Otomasyon:** Gelişmiş algoritma ile optimal hamle stratejisi
- 🔄 **Sürekli Oyun:** Game Over durumlarında otomatik yeniden başlatma
- 🎮 **Kolay Kullanım:** Tek komutla başlatma ve çalıştırma
- 🔧 **Özelleştirilebilir:** Hız ve strateji ayarları
- 🌐 **MetaMask Uyumlu:** Blockchain oyunları için tam destek
- 📱 **Çoklu Sekme:** Açık tüm Chrome sekmelerini yönetme
- 🛡️ **Güvenli:** Mevcut Chrome profilinizi etkilemez

---

## 🇹🇷 Türkçe Kurulum ve Kullanım

### Gereksinimler
- Node.js (v14 veya üzeri) - [İndir](https://nodejs.org/)
- Git - [İndir](https://git-scm.com/)
- Google Chrome tarayıcısı
- MetaMask eklentisi

### 1. Adım: Projeyi İndirin

```bash
# GitHub'dan projeyi klonlayın
git clone https://github.com/eCoxvague/2048-SuccinctLabs.git

# Proje klasörüne gidin
cd 2048-SuccinctLabs
```

### 2. Adım: Bağımlılıkları Yükleyin

```bash
# Gerekli paketleri yükleyin
npm install

# VEYA tek tek yüklemek için:
npm install playwright readline-sync

# Playwright tarayıcılarını yükleyin (isteğe bağlı)
npx playwright install chromium
```

### 3. Adım: Chrome'u Debug Modunda Başlatın

Chrome'u debug modunda başlatmak için aşağıdaki komutlardan birini kullanın:

**Windows için Seçenek 1:**
```cmd
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\chrome-debug"
```

**Windows için Seçenek 2:**
```cmd
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\chrome-debug"
```

**Mac için:**
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="/tmp/chrome-debug"
```

**Linux için:**
```bash
google-chrome --remote-debugging-port=9222 --user-data-dir="/tmp/chrome-debug"
```

> **⚠️ Önemli:** Bu komut yeni bir Chrome profili oluşturur. Mevcut profilinizi etkilemez.

### 4. Adım: MetaMask Kurulumu

1. Açılan Chrome penceresinde Chrome Web Store'a gidin
2. MetaMask eklentisini arayın ve yükleyin
3. MetaMask'ı kurun ve cüzdanınızı yapılandırın
4. Gerekli test ağlarını ekleyin (Succinct testnet)

### 5. Adım: Oyun Sitesine Gidin

1. Yeni bir sekme açın
2. `https://testnet.succinct.xyz` adresine gidin
3. MetaMask ile bağlanın
4. 2048 oyununu başlatın
5. Oyunun yüklendiğinden emin olun

### 6. Adım: Otomasyonu Çalıştırın

```bash
# Ana scripti çalıştırın
node run.js

# VEYA npm script ile:
npm start
```

### 🎮 Kullanım Sırası:

1. **Chrome Debug Modu** → Chrome'u özel modda başlatın
2. **MetaMask Kurulumu** → Cüzdan bağlantısını yapın  
3. **Oyun Sitesi** → testnet.succinct.xyz'ye gidin
4. **Otomasyon** → `node run.js` komutunu çalıştırın
5. **Sayfa Seçimi** → Açık sekmeler arasından oyun sayfasını seçin

### Nasıl Çalışır?

1. **Sayfa Seçimi:** Uygulama açık tüm Chrome sekmelerini listeler
2. **Oyun Tespiti:** `#game-container` elementini arar
3. **Otomatik Oyun:** Sağ → Yukarı → Sol → Aşağı sırasında tuşlara basar
4. **Game Over Yönetimi:** 
   - "Confirm Score" butonuna tıklar
   - Onay dialogunu kabul eder
   - "Try Again" veya "New Game" ile yeniden başlatır

### Özelleştirme

`run.js` dosyasında aşağıdaki ayarları değiştirebilirsiniz:

```javascript
const SPEED = 20; // Hamle hızı (milisaniye) - Daha hızlı için azaltın
```

### Sorun Giderme

- **Chrome bağlantı hatası:** Chrome'un debug modunda çalıştığından emin olun
- **Port 9222 kullanımda:** Mevcut Chrome'u kapatıp yeniden başlatın
- **Sayfa bulunamadı:** testnet.succinct.xyz'nin açık olduğunu kontrol edin
- **MetaMask bağlantısı:** Cüzdanın bağlı olduğundan emin olun
- **Node.js hatası:** `npm install` komutunu tekrar çalıştırın

---

## 🇺🇸 English Setup and Usage

### Requirements
- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- Git - [Download](https://git-scm.com/)
- Google Chrome browser
- MetaMask extension

### Step 1: Download Project

```bash
# Clone the project from GitHub
git clone https://github.com/eCoxvague/2048-SuccinctLabs.git

# Navigate to project folder
cd 2048-SuccinctLabs
```

### Step 2: Install Dependencies

```bash
# Install required packages
npm install

# OR install individually:
npm install playwright readline-sync

# Install Playwright browsers (optional)
npx playwright install chromium
```

### Step 3: Launch Chrome in Debug Mode

Use one of the following commands to start Chrome in debug mode:

**Windows Option 1:**
```cmd
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\chrome-debug"
```

**Windows Option 2:**
```cmd
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\chrome-debug"
```

**Mac:**
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="/tmp/chrome-debug"
```

**Linux:**
```bash
google-chrome --remote-debugging-port=9222 --user-data-dir="/tmp/chrome-debug"
```

> **⚠️ Important:** This command creates a new Chrome profile. It won't affect your existing profile.

### Step 4: MetaMask Installation

1. Go to Chrome Web Store in the opened Chrome window
2. Search for MetaMask extension and install it
3. Set up MetaMask and configure your wallet
4. Add necessary test networks (Succinct testnet)

### Step 5: Navigate to Game Site

1. Open a new tab
2. Go to `https://testnet.succinct.xyz`
3. Connect with MetaMask
4. Start the 2048 game
5. Ensure the game is loaded

### Step 6: Run the Automation

```bash
# Run the main script
node run.js

# OR use npm script:
npm start
```

### 🎮 Usage Order:

1. **Chrome Debug Mode** → Start Chrome in special mode
2. **MetaMask Setup** → Connect wallet
3. **Game Site** → Navigate to testnet.succinct.xyz
4. **Automation** → Run `node run.js` command
5. **Page Selection** → Choose game page from open tabs

### How It Works

1. **Page Selection:** The app lists all open Chrome tabs
2. **Game Detection:** Searches for `#game-container` element
3. **Auto Play:** Presses keys in sequence: Right → Up → Left → Down
4. **Game Over Management:** 
   - Clicks "Confirm Score" button
   - Accepts confirmation dialog
   - Restarts with "Try Again" or "New Game"

### Customization

You can modify the following settings in `run.js`:

```javascript
const SPEED = 20; // Move speed (milliseconds) - Lower for faster
```

### Troubleshooting

- **Chrome connection error:** Ensure Chrome is running in debug mode
- **Port 9222 in use:** Close existing Chrome and restart
- **Page not found:** Check that testnet.succinct.xyz is open
- **MetaMask connection:** Ensure wallet is connected
- **Node.js error:** Run `npm install` again

---

## 📁 Proje Yapısı / Project Structure

```
2048-SuccinctLabs/
├── run.js          # Ana otomasyon scripti / Main automation script
├── package.json    # Proje bağımlılıkları / Project dependencies
├── LICENSE         # MIT lisansı / MIT license
└── README.md       # Bu dosya / This file
```

## 🔧 Teknik Detaylar / Technical Details

- **Playwright:** Chrome DevTools Protocol (CDP) üzerinden bağlantı
- **Otomasyon Stratejisi:** Döngüsel tuş basımı (Right→Up→Left→Down)
- **Hata Yönetimi:** Game Over durumlarında otomatik yeniden başlatma
- **Hız Kontrolü:** Ayarlanabilir hamle hızı

---

## ⚠️ Uyarılar / Warnings

- Bu araç sadece test amaçlıdır / This tool is for testing purposes only
- Gerçek para ile oynarken dikkatli olun / Be careful when playing with real money
- Ağ bağlantı sorunları otomasyonu etkileyebilir / Network issues may affect automation

---

## 📞 Destek / Support

Herhangi bir sorun yaşarsanız, lütfen GitHub issues bölümünü kullanın.

For any issues, please use the GitHub issues section.

**Geliştirici / Developer:** eCox 