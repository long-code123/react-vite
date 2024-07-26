import { useEffect, useState } from 'react'
import '../css/all.css'
import '../css/bootstrap.min.css'
import '../css/easy-autocomplete.min.css'
import '../css/fpts-carousel.min.css'
import '../css/fpts-main.min.css'
import '../css/fpts-theme.default.min.css'


function Home() {
  const [isLicenseVisible, setIsLicenseVisible] = useState(false);

  // Hàm để thêm các script vào trang
  const loadScripts = (scripts: string[]) => {
    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  };

  // Hàm để lấy đuôi tên miền
  const getDomainSuffix = (domain: string) => {
    const parts = domain.split('.');
    return parts.length >= 2 ? parts.slice(-2).join('.') : domain;
  };

  useEffect(() => {
    // Thêm các script vào trang
    const scripts = [
      '/src/js/jquery.min.js',
      '/src/js/bootstrap.min.js',
      '/src/js/jquery.touchSwipe.min.js',
      '/src/js/jquery.twbsPagination.min.js',
      '/src/js/fpts-common.js',
      '/src/js/fpts-language.js',
      '/src/js/fpts-carousel.js',
      '/src/js/replateAll.js',
      '/src/js/fpts-global.js',
    ];
    loadScripts(scripts);

    // Xử lý tên miền
    const domain = window.location.hostname;
    const domainSuffix = getDomainSuffix(domain);

    if (domainSuffix === 'fpts.com.vn') {
      setIsLicenseVisible(true);
    } else if (domainSuffix === 'fpts.vn') {
      setIsLicenseVisible(false);
    }

    // Xử lý các caption trống
    const captions = document.querySelectorAll('.caption');
    captions.forEach((caption) => {
      if (caption.textContent?.trim() === '') {
        caption.innerHTML = ' ';
      }
    });
  }, []);

  const enterSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Search initiated');
    }
  };


  return (
    <>
      <div className='fpts-main-header' id=''>
        <div className='fpts-header '>
          <div className='fpts-phone-en'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-9 fpts-mobile-hotline'>
                  <p className='fpts-numberheader'>
                    <span className='fpts-titlePhoneHeader'>HOTLINE :</span>
                    <span className='fpts-numberPhoneHeader'>
                      <a href='tel:1900 6446'>1900 6446</a>
                    </span>
                  </p>
                </div>
                <div className='col-md-3 fpts-mobile-lang img-language'>
                  <a className='icon-laguage EN' id='icon-language-en'>
                    <img src='src/assets/images/icon-EN.png' />
                  </a>
                </div>
              </div>
            </div>
            <div className='MmenuResponsiv' id='MobileShow'>
              <span className='line top'></span>
              <span className='line middle'></span>
              <span className='line bottom'></span>
            </div>
            <div className='fptsMobileIconSearch' id='searchmobile'>
              <span className='fa fa-search iconsearch'></span>
            </div>
          </div>
          <div className='fpts-menuHome fptsMenuHome' id='fptsMenuHome'>
            <div className='container'>
              <div className='fpts-logo'>
                <div className='row'>
                  <div className='col-md-3 fpts-logoimg'>
                    <div className='fpts-logoimg_'>
                      <a href='/'>
                        <img src='src/assets/images/logo_ngang.png' alt='' className='img-resposive img-desktop' />
                        <img src='src/assets/images/logo_doc.png' alt='' className='img-resposive img-mobile' />
                      </a>
                    </div>
                  </div>
                  <div className='col-md-5 fpt-logoslogan'>
                    <p className='fpts-slogan'>Nơi bạn đặt niềm tin</p>
                  </div>
                  <div className='boder-menumobile' id='bordermobile'></div>
                  <div className='col-md-4 fpts-logosearch' id='SearchMobile'>
                    <input
                      onKeyPress={enterSearch}
                      type='text'
                      placeholder='Tìm theo tên hoặc mã CK'
                      id='fpts-search-stockcode'
                      className='fptsSearchAuto'
                    />{' '}
                  </div>
                </div>
              </div>

              <div className='fpts-menunav' id='MenuResposive'>
                <ul>
                  <li>
                    <a className='headerMenuActive' href='/'>
                      TRANG CHỦ
                    </a>
                  </li>
                  <li>
                    <a href='https://eztrade.fpts.com.vn' className='hiden-menu-dt'>
                      GIAO DỊCH TRỰC TUYẾN
                    </a>
                    <span className='menu-multilevel hiden-menu-desktop'>GIAO DỊCH TRỰC TUYẾN</span>

                    <div className='fpts-megamenu fpts-megamenu_'>
                      <div className='submenuopacity'></div>
                      <div className='fpts-submegamenuall'>
                        <div className='fpts-name-menu-mobile'>
                          <p className='fpts-titleMobile'>
                            <span className='glyphicon glyphicon-arrow-left fpts-btn-premenu'></span>
                            <span className='fpts-title-submenuMobile'>GIAO DỊCH TRỰC TUYẾN</span>
                          </p>
                        </div>
                        <div className='fptstriangle'></div>
                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a href='https://eztrade.fpts.com.vn' target='_blank'>
                                Giao dịch CK Cơ sở
                              </a>
                            </li>
                            <li>
                              <a href='https://ezfutures.fpts.com.vn' target='_blank'>
                                Giao dịch CK Phái sinh
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/stoploss/orderform' target='_blank'>
                                Đặt Lệnh điều kiện
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/rightscustody/OverView' target='_blank'>
                                Thực hiện quyền
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/rightscustody/CustodyOrderForm' target='_blank'>
                                Lưu ký chứng khoán
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/rightscustody/AdvanceOrderForm' target='_blank'>
                                Ứng trước cổ tức
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/margin/Mortgage' target='_blank'>
                                Cầm cố chứng khoán
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/margin/Report' target='_blank'>
                                Quản lý HĐ Ký quỹ
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/report/AssetReport2' target='_blank'>
                                Quản lý tài sản
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/rightscustody/DepositoryHistory' target='_blank'>
                                Tra cứu phí lưu ký
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/report/ReportCW' target='_blank'>
                                Tra cứu chứng quyền
                              </a>
                            </li>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/transfer' target='_blank'>
                                Chuyển tiền ngân hàng
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a href='https://eztrade.fpts.com.vn/transfer/home/transferds' target='_blank'>
                                Chuyển tiền ký quỹ CKPS
                              </a>
                            </li>
                            <li>
                              <a href='https://liveprice.fpts.com.vn/' target='_blank'>
                                Bảng giá chứng khoán
                              </a>
                            </li>
                            <li>
                              <a href='https://liveprice.fpts.com.vn/hnxpro' target='_blank'>
                                Bảng giá HNX Pro
                              </a>
                            </li>
                            <li>
                              <a href='https://ezfutures.fpts.com.vn/chart3' target='_blank'>
                                Phân tích Kỹ thuật
                              </a>
                            </li>
                            <li>
                              <a href='http://ezsearch.fpts.com.vn' target='_blank'>
                                Thông tin doanh nghiệp
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href='/san-pham-dich-vu/giao-dich-chung-khoan/mo-tai-khoan-giao-dich-chung-khoan/'
                      className='hiden-menu-dt '
                    >
                      SẢN PHẨM DỊCH VỤ
                    </a>

                    <span className='menu-multilevel hiden-menu-desktop'>SẢN PHẨM DỊCH VỤ</span>
                    <div className='fpts-megamenu'>
                      <div className='submenuopacity'></div>
                      <div className='fpts-submegamenuall'>
                        <div className='fpts-name-menu-mobile'>
                          <p className='fpts-titleMobile'>
                            <span className='glyphicon glyphicon-arrow-left fpts-btn-premenu'></span>
                            <span className='fpts-title-submenuMobile'>SẢN PHẨM DỊCH VỤ</span>
                          </p>
                        </div>
                        <div className='fptstriangle'></div>

                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a href='/san-pham-dich-vu/giao-dich-chung-khoan/mo-tai-khoan-giao-dich-chung-khoan/'>
                                Giao dịch chứng khoán
                              </a>{' '}
                            </li>
                            <li>
                              <a href='/san-pham-dich-vu/tu-van-doanh-nghiep/'>Tư vấn doanh nghiệp</a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href='/co-hoi-nghe-nghiep/' target='_blank'>
                      Cơ hội nghề nghiệp
                    </a>
                  </li>
                  <li>
                    <a
                      href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/cau-hoi-thuong-gap/'
                      className='hiden-menu-dt '
                    >
                      HỖ TRỢ KHÁCH HÀNG
                    </a>
                    <span className='menu-multilevel hiden-menu-desktop'>HỖ TRỢ KHÁCH HÀNG</span>
                    <div className='fpts-megamenu'>
                      <div className='submenuopacity'></div>
                      <div className='fpts-submegamenuall'>
                        <div className='fpts-name-menu-mobile'>
                          <p className='fpts-titleMobile'>
                            <span className='glyphicon glyphicon-arrow-left fpts-btn-premenu'></span>
                            <span className='fpts-title-submenuMobile'>HỖ TRỢ KHÁCH HÀNG</span>
                          </p>
                        </div>
                        <div className='fptstriangle'></div>

                        <div className='fpts-submegamenu fpts-menuli'>
                          <ul>
                            <li>
                              <a
                                href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/cau-hoi-thuong-gap/'
                                className='hiden-menu-dt'
                              >
                                Giao dịch chứng khoán cơ sở
                              </a>
                              <p className='hiden-menu-desktop showMenu showcontent_' id='showcontent'>
                                <span className='showMenuHT'>Giao dịch chứng khoán cơ sở</span>
                                <span className='' id='htmobile'></span>
                              </p>
                              <div className='fpts-submenu_' id='submenumobile'>
                                <ul>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/cau-hoi-thuong-gap/'>
                                      Câu hỏi thường gặp
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/huong-dan-su-dung-dich-vu/mo-tai-khoan/'>
                                      {' '}
                                      Hướng dẫn sử dụng dịch vụ{' '}
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/danh-sach-tk-ngan-hang-nop-tien-gdck/'>
                                      Danh sách TK Ngân hàng nộp tiền GDCK
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/nop-tien-chung-khoan-qua-tk-dinh-danh-cua-fpts/'>
                                      Nộp tiền chứng khoán qua TK định danh của FPTS
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/bieu-phi-dich-vu/'>
                                      Biểu phí dịch vụ
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/thoi-gian-lam-viec-tai-fpts/'>
                                      Thời gian làm việc tại FPTS
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/quy-dinh-giao-dich/quy-dinh-cua-hose/'>
                                      {' '}
                                      Quy định giao dịch{' '}
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/lich-su-kien/lich-thuc-hien-quyen/'>
                                      Lịch sự kiện
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/bieu-mau-hop-dong/'>
                                      Biểu mẫu hợp đồng
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/van-ban-phap-quy/chinh-phu/'>
                                      Văn bản pháp quy
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/lien-he/tru-so-chinh/'>
                                      Liên hệ
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className='fpts-submegamenu fpts-menuli'>
                          <ul>
                            <li>
                              <a
                                href='/ho-tro-khach-hang/giao-dich-chung-khoan-phai-sinh/cau-hoi-thuong-gap/'
                                className='hiden-menu-dt 111'
                              >
                                Giao dịch chứng khoán phái sinh
                              </a>
                              <p className='hiden-menu-desktop showMenu' id='showcontent_'>
                                <span className='showMenuHT'>Giao dịch chứng khoán phái sinh</span>
                                <span className='' id='htmobile_'></span>
                              </p>
                              <div className='fpts-submenu_' id='submenumobile_'>
                                <ul>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-phai-sinh/cau-hoi-thuong-gap/'>
                                      Câu hỏi thường gặp
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-phai-sinh/huong-dan-su-dung-dich-vu/mo-tai-khoan-giao-dich/'>
                                      Hướng dẫn sử dụng dịch vụ
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-phai-sinh/danh-sach-tai-khoan-moi-gioi-ckps/'>
                                      Danh sách tài khoản môi giới CKPS
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-phai-sinh/bieu-phi-dich-vu/'>
                                      Biểu phí dịch vụ
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-phai-sinh/quy-dinh-giao-dich/'>
                                      Quy định giao dịch
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-phai-sinh/bieu-mau-hop-dong/'>
                                      Biểu mẫu hợp đồng
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-phai-sinh/giao-dich-chung-quyen/cau-hoi-thuong-gap/'>
                                      Giao dịch chứng quyền
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href='/quan-he-co-dong/cong-bo-thong-tin/' className='hiden-menu-dt '>
                      QUAN HỆ CỔ ĐÔNG
                    </a>
                    <span className='menu-multilevel hiden-menu-desktop'>QUAN HỆ CỔ ĐÔNG</span>

                    <div className='fpts-megamenu fpts-megamenu_'>
                      <div className='submenuopacity'></div>
                      <div className='fpts-submegamenuall'>
                        <div className='fpts-name-menu-mobile'>
                          <p className='fpts-titleMobile'>
                            <span className='glyphicon glyphicon-arrow-left fpts-btn-premenu'></span>
                            <span className='fpts-title-submenuMobile'>QUAN HỆ CỔ ĐÔNG</span>
                          </p>
                        </div>
                        <div className='fptstriangle'></div>

                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a href='/quan-he-co-dong/cong-bo-thong-tin/'>Công bố thông tin</a>
                            </li>
                            <li>
                              <a href='/quan-he-co-dong/thong-tin-tai-chinh/'>Thông tin tài chính</a>
                            </li>
                            <li>
                              <a href='/quan-he-co-dong/thong-tin-quan-tri/ban-lanh-dao-cong-ty/'>Thông tin quản trị</a>
                            </li>
                          </ul>
                        </div>
                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a href='/quan-he-co-dong/thong-tin-co-phieu/co-cau-so-huu-co-phieu/'>
                                Thông tin cổ phiếu
                              </a>
                            </li>
                            <li>
                              <a href='/quan-he-co-dong/dai-hoi-dong-co-dong/moi-hop/'>Đại hội đồng cổ đông</a>
                            </li>
                            <li>
                              <a href='/quan-he-co-dong/bao-cao-thuong-nien/'>Báo cáo thường niên</a>
                            </li>
                          </ul>
                        </div>
                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a href='/quan-he-co-dong/ban-cao-bach/'>Bản cáo bạch</a>
                            </li>
                            <li>
                              <a href='/quan-he-co-dong/tro-giup-co-dong/'>Trợ giúp cổ đông</a>
                            </li>
                            <li>
                              <a href='#'></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href='/ve-fpts/tong-quan-ve-cong-ty/' className='hiden-menu-dt '>
                      VỀ FPTS
                    </a>
                    <span className='menu-multilevel hiden-menu-desktop'>VỀ FPTS</span>
                    <div className='fpts-megamenu'>
                      <div className='submenuopacity'></div>
                      <div className='fpts-submegamenuall'>
                        <div className='fpts-name-menu-mobile'>
                          <p className='fpts-titleMobile'>
                            <span className='glyphicon glyphicon-arrow-left fpts-btn-premenu'></span>
                            <span className='fpts-title-submenuMobile'>VỀ FPTS</span>
                          </p>
                        </div>
                        <div className='fptstriangle'></div>
                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a href='/ve-fpts/tong-quan-ve-cong-ty/'>Tổng quan về công ty</a>
                            </li>
                            <li>
                              <a href='/ve-fpts/so-do-to-chuc/'>Sơ đồ tổ chức</a>
                            </li>
                            <li>
                              <a href='/ve-fpts/mang-luoi-giao-dich/'>Mạng lưới giao dịch</a>
                            </li>
                            <li>
                              <a href='/ve-fpts/quy-dinh-dao-duc-nghe-nghiep/'>Quy định đạo đức nghề nghiệp</a>
                            </li>
                          </ul>
                        </div>
                        <div className='fpts-submegamenu'>
                          <ul>
                            <li>
                              <a id='1569' href='/ve-fpts/fpts-voi-bao-chi/'>
                                FPTS với báo chí
                              </a>
                            </li>
                            <li>
                              <a id='1570' href='/ve-fpts/thong-bao-tu-fpts/'>
                                Thông báo từ FPTS
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='fix-content'>
          <div className='fpts-content'>
            <div className='fpts-home-slider'>
              <style>
                {`
          .carousel-indicators {
            left: 49% !important;
            width: unset !important;
            margin-left: unset !important;
          }
        `}
              </style>

              <div className='fpts-home-sliders' id='SliderDesktop'>
                <div id='carousel-example-generic' className='carousel slide' data-ride='carousel'>
                  <div className='carousel-inner' role='listbox'>
                    <div className='item active'>
                      <a href='/ve-fpts/hoi-thao/?id=137' target='_blank'>
                        <div
                          className='wrapper'
                          style={{
                            backgroundImage:
                              "url('src/assets/images/%C4%91n-tr%C6%B0%E1%BB%9Dng-ph%C3%A1i-%C4%91%E1%BA%A7u-t%C6%B0-theo-ph%C3%A2n-t%C3%ADch-k%E1%BB%B9-thu%E1%BA%ADt.png')"
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='https://www.fpts.com.vn/ve-fpts/thong-bao-tu-fpts/?id=1392215' target='_blank'>
                        <div
                          className='wrapper'
                          style={{
                            backgroundImage:
                              "url('src/assets/images/gi%E1%BA%A3m-ph%C3%AD-giao-d%E1%BB%8Bch-ch%E1%BB%A7-%C4%91%E1%BB%99ng-th%C3%A1ng-72024.png')"
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='https://www.fpts.com.vn/ve-fpts/thong-bao-tu-fpts/?id=1377865' target='_blank'>
                        <div
                          className='wrapper'
                          style={{
                            backgroundImage: "url('/media/8331/siêu-khuyến-mại-cho-khách-hàng-mở-mới-tài-khoản-1.png')"
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='#'>
                        <div
                          className='wrapper'
                          style={{
                            backgroundImage: "url('src/assets/images/fpts17%C4%91trc%C3%B3-ch%C3%A2n.png')"
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='https://www.fpts.com.vn/ve-fpts/thong-bao-tu-fpts/?id=1341591' target='_blank'>
                        <div
                          className='wrapper'
                          style={{
                            backgroundImage:
                              "url('src/assets/images/linh-hoat-hi%E1%BB%87u-qu%E1%BA%A3-h%C6%A1n-v%E1%BB%9Bi-g%C3%B3i-k%C3%BD-qu%E1%BB%B9-tplus7-tplus14.png')"
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='/ve-fpts/hoi-thao/?id=136' target='_blank'>
                        <div
                          className='wrapper'
                          style={{
                            backgroundImage: "url('src/assets/images/1.jpg')"
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <ol className='carousel-indicators'>
                    <li data-target='#carousel-example-generic' data-slide-to='0' className='active'></li>
                    <li data-target='#carousel-example-generic' data-slide-to='1'></li>
                    <li data-target='#carousel-example-generic' data-slide-to='2'></li>
                    <li data-target='#carousel-example-generic' data-slide-to='3'></li>
                    <li data-target='#carousel-example-generic' data-slide-to='4'></li>
                    <li data-target='#carousel-example-generic' data-slide-to='5'></li>
                  </ol>

                  <a className='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>
                    <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                  </a>
                  <a
                    className='right carousel-control'
                    href='#carousel-example-generic'
                    role='button'
                    data-slide='next'
                  >
                    <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
              </div>

              <div id='MobileSlider' className='MobileSlider'>
                <div id='SliderMobilerCustom' className='owl-carousel owl-theme'>
                  <div className='item'>
                    <div className='imgMobile'>
                      <a href='/ve-fpts/hoi-thao/?id=137'>
                        <img
                          src='src/assets/images/tr%C6%B0%E1%BB%9Dng-ph%C3%A1i-%C4%91%E1%BA%A7u-t%C6%B0-theo-ph%C3%A2n-t%C3%ADch-k%E1%BB%B9-thu%E1%BA%ADtmb.png'
                          alt='Alternate Text'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='imgMobile'>
                      <a href='https://www.fpts.com.vn/ve-fpts/thong-bao-tu-fpts/?id=1392239'>
                        <img
                          src='src/assets/images/gi%E1%BA%A3m-ph%C3%AD-giao-d%E1%BB%8Bch-ch%E1%BB%A7-%C4%91%E1%BB%99ng-th%C3%A1ng-72024-mb.png'
                          alt='Alternate Text'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='imgMobile'>
                      <a href='https://www.fpts.com.vn/ve-fpts/thong-bao-tu-fpts/?id=1377865'>
                        <img
                          src='/media/8332/siêu-khuyến-mại-cho-khách-hàng-mở-mới-tài-khoảnmb.png'
                          alt='Alternate Text'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='imgMobile'>
                      <a href='#'>
                        <img src='src/assets/images/fpts-17tuoimb.png' alt='Alternate Text' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='imgMobile'>
                      <a href='https://www.fpts.com.vn/ve-fpts/thong-bao-tu-fpts/?id=1341602'>
                        <img
                          src='src/assets/images/g%C3%B3i-ph%C3%AD-h%E1%BB%97-tr%E1%BB%A3-v%E1%BB%91n-%C6%B0u-%C4%91%C3%A3imb.png'
                          alt='Alternate Text'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='imgMobile'>
                      <a href='https://www.fpts.com.vn/ve-fpts/thong-bao-tu-fpts/?id=1341591'>
                        <img
                          src='src/assets/images/linh-hoat-hi%E1%BB%87u-qu%E1%BA%A3-h%C6%A1n-v%E1%BB%9Bi-g%C3%B3i-k%C3%BD-qu%E1%BB%B9-tplus7-tplus14-mb.png'
                          alt='Alternate Text'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='imgMobile'>
                      <a href='/ve-fpts/hoi-thao/?id=136'>
                        <img src='src/assets/images/thame-3.jpg' alt='Alternate Text' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <script></script>

              <div className='fpts-home-thumbnail'>
                <div className='container fix-container boxconttent'>
                  <div className='row'>
                    <a href='https://eztrade.fpts.com.vn/' target='_blank' className='box-service'>
                      <div className='col-md-3 home-thumbnail fpts-thumbnail_'>
                        <div className='fpts-thumbnail'>
                          <div className='fpts-img-thumbnail'>
                            <img src='src/assets/images/icon-logo1.png' alt='' className='img-resposive' />
                          </div>
                          <div className='fpts-thumbnail-text'>
                            <p className='fpts-titlethumbnail'>giao dịch trực tuyến</p>
                            <p className='fpts-contentthumbnail'>Dành cho khách hàng đã có tài khoản</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href='http://ezopen.fpts.com.vn' target='_blank' className='box-service'>
                      <div className='col-md-3 home-thumbnail fpts-thumbnail_'>
                        <div className='fpts-thumbnail'>
                          <div className='fpts-img-thumbnail'>
                            <img src='src/assets/images/icon-logo2.png' alt='' className='img-resposive' />
                          </div>
                          <div className='fpts-thumbnail-text'>
                            <p className='fpts-titlethumbnail'>mở tài khoản</p>
                            <p className='fpts-contentthumbnail'>dành cho khách hàng chưa có tài khoản</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href='https://ezadvisorselect.fpts.com.vn/' target='_blank' className='box-service'>
                      <div className='col-md-3 home-thumbnail fpts-thumbnail_'>
                        <div className='fpts-thumbnail'>
                          <div className='fpts-img-thumbnail'>
                            <img src='src/assets/images/icon-logo3.png' alt='' className='img-resposive' />
                          </div>
                          <div className='fpts-thumbnail-text'>
                            <p className='fpts-titlethumbnail'>tư vấn đầu tư</p>
                            <p className='fpts-contentthumbnail'>Hỗ trợ khách hàng</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href='/san-pham-dich-vu/tu-van-doanh-nghiep' target='_blank' className='box-service'>
                      <div className='col-md-3 home-thumbnail fpts-thumbnail_'>
                        <div className='fpts-thumbnail'>
                          <div className='fpts-img-thumbnail'>
                            <img src='src/assets/images/icon-logo4.png' alt='' className='img-resposive' />
                          </div>
                          <div className='fpts-thumbnail-text'>
                            <p className='fpts-titlethumbnail'>tư vấn doanh nghiệp</p>
                            <p className='fpts-contentthumbnail'>dành cho khách hàng doanh nghiệp</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='fpts-home-maincontent'>
              <div className='container fix-container fix-container--home'>
                <div className='row fix-content-padding'>
                  <div className='col-md-4 fpts-contactfpts'>
                    <ul>
                      <li>
                        <p className='fpts-contactfpts-title'>
                          Gọi tới Tổng đài
                          <a href='tel:1900 6446' className='fpts-contactfpts-title' style={{ color: '#034e95' }}>
                            1900 6446
                          </a>
                        </p>
                        <p className='fpts-contactHotline'>để được hỗ trợ</p>
                      </li>

                      <li>
                        <p className='fpts-where'>Dịch vụ khách hàng, tài khoản</p>
                        <p className='fpts-contactnumber'>
                          <a href='tel:1900 6446'>Nhấn phím 1</a>
                        </p>
                      </li>
                      <li>
                        <p className='fpts-where'>Thông tin nộp, rút tiền</p>
                        <p className='fpts-contactnumber'>
                          <a href='tel:1900 6446'>Nhấn phím 2</a>
                        </p>
                      </li>
                      <li>
                        <p className='fpts-where'>Đặt lệnh, tư vấn đầu tư</p>
                        <p className='fpts-contactnumber'>
                          <a href='tel:1900 6446'>Nhấn phím 3</a>
                        </p>
                      </li>
                      <li>
                        <p className='fpts-where'>Lưu ký, quản lý cổ đông</p>
                        <p className='fpts-contactnumber'>
                          <a href='tel:1900 6446'>Nhấn phím 4</a>
                        </p>
                      </li>

                      <li>
                        <p className='fpts-where'>Khách hàng gọi cho FPTS từ nước ngoài</p>
                        <p className='fpts-contactnumber'>
                          <a href='tel:+84 24 73073889'>+84 24 73073889</a>
                        </p>
                      </li>

                      <li>
                        <div className='fpts-iconlink'>
                          <p className='fpts-where'>Kết nối với FPTS</p>

                          <div className='fpts-fb fpts-item'>
                            <div className='iconfb'>
                              
                            </div>
                            <div id='linkList'>
                              <ul className='link_load' style={{ borderRadius: '3px' }}>
                                <li
                                  className='icon_home'
                                  style={{
                                    background: '#009bca',
                                    textDecoration: 'none',
                                    fontWeight: 'bold'
                                  }}
                                >
                                  <p className='link_icon'>FPTS trên Facebook</p>
                                </li>
                                <li className='icon_home'>
                                  <a href='https://www.facebook.com/FPTSecurities.JSC' target='_blank'>
                                    <span className='caption'>Fanpage Chứng khoán FPT</span>
                                  </a>
                                </li>
                                <li className='icon_home'>
                                  <a href='https://www.facebook.com/FPTSResearch' target='_blank'>
                                    <span className='caption'>Fanpage Phân tích đầu tư</span>
                                  </a>
                                </li>
                                <li className='icon_home'>
                                  <a href='https://www.facebook.com/bannhansufpts' target='_blank'>
                                    <span className='caption'>Fanpage Tuyển dụng</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className='fpts-youtobe fpts-item'>
                            <div className='iconyoutobe'></div>
                            <div id='linkList_YT'>
                              <ul className='link_load' style={{ borderRadius: '3px' }}>
                                <li
                                  className='icon_home'
                                  style={{
                                    background: '#009bca',
                                    textDecoration: 'none',
                                    fontWeight: 'bold'
                                  }}
                                >
                                  <p className='link_icon'>FPTS trên YouTube</p>
                                </li>

                                <li className='icon_home'>
                                  <a href='https://www.youtube.com/@chungkhoanfpt-fpts7714' target='_blank'>
                                    <span className='caption'>Kênh Chứng khoán FPT</span>
                                  </a>
                                </li>
                                <li className='icon_home'>
                                  <a href='https://www.youtube.com/@TuVanDauTuFPTS' target='_blank'>
                                    <span className='caption'>Kênh Tư vấn đầu tư</span>
                                  </a>
                                </li>
                                <li className='icon_home'>
                                  <a href='https://www.youtube.com/@fptsresearch' target='_blank'>
                                    <span className='caption'>Kênh Phân tích đầu tư</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className='fpts-zalo fpts-item'>
                            <div className='iconzalo'></div>
                            <div id='linkList_ZL'>
                              <ul className='link_load' style={{ borderRadius: '3px' }}>
                                <li
                                  className='icon_home'
                                  style={{
                                    background: '#009bca',
                                    textDecoration: 'none',
                                    fontWeight: 'bold'
                                  }}
                                >
                                  <p className='link_icon'>FPTS trên Zalo</p>
                                </li>
                                <li className='icon_home'>
                                  <a href='https://zalo.me/1121778737940685757' target='_blank'>
                                    <span className='caption'>Dịch vụ khách hàng</span>
                                  </a>
                                </li>
                                <li className='icon_home'>
                                  <a href='https://zalo.me/1851750919319965890' target='_blank'>
                                    <span className='caption'>Tư vấn tài chính doanh nghiệp</span>
                                  </a>
                                </li>
                                <li className='icon_home'>
                                  <a href='' target='_blank'>
                                    <span className='caption'></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <style>
                      <style>
                        {`
        .fpts-main-header .carousel-inner > .item > a > img,
        .fpts-main-header .carousel-inner > .item > img,
        .fpts-main-header .img-responsive,
        .fpts-main-header .thumbnail a > img,
        .fpts-main-header .thumbnail > img {
          height: auto;
        }
      `}
                      </style>

                      <style>
                        {`
        .fpts-main-header .fpts-content .fpts-home-maincontent .fpts-eztraiding .fpts-dowloadApp {
          width: 100%;
          padding-top: 14px !important;
        }
        .fpts-main-header
          .fpts-content
          .fpts-home-maincontent
          .fpts-contactfpts
          ul
          li:first-child
          .fpts-contactfpts-title {
          padding-bottom: 12px !important;
        }
        .fpts-main-header
          .fpts-content
          .fpts-home-maincontent
          .fpts-contactfpts
          ul
          li
          .fpts-contactHotline {
          padding-bottom: 12px !important;
        }
        .icon_home {
          text-align: left !important;
          padding: 5px !important;
          padding-bottom: 10px !important;
        }
        .icon_home:hover {
          text-decoration: none !important;
        }
        .caption {
          color: #034e95 !important;
        }
        .link_load {
          border: 1px solid #009bca;
          text-align: center;
          color: black !important;
        }
      `}
                      </style>

                      <style>
                        {`
        .link_icon {
          color: black !important;
          text-transform: none;
        }

        .fpts-fb {
          position: relative;
          display: inline-block;
        }

        .iconyoutobe {
          width: 20px;
          height: 20px;
        }

        .iconfb {
          width: 20px;
          height: 20px;
        }

        .iconzalo {
          width: 20px;
          height: 20px;
        }

        #linkList {
          display: none; /* Ẩn danh sách ban đầu */
          position: absolute;
          bottom: 92%;
          left: 28px;
          z-index: 1;
          width: 222px;
        }

        #linkList ul {
          list-style-type: none;
          padding: 0;
        }

        #linkList ul li a:hover {
          text-decoration: underline !important;
          font-style: italic;
          color: #034e95 !important;
        }

        #linkList_YT {
          display: none; /* Ẩn danh sách ban đầu */
          position: absolute;
          bottom: 92%;
          left: 29px;
          z-index: 1;
          width: 233px;
        }

        #linkList_YT ul {
          list-style-type: none;
          padding: 0;
        }

        #linkList_YT ul li a:hover {
          color: #034e95 !important;
          text-decoration: underline !important;
          font-style: italic;
        }

        #linkList_ZL {
          display: none; /* Ẩn danh sách ban đầu */
          position: absolute;
          bottom: 92%;
          left: 32px;
          width: 250px;
          z-index: 1;
        }
      `}
                      </style>

                      <style>
                        {`
        #linkList_ZL {
          list-style-type: none;
          padding: 0;
        }

        #linkList_ZL ul li {
          list-style-type: none;
          padding: 0;
          text-decoration: none !important;
        }

        #linkList_ZL ul li a:hover {
          color: #034e95 !important;
          text-decoration: underline !important;
          font-style: italic;
        }

        .fpts-contactnumber {
          padding-top: 8px !important;
          padding-bottom: 10px !important;
          background-position: 5% 11px !important;
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          #linkList_ZL {
            display: none; /* Ẩn danh sách ban đầu */
            position: absolute;
            bottom: 92%;
            left: 32px;
            width: 250px;
            z-index: 1;
          }

          #linkList_YT {
            display: none; /* Ẩn danh sách ban đầu */
            position: absolute;
            bottom: 92%;
            left: 29px;
            z-index: 1;
            width: 233px;
          }

          #linkList {
            display: none; /* Ẩn danh sách ban đầu */
            position: absolute;
            bottom: 92%;
            left: 28px;
            z-index: 1;
            width: 222px;
          }

          .fpts-main-header
            .fpts-content
            .fpts-home-maincontent
            .fpts-eztraiding
            .fpts-exmobiletraiding
            img {
            margin: 0 auto;
          }
        }

        @media only screen and (min-width: 358px) and (max-width: 767px) {
          #linkList_ZL {
            display: none; /* Ẩn danh sách ban đầu */
            position: absolute;
            bottom: 92%;
            right: 28px !important;
            left: unset !important;
            width: 250px;
            z-index: 1;
          }

          #linkList {
            display: none; /* Ẩn danh sách ban đầu */
            position: absolute;
            bottom: 92%;
            right: 28px !important;
            left: unset !important;
            z-index: 1;
            width: 222px;
          }
        }
      `}
                      </style>

                      <style>
                        {`
        #linkList_YT {
          display: none; /* Ẩn danh sách ban đầu */
          position: absolute;
          bottom: 92%;
          right: 28px !important;
          left: unset !important;
          z-index: 1;
          width: 233px;
        }

        .fpts-main-header
          .fpts-content
          .fpts-home-maincontent
          .fpts-eztraiding
          .fpts-exmobiletraiding
          img {
          margin: 0 auto;
        }
      `}
                      </style>
                    </style>
                    <div className='caption'>{/* Nội dung caption */}</div>
                  </div>
                  <div className='col-md-4 fpts-eztraiding'>
                    {/* <style>
                    .fpts-main-header .carousel-inner > .item > a > img,
                    .fpts-main-header .carousel-inner > .item > img,
                    .fpts-main-header .img-responsive,
                    .fpts-main-header .thumbnail a > img,
                    .fpts-main-header .thumbnail > img {
                      height: auto;
                    }
                    .fpts-contactfpts_ {
                      padding-bottom: 26px;
                    }
                  </style> */}
                    <div className='fpts-title-eztrading'>
                      <p className='fpts-contactfpts_'>
                        <span>Ez</span>MobileTrading
                      </p>
                    </div>
                    <div className='fpts-exmobiletraiding'>
                      <a
                        href=' http://www.fpts.com.vn/san-pham-dich-vu/giao-dich-chung-khoan/ezmobiletrading'
                        target='_blank'
                      >
                        <img src='src/assets/images/ezmobile_vn_2.jpg' alt='' className='img-responsive' />
                      </a>
                    </div>
                    <div className='fpts-dowloadApp'>
                      <p className='fpts-titledowload'>TẢI &amp; CÀI ĐẶT</p>
                      <div className='row'>
                        <div className='col-md-6 fpts-appstore'>
                          <a
                            href='https://apps.apple.com/vn/app/ezmobiletrading/id1441633170?l=vi&amp;ls=1'
                            target='_blank'
                          >
                            <img src='src/assets/images/icon-appStore.png' alt='' className='img-resposive' />
                          </a>
                        </div>
                        <div className='col-md-6 fpts-appstore'>
                          <a href='https://play.google.com/store/apps/details?id=com.fpts.ezmobilev2' target='_blank'>
                            <img src='src/assets/images/icon-gooleplay.png' alt='' className='img-resposive' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 fpts-menutab'>
                    <div className='tab'>
                      <div className='TabThongBao' style={{ width: '25%' }}>
                        <p className='tablinks' id='tabThongBao'>
                          FPTS
                          <br />
                          thông báo
                        </p>
                      </div>
                      <div className='TabCongBo' style={{ width: '30%' }}>
                        <p className='tablinks' id='tabCongBo'>
                          FPTS
                          <br />
                          công bố thông tin
                        </p>
                      </div>
                      <div
                        className='TabTin'
                        style={{
                          width: '15%', // Width 15%
                          whiteSpace: 'nowrap', // Prevent text from wrapping
                          overflow: 'hidden' // Hide overflowed content
                        }}
                      >
                        <p className='tablinks' id='tabTinTuc'>
                          Tin Tức
                        </p>
                      </div>
                      <div className='TabTinDauGia' style={{ width: '30%' }}>
                        <p
                          className='tablinks'
                          id='tabTinDauGia'
                          style={{
                            width: '127px'
                          }}
                        >
                          IPO, đấu giá,
                          <br />
                          chào mua
                        </p>
                      </div>
                    </div>
                    <div id='data-content' className='tabcontent'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>
            {`.fpts-indext {
            width: 100%;
            height: 86px;
            background-color: red;
          }`}
          </style>

          <section className='fpts-indext'>
            <div className='container fix-container'>
              <div id='box-vn-hnx-index' className='owl-carousel'>
                <div id='slide0'></div>
                <div id='slide1'></div>
                <div id='slide2'></div>
                <div id='slide3'></div>
                <div id='slide4'></div>
                <div id='slide5'></div>
              </div>
            </div>
          </section>

          <section className='fpts-ezLink'>
            <div className='container fix-container'>
              <div className='fpts-eztext'>
                <div id='EzLogoSlider' className='owl-carousel owl-theme'>
                  <div className='item'>
                    <a href='http://www.fpts.com.vn/media/2195/11-link-xem-tai-day-final.pdf' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content DodgerBlue'>Hrm</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Quản trị nhân sự</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://ezsearch.fpts.com.vn/' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content DodgerBlue'>Search</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Cổng thông tin trực tuyến</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content LimeGreen'>Transfer</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Chuyển tiền trực tuyến</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content Goldenrod'>Margin</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Dịch vụ hỗ trợ vốn</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content LimeGreen'>Trade</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Giao dịch trực tuyến</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content LimeGreen'>Futures</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Giao dịch Phái sinh</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://ezgsm.fpts.com.vn/' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content DodgerBlue'>GSM</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Đại hội cổ đông trực tuyến</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content LimeGreen'>Advance</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Ứng trước Tiền bán CK và tiền cổ tức</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content LimeGreen'>RightsExercise</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Thực hiện quyền trực tuyến</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content Goldenrod'>Mortgage</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Cho vay cầm cố chứng khoán</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='http://m.fpts.com.vn/' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content DodgerBlue'>MobileTrading</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Giao dịch CK trên thiết bị di động</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='http://ezlink.fpts.com.vn' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content DodgerBlue'>Link</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Quản lý cổ đông</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content Goldenrod'>StopLoss</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Đặt trước lệnh chờ mua/bán</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='http://ezopen.fpts.com.vn/Pages/Default.aspx' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content Goldenrod'>Open</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Mở tài khoản trực tuyến</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content DarkTurquoise'>MarginPro</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Giao dịch Ký quỹ Chứng khoán theo sức mua</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content Goldenrod'>Oddlot</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Đặt lệnh Bán Chứng khoán Lô lẻ Trực tuyến</p>
                      </div>
                    </a>
                  </div>
                  <div className='item'>
                    <a href='https://accounts.fpts.com.vn/Login?href=eztrade&amp;s=11' target='_blank'>
                      <div className='fpts-ez'>
                        <div className='Ez'>
                          <p className='fpts-titleEz_'>
                            <span className='ez-text'>Ez</span>
                            <span className='ez-content LimeGreen'>MobileFutures</span>
                          </p>
                        </div>
                        <p className='fpts-contentEz'>Giao dịch Phái sinh trên di động</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='partner'>
            <div className='container fix-container--home'>
              <div className='enterprises'>
                <p className='nametitle'>Đối tác doanh nghiệp</p>
                <div id='enterprises' className='owl-carousel owl-theme'>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://sanna.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/skn.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.sanestkhanhhoa.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/skh.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.binhminhplastic.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/logo_bmp.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://aquatexbentre.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/abtfinal.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.agrexland.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/agxfinal.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://biasaigonsongtien.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/sst-1.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.capnuocbentre.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/nbt.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://benbaivantaisaigon.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/tps.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://moitruongdothidanang.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dne1.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://metalhcm.com.vn/en/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hmc.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vinatexdn.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/logo-vinatex.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://ndx.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ndx.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.dic.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dicfinal.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://bepharco.com/en/home-2/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dbt.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.biasaigonnamtrungbo.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/bntb.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.sonaenco.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/sze.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://dongahotelgroup.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/logoda-chuan.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://cuongthuan.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cti.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://namkimgroup.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/nkg.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://sadakim.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/sdk.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://capthoatnuoctayninh.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/logo-107x107.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pvcfc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dcm.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://binhdien.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/bfc.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.casumina.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/csm.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://khaspexco.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/khs.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vinasonthanh.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/aum.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://haagrico.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hng.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.benthanhgcc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/gcc.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://vntlogistics.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vnt.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://dqc.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dqc.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://lec.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/lec.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://urenconhatrang.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ntu.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.gtccsg.com/vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/cpw.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.dpmp.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/pmp.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.chieusang.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/chs.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://avuong.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/avc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://petecbidico.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/gcb.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.songhong.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/msh.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.cipc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cip.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='' target='_blank'>
                        <img className='img-content' src='src/assets/images/dhd.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://haipharco.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dph.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.psc1.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/bt1.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.textaco.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/tet.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://vnpd.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vpd.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://thuydienhuongson.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/gsm.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://amecc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ams.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.fpt.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/fpt.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://benxehanoi.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hnb.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://tienbo.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ttb.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vangdanhcoal.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/tvd.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://hns.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hmg.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.lilama3.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/lm3.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.aviprint.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ihk.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ptscdinhvu.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ptsc-dinh-vu.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.hanoifuel.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hfc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://nhuatienphong.vn/trang-chu' target='_blank'>
                        <img className='img-content' src='src/assets/images/ntp.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://biathanhhoa.com.vn/web/' target='_blank'>
                        <img className='img-content' src='src/assets/images/thb.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://nuockhoangsonkim.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/nshc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://saigonphutho.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/bsp.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://hcmcc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hms.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.miaduongcaobang.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cbs.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.minegeology.vn/default.aspx' target='_blank'>
                        <img className='img-content' src='src/assets/images/mgc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://channuoimitraco.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/mls.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.hanosimex.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hsm.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ratraco.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/rat.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://ndhp.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hnd.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='' target='_blank'>
                        <img className='img-content' src='src/assets/images/bhv.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://thuydiennammu.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hjs.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.hgm.vn/gioi-thieu.aspx' target='_blank'>
                        <img className='img-content' src='src/assets/images/hgm.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vinaincon.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vvn.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.inwama4.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dt4.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://tocolimexlangson.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dxl.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.baobibimson.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/bpc.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.damsanjsc.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ads.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://congtyotohanamninh.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/xknd.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://hanoitram.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/hnt.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vantaihanoi.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/hhn.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://fpt.vn/vi' target='_blank'>
                        <img className='img-content' src='src/assets/images/fox.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://xekhachhn.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cxhnen.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.newwayjsc.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/nwt.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://vantailienninh.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/bln.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.hadubeco.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/had.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://nhuabaobivinh.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vbc.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://ximanghoangmai.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hom.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://nasco.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/nas.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://ctcc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cdh.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://viwaco.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vav.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://nghetinhport.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/nap.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://taynamdamai.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/tnd.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://bacgiangwsc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/bgw.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.congvienhotay.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/hes.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://tructhon.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/trt.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://phuthanhgroup.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/mpt.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.sivico.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/siv.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://damhabac.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dhb.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://betongdaotu.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/xmd.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ytevietnhat.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/jvc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://hanoitoserco.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/tsj.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://capnuoclaocai.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/lws.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.saigondongxuan.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/bsd.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://duongsatvinhphu.com' target='_blank'>
                        <img className='img-content' src='src/assets/images/dsv.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://usco.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/usc.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://bachdanggroup.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/bdc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.licogi.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/lic.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.cauduong.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cdg.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.hataphar.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/dht.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://capnuocsonla.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/nsl.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://thuongmaihatay.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/htt.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://futu1.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ft1.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://fomeco.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/fbc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://techvina.vn/vi/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cet.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.miaduongsonla.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/sls.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.sonhaiphong.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hpp.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vinavetco.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vny.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://benhvienquoctethainguyen.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/bvtn.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://huana.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hna.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.lilama.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/llm.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://cpxd1369.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/c69.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.dopharma.com.vn/index.php' target='_blank'>
                        <img className='img-content' src='src/assets/images/dp2.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://ccichn.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cch.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://vinatex.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vgt.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='kimloaimau.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/tmg.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='ximangquantrieu.com' target='_blank'>
                        <img className='img-content' src='src/assets/images/cqt.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='www.ppc.evn.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/ppc.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://stbhn.edu.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hab.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://hapemco.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/dhp.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.mediplantex.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/med.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://frt.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/frt.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://quangninhpine.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/tqn.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://habecohaiphong.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hbh.gif' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://hacc1.com.vn/vi/' target='_blank'>
                        <img className='img-content' src='src/assets/images/hc1.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://vietphatjsc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vpg.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://createcapital.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/crc.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://has.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/x26.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ptsnghetinh.petrolimex.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ptx1.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://giaothonghanoi.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/gthnxoa.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.petrowaco.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/pwa.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://vinaruco.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vrgnentrang.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://thuanducjsc.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/tdp.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://natexco.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ndt.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vinaherbfoods.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/vhe.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='www.huewaco.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/hws.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='mongduongcoal.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/mdc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='congtycophan397.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/bcb-2.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='becamexacc.com.vn/vi/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cong-ty-co-phan-be-tong-becamex.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://aceco.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-be-tong-ly-tam-an-giang.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-xuat-nhap-khau-thuy-san-cuu-long-an-giang.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://adongpaint.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cong-ty-co-phan-son-a-dong.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://moitruongdothi.angiang.org.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-moi-truong-do-thi-an-giang.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.agifish.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-xuat-nhap-khau-thuy-san-an-giang.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://agimexpharm.com/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-duoc-pham-agimexpharm.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.antesco.com' target='_blank'>
                        <img className='img-content' src='src/assets/images/logo.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.anphapetrol.com/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-tap-doan-dau-khi-an-pha.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-xnk-y-te-tp-hcm.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='www.wsb-sabeco.com.vn.' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-bia-sai-gon-mien-tay.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://bxmt.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-ben-xe-mien-tay.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vungtautourist.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-du-lich-tinh-ba-ria-vung-tau.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vitranschart.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-van-tai-va-thue-tau-bien-vn.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://vinalinklogistics.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-logistic-vinalink.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.vinafreight.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-vinafreight.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://intourcoresort.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-du-lich-quoc-te-vung-tau.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.viettien.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/tong-cong-ty-cp-may-viet-tien.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vneco9.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-dau-tu-va-xay-dung-vneco-9.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://luoithepbinhtay.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-luoi-thep-binh-tay.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.vidipha.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-duoc-pham-trung-uong-vidipha.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://thepbienhoa.vn/home/index.php?mod=article' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-thep-vicasa.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.idico-udico.com.vn/welcome/vn' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-dau-tu-va-phat-trien-nha-va-do-thi-idico.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.udec.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-xay-dung-va-phat-trien-do-thi-ba-ria-vung-tau.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://tayhobqp.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-dau-tu-va-xay-dung-tay-ho.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-tu-van-xay-dung-dien-4.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.trc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cao-su-thong-nhat.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://thienlonggroup.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-tap-doan-thien-long.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.tinnghiaip.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-phat-trien-kcn-tin-nghia.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://tiegroup.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-tie.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://tinnghiacorp.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/tong-ct-tin-nghia-ctcp.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://thepthuduc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-thep-thu-duc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.capnuocthuduc.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cap-nuoc-thu-duc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.sovi.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-bao-bi-bien-hoa.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.stb.com.vn/vi/?view=home' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-sach-va-thiet-bi-truong-hoc-hcm.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://seadanang.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-xnk-thuy-san-mien-trung.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://sonadezi.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/tong-ct-co-phan-phat-trien-khu-cong-nghiep.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://smc.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/tong-cong-ty-cp-dau-tu-thuong-mai-smc.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://biasaigonmt.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-bia-sai-gon-mien-trung.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://superdong.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-tau-cao-toc-superdong-kien-giang.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://candon.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-thuy-dien-can-don.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://sgtd.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-bia-nuoc-giai-khat-sai-gon-tay-do.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.sfc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-nhien-lieu-sai-gon.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.mientrungpid.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-dau-tu-va-phat-trien-dien-mien-trung.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://news.sonadezi-sdv.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-dich-vu-sonadezi.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://dongnaipaint.com.vn/news.aspx?catid=1' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-son-dong-nai.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.sadico.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-sadico-can-tho.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.seameco.com.vn/vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cong-nghiep-thuy-san.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://biasaigonbaclieu.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-bia-sai-gon-bac-lieu.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://savimex.com.vn/vi/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-hop-tac-kinh-te-va-xnk-savimex.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.safocofood.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-luong-thuc-thuc-pham-safoco.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.quoccuonggialai.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-quoc-cuong-gia-lai.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pvc-ms.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-ket-cau-kim-loai-va-lap-may-dau-khi.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ptsc.com.vn' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/tong-cong-ty-cp-dich-vu-ky-thuat-dau-khi-vn.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ptco.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-dich-vu-xay-dung-cong-trinh-buu-dien.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.phucthinh.com.vn' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-thiet-ke-xay-dung-thuong-mai-phuc-thinh.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.channuoiphuson.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-chan-nuoi-phu-son.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://pntc.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-ky-thuat-xay-dung-phu-nhuan.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pgs.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-kinh-doanh-khi-mien-nam.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.petrosetco.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-dich-vu-tong-hop-dau-khi.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.dongnai-port.com' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cang-dong-nai.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.opcpharma.com' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-duoc-pham-opc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.pvoil.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/tong-cong-ty-dau-viet-nam-ctcp.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ntw.com.vn' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cap-nuoc-nhon-trach.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.nhatrangseafoods.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-det-may-nha-trang.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.nhatrangseafoods.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-nha-trang-seafoods-f17.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.dolicovn.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-nong-suc-san-dong-nai.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://capnuocninhthuan.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cap-nuoc-ninh-thuan.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.namkimgroup.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-thep-nam-kim.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://nagecco.com' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-tu-van-xay-dung-tong-hop.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.hungvuongpanga.com' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-hung-vuong.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://kpceco.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-be-tong-ly-tam-dien-luc-khanh-hoa.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ctyphattriendothikg.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-phat-trien-do-thi-kien-giang.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.congtrinhdothibentre.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cong-trinh-dothi-ben-tre.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://www.benthanhtourist.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-dich-vu-du-lich-ben-thanh.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.xaydung47.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-xay-dung-47.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://agrimexco.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-xnk-nong-san-thuc-pham-ca-mau.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://cafecontrol.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-giam-dinh-ca-phe-hang-hoa-xuat-nhap-khau.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://angiangport.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cang-an-giang.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pvcl.com.vn/home/home.php' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-dau-tu-va-phat-trien-do-thi-dau-khi-cuu-long.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ximangcantho.vn/ NOT' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-khoang-san-va-xi-mang-can-tho-2.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.camranhport.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cang-cam-ranh.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.canthoport.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cang-can-tho.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.cokhiangiang.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-co-khi-an-giang.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://cicgroups.com/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-tap-doan-tu-van-dau-tu-xay-dung-kien-giang.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.tncm.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-thuong-nghiep-ca-mau.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.casumina.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cong-nghiep-cao-su-mien-nam.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.gialaictc.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-gia-lai-ctc.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://congthanhgroup.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-tap-doan-cong-thanh.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://ctn-cantho.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cap-thoat-nuoc-can-tho.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://chp.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-thuy-dien-mien-trung.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.danapha.com/vi/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-duoc-danapha.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://donga.khatoco.com/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-dong-a.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://lawaco.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-cap-thoat-nuoc-long-an.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://lbm-vn.vn/en/home/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-khoang-san-va-vat-lieu-xay-dung-lam-dong.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://ladophar.com/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-duoc-lam-dong-ladophar.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://lhc.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-dau-tu-va-xay-dung-thuy-loi-lam-dong.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://donagamex.com.vn/default.aspx' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-tong-cong-ty-may-dong-nai.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://duongsatnghiabinh.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-duong-sat-nghia-binh.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.ngoprexco.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/ctcp-che-bien-thuy-san-xuat-khau-ngo-quyen.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pc3invest.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-dau-tu-dien-luc-3.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://duongsatphukhanh.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-duong-sat-phu-khanh.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pnco.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-tan-cang-phu-huu.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pnco.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-thuong-mai-phu-nhuan.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pvoilphuyen.com.vn/default.aspx' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-xang-dau-dau-khi-phu-yen.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.protrade.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/tong-ctcp-san-xuat-xuat-nhap-khau-binh-duong.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.pve.vn/vn/home' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/tong-cong-ty-tu-van-thiet-ke-dau-khi-ctcp.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://capthoatnuocpy.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/ctcp-cap-thoat-nuoc-phu-yen.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://tanitour.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-du-lich-thuong-mai-tay-ninh.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://tvpharm.com.vn/index.php/en/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cong-ty-co-phan-duoc-pham-tvpharm.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='https://vietthang.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/tong-cong-ty-viet-thang-ctcp.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.congtrinhdothitravinh.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-cong-trinh-do-thi-tra-vinh.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.trawaco.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-cap-thoat-nuoc-tra-vinh.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://ctdtst.vn' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-cong-trinh-do-thi-soc-trang.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://www.utxi.com.vn/' target='_blank'>
                        <img
                          className='img-content'
                          src='src/assets/images/cong-ty-co-phan-che-bien-thuy-san-ut-xi.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://bbcc.com.vn/bbcc/' target='_blank'>
                        <img
                          className='img-content'
                          src='/media/4282/cong-ty-co-phan-xay-dung-và-san-xuat-vat-lieu-xay-dung-bien-hoa.png'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://capnuocvl.com.vn/' target='_blank'>
                        <img className='img-content' src='src/assets/images/cong-ty-co-phan-cap-nuoc-vinh-long.png' />
                      </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='img-media'>
                      <a href='http://vinaprinting.vn/' target='_blank'>
                        <img className='img-content' src='/media/4284/ctcp-in-và-thuong-mai-vina.png' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <script></script>
        </div>
        {/* fix-content */}
        <div className='fpts-footer' id='footter'>
          <div className='fpts-topfootter'>
            <div className='container fix-container__'>
              <ul>
                <li>
                  <a href='/ho-tro-khach-hang/giao-dich-chung-khoan-co-so/cau-hoi-thuong-gap/'>CÂU HỎI THƯỜNG GẶP</a>
                </li>
                <li>
                  <a href='http://www.fpts.com.vn/media/1574/dieu-khoan-su-dung-website-fptsfile.pdf' target='_blank'>
                    ĐIỀU KHOẢN
                  </a>
                </li>

                <li>
                  <a href='/gop-y/'>GÓP Ý</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='fpts-footter-where'>
            <div className='container fix-container__'>
              <div className='fpts-col-footer'>
                <p className='fpts-footer-wheretitle'>CỔNG THÔNG TIN ĐIỆN TỬ</p>
                <ul>
                  <li className='licenseNumber'>
                    <p>Số giấy phép: 3438/GP-TTĐT ngày 04/07/2016</p>
                  </li>
                  <li className='founder'>
                    <p>Chịu trách nhiệm chính: Ông Nguyễn Điệp Tùng – Tổng Giám đốc</p>
                  </li>
                  <li>
                    <p>52 đường Lạc Long Quân, phường Bưởi, quận Tây Hồ, TP. Hà Nội</p>
                  </li>
                  <li>
                    <p className='phone'>19006446</p>
                    <p className='fax'>Fax : 024 3773 9058</p>
                  </li>
                  <li>
                    <p>fptsecurities@fpts.com.vn</p>
                  </li>
                </ul>
              </div>
              <div className='fpts-col-footer'>
                <p className='fpts-footer-wheretitle'>Chi nhánh TP. Hồ Chí Minh</p>
                <ul>
                  <li className='licenseNumber'>
                    <p></p>
                  </li>
                  <li className='founder'>
                    <p></p>
                  </li>
                  <li>
                    <p>Tầng 3, Tòa nhà 136-138 Lê Thị Hồng Gấm, phường Nguyễn Thái Bình, Quận 1, TP.Hồ Chí Minh</p>
                  </li>
                  <li>
                    <p className='phone'>19006446</p>
                    <p className='fax'>Fax : 028 6291 0607</p>
                  </li>
                  <li>
                    <p>fptsecurities@fpts.com.vn</p>
                  </li>
                </ul>
              </div>
              <div className='fpts-col-footer'>
                <p className='fpts-footer-wheretitle'>Chi nhánh Đà Nẵng</p>
                <ul>
                  <li className='licenseNumber'>
                    <p></p>
                  </li>
                  <li className='founder'>
                    <p></p>
                  </li>
                  <li>
                    <p>Số 100 Quang Trung, phường Thạch Thang, quận Hải Châu , TP Đà Nẵng</p>
                  </li>
                  <li>
                    <p className='phone'>19006446</p>
                    <p className='fax'>Fax: 0236 3553 888</p>
                  </li>
                  <li>
                    <p>fptsecurities@fpts.com.vn</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='fpts-securities'>
            <div className='container fix-container'>
              <p>© 2019 Công ty Cổ phần Chứng khoán FPT</p>
            </div>
          </div>
        </div>
        <div className='ScrollTop' id='ScrollTop'></div>

        <div className='clearfix'></div>
      </div>
      <div className='clearfix'></div>
    </>
  )
}
export default Home
