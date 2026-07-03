# Markdown Style Guide

This guide establishes the formatting rules for Markdown files across all Ground Zero Community projects. Consistently formatted documentation makes guides, readmes, and wiki pages readable and professional.

## File Naming

* Use lowercase letters with underscores or hyphens (e.g., `markdown_style.md` or `markdown-style.md`).
* Ensure the file extension is always `.md`.

## Headings

* Use a single Level 1 heading (`#`) at the top of the file as the title.
* Use headings in hierarchical order (Level 2 `##`, Level 3 `###`, etc.). Do not skip heading levels.
* Leave a blank line before and after all headings.

## Lists

* Use asterisks (`*`) or hyphens (`-`) for unordered lists. Be consistent within a single file.
* Use numbers followed by periods (e.g., `1.`, `2.`) for ordered lists.
* Add one space after the list marker.

## Code Blocks

* Always specify the language for syntax highlighting in fenced code blocks:
  ```javascript
  const community = 'Ground Zero';
  ```
* For simple terminal commands, use `bash` or `shell`:
  ```bash
  git checkout -b feature/new-guide
  ```

## Tables

* Center, left-align, or right-align table columns using colons in the separator line:

  | Feature | Description | Status |
  | :--- | :--- | :---: |
  | Documentation | Formatting and style | Completed |

## Blockquotes and Alerts

* Use blockquotes (`>`) to emphasize quotes or important guidelines.
* Use GitHub Flavored Markdown alerts sparingly to highlight key information:

> [!NOTE]
> Use this alert style for general notes or background information.

> [!IMPORTANT]
> Use this alert style for critical steps or mandatory actions.

> [!WARNING]
> Use this alert style to warn about potential issues or pitfalls.
