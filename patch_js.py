import re

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add new globals and update window.onload
old_globals = r"let savedRooms = JSON\.parse\(localStorage\.getItem\('savedRooms'\) \|\| '\[\]'\);"
new_globals = """let savedRooms = JSON.parse(localStorage.getItem('savedRooms') || '[]');
let sentRequests = JSON.parse(localStorage.getItem('sentRequests') || '[]');
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
let requestingRoomId = null;"""
content = content.replace(old_globals, new_globals)

old_onload = r"window\.onload = function \(\) \{.*?renderLoginButtons\(\);\s*\}"
new_onload = """window.onload = function () {
    renderHomeList();
    initMap();

    const GOOGLE_CLIENT_ID = "212798554667-taq34omvlal7l0dkmmen80m7aog9brh6.apps.googleusercontent.com"; 
    if(typeof google !== 'undefined') {
        google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse
        });
    }
    
    if (currentUser) {
        renderUserProfile(currentUser);
    } else {
        renderLoginButtons();
    }
}

function renderUserProfile(user) {
    const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = `
        <div class="user-profile">
            <img src="${user.picture}" alt="Avatar">
            <span>${user.name}</span>
            <button onclick="logout()" title="Đăng xuất" style="background:none; border:none; color:var(--danger); cursor:pointer; margin-left:8px; font-size:1.1rem;"><i class="fa-solid fa-power-off"></i></button>
        </div>
    `;
    document.getElementById("saved-rooms-btn").style.display = "inline-block";
    document.getElementById("history-btn").style.display = "inline-block";
}"""
content = re.sub(old_onload, new_onload, content, flags=re.DOTALL)

# 2. Update Auth functions
content = content.replace(
    "const responsePayload = decodeJwtResponse(response.credential);", 
    "const responsePayload = decodeJwtResponse(response.credential);\n    currentUser = { name: responsePayload.name, picture: responsePayload.picture, type: 'google' };\n    localStorage.setItem('currentUser', JSON.stringify(currentUser));"
)
content = content.replace(
    """const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = `
        <div class="user-profile">
            <img src="${responsePayload.picture}" alt="Avatar">
            <span>${responsePayload.name}</span>
            <button onclick="logout()" title="Đăng xuất" style="background:none; border:none; color:var(--danger); cursor:pointer; margin-left:8px; font-size:1.1rem;"><i class="fa-solid fa-power-off"></i></button>
        </div>
    `;
    document.getElementById("saved-rooms-btn").style.display = "inline-block";""",
    "renderUserProfile(currentUser);"
)

content = content.replace(
    """const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = `
        <div class="user-profile">
            <img src="https://ui-avatars.com/api/?name=Khách&background=cbd5e1&color=fff" alt="Avatar">
            <span>Khách truy cập</span>
            <button onclick="logout()" title="Đăng xuất" style="background:none; border:none; color:var(--danger); cursor:pointer; margin-left:8px; font-size:1.1rem;"><i class="fa-solid fa-power-off"></i></button>
        </div>
    `;
    document.getElementById("saved-rooms-btn").style.display = "inline-block";""",
    """currentUser = { name: 'Khách truy cập', picture: 'https://ui-avatars.com/api/?name=Khách&background=cbd5e1&color=fff', type: 'guest' };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    renderUserProfile(currentUser);"""
)

old_logout = """function logout() {
    if(typeof google !== 'undefined') {
        google.accounts.id.disableAutoSelect(); // Ngắt auto-login của Google
    }
    renderLoginButtons();
    document.getElementById("saved-rooms-btn").style.display = "none";
}"""
new_logout = """function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    if(typeof google !== 'undefined') {
        google.accounts.id.disableAutoSelect();
    }
    renderLoginButtons();
    document.getElementById("saved-rooms-btn").style.display = "none";
    document.getElementById("history-btn").style.display = "none";
}"""
content = content.replace(old_logout, new_logout)

# 3. Update Request form logic
old_send_req = """function sendRentalRequest(roomId) {
    alert("Thành công! Yêu cầu thuê phòng của bạn đã được gửi đến hệ thống an toàn của MyRentPlace.\\nChủ nhà sẽ liên hệ với bạn trong vòng 24h tới để sắp xếp lịch xem nhà thực tế.");
}"""
new_send_req = """function sendRentalRequest(roomId) {
    if (!currentUser) {
        alert("Bạn cần Đăng nhập hoặc dùng chế độ Khách để có thể gửi yêu cầu thuê phòng.");
        return;
    }
    if (sentRequests.includes(roomId)) {
        alert("Bạn đã gửi yêu cầu cho phòng này rồi. Vui lòng đợi chủ nhà liên hệ lại nhé!");
        return;
    }
    requestingRoomId = roomId;
    document.getElementById('request-modal').classList.remove('hidden');
}

function submitRentalRequest() {
    const phone = document.getElementById('req-phone').value;
    const msg = document.getElementById('req-msg').value;
    
    if (!phone || phone.length < 8) {
        alert("Vui lòng nhập số điện thoại hợp lệ để chủ nhà liên hệ.");
        return;
    }
    
    sentRequests.push(requestingRoomId);
    localStorage.setItem('sentRequests', JSON.stringify(sentRequests));
    
    closeModal('request-modal');
    alert(`Thành công! Lời nhắn của bạn đã được gửi đến chủ nhà.\\nSĐT: ${phone}\\nChủ nhà sẽ liên hệ lại với bạn trong 24h tới.`);
    
    // Clear form
    document.getElementById('req-phone').value = '';
    document.getElementById('req-msg').value = '';
}

function openHistory() {
    const container = document.getElementById('history-list-container');
    const historyData = mockRooms.filter(r => sentRequests.includes(r.id));
    
    if (historyData.length === 0) {
        container.innerHTML = '<div style="padding:20px;text-align:center;">Bạn chưa gửi yêu cầu liên hệ phòng nào.</div>';
    } else {
        container.innerHTML = historyData.map(room => `
            <div class="listing-card" style="display:flex; flex-direction:row; align-items:center;">
                <div class="image-wrapper" style="width:120px; height:80px; flex-shrink:0; border-radius:8px; overflow:hidden;">
                    <img src="${room.img}" alt="Room" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="listing-info" style="padding-left:15px; flex:1;">
                    <h3 style="font-size:1.1rem; margin-bottom:5px;">${room.title}</h3>
                    <div class="price" style="font-size:1.1rem;"><span style="color:#10b981; font-weight:bold;">[Đã liên hệ]</span></div>
                </div>
                <button onclick="openDetail(${room.id}); closeModal('history-modal');" class="book-btn" style="padding: 8px 15px; background:white; color:#2563eb; border:1px solid #2563eb;">Xem lại</button>
            </div>
        `).join('');
    }
    document.getElementById('history-modal').classList.remove('hidden');
}
"""
content = content.replace(old_send_req, new_send_req)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("JS patched successfully.")
