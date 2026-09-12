import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Fix the missing commas
js = re.sub(
    r'(lat:\s*[0-9.]+,\s*lng:\s*[0-9.]+)\s*\n\s*area:\s*"([^"]+)",\s*parking:\s*"([^"]+)",\s*cleaning:\s*"([^"]+)"\s*\n\s*verifiedBy:\s*"([^"]+)"',
    r'\1,\n        area: "\2", parking: "\3", cleaning: "\4",\n        verifiedBy: "\5"',
    js
)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)
