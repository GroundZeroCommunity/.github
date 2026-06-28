# Security Policy

## Reporting Security Vulnerabilities

At Ground Zero Community, we take security seriously. If you discover a security vulnerability in any of our projects, please report it responsibly.

### How to Report

**Please do NOT open a public GitHub issue for security vulnerabilities.** Instead:

1. **Email us** at **security@groundzero.tech** with:
   - Description of the vulnerability
   - Steps to reproduce it
   - Potential impact
   - Suggested fix (if you have one)

2. **Include:**
   - Project name and version
   - Your name and contact information
   - Timeline you suggest for disclosure

### Response Timeline

- We will acknowledge receipt within **24-48 hours**
- We will work on a fix within **7-14 days**
- We will notify you when a patch is released

## Security Best Practices

When using our projects, please follow these practices:

### For Users

- Keep dependencies updated
- Use strong, unique passwords
- Enable two-factor authentication
- Review code before using it
- Report suspicious behavior

### For Contributors

- Never commit sensitive information (API keys, tokens, passwords)
- Use environment variables for secrets
- Review code for security issues before submitting PRs
- Keep dependencies up to date
- Follow secure coding practices

## Supported Versions

- We provide security updates for the latest stable release
- Previous versions may receive critical security patches
- Older versions are unsupported; we recommend upgrading

## Common Security Issues to Avoid

- **SQL Injection**: Use parameterized queries
- **XSS Attacks**: Sanitize user input
- **CSRF**: Use CSRF tokens in forms
- **Hardcoded Secrets**: Never commit API keys or passwords
- **Outdated Dependencies**: Keep packages updated
- **Insecure Direct Object References**: Validate user permissions

## Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [npm Security](https://docs.npmjs.com/about-npm-security)

## Questions?

For security-related questions (non-vulnerability):
- Email: **info@groundzero.tech**
- Discussions: Use our GitHub Discussions

## Attribution

We appreciate researchers and community members who responsibly report security issues. With permission, we will recognize your contribution in our security advisories.

---

Thank you for helping keep Ground Zero Community safe and secure!
