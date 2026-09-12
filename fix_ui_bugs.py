import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# 1. Fix Search Icon Distortion
css = css.replace(
    '.header-search button {\n    background: var(--primary); color: #fff; border: none;\n    width: 36px; height: 36px; border-radius: 50%;\n    cursor: pointer;\n}',
    '.header-search button {\n    background: var(--primary); color: #fff; border: none;\n    width: 36px; height: 36px; min-width: 36px; border-radius: 50%;\n    cursor: pointer; flex-shrink: 0;\n}'
)
css = css.replace('width: 36px; height: 36px; border-radius: 50%;', 'width: 36px; height: 36px; min-width: 36px; border-radius: 50%; flex-shrink: 0;')


# 2. Fix Text Colors (Inputs and Filter Buttons)
if 'color: var(--text-main);' not in css.split('.header-search input {')[1].split('}')[0]:
    css = css.replace(
        '.header-search input {\n    border: none; background: transparent; outline: none;\n    width: 100%; font-size: 1rem;\n}',
        '.header-search input {\n    border: none; background: transparent; outline: none;\n    width: 100%; font-size: 1rem;\n    color: var(--text-main);\n}'
    )

if 'color: var(--text-main);' not in css.split('.filters button {')[1].split('}')[0]:
    css = css.replace(
        '.filters button {\n    padding: 10px 20px; border-radius: 100px;\n    border: 1px solid var(--border-color);\n    background: var(--bg-card); font-weight: 500; cursor: pointer;\n    transition: 0.2s; font-size: 0.95rem;\n}',
        '.filters button {\n    padding: 10px 20px; border-radius: 100px;\n    border: 1px solid var(--border-color);\n    background: var(--bg-card); font-weight: 500; cursor: pointer;\n    transition: 0.2s; font-size: 0.95rem; color: var(--text-main);\n}'
    )

# 3. Add Custom Scrollbars if not exists
scrollbar_css = """
/* Custom Scrollbar for Dark/Light Mode */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-track {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
}
"""
if "::-webkit-scrollbar" not in css:
    css = scrollbar_css + css

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

# Update version in index.html to v=7
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=4', html)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("CSS Fixed!")
