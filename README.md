# Montecorboli

Food, art and hospitality in Tuscany. A single-page website, built from the client brief and hosted on GitHub Pages.

## The page

The page (`index.html`) runs in this order:

1. Photo carousel
2. A note from the host (`#story`)
3. Eat, Stay, Host, Art (`#eat`, `#stay`, `#host`, `#art`), each a photo and a few paragraphs
4. Paintings gallery under Art (title, details)
5. Enquire (`#enquire`): name, email and message, with the host's email alongside

The menu at the top jumps to each section.

## Editing (Pages CMS)

All text and photos live in `_data/content.yml`. Edit them with [Pages CMS](https://pagescms.org):

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open the `montecorboli` repository (install the Pages CMS GitHub app on it when asked).
3. Choose **Site content**. Change the carousel, the host note, Eat/Stay/Host/Art, the paintings, the host email and the rest, then **Save**.

Saving commits to `main`, and GitHub Pages rebuilds the site in a minute or two. Uploaded photos go into `images/` (paintings into `images/paintings/`). The CMS settings are in `.pages.yml`.

`index.html` is a Jekyll template that reads `_data/content.yml`. GitHub Pages runs Jekyll for you, so there's nothing to build. Layout and design changes still happen in `index.html` and `css/style.css` (colours and fonts are at the top).

## Forms & newsletter

GitHub Pages can't receive form submissions on its own. Create a free form at [Formspree](https://formspree.io), then paste its endpoint into `FORM_ENDPOINT` at the top of `js/main.js`. Until then the forms show a "not connected yet" message.

## Still to do (from the brief)

- [ ] Host's email address
- [ ] Real paintings for the gallery
- [ ] Menus (the Eat section says they're coming soon)
- [ ] New photography (brief §9): morning and evening light, table and food, portrait, painting close-ups. The current images are the low-res ones from the brief.
- [ ] List of agriturismos covered for private chef
- [ ] Connect forms and newsletter
- [ ] Italian version
