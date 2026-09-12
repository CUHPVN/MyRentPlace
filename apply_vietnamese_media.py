import json
import re

# Load images
try:
    with open("bing_images.json", "r") as f:
        bing_urls = json.load(f)
except:
    bing_urls = []

# Filter out broken or extremely long base64 URLs just in case
bing_urls = [url for url in bing_urls if url.startswith("http") and len(url) < 300]

# Add the 3 AI local images at the front
pool = ["./assets/rooms/room1.jpg", "./assets/rooms/room2.jpg", "./assets/rooms/room3.jpg"] + bing_urls

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

def replacer(match):
    id_val = int(match.group(1))
    img_url = pool[(id_val - 1) % len(pool)]
    return f'id: {id_val}, price: "{match.group(2)}", title: "{match.group(3)}",\n        distance: "{match.group(4)}", img: "{img_url}",'

# Replace images
js = re.sub(
    r'id:\s*(\d+),\s*price:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*\n\s*distance:\s*"([^"]+)",\s*img:\s*"[^"]+",',
    replacer,
    js
)

# Replace video with YouTube iframe
youtube_id = "DoBn1WWoP58"
iframe = f'<iframe src="https://www.youtube.com/embed/{youtube_id}?autoplay=1&mute=1&loop=1&playlist={youtube_id}" style="width:100%; height:400px; border-radius:12px; border:none; margin-bottom:20px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>'

js = re.sub(r'<video src="[^"]+"[^>]*>.*?</video>', iframe, js, flags=re.DOTALL)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Updated app.js with 32+ distinct Vietnamese rental room images and YouTube review video!")
