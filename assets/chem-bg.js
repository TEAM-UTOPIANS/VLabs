// Chemistry-themed dynamic background for VLabs
(function() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let themeColors = getThemeColors();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    window.addEventListener('theme-changed', () => {
        themeColors = getThemeColors();
    });

    function getThemeColors() {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            return {
                hexStroke: 'rgba(59, 130, 246, 0.08)',
                hexFill: 'rgba(59, 130, 246, 0.035)',
                molLines: 'rgba(59, 130, 246, 0.12)',
                nodeColors: [
                    'rgba(37, 99, 235, 0.45)',  // 0: Accent/Primary Blue
                    'rgba(56, 189, 248, 0.35)',  // 1: Sky Blue
                    'rgba(30, 58, 138, 0.5)',    // 2: Navy Accent
                    'rgba(56, 189, 248, 0.12)'   // 3: Big translucent node
                ],
                nodeBorder: 'rgba(56, 189, 248, 0.25)',
                floaters: 'rgba(59, 130, 246, 0.04)'
            };
        } else {
            return {
                hexStroke: 'rgba(30, 96, 145, 0.07)',
                hexFill: 'rgba(30, 96, 145, 0.03)',
                molLines: 'rgba(30, 96, 145, 0.1)',
                nodeColors: [
                    'rgba(2, 62, 138, 0.45)',    // 0: Deep navy
                    'rgba(0, 119, 182, 0.4)',    // 1: Primary Blue
                    'rgba(0, 180, 216, 0.35)',   // 2: Cyan
                    'rgba(255, 255, 255, 0.75)'  // 3: Big Translucent White
                ],
                nodeBorder: 'rgba(30, 96, 145, 0.15)',
                floaters: 'rgba(30, 96, 145, 0.06)'
            };
        }
    }

    const mouse = { x: null, y: null, radius: 120 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Define Hexagon layouts (Honeycomb grids)
    const hexSize = 38;
    const leftHexagons = [
        { col: -1, row: -1, fill: true, stroke: true },
        { col: -1, row: 0, fill: false, stroke: true },
        { col: -1, row: 1, fill: true, stroke: true },
        { col: 0, row: -2, fill: false, stroke: true },
        { col: 0, row: -1, fill: true, stroke: true },
        { col: 0, row: 0, fill: false, stroke: true },
        { col: 0, row: 1, fill: false, stroke: true },
        { col: 1, row: -1, fill: true, stroke: false },
        { col: 1, row: 0, fill: true, stroke: true }
    ];

    const rightHexagons = [
        { col: -2, row: 0, fill: true, stroke: true },
        { col: -2, row: 1, fill: false, stroke: true },
        { col: -1, row: -1, fill: false, stroke: true },
        { col: -1, row: 0, fill: true, stroke: true },
        { col: -1, row: 1, fill: false, stroke: true },
        { col: -1, row: 2, fill: true, stroke: false },
        { col: 0, row: -1, fill: true, stroke: true },
        { col: 0, row: 0, fill: false, stroke: true },
        { col: 0, row: 1, fill: true, stroke: true },
        { col: 0, row: 2, fill: false, stroke: true },
        { col: 1, row: -1, fill: true, stroke: true },
        { col: 1, row: 0, fill: false, stroke: true }
    ];

    // Molecular chain nodes
    const leftNodes = [
        { relX: -40, relY: -160, radius: 6, colorType: 0, conns: [1] },
        { relX: -20, relY: -100, radius: 9, colorType: 2, conns: [2, 3] },
        { relX: -60, relY: -50, radius: 5, colorType: 0, conns: [] },
        { relX: 20, relY: -70, radius: 8, colorType: 1, conns: [4] },
        { relX: 30, relY: 0, radius: 11, colorType: 2, conns: [5, 6] },
        { relX: -10, relY: 40, radius: 6, colorType: 0, conns: [] },
        { relX: 70, relY: 30, radius: 7, colorType: 1, conns: [7] },
        { relX: 80, relY: 90, radius: 9, colorType: 0, conns: [] }
    ];

    const rightNodes = [
        { relX: 50, relY: -220, radius: 8, colorType: 0, conns: [1] },
        { relX: 10, relY: -160, radius: 11, colorType: 2, conns: [2, 3] },
        { relX: 60, relY: -110, radius: 7, colorType: 1, conns: [4] },
        { relX: -30, relY: -120, radius: 9, colorType: 0, conns: [5] },
        { relX: 40, relY: -40, radius: 13, colorType: 2, conns: [6, 7] },
        { relX: -40, relY: -55, radius: 6, colorType: 1, conns: [8] },
        { relX: -10, relY: 20, radius: 26, colorType: 3, conns: [9] }, // The large translucent node!
        { relX: 80, relY: 10, radius: 8, colorType: 0, conns: [] },
        { relX: -80, relY: -5, radius: 10, colorType: 2, conns: [] },
        { relX: 20, relY: 90, radius: 12, colorType: 1, conns: [10] },
        { relX: -20, relY: 140, radius: 7, colorType: 0, conns: [11] },
        { relX: 0, relY: 200, radius: 10, colorType: 2, conns: [] }
    ];

    // Helper to draw a single hexagon
    function drawHexagon(x, y, r, fill, stroke) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const hx = x + Math.cos(angle) * r;
            const hy = y + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        if (fill) {
            ctx.fillStyle = themeColors.hexFill;
            ctx.fill();
        }
        if (stroke) {
            ctx.strokeStyle = themeColors.hexStroke;
            ctx.lineWidth = 1.0;
            ctx.stroke();
        }
    }

    // Helper to draw a hex honeycomb grid
    function drawHoneycomb(centerX, centerY, grid) {
        grid.forEach(h => {
            const xOffset = h.col * hexSize * 1.5;
            const yOffset = h.row * hexSize * Math.sqrt(3) + (Math.abs(h.col) % 2 === 1 ? hexSize * Math.sqrt(3) / 2 : 0);
            drawHexagon(centerX + xOffset, centerY + yOffset, hexSize, h.fill, h.stroke);
        });
    }

    // Faint floating particles for the center area
    const floatersList = [];
    const floaterCount = 15;
    for (let i = 0; i < floaterCount; i++) {
        floatersList.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            radius: Math.random() * 2 + 1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        const time = Date.now();
        const bobLeftX = Math.sin(time * 0.0006) * 5;
        const bobLeftY = Math.cos(time * 0.0005) * 8;
        const bobRightX = Math.cos(time * 0.0007) * 6;
        const bobRightY = Math.sin(time * 0.0006) * 9;

        // Centers for left and right margins
        const leftCenterX = 50 + bobLeftX;
        const leftCenterY = height * 0.35 + bobLeftY;
        const rightCenterX = width - 50 + bobRightX;
        const rightCenterY = height * 0.55 + bobRightY;

        // 1. Draw Honeycomb hex structures
        drawHoneycomb(leftCenterX - 60, leftCenterY, leftHexagons);
        drawHoneycomb(rightCenterX + 60, rightCenterY, rightHexagons);

        // 2. Draw Faint floaters in the middle
        ctx.fillStyle = themeColors.floaters;
        floatersList.forEach(f => {
            f.x += f.vx;
            f.y += f.vy;
            if (f.x < 0 || f.x > width) f.vx *= -1;
            if (f.y < 0 || f.y > height) f.vy *= -1;
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        // 3. Draw Left molecular chain connections and nodes
        ctx.save();
        ctx.strokeStyle = themeColors.molLines;
        ctx.lineWidth = 1.2;

        const leftAbsoluteCoords = leftNodes.map((n, idx) => {
            const bobNodeY = Math.sin(time * 0.0012 + idx) * 3;
            const bobNodeX = Math.cos(time * 0.001 + idx) * 2;
            let absX = leftCenterX + n.relX + bobNodeX;
            let absY = leftCenterY + n.relY + bobNodeY;

            // Mouse hover attraction
            if (mouse.x !== null && mouse.y !== null) {
                const dist = Math.hypot(absX - mouse.x, absY - mouse.y);
                if (dist < mouse.radius) {
                    const pull = (mouse.radius - dist) / mouse.radius;
                    absX += (mouse.x - absX) * pull * 0.12;
                    absY += (mouse.y - absY) * pull * 0.12;
                }
            }
            return { x: absX, y: absY };
        });

        // Draw Left connections
        for (let i = 0; i < leftNodes.length; i++) {
            leftNodes[i].conns.forEach(targetIdx => {
                ctx.beginPath();
                ctx.moveTo(leftAbsoluteCoords[i].x, leftAbsoluteCoords[i].y);
                ctx.lineTo(leftAbsoluteCoords[targetIdx].x, leftAbsoluteCoords[targetIdx].y);
                ctx.stroke();
            });
        }

        // Draw Left nodes
        leftAbsoluteCoords.forEach((coord, idx) => {
            const n = leftNodes[idx];
            ctx.beginPath();
            ctx.arc(coord.x, coord.y, n.radius, 0, Math.PI * 2);
            ctx.fillStyle = themeColors.nodeColors[n.colorType];
            ctx.fill();
            ctx.strokeStyle = themeColors.nodeBorder;
            ctx.lineWidth = 0.8;
            ctx.stroke();
        });
        ctx.restore();

        // 4. Draw Right molecular chain connections and nodes
        ctx.save();
        ctx.strokeStyle = themeColors.molLines;
        ctx.lineWidth = 1.2;

        const rightAbsoluteCoords = rightNodes.map((n, idx) => {
            const bobNodeY = Math.cos(time * 0.0011 + idx) * 3;
            const bobNodeX = Math.sin(time * 0.0009 + idx) * 2;
            let absX = rightCenterX + n.relX + bobNodeX;
            let absY = rightCenterY + n.relY + bobNodeY;

            // Mouse hover attraction
            if (mouse.x !== null && mouse.y !== null) {
                const dist = Math.hypot(absX - mouse.x, absY - mouse.y);
                if (dist < mouse.radius) {
                    const pull = (mouse.radius - dist) / mouse.radius;
                    absX += (mouse.x - absX) * pull * 0.12;
                    absY += (mouse.y - absY) * pull * 0.12;
                }
            }
            return { x: absX, y: absY };
        });

        // Draw Right connections
        for (let i = 0; i < rightNodes.length; i++) {
            rightNodes[i].conns.forEach(targetIdx => {
                ctx.beginPath();
                ctx.moveTo(rightAbsoluteCoords[i].x, rightAbsoluteCoords[i].y);
                ctx.lineTo(rightAbsoluteCoords[targetIdx].x, rightAbsoluteCoords[targetIdx].y);
                ctx.stroke();
            });
        }

        // Draw Right nodes
        rightAbsoluteCoords.forEach((coord, idx) => {
            const n = rightNodes[idx];
            ctx.beginPath();
            ctx.arc(coord.x, coord.y, n.radius, 0, Math.PI * 2);
            ctx.fillStyle = themeColors.nodeColors[n.colorType];
            ctx.fill();
            
            // Draw node outlines
            ctx.strokeStyle = n.colorType === 3 ? themeColors.hexStroke : themeColors.nodeBorder;
            ctx.lineWidth = n.colorType === 3 ? 1.5 : 0.8;
            ctx.stroke();
            
            // Add a small inner accent for the large translucent circle
            if (n.colorType === 3) {
                ctx.beginPath();
                ctx.arc(coord.x, coord.y, n.radius * 0.35, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.fill();
            }
        });
        ctx.restore();

        requestAnimationFrame(animate);
    }

    animate();
})();
