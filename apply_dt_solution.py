import re

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Sort mockRooms initially so Tick Xanh is on top
# Tick xanh in this app is any party that is not "Cộng đồng MyRentPlace"
sort_code = """
// --- DỮ LIỆU GIẢ LẬP (MOCK DATA) ---
"""
sorted_code = """
// --- DỮ LIỆU GIẢ LẬP (MOCK DATA) ---
function sortVerifiedFirst(rooms) {
    const verifiedParties = ["Hội Sinh viên Hà Nội", "Đoàn Thanh niên", "Công an Phường"];
    return rooms.sort((a, b) => {
        const aVer = verifiedParties.includes(a.verifiedBy) ? 1 : 0;
        const bVer = verifiedParties.includes(b.verifiedBy) ? 1 : 0;
        return bVer - aVer;
    });
}
"""
if "function sortVerifiedFirst" not in js:
    js = js.replace(sort_code, sorted_code)

# 2. Sort initial currentRooms
js = js.replace('currentRooms = mockRooms;', 'currentRooms = sortVerifiedFirst([...mockRooms]);')
js = js.replace('renderHomeList(mockRooms)', 'renderHomeList(sortVerifiedFirst([...mockRooms]))')

# 3. Update Video Walk-through in openDetail
video_html = """
                <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoplay loop muted style="width:100%; max-height:400px; object-fit:cover; border-radius:12px; margin-bottom:20px;"></video>
"""
# Replace video-placeholder
js = re.sub(r'<div class="video-placeholder">.*?</div>', video_html, js, flags=re.DOTALL)

# 4. Update FIX Prices (Điện 3.5k, Nước 100k, Rác 50k)
# We will just replace the <ul> inside .price-box
old_ul = r'<ul>.*?</ul>'
new_ul = """<ul>
                        <li><span style="color:#64748b;"><i class="fa-solid fa-bolt"></i> Điện</span> <strong>3.5k / số</strong></li>
                        <li><span style="color:#64748b;"><i class="fa-solid fa-droplet"></i> Nước</span> <strong>100k / tháng</strong></li>
                        <li><span style="color:#64748b;"><i class="fa-solid fa-trash"></i> Rác sinh hoạt</span> <strong>50k / tháng</strong></li>
                    </ul>"""
js = re.sub(r'<ul>\s*<li><span style="color:#64748b;"><i class="fa-solid fa-bolt"></i> Điện.*?</ul>', new_ul, js, flags=re.DOTALL)

# 5. Add Report Button and logic
report_btn = """
                    <div style="margin-top:15px;">
                        <button onclick="reportScam(${room.id})" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ef4444; background:#fef2f2; color:#ef4444; font-weight:600; cursor:pointer;">
                            <i class="fa-solid fa-flag"></i> Cắm cờ lừa đảo
                        </button>
                    </div>
"""
# Insert report_btn after the div containing book-btn and save-btn
js = re.sub(r'(<button class="save-btn"[^>]*>.*?</button>\s*</div>)', r'\1' + report_btn, js, flags=re.DOTALL)

# Add reportScam logic
report_logic = """
function reportScam(roomId) {
    const reason = prompt("Vui lòng nhập lý do cắm cờ (Ví dụ: Đòi cọc vô lý, Môi giới lừa đảo, ...):");
    if (reason && reason.trim() !== "") {
        const room = mockRooms.find(r => r.id === roomId);
        // Create a fake phone number based on room ID
        const fakePhone = "09" + Math.floor(10000000 + Math.random() * 90000000);
        mockScams.unshift({
            phone: fakePhone,
            type: "Cảnh báo mới",
            info: `Phòng: ${room.address} - Lý do: ${reason}`
        });
        alert("Cảm ơn bạn! Báo cáo đã được ghi nhận và đưa lên hệ thống Danh Sách Đen.");
        closeModal('detail-modal');
        openBlacklist(); // Open blacklist to show the report
    }
}
"""
if "function reportScam" not in js:
    js += "\n" + report_logic

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Applied Design Thinking solution successfully!")
