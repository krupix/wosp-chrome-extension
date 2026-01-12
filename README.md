# 🩺 WOŚP 2026 Tracker

A lightweight Chrome Extension to track the total amount declared for the **34th Grand Finale of the Great Orchestra of Christmas Charity (WOŚP) 2026**.

![WOŚP Icon](icon48.png)

## 🌟 Features

- **Real-time Scraping:** Fetches the current declared amount directly from the official [wosp.org.pl](https://www.wosp.org.pl/) website.
- **Clean UI:** Simple popup showing the total amount in PLN.
- **Fast & Light:** No background processes; only runs when you click the icon.

## 🚀 Installation (Developer Mode)

Since this is a custom extension, you can load it manually in your Chrome browser:

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click the **Load unpacked** button.
5. Select the `wosp-chrome-extension` folder.
6. (Optional) Click the **Puzzle Piece** icon in your toolbar and **Pin** the WOŚP Tracker for quick access.

## 🛠️ Technical Details

- **Manifest V3:** Built using the latest Chrome Extension standards.
- **Permissions:** 
    - `host_permissions`: Required to fetch data from `https://www.wosp.org.pl/`.
    - `storage`: Prepared for future features (like local caching).
- **Scraping Logic:** Uses `DOMParser` to extract values from both mobile and desktop versions of the WOŚP homepage to ensure reliability.

## ⚖️ Disclaimer

**This is an unofficial fan project.**  
This extension is not affiliated with, authorized, maintained, sponsored, or endorsed by the **Great Orchestra of Christmas Charity (Fundacja Wielka Orkiestra Świątecznej Pomocy)**. All official logos and trademarks belong to the WOŚP Foundation.

---
*Created with ❤️ for the 34th Grand Finale.*
