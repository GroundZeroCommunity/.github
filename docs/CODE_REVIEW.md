# Code Review Guide

This guide establishes the rules and best practices for performing pull request (PR) reviews within the Ground Zero Community. Reviews are an opportunity for mentorship, learning, and ensuring code quality.

## Etiquette and Communication

* **Be Constructive:** Frame feedback as suggestions or questions rather than commands (e.g., "What do you think about using a map here?" instead of "Change this to a map").
* **Be Respectful:** Remember that we have builders of all skill levels. Offer encouragement alongside critiques.
* **Explain the Why:** If you suggest a change, explain the reasoning behind it (e.g., readability, performance, security, or maintainability benefits).
* **Approve Progress:** Do not block pull requests over minor stylistic preferences if the code functions correctly and meets core requirements.

## Review Checklist

### 1. Readability and Style

* Is the code easy to understand?
* Are variable, function, and class names descriptive?
* Is complex or non-obvious logic commented clearly?
* Does the code follow the repository's established code style?

### 2. Functional Correctness and Testing

* Does the change accomplish what is described in the PR?
* Have the changes been tested locally?
* Are edge cases (e.g., null values, empty strings, error states) handled properly?
* Are appropriate unit or integration tests added or updated?

### 3. Security and Reliability

* Are secrets (API keys, passwords, database credentials) kept out of the codebase?
* Is user input properly sanitized and validated?
* Are dependencies up to date and free of known vulnerabilities?

### 4. Documentation

* Have relevant READMEs, API specifications, or setup guides been updated to reflect the changes?
* Are comments and docstrings accurate and up to date?

## Submitting Your Review

* **Comment:** Use this when you want to ask questions, offer hints, or discuss implementation details without blocking the PR.
* **Approve:** Use this when the changes meet the quality standards and are ready to be merged.
* **Request Changes:** Use this when there are critical issues (bugs, security risks, broken builds) that must be fixed before merging. Provide clear guidance on what needs correction.
