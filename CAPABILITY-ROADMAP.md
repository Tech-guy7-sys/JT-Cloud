# JT Cloud — Cloud Storage and Collaboration Capability Roadmap

JT Cloud belongs to the file management / cloud workspace category. Its current implementation is local-first project records and a file-metadata index; it is not yet remote cloud storage.

## Available today
- Project records, notes and tags
- Metadata index for user-selected files
- Search/filter, JSON manifest export/import and local persistence
- Re-selecting a local file to open it

## Capability targets
1. File workspace: folder navigation, uploads/downloads, previews, rename/move/trash and conflict handling once a real storage backend exists.
2. Sync engine: explicit account-backed remote storage, resumable transfers, checksums, retry/backoff, offline queue and visible sync state.
3. Version history: file revisions, restore points, deletion recovery and retention settings.
4. Sharing: user-controlled share links, expiry, revoke controls and least-privilege access.
5. Collaboration: project members, role-based access, comments and activity history.
6. Search: metadata search first; content indexing only with clear permission and privacy disclosures.
7. Security: secure authentication, server-side authorization, TLS, encryption at rest, secret management, audit events and rate limits.
8. AI assistance: through JT AI Core, opt-in file summarization, tagging and project search; disclose what data leaves the device and do not send content to a provider by default.
9. Backups and portability: export/download all user data and provide restore testing.

## Required architecture
- Do not label local browser storage as cloud sync.
- Add a real backend and storage provider before enabling remote collaboration.
- Never store passwords, API keys or long-lived access tokens in localStorage.
- Validate upload type/size and all server-side permissions; use signed URLs or equivalent scoped transfer credentials.
- Include account deletion, export and retention behavior before public launch.

## Status
Targets are not implemented merely by listing them here. The first real cloud milestone is an authenticated backend with upload/download, permission checks, checksums and sync status.