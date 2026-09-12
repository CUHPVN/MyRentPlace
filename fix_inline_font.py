with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace("font-family:'Outfit'", "font-family:'Inter', sans-serif")
html = html.replace("font-family:inherit", "font-family:'Inter', sans-serif")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
