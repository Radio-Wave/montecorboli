# Montecorboli

Food, art and hospitality in Tuscany. A single-page website, built from the client brief and hosted on GitHub Pages.

## The page

Everything is in `index.html`, in this order:

1. Photo carousel
2. A note from the host (`#story`)
3. Eat, Stay, Host, Art (`#eat`, `#stay`, `#host`, `#art`), each a photo and a few paragraphs
4. Paintings gallery under Art (name, details, price)
5. Enquire (`#enquire`): name, email and message, with the host's email alongside

The menu at the top jumps to each section.

## Editing

- **Host email:** set `HOST_EMAIL` near the top of `js/main.js`; it appears next to the enquiry form.
- **Paintings:** in `index.html`, look for `ADD PAINTINGS HERE`, replace the placeholder cards, and put images in `images/paintings/`.
- **Carousel photos:** the `<figure class="slide">` lines at the top of `index.html`; the hidden caption in each is shown under the photo.
- **Photos:** put new images in `images/` and change the `src="images/…"` paths.
- **Colours & fonts:** all at the top of `css/style.css`.

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
