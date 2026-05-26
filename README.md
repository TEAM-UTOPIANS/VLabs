# VLabs - Virtual Chemistry Lab Terminal

A premium, highly interactive virtual chemistry laboratory. It integrates 4 local chemistry lab simulations into a unified science dashboard with interactive quizzes, live observation logs, mathematical calculation validation, and laboratory report downloads.

---

## 🚀 1. Technology Stack

This application is engineered using a lightweight, performant, and modular stack:
- **Core Engine**: HTML5, Vanilla JavaScript (ES6+), and CSS3.
- **Styling Framework**: Tailwind CSS (Utility classes) coupled with Custom CSS Layers for glassmorphic properties, glowing micro-animations, and scrollport overrides.
- **Development Server**: [Vite](https://vitejs.dev/) (for fast, zero-config local hot-reloading and static file serving).
- **Embedded Simulation Libraries**: p5.js, Font Awesome, and Custom Canvas/Video players (integrated inside the isolated simulation sandboxes).

### Why this stack was selected:
1. **Lightweight Performance**: Eliminates the overhead of modern Javascript frameworks (React, Vue, etc.) for a lightweight, single-page application experience.
2. **Unified Themes**: Injects parent styles dynamically into embedded same-origin iframe windows, bridging custom titration logic with the main platform theme.
3. **CORS-safe Fetching**: Serving files via Vite allows browser `fetch()` APIs to load JSON quiz files and Markdown documentation without encountering local `file://` security policy errors.

---

## 📁 2. Project Directory Structure

```text
VLabs/
├── assets/
│   └── custom.css                # Global fonts, glassmorphism tokens, and MD layout overrides
├── js/
│   └── lab-manager.js            # Workspace state controller, MD parser, quiz engine, report generator
├── simulations/                  # TITRATION SIMULATION DATA
│   ├── assets/
│   │   └── simulation-theme.css  # Override stylesheet dynamically injected into simulation sandboxes
│   ├── exp-chloride-content-mohrs/
│   ├── exp-ferrous-content/
│   ├── exp-viscosity-measurement/
│   └── exp-water-hardness/
├── index.html                    # Platform Landing Page (vibrantly animated hero section & bento grid)
├── catalog.html                  # Lab Unit Catalog (difficulty tiers, durations, launch options)
├── lab.html                      # Interactive HUD Simulation Workspace Cockpit
├── package.json                  # Vite scripts and developer dependencies
├── package-lock.json             # Locked npm dependency versions
└── README.md                     # Documentation file (This File)
```

---

## 🛠️ 3. Key Implemented Features

### 💻 Heads-Up Display (HUD) Cockpit
Inspired by advanced instrumentation cockpits:
- **Left Panel (Dynamic Documentation & Quizzes)**: Allows users to read Aim, Theory, and Procedure, or take interactive Pre-Tests and Post-Tests.
- **Center Panel (Interactive Sandbox)**: Integrates the simulation inside an iframe. It includes quick-action buttons to refresh the simulator or expand it to full screen.
- **Right Panel (Observations & Validation)**:
  - **Telemetry HUD**: Displays current normality values, indicators in use, and lab status.
  - **Observation Log**: Records trial runs (Initial Vol, Final Vol, and computed Volume Added) with the ability to delete entries.
  - **Calculator Terminal**: Validates the student's entered values against expected theoretical limits.
  - **Report Downloader**: Generates and downloads a clean text-based laboratory record containing telemetry, trial logs, and validation scores.

### 📝 Client-Side Markdown Parser
Includes a custom Javascript parser that compiles raw experiment documentation (`aim.md`, `theory.md`, `procedure.md`, `references.md`) to HTML while dynamically rewriting relative image paths to resolve relative to the correct experiment folder (`simulations/<exp-id>/images/`).

### ❓ Responsive Quiz Engine
Loads quiz questions from `pretest.json` and `posttest.json` dynamically. It renders MCQ options and handles evaluation state (highlighting correct answers in green, incorrect choices in red, and outputting formatted score calculations).

### 🎨 Glassmorphic Theme Overrides
Titration simulations are automatically styled to match the midnight-navy (`#08132a`) and glowing teal (`#64ffda`) HUD template by injecting `simulation-theme.css` upon iframe loading.

---

## 🧪 4. Titration Mathematical Formulas

The validation terminal uses average trial values ($V_{\text{titrant}}$) from the Observation Table to verify calculations using standard titration equations:

### 1. Chloride Content (Mohr's Method)
Analyzes Chloride concentration in potable water using standard Silver Nitrate ($N/100\text{ AgNO}_3$) titrant and Chromate indicator:
$$\text{Chloride (mg/L)} = \frac{V_{\text{titrant}} \times 0.01 \times 35.45 \times 1000}{20\text{ mL Sample}} = V_{\text{titrant}} \times 17.725$$

### 2. Ferrous Content Analysis
Redox titration determining Iron(II) concentration with Potassium Dichromate ($N/20\text{ K}_2\text{Cr}_2\text{O}_7$):
$$\text{Ferrous Content (mg/L)} = \frac{V_{\text{titrant}} \times 0.05 \times 55.85 \times 1000}{25\text{ mL Sample}} = V_{\text{titrant}} \times 111.7$$

### 3. Viscosity Measurement (Ostwald Viscometer)
Relative viscosity calculation compared to water:
$$\eta_{\text{sample}} = \eta_{\text{water}} \times \frac{\rho_{\text{sample}} \times t_{\text{sample}}}{\rho_{\text{water}} \times t_{\text{water}}} \approx 1.0 + (t_{\text{sample}} \times 0.05)\text{ cP}$$

### 4. Water Hardness Testing
Complexometric titration using EDTA ($0.01\text{ M}$) with Eriochrome Black T (EBT) indicator:
$$\text{Hardness (mg/L CaCO}_3) = \frac{V_{\text{titrant}} \times 0.01 \times 100 \times 1000}{20\text{ mL Sample}} = V_{\text{titrant}} \times 50$$

---

## 💻 5. Running the Application

### 📋 Prerequisites
- Ensure **Node.js** and **npm** are installed on your computer.

### ⚙️ Installation & Launch
1. Open your shell in the root of the project:
   ```bash
   cd /Users/mayank/Desktop/VLabs
   ```
2. Install dependencies (Vite developer server):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the application in your browser:
   ```text
   http://localhost:5173/
   ```

---

## 🔒 6. Browser Security & CORS Note
> [!WARNING]
> If you attempt to open the `index.html` file directly by double-clicking it (using the `file://` protocol), the browser will block internal `fetch()` calls to load markdown (`aim.md`) and JSON (`pretest.json`) files due to CORS (Cross-Origin Resource Sharing) security restrictions. **You must run the application using `npm run dev` to ensure proper serving over HTTP.**
# Virtual_Labs
