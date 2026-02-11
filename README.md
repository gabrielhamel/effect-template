# Effect Template

A production-ready TypeScript template built on [Effect-TS](https://effect.website/), providing a batteries-included foundation for building robust, type-safe applications with functional programming patterns.

## Features

- **Effect-TS Ecosystem** - [@effect/platform](https://effect.website/docs/guides/platform), [@effect/opentelemetry](https://effect.website/docs/guides/observability/telemetry)
- **Strict Type Safety** - Comprehensive TypeScript configuration with 20+ strict compiler flags
- **Code Quality** - ESLint, dprint, Vitest with [@effect/vitest](https://effect.website/docs/guides/testing/vitest) integration
- **Built-in Observability** - OpenTelemetry with optional tracing and Docker Compose setup for [otel-tui](https://github.com/ymtdzzz/otel-tui)
- **Developer Experience** - Hot reload, pre-commit hooks, GitHub Actions CI, Effect Language Service

## Quick Start

```bash
# Install dependencies
npm install

# Development with hot reload
npm run dev

# Production
npm start

# Run tests
npm test

# Run all checks (format, lint, type-check, test)
npm run ci
```

## OpenTelemetry

Optional observability with OpenTelemetry tracing.

**Start the collector:**

```bash
npm run telemetry-collector
```

**Enable tracing:**

```bash
export OPEN_TELEMETRY_EXPORT_URL=http://localhost:4318
npm run dev
```

**Optional authentication headers:**

```bash
export OPEN_TELEMETRY_EXPORT_HEADER_KEY=Authorization
export OPEN_TELEMETRY_EXPORT_HEADER_VALUE=Bearer token123
```

## Available Scripts

```bash
npm run dev              # Development with hot reload
npm start                # Production run
npm test                 # Run tests once
npm run test:watch       # Run tests in watch mode
npm run ci               # Run all checks (format, lint, type, test)
npm run format:check     # Check formatting
npm run format:fix       # Fix formatting
npm run lint:check       # Check linting
npm run lint:fix         # Fix linting
npm run type:check       # TypeScript type checking
```

## Technology Stack

- **[Effect-TS](https://effect.website/)** - Functional effect system for TypeScript
- **[@effect/platform](https://effect.website/docs/guides/platform)** - Cross-platform abstractions
- **[@effect/opentelemetry](https://effect.website/docs/guides/observability/telemetry)** - OpenTelemetry integration
- **[Vitest](https://vitest.dev/)** - Testing framework
- **[ESLint](https://eslint.org/)** - Linting
- **[dprint](https://dprint.dev/)** - Code formatting

## License

MIT
