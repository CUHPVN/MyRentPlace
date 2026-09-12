import re

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update mockScams
old_scams = r"const mockScams = \[.*?\];"
new_scams = """const mockScams = [
    { phone: "0987.654.111", info: "Bắt chuyển khoản cọc trước khi xem nhà. Bị report bởi 15 sinh viên.", type: "LỪA CỌC" },
    { phone: "0912.345.222", info: "Tự xưng chủ nhà nhưng là cò mồi thu phí dẫn đường cắt cổ.", type: "CÒ MỒI DỎM" },
    { phone: "0345.678.333", info: "Đăng ảnh ảo, nhà thực tế lụp xụp, đòi cọc 3 tháng.", type: "TREO ĐẦU DÊ" },
    { phone: "0977.111.444", info: "Lừa ký hợp đồng với điều khoản vô lý, phạt tiền không rõ ràng.", type: "HỢP ĐỒNG ẢO" },
    { phone: "0888.999.555", info: "Quỵt tiền cọc của sinh viên khi trả phòng.", type: "QUỴT CỌC" }
];"""
content = re.sub(old_scams, new_scams, content, flags=re.DOTALL)

# 2. Global vars & renderHomeList
old_globals = r"let map;\s*// --- GOOGLE IDENTITY SERVICES \(ĐĂNG NHẬP THẬT\) ---"
new_globals = """let map;
let markersArray = [];
let currentRooms = [];
let savedRooms = JSON.parse(localStorage.getItem('savedRooms') || '[]');

// --- GOOGLE IDENTITY SERVICES (ĐĂNG NHẬP THẬT) ---"""
content = re.sub(old_globals, new_globals, content)

content = content.replace("function renderHomeList() {", "function renderHomeList(data = mockRooms) {")
content = content.replace("container.innerHTML = mockRooms.map(room => `", "if(data.length === 0) { container.innerHTML = '<div style=\"padding:20px;color:#64748b;\">Không tìm thấy phòng trọ nào phù hợp.</div>'; return; }\n    container.innerHTML = data.map(room => `")

# 3. Modify Auth UI
content = content.replace('document.getElementById("google-btn-wrapper").innerHTML = "<p style=\'color:red;\'>Không tải được Google SDK</p>";', 'document.getElementById("google-btn-wrapper").innerHTML = "<p style=\'color:red;\'>Không tải được Google SDK</p>";\n    document.getElementById("saved-rooms-btn").style.display = "none";')
content = content.replace('renderLoginButtons();\n}', 'renderLoginButtons();\n    document.getElementById("saved-rooms-btn").style.display = "none";\n}')
content = content.replace('</button>\n        </div>\n    `;\n}', '</button>\n        </div>\n    `;\n    document.getElementById("saved-rooms-btn").style.display = "inline-block";\n}')

# 4. Modify initMap
old_initMap = r"var roomIcon = L\.icon\(\{ iconUrl: 'https://img\.icons8\.com/fluency/48/map-pin\.png', iconSize: \[36, 36\] \}\);\s*mockRooms\.forEach\(room => \{\s*L\.marker\(\[room\.lat, room\.lng\], \{icon: roomIcon\}\)\s*\.addTo\(map\)\s*\.bindPopup\(`<b>\$\{room\.price\}</b><br><a href=\"#\" onclick=\"openDetail\(\$\{room\.id\}\)\" style=\"color:#2563eb; font-weight:bold;\">Xem phòng</a>`\);\s*\}\);"
new_initMap = """currentRooms = mockRooms;
    renderMapMarkers(currentRooms);
}

function renderMapMarkers(data) {
    markersArray.forEach(marker => map.removeLayer(marker));
    markersArray = [];

    var roomIcon = L.icon({ iconUrl: 'https://img.icons8.com/fluency/48/map-pin.png', iconSize: [36, 36] });
    data.forEach(room => {
        let marker = L.marker([room.lat, room.lng], {icon: roomIcon})
         .addTo(map)
         .bindPopup(`<b>${room.price}</b><br><a href="#" onclick="openDetail(${room.id})" style="color:#2563eb; font-weight:bold;">Xem phòng</a>`);
        markersArray.push(marker);
    });"""
content = re.sub(old_initMap, new_initMap, content)

# 5. Modify openDetail to add Save Button
old_detail_right = r'<button class="book-btn">Gửi Yêu Cầu Thuê An Toàn</button>'
new_detail_right = """<div style="display:flex; gap:10px; margin-top:20px;">
                        <button class="book-btn" style="flex:1;">Gửi Yêu Cầu Thuê</button>
                        <button class="save-btn" onclick="toggleSaveRoom(${room.id})" id="save-room-btn-${room.id}" style="padding: 12px 20px; border-radius: 8px; border: 1px solid #cbd5e1; background: white; cursor:pointer; font-weight:600; color: #ef4444;">
                            <i class="${savedRooms.includes(room.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                    </div>"""
content = content.replace(old_detail_right, new_detail_right)

# 6. Add new functions
new_functions = """
// --- TÍNH NĂNG MỚI (TÌM KIẾM, LỌC, LƯU PHÒNG) ---

function handleSearch() {
    const keyword = document.getElementById("main-search-input").value.toLowerCase();
    currentRooms = mockRooms.filter(r => r.title.toLowerCase().includes(keyword) || r.address.toLowerCase().includes(keyword));
    renderHomeList(currentRooms);
    renderMapMarkers(currentRooms);
}

function handleFilter(type) {
    // Reset active buttons
    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${type}`).classList.add('active');

    if (type === 'all') {
        currentRooms = mockRooms;
    } else if (type === 'verified') {
        currentRooms = mockRooms.filter(r => r.verifiedBy.includes("Công an") || r.verifiedBy.includes("Đoàn"));
    } else if (type === 'cheap') {
        // Convert "1,800,000đ" to 1.8 for comparison
        currentRooms = mockRooms.filter(r => {
            let priceNum = parseFloat(r.price.replace(/,/g, '').replace('đ', '')) / 1000000;
            return priceNum <= 2.5;
        });
    } else if (type === 'near') {
        currentRooms = mockRooms.filter(r => {
            let distStr = r.distance.split('km')[0];
            return parseFloat(distStr) <= 3.0;
        });
    }
    renderHomeList(currentRooms);
    renderMapMarkers(currentRooms);
}

function handleBlacklistSearch() {
    const keyword = document.getElementById("blacklist-search-input").value.trim();
    const container = document.getElementById('scam-list-container');
    const filteredScams = mockScams.filter(s => s.phone.includes(keyword) || s.type.toLowerCase().includes(keyword.toLowerCase()));
    
    if(filteredScams.length === 0) {
        container.innerHTML = '<div style="padding:20px;text-align:center;">Tuyệt vời! Không tìm thấy dữ liệu lừa đảo nào khớp với từ khóa.</div>';
        return;
    }

    container.innerHTML = filteredScams.map(scam => `
        <div class="scam-card">
            <div class="scam-icon"><i class="fa-solid fa-ban"></i></div>
            <div>
                <h3 style="font-size:1.4rem; margin-bottom:10px;">${scam.phone} <span class="badge-scam">${scam.type}</span></h3>
                <p style="color:#64748b; font-size:1.1rem;">${scam.info}</p>
            </div>
        </div>
    `).join('');
}

function toggleSaveRoom(id) {
    if (savedRooms.includes(id)) {
        savedRooms = savedRooms.filter(rId => rId !== id);
    } else {
        savedRooms.push(id);
    }
    localStorage.setItem('savedRooms', JSON.stringify(savedRooms));
    
    // Update button UI
    const btn = document.getElementById(`save-room-btn-${id}`);
    if (btn) {
        btn.innerHTML = `<i class="${savedRooms.includes(id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
    }
}

function openSavedRooms() {
    const container = document.getElementById('saved-list-container');
    const savedData = mockRooms.filter(r => savedRooms.includes(r.id));
    
    if (savedData.length === 0) {
        container.innerHTML = '<div style="padding:20px;text-align:center;">Bạn chưa lưu phòng trọ nào.</div>';
    } else {
        container.innerHTML = savedData.map(room => `
            <div class="listing-card" style="display:flex; flex-direction:row; align-items:center;">
                <div class="image-wrapper" style="width:120px; height:80px; flex-shrink:0; border-radius:8px; overflow:hidden;">
                    <img src="${room.img}" alt="Room" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="listing-info" style="padding-left:15px; flex:1;">
                    <h3 style="font-size:1.1rem; margin-bottom:5px;">${room.title}</h3>
                    <div class="price" style="font-size:1.1rem;">${room.price}</div>
                </div>
                <button onclick="openDetail(${room.id}); closeModal('saved-modal');" class="book-btn" style="padding: 8px 15px;">Xem</button>
            </div>
        `).join('');
    }
    document.getElementById('saved-modal').classList.remove('hidden');
}
"""

content += new_functions

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated app.js successfully via patch.")
