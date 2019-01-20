# Photo Shop

A hyperHtml based e-shop.

## Build Status

[![Build Status](https://travis-ci.com/perjo927/photo--shop.svg?branch=master)](https://travis-ci.com/perjo927/photo--shop)

## Demo

[Link](https://photoshop.netlify.com/)

## Build

```bash
pnpm run build
```

The built package will be available under the `dist/` directory.

## Deploy

Continuous deployment through [Netlify](https://app.netlify.com).

## Develop

Use **npm**, **yarn** - or **pnpm**, like the example below.

```bash
pnpm install
pnpm run start
```

### Test

#### Unit

```bash
pnpm run test
```

#### Dom

```bash
pnpm run test:dom
```

#### E2E

```bash
pnpm run start:e2e
pnpm run test:e2e
```

```bash
pnpm run debug:e2e
```

#### Integration

```bash
pnpm run start:integration
pnpm run test:integration
```
