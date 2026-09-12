
// --- DARK MODE LOGIC ---
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('dark-mode-btn');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '<i class="fa-solid fa-sun" style="color:#fbbf24;"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}
// --- DỮ LIỆU GIẢ LẬP (MOCK DATA) ---
function sortVerifiedFirst(rooms) {
    const verifiedParties = ["Hội Sinh viên Hà Nội", "Đoàn Thanh niên", "Công an Phường"];
    return rooms.sort((a, b) => {
        const aVer = verifiedParties.includes(a.verifiedBy) ? 1 : 0;
        const bVer = verifiedParties.includes(b.verifiedBy) ? 1 : 0;
        return bVer - aVer;
    });
}
const mockRooms = [
    {
        id: 1, price: "1,800,000đ", title: "Phòng trọ tiện nghi tại Triều Khúc",
        distance: "1.5km từ PTIT", img: "./assets/rooms/room1.jpg",
        rating: 4.1, address: "Triều Khúc, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "02/09/2026",
        lat: 20.9825, lng: 105.796,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 2, price: "2,200,000đ", title: "Phòng trọ tiện nghi tại Mỗ Lao",
        distance: "1.2km từ PTIT", img: "./assets/rooms/room2.jpg",
        rating: 4.2, address: "Mỗ Lao, Hà Đông",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "03/09/2026",
        lat: 20.982, lng: 105.782,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 3, price: "1,500,000đ", title: "Phòng trọ tiện nghi tại Yên Xá",
        distance: "1.8km từ PTIT", img: "./assets/rooms/room3.jpg",
        rating: 4.3, address: "Yên Xá, Tân Triều",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "04/09/2026",
        lat: 20.971, lng: 105.787,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 4, price: "2,500,000đ", title: "Phòng trọ tiện nghi tại Văn Quán",
        distance: "1km từ PTIT", img: "https://i.ytimg.com/vi/cqAH8fCFYd0/maxresdefault.jpg",
        rating: 4.4, address: "Văn Quán, Hà Đông",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "05/09/2026",
        lat: 20.978, lng: 105.788,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 5, price: "3,500,000đ", title: "Phòng trọ tiện nghi tại Xa La",
        distance: "2km từ PTIT", img: "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0309/users/9e3f169092895ed175d248b04638e61e1124cffa/i-img898x1198-1663662753qlykpl441600.jpg",
        rating: 4.5, address: "Xa La, Hà Đông",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "06/09/2026",
        lat: 20.966, lng: 105.785,
        verifiedBy: "Công an Phường"
    },
    {
        id: 6, price: "3,000,000đ", title: "Phòng trọ tiện nghi tại Phùng Khoang",
        distance: "2.5km từ PTIT", img: "https://img.amiami.jp/images/product/main/224/GOODS-04291015.jpg",
        rating: 4.6, address: "Phùng Khoang, Nam Từ Liêm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "07/09/2026",
        lat: 20.989, lng: 105.792,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 7, price: "2,800,000đ", title: "Phòng trọ tiện nghi tại Thượng Đình",
        distance: "3.5km từ PTIT", img: "https://item-shopping.c.yimg.jp/i/n/amiami_goods-04291014",
        rating: 4.7, address: "Thượng Đình, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "08/09/2026",
        lat: 20.998, lng: 105.811,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 8, price: "2,500,000đ", title: "Phòng trọ tiện nghi tại Khương Trung",
        distance: "4km từ PTIT", img: "http://anime-store.jp/cdn/shop/products/4573548027168_1200x1200.jpg?v=1666673263",
        rating: 4.8, address: "Khương Trung, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "09/09/2026",
        lat: 20.999, lng: 105.817,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 9, price: "2,000,000đ", title: "Phòng trọ tiện nghi tại Thanh Xuân Bắc",
        distance: "3km từ PTIT", img: "https://diamond-rm.net/wp-content/uploads/2023/08/dcs230901_062_001.jpg",
        rating: 4.9, address: "Thanh Xuân Bắc, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "10/09/2026",
        lat: 20.992, lng: 105.8,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 10, price: "2,800,000đ", title: "Phòng trọ tiện nghi tại Chùa Láng",
        distance: "6km từ PTIT", img: "https://nonno.hpplus.jp/wp-content/uploads/org/14/149dbecf661eb42f3a42aafaa2d6883c_1793x2494_h.jpg",
        rating: 4.0, address: "Chùa Láng, Đống Đa",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "11/09/2026",
        lat: 21.022, lng: 105.802,
        verifiedBy: "Công an Phường"
    },
    {
        id: 11, price: "3,200,000đ", title: "Phòng trọ tiện nghi tại Thái Hà",
        distance: "5.5km từ PTIT", img: "https://nonno.hpplus.jp/wp-content/uploads/org/dc/dc257118db00fd70bdfee8af7df709da_2049x2844_h.jpg",
        rating: 4.1, address: "Thái Hà, Đống Đa",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "12/09/2026",
        lat: 21.011, lng: 105.82,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 12, price: "4,000,000đ", title: "Phòng trọ tiện nghi tại Xã Đàn",
        distance: "6.2km từ PTIT", img: "https://i.ytimg.com/vi/mEs5VM_taXg/maxresdefault.jpg",
        rating: 4.2, address: "Xã Đàn, Đống Đa",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "13/09/2026",
        lat: 21.016, lng: 105.833,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 13, price: "3,500,000đ", title: "Phòng trọ tiện nghi tại Cát Linh",
        distance: "7km từ PTIT", img: "https://stat.ameba.jp/user_images/20240824/18/hadukilife-18/11/9c/j/o1040104015478499512.jpg",
        rating: 4.3, address: "Cát Linh, Đống Đa",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "14/09/2026",
        lat: 21.028, lng: 105.829,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 14, price: "3,200,000đ", title: "Phòng trọ tiện nghi tại Dịch Vọng Hậu",
        distance: "7.5km từ PTIT", img: "https://i.ytimg.com/vi/hYJBRj_e4D8/maxresdefault.jpg",
        rating: 4.4, address: "Dịch Vọng Hậu, Cầu Giấy",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "15/09/2026",
        lat: 21.037, lng: 105.79,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 15, price: "2,600,000đ", title: "Phòng trọ tiện nghi tại Nghĩa Tân",
        distance: "8.5km từ PTIT", img: "https://i.ytimg.com/vi/NP7k__oJt0U/maxresdefault.jpg",
        rating: 4.5, address: "Nghĩa Tân, Cầu Giấy",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "16/09/2026",
        lat: 21.043, lng: 105.795,
        verifiedBy: "Công an Phường"
    },
    {
        id: 16, price: "3,800,000đ", title: "Phòng trọ tiện nghi tại Yên Hòa",
        distance: "6.5km từ PTIT", img: "https://pbs.twimg.com/media/Fo65uofacAEt2VH.jpg:large",
        rating: 4.6, address: "Yên Hòa, Cầu Giấy",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "17/09/2026",
        lat: 21.019, lng: 105.796,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 17, price: "2,900,000đ", title: "Phòng trọ tiện nghi tại Quan Hoa",
        distance: "7.2km từ PTIT", img: "https://thumb.ac-illust.com/9c/9c31e9368c6d9cdae3067fcb6943c1fd_w.jpeg",
        rating: 4.7, address: "Quan Hoa, Cầu Giấy",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "18/09/2026",
        lat: 21.033, lng: 105.8,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 18, price: "2,000,000đ", title: "Phòng trọ tiện nghi tại Tạ Quang Bửu",
        distance: "8km từ PTIT", img: "https://i.ytimg.com/vi/YylACp0c8GQ/maxresdefault.jpg",
        rating: 4.8, address: "Tạ Quang Bửu, Hai Bà Trưng",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "19/09/2026",
        lat: 21.004, lng: 105.845,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 19, price: "3,500,000đ", title: "Phòng trọ tiện nghi tại Minh Khai",
        distance: "9km từ PTIT", img: "https://thumbnail.image.rakuten.co.jp/@0_mall/hikaritv/cabinet/plala/201/01233/2010123368_k.jpg",
        rating: 4.9, address: "Minh Khai, Hai Bà Trưng",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "20/09/2026",
        lat: 20.998, lng: 105.855,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 20, price: "4,200,000đ", title: "Phòng trọ tiện nghi tại Lò Đúc",
        distance: "9.5km từ PTIT", img: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063902990775",
        rating: 4.0, address: "Lò Đúc, Hai Bà Trưng",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "21/09/2026",
        lat: 21.015, lng: 105.855,
        verifiedBy: "Công an Phường"
    },
    {
        id: 21, price: "5,500,000đ", title: "Phòng trọ tiện nghi tại Phố Cổ",
        distance: "10km từ PTIT", img: "https://d2l930y2yx77uc.cloudfront.net/production/social_images/2d7c619733c614ac088d59697a34fb664a37cd8f.png",
        rating: 4.1, address: "Phố Cổ, Hoàn Kiếm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "22/09/2026",
        lat: 21.031, lng: 105.851,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 22, price: "4,800,000đ", title: "Phòng trọ tiện nghi tại Tràng Thi",
        distance: "9.8km từ PTIT", img: "https://stat.ameba.jp/user_images/20230613/06/gai183/f9/b4/j/o0913108015298134619.jpg",
        rating: 4.2, address: "Tràng Thi, Hoàn Kiếm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "23/09/2026",
        lat: 21.026, lng: 105.849,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 23, price: "4,500,000đ", title: "Phòng trọ tiện nghi tại Xuân La",
        distance: "9km từ PTIT", img: "https://pbs.twimg.com/media/HJ3BTpXbAAAEwUN.jpg",
        rating: 4.3, address: "Xuân La, Tây Hồ",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "24/09/2026",
        lat: 21.056, lng: 105.806,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 24, price: "6,000,000đ", title: "Phòng trọ tiện nghi tại Quảng An",
        distance: "11km từ PTIT", img: "https://assets.st-note.com/production/uploads/images/282757087/rectangle_large_type_2_5f3b9ed81a2db29a9729cafe066618ff.jpg?width=1280",
        rating: 4.4, address: "Quảng An, Tây Hồ",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "25/09/2026",
        lat: 21.066, lng: 105.822,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 25, price: "3,000,000đ", title: "Phòng trọ tiện nghi tại Đội Cấn",
        distance: "8.5km từ PTIT", img: "https://pbs.twimg.com/media/HJ3BTpVbsAAYVRJ.jpg",
        rating: 4.5, address: "Đội Cấn, Ba Đình",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "26/09/2026",
        lat: 21.035, lng: 105.817,
        verifiedBy: "Công an Phường"
    },
    {
        id: 26, price: "3,600,000đ", title: "Phòng trọ tiện nghi tại Kim Mã",
        distance: "8.8km từ PTIT", img: "https://pbs.twimg.com/media/Cn3GBYnUEAEUvSu.jpg",
        rating: 4.6, address: "Kim Mã, Ba Đình",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "27/09/2026",
        lat: 21.03, lng: 105.82,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 27, price: "1,700,000đ", title: "Phòng trọ tiện nghi tại Giải Phóng",
        distance: "7km từ PTIT", img: "https://www.hotosena.com/wp-content/uploads/2026/04/670940504_17949355527132826_4690595349236827911_n-1152x1536.jpg",
        rating: 4.7, address: "Giải Phóng, Hoàng Mai",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "28/09/2026",
        lat: 20.985, lng: 105.841,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 28, price: "2,100,000đ", title: "Phòng trọ tiện nghi tại Lĩnh Nam",
        distance: "8.5km từ PTIT", img: "https://pbs.twimg.com/media/HK5O-cwaIAEMEnp.jpg",
        rating: 4.8, address: "Lĩnh Nam, Hoàng Mai",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "01/09/2026",
        lat: 20.976, lng: 105.867,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 29, price: "2,400,000đ", title: "Phòng trọ tiện nghi tại Ngọc Lâm",
        distance: "12km từ PTIT", img: "https://thumbnail.image.rakuten.co.jp/@0_mall/stylife/cabinet/item/288/rj6288-01_1.jpg",
        rating: 4.9, address: "Ngọc Lâm, Long Biên",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "02/09/2026",
        lat: 21.046, lng: 105.875,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 30, price: "3,500,000đ", title: "Phòng trọ tiện nghi tại Aeon Mall",
        distance: "13km từ PTIT", img: "https://lasisa.net/wp-content/uploads/2024/09/240905_syuhu_01.jpg",
        rating: 4.0, address: "Aeon Mall, Long Biên",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "03/09/2026",
        lat: 21.027, lng: 105.897,
        verifiedBy: "Công an Phường"
    },
    {
        id: 31, price: "3,200,000đ", title: "Phòng trọ tiện nghi tại Tây Mỗ",
        distance: "8.5km từ PTIT", img: "https://upload-os-bbs.hoyolab.com/upload/2023/06/04/205526001/17c611f50143dffa21923744e2dbc529_737640502555426271.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png",
        rating: 4.1, address: "Tây Mỗ, Nam Từ Liêm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "04/09/2026",
        lat: 21.003, lng: 105.748,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 32, price: "2,800,000đ", title: "Phòng trọ tiện nghi tại Mỹ Đình",
        distance: "9.5km từ PTIT", img: "https://pbs.twimg.com/media/HHNqziRbEAAADJs.jpg",
        rating: 4.2, address: "Mỹ Đình, Nam Từ Liêm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "05/09/2026",
        lat: 21.031, lng: 105.768,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 33, price: "1,800,000đ", title: "Phòng trọ tiện nghi tại Phú Đô",
        distance: "6.5km từ PTIT", img: "./assets/rooms/room1.jpg",
        rating: 4.3, address: "Phú Đô, Nam Từ Liêm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "06/09/2026",
        lat: 21.011, lng: 105.768,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 34, price: "2,500,000đ", title: "Phòng trọ tiện nghi tại Đa Tốn",
        distance: "15km từ PTIT", img: "./assets/rooms/room2.jpg",
        rating: 4.4, address: "Đa Tốn, Gia Lâm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "07/09/2026",
        lat: 20.999, lng: 105.932,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 35, price: "1,500,000đ", title: "Phòng trọ tiện nghi tại Đông Anh",
        distance: "18km từ PTIT", img: "./assets/rooms/room3.jpg",
        rating: 4.5, address: "Đông Anh, Hà Nội",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "08/09/2026",
        lat: 21.14, lng: 105.845,
        verifiedBy: "Công an Phường"
    }
];

const mockScams = [
    { phone: "0987.654.111", info: "Bắt chuyển khoản cọc trước khi xem nhà. Bị report bởi 15 sinh viên.", type: "LỪA CỌC" },
    { phone: "0912.345.222", info: "Tự xưng chủ nhà nhưng là cò mồi thu phí dẫn đường cắt cổ.", type: "CÒ MỒI DỎM" },
    { phone: "0345.678.333", info: "Đăng ảnh ảo, nhà thực tế lụp xụp, đòi cọc 3 tháng.", type: "TREO ĐẦU DÊ" },
    { phone: "0977.111.444", info: "Lừa ký hợp đồng với điều khoản vô lý, phạt tiền không rõ ràng.", type: "HỢP ĐỒNG ẢO" },
    { phone: "0888.999.555", info: "Quỵt tiền cọc của sinh viên khi trả phòng.", type: "QUỴT CỌC" }
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
let markersArray = [];
let currentRooms = [];
let savedRooms = JSON.parse(localStorage.getItem('savedRooms') || '[]');
let sentRequests = JSON.parse(localStorage.getItem('sentRequests') || '[]');
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
let requestingRoomId = null;

// --- GOOGLE IDENTITY SERVICES (ĐĂNG NHẬP THẬT) ---
window.onload = function () {
    renderHomeList();
    initMap();
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        const btn = document.getElementById('dark-mode-btn');
        if (btn) btn.innerHTML = '<i class="fa-solid fa-sun" style="color:#fbbf24;"></i>';
    }

    const GOOGLE_CLIENT_ID = "212798554667-taq34omvlal7l0dkmmen80m7aog9brh6.apps.googleusercontent.com"; 
    if(typeof google !== 'undefined') {
        google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse
        });
    } else {
        document.getElementById("google-btn-wrapper").innerHTML = "<p style='color:red;'>Không tải được Google SDK</p>";
    }
    
    if (currentUser) {
        renderUserProfile(currentUser);
    } else {
        renderLoginButtons();
    }
};

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
}

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
    currentUser = null;
    localStorage.removeItem('currentUser');
    if(typeof google !== 'undefined') {
        google.accounts.id.disableAutoSelect();
    }
    renderLoginButtons();
    document.getElementById("saved-rooms-btn").style.display = "none";
    document.getElementById("history-btn").style.display = "none";
}

// Hàm xử lý sau khi đăng nhập Google thành công
function handleCredentialResponse(response) {
    // response.credential là chuỗi JWT chứa thông tin user
    // Giải mã JWT (đơn giản bằng cách parse base64 payload)
    const responsePayload = decodeJwtResponse(response.credential);
    currentUser = { name: responsePayload.name, picture: responsePayload.picture, type: 'google' };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Image URL: ' + responsePayload.picture);
    console.log('Email: ' + responsePayload.email);

    // Đổi giao diện UI: Xóa nút đăng nhập, hiển thị Avatar và Tên cùng nút Logout
    renderUserProfile(currentUser);
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
    currentUser = { name: 'Khách truy cập', picture: 'https://ui-avatars.com/api/?name=Khách&background=cbd5e1&color=fff', type: 'guest' };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    renderUserProfile(currentUser);
}

// --- RENDER DỮ LIỆU ---
function renderHomeList(data = mockRooms) {
    const container = document.getElementById('listing-container');
    if(data.length === 0) { container.innerHTML = '<div style="padding:20px;color:#64748b;">Không tìm thấy phòng trọ nào phù hợp.</div>'; return; }
    container.innerHTML = data.map(room => `
        <div class="listing-card" onclick="openDetail(${room.id})">
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
                
                <iframe src="https://www.youtube.com/embed/DoBn1WWoP58?autoplay=1&mute=1&loop=1&playlist=DoBn1WWoP58" style="width:100%; height:400px; border-radius:12px; border:none; margin-bottom:20px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                </div>
                <h2 style="font-size:2rem; margin-bottom:10px;">${room.title}</h2>
                <p style="color:#64748b; font-size:1.1rem; margin-bottom:20px; cursor:pointer;" onclick="focusOnMap(${room.lat}, ${room.lng})">
                    <i class="fa-solid fa-location-dot"></i> ${room.address} 
                    <span style="font-size:0.9rem; color:#2563eb; margin-left:10px;">(Xem vị trí trên bản đồ)</span>
                </p>
                
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
                        <li><span style="color:#64748b;"><i class="fa-solid fa-bolt"></i> Điện</span> <strong>3.5k / số</strong></li>
                        <li><span style="color:#64748b;"><i class="fa-solid fa-droplet"></i> Nước</span> <strong>100k / tháng</strong></li>
                        <li><span style="color:#64748b;"><i class="fa-solid fa-trash"></i> Rác sinh hoạt</span> <strong>50k / tháng</strong></li>
                    </ul>
                    <div style="display:flex; gap:10px; margin-top:20px;">
                        <button class="book-btn" style="flex:1;" onclick="sendRentalRequest(${room.id})">Gửi Yêu Cầu Thuê</button>
                        <button class="save-btn" onclick="toggleSaveRoom(${room.id})" id="save-room-btn-${room.id}" style="padding: 12px 20px; border-radius: 8px; border: 1px solid #cbd5e1; background: white; cursor:pointer; font-weight:600; color: #ef4444;">
                            <i class="${savedRooms.includes(room.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                    </div>
                    <div style="margin-top:15px;">
                        <button onclick="reportScam(${room.id})" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ef4444; background:#fef2f2; color:#ef4444; font-weight:600; cursor:pointer;">
                            <i class="fa-solid fa-flag"></i> Cắm cờ lừa đảo
                        </button>
                    </div>

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

    L.tileLayer('https://mt1.google.com/vt/lyrs=m&hl=vi&x={x}&y={y}&z={z}', {
        attribution: '© Google Maps'
    }).addTo(map);

    var ptitIcon = L.icon({ iconUrl: 'https://img.icons8.com/color/48/university.png', iconSize: [40, 40] });
    L.marker([ptitLat, ptitLng], {icon: ptitIcon}).addTo(map).bindPopup("<b>Học viện Công nghệ Bưu chính Viễn thông (PTIT)</b>");

    currentRooms = sortVerifiedFirst([...mockRooms]);
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

// --- TÍNH NĂNG MỚI (TÌM KIẾM, LỌC, LƯU PHÒNG) ---

function removeVietnameseTones(str) {
    if (!str) return "";
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function handleSearch() {
    const rawKeyword = document.getElementById("main-search-input").value;
    const keyword = removeVietnameseTones(rawKeyword).toLowerCase().trim();
    
    currentRooms = mockRooms.filter(r => {
        const titleNormalized = removeVietnameseTones(r.title).toLowerCase();
        const addressNormalized = removeVietnameseTones(r.address).toLowerCase();
        return titleNormalized.includes(keyword) || addressNormalized.includes(keyword);
    });
    
    renderHomeList(currentRooms);
    renderMapMarkers(currentRooms);
}


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

function handleFilter(type) {
    // Reset active buttons
    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${type}`).classList.add('active');

    if (type === 'all') {
        currentRooms = sortVerifiedFirst([...mockRooms]);
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

function focusOnMap(lat, lng) {
    closeModal('detail-modal');
    map.setView([lat, lng], 17);
}

function sendRentalRequest(roomId) {
    requestingRoomId = roomId;
    closeModal('detail-modal');
    document.getElementById('request-modal').classList.remove('hidden');
}

function submitRentalRequest() {
    const phone = document.getElementById('req-phone').value;
    if(!phone) { alert('Vui lòng nhập số điện thoại'); return; }
    alert("Thành công! Yêu cầu thuê phòng của bạn đã được gửi đến hệ thống an toàn của MyRentPlace.\nChủ nhà sẽ liên hệ với bạn qua SĐT " + phone + " trong vòng 24h tới để sắp xếp lịch xem nhà thực tế.");
    closeModal('request-modal');
    document.getElementById('req-phone').value = '';
    document.getElementById('req-msg').value = '';
}


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


// Close modal when clicking outside overlay
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.add('hidden');
    }
});
