import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# We need to swap:
# <div class="modal-content">
#     <button class="close-btn" ...>...</button>
# to
# <button class="close-btn" ...>...</button>
# <div class="modal-content">

pattern = r'(<div class="modal-content"[^>]*>)\s*(<button class="close-btn"[^>]*>.*?</button>)'
# \2 is the button, \1 is the div.modal-content
html = re.sub(pattern, r'\2\n        \1', html)

# Bump CSS version just in case to v10
html = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=10', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Close buttons moved outside modal-content!")
