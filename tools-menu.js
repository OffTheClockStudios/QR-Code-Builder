
(() => {
  const tools = [
    ["QR Code Builder", "index.html"],
    ["Fuzzies", "fuzzies.html"],
    ["Print Pages", "print.html"],
    ["Print Cards", "print2.html"],
    ["Numerical Map Editor", "mapEditor.html"],
    ["Defect Counter", "countersFromExcel.html"],
    ["Production Planner", "weeklyPlanner.html"],
    ["FishBone Diagram", "tunaBone.html"],
    ["Interrelationship Digraph", "interrelationshipDigraph.html"],
    ["Marker Studio", "markerStudio.html"],
    ["Priorities", "priorities.html"]
  ];

  // CSS shared by every page
  const style = document.createElement("style");
  style.textContent = `
    #otcs-tools-button {
      position: fixed;
      bottom: 12px;
      right: 12px;
      z-index: 9999;
      background: #2563eb;
      color: white;
      padding: 7px 10px;
      border: none;
      border-radius: 7px;
      cursor: pointer;
      font: 500 11px Arial, sans-serif;
      box-shadow: 0 2px 6px #0002;

      /* Mostly transparent until hovered */
      opacity: 0.5;
      transition: opacity 0.25s ease, background 0.25s ease;
    }

    #otcs-tools-button:hover,
    #otcs-tools-button:focus-visible {
      opacity: 1;
      background: #1d4ed8;
    }

    /* Keep it visible enough on touchscreens */
    @media (hover: none) {
      #otcs-tools-button {
        opacity: 0.65;
      }
    }


    #otcs-tools-dialog {
      width: min(500px, calc(100vw - 32px));
      max-height: 85vh;
      overflow-y: auto;
      padding: 24px;
      border: none;
      border-radius: 14px;
      background: #fff;
      color: #1f2937;
      font-family: Arial, sans-serif;
      box-shadow: 0 15px 45px #0004;
    }

    #otcs-tools-dialog::backdrop {
      background: #0009;
    }

    #otcs-tools-dialog h3 {
      margin: 0 30px 20px 0;
      font-size: 18px;
    }

    #otcs-tools-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }

    #otcs-tools-grid a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 8px;
      border-radius: 8px;
      background: #2563eb;
      color: white;
      text-decoration: none;
      text-align: center;
      font: 13px Arial, sans-serif;
    }

    #otcs-tools-grid a:hover {
      background: #1d4ed8;
    }

    #otcs-tools-close {
      position: absolute;
      top: 12px;
      right: 14px;
      border: none;
      background: transparent;
      color: #374151;
      font-size: 24px;
      cursor: pointer;
    }

    @media (max-width: 420px) {
      #otcs-tools-grid {
        grid-template-columns: 1fr;
      }
    }

    @media print {
      #otcs-tools-button,
      #otcs-tools-dialog {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  // Floating menu button
  const button = document.createElement("button");
  button.id = "otcs-tools-button";
  button.type = "button";
  button.textContent = "☰";
  button.title = "Other Tools";
  button.setAttribute("aria-label", "Other Tools");

  // Popup
  const dialog = document.createElement("dialog");
  dialog.id = "otcs-tools-dialog";

  const closeButton = document.createElement("button");
  closeButton.id = "otcs-tools-close";
  closeButton.type = "button";
  closeButton.textContent = "×";
  closeButton.setAttribute("aria-label", "Close menu");

  const heading = document.createElement("h3");
  heading.textContent = "Other Tools From OffTheClockStudios";

  const grid = document.createElement("div");
  grid.id = "otcs-tools-grid";

  tools.forEach(([name, url]) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = name;
    grid.appendChild(link);
  });

  dialog.append(closeButton, heading, grid);
  document.body.append(button, dialog);

  button.addEventListener("click", () => dialog.showModal());
  closeButton.addEventListener("click", () => dialog.close());

  // Click outside the popup to close it
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
