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
* **Preset Snippet Tools** – Export or import JSON snippets of your layout (Advanced Mode only)
* **Quick Trash Deletion** – Drag blocks to the trash area to remove them
* **Tooltips & Visual Guidance** – Built-in tips for new users with symbolic cues and color-coded blocks
* **Responsive Layout** – Optimized for modern desktop browsers (mobile support pending)
* **Instructions** – Included topics for learning and testing the app (example puzzle added)

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

## Advanced Mode

Enabling **Advanced Mode** unlocks extra configuration and developer features:

* Set **repeat counts** (iterations) for blocks like tabs (`⇥`) or returns (`⏎`)
* Double-click a block to edit both its label and how many times it repeats
* Reveal additional controls for:
  - Copying preset configurations as JSON snippets
  - Pasting and loading shared snippets
  - Performing a full reset of stored data (for testing/debugging)
* Paste JSON into the **Load Preset Snippet** modal to import new templates

> These features are especially helpful during development or when contributing preset templates.

To enable:

1. In the **Controls** section, check the **Advanced Mode** box
2. Use the new options that appear under the **Quick Tips** panel on the right and by double-clicking blocks

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

### Highlights in v1.0.5:

* Polished layout and spacing across sidebars and control panels using new spacer classes
* Added instructions to help with using this tool
* Added a "puzzle" for learning the building proccess and testing the QR code
* Minor code cleanup and layout refinements for better maintainability

---

## Contributing

We welcome feedback and contributions. You can:

* Submit issues or feature requests on GitHub
* Suggest preset templates using the form
* Fork and submit pull requests for improvements

---

## License

Licensed under the [MIT License](./LICENSE).
