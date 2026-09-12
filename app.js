// --- DỮ LIỆU GIẢ LẬP (MOCK DATA) ---
const mockRooms = [
    {
        id: 1, price: "1,800,000đ", title: "Phòng trọ tiện nghi tại Triều Khúc",
        distance: "1.5km từ PTIT", img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.1, address: "Triều Khúc, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "02/09/2026",
        lat: 20.9782, lng: 105.7985,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 2, price: "2,200,000đ", title: "Phòng trọ tiện nghi tại Mỗ Lao",
        distance: "1.2km từ PTIT", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.2, address: "Mỗ Lao, Hà Đông",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "03/09/2026",
        lat: 20.9855, lng: 105.7865,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 3, price: "1,500,000đ", title: "Phòng trọ tiện nghi tại Yên Xá",
        distance: "1.8km từ PTIT", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.3, address: "Yên Xá, Tân Triều",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "04/09/2026",
        lat: 20.9705, lng: 105.7925,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 4, price: "2,500,000đ", title: "Phòng trọ tiện nghi tại Văn Quán",
        distance: "1km từ PTIT", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.4, address: "Văn Quán, Hà Đông",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "05/09/2026",
        lat: 20.9755, lng: 105.7905,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 5, price: "3,500,000đ", title: "Phòng trọ tiện nghi tại Xa La",
        distance: "2km từ PTIT", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.5, address: "Xa La, Hà Đông",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "06/09/2026",
        lat: 20.9652, lng: 105.7932,
        verifiedBy: "Công an Phường"
    },
    {
        id: 6, price: "3,000,000đ", title: "Phòng trọ tiện nghi tại Phùng Khoang",
        distance: "2.5km từ PTIT", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.6, address: "Phùng Khoang, Nam Từ Liêm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "07/09/2026",
        lat: 20.9868, lng: 105.7948,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 7, price: "2,800,000đ", title: "Phòng trọ tiện nghi tại Thượng Đình",
        distance: "3.5km từ PTIT", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.7, address: "Thượng Đình, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "08/09/2026",
        lat: 20.9945, lng: 105.8115,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 8, price: "2,500,000đ", title: "Phòng trọ tiện nghi tại Khương Trung",
        distance: "4km từ PTIT", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.8, address: "Khương Trung, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "09/09/2026",
        lat: 21.0015, lng: 105.817,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 9, price: "2,000,000đ", title: "Phòng trọ tiện nghi tại Thanh Xuân Bắc",
        distance: "3km từ PTIT", img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.9, address: "Thanh Xuân Bắc, Thanh Xuân",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "10/09/2026",
        lat: 20.9902, lng: 105.8055,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 10, price: "2,800,000đ", title: "Phòng trọ tiện nghi tại Chùa Láng",
        distance: "6km từ PTIT", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.0, address: "Chùa Láng, Đống Đa",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "11/09/2026",
        lat: 21.0235, lng: 105.8005,
        verifiedBy: "Công an Phường"
    },
    {
        id: 11, price: "3,200,000đ", title: "Phòng trọ tiện nghi tại Thái Hà",
        distance: "5.5km từ PTIT", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.1, address: "Thái Hà, Đống Đa",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "12/09/2026",
        lat: 21.011, lng: 105.8235,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 12, price: "4,000,000đ", title: "Phòng trọ tiện nghi tại Xã Đàn",
        distance: "6.2km từ PTIT", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.2, address: "Xã Đàn, Đống Đa",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "13/09/2026",
        lat: 21.0185, lng: 105.829,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 13, price: "3,500,000đ", title: "Phòng trọ tiện nghi tại Cát Linh",
        distance: "7km từ PTIT", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.3, address: "Cát Linh, Đống Đa",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "14/09/2026",
        lat: 21.028, lng: 105.825,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 14, price: "3,200,000đ", title: "Phòng trọ tiện nghi tại Dịch Vọng Hậu",
        distance: "7.5km từ PTIT", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.4, address: "Dịch Vọng Hậu, Cầu Giấy",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "15/09/2026",
        lat: 21.0365, lng: 105.785,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 15, price: "2,600,000đ", title: "Phòng trọ tiện nghi tại Nghĩa Tân",
        distance: "8.5km từ PTIT", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.5, address: "Nghĩa Tân, Cầu Giấy",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "16/09/2026",
        lat: 21.045, lng: 105.7955,
        verifiedBy: "Công an Phường"
    },
    {
        id: 16, price: "3,800,000đ", title: "Phòng trọ tiện nghi tại Yên Hòa",
        distance: "6.5km từ PTIT", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.6, address: "Yên Hòa, Cầu Giấy",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "17/09/2026",
        lat: 21.0205, lng: 105.79,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 17, price: "2,900,000đ", title: "Phòng trọ tiện nghi tại Quan Hoa",
        distance: "7.2km từ PTIT", img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.7, address: "Quan Hoa, Cầu Giấy",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "18/09/2026",
        lat: 21.0325, lng: 105.7985,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 18, price: "2,000,000đ", title: "Phòng trọ tiện nghi tại Tạ Quang Bửu",
        distance: "8km từ PTIT", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.8, address: "Tạ Quang Bửu, Hai Bà Trưng",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "19/09/2026",
        lat: 21.0055, lng: 105.845,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 19, price: "3,500,000đ", title: "Phòng trọ tiện nghi tại Minh Khai",
        distance: "9km từ PTIT", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.9, address: "Minh Khai, Hai Bà Trưng",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "20/09/2026",
        lat: 20.9985, lng: 105.8555,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 20, price: "4,200,000đ", title: "Phòng trọ tiện nghi tại Lò Đúc",
        distance: "9.5km từ PTIT", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.0, address: "Lò Đúc, Hai Bà Trưng",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "21/09/2026",
        lat: 21.015, lng: 105.85,
        verifiedBy: "Công an Phường"
    },
    {
        id: 21, price: "5,500,000đ", title: "Phòng trọ tiện nghi tại Phố Cổ",
        distance: "10km từ PTIT", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.1, address: "Phố Cổ, Hoàn Kiếm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "22/09/2026",
        lat: 21.0305, lng: 105.8525,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 22, price: "4,800,000đ", title: "Phòng trọ tiện nghi tại Tràng Thi",
        distance: "9.8km từ PTIT", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.2, address: "Tràng Thi, Hoàn Kiếm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "23/09/2026",
        lat: 21.0245, lng: 105.85,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 23, price: "4,500,000đ", title: "Phòng trọ tiện nghi tại Xuân La",
        distance: "9km từ PTIT", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.3, address: "Xuân La, Tây Hồ",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "24/09/2026",
        lat: 21.056, lng: 105.805,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 24, price: "6,000,000đ", title: "Phòng trọ tiện nghi tại Quảng An",
        distance: "11km từ PTIT", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.4, address: "Quảng An, Tây Hồ",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "25/09/2026",
        lat: 21.0755, lng: 105.82,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 25, price: "3,000,000đ", title: "Phòng trọ tiện nghi tại Đội Cấn",
        distance: "8.5km từ PTIT", img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.5, address: "Đội Cấn, Ba Đình",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "26/09/2026",
        lat: 21.0355, lng: 105.818,
        verifiedBy: "Công an Phường"
    },
    {
        id: 26, price: "3,600,000đ", title: "Phòng trọ tiện nghi tại Kim Mã",
        distance: "8.8km từ PTIT", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.6, address: "Kim Mã, Ba Đình",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "27/09/2026",
        lat: 21.0425, lng: 105.83,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 27, price: "1,700,000đ", title: "Phòng trọ tiện nghi tại Giải Phóng",
        distance: "7km từ PTIT", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.7, address: "Giải Phóng, Hoàng Mai",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "28/09/2026",
        lat: 20.981, lng: 105.847,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 28, price: "2,100,000đ", title: "Phòng trọ tiện nghi tại Lĩnh Nam",
        distance: "8.5km từ PTIT", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.8, address: "Lĩnh Nam, Hoàng Mai",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "01/09/2026",
        lat: 20.9655, lng: 105.845,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 29, price: "2,400,000đ", title: "Phòng trọ tiện nghi tại Ngọc Lâm",
        distance: "12km từ PTIT", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.9, address: "Ngọc Lâm, Long Biên",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "02/09/2026",
        lat: 21.045, lng: 105.8755,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 30, price: "3,500,000đ", title: "Phòng trọ tiện nghi tại Aeon Mall",
        distance: "13km từ PTIT", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.0, address: "Aeon Mall, Long Biên",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "03/09/2026",
        lat: 21.0305, lng: 105.885,
        verifiedBy: "Công an Phường"
    },
    {
        id: 31, price: "3,200,000đ", title: "Phòng trọ tiện nghi tại Tây Mỗ",
        distance: "8.5km từ PTIT", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.1, address: "Tây Mỗ, Nam Từ Liêm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "04/09/2026",
        lat: 21.0035, lng: 105.744,
        verifiedBy: "Đoàn Thanh niên"
    },
    {
        id: 32, price: "2,800,000đ", title: "Phòng trọ tiện nghi tại Mỹ Đình",
        distance: "9.5km từ PTIT", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.2, address: "Mỹ Đình, Nam Từ Liêm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "05/09/2026",
        lat: 21.0345, lng: 105.765,
        verifiedBy: "Hội Sinh viên Hà Nội"
    },
    {
        id: 33, price: "1,800,000đ", title: "Phòng trọ tiện nghi tại Phú Đô",
        distance: "6.5km từ PTIT", img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.3, address: "Phú Đô, Nam Từ Liêm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "06/09/2026",
        lat: 21.0105, lng: 105.768,
        verifiedBy: "Ban Quản lý khu phố"
    },
    {
        id: 34, price: "2,500,000đ", title: "Phòng trọ tiện nghi tại Đa Tốn",
        distance: "15km từ PTIT", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.4, address: "Đa Tốn, Gia Lâm",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "07/09/2026",
        lat: 20.9995, lng: 105.9325,
        verifiedBy: "Cộng đồng MyRentPlace"
    },
    {
        id: 35, price: "1,500,000đ", title: "Phòng trọ tiện nghi tại Đông Anh",
        distance: "18km từ PTIT", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400&h=250",
        rating: 4.5, address: "Đông Anh, Hà Nội",
        elec: "3,500đ", water: "100k", internet: "Miễn phí", verifiedDate: "08/09/2026",
        lat: 21.1405, lng: 105.845,
        verifiedBy: "Công an Phường"
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

    L.tileLayer('https://mt1.google.com/vt/lyrs=m&hl=vi&x={x}&y={y}&z={z}', {
        attribution: '© Google Maps'
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
