# Révisions Édito A1 — заметки для правок

- Исходники в `src/`. После любой правки: `python3 src/build.py` — пересобирает `index.html` и копирует `supabase.js`, `schema.sql`, `README.md`, `.nojekyll` в корень.
- `config.js` в корне содержит URL и publishable key Supabase; сборка его не перезаписывает.
- GitHub Pages публикует ветку `main`, папку `/` (корень).
- Порядок и количество заданий в RU (`data-*.js`) и EN (`en-*.js`) должны совпадать: ответы хранятся по индексу. Новые упражнения — только в конец темы.
- Облако: таблица `user_docs` (см. `schema.sql`), ключи документов `progress`, `settings`, `quiz`, `ans-<topicId>`.
