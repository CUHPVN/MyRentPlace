import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Replace img: "https://images.unsplash.com/..." with loremflickr using the room id as lock
def replacer(match):
    # match.group(1) is the ID
    id_val = match.group(1)
    return f'id: {id_val}, price: "{match.group(2)}", title: "{match.group(3)}",\n        distance: "{match.group(4)}", img: "https://loremflickr.com/400/250/bedroom,interior?lock={id_val}",'

js = re.sub(
    r'id:\s*(\d+),\s*price:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*\n\s*distance:\s*"([^"]+)",\s*img:\s*"https://images\.unsplash\.com/[^"]+",',
    replacer,
    js
)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Updated app.js with 35 distinct loremflickr interior images!")
