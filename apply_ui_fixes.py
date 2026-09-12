import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Replace all unsplash images with picsum photos to guarantee loading
def replacer(match):
    replacer.count += 1
    return f'img: "https://picsum.photos/seed/{replacer.count}/400/250"'
replacer.count = 0

js = re.sub(r'img:\s*"https://images\.unsplash\.com/[^"]+"', replacer, js)

# 2. Add window.onclick for closing modal when clicking background overlay
click_logic = """
// Close modal when clicking outside overlay
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.add('hidden');
    }
});
"""
if "window.addEventListener('click'" not in js:
    js += "\n" + click_logic

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Fixed images and modal overlay click successfully!")
