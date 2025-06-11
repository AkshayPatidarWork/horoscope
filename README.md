<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# 🔮 Personalized Horoscope API

A NestJS-based backend service that generates and serves personalized daily horoscopes for users based on their zodiac sign. This project demonstrates modular backend architecture, JWT authentication, and basic rate-limiting, with optional data persistence.

GitHub Repository: [https://github.com/AkshayPatidarWork/horoscope.git](https://github.com/AkshayPatidarWork/horoscope.git)

---

## ✅ Features

- User Signup & Login with JWT Authentication
- Auto-detection of Zodiac Sign during Signup
- Fetch Today's Horoscope based on Zodiac Sign
- Retrieve History of Last 7 Days' Horoscopes
- Rate-limited API (5 requests/min per user)
- Swagger API Documentation

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AkshayPatidarWork/horoscope.git
cd horoscope
```

```bash
$ npm install
```

# Environment Setup

## Create a .env file using the example as reference:

```bash
cp .env.example .env
```

# 🚀 Running the App

```bash
npm run start
```

# Access API Documentation

```bash
http://0.0.0.0:3000
```

#💡 Design Decisions

### 1. NestJS Framework

Chosen for its modular architecture, TypeScript support, and scalable project structure.

### 2. JWT Authentication

Used for secure, stateless auth. The user's zodiac sign is embedded in the JWT payload to avoid redundant calculations or lookups.

### 3. Zodiac Sign Detection

Automatically derived during signup via a simple birthdate-to-zodiac utility function.

### 4. Horoscope Storage

In-memory JSON used to mock daily horoscopes per zodiac for fast prototyping without external dependencies.

### 5. PostgreSQL Database

Selected for structured data storage, strong consistency, and ACID compliance. Supports unique constraints on (user_id, date) in horoscope_history, ensuring only one entry per day per user even under multiple requests.

### 6. Rate Limiting

Throttling applied with NestJS's ThrottlerModule to prevent API abuse (max 5 reqs/min per user).

### 7. Swagger Documentation

Integrated with @nestjs/swagger to auto-generate and serve live API docs.

# 🛠️ Improvements with More Time

### 1 Third-Party Horoscope Integration

Replace static data with live content from a trusted horoscope API for more personalized experiences.

### 2 Redis Caching for Horoscope Content

Cache third-party horoscope data by zodiac and date to minimize latency and external calls while keeping content fresh with TTL.

### 3 Cached Zodiac Sign in JWT

Embedding the zodiac sign in JWT enables instant lookups without DB or re-calculation. Today's result can be auto-added to history if not already stored, avoiding duplicate writes.

### 4 Timezone-Aware Scheduling

Allow users to view horoscopes based on their local timezone for better personalization.

### 5 Admin Features

Build a dashboard to track usage trends, user activity, system health, and content engagement.

## 📸 Sample
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1RDYUUdmsSZDvuZQStIYFjfRFGQfW691U" width="600" />
</p>


<p align="center">
  <img src="https://drive.google.com/file/d/1bD7zCZYA-hG4T4QSAghFSzjSzHhUfRS_/view?usp=drive_link" width="600" />
</p>

<p align="center">
  <img src="https://drive.google.com/file/d/10Qeky1_Wa8MxN3YKHsVEXAEdIELQ1g7p/view?usp=drive_link" width="600" />
</p>

# 👨‍💻 Author

Akshay Patidar

# 📜 License

Nest is MIT licensed.
