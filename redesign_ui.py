import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# 1. Update CSS Variables (Zinc & Indigo Palette)
new_root = """:root {
    /* Primary Indigo Palette */
    --primary: #4F46E5;
    --primary-light: #6366F1;
    --primary-gradient: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%);
    --success: #10B981;
    --danger: #F43F5E;
    
    /* Light Mode - Zinc Palette */
    --bg-color: #FAFAFA;
    --bg-card: #FFFFFF;
    --bg-secondary: #F4F4F5;
    --header-bg: rgba(255, 255, 255, 0.85);
    
    --text-main: #09090B;
    --text-muted: #71717A;
    --border-color: #E4E4E7;
    
    /* Premium Shadows & Motion */
    --shadow-card: 0 4px 6px -1px rgba(9, 9, 11, 0.05), 0 2px 4px -2px rgba(9, 9, 11, 0.05);
    --shadow-card-hover: 0 20px 25px -5px rgba(9, 9, 11, 0.1), 0 8px 10px -6px rgba(9, 9, 11, 0.1);
    --shadow-btn: 0 4px 14px 0 rgba(79, 70, 229, 0.39);
    --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

body.dark-mode {
    /* Dark Mode - Zinc Palette */
    --bg-color: #09090B;
    --bg-card: #18181B;
    --bg-secondary: #27272A;
    --header-bg: rgba(9, 9, 11, 0.85);
    
    --text-main: #FAFAFA;
    --text-muted: #A1A1AA;
    --border-color: #27272A;
    
    --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
    --shadow-card-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.7);
    --shadow-btn: 0 4px 14px 0 rgba(79, 70, 229, 0.2);
}
"""
css = re.sub(r':root\s*\{.*?\nbody\.dark-mode\s*\{.*?\}\n', new_root, css, flags=re.DOTALL)

# 2. Update Spring Easing
css = css.replace('transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);', 'transition: all 0.3s var(--spring);')
css = css.replace('transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);', 'transition: transform 0.3s var(--spring);')
css = css.replace('transition: 0.2s;', 'transition: all 0.2s ease;')

# 3. Increase Card Padding and Border Radius
# We want clean 8pt spacing
css = css.replace('padding: 16px;', 'padding: 24px;') # Better internal padding for card info
css = css.replace('border-radius: 16px;', 'border-radius: 20px;') # Softer corners

# 4. Filter Button Styling (Make it more pill-like and refined)
css = re.sub(r'\.filters button\s*\{[^}]*\}', """.filters button {
    padding: 12px 24px; border-radius: 9999px;
    border: 1px solid var(--border-color);
    background: var(--bg-card); font-weight: 600; cursor: pointer;
    transition: all 0.3s var(--spring); font-size: 0.95rem; color: var(--text-main);
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}""", css)
css = re.sub(r'\.filters button\.active\s*\{[^}]*\}', """.filters button.active { 
    border-color: var(--primary); 
    background: var(--primary); 
    color: #fff;
    box-shadow: var(--shadow-btn);
}""", css)
css = re.sub(r'\.filters button:hover:not\(\.active\)\s*\{[^}]*\}', """.filters button:hover:not(.active) { 
    border-color: var(--text-muted); 
    background: var(--bg-secondary);
    transform: translateY(-2px);
}""", css)
# If hover:not doesn't exist, we just replace :hover
if ':hover:not(.active)' not in css:
    css = re.sub(r'\.filters button:hover\s*\{[^}]*\}', """.filters button:hover:not(.active) { 
    border-color: var(--text-muted); 
    background: var(--bg-secondary);
    transform: translateY(-2px);
}""", css)

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

# Bump version in index.html to v=6
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=6', html)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Redesign applied.")
