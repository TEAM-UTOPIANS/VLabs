// Dashboard and Workspaces Controller - VLabs

// System logs initialization
const defaultLogs = [
    `[${new Date(Date.now() - 600000).toLocaleTimeString()}] System initializing...`,
    `[${new Date(Date.now() - 550000).toLocaleTimeString()}] Loading telemetry protocols...`,
    `[${new Date(Date.now() - 500000).toLocaleTimeString()}] Core calibration index loaded successfully.`,
    `[${new Date(Date.now() - 400000).toLocaleTimeString()}] Molecular engine visualizer READY.`,
    `[${new Date(Date.now() - 300000).toLocaleTimeString()}] Titration curve calculations loaded.`,
    `[${new Date(Date.now() - 200000).toLocaleTimeString()}] VLabs v2.0 successfully bootstrapped.`
];

if (!localStorage.getItem('vlabs_system_logs')) {
    localStorage.setItem('vlabs_system_logs', JSON.stringify(defaultLogs));
}

// Preset Molecules for the 3D visualizer
const molecules = {
    h2o: {
        name: "Water",
        formula: "H₂O",
        weight: "18.015 g/mol",
        type: "Polar Covalent",
        desc: "Water is the universal solvent, key to aqueous titrations. It has a bent molecular geometry (~104.5°) due to the lone pairs on the central oxygen atom.",
        atoms: [
            { x: 0, y: 0, z: 0, type: 'O', r: 24, color: '#ef4444' }, // Oxygen
            { x: -50, y: 40, z: 0, type: 'H', r: 14, color: '#64748b' }, // Hydrogen
            { x: 50, y: 40, z: 0, type: 'H', r: 14, color: '#64748b' }   // Hydrogen
        ],
        bonds: [
            { a: 0, b: 1 },
            { a: 0, b: 2 }
        ]
    },
    co2: {
        name: "Carbon Dioxide",
        formula: "CO₂",
        weight: "44.01 g/mol",
        type: "Nonpolar Covalent",
        desc: "Carbon Dioxide is linear in geometry (180°). The carbon atom forms double bonds with two oxygen atoms. The polarities of the double bonds cancel each other out.",
        atoms: [
            { x: 0, y: 0, z: 0, type: 'C', r: 20, color: '#475569' }, // Carbon
            { x: -70, y: 0, z: 0, type: 'O', r: 24, color: '#ef4444' }, // Oxygen
            { x: 70, y: 0, z: 0, type: 'O', r: 24, color: '#ef4444' }   // Oxygen
        ],
        bonds: [
            { a: 0, b: 1 },
            { a: 0, b: 2 }
        ]
    },
    ch4: {
        name: "Methane",
        formula: "CH₄",
        weight: "16.04 g/mol",
        type: "Nonpolar Covalent",
        desc: "Methane is the simplest alkane with tetrahedral geometry (109.5°). The central carbon forms four covalent single bonds with hydrogen atoms.",
        atoms: [
            { x: 0, y: 0, z: 0, type: 'C', r: 20, color: '#475569' }, // Carbon
            { x: -50, y: -50, z: -50, type: 'H', r: 14, color: '#64748b' },
            { x: 50, y: 50, z: -50, type: 'H', r: 14, color: '#64748b' },
            { x: -50, y: 50, z: 50, type: 'H', r: 14, color: '#64748b' },
            { x: 50, y: -50, z: 50, type: 'H', r: 14, color: '#64748b' }
        ],
        bonds: [
            { a: 0, b: 1 },
            { a: 0, b: 2 },
            { a: 0, b: 3 },
            { a: 0, b: 4 }
        ]
    },
    hcl: {
        name: "Hydrochloric Acid",
        formula: "HCl",
        weight: "36.46 g/mol",
        type: "Polar Covalent",
        desc: "Hydrochloric Acid is a highly corrosive strong acid. The hydrogen and chlorine share a highly polar single bond due to chlorine's high electronegativity.",
        atoms: [
            { x: -30, y: 0, z: 0, type: 'Cl', r: 28, color: '#10b981' }, // Chlorine
            { x: 45, y: 0, z: 0, type: 'H', r: 14, color: '#64748b' }    // Hydrogen
        ],
        bonds: [
            { a: 0, b: 1 }
        ]
    },
    naoh: {
        name: "Sodium Hydroxide",
        formula: "NaOH",
        weight: "39.997 g/mol",
        type: "Ionic / Covalent",
        desc: "Sodium Hydroxide is a strong base (lye). The sodium ion (Na⁺) forms an ionic bond with the hydroxide ion (OH⁻), while oxygen and hydrogen are covalently bound.",
        atoms: [
            { x: -50, y: 0, z: 0, type: 'Na', r: 22, color: '#6366f1' }, // Sodium
            { x: 15, y: 0, z: 0, type: 'O', r: 24, color: '#ef4444' },  // Oxygen
            { x: 65, y: 0, z: 0, type: 'H', r: 14, color: '#64748b' }   // Hydrogen
        ],
        bonds: [
            { a: 0, b: 1 },
            { a: 1, b: 2 }
        ]
    }
};

// State Variables
let currentView = 'dashboard';
let rotationX = 0.01;
let rotationY = 0.01;
let selectedMoleculeId = 'h2o';
let molCanvas, molCtx;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let molAnimationId;

// Titration Curve Configs
const titrationConfigs = {
    strong: {
        title: "Strong Acid - Strong Base (HCl + NaOH)",
        titrant: "0.1 M NaOH",
        sample: "20 mL 0.1 M HCl",
        indicator: "Phenolphthalein (Colorless -> Pink)",
        eqPt: 20.0,
        curveFunc: (v) => {
            if (v < 20.0) {
                const molesH = 0.002 - (v * 0.0001);
                const concH = molesH / ((20.0 + v) / 1000);
                return Math.max(1.0, -Math.log10(concH));
            } else if (v === 20.0) {
                return 7.0;
            } else {
                const molesOH = (v - 20.0) * 0.0001;
                const concOH = molesOH / ((20.0 + v) / 1000);
                return Math.min(13.0, 14.0 + Math.log10(concOH));
            }
        }
    },
    weak: {
        title: "Weak Acid - Strong Base (CH₃COOH + NaOH)",
        titrant: "0.1 M NaOH",
        sample: "20 mL 0.1 M CH₃COOH",
        indicator: "Phenolphthalein",
        eqPt: 20.0,
        curveFunc: (v) => {
            if (v === 0) return 2.87;
            if (v < 20.0) {
                const pkA = 4.76;
                const base = v;
                const acid = 20.0 - v;
                return pkA + Math.log10(base / acid);
            } else if (v === 20.0) {
                return 8.72;
            } else {
                const excessOH = (v - 20.0) * 0.0001;
                const concOH = excessOH / ((20.0 + v) / 1000);
                return Math.min(13.0, 14.0 + Math.log10(concOH));
            }
        }
    },
    redox: {
        title: "Redox Titration (Fe²⁺ + K₂Cr₂O₋)",
        titrant: "0.05 N K₂Cr₂O₋",
        sample: "25 mL Fe²⁺ solution",
        indicator: "Diphenylamine Sulfonate (Colorless -> Violet)",
        eqPt: 25.0,
        curveFunc: (v) => {
            if (v === 0) return 0.35;
            if (v < 25.0) {
                return 0.77 + 0.059 * Math.log10(v / (25.0 - v));
            } else if (v === 25.0) {
                return 1.06;
            } else {
                return 1.33 + (0.059 / 6) * Math.log10(v - 25.0);
            }
        }
    },
    complex: {
        title: "Complexometric Titration (Ca²⁺ + EDTA)",
        titrant: "0.01 M EDTA",
        sample: "20 mL Ca²⁺ solution",
        indicator: "Eriochrome Black T (Red -> Blue)",
        eqPt: 20.0,
        curveFunc: (v) => {
            if (v === 0) return 3.0;
            if (v < 20.0) {
                const fractionLeft = (20.0 - v) / 20.0;
                return 3.0 - Math.log10(fractionLeft);
            } else if (v === 20.0) {
                return 7.2;
            } else {
                return 10.5;
            }
        }
    }
};

let activeTitrationId = 'strong';
let titrationInterval;

// Initialize Dashboard page
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam && viewParam !== 'archive') {
        setView(viewParam);
    } else {
        setView('dashboard');
    }

    renderSystemConsoleFeed();
    updateLiveLogs();
    initElementLookup();
    initMolarityCalculator();

    window.addEventListener('theme-changed', () => {
        if (currentView === 'analytics') {
            drawAnalyticsGraph(0);
        }
    });

    window.addEventListener('click', (e) => {
        const supModal = document.getElementById('support-modal');
        const logsModal = document.getElementById('logs-drawer');
        if (e.target === supModal) closeSupport();
        if (e.target === logsModal) closeLogsDrawer();
    });
});

// System View Toggle Router
function setView(viewId) {
    if (viewId === 'archive') {
        viewId = 'dashboard'; // Prevent access to archive since it is removed
    }
    
    currentView = viewId;
    
    if (viewId !== 'molecular' && molAnimationId) {
        cancelAnimationFrame(molAnimationId);
        molAnimationId = null;
    }

    // Toggle container views
    const views = ['dashboard', 'elements', 'molecular', 'analytics'];
    views.forEach(v => {
        const el = document.getElementById(`${v}-view`);
        if (el) {
            if (v === viewId) {
                el.classList.remove('hidden');
                el.classList.add('animate-fade-in');
            } else {
                el.classList.add('hidden');
                el.classList.remove('animate-fade-in');
            }
        }
    });

    // Manage active states on sidebar items (Archive is removed)
    const sidebarItems = ['dashboard', 'elements', 'molecular', 'analytics'];
    sidebarItems.forEach(item => {
        const btn = document.getElementById(`side-${item}`);
        if (btn) {
            if (item === viewId) {
                btn.classList.add('text-primary', 'bg-surface-variant/40');
                btn.classList.remove('text-on-surface-variant', 'hover:bg-surface-variant/30');
            } else {
                btn.classList.remove('text-primary', 'bg-surface-variant/40');
                btn.classList.add('text-on-surface-variant', 'hover:bg-surface-variant/30');
            }
        }
    });

    // Specific loaders
    if (viewId === 'dashboard') {
        renderDashboardStats();
    } else if (viewId === 'molecular') {
        initMolecularVisualizer();
    } else if (viewId === 'analytics') {
        initAnalyticsPlot();
    }
}

// ==========================================
// 1. DASHBOARD CONTROLLER
// ==========================================

function formatLogMsg(logMsg) {
    if (typeof logMsg !== 'string') return logMsg;
    
    // First, escape HTML to avoid raw HTML issues
    let escaped = logMsg
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Match and colorize the timestamp at start, e.g. [12:34:56 PM] or [12:34:56]
    escaped = escaped.replace(/^\[([^\]]+)\]/, (match, p1) => {
        return `<span class="text-slate-500 font-bold">[${p1}]</span>`;
    });

    // Style accuracy percentage
    escaped = escaped.replace(/(Accuracy:\s*)(\d+(?:\.\d+)?%)/g, (match, prefix, percent) => {
        return `${prefix}<span class="text-sky-400 font-bold">${percent}</span>`;
    });

    // Style protocol codes
    escaped = escaped.replace(/(PROTOCOL_\d+[A-Z])/g, `<span class="text-indigo-400 font-bold font-mono">$1</span>`);

    // Style standard status brackets/parentheses
    escaped = escaped.replace(/\[SUCCESS\]/g, `<span class="text-emerald-400 font-bold">[SUCCESS]</span>`);
    escaped = escaped.replace(/\(SUCCESS\)/g, `<span class="text-emerald-400 font-bold">(SUCCESS)</span>`);
    escaped = escaped.replace(/\[FAILED\]/g, `<span class="text-rose-400 font-bold">[FAILED]</span>`);
    escaped = escaped.replace(/\(FAILED\)/g, `<span class="text-rose-400 font-bold">(FAILED)</span>`);
    escaped = escaped.replace(/\[SYSTEM\]/g, `<span class="text-cyan-400 font-bold">[SYSTEM]</span>`);
    escaped = escaped.replace(/\[INFO\]/g, `<span class="text-sky-400 font-bold">[INFO]</span>`);
    escaped = escaped.replace(/\[WARNING\]/g, `<span class="text-amber-400 font-bold">[WARNING]</span>`);
    escaped = escaped.replace(/\[ERROR\]/g, `<span class="text-rose-400 font-bold">[ERROR]</span>`);

    return escaped;
}

// Localized Periodic Elements lookup database
const periodicTable = {
    h: { name: "Hydrogen", number: 1, weight: 1.008, cat: "Reactive Nonmetal", electroneg: 2.20 },
    he: { name: "Helium", number: 2, weight: 4.003, cat: "Noble Gas", electroneg: "-" },
    li: { name: "Lithium", number: 3, weight: 6.94, cat: "Alkali Metal", electroneg: 0.98 },
    be: { name: "Beryllium", number: 4, weight: 9.012, cat: "Alkaline Earth", electroneg: 1.57 },
    b: { name: "Boron", number: 5, weight: 10.81, cat: "Metalloid", electroneg: 2.04 },
    c: { name: "Carbon", number: 6, weight: 12.011, cat: "Reactive Nonmetal", electroneg: 2.55 },
    n: { name: "Nitrogen", number: 7, weight: 14.007, cat: "Reactive Nonmetal", electroneg: 3.04 },
    o: { name: "Oxygen", number: 8, weight: 15.999, cat: "Reactive Nonmetal", electroneg: 3.44 },
    f: { name: "Fluorine", number: 9, weight: 18.998, cat: "Reactive Nonmetal", electroneg: 3.98 },
    ne: { name: "Neon", number: 10, weight: 20.180, cat: "Noble Gas", electroneg: "-" },
    na: { name: "Sodium", number: 11, weight: 22.990, cat: "Alkali Metal", electroneg: 0.93 },
    mg: { name: "Magnesium", number: 12, weight: 24.305, cat: "Alkaline Earth", electroneg: 1.31 },
    al: { name: "Aluminum", number: 13, weight: 26.982, cat: "Post-Transition", electroneg: 1.61 },
    si: { name: "Silicon", number: 14, weight: 28.085, cat: "Metalloid", electroneg: 1.90 },
    p: { name: "Phosphorus", number: 15, weight: 30.974, cat: "Reactive Nonmetal", electroneg: 2.19 },
    s: { name: "Sulfur", number: 16, weight: 32.06, cat: "Reactive Nonmetal", electroneg: 2.58 },
    cl: { name: "Chlorine", number: 17, weight: 35.45, cat: "Reactive Nonmetal", electroneg: 3.16 },
    ar: { name: "Argon", number: 18, weight: 39.948, cat: "Noble Gas", electroneg: "-" },
    k: { name: "Potassium", number: 19, weight: 39.098, cat: "Alkali Metal", electroneg: 0.82 },
    ca: { name: "Calcium", number: 20, weight: 40.078, cat: "Alkaline Earth", electroneg: 1.00 },
    cr: { name: "Chromium", number: 24, weight: 51.996, cat: "Transition Metal", electroneg: 1.66 },
    mn: { name: "Manganese", number: 25, weight: 54.938, cat: "Transition Metal", electroneg: 1.55 },
    fe: { name: "Iron", number: 26, weight: 55.845, cat: "Transition Metal", electroneg: 1.83 },
    co: { name: "Cobalt", number: 27, weight: 58.933, cat: "Transition Metal", electroneg: 1.88 },
    ni: { name: "Nickel", number: 28, weight: 58.693, cat: "Transition Metal", electroneg: 1.91 },
    cu: { name: "Copper", number: 29, weight: 63.546, cat: "Transition Metal", electroneg: 1.90 },
    zn: { name: "Zinc", number: 30, weight: 65.38, cat: "Transition Metal", electroneg: 1.65 },
    ag: { name: "Silver", number: 47, weight: 107.868, cat: "Transition Metal", electroneg: 1.93 },
    i: { name: "Iodine", number: 53, weight: 126.904, cat: "Reactive Nonmetal", electroneg: 2.66 },
    au: { name: "Gold", number: 79, weight: 196.967, cat: "Transition Metal", electroneg: 2.54 },
    pb: { name: "Lead", number: 82, weight: 207.2, cat: "Post-Transition", electroneg: 2.33 }
};

function renderDashboardStats() {
    try {
        const reports = JSON.parse(localStorage.getItem('vlabs_reports') || '[]');
        const completedIds = new Set(reports.map(r => r.id));
        const completedCount = completedIds.size;
        const percent = Math.round((completedCount / 4) * 100);

        document.getElementById('dash-completed-count').innerText = `${completedCount} / 4`;
        document.getElementById('dash-reports-count').innerText = reports.length;

        const circleFill = document.getElementById('progress-circle-fill');
        const circlePercent = document.getElementById('progress-circle-percent');
        if (circleFill) {
            const totalCircumference = 125.6; // 2 * Math.PI * 20
            const offset = totalCircumference * (1 - completedCount / 4);
            circleFill.style.strokeDashoffset = offset;
        }
        if (circlePercent) {
            circlePercent.innerText = `${percent}%`;
        }

        // Update sidebar progress widgets
        const sidebarPercent = document.getElementById('sidebar-progress-percent');
        const sidebarBar = document.getElementById('sidebar-progress-bar');
        if (sidebarPercent) {
            sidebarPercent.innerText = `${percent}%`;
        }
        if (sidebarBar) {
            sidebarBar.style.width = `${percent}%`;
        }

        const accuracyEl = document.getElementById('dash-accuracy-rate');
        if (accuracyEl) {
            if (reports.length > 0) {
                const sumAccuracy = reports.reduce((sum, r) => sum + parseFloat(r.accuracy), 0);
                const avgAccuracy = (sumAccuracy / reports.length).toFixed(1);
                accuracyEl.innerText = `${avgAccuracy}%`;
            } else {
                accuracyEl.innerText = 'N/A';
            }
        }

        renderSystemConsoleFeed();
    } catch (e) {
        console.error(e);
    }
}

function renderSystemConsoleFeed() {
    const consoleEl = document.getElementById('system-feed-console');
    if (!consoleEl) return;

    const logs = JSON.parse(localStorage.getItem('vlabs_system_logs') || '[]');
    let html = '';
    logs.forEach(log => {
        html += `<div class="font-mono text-[10px] leading-relaxed select-text py-0.5 border-b border-slate-900">${formatLogMsg(log)}</div>`;
    });
    // Append terminal cursor prompt
    html += `<div class="font-mono text-[10px] leading-relaxed select-text py-0.5 flex items-center gap-1"><span class="text-primary font-bold">&gt;_</span><span class="w-1 h-2.5 bg-primary animate-pulse"></span></div>`;
    consoleEl.innerHTML = html;
}

function initElementLookup() {
    const input = document.getElementById('element-lookup-input');
    const resultDiv = document.getElementById('element-lookup-result');
    if (!input || !resultDiv) return;

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (!query) {
            resultDiv.innerHTML = `
                <div class="text-center text-on-surface-variant/80 text-[11px] italic">
                    Enter an atomic symbol above to lookup standard chemical specifications.
                </div>
            `;
            return;
        }

        const el = periodicTable[query];
        if (el) {
            resultDiv.innerHTML = `
                <div class="space-y-1.5 text-left font-sans text-xs animate-fade-in">
                    <div class="flex justify-between items-center border-b border-outline-variant/30 pb-1">
                        <span class="font-bold text-primary font-geist text-sm">${el.name} (${query.toUpperCase()})</span>
                        <span class="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary font-mono text-[9px] rounded-full font-bold">No. ${el.number}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-x-2 gap-y-1 font-mono text-[10px] text-on-surface-variant pt-0.5">
                        <div>Mass: <span class="font-bold text-on-surface">${el.weight} u</span></div>
                        <div>E.N.: <span class="font-bold text-on-surface">${el.electroneg}</span></div>
                        <div class="col-span-2 mt-0.5 text-[9px] uppercase tracking-wider text-slate-400 font-bold">Class: <span class="text-indigo-500">${el.cat}</span></div>
                    </div>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="text-center text-red-500/90 text-[11px] font-mono font-bold animate-pulse">
                    [UNKNOWN_SYMBOL: "${query.toUpperCase()}"]
                </div>
            `;
        }
    });
}

function initMolarityCalculator() {
    const massInput = document.getElementById('molarity-mass');
    const mwInput = document.getElementById('molarity-mw');
    const volInput = document.getElementById('molarity-volume');
    const resultSpan = document.getElementById('molarity-result-val');

    if (!massInput || !mwInput || !volInput || !resultSpan) return;

    const calc = () => {
        const mass = parseFloat(massInput.value);
        const mw = parseFloat(mwInput.value);
        const vol = parseFloat(volInput.value);

        if (isNaN(mass) || isNaN(mw) || isNaN(vol) || mw <= 0 || vol <= 0 || mass < 0) {
            resultSpan.innerText = "0.000 M";
            return;
        }

        const moles = mass / mw;
        const liters = vol / 1000;
        const molarity = moles / liters;
        resultSpan.innerText = `${molarity.toFixed(3)} M`;
    };

    massInput.addEventListener('input', calc);
    mwInput.addEventListener('input', calc);
    volInput.addEventListener('input', calc);
}

function initSystemUptime() {
    const uptimeEl = document.getElementById('sys-telemetry-uptime');
    const cpuEl = document.getElementById('sys-telemetry-cpu');
    const tempEl = document.getElementById('sys-telemetry-temp');

    let start = Date.now();
    setInterval(() => {
        let diffMs = Date.now() - start;
        let secs = Math.floor(diffMs / 1000) % 60;
        let mins = Math.floor(diffMs / 60000) % 60;
        let hrs = Math.floor(diffMs / 3600000);
        let timeStr = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        if (uptimeEl) uptimeEl.innerText = timeStr;

        if (cpuEl) {
            const cpu = (1.5 + Math.random() * 2.0).toFixed(1);
            cpuEl.innerText = `${cpu} %`;
        }
        if (tempEl) {
            const temp = (34.0 + Math.sin(Date.now() / 10000) * 0.4 + Math.random() * 0.1).toFixed(1);
            tempEl.innerText = `${temp} °C`;
        }
    }, 1000);
}

function updateLiveLogs() {
    setInterval(() => {
        if (Math.random() < 0.2) {
            const checks = [
                "Running periodic temperature telemetry sync...",
                "Database cluster sync checks: [SUCCESS]",
                "Particle buffer refresh completed successfully.",
                "Simulation ports validation scan: [0 alerts]",
                "Memory heap garbage collector run complete."
            ];
            const randomCheck = checks[Math.floor(Math.random() * checks.length)];
            const logMsg = `[${new Date().toLocaleTimeString()}] ${randomCheck}`;
            
            const logs = JSON.parse(localStorage.getItem('vlabs_system_logs') || '[]');
            logs.unshift(logMsg);
            localStorage.setItem('vlabs_system_logs', JSON.stringify(logs.slice(0, 50)));

            if (currentView === 'dashboard') {
                renderSystemConsoleFeed();
            }
        }
    }, 20000);
}

// ==========================================
// 2. 3D MOLECULAR VISUALIZER
// ==========================================

function initMolecularVisualizer() {
    molCanvas = document.getElementById('mol-canvas');
    if (!molCanvas) return;
    molCtx = molCanvas.getContext('2d');
    
    const resizeCanvas = () => {
        const rect = molCanvas.parentElement.getBoundingClientRect();
        molCanvas.width = rect.width;
        molCanvas.height = Math.max(380, rect.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    molCanvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.offsetX, y: e.offsetY };
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    molCanvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.offsetX - previousMousePosition.x;
        const deltaY = e.offsetY - previousMousePosition.y;
        
        rotationY += deltaX * 0.005;
        rotationX += deltaY * 0.005;
        
        previousMousePosition = { x: e.offsetX, y: e.offsetY };
    });

    // Touch support
    molCanvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            const t = e.touches[0];
            const rect = molCanvas.getBoundingClientRect();
            previousMousePosition = { x: t.clientX - rect.left, y: t.clientY - rect.top };
        }
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    molCanvas.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const t = e.touches[0];
        const rect = molCanvas.getBoundingClientRect();
        const clientX = t.clientX - rect.left;
        const clientY = t.clientY - rect.top;
        
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;
        
        rotationY += deltaX * 0.008;
        rotationX += deltaY * 0.008;
        
        previousMousePosition = { x: clientX, y: clientY };
    });

    selectMolecule(selectedMoleculeId);
    runMolAnimation();
}

function selectMolecule(id) {
    selectedMoleculeId = id;
    const mol = molecules[id];
    
    const listItems = ['h2o', 'co2', 'ch4', 'hcl', 'naoh'];
    listItems.forEach(item => {
        const btn = document.getElementById(`mol-btn-${item}`);
        if (btn) {
            if (item === id) {
                btn.classList.add('bg-primary/10', 'border-primary', 'text-primary', 'font-bold');
                btn.classList.remove('border-transparent', 'text-on-surface-variant');
            } else {
                btn.classList.remove('bg-primary/10', 'border-primary', 'text-primary', 'font-bold');
                btn.classList.add('border-transparent', 'text-on-surface-variant');
            }
        }
    });

    document.getElementById('mol-title-label').innerText = `${mol.name} Molecule (${mol.formula})`;
    document.getElementById('mol-weight-val').innerText = mol.weight;
    document.getElementById('mol-type-val').innerText = mol.type;
    document.getElementById('mol-desc-text').innerText = mol.desc;
}

function runMolAnimation() {
    if (currentView !== 'molecular') return;
    
    molCtx.clearRect(0, 0, molCanvas.width, molCanvas.height);
    
    const mol = molecules[selectedMoleculeId];
    const centerX = molCanvas.width / 2;
    const centerY = molCanvas.height / 2;
    
    if (!isDragging) {
        rotationY += 0.004;
        rotationX += 0.002;
    }
    
    const cosX = Math.cos(rotationX);
    const sinX = Math.sin(rotationX);
    const cosY = Math.cos(rotationY);
    const sinY = Math.sin(rotationY);

    const projectedAtoms = mol.atoms.map(atom => {
        let x1 = atom.x * cosY - atom.z * sinY;
        let z1 = atom.x * sinY + atom.z * cosY;
        
        let y2 = atom.y * cosX - z1 * sinX;
        let z2 = atom.y * sinX + z1 * cosX;
        
        const perspective = 300 / (300 + z2);
        const px = centerX + x1 * perspective;
        const py = centerY + y2 * perspective;
        
        return {
            px: px,
            py: py,
            pz: z2,
            r: atom.r * perspective,
            color: atom.color,
            type: atom.type
        };
    });

    // Draw Bonds
    molCtx.lineWidth = 4;
    mol.bonds.forEach(bond => {
        const a = projectedAtoms[bond.a];
        const b = projectedAtoms[bond.b];
        
        const grad = molCtx.createLinearGradient(a.px, a.py, b.px, b.py);
        grad.addColorStop(0, a.color);
        grad.addColorStop(1, b.color);
        
        molCtx.strokeStyle = grad;
        molCtx.beginPath();
        molCtx.moveTo(a.px, a.py);
        molCtx.lineTo(b.px, b.py);
        molCtx.stroke();
    });

    const sortedIndices = projectedAtoms
        .map((atom, index) => ({ atom, index }))
        .sort((a, b) => b.atom.pz - a.atom.pz);

    // Draw Atoms
    sortedIndices.forEach(({ atom }) => {
        const glowGrad = molCtx.createRadialGradient(atom.px, atom.py, 1, atom.px, atom.py, atom.r * 1.4);
        glowGrad.addColorStop(0, atom.color);
        glowGrad.addColorStop(0.3, atom.color);
        glowGrad.addColorStop(1, 'rgba(79, 70, 229, 0)');
        
        molCtx.fillStyle = glowGrad;
        molCtx.beginPath();
        molCtx.arc(atom.px, atom.py, atom.r * 1.4, 0, Math.PI * 2);
        molCtx.fill();

        const atomGrad = molCtx.createRadialGradient(
            atom.px - atom.r * 0.3, 
            atom.py - atom.r * 0.3, 
            atom.r * 0.1, 
            atom.px, 
            atom.py, 
            atom.r
        );
        atomGrad.addColorStop(0, '#ffffff');
        atomGrad.addColorStop(0.3, atom.color);
        atomGrad.addColorStop(1, '#f1f5f9'); // Light shade background limit

        molCtx.fillStyle = atomGrad;
        molCtx.beginPath();
        molCtx.arc(atom.px, atom.py, atom.r, 0, Math.PI * 2);
        molCtx.fill();

        molCtx.fillStyle = '#ffffff';
        molCtx.font = `bold ${Math.max(9, atom.r * 0.65)}px JetBrains Mono`;
        molCtx.textAlign = 'center';
        molCtx.textBaseline = 'middle';
        molCtx.fillText(atom.type, atom.px, atom.py + 0.5);
    });

    molAnimationId = requestAnimationFrame(runMolAnimation);
}

// ==========================================
// 3. ANALYTICS VIEW
// ==========================================

function initAnalyticsPlot() {
    selectTitrationPlot(activeTitrationId);
}

function selectTitrationPlot(id) {
    activeTitrationId = id;
    const config = titrationConfigs[id];
    
    const list = ['strong', 'weak', 'redox', 'complex'];
    list.forEach(item => {
        const btn = document.getElementById(`plot-btn-${item}`);
        if (btn) {
            if (item === id) {
                btn.classList.add('bg-primary/10', 'border-primary', 'text-primary', 'font-bold');
                btn.classList.remove('border-transparent', 'text-on-surface-variant');
            } else {
                btn.classList.remove('bg-primary/10', 'border-primary', 'text-primary', 'font-bold');
                btn.classList.add('border-transparent', 'text-on-surface-variant');
            }
        }
    });

    document.getElementById('plot-title').innerText = config.title;
    document.getElementById('plot-titrant').innerText = config.titrant;
    document.getElementById('plot-sample').innerText = config.sample;
    document.getElementById('plot-indicator').innerText = config.indicator;

    drawAnalyticsGraph(0);
}

function runTitrationCurvePlot() {
    if (titrationInterval) clearInterval(titrationInterval);
    
    let vol = 0;
    const totalVol = 40.0;
    const step = 0.4;

    const runBtn = document.getElementById('run-plot-btn');
    if (runBtn) {
        runBtn.disabled = true;
        runBtn.innerText = "SIMULATING FLOW...";
    }

    titrationInterval = setInterval(() => {
        vol += step;
        if (vol >= totalVol) {
            vol = totalVol;
            clearInterval(titrationInterval);
            if (runBtn) {
                runBtn.disabled = false;
                runBtn.innerText = "RUN TITRATION PLOT";
            }
        }
        drawAnalyticsGraph(vol);
    }, 30);
}

function drawAnalyticsGraph(currentVolume) {
    const canvas = document.getElementById('analytics-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 360;

    const w = canvas.width;
    const h = canvas.height;
    
    const paddingLeft = 50;
    const paddingRight = 30;
    const paddingTop = 30;
    const paddingBottom = 40;

    const graphW = w - paddingLeft - paddingRight;
    const graphH = h - paddingTop - paddingBottom;

    const config = titrationConfigs[activeTitrationId];
    
    let yMin = 0;
    let yMax = 14;
    let yLabel = "pH Level";
    
    if (activeTitrationId === 'redox') {
        yMin = 0.2;
        yMax = 1.6;
        yLabel = "Electrode Potential (V)";
    } else if (activeTitrationId === 'complex') {
        yMin = 2.0;
        yMax = 11.0;
        yLabel = "pCa Indicator";
    }

    const isDark = document.documentElement.classList.contains('dark');
    const bgColor = isDark ? '#111c35' : '#ffffff';
    const textColor = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(148, 163, 184, 0.15)';
    const primaryColor = isDark ? '#3b82f6' : '#4f46e5';
    const shadowColor = isDark ? 'rgba(59, 130, 246, 0.25)' : 'rgba(79, 70, 229, 0.15)';

    // Clear background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);

    // Draw Grid Lines & Labels
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.fillStyle = textColor;
    ctx.font = '9px JetBrains Mono';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    // Y Axis ticks
    const ticksCount = 7;
    for (let i = 0; i <= ticksCount; i++) {
        const frac = i / ticksCount;
        const yVal = yMax - frac * (yMax - yMin);
        const y = paddingTop + frac * graphH;
        
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(w - paddingRight, y);
        ctx.stroke();
        
        ctx.fillText(yVal.toFixed(1), paddingLeft - 8, y);
    }

    // X Axis ticks
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const xTicks = 8;
    for (let i = 0; i <= xTicks; i++) {
        const frac = i / xTicks;
        const xVal = frac * 40.0;
        const x = paddingLeft + frac * graphW;

        ctx.beginPath();
        ctx.moveTo(x, paddingTop);
        ctx.lineTo(x, h - paddingBottom);
        ctx.stroke();

        ctx.fillText(`${xVal.toFixed(0)} mL`, x, h - paddingBottom + 8);
    }

    // Draw Labels Titles
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 10px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.fillText("Volume of Titrant Added (mL)", paddingLeft + graphW/2, h - 18);

    // Vertical Y-axis rotated title
    ctx.save();
    ctx.translate(14, paddingTop + graphH/2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();

    // Plot Titration Curve Line
    if (currentVolume > 0) {
        ctx.strokeStyle = primaryColor; // Primary accent color
        ctx.lineWidth = 3;
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 10;
        ctx.beginPath();

        const step = 0.1;
        let isFirst = true;

        for (let v = 0.0; v <= currentVolume; v += step) {
            const yVal = config.curveFunc(v);
            
            const x = paddingLeft + (v / 40.0) * graphW;
            const yFraction = (yVal - yMin) / (yMax - yMin);
            const y = h - paddingBottom - yFraction * graphH;

            if (isFirst) {
                ctx.moveTo(x, y);
                isFirst = false;
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Highlight Equivalence point
        if (currentVolume >= config.eqPt) {
            const eqYVal = config.curveFunc(config.eqPt);
            const eqX = paddingLeft + (config.eqPt / 40.0) * graphW;
            const eqYFraction = (eqYVal - yMin) / (yMax - yMin);
            const eqY = h - paddingBottom - eqYFraction * graphH;

            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(eqX, eqY, 6, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(eqX, eqY, 6, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 9px JetBrains Mono';
            ctx.textAlign = 'left';
            ctx.fillText(` Equivalence Point (${config.eqPt} mL, Y: ${eqYVal.toFixed(2)})`, eqX + 8, eqY - 4);
        }
    }
}

// ==========================================
// 4. MODAL SYSTEM CONTROLS
// ==========================================

function openSupport() {
    const modal = document.getElementById('support-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeSupport() {
    const modal = document.getElementById('support-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function openLogsDrawer() {
    const drawer = document.getElementById('logs-drawer');
    if (drawer) {
        drawer.classList.remove('hidden');
        drawer.classList.add('flex');
        
        const container = document.getElementById('drawer-logs-container');
        if (container) {
            const logs = JSON.parse(localStorage.getItem('vlabs_system_logs') || '[]');
            let html = '';
            logs.forEach(log => {
                html += `<div class="font-mono text-[11px] leading-relaxed select-text py-0.5 border-b border-[#cbd5e1]/10">${formatLogMsg(log)}</div>`;
            });
            // Append terminal cursor prompt
            html += `<div class="font-mono text-[11px] leading-relaxed select-text py-0.5 flex items-center gap-1"><span class="text-primary font-bold">&gt;_</span><span class="w-1.5 h-3 bg-primary animate-pulse"></span></div>`;
            container.innerHTML = html;
        }
    }
}

function closeLogsDrawer() {
    const drawer = document.getElementById('logs-drawer');
    if (drawer) {
        drawer.classList.add('hidden');
        drawer.classList.remove('flex');
    }
}

function clearSystemLogs() {
    if (confirm("Clear current operational console logs?")) {
        const clearedLogs = [`[${new Date().toLocaleTimeString()}] Terminal console cleared.`];
        localStorage.setItem('vlabs_system_logs', JSON.stringify(clearedLogs));
        if (currentView === 'dashboard') {
            renderSystemConsoleFeed();
        }
        const container = document.getElementById('drawer-logs-container');
        if (container) {
            container.innerHTML = `<div class="font-mono text-[11px] leading-relaxed select-text py-0.5 border-b border-[#cbd5e1]/10">${formatLogMsg(clearedLogs[0])}</div>` + 
                                  `<div class="font-mono text-[11px] leading-relaxed select-text py-0.5 flex items-center gap-1"><span class="text-primary font-bold">&gt;_</span><span class="w-1.5 h-3 bg-primary animate-pulse"></span></div>`;
        }
    }
}

// Global functions exports
window.setView = setView;
window.selectMolecule = selectMolecule;
window.selectTitrationPlot = selectTitrationPlot;
window.runTitrationCurvePlot = runTitrationCurvePlot;
window.openSupport = openSupport;
window.closeSupport = closeSupport;
window.openLogsDrawer = openLogsDrawer;
window.closeLogsDrawer = closeLogsDrawer;
window.clearSystemLogs = clearSystemLogs;
