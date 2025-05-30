// ================= run.js =================
// Node.js + Playwright + readline-sync ile mevcut açık Chrome sekmesinde otomasyon
// Gereksinim: npm install playwright readline-sync
const { chromium } = require('playwright');
const readline = require('readline-sync');

(async () => {
  // 1) Chrome'u şu komutla başlatın:
  //    "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\chrome-debug"

  // 2) CDP üzerinden mevcut Chrome'a bağlanın
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const contexts = browser.contexts();

  // 3) Açık tüm sayfaları listeleyin
  const pages = [];
  for (const ctx of contexts) {
    for (const pg of ctx.pages()) {
      const title = await pg.title().catch(() => '(Başlık alınamadı)');
      pages.push({ page: pg, title });
    }
  }
  if (pages.length === 0) {
    console.error('🔴 Hiç açık sayfa bulunamadı! Lütfen testnet.succinct.xyz açın.');
    process.exit(1);
  }

  // 4) Konsolda sayfaları gösterin ve seçim yaptırın
  console.log('\n🌐 Açık Sayfalar:');
  pages.forEach((p, i) => console.log(`  ${i}: ${p.title}`));
  const idx = readline.questionInt(`\nÇalıştırılacak sayfa indeksini girin (0-${pages.length - 1}): `);
  if (idx < 0 || idx >= pages.length) {
    console.error('❌ Geçersiz seçim.');
    process.exit(1);
  }
  const selected = pages[idx].page;
  console.log(`🎮 Seçilen sayfa: ${pages[idx].title}`);

  // 5) Hamle hızı
  const SPEED = 20; // hız 20 ms

  // 6) Oyun konteynerini bekleyin
  await selected.waitForSelector('#game-container', { timeout: 15000 })
    .catch(() => { console.error('❌ #game-container bulunamadı!'); process.exit(1); });

  // 7) Sonsuz döngü: tuş basın + Game Over işlemleri
  while (true) {
    try {
      // Hamle sırası: Sağ, Yukarı, Sol, Aşağı
      for (let key of ['ArrowRight','ArrowUp','ArrowLeft','ArrowDown']) {
        await selected.keyboard.press(key);
        await selected.waitForTimeout(SPEED);
      }
      // Game Over kontrolü
      const isOver = await selected.evaluate(() => document.body.innerText.includes('Game Over'));
      if (isOver) {
        console.log('💀 Game Over! Confirm Score ve yeniden başlatma');

        // 1) Confirm Score butonuna tıkla
        let btn = await selected.$(`button:has-text("Confirm Score")`);
        if (btn) {
          await btn.click();
          // Confirm dialog butonunu bekle
          await selected.waitForSelector('button:has-text("Confirm")', { timeout: 5000 });
        }

        // 2) Dialog'daki Confirm butonuna tıkla
        const confirms = await selected.$$(`button:has-text("Confirm")`);
        if (confirms.length > 1) {
          await confirms[1].click();
        } else if (confirms.length === 1) {
          await confirms[0].click();
        }
        await selected.waitForTimeout(200);

        // 3) Try Again veya New Game butonuna tıkla
        btn = await selected.$(`button:has-text("Try Again"), button:has-text("New Game")`);
        if (btn) {
          await btn.click();
          await selected.waitForTimeout(200);
        }
      }
    } catch (err) {
      console.error('❌ Hata:', err);
      await selected.waitForTimeout(500);
    }
  }
})();