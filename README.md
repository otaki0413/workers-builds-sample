## セットアップ

1. `.env.example` を `.env`、`.env.staging`、`.env.production` にコピーする:
   ```bash
   cp .env.example .env
   cp .env.example .env.staging
   cp .env.example .env.production
   ```
2. 各ファイル内の値を環境ごとに編集する（例: `API_KEY` など）。

## Workers

- Production用
  - https://workers-builds-production.otaki0413-it.workers.dev/
- Staging
  - https://workers-builds-staging.otaki0413-it.workers.dev/