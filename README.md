# QR Code Builder

**QR Code Builder** is a visual, drag-and-drop tool for creating structured QR code content. It is especially useful for workflows that require special formatting such as tabs (`\t`) and returns (`\r`), including badge printing, form automation, ID systems, macros, and more.

👉 [**Launch the App**](https://offtheclockstudios.github.io/QR-Code-Builder/)

---

## Features

* **Drag-and-Drop Canvas** – Visually arrange blocks for text, tab (`⇥`), and return (`⏎`) characters
* **Preset Manager** – Save, load, and delete reusable QR layouts using local browser storage
* **Advanced Mode** – Configure repeat counts (iterations) for blocks such as tabs and returns
* **QR Label Support** – Add a custom label beneath your generated QR code
* **QR Preview** – See your final QR output rendered in real-time
* **Copy & Download** – Copy the final QR image (with label) directly to the clipboard or download it
* **Quick Trash Deletion** – Drag blocks to the trash area to remove them
* **Tooltips & Visual Guidance** – Built-in tips for new users with symbolic cues and color-coded blocks
* **Responsive Layout** – Optimized for modern desktop browsers (mobile support pending)
* **Batch Generation** – Testing batch QR creation with different coding options (Standard, Escape Sequences, Hex Escapes, Unicode Escapes, Raw-Hex, & Base64)
* **QR Settings** - Testing QR error levels, colors, dimensions, versions, etc.

##Additional Tools - Adding other tools that help with data tracking and standardization (like my near-fuzzies.html)
* **Fuzzies** - Used to help with data standardization for QR contents
* **Print Pages/Cards** - Testing pages for printing QR codes in a repeatable format

---

## Getting Started

### Use in Browser

No installation required. Open the app in your browser:

[https://offtheclockstudios.github.io/QR-Code-Builder/](https://offtheclockstudios.github.io/QR-Code-Builder/)

Steps to begin:

1. Drag items from the **Toolbox** to the **Dropzones** in the **Build Area**.
2. Double-click any block to rename or modify it.
3. Use **Build** to generate your QR code.
4. Optionally, check **Copy After Build** to copy the image to your clipboard.
5. Use **Save Preset** to retain frequently used layouts.

---

## Advanced Mode

Enabling **Advanced Mode** unlocks extra configuration and developer features:

* Set **repeat counts / (iterations)** for blocks like text, tabs (`⇥`), or returns (`⏎`)
* Double-click a block to edit both its label and how many times it repeats

**Advanced Mode** can be found in the **Footer**, enabled by checking the **Advanced Mode** box

---

## Optional: Install as a PWA

You can install QR Code Builder as a Progressive Web App (PWA) for offline access:

1. Open the site in Chrome or Edge.
2. Open the browser menu.
3. Select **Install QR Code Builder** (or similar).
4. Launch it from your desktop or apps list like a native app.

---

## Recent Updates

See the full [Changelog](./CHANGELOG.md) for details.

### Recent Changes with v1.0.9 (6/22/25):

* Changelog popup so users can view recent updates
* Filename prompt when using the Download button to save QR codes
* Print Pages & Print Cards HTML: Testing different endgame formats for the QR codes
* Fuzzies now opens in a new tab when clicked
* Loading a preset will now automatically build the QR code
* Presets are sorted A → Z, with defaults listed after your custom presets
* The Download button now builds the QR code and prompts for a filename automatically

---

## Contributing

We welcome feedback and contributions. You can:

* Submit issues or feature requests on GitHub
* Fork and submit pull requests for improvements
* Submit issues or feature requests through survey linked within the page
* Suggest preset templates using the survey linked within the page

---

## License

Licensed under the [MIT License](./LICENSE).
