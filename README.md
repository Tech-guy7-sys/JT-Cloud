# JT Cloud — J Tech Digital World

JT Cloud is a local-first project vault and file metadata index. It currently provides:

- Create and manage project records with notes and tags
- Index selected file names, sizes, MIME types, timestamps, and tags without reading or uploading file contents
- Search and filter projects and file references
- Export individual project records or the full workspace manifest as JSON
- Import and merge a validated manifest
- Re-select a matching local file to open it
- Local browser persistence and responsive Electron desktop packaging

## Important boundaries

This is **not yet remote cloud storage**. No backend, user accounts, collaboration, network upload, or cloud sync is implemented. Browser local storage can be cleared or reach its quota; export manifests for backups. Indexed file references do not preserve the actual files. Opening an indexed file requires selecting it again and matching its name and size.

## Development

Requires Node.js 20+.

```bash
npm install
npm run check
npm start
```

Browser mode: `npm run serve`, then open http://localhost:4173.
Desktop packaging: `npm run dist`.

## Builds

GitHub Actions attempts Windows x64/x86/ARM64, macOS Intel/Apple Silicon, and Linux x64/ARM64 artifacts. Only use a platform package after its individual CI job succeeds and the artifact is checked. The workflow uploads temporary build artifacts only and never publishes GitHub Releases automatically. Packages are unsigned by default; macOS signing/notarization is not configured.

Future remote storage must use an authenticated backend, explicit file-upload consent, access controls, and clear data-retention disclosure. AI integration must go through the shared JT AI Core provider abstraction. Desktop/device control belongs exclusively to JT Desktop Agent.
