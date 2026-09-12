import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

def replacer(match):
    id_val = int(match.group(1))
    room_idx = ((id_val - 1) % 3) + 1
    return f'id: {id_val}, price: "{match.group(2)}", title: "{match.group(3)}",\n        distance: "{match.group(4)}", img: "./assets/rooms/room{room_idx}.jpg",'

js = re.sub(
    r'id:\s*(\d+),\s*price:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*\n\s*distance:\s*"([^"]+)",\s*img:\s*"https://[^"]+",',
    replacer,
    js
)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Updated app.js with local AI-generated Vietnamese room images!")
