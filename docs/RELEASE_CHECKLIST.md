# Release Checklist

This checklist is for Ground Zero Community project maintainers and leaders when releasing new software versions. Follow these steps to ensure reliable and clean project releases.

## 1. Pre-Release Checks

* **Verify Main Branch:** Ensure the primary branch builds correctly, and all local and CI tests pass.
* **Code Review Status:** Double check that all pull requests included in the release have been reviewed and approved according to the Code Review Guide.
* **Check Dependencies:** Verify that all package dependencies are updated and no known security warnings are unresolved.
* **Documentation Review:** Ensure that all new features or breaking changes are documented in the project README, setup guides, or API specifications.

## 2. Preparing the Release

* **Update Version Number:** Update the version field in configuration files (e.g., `package.json`, `cargo.toml`, or similar manifest files) according to Semantic Versioning (`MAJOR.MINOR.PATCH`).
* **Generate Changelog:** Summarize the changes, enhancements, and bug fixes since the last release. Group changes into categories:
  * Added
  * Changed
  * Fixed
* **Clean Build:** Run a final clean production build locally to verify there are no compilation warnings or errors.

## 3. Publishing the Release

* **Commit and Push:** Commit the version update and changelog, then push to the main repository:
  ```bash
  git commit -am "Prepare release v1.1.0"
  git push origin main
  ```
* **Create a Git Tag:** Create a signed Git tag indicating the new version:
  ```bash
  git tag -a v1.1.0 -m "Release v1.1.0"
  git push origin v1.1.0
  ```
* **Draft GitHub Release:** Go to the GitHub repository's "Releases" page and create a new release matching the pushed tag. Paste the changelog into the release description.

## 4. Post-Release Tasks

* **Verify Release Assets:** Confirm that build artifacts or packages are correctly generated and accessible.
* **Announce the Release:** Share the release announcement on Discord or community Facebook groups, highlighting the key features and thanking contributors.
