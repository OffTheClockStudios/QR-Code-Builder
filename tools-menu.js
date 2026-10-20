
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
    ["Priorities", "priorities.html"],
    ["Priorities (lite)", "prioritiesLite.html"]
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

    /* Notification popup above the Other Tools button */
    #otcs-tools-notice {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: min(280px, calc(100vw - 40px));
      padding: 18px 35px 18px 18px;
      background: white;
      color: #1f2937;
      border: 2px solid #2563eb;
      border-radius: 12px;
      box-shadow: 0 6px 24px #0003;
      font: 14px Arial, sans-serif;
      z-index: 10000;
      animation: otcs-notice-in 0.4s ease-out;
    }

    #otcs-tools-notice strong {
      display: block;
      margin-bottom: 8px;
      color: #2563eb;
      font-size: 16px;
    }

    #otcs-tools-notice p {
      margin: 0;
      line-height: 1.5;
    }

    /* Small arrow pointing toward the button */
    #otcs-tools-notice::after {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 35px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #2563eb;
    }

    #otcs-notice-close {
      position: absolute;
      top: 8px;
      right: 10px;
      background: transparent;
      border: none;
      font-size: 20px;
      color: #6b7280;
      cursor: pointer;
    }

    @keyframes otcs-notice-in {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media print {
      #otcs-tools-notice {
        display: none !important;
      }
    }

    @media print {
      #otcs-tools-button,
      #otcs-tools-dialog,
      #otcs-tools-notice {
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
  // Show notification when the page loads
  const notice = document.createElement("div");
  notice.id = "otcs-tools-notice";
  notice.setAttribute("role", "status");

  notice.innerHTML = `
    <button id="otcs-notice-close"
            type="button"
            aria-label="Dismiss notification">×</button>
    <strong>✨ Discover More Tools!</strong>
    <p>
      Did you know OffTheClockStudios has more tools available?
      Click the <b>☰ Other Tools</b> button below
      to explore them!
      
      These tools are here to help and also inspire new ideas and improvements.
      If you have suggestions for existing tools or ideas for entirely new ones, I'd love to hear them!
    </p>
  `;

  document.body.appendChild(notice);

  // Function to dismiss the notification
  const hideNotice = () => notice.remove();

  // Close notification with X
  document
    .getElementById("otcs-notice-close")
    .addEventListener("click", hideNotice);

  // Dismiss notification when Other Tools is clicked
  button.addEventListener("click", hideNotice);

  // Automatically dismiss after 8 seconds
  setTimeout(hideNotice, 8000);

})();
