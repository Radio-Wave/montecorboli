# Montecorboli

Food, art and hospitality in Tuscany. Launch version of the website, built from the client brief and hosted on GitHub Pages.

## Pages (launch version, brief §10)

| Page | File |
|---|---|
| Home: the view, the story, four paths in (Eat, Stay, Host, Art) | `index.html` |
| Private Chef: menus, areas covered, enquiry form | `private-chef.html` |
| Lunches, Dinners & Evenings: cyclists, walkers, private dinners, jazz | `table.html` |
| Stay: B&B rooms and the whole house | `stay.html` |
| Contact: short form asking what the person is interested in | `contact.html` |

To add later: Events, Residencies, Paintings gallery, Journal.

## Editing

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
