import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# 1. Update CSS Variables (Premium Dark Mode Colors)
new_root = """:root {
    --primary: #3b82f6; /* Modern Blue */
    --primary-light: #60a5fa;
    --primary-gradient: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    --success: #10b981;
    --danger: #ef4444;
    
    /* Light Mode */
    --bg-color: #f8fafc;
    --bg-card: #ffffff;
    --bg-secondary: #f1f5f9;
    --header-bg: rgba(255, 255, 255, 0.85);
    
    --text-main: #0f172a;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    
    /* Shadows */
    --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    --shadow-card-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --shadow-btn: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
}

body.dark-mode {
    /* Dark Mode Premium Navy/Slate */
    --bg-color: #0f172a;
    --bg-card: #1e293b;
    --bg-secondary: #0f172a;
    --header-bg: rgba(15, 23, 42, 0.85);
    
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --border-color: #334155;
    
    --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    --shadow-card-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    --shadow-btn: 0 4px 14px 0 rgba(59, 130, 246, 0.2);
}
"""
css = re.sub(r':root\s*\{.*?\nbody\.dark-mode\s*\{.*?\}\n', new_root, css, flags=re.DOTALL)

# 2. Glassmorphism Header
css = css.replace('background: var(--bg-card);', 'background: var(--header-bg); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);')
# Wait, replacing all background: var(--bg-card) with blur is bad, only header needs it.
# Let's revert that and target .web-header explicitly.
css = css.replace('background: var(--header-bg); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);', 'background: var(--bg-card);')

css = re.sub(r'\.web-header\s*\{[^}]*\}', """.web-header {
    height: 80px;
    background: var(--header-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    z-index: 100;
}""", css)

# 3. Dynamic Cards & Gradients
# Update listing card for better shadow and transition
css = re.sub(r'\.listing-card\s*\{[^}]*\}', """.listing-card {
    background: var(--bg-card); 
    border-radius: 16px; 
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-card);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}""", css)

css = re.sub(r'\.listing-card:hover\s*\{[^}]*\}', """.listing-card:hover { 
    transform: translateY(-6px); 
    box-shadow: var(--shadow-card-hover);
    border-color: var(--primary-light);
}""", css)

# 4. Premium Button (Book btn)
css = re.sub(r'\.book-btn\s*\{[^}]*\}', """.book-btn {
    background: var(--primary-gradient);
    color: #fff;
    border: none;
    padding: 14px 20px;
    border-radius: 12px;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-btn);
}""", css)
css = re.sub(r'\.book-btn:hover\s*\{[^}]*\}', """.book-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
}""", css)

# 5. Modals Glassmorphism
css = re.sub(r'\.modal\s*\{[^}]*\}', """.modal {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(8px);
    z-index: 999;
    display: flex; align-items: center; justify-content: center;
    opacity: 1; transition: opacity 0.3s ease;
}""", css)

css = re.sub(r'\.modal-content\s*\{[^}]*\}', """.modal-content {
    background: var(--bg-card);
    width: 900px; max-width: 95%; max-height: 90vh;
    border-radius: 20px;
    padding: 40px; position: relative; overflow-y: auto;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border: 1px solid var(--border-color);
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}""", css)

# Add class for hiding modal with animation
if '.modal.hidden' not in css:
    css += """
.modal.hidden {
    opacity: 0;
    pointer-events: none;
}
.modal.hidden .modal-content {
    transform: scale(0.95);
}
"""
else:
    css = re.sub(r'\.modal\.hidden\s*\{[^}]*\}', """.modal.hidden {
    opacity: 0; pointer-events: none;
}
.modal.hidden .modal-content {
    transform: scale(0.95);
}""", css)

# 6. Map Dark Mode
map_dark_mode_css = """
/* MAP DARK MODE FILTER */
body.dark-mode .leaflet-layer,
body.dark-mode .leaflet-control-zoom-in,
body.dark-mode .leaflet-control-zoom-out,
body.dark-mode .leaflet-control-attribution {
    filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
}
"""
if "/* MAP DARK MODE FILTER */" not in css:
    css += map_dark_mode_css

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

# 7. Update HTML version cache
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = html.replace('styles.css?v=2', 'styles.css?v=3')
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("UI Reworked and CSS saved.")
