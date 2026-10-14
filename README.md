# Arch Luna website

A multi-page static website for Arch Luna, built with HTML, CSS, and JavaScript.

## Pages
- `public/index.html` — Home
- `public/products.html` — Products and projects
- `public/about.html` — About Arch Luna
- `public/contact.html` — Contact form (opens an email draft after you configure the destination)

## Run locally on Ubuntu

From this directory:

```bash
python3 -m http.server 8000 --directory public
```

Open <http://localhost:8000>.

## Deploy to Render

1. Create a GitHub repository and upload the project files.
2. In Render, choose **New + → Blueprint** and connect the repository.
3. Render reads `render.yaml` and creates the static site.
4. Once deployment finishes, open the URL Render provides.

You can also create a Static Site manually:
- Build command: `echo "Arch Luna static site ready"`
- Publish directory: `public`

## Before launch
- In `public/js/main.js`, replace `YOUR_EMAIL_HERE` with an email address you control.
- Check all copy, product status, and company details.
- Optional: connect a custom domain through Render.

The LSS section is explicitly described as a planned concept, not a currently operating ISP.
