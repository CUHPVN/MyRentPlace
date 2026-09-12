import json
import re

# Load images
try:
    with open("bing_images.json", "r") as f:
        bing_urls1 = json.load(f)
except:
    bing_urls1 = []

try:
    with open("bing_images2.json", "r") as f:
        bing_urls2 = json.load(f)
except:
    bing_urls2 = []

# Load YouTube IDs
try:
    with open("youtube_ids.json", "r") as f:
        youtube_ids = json.load(f)
except:
    youtube_ids = ["DoBn1WWoP58"]

all_urls = []
for url in bing_urls1 + bing_urls2:
    if url.startswith("http") and len(url) < 300 and url not in all_urls:
        all_urls.append(url)

pool = ["./assets/rooms/room1.jpg", "./assets/rooms/room2.jpg", "./assets/rooms/room3.jpg"] + all_urls

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

def replacer_img(match):
    id_val = int(match.group(1))
    img_url = pool[(id_val - 1) % len(pool)]
    return f'id: {id_val}, price: "{match.group(2)}", title: "{match.group(3)}",\n        distance: "{match.group(4)}", img: "{img_url}",'

# Apply unique images
js = re.sub(
    r'id:\s*(\d+),\s*price:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*\n\s*distance:\s*"([^"]+)",\s*img:\s*"[^"]+",',
    replacer_img,
    js
)

# Apply dynamic YouTube video
# First, remove the old hardcoded iframe if it exists
js = re.sub(r'<iframe src="https://www\.youtube\.com/embed/[^"]+"[^>]*></iframe>', '', js)
# Or if it's the iframe string
js = re.sub(r'<iframe src="https://www\.youtube\.com/embed/.*?</iframe>', '', js, flags=re.DOTALL)

# Let's cleanly inject the video logic right after `<div class="detail-left">`
y_array_str = json.dumps(youtube_ids)

# Find openDetail
# I'll replace the line `<div class="detail-left">` with the logic and the iframe.
# Wait, let's just replace the exact placeholder if it exists, but we just deleted it. 
# It's better to just regex the detail-left block.
def replacer_video(match):
    return f"""<div class="detail-left">
                <iframe src="https://www.youtube.com/embed/${{ {y_array_str}[room.id % {len(youtube_ids)}] }}?autoplay=1&mute=1&loop=1" style="width:100%; height:400px; object-fit:cover; border-radius:12px; margin-bottom:20px; border:none;" allow="autoplay; encrypted-media" allowfullscreen></iframe>
"""

js = re.sub(r'<div class="detail-left">\s*', replacer_video, js, count=1)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Updated app.js with massive media pool!")
