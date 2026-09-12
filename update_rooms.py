import re

rooms = [
    # Hà Đông
    {"id": 1, "lat": 20.9795, "lng": 105.8005, "address": "Triều Khúc, Thanh Xuân", "price": "1,800,000đ", "dist": "1.5km từ PTIT"},
    {"id": 2, "lat": 20.9865, "lng": 105.7885, "address": "Mỗ Lao, Hà Đông", "price": "2,200,000đ", "dist": "1.2km từ PTIT"},
    {"id": 3, "lat": 20.9715, "lng": 105.7945, "address": "Yên Xá, Tân Triều", "price": "1,500,000đ", "dist": "1.8km từ PTIT"},
    {"id": 4, "lat": 20.9765, "lng": 105.7925, "address": "Văn Quán, Hà Đông", "price": "2,500,000đ", "dist": "1km từ PTIT"},
    {"id": 5, "lat": 20.9662, "lng": 105.7952, "address": "Xa La, Hà Đông", "price": "3,500,000đ", "dist": "2km từ PTIT"},
    # Thanh Xuân
    {"id": 6, "lat": 20.9878, "lng": 105.7968, "address": "Phùng Khoang, Nam Từ Liêm", "price": "3,000,000đ", "dist": "2.5km từ PTIT"},
    {"id": 7, "lat": 20.9955, "lng": 105.8135, "address": "Thượng Đình, Thanh Xuân", "price": "2,800,000đ", "dist": "3.5km từ PTIT"},
    {"id": 8, "lat": 21.0025, "lng": 105.8190, "address": "Khương Trung, Thanh Xuân", "price": "2,500,000đ", "dist": "4km từ PTIT"},
    {"id": 9, "lat": 20.9912, "lng": 105.8075, "address": "Thanh Xuân Bắc, Thanh Xuân", "price": "2,000,000đ", "dist": "3km từ PTIT"},
    # Đống Đa
    {"id": 10, "lat": 21.0245, "lng": 105.8025, "address": "Chùa Láng, Đống Đa", "price": "2,800,000đ", "dist": "6km từ PTIT"},
    {"id": 11, "lat": 21.0120, "lng": 105.8255, "address": "Thái Hà, Đống Đa", "price": "3,200,000đ", "dist": "5.5km từ PTIT"},
    {"id": 12, "lat": 21.0195, "lng": 105.8310, "address": "Xã Đàn, Đống Đa", "price": "4,000,000đ", "dist": "6.2km từ PTIT"},
    {"id": 13, "lat": 21.0290, "lng": 105.8270, "address": "Cát Linh, Đống Đa", "price": "3,500,000đ", "dist": "7km từ PTIT"},
    # Cầu Giấy
    {"id": 14, "lat": 21.0375, "lng": 105.7870, "address": "Dịch Vọng Hậu, Cầu Giấy", "price": "3,200,000đ", "dist": "7.5km từ PTIT"},
    {"id": 15, "lat": 21.0460, "lng": 105.7975, "address": "Nghĩa Tân, Cầu Giấy", "price": "2,600,000đ", "dist": "8.5km từ PTIT"},
    {"id": 16, "lat": 21.0215, "lng": 105.7920, "address": "Yên Hòa, Cầu Giấy", "price": "3,800,000đ", "dist": "6.5km từ PTIT"},
    {"id": 17, "lat": 21.0335, "lng": 105.8005, "address": "Quan Hoa, Cầu Giấy", "price": "2,900,000đ", "dist": "7.2km từ PTIT"},
    # Hai Bà Trưng
    {"id": 18, "lat": 21.0065, "lng": 105.8470, "address": "Tạ Quang Bửu, Hai Bà Trưng", "price": "2,000,000đ", "dist": "8km từ PTIT"},
    {"id": 19, "lat": 20.9995, "lng": 105.8575, "address": "Minh Khai, Hai Bà Trưng", "price": "3,500,000đ", "dist": "9km từ PTIT"},
    {"id": 20, "lat": 21.0160, "lng": 105.8520, "address": "Lò Đúc, Hai Bà Trưng", "price": "4,200,000đ", "dist": "9.5km từ PTIT"},
    # Hoàn Kiếm
    {"id": 21, "lat": 21.0315, "lng": 105.8545, "address": "Phố Cổ, Hoàn Kiếm", "price": "5,500,000đ", "dist": "10km từ PTIT"},
    {"id": 22, "lat": 21.0255, "lng": 105.8520, "address": "Tràng Thi, Hoàn Kiếm", "price": "4,800,000đ", "dist": "9.8km từ PTIT"},
    # Tây Hồ
    {"id": 23, "lat": 21.0570, "lng": 105.8070, "address": "Xuân La, Tây Hồ", "price": "4,500,000đ", "dist": "9km từ PTIT"},
    {"id": 24, "lat": 21.0765, "lng": 105.8220, "address": "Quảng An, Tây Hồ", "price": "6,000,000đ", "dist": "11km từ PTIT"},
    # Ba Đình
    {"id": 25, "lat": 21.0365, "lng": 105.8200, "address": "Đội Cấn, Ba Đình", "price": "3,000,000đ", "dist": "8.5km từ PTIT"},
    {"id": 26, "lat": 21.0435, "lng": 105.8320, "address": "Kim Mã, Ba Đình", "price": "3,600,000đ", "dist": "8.8km từ PTIT"},
    # Hoàng Mai
    {"id": 27, "lat": 20.9820, "lng": 105.8490, "address": "Giải Phóng, Hoàng Mai", "price": "1,700,000đ", "dist": "7km từ PTIT"},
    {"id": 28, "lat": 20.9665, "lng": 105.8470, "address": "Lĩnh Nam, Hoàng Mai", "price": "2,100,000đ", "dist": "8.5km từ PTIT"},
    # Long Biên
    {"id": 29, "lat": 21.0460, "lng": 105.8775, "address": "Ngọc Lâm, Long Biên", "price": "2,400,000đ", "dist": "12km từ PTIT"},
    {"id": 30, "lat": 21.0315, "lng": 105.8870, "address": "Aeon Mall, Long Biên", "price": "3,500,000đ", "dist": "13km từ PTIT"},
    # Gia Lâm, Đông Anh, Nam Từ Liêm
    {"id": 31, "lat": 21.0045, "lng": 105.7460, "address": "Tây Mỗ, Nam Từ Liêm", "price": "3,200,000đ", "dist": "8.5km từ PTIT"},
    {"id": 32, "lat": 21.0355, "lng": 105.7670, "address": "Mỹ Đình, Nam Từ Liêm", "price": "2,800,000đ", "dist": "9.5km từ PTIT"},
    {"id": 33, "lat": 21.0115, "lng": 105.7700, "address": "Phú Đô, Nam Từ Liêm", "price": "1,800,000đ", "dist": "6.5km từ PTIT"},
    {"id": 34, "lat": 21.0005, "lng": 105.9345, "address": "Đa Tốn, Gia Lâm", "price": "2,500,000đ", "dist": "15km từ PTIT"},
    {"id": 35, "lat": 21.1415, "lng": 105.8470, "address": "Đông Anh, Hà Nội", "price": "1,500,000đ", "dist": "18km từ PTIT"},
]

parties = ["Công an Phường", "Đoàn Thanh niên", "Hội Sinh viên Hà Nội", "Ban Quản lý khu phố", "Cộng đồng MyRentPlace"]

unsplash_urls = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400&h=250"
]

js_code = "const mockRooms = [\n"
for r in rooms:
    img_url = unsplash_urls[r["id"] % len(unsplash_urls)]
    verified = parties[r["id"] % len(parties)]
    
    js_code += f"""    {{
        id: {r["id"]}, price: "{r["price"]}", title: "Phòng trọ tiện nghi tại {r["address"].split(',')[0]}",
        distance: "{r["dist"]}", img: "{img_url}",
        rating: {round(4.0 + (r["id"]%10)/10, 1)}, address: "{r["address"]}",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "{r["id"]%28+1:02d}/09/2026",
        lat: {r["lat"]}, lng: {r["lng"]},
        verifiedBy: "{verified}"
    }},
"""
js_code = js_code.rstrip(",\n") + "\n];"

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace mockRooms
content = re.sub(r"const mockRooms = \[.*?\];", js_code, content, flags=re.DOTALL)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated app.js successfully.")
