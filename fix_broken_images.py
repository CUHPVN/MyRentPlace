import urllib.request

urls = [
    "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=400&h=250"
]

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=400&h=250": urls[0],
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400&h=250": urls[1],
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400&h=250": urls[2],
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400&h=250": urls[3],
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Images replaced in app.js successfully.")
