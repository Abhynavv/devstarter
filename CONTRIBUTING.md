# Contributing to DevStarter

Thanks for your interest in contributing!

This guide walks you through the contribution workflow for DevStarter.

## 1. Find an issue and read its acceptance criteria

Browse the [workshop issue backlog](workshop/ISSUE_BACKLOG.md) and pick an issue.

- Comment on the issue before starting, so maintainers know it is being worked on.
- Read the acceptance criteria carefully.

## 2. Fork the repository

Click the **Fork** button on the GitHub page.

## 3. Clone your fork

```bash
git clone https://github.com/<your-username>/DevStarter.git
cd DevStarter
```

Add the upstream repository:

```bash
git remote add upstream https://github.com/<upstream-owner>/DevStarter.git
```

## 4. Create a descriptive feature branch

```bash
git checkout -b feat/css-grid-resource
```

Use a short, descriptive branch name.

## 5. Make a focused change

Keep the change small and focused on the issue.

## 6. Test the change

- Run a local server and verify the feature.
- Follow the [manual test checklist](tests/manual-test-checklist.md).

## 7. Commit using a meaningful message

```bash
git add <files>
git commit -m "Add Flexbox and Grid CSS learning resource"
```

## 8. Push the branch

```bash
git push origin feat/css-grid-resource
```

## 9. Open a pull request against the upstream repository

Open the PR from your fork's branch to the upstream default branch.

## 10. Respond to review feedback

- Be kind and open to feedback.
- Push follow-up commits if requested.

## 11. Wait for approval and merge

A maintainer will review; once approved, the PR will be merged.
