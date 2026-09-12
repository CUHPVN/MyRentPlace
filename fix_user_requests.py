import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Update renderHomeList to show Area and Parking
old_render = """        <div class="listing-card" onclick="openDetail(${room.id})">
            <div class="image-wrapper">
                <img src="${room.img}" alt="Room">
                <div class="badge-verified"><i class="fa-solid fa-circle-check"></i> Đã kiểm duyệt</div>
            </div>
            <div class="listing-info">
                <div class="price">${room.price}</div>
                <h3>${room.title}</h3>
                <p class="location"><i class="fa-solid fa-location-dot"></i> ${room.distance}</p>
            </div>
        </div>"""

new_render = """        <div class="listing-card" onclick="openDetail(${room.id})">
            <div class="image-wrapper">
                <img src="${room.img}" alt="Room">
                <div class="badge-verified"><i class="fa-solid fa-circle-check"></i> Đã kiểm duyệt</div>
            </div>
            <div class="listing-info">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div class="price">${room.price}</div>
                    <span style="font-size:0.9rem; font-weight:600; color:var(--text-main); background:var(--bg-secondary); padding:4px 8px; border-radius:6px;">${room.area || '20m2'}</span>
                </div>
                <h3>${room.title}</h3>
                <p class="location"><i class="fa-solid fa-location-dot"></i> ${room.distance}</p>
            </div>
        </div>"""

js = js.replace(old_render, new_render)

# 2. Update sendRentalRequest & add submitRentalRequest
old_send_request = """function sendRentalRequest(roomId) {
    alert("Thành công! Yêu cầu thuê phòng của bạn đã được gửi đến hệ thống an toàn của MyRentPlace.\\\\nChủ nhà sẽ liên hệ với bạn trong vòng 24h tới để sắp xếp lịch xem nhà thực tế.");
}"""

new_send_request = """function sendRentalRequest(roomId) {
    requestingRoomId = roomId;
    closeModal('detail-modal');
    document.getElementById('request-modal').classList.remove('hidden');
}

function submitRentalRequest() {
    const phone = document.getElementById('req-phone').value;
    if(!phone) { alert('Vui lòng nhập số điện thoại'); return; }
    alert("Thành công! Yêu cầu thuê phòng của bạn đã được gửi đến hệ thống an toàn của MyRentPlace.\\nChủ nhà sẽ liên hệ với bạn qua SĐT " + phone + " trong vòng 24h tới để sắp xếp lịch xem nhà thực tế.");
    closeModal('request-modal');
    document.getElementById('req-phone').value = '';
    document.getElementById('req-msg').value = '';
}"""

if "function submitRentalRequest()" not in js:
    js = js.replace(old_send_request, new_send_request)

# 3. Update images
image_ids = [
    "1522708323590-d24dbb6b0267", "1499955085172-a104c9463ece", "1493809842364-78817add7ffb",
    "1505691938895-1758d7feb511", "1560448204-e02f11c3d0e2", "1512917774080-9991f1c4c750",
    "1554995207-c18c203602cb", "1564013799919-ab600027ffc6", "1484154218962-a197022b5858",
    "1583847268964-b28ceea94781", "1600607686527-6fb886090705", "1505843513577-22bb7dc5fee6",
    "1522771739844-6a9f6d5f14af", "1600585154340-be6161a56a0c", "1502005229762-cf1b2da7c5d6"
]

def img_replacer(match):
    # global index across replaces
    img_replacer.i = getattr(img_replacer, 'i', -1) + 1
    photo_id = image_ids[img_replacer.i % len(image_ids)]
    return f'img: "https://images.unsplash.com/photo-{photo_id}?auto=format&fit=crop&q=80&w=400&h=250"'

js = re.sub(r'img:\s*"https://images\.unsplash\.com/photo-[^"]+"', img_replacer, js)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Done fixing JS logic and images.")
