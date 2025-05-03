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
* **Copy to Clipboard** – Copy the final QR image (with label) directly to the clipboard
* **Export Preset Snippets** – Generate shareable JSON snippets of your preset configuration
* **Quick Trash Deletion** – Drag blocks to the trash area to remove them
* **Tooltips & Visual Guidance** – Built-in tips for new users with symbolic cues and color-coded blocks
* **Responsive Layout** – Optimized for modern desktop browsers (mobile support pending)

---

## Getting Started

### Use in Browser

No installation required. Open the app in your browser:

[https://offtheclockstudios.github.io/QR-Code-Builder/](https://offtheclockstudios.github.io/QR-Code-Builder/)

Steps to begin:

1. Drag items from the **Toolbox** to the center canvas.
2. Double-click any block to rename or modify it.
3. Use **Build** to generate your QR code.
4. Optionally, check **Copy After Build** to copy the image to your clipboard.
5. Use **Save Preset** to retain frequently used layouts.

---

## Exporting Presets

To submit a preset suggestion or share your layout:

1. Build your QR layout visually.
2. Click **Copy Preset Snippet** in the Quick Tips section.
3. Paste the snippet into the feedback form.

> Submitted presets may be reviewed and included as default templates in future releases.

[Submit Your Preset Snippet](https://forms.office.com/r/BQ31NpaecJ)

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

### Highlights in v1.0.2:

* Added **Advanced Mode** for block iterations
* Introduced **QR label input** below the canvas
* Updated preset structure to include `label` and `iterations`
* QR preview now renders label and QR in a single combined image
* Improved UI consistency, accessibility, and code maintainability

---

## Contributing

We welcome feedback and contributions. You can:

* Submit issues or feature requests on GitHub
* Suggest preset templates using the form
* Fork and submit pull requests for improvements

---

## License

Licensed under the [MIT License](./LICENSE).
