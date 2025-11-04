# Playwright Examples for TestWarez 2025

Welcome to the **Playwright Examples** repository for the talk:

> Clicking the GUI is not enough! How Playwright can help you discover new automation strategies (also with AI)

> [!TIP]
> 💡 Choose your language **README.md**:
>
> - 🇬🇧 [English](./README.md)
> - 🇵🇱 [Polski](./README.pl.md)

This project helps you learn and practice Playwright beyond just UI testing. It includes examples for UI, REST API, GraphQL, WebSockets, a11y, visual testing, and more.

Whether you're a beginner or an experienced tester, you'll find practical examples and resources to level up your testing skills.

> [!TIP]
> Want to learn more about Playwright? Check out our courses:
>
> - [Professional Automation with Playwright](https://jaktestowac.pl/playwright/) - a comprehensive (100h+) program on Playwright, professional test frameworks, CI/CD, and test architecture
> - [Playwright Elements](https://jaktestowac.pl/course/playwright-elements/) - key concepts and advanced features of Playwright
> - [free resources](https://jaktestowac.pl/darmowy-playwright/) - a large collection of FREE Playwright learning materials

# 📖 Table of Contents

- [Setup](#setup)
  - [🛠️ Prerequisites](#prerequisites)
  - [Application Setup](#application-setup)
  - [Tests Setup](#tests-setup)
- [Examples Overview](#examples-overview)
- [Playwright & AI](#playwright-and-ai)
- [Help & Support](#help-and-support)
  - [📞 Contact & Support](#contact-and-support)
  - [Learning Resources](#learning-resources)
  - [🇵🇱 Polish Resources](#polish-resources)
  - [🇬🇧 English Resources](#english-resources)

<a id="setup"></a>

# Setup

To run the examples, set up the demo application locally and then run the Playwright tests.

<a id="prerequisites"></a>

## 🛠️ Prerequisites

- Node.js (version 14 or higher)
- NPM or Yarn package manager
- [🦎GAD](https://github.com/jaktestowac/gad-gui-api-demo) – a free demo app running locally on `http://localhost:3000`

<a id="application-setup"></a>

## Application Setup

> [!IMPORTANT]
> Want to quickly test the application?
>
> - clone or download the repository [https://github.com/jaktestowac/gad-gui-api-demo](https://github.com/jaktestowac/gad-gui-api-demo)
> - run `npm i`
> - run `npm run start`
> - open [http://localhost:3000](http://localhost:3000) in your browser
> - enjoy testing and automating **🦎 GAD**!

1. **Clone the Repository**: Start by cloning the demo app to your local machine.

   ```bash
   git clone https://github.com/jaktestowac/gad-gui-api-demo.git
   cd gad-gui-api-demo
   ```

2. **Install Dependencies**: Install the dependencies using npm or yarn.

   ```bash
   npm install
   ```

3. **Start the Application**: Run the application locally.

   ```bash
   npm run start
   ```

4. **Access the Application**: Open [http://localhost:3000](http://localhost:3000) in your browser.

<a id="tests-setup"></a>

## Tests Setup

With the application running locally, set up and run the Playwright tests.

1. **Clone this Repository**

   ```bash
   git clone https://github.com/jaktestowac/playwright-examples-testwarez-2025.git
   cd playwright-examples-testwarez-2025
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   Make sure you have Playwright browsers installed:

   ```bash
   npx playwright install
   ```

3. **Run the Tests**

   ```bash
   npx playwright test
   ```

<a id="examples-overview"></a>

## Examples Overview

This repository includes a variety of examples demonstrating different testing strategies with Playwright:

- UI testing: `tests/ui`
- UI accessibility: `tests/a11y`
- REST API: `tests/api` and mocked API: `tests/api-mock`
- GraphQL: `tests/graphql`
- Multi-session scenarios: `tests/multi-session`
- Visual regression testing: `tests/visual-testing` and canvas mocking: `tests/visual-testing-mock`
- WebSockets: `tests/websockets`
- Mocking network requests: `tests/visual-testing-mock` and `tests/api-mock`

Run all tests with `npx playwright test` or target a folder/file for specific suites.

<a id="playwright-and-ai"></a>

## Playwright & AI

Materials about AI and Playwright are available in our course: [Playwright & AI](https://jaktestowac.pl/course/playwright-mcp/).

[![Playwright z AI](./assets/PWAI%20-%20playwright%20mcp%20z%20copilot.jpg)](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4)

> [!IMPORTANT]
> Check our free YouTube recording to learn more about GitHub Copilot Chat Modes:
>
> [![GitHub Copilot - Chat Modes](./assets/github-copilot-chat-modes.jpg)](https://www.youtube.com/watch?v=hHrOJlk6ET8&list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4)

Happy testing! 🚀

<a id="help-and-support"></a>

# Help & Support

<a id="contact-and-support"></a>

## 📞 Contact & Support

Feel free to reach out to us:

- 🌐 **Website**: [jaktestowac.pl](https://jaktestowac.pl)
- 💼 **LinkedIn**: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)
- 💬 **Discord**: [Polish Playwright Community](https://discord.gg/mUAqQ7FUaZ)
- 📧 **Support**: Check our website for contact details

---

<a id="learning-resources"></a>

## Learning Resources

We have gathered a collection of resources to help you learn and master Playwright, both in Polish and English.

<a id="polish-resources"></a>

## 🇵🇱 Polish Resources

- [TypeScript for Testers - Express Introduction](https://jaktestowac.pl/tsx/) - Free (4h+) course on TypeScript for Testers
- [JavaScript and TypeScript for Testers](https://jaktestowac.pl/js-ts/) - Comprehensive (13h+) course on JavaScript and TypeScript for testers, with practical examples and exercises
- [Professional Test Automation with Playwright](https://jaktestowac.pl/playwright/) - Comprehensive (100h+) course on Playwright, test automation, CI/CD and test architecture
- [Back-end Test Automation](https://jaktestowac.pl/api/) - Comprehensive (45h+) course on Back-end Test Automation with Postman, Mocha, Chai, and Supertest
- [Free Playwright Resources](https://jaktestowac.pl/darmowy-playwright/) - Comprehensive and Free Polish learning materials
- [Playwright Basics](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7) - YouTube series (Polish)
- [Playwright Elements](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA) - Advanced concepts (Polish)
- [Playwright MCP](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4) - MCP course (Polish)
- [Discord Community](https://discord.gg/mUAqQ7FUaZ) - First Polish Playwright community!
- [Playwright Info](https://playwright.info/) - first and only Polish Playwright blog

### AI_Testers

<div align="center">
<a href="https://aitesters.pl">
<img src="./assets/aitesters-header-photo.jpg" alt="AI Testers Logo" height="400"/>
</a>
</div>

Gain an edge by combining AI knowledge with the most popular tools in the IT market.  
We'll show you how to accelerate with AI and build a professional test automation framework. 😉

- [AI_Testers](https://aitesters.pl) - Main page about AI_Testers Program
- [AI_Testers LinkedIn](https://www.linkedin.com/company/aitesters) - Follow us on LinkedIn

## 🇬🇧 English Resources

- [VS Code Extensions](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) - Our free Playwright plugins

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

---

Powered by **[jaktestowac.pl](https://www.jaktestowac.pl) team!** 💚❤️
