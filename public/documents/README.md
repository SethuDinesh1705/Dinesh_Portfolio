# Static Documents Folder

This folder contains static files like your resume, certificates, and other downloadable documents.

## Files to add:
- `resume.pdf` - Your resume/CV
- `certificate.pdf` - Any certificates or credentials
- Other documents you want to share

## How to use:
- Place your resume as `resume.pdf` in this folder
- Reference it in your components using: `/documents/resume.pdf`

Example:
```html
<a href="/documents/resume.pdf" download="Dinesh_Resume.pdf" mat-raised-button>
  Download Resume
</a>
```
