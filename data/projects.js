const PROJ_DATA = {
    'one-era': {
      name: 'ONE ERA',
      sub: 'Khu đô thị kiểu mẫu thế hệ mới — Thượng Đông TP.HCM',
      tabs: [
        { label: 'Tổng quan', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Chủ đầu tư</div><div class="info-val">Kim Oanh Group</div></div>
            <div class="info-item"><div class="info-lbl">Vị trí</div><div class="info-val">Thượng Đông, TP.HCM</div></div>
            <div class="info-item"><div class="info-lbl">Loại hình</div><div class="info-val">Khu đô thị tích hợp</div></div>
            <div class="info-item"><div class="info-lbl">Ra mắt</div><div class="info-val gold">2026</div></div>
            <div class="info-item"><div class="info-lbl">Tiêu chuẩn</div><div class="info-val">Smart City · Công nghệ xanh</div></div>
            <div class="info-item"><div class="info-lbl">Giá</div><div class="info-val gold">Liên hệ nhận báo giá</div></div>
          </div>
          <div class="sect-title">Điểm nổi bật</div>
          <ul class="ul-list">
            <li>Dự án trọng điểm 2026 của Kim Oanh Group tại cửa ngõ phía Đông TP.HCM</li>
            <li>Tích hợp Smart City — quản lý thông minh, an ninh AI, năng lượng xanh</li>
            <li>Quy hoạch 1/500 được phê duyệt, hạ tầng đồng bộ kết nối đa tuyến</li>
            <li>Kết nối Vành đai 3, cao tốc Long Thành – Dầu Giây, Metro số 1</li>
            <li>Đa dạng sản phẩm: nhà phố, villa đơn lập, căn hộ cao cấp</li>
          </ul>` },
        { label: 'Vị trí', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Khu vực</div><div class="info-val">Thượng Đông, TP.HCM</div></div>
            <div class="info-item"><div class="info-lbl">Tân Sơn Nhất</div><div class="info-val">~25 km</div></div>
            <div class="info-item"><div class="info-lbl">Cảng Cát Lái</div><div class="info-val">~10 km</div></div>
            <div class="info-item"><div class="info-lbl">Trung tâm TP.HCM</div><div class="info-val">~15 km</div></div>
          </div>
          <div class="sect-title">Hạ tầng kết nối</div>
          <ul class="ul-list">
            <li>Vành đai 3 TP.HCM — liên thông toàn vùng kinh tế trọng điểm phía Nam</li>
            <li>Cao tốc Long Thành – Dầu Giây — kết nối sân bay quốc tế tương lai</li>
            <li>Metro số 1 (Bến Thành – Suối Tiên) — đô thị TOD đang hình thành</li>
            <li>QL1A và Đại lộ Võ Văn Kiệt mở rộng dễ dàng vào nội thành</li>
          </ul>
          <div class="sect-title">Tiện ích ngoại khu</div>
          <ul class="ul-list">
            <li>Khu Công nghệ cao TP.HCM (SHTP), Đại học Quốc gia TP.HCM</li>
            <li>AEON Mall, Vincom, trung tâm thương mại hiện hữu</li>
            <li>Bệnh viện Ung Bướu cơ sở 2, bệnh viện Thủ Đức</li>
          </ul>` },
        { label: 'Tiện ích', html: `
          <div class="sect-title">Nội khu</div>
          <ul class="ul-list">
            <li>Công viên trung tâm, hồ cảnh quan xanh mát</li>
            <li>Trường học quốc tế, nhà trẻ, trung tâm giáo dục</li>
            <li>Bệnh viện, phòng khám đa khoa nội khu</li>
            <li>Trung tâm thương mại, shophouse tầng 1 sầm uất</li>
            <li>Gym, spa, bể bơi, sân thể thao đa năng</li>
            <li>Khu vui chơi trẻ em, BBQ garden, café cộng đồng</li>
          </ul>
          <div class="sect-title">Hạ tầng thông minh</div>
          <ul class="ul-list">
            <li>Smart home — điều khiển toàn bộ qua ứng dụng di động</li>
            <li>Camera AI, kiểm soát ra vào bằng nhận dạng khuôn mặt</li>
            <li>Điện mặt trời, hệ thống xử lý nước tái sinh tuần hoàn</li>
            <li>Cáp quang FTTH, hạ tầng 5G sẵn sàng, EV charging station</li>
          </ul>` },
        { label: 'Sản phẩm', html: `
          <div class="sect-title">Loại hình</div>
          <div class="m-tag-list">
            <span class="mtag-item">Nhà phố thương mại</span>
            <span class="mtag-item">Villa đơn lập</span>
            <span class="mtag-item">Villa song lập</span>
            <span class="mtag-item">Căn hộ cao cấp</span>
          </div>
          <div class="sect-title">Đặc điểm</div>
          <ul class="ul-list">
            <li>Nhà phố: mặt tiền 5–7m, 4–5 tầng, tích hợp thương mại tầng 1</li>
            <li>Villa đơn lập: 200–400m², sân vườn riêng, hồ bơi tùy chọn</li>
            <li>Căn hộ: Studio đến 3PN, tầm nhìn toàn khu đô thị</li>
            <li>Thiết kế kiến trúc hiện đại, vật liệu cao cấp nhập khẩu</li>
            <li>Bàn giao thô hoàn thiện ngoài theo tiêu chuẩn chủ đầu tư</li>
          </ul>` },
        { label: 'Giá / PTTT', html: `
          <div class="price-hero">
            <div class="ph-from">Giá bán</div>
            <div class="ph-val">Liên hệ</div>
            <div class="ph-unit">Nhận báo giá chi tiết theo từng phân khu & loại sản phẩm</div>
          </div>
          <div class="sect-title">Phương thức thanh toán</div>
          <ul class="ul-list">
            <li>Thanh toán theo tiến độ xây dựng — linh hoạt dòng tiền</li>
            <li>Vay ngân hàng lên đến 70% giá trị bất động sản</li>
            <li>Thời hạn vay tối đa 25 năm (300 tháng)</li>
            <li>Lãi suất ưu đãi giai đoạn đầu — liên hệ tư vấn cụ thể</li>
          </ul>
          <div class="sect-title">Ngân hàng hỗ trợ</div>
          <div class="m-tag-list">
            <span class="mtag-item">OCB</span>
            <span class="mtag-item">Eximbank</span>
            <span class="mtag-item">Vietcombank</span>
            <span class="mtag-item">Sacombank</span>
          </div>` },
        { label: 'Pháp lý', html: `
          <div class="sect-title">Hồ sơ pháp lý</div>
          <ul class="ul-list">
            <li>Quyết định chấp thuận chủ trương đầu tư từ UBND TP.HCM</li>
            <li>Quy hoạch chi tiết 1/500 được phê duyệt</li>
            <li>Giấy phép xây dựng từng phân khu đang hoàn thiện theo tiến độ</li>
            <li>Sổ đỏ / sổ hồng cấp cho từng sản phẩm sau bàn giao</li>
          </ul>
          <div class="sect-title">Cam kết</div>
          <ul class="ul-list">
            <li>Pháp lý minh bạch — đầy đủ hồ sơ trước khi mở bán từng phân khu</li>
            <li>Hợp đồng mua bán công chứng theo đúng quy định pháp luật</li>
            <li>Bảo lãnh ngân hàng đảm bảo bàn giao đúng tiến độ cam kết</li>
          </ul>` },
        { label: 'Giá trị tương lai', html: `
          <div class="sect-title">Động lực tăng giá</div>
          <ul class="ul-list">
            <li>Thượng Đông là khu vực quy hoạch trọng điểm, hàng loạt hạ tầng lớn đang triển khai</li>
            <li>Vành đai 3 hoàn thành 2026–2027 — kết nối liên vùng, đẩy giá bất động sản tăng mạnh</li>
            <li>Metro số 1 vận hành — làn sóng đô thị hóa TOD tại Thủ Đức và Đông TP.HCM</li>
            <li>Nhu cầu nhà ở tại TP.HCM luôn vượt cung — tỷ lệ hấp thụ cao, thanh khoản tốt</li>
          </ul>
          <div class="sect-title">Tiềm năng đầu tư</div>
          <ul class="ul-list">
            <li>Khu đô thị tích hợp — giá trị tăng trưởng từ toàn bộ hệ sinh thái</li>
            <li>Cho thuê ngắn hạn / dài hạn với nhu cầu cao từ chuyên gia nước ngoài</li>
            <li>TP.HCM luôn là điểm đến hàng đầu của nhà đầu tư bất động sản Việt Nam</li>
          </ul>` }
      ]
    },
    'century-city': {
      name: 'Century City',
      sub: 'Đất nền sổ đỏ — 2km sân bay Long Thành — Long Thành, Đồng Nai',
      tabs: [
        { label: 'Tổng quan', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Chủ đầu tư</div><div class="info-val">Kim Oanh Group</div></div>
            <div class="info-item"><div class="info-lbl">Vị trí</div><div class="info-val">Bình Sơn, Long Thành, Đồng Nai</div></div>
            <div class="info-item"><div class="info-lbl">Tổng nền</div><div class="info-val">509 nền</div></div>
            <div class="info-item"><div class="info-lbl">Diện tích nền</div><div class="info-val">80 – 100 m²</div></div>
            <div class="info-item"><div class="info-lbl">Hạ tầng</div><div class="info-val gold">Hoàn thiện 95%</div></div>
            <div class="info-item"><div class="info-lbl">Pháp lý</div><div class="info-val gold">Sổ đỏ riêng từng nền</div></div>
          </div>
          <div class="sect-title">Điểm nổi bật</div>
          <ul class="ul-list">
            <li>Chỉ 2km từ sân bay quốc tế Long Thành — "tọa độ vàng" ven sân bay</li>
            <li>Hạ tầng hoàn thiện 95% — mua xong xây ngay, không chờ đợi</li>
            <li>50+ tiện ích nội khu, đường nội bộ 10–12m</li>
            <li>Đặt cọc chỉ 50tr ưu tiên chọn lô, vay NH 70% × 25 năm</li>
          </ul>` },
        { label: 'Vị trí', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Sân bay Long Thành</div><div class="info-val gold">2 km</div></div>
            <div class="info-item"><div class="info-lbl">TP.HCM (Q.1)</div><div class="info-val">~40 km</div></div>
            <div class="info-item"><div class="info-lbl">Cảng Phước An</div><div class="info-val">~15 km</div></div>
            <div class="info-item"><div class="info-lbl">QL51 – Vũng Tàu</div><div class="info-val">Tiếp giáp</div></div>
          </div>
          <div class="sect-title">Kết nối</div>
          <ul class="ul-list">
            <li>Tỉnh lộ 769 — huyết mạch kết nối sân bay Long Thành với QL51</li>
            <li>Cao tốc TP.HCM – Long Thành – Dầu Giây chỉ 5 phút lái xe</li>
            <li>QL51 kết nối Bà Rịa – Vũng Tàu, cụm cảng biển Phú Mỹ</li>
            <li>Cầu Phước An tương lai — rút ngắn kết nối toàn vùng cảng</li>
          </ul>
          <div class="sect-title">Xung quanh</div>
          <ul class="ul-list">
            <li>KCN Long Thành, KCN Gò Dầu — hàng chục nghìn lao động kỹ thuật</li>
            <li>Khu đô thị sân bay Long Thành quy hoạch 10.000ha đang hình thành</li>
            <li>Trường học, bệnh viện, TTTM Long Thành đang phát triển nhanh</li>
          </ul>` },
        { label: 'Tiện ích', html: `
          <div class="sect-title">50+ tiện ích nội khu</div>
          <ul class="ul-list">
            <li>Công viên trung tâm, hồ cảnh quan điều hòa không khí</li>
            <li>Vườn hoa, lối đi bộ, đường chạy bộ chiếu sáng ban đêm</li>
            <li>Trường mầm non, tiểu học nội khu</li>
            <li>Khu thể thao đa năng, sân tennis, cầu lông</li>
            <li>Khu thương mại, chợ dân sinh, siêu thị tiện lợi</li>
            <li>Nhà cộng đồng, khu sinh hoạt văn hóa khu dân cư</li>
          </ul>
          <div class="sect-title">Hạ tầng kỹ thuật</div>
          <ul class="ul-list">
            <li>Đường nội khu 10–12m, vỉa hè cây xanh hai bên</li>
            <li>Điện, nước, thoát nước đồng bộ, ngầm hóa điện toàn khu</li>
            <li>Cáp quang FTTH đến từng nền, camera an ninh 24/7</li>
          </ul>` },
        { label: 'Sản phẩm', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Tổng số nền</div><div class="info-val">509 nền</div></div>
            <div class="info-item"><div class="info-lbl">Diện tích</div><div class="info-val">80 – 100 m²</div></div>
            <div class="info-item"><div class="info-lbl">Kích thước</div><div class="info-val">5×16m / 5×20m</div></div>
            <div class="info-item"><div class="info-lbl">Pháp lý</div><div class="info-val gold">Sổ đỏ riêng</div></div>
          </div>
          <div class="sect-title">Quy định xây dựng</div>
          <ul class="ul-list">
            <li>Xây tự do theo quy hoạch được duyệt</li>
            <li>Mật độ xây dựng tối đa 80%, số tầng tối đa 4 tầng + tum</li>
            <li>Giấy phép xây dựng cấp trong 30 ngày kể từ khi có sổ đỏ</li>
          </ul>` },
        { label: 'Giá / PTTT', html: `
          <div class="price-hero">
            <div class="ph-from">Giá từ</div>
            <div class="ph-val">16,8 triệu/m²</div>
            <div class="ph-unit">Tương đương từ ~1,34 tỷ/nền 80m²</div>
          </div>
          <div class="sect-title">Phương thức thanh toán</div>
          <ul class="ul-list">
            <li>Đặt cọc giữ chỗ: 50 triệu — ưu tiên chọn lô theo thứ tự</li>
            <li>Thanh toán 30% khi ký hợp đồng mua bán</li>
            <li>Phần còn lại theo tiến độ cho đến khi nhận sổ</li>
            <li>Vay ngân hàng: 70% trong 25 năm (300 tháng)</li>
          </ul>
          <div class="sect-title">Ngân hàng hỗ trợ</div>
          <div class="m-tag-list">
            <span class="mtag-item">OCB</span>
            <span class="mtag-item">Eximbank</span>
            <span class="mtag-item">Vietcombank</span>
            <span class="mtag-item">Sacombank</span>
          </div>` },
        { label: 'Pháp lý', html: `
          <div class="sect-title">Hồ sơ pháp lý</div>
          <ul class="ul-list">
            <li>Sổ đỏ riêng từng nền — quyền sử dụng đất lâu dài</li>
            <li>Quy hoạch 1/500 được UBND tỉnh Đồng Nai phê duyệt</li>
            <li>Giấy phép xây dựng cấp trong 30 ngày sau khi có sổ đỏ</li>
            <li>Hợp đồng công chứng tại phòng công chứng nhà nước</li>
          </ul>
          <div class="sect-title">Cam kết</div>
          <ul class="ul-list">
            <li>Không có tranh chấp, không thế chấp ngân hàng</li>
            <li>Bảo lãnh ngân hàng đảm bảo tiến độ bàn giao sổ đỏ</li>
            <li>Hỗ trợ hoàn tất thủ tục đăng ký biến động tại địa phương</li>
          </ul>` },
        { label: 'Giá trị tương lai', html: `
          <div class="sect-title">Catalyst tăng giá</div>
          <ul class="ul-list">
            <li>Sân bay quốc tế Long Thành hoàn thành giai đoạn 1 (2026) — 25 triệu khách/năm</li>
            <li>Cụm đô thị sân bay Long Thành 10.000ha — quy hoạch trọng điểm quốc gia</li>
            <li>Cầu Phước An và đường vành đai liên vùng đang thi công</li>
            <li>FDI đổ vào Đồng Nai mạnh nhất cả nước — nhu cầu nhà ở, dịch vụ bùng nổ</li>
          </ul>
          <div class="sect-title">Tiềm năng sinh lời</div>
          <ul class="ul-list">
            <li>Giá đất Long Thành tăng 3–5 lần trong 5 năm qua, xu hướng tiếp tục</li>
            <li>Khu vực 2km sân bay: tiềm năng khách sạn, căn hộ dịch vụ, thương mại cao</li>
            <li>Dự kiến cho thuê mặt bằng 15–30 triệu/tháng khi sân bay đi vào hoạt động</li>
          </ul>` }
      ]
    },
    'legacy-central': {
      name: 'Legacy Central',
      sub: 'Căn hộ cao cấp 2 block 29 tầng — Thuận An, Bình Dương',
      tabs: [
        { label: 'Tổng quan', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Chủ đầu tư</div><div class="info-val">Kim Oanh Group</div></div>
            <div class="info-item"><div class="info-lbl">Vị trí</div><div class="info-val">Thuận Giao, Thuận An, Bình Dương</div></div>
            <div class="info-item"><div class="info-lbl">Quy mô</div><div class="info-val">1.802 căn hộ & shophouse</div></div>
            <div class="info-item"><div class="info-lbl">Tổng thầu</div><div class="info-val">Hòa Bình Corporation</div></div>
            <div class="info-item"><div class="info-lbl">Quản lý vận hành</div><div class="info-val">SAVISTA</div></div>
            <div class="info-item"><div class="info-lbl">Bàn giao QSD đất</div><div class="info-val gold">9/2025</div></div>
          </div>
          <div class="sect-title">Điểm nổi bật</div>
          <ul class="ul-list">
            <li>2 block 29 tầng + 1 hầm — biểu tượng cao tầng trên Bình Dương Boulevard</li>
            <li>Tổng thầu Hòa Bình Corporation — chất lượng xây dựng đẳng cấp, đúng tiến độ</li>
            <li>Quản lý vận hành SAVISTA — tiêu chuẩn 5 sao, an ninh 24/7</li>
            <li>Bàn giao quyền sử dụng đất 9/2025 — hoàn thiện pháp lý, an tâm đầu tư</li>
          </ul>` },
        { label: 'Vị trí', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Mặt tiền</div><div class="info-val gold">Bình Dương Boulevard</div></div>
            <div class="info-item"><div class="info-lbl">TP.HCM (Q. Bình Thạnh)</div><div class="info-val">~15 km</div></div>
            <div class="info-item"><div class="info-lbl">Thủ Đức (TP.HCM)</div><div class="info-val">~5 km</div></div>
            <div class="info-item"><div class="info-lbl">Trung tâm Bình Dương</div><div class="info-val">~12 km</div></div>
          </div>
          <div class="sect-title">Kết nối</div>
          <ul class="ul-list">
            <li>Bình Dương Boulevard (QL13 mở rộng 8 làn) — trục chính đô thị Bình Dương</li>
            <li>Vành đai 3 TP.HCM — kết nối liên tỉnh, giảm tải QL13</li>
            <li>Cao tốc TP.HCM – Thủ Dầu Một – Chơn Thành (đang thi công)</li>
          </ul>
          <div class="sect-title">Xung quanh</div>
          <ul class="ul-list">
            <li>VSIP I, KCN Thuận An — 100.000+ lao động kỹ thuật cao và chuyên gia FDI</li>
            <li>AEON Mall Bình Dương, Becamex Tower, Big C Thuận An</li>
            <li>Bệnh viện Hạnh Phúc, bệnh viện Thuận An, Đại học Thủ Dầu Một</li>
          </ul>` },
        { label: 'Tiện ích', html: `
          <div class="sect-title">Tiện ích nội khu</div>
          <ul class="ul-list">
            <li>Hồ bơi vô cực tầng đế — view toàn Bình Dương Boulevard</li>
            <li>Gym hiện đại, yoga room, spa thư giãn</li>
            <li>Khu vui chơi trẻ em có mái che, BBQ garden cộng đồng</li>
            <li>Shophouse tầng 1: cafe, nhà hàng, siêu thị, tiệm giặt</li>
            <li>Sảnh đón tiêu chuẩn khách sạn, hành lang rộng thoáng</li>
          </ul>
          <div class="sect-title">Dịch vụ vận hành</div>
          <ul class="ul-list">
            <li>SAVISTA quản lý — đơn vị hàng đầu Việt Nam</li>
            <li>Bảo vệ 24/7, camera AI toàn bộ khu vực chung</li>
            <li>Thang máy tốc độ cao, hệ thống PCCC tự động</li>
            <li>Hầm để xe an toàn, có mái che toàn bộ</li>
          </ul>` },
        { label: 'Sản phẩm', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Studio (~30–40m²)</div><div class="info-val gold">Từ 890 triệu</div></div>
            <div class="info-item"><div class="info-lbl">1 phòng ngủ (~50m²)</div><div class="info-val gold">Từ 990 triệu</div></div>
            <div class="info-item"><div class="info-lbl">2 phòng ngủ (~70–75m²)</div><div class="info-val gold">Từ 1,39 tỷ</div></div>
            <div class="info-item"><div class="info-lbl">Shophouse tầng 1</div><div class="info-val">Liên hệ</div></div>
          </div>
          <div class="sect-title">Đặc điểm</div>
          <ul class="ul-list">
            <li>2 block tháp 29 tầng — thiết kế hiện đại, biểu tượng tầm nhìn</li>
            <li>Ban công thoáng — view Bình Dương Boulevard hoặc nội khu</li>
            <li>Nội thất cao cấp, sàn gỗ, trần thạch cao hoàn thiện</li>
            <li>Hệ thống điều hòa, thông gió thông minh từng căn</li>
          </ul>` },
        { label: 'Giá / PTTT', html: `
          <div class="price-hero">
            <div class="ph-from">Studio từ</div>
            <div class="ph-val">890 triệu</div>
            <div class="ph-unit">1PN từ 990tr · 2PN từ 1,39 tỷ</div>
          </div>
          <div class="sect-title">Phương thức thanh toán</div>
          <ul class="ul-list">
            <li>Đặt cọc 50 triệu giữ chỗ</li>
            <li>Ký HĐMB: 30% giá trị</li>
            <li>Thanh toán theo tiến độ linh hoạt — phù hợp mọi dòng tiền</li>
            <li>Vay ngân hàng 80% trong 25 năm</li>
          </ul>
          <div class="sect-title">Ưu đãi</div>
          <ul class="ul-list">
            <li>Gói nội thất hoàn thiện 40 triệu tặng kèm</li>
            <li>Cam kết thuê lại 4–6 triệu/tháng trong 12 tháng đầu</li>
            <li>Chiết khấu thanh toán sớm theo chính sách hiện hành</li>
          </ul>
          <div class="sect-title">Ngân hàng hỗ trợ</div>
          <div class="m-tag-list">
            <span class="mtag-item">OCB</span>
            <span class="mtag-item">Sacombank</span>
            <span class="mtag-item">Biconsi</span>
            <span class="mtag-item">Vietcombank</span>
          </div>` },
        { label: 'Pháp lý', html: `
          <div class="sect-title">Hồ sơ pháp lý</div>
          <ul class="ul-list">
            <li>Giấy phép xây dựng đầy đủ từ UBND tỉnh Bình Dương</li>
            <li>Bàn giao quyền sử dụng đất 9/2025 — đã thực hiện</li>
            <li>Sổ hồng căn hộ cấp sau bàn giao trong vòng 12 tháng</li>
            <li>Hợp đồng mua bán công chứng tại phòng công chứng nhà nước</li>
          </ul>
          <div class="sect-title">Bảo lãnh & Cam kết</div>
          <ul class="ul-list">
            <li>Bảo lãnh ngân hàng bảo đảm tiến độ bàn giao</li>
            <li>Chủ đầu tư cam kết hoàn tiền nếu chậm bàn giao quá 180 ngày</li>
          </ul>` },
        { label: 'Giá trị tương lai', html: `
          <div class="sect-title">Tiềm năng cho thuê</div>
          <ul class="ul-list">
            <li>VSIP I, KCN Thuận An — 100.000+ lao động kỹ thuật cao và chuyên gia nước ngoài</li>
            <li>Nhu cầu thuê căn hộ 1–2PN: 5–9 triệu/tháng (thị trường hiện tại)</li>
            <li>Cam kết thuê lại 4–6 triệu/tháng — rủi ro thấp cho nhà đầu tư</li>
          </ul>
          <div class="sect-title">Tăng giá trị</div>
          <ul class="ul-list">
            <li>Thuận An đang quy hoạch lên đô thị loại I — tăng giá mạnh</li>
            <li>Giá căn hộ Bình Dương tăng 15–20%/năm liên tục 3 năm qua</li>
            <li>Vành đai 3 và cao tốc Chơn Thành — kết nối liên vùng cải thiện đáng kể</li>
            <li>Hạ tầng dày đặc: AEON Mall, bệnh viện, trường quốc tế sẵn có</li>
          </ul>` }
      ]
    },
    'golden-future-city': {
      name: 'Golden Future City',
      sub: 'Đất nền nhà phố thương mại — Bàu Bàng, Bình Dương',
      tabs: [
        { label: 'Tổng quan', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Chủ đầu tư</div><div class="info-val">Kim Oanh Group</div></div>
            <div class="info-item"><div class="info-lbl">Vị trí</div><div class="info-val">Lai Uyên, Bàu Bàng, Bình Dương</div></div>
            <div class="info-item"><div class="info-lbl">Quy mô</div><div class="info-val">8,1 ha — 509 nền</div></div>
            <div class="info-item"><div class="info-lbl">Loại hình</div><div class="info-val">Đất nền nhà phố thương mại</div></div>
            <div class="info-item"><div class="info-lbl">Diện tích</div><div class="info-val">70 – 120m² (5×14m – 5×18m)</div></div>
            <div class="info-item"><div class="info-lbl">Giá</div><div class="info-val gold">Từ 610 triệu/nền</div></div>
          </div>
          <div class="sect-title">Điểm nổi bật</div>
          <ul class="ul-list">
            <li>Sát Quốc lộ 13 — trục chính kết nối Bình Dương – Bình Phước</li>
            <li>Trung tâm KCN Bàu Bàng — 130+ doanh nghiệp FDI, 60.000+ công nhân</li>
            <li>Đường nội khu 13–20m — khu dân cư văn minh, thương mại sầm uất</li>
            <li>Vốn vào thấp nhất danh mục — tiềm năng tăng giá mạnh nhất</li>
          </ul>` },
        { label: 'Vị trí', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Quốc lộ 13</div><div class="info-val gold">Tiếp giáp</div></div>
            <div class="info-item"><div class="info-lbl">TP.HCM</div><div class="info-val">~50 km</div></div>
            <div class="info-item"><div class="info-lbl">Thủ Dầu Một (BD)</div><div class="info-val">~30 km</div></div>
            <div class="info-item"><div class="info-lbl">KCN Bàu Bàng</div><div class="info-val">Trung tâm</div></div>
          </div>
          <div class="sect-title">Kết nối</div>
          <ul class="ul-list">
            <li>QL13 (8 làn xe) — kết nối thẳng TP.HCM – Bình Dương – Bình Phước</li>
            <li>Cao tốc TP.HCM – Thủ Dầu Một – Chơn Thành (đang thi công)</li>
            <li>Đường ĐT741, ĐT744 kết nối các KCN lân cận</li>
          </ul>
          <div class="sect-title">Xung quanh</div>
          <ul class="ul-list">
            <li>KCN Bàu Bàng, VSIP III — 130 doanh nghiệp FDI từ Nhật, Hàn, Đài Loan</li>
            <li>KCN Bàu Bàng mở rộng 4.000ha (quy hoạch 2025–2030)</li>
            <li>Chợ Bàu Bàng, bệnh viện đa khoa huyện, trường THPT</li>
          </ul>` },
        { label: 'Tiện ích', html: `
          <div class="sect-title">Hạ tầng nội khu</div>
          <ul class="ul-list">
            <li>Đường trục chính 20m, đường nhánh 13–16m — thông thoáng, văn minh</li>
            <li>Vỉa hè cây xanh, hệ thống chiếu sáng đường phố toàn khu</li>
            <li>Điện, nước, thoát nước ngầm đồng bộ</li>
          </ul>
          <div class="sect-title">Tiện ích cộng đồng</div>
          <ul class="ul-list">
            <li>Công viên trung tâm 5.000m² — không gian xanh thư giãn</li>
            <li>Hồ cảnh quan điều hòa không khí tự nhiên</li>
            <li>Khu thể dục thể thao đa năng</li>
            <li>Trục thương mại dọc QL13 — cafe, nhà hàng, siêu thị, ngân hàng</li>
            <li>Trường mầm non, tiểu học trong bán kính 500m</li>
          </ul>` },
        { label: 'Sản phẩm', html: `
          <div class="info-grid">
            <div class="info-item"><div class="info-lbl">Tổng số nền</div><div class="info-val">509 nền</div></div>
            <div class="info-item"><div class="info-lbl">Tổng diện tích</div><div class="info-val">8,1 ha</div></div>
            <div class="info-item"><div class="info-lbl">Diện tích nền</div><div class="info-val">70m² – 120m²</div></div>
            <div class="info-item"><div class="info-lbl">Kích thước</div><div class="info-val">5×14m đến 5×18m</div></div>
          </div>
          <div class="sect-title">Quy định xây dựng</div>
          <ul class="ul-list">
            <li>Nhà phố thương mại — tầng 1 kinh doanh, tầng 2–4 nhà ở</li>
            <li>Số tầng tối đa 4 tầng theo quy hoạch, mật độ xây dựng tối đa 80%</li>
            <li>Xây dựng theo bản vẽ thiết kế được phê duyệt</li>
          </ul>` },
        { label: 'Giá / PTTT', html: `
          <div class="price-hero">
            <div class="ph-from">Giá từ</div>
            <div class="ph-val">610 triệu/nền</div>
            <div class="ph-unit">Nền 5×14m (70m²) — giá mềm nhất khu vực Bàu Bàng</div>
          </div>
          <div class="sect-title">Phương thức thanh toán</div>
          <ul class="ul-list">
            <li>Cọc 40% ký hợp đồng đặt cọc</li>
            <li>Thanh toán 40% khi ký hợp đồng mua bán</li>
            <li>Còn lại 20% khi nhận sổ đỏ</li>
            <li>Hỗ trợ vay ngân hàng 70% giá trị</li>
          </ul>
          <div class="sect-title">Ngân hàng hỗ trợ</div>
          <div class="m-tag-list">
            <span class="mtag-item">OCB</span>
            <span class="mtag-item">Sacombank</span>
            <span class="mtag-item">Biconsi</span>
            <span class="mtag-item">Phú Mỹ Lợi</span>
          </div>` },
        { label: 'Pháp lý', html: `
          <div class="sect-title">Hồ sơ pháp lý</div>
          <ul class="ul-list">
            <li>Quyết định quy hoạch sử dụng đất huyện Bàu Bàng được phê duyệt</li>
            <li>Sổ đỏ riêng từng nền — quyền sử dụng đất lâu dài</li>
            <li>Giấy phép xây dựng cấp sau khi có sổ đỏ</li>
            <li>Hợp đồng đặt cọc và mua bán công chứng rõ ràng minh bạch</li>
          </ul>
          <div class="sect-title">Tiến độ pháp lý</div>
          <ul class="ul-list">
            <li>Hiện đang mở bán — cọc 40% nhận nền ngay</li>
            <li>Sổ đỏ dự kiến cấp sau 12 tháng từ ngày ký HĐMB</li>
            <li>Không có tranh chấp, không vướng quy hoạch treo</li>
          </ul>` },
        { label: 'Giá trị tương lai', html: `
          <div class="sect-title">Bàu Bàng — "thủ phủ" công nghiệp mới của Bình Dương</div>
          <ul class="ul-list">
            <li>130+ doanh nghiệp FDI từ Nhật Bản, Hàn Quốc, Đài Loan, Mỹ</li>
            <li>60.000+ lao động kỹ thuật — nhu cầu nhà ở và dịch vụ bùng nổ</li>
            <li>KCN Bàu Bàng mở rộng 4.000ha — đợt FDI mới lớn dự kiến 2025–2030</li>
            <li>Cao tốc Chơn Thành hoàn thành — kết nối TP.HCM chỉ còn 30 phút</li>
          </ul>
          <div class="sect-title">Tiềm năng sinh lời</div>
          <ul class="ul-list">
            <li>Giá đất Bàu Bàng tăng 30–40% trong 3 năm qua — xu hướng còn tiếp tục mạnh</li>
            <li>Cho thuê mặt bằng kinh doanh trục QL13: 5–10 triệu/tháng</li>
            <li>Vốn vào thấp 610tr, thanh khoản tốt — phù hợp nhà đầu tư mới</li>
          </ul>` }
      ]
    }
  };
