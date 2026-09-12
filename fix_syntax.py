with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Fix the syntax error ,,
js = js.replace(',, area: "', ',\n        area: "')

# Or if it's `, area:` after `lng: x.xxx,` without a newline
js = js.replace(', area:', '\n        area:')
# But wait, looking at the snippet, the previous character is a comma.
js = js.replace(',\n        area:', '\n        area:')
js = js.replace(',,', ',')

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)
