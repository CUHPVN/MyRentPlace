import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

pexels_ids = [
    1643383, 1571460, 2724749, 279719, 2082087, 1743227, 262048, 1454806, 
    271618, 1643384, 1571470, 271643, 276554, 276514, 276724
]

def replacer(match):
    id_val = int(match.group(1))
    pexels_id = pexels_ids[(id_val - 1) % len(pexels_ids)]
    return f'id: {id_val}, price: "{match.group(2)}", title: "{match.group(3)}",\n        distance: "{match.group(4)}", img: "https://images.pexels.com/photos/{pexels_id}/pexels-photo-{pexels_id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",'

js = re.sub(
    r'id:\s*(\d+),\s*price:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*\n\s*distance:\s*"([^"]+)",\s*img:\s*"https://[^"]+",',
    replacer,
    js
)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Updated app.js with 15 distinct Pexels interior images!")
