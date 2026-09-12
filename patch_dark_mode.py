import re

# 1. Refactor styles.css
with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace :root
new_root = """:root {
    --primary: #2563eb;
    --primary-light: #60a5fa;
    --success: #10b981;
    --danger: #ef4444;
    --bg-color: #f8fafc;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --bg-card: #ffffff;
    --bg-secondary: #f1f5f9;
}

body.dark-mode {
    --bg-color: #0f172a;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --border-color: #334155;
    --bg-card: #1e293b;
    --bg-secondary: #0f172a;
}
"""
css = re.sub(r':root\s*\{[^}]*\}', new_root, css, count=1)

# Replace hardcoded colors with CSS variables
css = css.replace('background: #fff;', 'background: var(--bg-card);')
css = css.replace('background: #f1f5f9;', 'background: var(--bg-secondary);')
css = css.replace('background: #f8fafc;', 'background: var(--bg-color);')
css = css.replace('background-color: #fff;', 'background-color: var(--bg-card);')
css = css.replace('background-color: #f1f5f9;', 'background-color: var(--bg-secondary);')
css = css.replace('background-color: #f8fafc;', 'background-color: var(--bg-color);')
css = css.replace('background: white;', 'background: var(--bg-card);')

# Specifically fix some inputs or badges
css = css.replace('background: rgba(255, 255, 255, 0.9);', 'background: var(--bg-card);')

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

# 2. Add Toggle Button in index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace(
    '<button id="history-btn"',
    '<button id="dark-mode-btn" class="nav-btn" onclick="toggleDarkMode()"><i class="fa-solid fa-moon"></i></button>\n                <button id="history-btn"'
)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 3. Add JS Logic in app.js
with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

dark_logic = """
// --- DARK MODE LOGIC ---
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('dark-mode-btn');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '<i class="fa-solid fa-sun" style="color:#fbbf24;"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}
"""
js = dark_logic + js

# Update icon on load
onload_insert = """    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        const btn = document.getElementById('dark-mode-btn');
        if (btn) btn.innerHTML = '<i class="fa-solid fa-sun" style="color:#fbbf24;"></i>';
    }"""
js = js.replace('initMap();', 'initMap();\n' + onload_insert)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Dark mode patched successfully.")
