// Lab Simulation Workspace Manager - VLabs

// Mapping of experiments
const experiments = {
    'exp-chloride-content-mohrs': {
        title: "Determination of Chloride Content",
        protocol: "PROTOCOL_01A",
        normality: "N/100 AgNO3",
        indicator: "Potassium Chromate",
        resultLabel: "Chloride Content (mg/L)",
        formula: (v) => v * 17.725,
        targetTolerance: 0.05 // 5% tolerance
    },
    'exp-ferrous-content': {
        title: "Ferrous Content Analysis",
        protocol: "PROTOCOL_02B",
        normality: "N/20 K2Cr2O7",
        indicator: "K3[Fe(CN)6] (Ext)",
        resultLabel: "Ferrous Content (mg/L)",
        formula: (v) => v * 111.7,
        targetTolerance: 0.05
    },
    'exp-viscosity-measurement': {
        title: "Viscosity Measurement",
        protocol: "PROTOCOL_03C",
        normality: "N/A",
        indicator: "Ostwald Viscometer",
        resultLabel: "Relative Viscosity (cP)",
        formula: (v) => {
            // For viscosity, flow time is the volume logged.
            // Let's assume viscosity is proportional to flow time. 
            // Standard relative viscosity = (t_sample * density_sample) / (t_water * density_water)
            // Let's approximate: 1.0 + (v / 50.0) where v is seconds.
            return 1.0 + (v * 0.05);
        },
        targetTolerance: 0.1
    },
    'exp-water-hardness': {
        title: "Water Hardness Testing",
        protocol: "PROTOCOL_04D",
        normality: "0.01 M EDTA",
        indicator: "Eriochrome Black T",
        resultLabel: "Total Hardness (mg/L)",
        formula: (v) => v * 50.0,
        targetTolerance: 0.05
    }
};

// State
let currentExpId = 'exp-chloride-content-mohrs';
let activeTab = 'aim';
let trials = [];
let pretestQuestions = [];
let posttestQuestions = [];

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    // Parse URL params
    const params = new URLSearchParams(window.location.search);
    const expParam = params.get('exp');
    if (expParam && experiments[expParam]) {
        currentExpId = expParam;
    }

    const exp = experiments[currentExpId];
    
    // Update headers and badges
    document.title = `${exp.title} - Lab Terminal`;
    const badge = document.getElementById('experiment-badge');
    if (badge) badge.innerText = `[${exp.protocol}]`;
    
    // Update labels and telemetry
    const labelCalc = document.getElementById('label-calc-result');
    if (labelCalc) labelCalc.innerText = exp.resultLabel;

    const teleNorm = document.getElementById('telemetry-normality');
    if (teleNorm) teleNorm.innerText = exp.normality;

    const teleInd = document.getElementById('telemetry-indicator');
    if (teleInd) teleInd.innerText = exp.indicator;

    // Load dynamic iframe source
    const iframe = document.getElementById('simulation-iframe');
    if (iframe) {
        iframe.addEventListener('load', () => {
            try {
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                // Check if stylesheet is already loaded, otherwise append it
                if (!doc.querySelector('link[href*="simulation-theme.css"]')) {
                    const link = doc.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = '../../assets/simulation-theme.css';
                    doc.head.appendChild(link);
                }
                // Sync theme class to the iframe
                syncIframeTheme();
            } catch (e) {
                console.error("Failed to inject simulation-theme.css inside iframe: ", e);
            }
        });
        iframe.src = `simulations/${currentExpId}/simulation/index.html`;
    }

    // Listen for theme changes to sync iframe
    window.addEventListener('theme-changed', syncIframeTheme);

    // Default to 'aim' tab
    switchTab('aim');
});

// Switch Sidebar Tabs
function switchTab(tabId) {
    activeTab = tabId;
    
    // Manage active visual tab border
    const tabs = ['aim', 'theory', 'procedure', 'pretest', 'posttest', 'references'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (btn) {
            if (t === tabId) {
                btn.classList.add('text-primary', 'border-primary');
                btn.classList.remove('text-on-surface-variant', 'border-transparent');
            } else {
                btn.classList.remove('text-primary', 'border-primary');
                btn.classList.add('text-on-surface-variant', 'border-transparent');
            }
        }
    });

    const docContainer = document.getElementById('doc-container');
    if (!docContainer) return;

    // Show loading spinner
    docContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full text-on-surface-variant space-y-3 py-12">
            <span class="material-symbols-outlined text-4xl animate-spin text-primary">sync</span>
            <span class="font-mono text-xs uppercase tracking-widest">Accessing terminal files...</span>
        </div>
    `;

    // Fetch tab details
    if (tabId === 'pretest' || tabId === 'posttest') {
        fetchQuiz(tabId);
    } else {
        fetchMarkdown(tabId);
    }
}

// Fetch and render Markdown documents
function fetchMarkdown(tabId) {
    const filename = `${tabId}.md`;
    const url = `simulations/${currentExpId}/${filename}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filename}`);
            return response.text();
        })
        .then(text => {
            const html = parseMarkdown(text);
            const docContainer = document.getElementById('doc-container');
            docContainer.innerHTML = `<div class="md-content animate-fade-in">${html}</div>`;
        })
        .catch(err => {
            const docContainer = document.getElementById('doc-container');
            docContainer.innerHTML = `
                <div class="p-4 border border-red-500/20 bg-red-950/20 text-red-300 rounded text-sm">
                    <span class="font-bold font-mono">ERROR:</span> Document file not found for ${filename}. Ensure simulations directories are in workspace.
                </div>
            `;
        });
}

// Simple Markdown to HTML parser
function parseMarkdown(md) {
    let html = md;
    
    // Remove YAML frontmatter if present
    html = html.replace(/^---[\s\S]*?---/, '');
    
    // Headings
    html = html.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-primary hover:underline">$1</a>');
    
    // Lists
    // Unordered lists
    html = html.replace(/^\s*-\s+(.*?)$/gm, '<li>$1</li>');
    html = html.replace(/^\s*\*\s+(.*?)$/gm, '<li>$1</li>');
    // Ordered lists
    html = html.replace(/^\s*(\d+)\.\s+(.*?)$/gm, '<li>$2</li>');
    
    // Subscripts & Superscripts
    html = html.replace(/<sub>(.*?)<\/sub>/g, '<sub>$1</sub>');
    html = html.replace(/<sup>(.*?)<\/sup>/g, '<sup>$1</sup>');
    
    // New lines to HTML line breaks or paragraphs
    html = html.replace(/\n\s*\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br/>');
    
    // Wrap loose list items in list tags
    // This is a simple wrapper logic
    if (html.includes('<li>')) {
        // A basic cleanup
        html = '<p>' + html + '</p>';
        html = html.replace(/<p><br\/>/g, '<p>');
        html = html.replace(/<br\/><\/p>/g, '</p>');
    }
    
    // Rewrite image paths to resolve relative to the experiment directory
    html = html.replace(/src=["']images\/(.*?)["']/g, (match, p1) => {
        return `src="simulations/${currentExpId}/images/${p1}"`;
    });
    html = html.replace(/\(images\/(.*?)\)/g, (match, p1) => {
        return `(simulations/${currentExpId}/images/${p1})`;
    });
    
    return html;
}

// Fetch Quiz JSON questions
function fetchQuiz(tabId) {
    const filename = `${tabId}.json`;
    const url = `simulations/${currentExpId}/${filename}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filename}`);
            return response.json();
        })
        .then(data => {
            if (tabId === 'pretest') {
                pretestQuestions = data;
            } else {
                posttestQuestions = data;
            }
            renderQuiz(tabId, data);
        })
        .catch(err => {
            const docContainer = document.getElementById('doc-container');
            docContainer.innerHTML = `
                <div class="p-4 border border-red-500/20 bg-red-950/20 text-red-300 rounded text-sm">
                    <span class="font-bold font-mono">ERROR:</span> Quiz JSON data not found for ${filename}.
                </div>
            `;
        });
}

// Render Quiz questions
function renderQuiz(quizType, questions) {
    const docContainer = document.getElementById('doc-container');
    if (!questions || questions.length === 0) {
        docContainer.innerHTML = `<div class="text-on-surface-variant italic font-mono text-xs">No questions loaded for this quiz.</div>`;
        return;
    }
    
    let html = `
        <div class="space-y-6">
            <h2 class="text-xl font-geist font-bold text-primary border-b border-primary/20 pb-2 uppercase tracking-wide">
                ${quizType === 'pretest' ? 'Evaluation Pre-Test' : 'Simulation Post-Test'}
            </h2>
            <form id="quiz-form" class="space-y-6" onsubmit="submitQuiz(event, '${quizType}')">
    `;
    
    questions.forEach((q, index) => {
        html += `
            <div class="glass-panel p-4 rounded border border-outline-variant flex flex-col gap-3">
                <span class="font-mono text-[9px] text-primary uppercase">[QUESTION_${index + 1}]</span>
                <p class="text-sm font-semibold text-slate-800 leading-normal">${q.question}</p>
                <div class="space-y-2 mt-2 font-sans">
        `;
        
        for (const [key, value] of Object.entries(q.answers)) {
            html += `
                <label class="flex items-start gap-2.5 p-2 rounded hover:bg-slate-100 cursor-pointer border border-transparent transition-all">
                    <input type="radio" name="question-${index}" value="${key}" required class="mt-0.5 accent-primary text-white">
                    <span class="text-xs text-on-surface-variant"><strong class="uppercase text-slate-700">${key}:</strong> ${value}</span>
                </label>
            `;
        }
        
        html += `
                </div>
                <div id="quiz-feedback-${index}" class="text-xs font-mono font-bold uppercase hidden"></div>
            </div>
        `;
    });
    
    html += `
                <button type="submit" class="w-full py-2 bg-primary text-white font-mono text-xs font-bold uppercase tracking-wider rounded bloom-hover transition-all">
                    Submit Evaluation Answers
                </button>
            </form>
            <div id="quiz-result-score" class="p-4 rounded border border-outline-variant text-center font-mono uppercase hidden">
            </div>
        </div>
    `;
    
    docContainer.innerHTML = html;
}

// Submit Quiz and calculate scores
function submitQuiz(event, quizType) {
    event.preventDefault();
    const questions = quizType === 'pretest' ? pretestQuestions : posttestQuestions;
    let correctCount = 0;
    
    questions.forEach((q, index) => {
        const radios = document.getElementsByName(`question-${index}`);
        let selectedValue = '';
        
        for (const radio of radios) {
            if (radio.checked) {
                selectedValue = radio.value;
            }
            // Disable inputs after submit
            radio.disabled = true;
        }
        
        const feedbackDiv = document.getElementById(`quiz-feedback-${index}`);
        feedbackDiv.classList.remove('hidden', 'text-emerald-600', 'text-red-600');
        
        // Show correct indicator in the parent label
        for (const radio of radios) {
            const parentLabel = radio.parentElement;
            if (radio.value === q.correctAnswer) {
                parentLabel.classList.add('bg-emerald-50', 'border-emerald-200');
                parentLabel.querySelector('span').classList.add('text-emerald-700');
            } else if (radio.value === selectedValue) {
                parentLabel.classList.add('bg-red-50', 'border-red-200');
                parentLabel.querySelector('span').classList.add('text-red-700');
            }
        }
        
        if (selectedValue === q.correctAnswer) {
            correctCount++;
            feedbackDiv.innerText = "✓ ANSWER CORRECT";
            feedbackDiv.classList.add('text-emerald-600');
        } else {
            feedbackDiv.innerHTML = `✗ INCORRECT. CORRECT: <span class="uppercase">${q.correctAnswer}</span>`;
            feedbackDiv.classList.add('text-red-600');
        }
    });
    
    // Display total score at bottom
    const scoreDiv = document.getElementById('quiz-result-score');
    scoreDiv.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-300', 'text-emerald-700', 'bg-red-50', 'border-red-300', 'text-red-700');
    
    const percentage = (correctCount / questions.length) * 100;
    scoreDiv.innerHTML = `
        <div class="text-sm font-bold">Evaluation Completed</div>
        <div class="text-2xl font-bold mt-1 text-glow">${correctCount} / ${questions.length} (${percentage.toFixed(0)}%)</div>
        <div class="text-[9px] text-on-surface-variant mt-2">Evaluation results logged to current terminal session.</div>
    `;
    
    if (percentage >= 50) {
        scoreDiv.classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-700');
    } else {
        scoreDiv.classList.add('bg-red-50', 'border-red-300', 'text-red-700');
    }
    
    // Scroll to bottom
    const docContainer = document.getElementById('doc-container');
    docContainer.scrollTop = docContainer.scrollHeight;
}

// Reload Titration simulation iframe
function reloadSimulation() {
    const iframe = document.getElementById('simulation-iframe');
    if (iframe) {
        iframe.src = iframe.src;
    }
}

// Toggle Simulation iframe fullscreen
function toggleIframeFullscreen() {
    const wrapper = document.getElementById('iframe-wrapper');
    if (!wrapper) return;
    
    if (!document.fullscreenElement) {
        if (wrapper.requestFullscreen) {
            wrapper.requestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Observation Table - Add trial row
function addTrialRow() {
    const initVal = parseFloat(document.getElementById('input-initial').value);
    const finalVal = parseFloat(document.getElementById('input-final').value);
    
    if (isNaN(initVal) || isNaN(finalVal)) {
        alert("Please enter valid numerical observations.");
        return;
    }
    
    if (finalVal < initVal) {
        alert("Final reading cannot be less than initial reading.");
        return;
    }
    
    const diff = finalVal - initVal;
    
    // Add to trials array
    const trialNo = trials.length + 1;
    trials.push({
        trial: trialNo,
        initial: initVal.toFixed(2),
        final: finalVal.toFixed(2),
        diff: diff.toFixed(2)
    });
    
    renderObservationTable();
}

// Render Trial rows
function renderObservationTable() {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    if (trials.length === 0) {
        tbody.innerHTML = `
            <tr id="empty-row" class="border-b border-outline-variant/10">
                <td colspan="5" class="p-4 text-center text-on-surface-variant italic">No trials recorded yet. Use the logger below to log data.</td>
            </tr>
        `;
        return;
    }
    
    let html = '';
    trials.forEach((t, i) => {
        html += `
            <tr class="border-b border-outline-variant/10 hover:bg-slate-100 transition-colors">
                <td class="p-2.5 font-bold text-primary">#${t.trial}</td>
                <td class="p-2.5">${t.initial}</td>
                <td class="p-2.5">${t.final}</td>
                <td class="p-2.5 font-semibold text-slate-800">${t.diff}</td>
                <td class="p-2.5 text-center">
                    <button onclick="deleteTrialRow(${i})" class="text-red-600 hover:text-red-500 p-1 rounded hover:bg-red-50">
                        <span class="material-symbols-outlined text-[16px] block">delete</span>
                    </button>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
}

// Delete observation row
function deleteTrialRow(index) {
    trials.splice(index, 1);
    
    // Reindex remaining trials
    trials.forEach((t, i) => {
        t.trial = i + 1;
    });
    
    renderObservationTable();
}

// Verify Calculation against Theoretical value
function verifyCalculation() {
    const userVal = parseFloat(document.getElementById('input-result').value);
    const feedback = document.getElementById('calc-feedback');
    
    if (isNaN(userVal)) {
        feedback.innerText = "✗ ENTER VALID CALCULATION";
        feedback.classList.remove('hidden', 'text-emerald-400');
        feedback.classList.add('text-red-400');
        feedback.style.display = 'block';
        return;
    }
    
    if (trials.length === 0) {
        feedback.innerText = "✗ LOG TRIALS TO GENERATE VOLUME";
        feedback.classList.remove('hidden', 'text-emerald-400');
        feedback.classList.add('text-red-400');
        feedback.style.display = 'block';
        return;
    }
    
    // Calculate average volume added
    const totalDiff = trials.reduce((sum, t) => sum + parseFloat(t.diff), 0);
    const avgV = totalDiff / trials.length;
    
    // Expected calculation value from formula mapping
    const expFormula = experiments[currentExpId].formula;
    const expectedVal = expFormula(avgV);
    const tolerance = experiments[currentExpId].targetTolerance;
    
    // Compare
    const diffPercent = Math.abs(userVal - expectedVal) / expectedVal;
    
    feedback.classList.remove('hidden');
    const isVerified = diffPercent <= tolerance;
    if (isVerified) {
        feedback.innerHTML = `✓ SUCCESS: VALUE MATCHES expected theoretical level (~${expectedVal.toFixed(2)})`;
        feedback.classList.remove('text-red-600');
        feedback.classList.add('text-emerald-600');
    } else {
        feedback.innerHTML = `✗ CALCULATION ERROR. expected theoretical value based on logged observations: ~${expectedVal.toFixed(2)}`;
        feedback.classList.remove('text-emerald-600');
        feedback.classList.add('text-red-600');
    }
    feedback.style.display = 'block';

    // Save this run to localStorage for dashboard retrieval
    saveRunToLocalStorage(userVal, expectedVal, diffPercent, isVerified);
}

// Helper to save current run history
function saveRunToLocalStorage(userVal, expectedVal, diffPercent, verified) {
    try {
        const exp = experiments[currentExpId];
        const reports = JSON.parse(localStorage.getItem('vlabs_reports') || '[]');
        
        // Calculate average volume added
        const totalDiff = trials.reduce((sum, t) => sum + parseFloat(t.diff), 0);
        const avgV = totalDiff / trials.length;

        const runData = {
            id: currentExpId,
            title: exp.title,
            protocol: exp.protocol,
            timestamp: new Date().toLocaleString(),
            trialsCount: trials.length,
            avgVolume: avgV.toFixed(2),
            userValue: userVal.toFixed(2),
            expectedValue: expectedVal.toFixed(2),
            accuracy: Math.max(0, 100 - (diffPercent * 100)).toFixed(1) + '%',
            verified: verified,
            normality: exp.normality,
            indicator: exp.indicator
        };
        reports.unshift(runData); // Add new run to front of array
        localStorage.setItem('vlabs_reports', JSON.stringify(reports));

        // Add log entry
        const logMsg = `[${new Date().toLocaleTimeString()}] Verified ${exp.protocol} - Accuracy: ${runData.accuracy} (${verified ? 'SUCCESS' : 'FAILED'})`;
        const systemLogs = JSON.parse(localStorage.getItem('vlabs_system_logs') || '[]');
        systemLogs.unshift(logMsg);
        localStorage.setItem('vlabs_system_logs', JSON.stringify(systemLogs.slice(0, 50)));
    } catch (e) {
        console.error("Failed to save run to localStorage:", e);
    }
}


// Download Observation Report File
function downloadLabReport() {
    const exp = experiments[currentExpId];
    
    let reportText = `==================================================\n`;
    reportText += `       VLABS VIRTUAL CHEMISTRY LAB REPORT\n`;
    reportText += `==================================================\n`;
    reportText += `Protocol: ${exp.protocol}\n`;
    reportText += `Experiment: ${exp.title}\n`;
    reportText += `Date: ${new Date().toLocaleString()}\n`;
    reportText += `==================================================\n\n`;
    
    reportText += `1. TELEMETRY DETAILS:\n`;
    reportText += `--------------------------------------------------\n`;
    reportText += `Normality of Titrant: ${exp.normality}\n`;
    reportText += `Chemical Indicator:   ${exp.indicator}\n\n`;
    
    reportText += `2. OBSERVATION DATA TRIALS:\n`;
    reportText += `--------------------------------------------------\n`;
    reportText += `Trial #  |  Initial Reading (mL)  |  Final Reading (mL)  |  Volume Added (mL)\n`;
    reportText += `--------------------------------------------------\n`;
    
    if (trials.length === 0) {
        reportText += ` No trials recorded in this session.\n`;
    } else {
        trials.forEach(t => {
            reportText += ` #${t.trial}      |  ${t.initial.padStart(20)}  |  ${t.final.padStart(18)}  |  ${t.diff.padStart(17)}\n`;
        });
        
        const totalDiff = trials.reduce((sum, t) => sum + parseFloat(t.diff), 0);
        const avgV = totalDiff / trials.length;
        reportText += `--------------------------------------------------\n`;
        reportText += `Average Volume Titrant Added: ${avgV.toFixed(2)} mL\n\n`;
    }
    
    reportText += `3. CALCULATION RESULTS:\n`;
    reportText += `--------------------------------------------------\n`;
    const userVal = document.getElementById('input-result').value || 'N/A';
    reportText += `Entered calculated value: ${userVal} (${exp.resultLabel.split('(')[0].trim()})\n`;
    
    if (trials.length > 0) {
        const totalDiff = trials.reduce((sum, t) => sum + parseFloat(t.diff), 0);
        const avgV = totalDiff / trials.length;
        const expectedVal = exp.formula(avgV);
        reportText += `Theoretical expected value: ${expectedVal.toFixed(2)}\n`;
    }
    
    reportText += `\n==================================================\n`;
    reportText += `Report generated successfully inside VLabs.\n`;
    reportText += `==================================================\n`;

    // Create download element
    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VLab_Report_${currentExpId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Log download event to localStorage
    try {
        const logMsg = `[${new Date().toLocaleTimeString()}] Exported Lab Report for ${exp.protocol}`;
        const systemLogs = JSON.parse(localStorage.getItem('vlabs_system_logs') || '[]');
        systemLogs.unshift(logMsg);
        localStorage.setItem('vlabs_system_logs', JSON.stringify(systemLogs.slice(0, 50)));
    } catch (e) {
        console.error("Failed to save log to localStorage:", e);
    }
}

// Function to synchronize the theme class to the iframe content
function syncIframeTheme() {
    const iframe = document.getElementById('simulation-iframe');
    if (!iframe) return;
    try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc) {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                doc.documentElement.classList.add('dark');
            } else {
                doc.documentElement.classList.remove('dark');
            }
        }
    } catch (e) {
        console.error("Failed to synchronize iframe theme: ", e);
    }
}

