// --- DỮ LIỆU GIẢ LẬP (MOCK DATA) ---
const mockRooms = [
    {
        id: 1, price: "1,800,000đ", title: "Studio ban công thoáng mát khu dân cư",
        distance: "1.5km từ PTIT", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.9, address: "Ngõ 136, Triều Khúc, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "10/09/2026",
        lat: 20.9785, lng: 105.7980,
        verifiedBy: "Công an Phường Thanh Xuân Nam"
    },
    {
        id: 2, price: "2,200,000đ", title: "Phòng trọ mới xây, full đồ, giờ giấc tự do",
        distance: "1.2km từ PTIT", img: "https://images.unsplash.com/photo-1502672260266-1c1de2d96674?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.7, address: "KĐT Mỗ Lao, Hà Đông",
        elec: "3,800đ", water: "80k", internet: "50k/tháng", verifiedDate: "12/09/2026",
        lat: 20.9850, lng: 105.7850,
        verifiedBy: "Đoàn PTIT & Tổ dân phố"
    },
    {
        id: 3, price: "1,500,000đ", title: "Phòng khép kín yên tĩnh cho sinh viên",
        distance: "1.8km từ PTIT", img: "https://images.unsplash.com/photo-1598928506311-c55dd580-c55dd580?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.5, address: "Làng Yên Xá, Tân Triều",
        elec: "4,000đ", water: "120k", internet: "100k/tháng", verifiedDate: "05/09/2026",
        lat: 20.9710, lng: 105.7930,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 4, price: "2,500,000đ", title: "Căn hộ dịch vụ mini an ninh tốt",
        distance: "1km từ PTIT", img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.8, address: "KĐT Văn Quán, Hà Đông",
        elec: "3,500đ", water: "Miễn phí", internet: "100k/tháng", verifiedDate: "01/09/2026",
        lat: 20.9770, lng: 105.7915,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 5, price: "1,200,000đ", title: "Phòng gác xép nhỏ nhắn, không ngập nước",
        distance: "2.2km từ PTIT", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.3, address: "Xóm Lẻ, Tân Triều, Thanh Trì",
        elec: "3,500đ", water: "70k", internet: "Chia đều", verifiedDate: "11/09/2026",
        lat: 20.9690, lng: 105.7960,
        verifiedBy: "Đoàn Thanh niên Tân Triều"
    },
    {
        id: 6, price: "3,000,000đ", title: "Chung cư mini cao cấp (ở được 3 người)",
        distance: "2.5km từ PTIT", img: "https://images.unsplash.com/photo-1522771731472-76846d71c22d?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.9, address: "Đường Phùng Khoang, Nam Từ Liêm",
        elec: "3,500đ", water: "100k/người", internet: "150k", verifiedDate: "09/09/2026",
        lat: 20.9880, lng: 105.7960,
        verifiedBy: "Đoàn PTIT & Công an khu vực"
    },
    {
        id: 7, price: "1,900,000đ", title: "Phòng trọ yên tĩnh, có chỗ để xe free",
        distance: "1.4km từ PTIT", img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.6, address: "Làng Việt Kiều Châu Âu, Hà Đông",
        elec: "3,800đ", water: "80k", internet: "Miễn phí", verifiedDate: "08/09/2026",
        lat: 20.9740, lng: 105.7820,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 8, price: "2,100,000đ", title: "Nhà trọ sinh viên, camera an ninh 24/7",
        distance: "1.8km từ PTIT", img: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.8, address: "Thanh Bình, Mỗ Lao",
        elec: "3,500đ", water: "100k", internet: "70k/tháng", verifiedDate: "06/09/2026",
        lat: 20.9785, lng: 105.7800,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 9, price: "1,600,000đ", title: "Phòng chung chủ, khu dân trí cao",
        distance: "1.3km từ PTIT", img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.4, address: "Ngõ 160, Chiến Thắng, Văn Quán",
        elec: "Giá nhà nước", water: "Giá nhà nước", internet: "50k", verifiedDate: "13/09/2026",
        lat: 20.9795, lng: 105.7940,
        verifiedBy: "Đoàn phường Văn Quán"
    },
    {
        id: 10, price: "3,500,000đ", title: "Căn hộ Studio full nội thất đẹp như hình",
        distance: "2km từ PTIT", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 5.0, address: "KĐT Xa La, Hà Đông",
        elec: "3,500đ", water: "Miễn phí", internet: "Miễn phí", verifiedDate: "12/09/2026",
        lat: 20.9660, lng: 105.7940,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 11, price: "2,800,000đ", title: "Phòng trọ cao cấp gần Đại học Ngoại Thương",
        distance: "6km từ PTIT", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.7, address: "Chùa Láng, Đống Đa",
        elec: "4,000đ", water: "100k", internet: "100k", verifiedDate: "15/09/2026",
        lat: 21.0227, lng: 105.8019,
        verifiedBy: "Đoàn Thanh niên Đống Đa"
    },
    {
        id: 12, price: "3,200,000đ", title: "Căn hộ mini trung tâm quận Cầu Giấy",
        distance: "7.5km từ PTIT", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.8, address: "Dịch Vọng Hậu, Cầu Giấy",
        elec: "3,800đ", water: "Miễn phí", internet: "150k", verifiedDate: "14/09/2026",
        lat: 21.0375, lng: 105.7834,
        verifiedBy: "Công an Phường Dịch Vọng Hậu"
    },
    {
        id: 13, price: "2,000,000đ", title: "Phòng trọ sinh viên gần Bách Khoa",
        distance: "8km từ PTIT", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.5, address: "Tạ Quang Bửu, Hai Bà Trưng",
        elec: "Giá nhà nước", water: "50k", internet: "Chia đều", verifiedDate: "10/09/2026",
        lat: 21.0042, lng: 105.8437,
        verifiedBy: "Hội Sinh viên Bách Khoa"
    },
    {
        id: 14, price: "4,500,000đ", title: "Chung cư 2 phòng ngủ cho nhóm bạn",
        distance: "9km từ PTIT", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.9, address: "Lạc Long Quân, Tây Hồ",
        elec: "3,500đ", water: "Giá nhà nước", internet: "Miễn phí", verifiedDate: "11/09/2026",
        lat: 21.0620, lng: 105.8123,
        verifiedBy: "Ban Quản lý Tòa nhà"
    },
    {
        id: 15, price: "1,800,000đ", title: "Phòng trọ giá rẻ khu vực Mỹ Đình",
        distance: "6.5km từ PTIT", img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.4, address: "Phú Đô, Nam Từ Liêm",
        elec: "4,000đ", water: "120k", internet: "Miễn phí", verifiedDate: "08/09/2026",
        lat: 21.0115, lng: 105.7663,
        verifiedBy: "Tổ dân phố Phú Đô"
    },
    {
        id: 16, price: "2,500,000đ", title: "Phòng trọ khép kín gần Ngã Tư Sở",
        distance: "4km từ PTIT", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.6, address: "Khương Trung, Thanh Xuân",
        elec: "3,800đ", water: "80k", internet: "50k", verifiedDate: "09/09/2026",
        lat: 21.0005, lng: 105.8152,
        verifiedBy: "Công an Phường Khương Trung"
    },
    {
        id: 17, price: "3,000,000đ", title: "Căn hộ Mini ngõ ô tô đỗ cửa",
        distance: "5.5km từ PTIT", img: "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.7, address: "Đội Cấn, Ba Đình",
        elec: "4,000đ", water: "100k", internet: "100k", verifiedDate: "13/09/2026",
        lat: 21.0345, lng: 105.8203,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 18, price: "1,700,000đ", title: "Nhà trọ sinh viên gần bến xe Giáp Bát",
        distance: "7km từ PTIT", img: "https://images.unsplash.com/photo-1528909514045-204288f6c382?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.3, address: "Giải Phóng, Hoàng Mai",
        elec: "3,500đ", water: "70k", internet: "Miễn phí", verifiedDate: "12/09/2026",
        lat: 20.9832, lng: 105.8415,
        verifiedBy: "Hội Cựu chiến binh phường"
    },
    {
        id: 19, price: "2,200,000đ", title: "Phòng chung chủ an ninh tuyệt đối",
        distance: "3.5km từ PTIT", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.8, address: "Nguyễn Trãi, Thanh Xuân",
        elec: "Giá nhà nước", water: "Giá nhà nước", internet: "Chia đều", verifiedDate: "07/09/2026",
        lat: 20.9940, lng: 105.8080,
        verifiedBy: "Đoàn phường Thanh Xuân Trung"
    },
    {
        id: 20, price: "5,000,000đ", title: "Căn hộ Vinhomes Smart City (Ghép phòng)",
        distance: "8km từ PTIT", img: "https://images.unsplash.com/photo-1502672260266-1c1de2d96674?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 5.0, address: "Tây Mỗ, Nam Từ Liêm",
        elec: "3,500đ", water: "Miễn phí", internet: "Miễn phí", verifiedDate: "16/09/2026",
        lat: 21.0025, lng: 105.7480,
        verifiedBy: "Ban Quản lý Vinhomes"
    }
];

const mockScams = [
    { phone: "0987.654.xxx", info: "Bắt chuyển khoản cọc trước khi xem nhà. Bị report bởi 15 sinh viên.", type: "LỪA CỌC" },
    { phone: "0912.345.xxx", info: "Tự xưng chủ nhà nhưng là cò mồi thu phí dẫn đường cắt cổ.", type: "CÒ MỒI DỎM" }
];

const botNames = ["Hoàng Long", "Trần Mai", "Nguyễn Tuấn", "Lê Hương", "Vũ Huy"];
const botComments = [
    "Đã đến xem thực tế, phòng y chang video, anh chủ nhà rất hiền.",
    "Bảng giá điện nước rõ ràng, mình đã ký hợp đồng năm ngoái, không bị thu thêm phí ảo.",
    "Hội sinh viên đã tick xanh nên yên tâm chuyển cọc. Mình đang ở đây rất thích.",
    "Khu này an ninh tốt, gần điểm buýt tiện đi học.",
    "Mọi thứ ổn, chỉ có điều wifi buổi tối hơi yếu một chút."
];

let map;

// --- GOOGLE IDENTITY SERVICES (ĐĂNG NHẬP THẬT) ---
window.onload = function () {
    // Render Danh sách và Map ban đầu
    renderHomeList();
    initMap();

    // Khởi tạo Google GSI
    // LƯU Ý: THAY THẾ MÃ CLIENT_ID DƯỚI ĐÂY BẰNG MÃ CỦA BẠN TỪ GOOGLE CLOUD CONSOLE
    const GOOGLE_CLIENT_ID = "212798554667-taq34omvlal7l0dkmmen80m7aog9brh6.apps.googleusercontent.com"; 
    
    if(typeof google !== 'undefined') {
        google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse
        });
        renderLoginButtons();
    } else {
        document.getElementById("google-btn-wrapper").innerHTML = "<p style='color:red;'>Không tải được Google SDK</p>";
    }
};

// Hàm hiển thị lại các nút Đăng nhập
function renderLoginButtons() {
    const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = `
        <div id="google-btn-wrapper"></div>
        <span style="color: #64748b; font-size: 0.9rem;">hoặc</span>
        <button class="guest-btn" onclick="loginAsGuest()"><i class="fa-regular fa-user"></i> Chế độ Khách</button>
    `;
    if(typeof google !== 'undefined') {
        google.accounts.id.renderButton(
            document.getElementById("google-btn-wrapper"),
            { theme: "outline", size: "large" } 
        );
    }
}

// Hàm Đăng xuất
function logout() {
    if(typeof google !== 'undefined') {
        google.accounts.id.disableAutoSelect(); // Ngắt auto-login của Google
    }
    renderLoginButtons();
}

// Hàm xử lý sau khi đăng nhập Google thành công
function handleCredentialResponse(response) {
    // response.credential là chuỗi JWT chứa thông tin user
    // Giải mã JWT (đơn giản bằng cách parse base64 payload)
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Image URL: ' + responsePayload.picture);
    console.log('Email: ' + responsePayload.email);

    // Đổi giao diện UI: Xóa nút đăng nhập, hiển thị Avatar và Tên cùng nút Logout
    const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = `
        <div class="user-profile">
            <img src="${responsePayload.picture}" alt="Avatar">
            <span>${responsePayload.name}</span>
            <button onclick="logout()" title="Đăng xuất" style="background:none; border:none; color:var(--danger); cursor:pointer; margin-left:8px; font-size:1.1rem;"><i class="fa-solid fa-power-off"></i></button>
        </div>
    `;
}

// Hàm giải mã JWT (chỉ dùng cho Frontend demo)
function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Hàm xử lý Đăng nhập Ẩn danh (Chế độ Khách)
function loginAsGuest() {
    const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = `
        <div class="user-profile">
            <img src="https://ui-avatars.com/api/?name=Khách&background=cbd5e1&color=fff" alt="Avatar">
            <span>Khách truy cập</span>
            <button onclick="logout()" title="Đăng xuất" style="background:none; border:none; color:var(--danger); cursor:pointer; margin-left:8px; font-size:1.1rem;"><i class="fa-solid fa-power-off"></i></button>
        </div>
    `;
}

// --- RENDER DỮ LIỆU ---
function renderHomeList() {
    const container = document.getElementById('listing-container');
    container.innerHTML = mockRooms.map(room => `
        <div class="listing-card" onclick="openDetail(${room.id})">
            <div class="image-wrapper">
                <img src="${room.img}" alt="Room">
                <div class="badge-verified"><i class="fa-solid fa-circle-check"></i> Đã kiểm duyệt</div>
            </div>
            <div class="listing-info">
                <div class="price">${room.price}</div>
                <h3>${room.title}</h3>
                <p class="location"><i class="fa-solid fa-location-dot"></i> ${room.distance}</p>
            </div>
        </div>
    `).join('');
}

// --- MODAL LOGIC (Web dùng Modal thay vì chuyển View) ---
function openDetail(id) {
    const room = mockRooms.find(r => r.id === id);
    const numComments = Math.floor(Math.random() * 2) + 2;
    let commentsHTML = '';
    for(let i=0; i<numComments; i++) {
        const name = botNames[Math.floor(Math.random() * botNames.length)];
        const text = botComments[Math.floor(Math.random() * botComments.length)];
        commentsHTML += `
            <div class="comment-card">
                <div class="comment-header">
                    <img src="https://ui-avatars.com/api/?name=${name}&background=random" alt="Avatar">
                    <div>
                        <div class="comment-author">${name}</div>
                        <div style="font-size: 0.8rem; color: #64748b;">${Math.floor(Math.random() * 10) + 1} ngày trước</div>
                    </div>
                </div>
                <p class="comment-text">${text}</p>
            </div>
        `;
    }

    const html = `
        <div class="detail-grid">
            <div class="detail-left">
                <div class="video-placeholder">
                    <img src="${room.img}" alt="Room">
                    <div class="play-btn"><i class="fa-solid fa-play"></i></div>
                </div>
                <h2 style="font-size:2rem; margin-bottom:10px;">${room.title}</h2>
                <p style="color:#64748b; font-size:1.1rem; margin-bottom:20px;"><i class="fa-solid fa-location-dot"></i> ${room.address}</p>
                
                <div class="host-info">
                    <img src="https://ui-avatars.com/api/?name=Xác+Thực&background=10b981&color=fff" alt="Host">
                    <div>
                        <h4 style="color:#10b981; font-size:1.1rem;">Đã xác thực bởi: ${room.verifiedBy}</h4>
                        <p style="color:#64748b;">Khảo sát thực tế ngày: ${room.verifiedDate}</p>
                    </div>
                </div>

                <div class="comments-section">
                    <h3><i class="fa-solid fa-comments"></i> Trải nghiệm sinh viên cũ</h3>
                    ${commentsHTML}
                </div>
            </div>
            
            <div class="detail-right">
                <div class="price-box">
                    <h2>${room.price}<span>/tháng</span></h2>
                    <ul>
                        <li><span style="color:#64748b;"><i class="fa-solid fa-bolt"></i> Điện</span> <strong>${room.elec} / số</strong></li>
                        <li><span style="color:#64748b;"><i class="fa-solid fa-droplet"></i> Nước</span> <strong>${room.water}</strong></li>
                        <li><span style="color:#64748b;"><i class="fa-solid fa-wifi"></i> Internet</span> <strong>${room.internet}</strong></li>
                    </ul>
                    <button class="book-btn">Gửi Yêu Cầu Thuê An Toàn</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('detail-content-container').innerHTML = html;
    document.getElementById('detail-modal').classList.remove('hidden');
}

function openBlacklist() {
    const container = document.getElementById('scam-list-container');
    container.innerHTML = mockScams.map(scam => `
        <div class="scam-card">
            <div class="scam-icon"><i class="fa-solid fa-ban"></i></div>
            <div>
                <h3 style="font-size:1.4rem; margin-bottom:10px;">${scam.phone} <span class="badge-scam">${scam.type}</span></h3>
                <p style="color:#64748b; font-size:1.1rem;">${scam.info}</p>
            </div>
        </div>
    `).join('');
    document.getElementById('blacklist-modal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// --- BẢN ĐỒ LEAFLET ---
function initMap() {
    const ptitLat = 20.9806; const ptitLng = 105.7877;
    map = L.map('map-container').setView([ptitLat, ptitLng], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var ptitIcon = L.icon({ iconUrl: 'https://img.icons8.com/color/48/university.png', iconSize: [40, 40] });
    L.marker([ptitLat, ptitLng], {icon: ptitIcon}).addTo(map).bindPopup("<b>Học viện Công nghệ Bưu chính Viễn thông (PTIT)</b>");

    var roomIcon = L.icon({ iconUrl: 'https://img.icons8.com/fluency/48/map-pin.png', iconSize: [36, 36] });
    mockRooms.forEach(room => {
        L.marker([room.lat, room.lng], {icon: roomIcon})
         .addTo(map)
         .bindPopup(`<b>${room.price}</b><br><a href="#" onclick="openDetail(${room.id})" style="color:#2563eb; font-weight:bold;">Xem phòng</a>`);
    });
}

function locateUser() {
    if (navigator.geolocation) {
        document.getElementById('locate-btn').innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang tìm...';
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude; const lng = position.coords.longitude;
            map.setView([lat, lng], 15);
            var userIcon = L.icon({ iconUrl: 'https://img.icons8.com/color/48/street-view.png', iconSize: [46, 46] });
            L.marker([lat, lng], {icon: userIcon}).addTo(map).bindPopup("Bạn đang ở đây!").openPopup();
            document.getElementById('locate-btn').innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> Vị trí của tôi';
        }, () => {
            alert("Không thể lấy vị trí. Hãy bật Location trong trình duyệt nhé.");
            document.getElementById('locate-btn').innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> Vị trí của tôi';
        });
    } else {
        alert("Trình duyệt không hỗ trợ tìm vị trí GPS.");
    }
}
