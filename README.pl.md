# Przykłady Playwright z TestWarez 2025

Witamy w repozytorium **Playwright z TestWarez 2025** do prelekcji:

> Klikanie po GUI to za mało! Jak Playwright może cię wspomóc w odkrywaniu nowych strategii w automatyzacji (także z AI)

> [!TIP]
> 💡 Wybierz język pliku **README.md**:
>
> - 🇬🇧 [English](./README.md)
> - 🇵🇱 [Polski](./README.pl.md)

Znajdziesz tu przykłady i materiały, które pokażą Ci różne sposoby wykorzystania Playwright do automatyzacji testów (nie tylko UI!). W testach znajdziesz przykłady o UI, REST API, GraphQL, WebSockets, a11y, visual testing, and more.

Niezależnie od tego, czy dopiero zaczynasz, czy masz już doświadczenie, znajdziesz tu wartościowe przykłady i materiały, które rozwiną Twoje umiejętności testowania.

> [!TIP]
> Chcesz dowiedzieć się więcej o Playwright?
> Sprawdź nasze kursy:
>
> - [Professional Automation with Playwright](https://jaktestowac.pl/playwright/) – kompleksowy (ponad 100 godzin!) Program o profesjonalnej automatyzacji z Playwright, projektowaniu zaawansowanych frameworków do testów UI i REST API, CI/CD i o architekturze testów
> - [Playwright Elements](https://jaktestowac.pl/course/playwright-elements/) – kluczowe pojęcia i zaawansowane funkcje Playwright
> - [darmowe materiały](https://jaktestowac.pl/darmowy-playwright/) – ogromna kolekcja DARMOWYCH materiałów do nauki Playwright

# 📖 Spis treści

- [Konfiguracja](#setup)
  - [🛠️ Wymagania wstępne](#prerequisites)
  - [Konfiguracja aplikacji](#application-setup)
  - [Konfiguracja testów](#tests-setup)
- [Przegląd przykładów](#examples-overview)
- [Pomoc i wsparcie](#help-and-support)
  - [📞 Kontakt i wsparcie](#contact-and-support)
  - [Materiały do nauki](#learning-resources)
  - [🇵🇱 Zasoby po polsku](#polish-resources)
  - [🇬🇧 Zasoby po angielsku](#english-resources)

<a id="setup"></a>

# Konfiguracja

Aby uruchomić przykłady, skonfiguruj aplikację lokalnie, a następnie uruchom testy Playwright.

<a id="prerequisites"></a>

## 🛠️ Wymagania

- Node.js (wersja 14 lub wyższa)
- Menedżer pakietów NPM lub Yarn
- [🦎GAD](https://github.com/jaktestowac/gad-gui-api-demo) – darmowa aplikacja do praktyki testów i automatyzacji działająca lokalnie pod adresem `http://localhost:3000`

<a id="application-setup"></a>

## Konfiguracja aplikacji

> [!IMPORTANT]
> Chcesz szybko przetestować aplikację?
>
> - sklonuj lub pobierz repozytorium [https://github.com/jaktestowac/gad-gui-api-demo](https://github.com/jaktestowac/gad-gui-api-demo)
> - uruchom `npm i`
> - uruchom `npm run start`
> - otwórz w przeglądarce [http://localhost:3000](http://localhost:3000)
> - ciesz się testowaniem i automatyzacją **🦎 GAD**!

1. **Sklonuj repozytorium**: Zacznij od sklonowania repozytorium na swój komputer.

   ```bash
   git clone https://github.com/jaktestowac/gad-gui-api-demo.git
   cd gad-gui-api-demo
   ```

2. **Zainstaluj zależności**: Zainstaluj niezbędne pakiety przy użyciu npm lub yarn.

   ```bash
   npm install
   ```

3. **Uruchom aplikację**: Uruchom aplikację lokalnie.

   ```bash
   npm run start
   ```

4. **Otwórz aplikację**: W przeglądarce przejdź do [http://localhost:3000](http://localhost:3000).

<a id="tests-setup"></a>

## Konfiguracja testów

Gdy aplikacja działa lokalnie, możesz skonfigurować i uruchomić testy Playwright.

1. **Sklonuj repozytorium**: Sklonuj to repozytorium na swój komputer.

```bash
git clone https://github.com/jaktestowac/playwright-examples-testwarez-2025.git
cd playwright-examples-testwarez-2025
```

2. **Zainstaluj zależności**: Zainstaluj niezbędne pakiety przy użyciu npm lub yarn.

   ```bash
   npm install
   ```

   Upewnij się też, że masz zainstalowane przeglądarki Playwright:

   ```bash
   npx playwright install
   ```

3. **Uruchom testy**: Wykonaj testy Playwright przeciwko lokalnie uruchomionej aplikacji.

   ```bash
   npx playwright test
   ```

# Playwright i AI

Materiały o AI i Playwright znajdziesz w naszym kursie [Playwright i AI](https://jaktestowac.pl/course/playwright-mcp/).

[![Playwright z AI](./assets/PWAI%20-%20playwright%20mcp%20z%20copilot.jpg)](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4)

> [!TIP]
> Sprawdź nasze darmowe nagranie na YouTube, aby dowiedzieć się więcej o GitHub Copilot Chat Modes:
>
> [![GitHub Copilot - Chat Modes](./assets/github-copilot-chat-modes.jpg)](https://www.youtube.com/watch?v=hHrOJlk6ET8&list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4)

Udanych testów! 🚀

<a id="help-and-support"></a>

# Pomoc i wsparcie

<a id="contact-and-support"></a>

## 📞 Kontakt i wsparcie

Skontaktuj się z nami:

- 🌐 **Strona WWW**: [jaktestowac.pl](https://jaktestowac.pl)
- 💼 **LinkedIn**: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)
- 💬 **Discord**: [Polish Playwright Community](https://discord.gg/mUAqQ7FUaZ)
- 📧 **Wsparcie**: szczegóły kontaktu znajdziesz na stronie

---

<a id="learning-resources"></a>

## Materiały do nauki

Zebraliśmy zestaw materiałów pomagających uczyć się i opanować Playwright – zarówno po polsku, jak i po angielsku. Niezależnie od poziomu zaawansowania, te zasoby pomogą rozwinąć Twoje umiejętności.

<a id="polish-resources"></a>

## 🇵🇱 Zasoby po polsku

- [TypeScript dla testerów – Ekspresowe wprowadzenie](https://jaktestowac.pl/tsx/) – darmowy (4h+) kurs TypeScript dla testerów
- [JavaScript i TypeScript dla testerów](https://jaktestowac.pl/js-ts/) – kompleksowy (13h+) kurs z praktycznymi przykładami i ćwiczeniami
- [Profesjonalna automatyzacja testów z Playwright](https://jaktestowac.pl/playwright/) – kompleksowy (100h+) kurs o Playwright, automatyzacji testów, CI/CD i architekturze
- [Automatyzacja testów Back-endu](https://jaktestowac.pl/api/) – kompleksowy (45h+) kurs z Postman, Mocha, Chai i Supertest
- [Darmowe materiały o Playwright](https://jaktestowac.pl/darmowy-playwright/) – obszerne i darmowe polskie materiały do nauki
- [Playwright – podstawy](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7) – seria na YouTube (PL)
- [Playwright Elements](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA) – zaawansowane zagadnienia (PL)
- [Playwright MCP](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4) – kurs MCP (PL)
- [Społeczność na Discordzie](https://discord.gg/mUAqQ7FUaZ) – pierwsza polska społeczność Playwright!
- [Playwright Info](https://playwright.info/) – pierwszy i jedyny polski blog o Playwright

### AI_Testers

<div align="center">
<a href="https://aitesters.pl">
<img src="./assets/aitesters-header-photo.jpg" alt="AI Testers Logo" height="400"/>
</a>
</div>

Zdobądź przewagę, łącząc wiedzę o AI z najpopularniejszymi narzędziami na rynku IT.  
Pokażemy Ci, jak przyspieszyć dzięki AI i zbudować profesjonalny framework do automatyzacji testów. 😉

- [AI_Testers](https://aitesters.pl) – strona główna programu AI_Testers
- [AI_Testers na LinkedIn](https://www.linkedin.com/company/aitesters) – obserwuj nas na LinkedIn

<a id="english-resources"></a>

## 🇬🇧 Zasoby po angielsku

- [Rozszerzenia VS Code](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) – nasze darmowe wtyczki do Playwright

_PS. Po więcej materiałów i aktualności zajrzyj na naszą [stronę](https://jaktestowac.pl) i [GitHub](https://github.com/jaktestowac)._

---

Wspierane przez zespół **[jaktestowac.pl](https://www.jaktestowac.pl)**! 💚❤️
