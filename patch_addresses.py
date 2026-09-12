import re
import random

random.seed(42) # Cố định seed để nếu chạy lại thì kết quả vẫn nhất quán

def add_detail(match):
    original = match.group(1)
    
    so_nha = random.randint(1, 120)
    ngo = random.randint(1, 200)
    
    prefixes = [
        f"Số {so_nha}, Ngõ {ngo} ",
        f"Nhà {so_nha}, Ngách {ngo}/5 ",
        f"Số {so_nha}A, Ngõ {ngo} ",
        f"SN {so_nha}, Hẻm {ngo}/2 ",
        f"Toà nhà số {so_nha}, Đường "
    ]
    
    if "Aeon Mall" in original or "Phố Cổ" in original:
        return f'address: "{original}"'
        
    prefix = random.choice(prefixes)
    return f'address: "{prefix}{original}"'

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

content = re.sub(r'address:\s*"([^"]+)"', add_detail, content)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = html.replace('app.js?v=4', 'app.js?v=5')
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Đã làm chi tiết địa chỉ thành công!")
