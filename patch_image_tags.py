import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Replace bedroom,interior with hostel,room to look more like modest rental rooms
js = re.sub(r'https://loremflickr\.com/400/250/bedroom,interior\?lock=(\d+)', r'https://loremflickr.com/400/250/hostel,room?lock=\1', js)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Changed image tags to hostel,room to look less like villas!")
