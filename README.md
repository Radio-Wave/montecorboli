# Montecorboli

Food, art and hospitality in Tuscany. Launch version of the website, built from the client brief and hosted on GitHub Pages.

## Pages (launch version, brief §10)

| Page | File |
|---|---|
| Home: photo carousel, a note from the host, then Eat, Stay, Host, Art set like courses on a menu | `index.html` |
| Private Chef: menus, areas covered, enquiry form | `private-chef.html` |
| Lunches, Dinners & Evenings: cyclists, walkers, private dinners, jazz | `table.html` |
| Stay: B&B rooms and the whole house | `stay.html` |
| Art: gallery of paintings (name, details, price), retreats and residencies | `art.html` |
| Contact: name, email and message, with the host's email shown alongside | `contact.html` |

To add later: Events, Residencies, Journal.

## Editing

- **Host email:** set `HOST_EMAIL` near the top of `js/main.js`; it appears next to every enquiry form.
- **Paintings:** in `art.html`, look for `ADD PAINTINGS HERE`, replace the placeholder cards, and put images in `images/paintings/`.
- **Menus:** in `private-chef.html`, look for `ADD MENUS HERE` and follow the template.
- **Photos:** put new images in `images/` and change the `src="images/…"` paths. Landscape photos work best for the home page hero.
- **Colours & fonts:** all at the top of `css/style.css` (taken from the brief).

## Forms & newsletter

GitHub Pages can't receive form submissions on its own. Create a free form at [Formspree](https://formspree.io), then paste its endpoint into `FORM_ENDPOINT` at the top of `js/main.js`. Until then the forms show a "not connected yet" message.

## Still to do (from the brief)

- [ ] Add the real menus (private-chef.html has a template in a comment; homepage Eat card says "coming soon")
- [ ] New photography (brief §9): morning and evening light, table and food, portrait, painting close-ups. The current images are the low-res ones from the brief.
- [ ] List of agriturismos covered for private chef
- [ ] Prices or "on request" (currently not mentioned)
- [ ] Connect forms and newsletter
- [ ] Italian version
