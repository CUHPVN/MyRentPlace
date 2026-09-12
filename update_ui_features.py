import re

# 1. UPDATE app.js
with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Replace openDetail Modal HTML
old_detail_html = """    const detailHTML = `
        <div class="detail-header">
            <img src="${room.img}" alt="Room" style="width:100%; height:300px; object-fit:cover; border-radius:12px; margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2 style="font-size:1.8rem; color:var(--text-main); margin-bottom:10px;">${room.title}</h2>
                <div style="background:var(--success); color:#fff; padding:6px 12px; border-radius:100px; font-weight:700;">
                    <i class="fa-solid fa-check"></i> ${room.verifiedBy}
                </div>
            </div>
            <p style="color:var(--text-muted); font-size:1.1rem; margin-bottom:20px;"><i class="fa-solid fa-location-dot"></i> ${room.address} (${room.distance})</p>
            <div style="display:flex; gap:20px; margin-bottom:20px;">
                <div style="background:var(--bg-secondary); padding:16px; border-radius:12px; flex:1; text-align:center;">
                    <div style="color:var(--text-muted); font-size:0.9rem;">Giá thuê</div>
                    <div style="font-size:1.5rem; font-weight:700; color:var(--primary);">${room.price}</div>
                </div>
                <div style="background:var(--bg-secondary); padding:16px; border-radius:12px; flex:1; text-align:center;">
                    <div style="color:var(--text-muted); font-size:0.9rem;">Đánh giá</div>
                    <div style="font-size:1.5rem; font-weight:700; color:#fbbf24;"><i class="fa-solid fa-star"></i> ${room.rating}</div>
                </div>
            </div>
            <h3 style="margin-bottom:10px; border-bottom:1px solid var(--border-color); padding-bottom:10px;">Chi phí dịch vụ</h3>
            <ul style="list-style:none; line-height:2; margin-bottom:30px;">
                <li><i class="fa-solid fa-bolt" style="color:#fbbf24; width:24px;"></i> Điện: <b>${room.elec}</b></li>
                <li><i class="fa-solid fa-droplet" style="color:#3b82f6; width:24px;"></i> Nước: <b>${room.water}</b></li>
                <li><i class="fa-solid fa-wifi" style="color:#10b981; width:24px;"></i> Internet: <b>${room.internet}</b></li>
            </ul>
        </div>
        <div style="display:flex; gap:12px;">
            <button class="book-btn" style="flex:2;" onclick="sendRentalRequest(${room.id})"><i class="fa-solid fa-paper-plane"></i> Gửi Yêu Cầu Thuê</button>
            <button class="nav-btn" style="flex:1; justify-content:center; background:var(--bg-secondary);" onclick="toggleSaveRoom(${room.id}, this)">
                ${isSaved ? '<i class="fa-solid fa-heart" style="color:var(--danger);"></i> Đã Lưu' : '<i class="fa-regular fa-heart"></i> Lưu Phòng'}
            </button>
            <button class="nav-btn" style="flex:1; justify-content:center;" onclick="focusOnMap(${room.id})"><i class="fa-solid fa-map-location-dot"></i> Xem Vị Trí</button>
        </div>
    `;"""

new_detail_html = """    const detailHTML = `
        <div class="detail-header">
            <img src="${room.img}" alt="Room" style="width:100%; height:300px; object-fit:cover; border-radius:12px; margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2 style="font-size:1.8rem; color:var(--text-main); margin-bottom:10px;">${room.title}</h2>
                <div style="background:var(--success); color:#fff; padding:6px 12px; border-radius:100px; font-weight:700;">
                    <i class="fa-solid fa-check"></i> ${room.verifiedBy}
                </div>
            </div>
            <p style="color:var(--text-muted); font-size:1.1rem; margin-bottom:20px;"><i class="fa-solid fa-location-dot"></i> ${room.address} (${room.distance})</p>
            
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:16px; margin-bottom:24px;">
                <div style="background:var(--bg-secondary); padding:16px; border-radius:12px; text-align:center;">
                    <div style="color:var(--text-muted); font-size:0.9rem;">Giá thuê</div>
                    <div style="font-size:1.3rem; font-weight:700; color:var(--primary);">${room.price}</div>
                </div>
                <div style="background:var(--bg-secondary); padding:16px; border-radius:12px; text-align:center;">
                    <div style="color:var(--text-muted); font-size:0.9rem;">Diện tích</div>
                    <div style="font-size:1.3rem; font-weight:700; color:var(--text-main);">${room.area || '20m2'}</div>
                </div>
                <div style="background:var(--bg-secondary); padding:16px; border-radius:12px; text-align:center;">
                    <div style="color:var(--text-muted); font-size:0.9rem;">Đánh giá</div>
                    <div style="font-size:1.3rem; font-weight:700; color:#fbbf24;"><i class="fa-solid fa-star"></i> ${room.rating}</div>
                </div>
            </div>

            <h3 style="margin-bottom:16px; font-size:1.2rem; color:var(--text-main);">Chi phí dịch vụ (Minh bạch)</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:30px;">
                <div style="padding:12px; border:1px solid var(--border-color); border-radius:8px; display:flex; align-items:center; gap:12px;">
                    <i class="fa-solid fa-bolt" style="color:#fbbf24; font-size:1.2rem;"></i>
                    <div><div style="font-size:0.85rem; color:var(--text-muted);">Giá Điện</div><strong>${room.elec}</strong></div>
                </div>
                <div style="padding:12px; border:1px solid var(--border-color); border-radius:8px; display:flex; align-items:center; gap:12px;">
                    <i class="fa-solid fa-droplet" style="color:#3b82f6; font-size:1.2rem;"></i>
                    <div><div style="font-size:0.85rem; color:var(--text-muted);">Giá Nước</div><strong>${room.water}</strong></div>
                </div>
                <div style="padding:12px; border:1px solid var(--border-color); border-radius:8px; display:flex; align-items:center; gap:12px;">
                    <i class="fa-solid fa-wifi" style="color:#10b981; font-size:1.2rem;"></i>
                    <div><div style="font-size:0.85rem; color:var(--text-muted);">Internet</div><strong>${room.internet}</strong></div>
                </div>
                <div style="padding:12px; border:1px solid var(--border-color); border-radius:8px; display:flex; align-items:center; gap:12px;">
                    <i class="fa-solid fa-motorcycle" style="color:#8b5cf6; font-size:1.2rem;"></i>
                    <div><div style="font-size:0.85rem; color:var(--text-muted);">Gửi Xe</div><strong>${room.parking || 'Miễn phí'}</strong></div>
                </div>
                <div style="padding:12px; border:1px solid var(--border-color); border-radius:8px; display:flex; align-items:center; gap:12px;">
                    <i class="fa-solid fa-broom" style="color:#ec4899; font-size:1.2rem;"></i>
                    <div><div style="font-size:0.85rem; color:var(--text-muted);">Vệ sinh</div><strong>${room.cleaning || '50k/người'}</strong></div>
                </div>
            </div>
        </div>
        <div style="display:flex; gap:12px;">
            <button class="book-btn" style="flex:2;" onclick="sendRentalRequest(${room.id})"><i class="fa-solid fa-paper-plane"></i> Gửi Yêu Cầu Thuê</button>
            <button class="nav-btn" style="flex:1; justify-content:center; background:var(--bg-secondary);" onclick="toggleSaveRoom(${room.id}, this)">
                ${isSaved ? '<i class="fa-solid fa-heart" style="color:var(--danger);"></i> Đã Lưu' : '<i class="fa-regular fa-heart"></i> Lưu Phòng'}
            </button>
            <button class="nav-btn" style="flex:1; justify-content:center;" onclick="focusOnMap(${room.id})"><i class="fa-solid fa-map-location-dot"></i> Bản đồ</button>
        </div>
    `;"""

js = js.replace(old_detail_html, new_detail_html)

# Add handleSort() function to app.js
sort_logic = """
function handleSort() {
    const sortVal = document.getElementById("sort-select").value;
    let sortedRooms = [...currentRooms];
    
    if (sortVal === 'price-asc') {
        sortedRooms.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
            const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
            return priceA - priceB;
        });
    } else if (sortVal === 'rating-desc') {
        sortedRooms.sort((a, b) => b.rating - a.rating);
    }
    
    currentRooms = sortedRooms;
    renderHomeList(currentRooms);
    renderMapMarkers(currentRooms);
}
"""
if "function handleSort()" not in js:
    js = js.replace('function handleFilter(type)', sort_logic + '\nfunction handleFilter(type)')

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)

# 2. UPDATE index.html
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

filters_html = """                    <div class="filters-container" style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 30px;">
                        <div class="filters">
                            <button id="filter-all" class="active" onclick="handleFilter('all')">Tất cả</button>
                            <button id="filter-verified" onclick="handleFilter('verified')"><i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Tick Xanh</button>
                            <button id="filter-cheap" onclick="handleFilter('cheap')">Dưới 2.5 Triệu</button>
                            <button id="filter-near" onclick="handleFilter('near')">Gần PTIT</button>
                        </div>
                        <div class="sort-box" style="display:flex; align-items:center; gap:8px;">
                            <span style="color:var(--text-muted); font-size:0.9rem;">Sắp xếp:</span>
                            <select id="sort-select" onchange="handleSort()" style="padding:10px 16px; border-radius:100px; border:1px solid var(--border-color); background:var(--bg-card); color:var(--text-main); font-family:'Outfit'; outline:none; cursor:pointer;">
                                <option value="default">Gợi ý nền tảng</option>
                                <option value="price-asc">Giá: Thấp đến Cao</option>
                                <option value="rating-desc">Đánh giá: Cao nhất</option>
                            </select>
                        </div>
                    </div>"""

old_filters_html = """                    <div class="filters">
                        <button id="filter-all" class="active" onclick="handleFilter('all')">Tất cả</button>
                        <button id="filter-verified" onclick="handleFilter('verified')"><i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Chỉ hiện phòng có Tick Xanh</button>
                        <button id="filter-cheap" onclick="handleFilter('cheap')">Dưới 2.5 Triệu</button>
                        <button id="filter-near" onclick="handleFilter('near')">Dưới 3km từ PTIT</button>
                    </div>"""

html = html.replace(old_filters_html, filters_html)
html = html.replace('styles.css?v=6', 'styles.css?v=7')
html = html.replace('app.js?v=5', 'app.js?v=6')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

# 3. UPDATE styles.css
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Fix Leaflet map z-index clash and Close button sticky
css = css.replace('z-index: 999;', 'z-index: 9999;') # Modal z-index
css = css.replace('.close-btn { position: absolute; top: 20px; right: 20px;', '.close-btn { position: sticky; top: 0px; float: right; z-index: 100; margin-bottom: -40px;')
# Increase padding for left panel to give more breathing room
css = css.replace('padding: 30px 40px;', 'padding: 40px 48px;')
# Add flex-wrap to filters so it doesn't squish on smaller laptops
css = css.replace('.filters { display: flex; gap: 12px; margin-bottom: 30px; }', '.filters { display: flex; gap: 12px; flex-wrap: wrap; }')

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

print("UI Features Updated!")
