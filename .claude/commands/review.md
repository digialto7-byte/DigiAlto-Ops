---
description: Run the reviewer subagent on a file or folder
argument-hint: <path> [client-slug]
---

Use the `reviewer` subagent to review: $ARGUMENTS
If the client slug is not given, infer it from the path (`clients/<slug>/...`).
Return the reviewer's verdict and findings unchanged.
