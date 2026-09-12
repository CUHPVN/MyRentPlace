import re

# Update index.html
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace Outfit with Inter
html = html.replace(
    'family=Outfit:wght@300;400;500;600;700',
    'family=Inter:wght@300;400;500;600;700&subset=vietnamese'
)

# Update CSS version
html = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=9', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

# Update styles.css
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

css = css.replace("font-family: 'Outfit', sans-serif;", "font-family: 'Inter', sans-serif;")
css = css.replace("font-family:'Outfit'", "font-family:'Inter'")

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Font updated to Inter!")
