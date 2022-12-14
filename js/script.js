var next = 1;
var clicked = false;
var imageArray = [];
function initBanner() {
    for (var i = 1; i <= 5; i++)
        imageArray.push("url(assets/images/banner/banner" + i + ".jpg)");
    document.getElementById("banner").style.backgroundImage = imageArray[0];
    setTimeout(runBanner, 3000);
}
function runBanner() {
    var image = document.getElementById("banner").style.backgroundImage.match(/(\d+)/); // get the number of the current banner from the url
    var index = image[0] - 1 + next; // find the index of the next banner or previous banner
    if (index >= imageArray.length)
        index = 0;
    else if (index < 0)
        index = imageArray.length - 1;
    document.getElementById("banner").style.backgroundImage = imageArray[index];
    if (!clicked) {
        setTimeout(runBanner, 3000);
    } else {
        clicked = false;
        next = 1;
    }
}
function prevBanner() {
    clicked = true;
    next = -1;
    runBanner();
}
function nextBanner() {
    clicked = true;
    next = 1;
    runBanner();
}
window.onscroll = function() {showbacktop()};
function showbacktop() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("backtotop").style.display = "flex";
    } else {
        document.getElementById("backtotop").style.display = "none";
    }
}
function backtop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function showLogin() {
    document.getElementById("container").style.display = "block";
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "none";
}
function showSignUp() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}
function backFromLogin() {
    document.getElementById("container").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("wrapper").style.display = "none";
}
function createBook() {
    if (JSON.parse(localStorage.getItem('category')) != null)
        return;
    const category = [
        {id:1, name:"Gi??o d???c", quantity:0, listcategory: [
            {id:"GK", name:"S??ch gi??o khoa", quantity:0, books:[
                {id:"GK1", name:"B??? SGK L???p 1 - Ch??n Tr???i S??ng T???o",cat:null,price:"186.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK1.jpeg"},
                {id:"GK2", name:"B??? SGK L???p 2 - Ch??n Tr???i S??ng T???o",cat:null,price:"179.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK2.jpeg"},
                {id:"GK3", name:"B??? SGK L???p 3",cat:null,price:"115.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK3.jpeg"},
                {id:"GK4", name:"B??? SGK L???p 4",cat:null,price:"200.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK4.jpeg"},
                {id:"GK5", name:"B??? SGK L???p 5",cat:null,price:"240.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK5.jpeg"},
                {id:"GK6", name:"B??? SGK L???p 6 - C??nh Di???u",cat:null,price:"259.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK6.jpeg"},
                {id:"GK7", name:"B??? SGK L???p 7",cat:null,price:"240.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK7.jpeg"},
                {id:"GK8", name:"B??? SGK L???p 8",cat:null,price:"180.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK8.jpeg"},
                {id:"GK9", name:"B??? SGK L???p 9",cat:null,price:"240.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK9.jpeg"},
                {id:"GK10", name:"B??? SGK L???p 10",cat:null,price:"164.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK10.jpeg"},
                {id:"GK11", name:"B??? SGK L???p 11",cat:null,price:"249.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK11.jpeg"},
                {id:"GK12", name:"B??? SGK L???p 12",cat:null,price:"180.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK12.jpeg"},
                {id:"GK13", name:"B??? SGK (S??ch b??i t???p) L???p 2 - C??nh Di???u",cat:null,price:"159.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK13.jpeg"},
                {id:"GK14", name:"S??ch b??i t???p V???t L?? L???p 10 - C??nh Di???u",cat:null,price:"22.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK14.jpeg"},
                {id:"GK15", name:"B??? SGK (S??ch b??i t???p) L???p 12",cat:null,price:"164.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK15.jpeg"},
                {id:"GK16", name:"B??? SGK (S??ch b??i t???p) L???p 6 - Ch??n Tr???i S??ng T???o",cat:null,price:"234.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK16.jpeg"},
                {id:"GK17", name:"Gi??o D???c Kinh T??? V?? Ph??p Lu???t L???p 10 - Ch??n Tr???i S??ng T???o",cat:null,price:"27.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK17.jpeg"},
                {id:"GK18", name:"SGK Ho?? H???c L???p 10 - C??nh Di???u",cat:null,price:"24.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK18.jpeg"},
                {id:"GK19", name:"S??ch b??i t???p To??n L???p 10 (T???p 1) - C??nh Di???u",cat:null,price:"24.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK19.jpeg"},
                {id:"GK20", name:"S??ch b??i t???p L???ch S??? L???p 10 - C??nh Di???u",cat:null,price:"17.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK20.jpeg"},
                {id:"GK21", name:"S??ch Chuy??n ????? Ng??? V??n L???p 10 - C??nh Di???u",cat:null,price:"16.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK21.jpeg"},
                {id:"GK22", name:"S??ch Chuy??n ????? C??ng Ngh??? L???p 10 - C??nh Di???u",cat:null,price:"25.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK22.jpeg"},
                {id:"GK23", name:"S??ch b??i t???p Khoa h???c t??? nhi??n L???p 10 - C??nh Di???u",cat:null,price:"28.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK23.png"},
                {id:"GK24", name:"SGK ??m Nh???c L???p 7 - C??nh Di???u",cat:null,price:"11.000"+" VND",quantity:10,image:"/assets/images/product/Sach/GiaoDuc/SachGiaoKhoa/GK24.png"},
            ]},
            {id:"TK", name:"S??ch tham kh???o", quantity:0, books:[
                {id:"TK1", name:"H?????ng d???n h???c Ng??? V??n 6 (T???p 1)",cat:null,price:"69.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK1.jpeg"},
                {id:"TK2", name:"S??ch tham kh???o V???t L?? 10",cat:null,price:"138.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK2.jpeg"},
                {id:"TK3", name:"S??ch tham kh???o Ho?? H???c 10",cat:null,price:"98.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK3.jpeg"},
                {id:"TK4", name:"S??ch tham kh???o Khoa h???c t??? nhi??n 7",cat:null,price:"125.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK4.jpeg"},
                {id:"TK5", name:"S??ch tham kh???o To??n 10 (Quy???n 1)",cat:null,price:"110.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK5.jpeg"},
                {id:"TK6", name:"S??ch tham kh???o Luy???n t???p To??n 3 (2 quy???n)",cat:null,price:"64.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK6.jpeg"},
                {id:"TK7", name:"B???i d?????ng Ng??? V??n 10",cat:null,price:"58.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK7.jpeg"},
                {id:"TK8", name:"B???i d?????ng H???c sinh gi???i Sinh H???c 8",cat:null,price:"55.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK8.jpeg"},
                {id:"TK9", name:"S??? tay ki???n th???c Ho?? H???c THPT",cat:null,price:"90.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK9.png"},
                {id:"TK10", name:"35 ????? Ti???ng Anh Thi V??o L???p 10 (C?? ????p ??n)",cat:null,price:"65.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK10.jpeg"},
                {id:"TK11", name:"Combo S??ch B??i T???p N??ng Cao To??n L???p 2",cat:null,price:"113.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK11.jpeg"},
                {id:"TK12", name:"S??ch tham kh???o ????? Ki???m Tra Ti???ng Anh 7",cat:null,price:"59.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK12.jpeg"},
                {id:"TK13", name:"B??i t???p Ti???ng Anh 8 (Kh??ng ????p ??n)",cat:null,price:"40.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK13.jpeg"},
                {id:"TK14", name:"B??i t???p Ti???ng Anh 3",cat:null,price:"40.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK14.jpeg"},
                {id:"TK15", name:"Chinh Ph???c Luy???n Thi V??o L???p 10 M??n Ti???ng Anh Theo Ch??? ?????",cat:null,price:"109.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK15.jpeg"},
                {id:"TK16", name:"B??i T???p Tr???c Nghi???m Ti???ng Anh 9 (C?? ????p ??n)",cat:null,price:"56.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK16.jpeg"},
                {id:"TK17", name:"Tr???c nghi???m ?????a L?? L???p 7",cat:null,price:"42.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK17.jpeg"},
                {id:"TK18", name:"????? ki???m tra Ng??? V??n L???p 10",cat:null,price:"55.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK18.jpeg"},
                {id:"TK19", name:"R??n k??? n??ng h???c t???t To??n 8",cat:null,price:"59.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK19.jpeg"},
                {id:"TK20", name:"Tr??? l???i c??u h???i & Gi???i b??i t???p Ng??? V??n 8",cat:null,price:"55.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK20.jpeg"},
                {id:"TK21", name:"H?????ng d???n gi???i b??i t???p V???t L?? L???p 12",cat:null,price:"49.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK21.jpeg"},
                {id:"TK22", name:"Nh???ng b??i v??n m???u 9",cat:null,price:"61.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK22.jpeg"},
                {id:"TK23", name:"Tuy???n ch???n 25 ????? thi Ng??? V??n k?? thi THPT",cat:null,price:"83.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK23.jpeg"},
                {id:"TK24", name:"Gi???i b??i t???p V???t L?? 9",cat:null,price:"64.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/SachThamKhao/TK24.jpeg"},
    
            ]},
            {id:"TD", name:"T??? ??i???n", quantity:0, books:[
                {id:"TD1", name:"T??? ??i???n Oxford Anh - Anh - Vi???t (B??a V??ng)",cat:null,price:"298.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD1.jpeg"},
                {id:"TD2", name:"T??? ??i???n Anh Vi???t 200.000 t???",cat:null,price:"105.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD2.jpeg"},
                {id:"TD3", name:"T??? ??i???n H??n Vi???t (B??a C???ng)",cat:null,price:"200.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD3.jpeg"},
                {id:"TD4", name:"T??? ??i???n Vi???t Nga",cat:null,price:"165.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD4.jpeg"},
                {id:"TD5", name:"T??? ??i???n c??ch d??ng Ti???ng Anh",cat:null,price:"300.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD5.jpeg"},
                {id:"TD6", name:"T??? ??i???n Anh - Vi???t b??? t??i",cat:null,price:"99.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD6.jpeg"},
                {id:"TD7", name:"T??? ??i???n M??? H???c",cat:null,price:"399.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD7.jpeg"},
                {id:"TD8", name:"T??? ??i???n Nh???t - Vi???t th??ng d???ng",cat:null,price:"105.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD8.jpeg"},
                {id:"TD9", name:"T??? ??i???n Ch??nh T???",cat:null,price:"40.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD9.gif"},
                {id:"TD10", name:"T??? ??i???n Nga - Vi???t",cat:null,price:"165.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD10.jpeg"},
                {id:"TD11", name:"T??? ??i???n Nh???t - Vi???t, Vi???t - Nh???t",cat:null,price:"145.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD11.jpeg"},
                {id:"TD12", name:"T??? ??i???n H??n Vi???t",cat:null,price:"45.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD12.jpeg"},
                {id:"TD13", name:"T??? ??i???n tr???c quan b??? t??i Ph??p - Vi???t",cat:null,price:"188.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD13.png"},
                {id:"TD14", name:"T??? ??i???n Vi???t - H??n",cat:null,price:"80.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD14.jpeg"},
                {id:"TD15", name:"T??? ??i???n Ti???ng Vi???t",cat:null,price:"165.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD15.jpeg"},
                {id:"TD16", name:"T??? ??i???n Tri???t H???c Habermas",cat:null,price:"135.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD16.jpeg"},
                {id:"TD17", name:"T??? ??i???n b??ch khoa t????ng t??c cho tr??? em (Anh - Hoa - Vi???t)",cat:null,price:"66.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD17.jpeg"},
                {id:"TD18", name:"T??? ??i???n Ti???ng Anh b???ng h??nh",cat:null,price:"117.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD18.jpeg"},
                {id:"TD19", name:"T??? ??i???n Hoa - Vi???t",cat:null,price:"78.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD19.jpeg"},
                {id:"TD20", name:"T??? ??i???n - S??ch c??ng c??? ch??? H??n c???a Vi???t Nam v?? Trung Qu???c",cat:null,price:"105.000"+" VND",quantity:10,image:"assets/images/product/Sach/GiaoDuc/TuDien/TD20.jpeg"},
    
            ]},
        ]},
        {id:2, name:"V??n h???c", quantity:0, listcategory: [
            {id:"TNG", name:"Truy???n ng???n", quantity:0, books:[
                {id:"TNG1", name:"T??? ??i???n Ti???ng 'Em'",cat:null,price:"69.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG1.png"},
                {id:"TNG2", name:"Nh???ng ????m Kh??ng Ng??? Nh???ng Ng??y Ch???m Tr??i",cat:null,price:"86.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG2.jpeg"},
                {id:"TNG3", name:"C?? M???t Ng??y, B??? M??? S??? Gi?? ??i",cat:null,price:"96.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG3.jpeg"},
                {id:"TNG4", name:"M??u Nh???t N???ng",cat:null,price:"149.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG4.jpeg"},
                {id:"TNG5", name:"Dear, Darling",cat:null,price:"88.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG5.jpeg"},
                {id:"TNG6", name:"H???n Nhau Ph??a Sau Tan V???",cat:null,price:"86.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG6.jpeg"},
                {id:"TNG7", name:"Ch??ng Ta R???i S??? H???nh Ph??c, Theo Nh???ng C??ch Kh??c Nhau",cat:null,price:"86.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG7.png"},
                {id:"TNG8", name:"G???i B???n, Ng?????i ???? Ki???t S???c V?? Nh???ng Ch???u ?????ng ??m Th???m",cat:null,price:"96.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG8.jpeg"},
                {id:"TNG9", name:"Chuy???n ICU - Khi Thi??n Th???n Nhi???m B???nh",cat:null,price:"119.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG9.jpeg"},
                {id:"TNG10", name:"M??nh Ph???i S???ng Nh?? Bi???n R???ng S??ng D??i",cat:null,price:"109.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG10.jpeg"},
                {id:"TNG11", name:"Th??? Gi???i N??y ??m Th???m Y??u Em",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG11.jpeg"},
                {id:"TNG12", name:"V?? Th?????ng",cat:null,price:"79.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG12.jpeg"},
                {id:"TNG13", name:"N???ng",cat:null,price:"89.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG13.jpeg"},
                {id:"TNG14", name:"H??y C???m L???y V?? ?????c",cat:null,price:"90.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG14.jpeg"},
                {id:"TNG15", name:"Ph??? N??? V???n Ng?????i M??",cat:null,price:"99.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG15.jpeg"},
                {id:"TNG16", name:"T??i Th??ch B???n Th??n N??? L???c H??n",cat:null,price:"120.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG16.jpeg"},
                {id:"TNG17", name:"V???i ???? L???t Ai C??ng L?? L??? Kh??ch",cat:null,price:"58.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG17.jpeg"},
                {id:"TNG18", name:"C??? Kh??c, C??? Tan V??? V?? Tr?????ng Th??nh",cat:null,price:"78.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG18.jpeg"},
                {id:"TNG19", name:"Danh T??c Vi???t Nam - L??o H???c (T???p Truy???n Ng???n)",cat:null,price:"52.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG19.jpeg"},
                {id:"TNG20", name:"?????ng C??? L??m Ng?????i T???t Trong M???t T???t C??? M???i Ng?????i",cat:null,price:"108.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG20.jpeg"},
                {id:"TNG21", name:"M???t L???n T???i Nh??n Gian, Ph???i S???ng ?????i R???c R???",cat:null,price:"119.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG21.jpeg"},
                {id:"TNG22", name:"V?? M??a Xu??n N??o C??ng Ph???i Tr??i ??i",cat:null,price:"45.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG22.jpeg"},
                {id:"TNG23", name:"Gi?? L???nh ?????u M??a",cat:null,price:"50.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG23.jpeg"},
                {id:"TNG24", name:"Xin Ch??o Ng?????i Tr??n Qu??",cat:null,price:"112.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenNgan/TNG24.jpeg"},
    
            ]},
            {id:"TRD", name:"Truy???n d??i", quantity:0, books:[
                {id:"TRD1", name:"Ra B??? Su???i Ng???m Hoa K??n H???ng",cat:null,price:"145.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD1.jpeg"},
                {id:"TRD2", name:"C???a Ti???m C???a Nh???ng L?? Th??",cat:null,price:"80.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD2.jpeg"},
                {id:"TRD3", name:"??t Quy??n V?? T??i",cat:null,price:"35.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD3.jpeg"},
                {id:"TRD4", name:"C???m ??n Ng?????i L???n",cat:null,price:"110.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD4.jpeg"},
                {id:"TRD5", name:"Thi??n Th???n Nh??? C???a T??i",cat:null,price:"68.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD5.jpeg"},
                {id:"TRD6", name:"B??n C?? N??m Ch??? Ng???i",cat:null,price:"38.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD6.jpeg"},
                {id:"TRD7", name:"Ph??ng Tr??? Ba Ng?????i",cat:null,price:"110.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD7.jpeg"},
                {id:"TRD8", name:"Ng??i Tr?????ng M???i Khi",cat:null,price:"43.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD8.jpeg"},
                {id:"TRD9", name:"Qu??n G?? ??i L??n",cat:null,price:"120.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD9.jpeg"},
                {id:"TRD10", name:"Th???ng Qu??? Nh???",cat:null,price:"70.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD10.jpeg"},
                {id:"TRD11", name:"N??? Sinh",cat:null,price:"55.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD11.jpeg"},
                {id:"TRD12", name:"Bu???i Chi???u Windows",cat:null,price:"56.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD12.jpeg"},
                {id:"TRD13", name:"??i Qua Hoa C??c",cat:null,price:"56.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD13.jpeg"},
                {id:"TRD14", name:"Nh???ng C?? Em G??i",cat:null,price:"105.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD14.jpeg"},
                {id:"TRD15", name:"Nh???ng Ch??ng Trai X???u T??nh",cat:null,price:"43.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD15.jpeg"},
                {id:"TRD16", name:"Con Chim Xanh Bi???c Bay V???",cat:null,price:"230.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD16.jpeg"},
                {id:"TRD17", name:"Tr?????c V??ng Chung K???t",cat:null,price:"50.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD17.jpeg"},
                {id:"TRD18", name:"Hoa H???ng X??? Kh??c",cat:null,price:"120.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD18.jpeg"},
                {id:"TRD19", name:"Bong B??ng L??n Tr???i",cat:null,price:"58.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD19.jpeg"},
                {id:"TRD20", name:"B??? C??u Kh??ng ????a Th??",cat:null,price:"38.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD20.jpeg"},
                {id:"TRD21", name:"Ch?? B?? R???c R???i",cat:null,price:"38.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD21.jpeg"},
                {id:"TRD22", name:"Tr???i Hoa V??ng",cat:null,price:"50.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD22.jpeg"},
                {id:"TRD23", name:"C??n Ch??t G?? ????? Nh???",cat:null,price:"43.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD23.jpeg"},
                {id:"TRD24", name:"L??m B???n V???i B???u Tr???i",cat:null,price:"110.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/TruyenDai/TRD24.jpeg"},
    
            ]},
            {id:"T", name:"Th??", quantity:0, books:[
                {id:"T1", name:"Th?? Kh??t V???ng",cat:null,price:"100.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T1.jpeg"},
                {id:"T2", name:"Th?? Xu??n Di???u",cat:null,price:"38.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T2.jpeg"},
                {id:"T3", name:"Th?? T??? H???u",cat:null,price:"35.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T3.jpeg"},
                {id:"T4", name:"Th?? H?????ng D????ng",cat:null,price:"60.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T4.jpeg"},
                {id:"T5", name:"Kh??c Ru Tr???m (77 Ca Kh??c Ph??? Th?? Nguy???n Ng???c H???nh)",cat:null,price:"200.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T5.jpeg"},
                {id:"T6", name:"Con ???????ng Th?? - To??n T???p Th?? Kh??? L??m",cat:null,price:"250.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T6.jpeg"},
                {id:"T7", name:"?????ng ????nh H??ng M???t B???n L??? - Th?? V?? H???a",cat:null,price:"450.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T7.jpeg"},
                {id:"T8", name:"G??c S??n V?? Kho???ng Tr???i",cat:null,price:"59.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T8.jpeg"},
                {id:"T9", name:"Tuy???n Th?? Tr???n ????ng Khoa",cat:null,price:"125.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T9.jpeg"},
                {id:"T10", name:"T??c Ph???m Ch???n L???c - V??n H???c ???n ????? - Nh???ng B??i Th??",cat:null,price:"40.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T10.jpeg"},
                {id:"T11", name:"T??? S??ch ?????i Ng?????i - Th?? Ng??? Ng??n",cat:null,price:"79.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T11.jpeg"},
                {id:"T12", name:"Ho??ng C???m 100 B??i Th??",cat:null,price:"116.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T12.jpeg"},
                {id:"T13", name:"Tinh Hoa V??n Ch????ng Vi???t - Th?? Xu??n Qu???nh",cat:null,price:"79.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T13.jpeg"},
                {id:"T14", name:"H??? Xu??n H????ng Th?? V?? ?????i",cat:null,price:"60.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T14.jpeg"},
                {id:"T15", name:"Nh?? D???i Ph?? V??n",cat:null,price:"126.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T15.jpeg"},
                {id:"T16", name:"V?? Qu???ng - M???t ?????i Th?? V??n - ???n B???n K??? Ni???m 100 N??m Ng??y Sinh Nh?? V??n V?? Qu???ng",cat:null,price:"180.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T16.jpeg"},
                {id:"T17", name:"Nguy???n ????nh Chi???u Th?? V?? ?????i",cat:null,price:"87.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T17.jpeg"},
                {id:"T18", name:"H??n M???c T??? Th?? V?? ?????i",cat:null,price:"60.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T18.jpeg"},
                {id:"T19", name:"Nh??? (Th?? Song Ng???)",cat:null,price:"42.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T19.jpeg"},
                {id:"T20", name:"Giai Nh??n Di M???c - S??? T??ch V?? Th?? T??? H??? Xu??n H????ng",cat:null,price:"65.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T20.jpeg"},
                {id:"T21", name:"N???ng Thi??n ???????ng",cat:null,price:"70.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T21.jpeg"},
                {id:"T22", name:"D????ng T?????ng",cat:null,price:"108.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T22.jpeg"},
                {id:"T23", name:"B???ng Nghe V???n 'Th???ng' V??t L??n Cao - Th?? H??? Ch?? Minh V?? Nh???ng L???i B??nh",cat:null,price:"168.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T23.jpeg"},
                {id:"T24", name:"Tuy???n t???p th?? c??? Trung Hoa (T???p 1 Ti??n T???n)",cat:null,price:"110.000"+" VND",quantity:10,image:"assets/images/product/Sach/VanHoc/Tho/T24.jpeg"},
    
            ]},
            {id:"KH", name:"Kh??c", quantity:0, books:[

            ]},
            
        ]},
        {id:3, name:"Ti???u thuy???t", quantity:0, listcategory: [
            {id:"NT", name:"Ng??n t??nh", quantity:0, books:[
                {id:"NT1", name:"B???n xe",cat:null,price:"76.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT1.jpeg"},
                {id:"NT2", name:"Th???t t???ch kh??ng m??a",cat:null,price:"79.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT2.jpeg"},
                {id:"NT3", name:"B??n nhau tr???n ?????i",cat:null,price:"145.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT3.jpeg"},
                {id:"NT4", name:"H??y nh???m m???t khi anh ?????n (t???p 1)",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT4.jpeg"},
                {id:"NT5", name:"H??y nh???m m???t khi anh ?????n (t???p 2)",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT5.jpeg"},
                {id:"NT6", name:"T???ng c?? ng?????i y??u t??i nh?? sinh m???nh",cat:null,price:"118.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT6.jpeg"},
                {id:"NT7", name:"Anh c?? th??ch n?????c M??? kh??ng?",cat:null,price:"138.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT7.jpeg"},
                {id:"NT8", name:"S??? c?? thi??n th???n thay anh y??u em",cat:null,price:"138.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT8.jpeg"},
                {id:"NT9", name:"Ho?? ra anh v???n ??? ????y (t???p 1)",cat:null,price:"74.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT9.jpeg"},
                {id:"NT10", name:"Ho?? ra anh v???n ??? ????y (t???p 2)",cat:null,price:"74.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT10.jpeg"},
                {id:"NT11", name:"Y??u em t??? c??i nh??n ?????u ti??n",cat:null,price:"109.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT11.jpeg"},
                {id:"NT12", name:"All in love - Ng???p tr??n y??u th????ng",cat:null,price:"118.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT12.jpeg"},
                {id:"NT13", name:"M??i m??i l?? bao xa",cat:null,price:"135.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT13.jpeg"},
                {id:"NT14", name:"Em s??? ?????n c??ng c??n m??a",cat:null,price:"90.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT14.jpeg"},
                {id:"NT15", name:"R???ng Na Uy",cat:null,price:"128.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT15.jpeg"},
                {id:"NT16", name:"L???p L??nh",cat:null,price:"58.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT16.jpeg"},
                {id:"NT17", name:"Your Name",cat:null,price:"75.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT17.jpeg"},
                {id:"NT18", name:"Socrates In Love",cat:null,price:"65.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT18.jpeg"},
                {id:"NT19", name:"5 Centimet tr??n gi??y",cat:null,price:"50.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT19.jpeg"},
                {id:"NT20", name:"Khu v?????n ng??n t???",cat:null,price:"95.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT20.jpeg"},
                {id:"NT21", name:"T??i v???n nghe ti???ng em th???m g???i",cat:null,price:"52.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT21.jpeg"},
                {id:"NT22", name:"North and South",cat:null,price:"74.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT22.jpeg"},
                {id:"NT23", name:"Ki??u H??nh v?? ?????nh Ki???n",cat:null,price:"95.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT23.jpeg"},
                {id:"NT24", name:"Me Before You",cat:null,price:"180.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_NgonTinh/NT24.jpeg"},
    
            ]},
            {id:"GT", name:"Gi??? t?????ng", quantity:0, books:[
                {id:"GT1", name:"Harry Potter (Tr???n b???)",cat:null,price:"1.550.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT1.jpeg"},
                {id:"GT2", name:"Ch??a t??? nh???ng chi???c nh???n (Tr???n b???)",cat:null,price:"470.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT2.jpeg"},
                {id:"GT3", name:"The Hobbit (Anh ch??ng Hobbit)",cat:null,price:"105.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT3.jpeg"},
                {id:"GT4", name:"A Game of Thrones",cat:null,price:"270.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT4.jpeg"},
                {id:"GT5", name:"The Chronicles of Narnia (Tr???n b???)",cat:null,price:"307.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT5.jpeg"},
                {id:"GT6", name:"Dune - X??? C??t",cat:null,price:"249.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT6.jpeg"},
                {id:"GT7", name:"Th???n tho???i B???c ??u",cat:null,price:"96.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT7.jpeg"},
                {id:"GT8", name:"Eragon - C???u b?? c?????i r???ng",cat:null,price:"100.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT8.jpeg"},
                {id:"GT9", name:"C??? m??y th???i gian",cat:null,price:"68.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT9.jpeg"},
                {id:"GT10", name:"Tam Th??? (Tr???n b???)",cat:null,price:"665.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT10.jpeg"},
                {id:"GT11", name:"Tr???m t??n hi???u s??? 23",cat:null,price:"79.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT11.jpeg"},
                {id:"GT12", name:"Li???u trai ch?? d???",cat:null,price:"226.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT12.jpeg"},
                {id:"GT13", name:"R???p xi???c ????m",cat:null,price:"160.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT13.jpeg"},
                {id:"GT14", name:"Artemis Fowl (Tr???n b???)",cat:null,price:"1.050.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT14.jpeg"},
                {id:"GT15", name:"Outlander (Tr???n b???)",cat:null,price:"528.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT15.jpg"},
                {id:"GT16", name:"?????i Nam D??? Truy???n",cat:null,price:"76.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT16.jpeg"},
                {id:"GT17", name:"N??i khu r???ng ch???m t???i nh???ng v?? sao",cat:null,price:"179.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT17.jpeg"},
                {id:"GT18", name:"451 ????? F",cat:null,price:"99.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT18.jpeg"},
                {id:"GT19", name:"X??? S??? Di???u K??? T??n B???o V?? Ch???n T???n C??ng Th??? Gi???i",cat:null,price:"139.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT19.jpeg"},
                {id:"GT20", name:"Hai v???n d???m d?????i ????y bi???n",cat:null,price:"98.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT20.jpeg"},
                {id:"GT21", name:"C?? th??nh trong g????ng",cat:null,price:"218.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT21.jpeg"},
                {id:"GT22", name:"H???",cat:null,price:"62.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT22.jpeg"},
                {id:"GT23", name:"Qu??n canh b?? h???m c???a k??? c???p qu?? kh???",cat:null,price:"216.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT23.jpeg"},
                {id:"GT24", name:"X??? Th??ng M?????i",cat:null,price:"219.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_GiaTuong/GT24.jpeg"},
    
            ]},
            {id:"TTLS", name:"Ti???u thuy???t L???ch s???", quantity:0, books:[
                {id:"LS1", name:"Nh???ng ng?????i kh???n kh??? (Tr???n b???)",cat:null,price:"390.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS1.jpg"},
                {id:"LS2", name:"Chi???n Tranh v?? Ho?? B??nh (Tr???n b???)",cat:null,price:"395.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS2.jpeg"},
                {id:"LS3", name:"B?? t?????c Monte Cristo",cat:null,price:"590.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS3.jpeg"},
                {id:"LS4", name:"Don Quixote (Tr???n b???)",cat:null,price:"263.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS4.jpeg"},
                {id:"LS5", name:"Tam Qu???c Di???n Ngh??a (Tr???n b???)",cat:null,price:"540.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS5.jpeg"},
                {id:"LS6", name:"Thu??? h??? (Tr???n b???)",cat:null,price:"330.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS6.jpeg"},
                {id:"LS7", name:"L??u ????i s??i",cat:null,price:"159.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS7.jpeg"},
                {id:"LS8", name:"Th??ng reo Ng??n H???ng",cat:null,price:"140.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS8.jpeg"},
                {id:"LS9", name:"L??? Chi",cat:null,price:"98.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS9.png"},
                {id:"LS10", name:"Fall of Giants",cat:null,price:"390.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS10.jpeg"},
                {id:"LS11", name:"Winter of the World",cat:null,price:"204.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS11.jpeg"},
                {id:"LS12", name:"Edge of Eternity",cat:null,price:"258.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS12.jpeg"},
                {id:"LS13", name:"Tr???n Nh???t Du???t",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS13.jpeg"},
                {id:"LS14", name:"Thi??n M???nh",cat:null,price:"160.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS14.jpeg"},
                {id:"LS15", name:"H??? Qu?? Ly",cat:null,price:"280.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS15.jpeg"},
                {id:"LS16", name:"L?? ????o Lang V????ng",cat:null,price:"170.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS16.jpeg"},
                {id:"LS17", name:"Nam ????? V???n Xu??n",cat:null,price:"140.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS17.jpeg"},
                {id:"LS18", name:"Nam Qu???c S??n H??",cat:null,price:"240.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS18.jpeg"},
                {id:"LS19", name:"Ti??u S??n Tr??ng S??",cat:null,price:"286.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS19.jpeg"},
                {id:"LS20", name:"Ngh??a ?????a Praha",cat:null,price:"120.000"+" VND",quantity:10,image:"assets/images/product/Sach/TieuThuyet/TT_LichSu/LS20.jpeg"},
    
            ]},

        ]},
        {id:4, name:"Kinh t???", quantity:0, listcategory: [
            {id:"QT", name:"Qu???n tr???", quantity:0, books:[
                {id:"QT1", name:"Qu???n Tr??? Nh??n S??? Th??ng Minh B???ng D??? Li???u",cat:null,price:"149.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT1.jpeg"},
                {id:"QT2", name:"Qu???n Tr??? C??ng Ty Kh???i Nghi???p",cat:null,price:"80.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT2.jpeg"},
                {id:"QT3", name:"Qu???n Tr??? Tinh G???n - Qu???n Tr??? Doanh Nghi???p, Qu???n Tr??? Cu???c ?????i",cat:null,price:"148.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT3.jpeg"},
                {id:"QT4", name:"Qu???n Tr??? Ngu???n Nh??n L???c LOGISTISC ??? Vi???t Nam",cat:null,price:"238.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT4.png"},
                {id:"QT5", name:"Qu???n Tr??? D??? ??n - Nh???ng Nguy??n T???c C??n B???n",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT5.jpeg"},
                {id:"QT6", name:"Qu???n Tr??? Nh??n S??? ????ng ",cat:null,price:"239.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT6.jpeg"},
                {id:"QT7", name:"Qu???n Tr??? D??? ??n",cat:null,price:"199.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT7.jpeg"},
                {id:"QT8", name:"Qu???n Tr??? Trong Th???i Kh???ng Ho???ng",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT8.jpeg"},
                {id:"QT9", name:"Qu???n Tr??? Chu???i Cung ???ng - Nh???ng Ph????ng Ph??p Hay Nh???t",cat:null,price:"199.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT9.jpeg"},
                {id:"QT10", name:"Qu???n Tr??? H???c - T??m T???t L?? Thuy???t V?? C??u H???i Tr???c Nghi???m",cat:null,price:"159.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT10.jpeg"},
                {id:"QT11", name:"Qu???n Tr??? T??i Ch??nh",cat:null,price:"590.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT11.jpeg"},
                {id:"QT12", name:"Qu???n Tr??? N??ng Nghi???p 4.0",cat:null,price:"400.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT12.jpeg"},
                {id:"QT13", name:"Qu???n Tr??? Doanh Nghi???p Trong Th???i ?????i M???i - Th??nh C??ng C?? ?? Ngh??a",cat:null,price:"58.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT13.jpeg"},
                {id:"QT14", name:"C???m Nang Qu???n Tr??? ??i???u H??nh - Qu???n Tr??? Vi M??",cat:null,price:"80.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT14.jpeg"},
                {id:"QT15", name:"OKR - 'Kinh Th??nh' Qu???n Tr??? V?? C??ch V???n H??nh Hi???u Qu???",cat:null,price:"134.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT15.jpeg"},
                {id:"QT16", name:"Nguy??n L?? Qu???n Tr??? Chu???i Cung ???ng",cat:null,price:"199.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT16.jpeg"},
                {id:"QT17", name:"Tinh Hoa Qu???n Tr??? D??? ??n D??nh Cho Qu???n L?? D??? ??n Kh??ng Chuy??n ",cat:null,price:"138.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT17.png"},
                {id:"QT18", name:"C???m Nang Qu???n Tr??? ??i???u H??nh - Qu???n Tr??? T??ch H???p",cat:null,price:"105.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT18.jpeg"},
                {id:"QT19", name:"Ki???m So??t Qu???n Tr??? - Corporate Governance",cat:null,price:"375.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT19.jpeg"},
                {id:"QT20", name:"Nh???ng ???o T?????ng Qu???n Tr??? ?????a Praha",cat:null,price:"136.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/QuanTri/QT20.png"},
    
            ]},
            {id:"M", name:"Marketing", quantity:0, books:[
                {id:"M1", name:"Marketing C??n B???n - Marketing 101",cat:null,price:"229.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M1.jpeg"},
                {id:"M2", name:"Marketing B2B S??ng T???o",cat:null,price:"165.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M2.jpeg"},
                {id:"M3", name:"Marketing - ?????t Ph?? Tr?????c Khi B??? ????",cat:null,price:"120.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M3.jpeg"},
                {id:"M4", name:"Marketing Th???c Chi???n - T??? Chi???n L?????c ?????n Th???c Thi",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M4.jpeg"},
                {id:"M5", name:"Marketing Du K??ch Trong 30 Ng??y",cat:null,price:"169.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M5.jpeg"},
                {id:"M6", name:"Marketing ?????t Ph??",cat:null,price:"118.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M6.png"},
                {id:"M7", name:"Marketing Cho Start Up",cat:null,price:"149.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M7.jpeg"},
                {id:"M8", name:"Marketing ????ng Kinh Ng???c",cat:null,price:"143.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M8.png"},
                {id:"M9", name:"Marketing Truy???n Mi???ng",cat:null,price:"109.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M9.jpeg"},
                {id:"M10", name:"Marketing Trong Cu???c C??ch M???ng C??ng Ngh??? 4.0",cat:null,price:"110.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M10.png"},
                {id:"M11", name:"Marketing H??? N??o ?????",cat:null,price:"160.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M11.jpeg"},
                {id:"M12", name:"Marketing Ph???i B??n ???????c H??ng",cat:null,price:"159.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M12.jpeg"},
                {id:"M13", name:"Marketing Tr??n M???t Trang Gi???y",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M13.jpeg"},
                {id:"M14", name:"Marketing Ki???u Xiaomi",cat:null,price:"149.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M14.jpeg"},
                {id:"M15", name:"Tiktok Marketing",cat:null,price:"139.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M15.jpeg"},
                {id:"M16", name:"Digital Marketing - Chi???n L?????c L?? L?????c ??i ????? Chi???n",cat:null,price:"139.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/Marketing/M16.png"},
    
            ]},
            {id:"NV", name:"Nh??n V???t", quantity:0, books:[
    
            ]},
            {id:"KN", name:"Kh???i nghi???p", quantity:0, books:[
                {id:"KN1", name:"Kh???i Nghi???p ?????i M???i S??ng T???o - T?? Duy & C??ng C???",cat:null,price:"169.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN1.jpeg"},
                {id:"KN2", name:"Kh???i Nghi???p Kh??ng Ph???i L?? ?????c M?? Xa V???i",cat:null,price:"75.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN2.jpeg"},
                {id:"KN3", name:"Kh???i Nghi???p Ngay!",cat:null,price:"65.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN3.jpeg"},
                {id:"KN4", name:"Kh???i Nghi???p T??o B???o",cat:null,price:"159.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN4.jpeg"},
                {id:"KN5", name:"Kh???i Nghi???p - L???a Ch???n Hay B???n N??ng",cat:null,price:"170.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN5.jpeg"},
                {id:"KN6", name:"Kh???i Nghi???p Tinh G???n - The Lean Startup",cat:null,price:"165.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN6.jpeg"},
                {id:"KN7", name:"Kh???i Nghi???p Phi??u L??u K??",cat:null,price:"175.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN7.png"},
                {id:"KN8", name:"Kh???i Nghi???p Kinh Doanh - L?? Thuy???t, Qu?? Tr??nh, Th???c Ti???n",cat:null,price:"380.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN8.png"},
                {id:"KN9", name:"Kh???i Nghi???p Cu???i Tu???n",cat:null,price:"99.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN9.jpeg"},
                {id:"KN10", name:"Kh???i Nghi???p - Con ???????ng Duy Nh???t Gi??p B???n Gi??u C??",cat:null,price:"35.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN10.jpeg"},
                {id:"KN11", name:"Kh???i Nghi???p - Th??ch Nghi & S???ng S??t",cat:null,price:"75.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN11.jpeg"},
                {id:"KN12", name:"Kh???i Nghi???p T??? A ?????n Z",cat:null,price:"59.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN12.jpeg"},
                {id:"KN13", name:"Kh???i Nghi???p T??? Ti???m Nh???",cat:null,price:"85.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN13.jpeg"},
                {id:"KN14", name:"36 L???i Khuy??n D??nh Cho Ng?????i Kh???i Nghi???p",cat:null,price:"159.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN14.jpeg"},
                {id:"KN15", name:"C??u Chuy???n Kh???i Nghi???p T??? Nh???ng G?? Kh???ng L??? C??ng Ngh???",cat:null,price:"139.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN15.jpeg"},
                {id:"KN16", name:"T??? Tin Kh???i Nghi???p",cat:null,price:"60.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/KhoiNghiep/KN16.jpeg"},

            ]},
            {id:"CK", name:"Ch???ng kho??n", quantity:0, books:[
                {id:"CK1", name:"Ch???ng Kho??n - H??y ?????u T?? Nh?? M???t Nh?? N??ng",cat:null,price:"239.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK1.jpeg"},
                {id:"CK2", name:"The Little Book - Chi???n L?????c L??i K??p Trong ?????u T?? Ch???ng Kho??n",cat:null,price:"149.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK2.png"},
                {id:"CK3", name:"Ph?? Th???y S??n Ch???ng Kho??n",cat:null,price:"199.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK3.jpeg"},
                {id:"CK4", name:"L??m Ch??? Th??? Tr?????ng Ch???ng Kho??n",cat:null,price:"149.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK4.jpeg"},
                {id:"CK5", name:"Ch??? Nam ?????u T?? C??? Phi???u V?? Ch???ng Kho??n",cat:null,price:"98.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK5.jpeg"},
                {id:"CK6", name:"?????u T?? Ch???ng Kho??n Theo Ch??? S???",cat:null,price:"110.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK6.jpeg"},
                {id:"CK7", name:"C???m Nang Ch???ng Kho??n Ph??i Sinh",cat:null,price:"269.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK7.jpeg"},
                {id:"CK8", name:"The Little Book - Qu???n Tr??? R???i Ro Trong ?????u T?? Ch???ng Kho??n",cat:null,price:"189.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK8.jpeg"},
                {id:"CK9", name:"20 N??m L???ch S??? Th??? Tr?????ng Ch???ng Kho??n Vi???t Nam - B??a C???ng",cat:null,price:"269.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK9.jpeg"},
                {id:"CK10", name:"?????u T?? Ch???ng Kho??n Kh??n Ngoan Khi B???n Kh??ng Ph???i ???C?? M???p???",cat:null,price:"158.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK10.jpeg"},
                {id:"CK11", name:"H???p S??ch (G???m 3 Cu???n) Chinh Ph???c Ch???ng Kho??n",cat:null,price:"499.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK11.jpeg"},
                {id:"CK12", name:"Ch???t V?? Ch???ng Kho??n",cat:null,price:"125.000"+" VND",quantity:10,image:"assets/images/product/Sach/KinhTe/ChungKhoan/CK12.jpg"},

            ]},
        ]},
        {id:5, name:"T??m l??/K??? n??ng s???ng", quantity:0, listcategory: [
            {id:"TL", name:"T??m l??", quantity:0, books:[
                {id:"TL1", name:"T??m L?? H???c Xoa D???u Nh???ng T???n Th????ng V?? Chia Ly",cat:null,price:"119.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL1.jpeg"},
                {id:"TL2", name:"T??m L?? H???c V??? S??? Lo ??u",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL2.jpeg"},
                {id:"TL3", name:"T??m L?? H???c Hi???n ?????i - Nh??n Th???u T??m Can, Thay ?????i T??m Tr??",cat:null,price:"150.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL3.jpeg"},
                {id:"TL4", name:"T??m L?? H???c - Gi???i M?? Qua G??c Nh??n ??i???n ???nh",cat:null,price:"145.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL4.jpeg"},
                {id:"TL5", name:"T??m L?? H???c T??ch C???c",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL5.jpeg"},
                {id:"TL6", name:"T??m L?? H???c H??nh Vi",cat:null,price:"98.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL6.png"},
                {id:"TL7", name:"T??m L?? H???c Trong Nh??y M???t - T??m L?? H???c T??? Ch???c - C??ng Nghi???p (T???p 6)",cat:null,price:"198.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL7.jpeg"},
                {id:"TL8", name:"T??m L?? H???c T???i Ph???m - Ph??c H???a Ch??n Dung K??? Ph???m T???i",cat:null,price:"145.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL8.jpeg"},
                {id:"TL9", name:"T??m L?? H???c Th???u Hi???u B???n Th??n",cat:null,price:"119.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL9.jpeg"},
                {id:"TL10", name:"T??m L?? H???c V??? S??? T??? T??n",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL10.jpeg"},
                {id:"TL11", name:"T??m L?? H???c Thuy???t Ph???c",cat:null,price:"169.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL11.jpeg"},
                {id:"TL12", name:"T??m L?? H???c V??? R???i Lo???n Nh??n C??ch Tr??nh N??",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL12.jpeg"},
                {id:"TL13", name:"T??m L?? H???c X?? H???i - ??i T??m Ch???t G??y Nghi???n Trong M???i Con Ng?????i",cat:null,price:"139.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL13.jpeg"},
                {id:"TL14", name:"T??m L?? H???c Th??i Quen - Quan S??t C?? Ch??? ????ch",cat:null,price:"99.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL14.jpeg"},
                {id:"TL15", name:"T??m L?? H???c Nh???n Th???c",cat:null,price:"96.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL15.jpeg"},
                {id:"TL16", name:"T??m L?? H???c T??nh Y??u - T??nh Y??u C???a B???n Gi???ng Nh?? B???n",cat:null,price:"129.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL16.jpeg"},
                {id:"TL17", name:"T??m L?? H???c Gi???i M?? T??nh Y??u",cat:null,price:"119.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL17.jpeg"},
                {id:"TL18", name:"T??m L?? H???c Nh??n C??ch",cat:null,price:"189.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL18.png"},
                {id:"TL19", name:"T??m L?? H???c - M??? Kh??a N??o B??? B???n Tr???",cat:null,price:"94.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL19.jpeg"},
                {id:"TL20", name:"T??m L?? H???c Trong ?????i S???ng",cat:null,price:"149.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/TamLy/TL20.png"},

            ]},
            {id:"K", name:"K??? n??ng s???ng", quantity:0, books:[
                {id:"K1", name:"K??? N??ng S???ng - C??ch ????? Tr??? Th??nh Ng?????i B???n T???t",cat:null,price:"50.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K1.jpeg"},
                {id:"K2", name:"K??? N??ng S???ng - C??ch ????? Tr??? Th??nh Con Ngoan",cat:null,price:"52.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K2.jpeg"},
                {id:"K3", name:"K??? N??ng S???ng - Em H???c C??ch B???o V??? M??i Tr?????ng",cat:null,price:"59.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K3.jpeg"},
                {id:"K4", name:"K??? N??ng S???ng - Em H???c C??ch T??? L???p",cat:null,price:"59.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K4.jpeg"},
                {id:"K5", name:"K??? N??ng S???ng - 101 C??u Chuy???n H???c Sinh C???n ?????c Gi??p C??c Em T??? Tin V?? L???c Quan Trong Cu???c S???ng",cat:null,price:"48.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K5.jpeg"},
                {id:"K6", name:"K??? N??ng S???ng - 101 C??u Chuy???n H???c Sinh C???n ?????c Gi??p C??c Em Bi???t M?? ?????c V?? D??m Th???c Hi???n",cat:null,price:"48.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K6.jpeg"},
                {id:"K7", name:"K??? N??ng S???ng D??nh Cho H???c Sinh - Bi???t L???a Ch???n",cat:null,price:"55.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K7.jpeg"},
                {id:"K8", name:"S??ch Montessori - R??n K??? N??ng S???ng V?? K??? N??ng Ph???i H???p",cat:null,price:"140.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K8.jpeg"},
                {id:"K9", name:"Nh???ng K??? N??ng S???ng D??nh Cho Tu???i Teen",cat:null,price:"76.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K9.jpeg"},
                {id:"K10", name:"100 K??? N??ng Sinh T???n",cat:null,price:"99.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K10.jpeg"},
                {id:"K11", name:"Nh???ng K??? N??ng D??nh Cho Cu???c S???ng",cat:null,price:"78.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K11.jpeg"},
                {id:"K12", name:"K??? N??ng ????? C??n B???ng Gi???a C??ng Vi???c V?? Cu???c S???ng",cat:null,price:"162.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K12.jpeg"},
                {id:"K13", name:"?????c Nh??n T??m",cat:null,price:"76.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K13.jpeg"},
                {id:"K14", name:"Nh?? Gi??? Ki??m",cat:null,price:"59.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K14.jpeg"},
                {id:"K15", name:"Rich Habits - Th??i Quen Th??nh C??ng C???a Nh???ng Tri???u Ph?? T??? Th??n",cat:null,price:"158.000"+" VND",quantity:10,image:"assets/images/product/Sach/TamLy_KyNangSong/KyNangSong/K15.jpeg"},
    
            ]},
            {id:"HG", name:"H???t gi???ng t??m h???n", quantity:0, books:[
    
            ]},
        ]},
        {id:"6", name:"L???ch s???", quantity:0, listcategory: [
            {id:"VN", name:"L???ch s??? Vi???t Nam", quantity:0, books:[
                {id:"VN1", name:"L???ch S??? Vi???t Nam T??? Ngu???n G???c ?????n Th??? K??? XIX",cat:null,price:"175.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu2.png"},
                {id:"VN2", name:"L???ch S??? Nh?? T?? C??n ?????o 1862 - 1975",cat:null,price:"120.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu4.jpeg"},
                {id:"VN3", name:"L???ch S??? N?????c Ta",cat:null,price:"14.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu7.jpeg"},
                {id:"VN4", name:"L???ch S??? Vi???t Nam B???ng Tranh - Con R???ng Ch??u Ti??n",cat:null,price:"135.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu8.jpeg"},
                {id:"VN5", name:"L???ch S??? Khai Ph?? V??ng ?????t Nam B???",cat:null,price:"90.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu10.jpeg"},
                {id:"VN6", name:"L???ch S??? H?? N???i",cat:null,price:"159.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu11.jpeg"},
                {id:"VN7", name:"Vi???t Nam S??? L?????c",cat:null,price:"131.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu13.jpeg"},
                {id:"VN8", name:"L???ch S??? Vi???t Nam T??? Ngu???n G???c ?????n Gi???a Th??? K??? XX",cat:null,price:"200.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu14.jpeg"},
                {id:"VN9", name:"?????i Vi???t S??? K?? To??n Th?? Tr???n B???",cat:null,price:"245.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu17.jpeg"},
                {id:"VN10", name:"Th?????ng Kinh K?? S???",cat:null,price:"69.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu19.jpeg"},
                {id:"VN11", name:"T???nh B???n Tre Trong L???ch S??? Vi???t Nam - T??? N??m 1757 ?????n 1945",cat:null,price:"120.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu21.jpg"},
                {id:"VN12", name:"K??? Chuy???n L???ch S??? Vi???t Nam - T???p 1",cat:null,price:"70.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu22.jpg"},
                {id:"VN13", name:"K??? Chuy???n L???ch S??? Vi???t Nam - T???p 2",cat:null,price:"70.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu23.jpg"},
                {id:"VN14", name:"Quan H??? Bang Giao V?? Nh???ng S??? Th???n Ti??u Bi???u Trong L???ch S??? Vi???t Nam",cat:null,price:"52.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu24.jpg"},
                {id:"VN15", name:"Vi???t Nam Th??? K??? XVII",cat:null,price:"269.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu25.jpg"},
                {id:"VN16", name:"T??m Hi???u X?? H???i Vi???t Nam Th???i L?? - Tr???n",cat:null,price:"279.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu26.jpg"},
                {id:"VN17", name:"Quan v?? L???i ??? mi???n B???c Vi???t Nam - m???t b??? m??y h??nh ch??nh nhi???u th??? th??ch (1820-1918)",cat:null,price:"122.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/VietNam/LSu27.jpg"},
    
            ]},
            {id:"TG", name:"L???ch s??? Th??? gi???i", quantity:0, books:[
                {id:"TG1", name:"L???ch S??? Th??? Gi???i Qua Truy???n Tranh",cat:null,price:"350.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu1.jpeg"},
                {id:"TG2", name:"L???ch S??? V????ng Qu???c ????ng Ngo??i",cat:null,price:"169.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu3.jpeg"},
                {id:"TG3", name:"L???ch S??? T?? T?????ng Trung Qu???c",cat:null,price:"399.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu5.jpeg"},
                {id:"TG4", name:"L???ch S??? V??n Minh ???n ?????",cat:null,price:"177.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu6.jpeg"},
                {id:"TG5", name:"L???ch S??? Chi???n Tranh",cat:null,price:"209.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu9.jpeg"},
                {id:"TG6", name:"L?????c S??? Th??? Gi???i",cat:null,price:"320.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu12.jpeg"},
                {id:"TG7", name:"L???ch S??? Th??? Gi???i: Ch??n Dung Nh??n Lo???i Theo D??ng S??? Ki???n",cat:null,price:"590.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu15.jpeg"},
                {id:"TG8", name:"L???ch S??? ???? Th??? Hi???n ?????i",cat:null,price:"169.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu16.jpeg"},
                {id:"TG9", name:"L???ch S??? Trung ????ng 2.000 N??m Tr??? L???i ????y",cat:null,price:"210.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu18.jpeg"},
                {id:"TG10", name:"L???ch S??? Th??? Gi???i Hi???n ?????i",cat:null,price:"119.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu20.jpeg"},
                {id:"TG11", name:"?????i Mu???i: L???ch S??? Th??? Gi???i",cat:null,price:"235.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu28.jpg"},
                {id:"TG12", name:"L???ch S??? Do Th??i",cat:null,price:"439.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu29.jpg"},
                {id:"TG13", name:"L???ch S??? T?? T?????ng Nh???t B???n",cat:null,price:"169.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu30.jpg"},
                {id:"TG14", name:"Nh???ng S??? Ki???n L???n Trong L???ch S??? Hoa K???",cat:null,price:"120.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu31.jpg"},
                {id:"TG15", name:"Phi Ch??u Th???nh V?????ng - L???ch S??? 5.000 N??m C???a S??? Gi??u C??, Tham V???ng V?? N??? L???c",cat:null,price:"489.000"+" VND",quantity:10,image:"assets/images/product/Sach/LichSu/TheGioi/LSu32.jpg"},
    
            ]},
        ]},
        {id:7, name:"Thi???u nhi", quantity:0, listcategory: [
            {id:"TTN", name:"Truy???n thi???u nhi", quantity:0, books:[
                {id:"TN1", name:"Nh???ng Truy???n Hay Vi???t Cho Thi???u Nhi - Thy Ng???c",cat:null,price:"50.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN1.jpeg"},
                {id:"TN2", name:"Th?? Hay Vi???t Cho Thi???u Nhi - Ai D???y S???m",cat:null,price:"75.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN2.jpeg"},
                {id:"TN3", name:"Tuy???n T???p V??n H???c Vi???t Cho Thi???u Nhi - T?? Ho??i - 1: Truy???n ?????ng Tho???i - K???ch",cat:null,price:"200.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN3.jpeg"},
                {id:"TN4", name:"V??n H???c Thi???u Nhi - D???u ???n Th??? H??? M???i: ?????ng Gi???m L??n C???",cat:null,price:"50.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN4.jpeg"},
                {id:"TN5", name:"T??? S??ch V??ng - T??c Ph???m Ch???n L???c D??nh Cho Thi???u Nhi: N??i Xa",cat:null,price:"75.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN5.jpeg"},
                {id:"TN6", name:"Truy???n C??? T??ch Vi???t Nam D??nh Cho Thi???u Nhi - S??? T??ch Tr???u Cau",cat:null,price:"15.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN6.jpeg"},
                {id:"TN7", name:"Truy???n Hay Th??? Gi???i Cho Thi???u Nhi - Chim L???a",cat:null,price:"45.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN7.jpeg"},
                {id:"TN8", name:"Tuy???n T???p Truy???n Hay D??nh Cho Thi???u Nhi 1",cat:null,price:"48.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN8.png"},
                {id:"TN9", name:"Truy???n C??? T??ch Vi???t Nam D??nh Cho Thi???u Nhi - B??nh Ch??ng B??nh Gi???y",cat:null,price:"10.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN9.jpeg"},
                {id:"TN10", name:"T??? S??ch V??ng - T??c Ph???m Ch???n L???c D??nh Cho Thi???u Nhi: Mi???n Qu?? Th?? ???u",cat:null,price:"35.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN10.jpeg"},
                {id:"TN11", name:"Tuy???n T???p V??n H???c Vi???t Cho Thi???u Nhi - T?? Ho??i - 3 - Truy???n C??c G????ng Anh H??ng C??ch M???ng",cat:null,price:"200.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN11.jpeg"},
                {id:"TN12", name:"Tuy???n T???p Truy???n Hay D??nh Cho Thi???u Nhi 2",cat:null,price:"48.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN12.jpeg"},
                {id:"TN13", name:"Truy???n C??? T??ch Vi???t Nam D??nh Cho Thi???u Nhi - Th??nh Gi??ng",cat:null,price:"10.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN13.jpeg"},
                {id:"TN14", name:"T??? S??ch V??ng - T??c Ph???m Ch???n L???c D??nh Cho Thi???u Nhi: ?????o ???? K?? L???",cat:null,price:"50.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN14.jpeg"},
                {id:"TN15", name:"Truy???n C??? T??ch Vi???t Nam D??nh Cho Thi???u Nhi - C??y Tre Tr??m ?????t",cat:null,price:"10.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN15.jpeg"},
                {id:"TN16", name:"Nh???ng Tuy???t Ph???m D??nh Cho Thi???u Nhi",cat:null,price:"200.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN16.jpeg"},
                {id:"TN17", name:"R??m R??? L???m Lem - Truy???n D??i Thi???u Nhi ????? Tu???i 6 ?????n 15",cat:null,price:"75.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN17.jpeg"},
                {id:"TN18", name:"Truy???n Tranh Ng??? Ng??n D??nh Cho Thi???u Nhi - Chu???t Nh?? V?? Chu???t ?????ng",cat:null,price:"29.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN18.jpeg"},
                {id:"TN19", name:"V??n H???c Thi???u Nhi - D???u ???n Th??? H??? M???i: Tr???i Xanh Ng???p N???ng",cat:null,price:"80.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN19.jpeg"},
                {id:"TN20", name:"V??n H???c Thi???u Nhi - Nh???ng Truy???n K??? Th?? V??? C???p Ch??a Ai K???",cat:null,price:"70.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN20.jpeg"},
                {id:"TN21", name:"Ph?? Th???y ??o V??ng, Con M??o L?????i V?? Th???ng B?? ?????",cat:null,price:"60.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN21.jpeg"},
                {id:"TN22", name:"Nh???n P?? ??an V????? Ti???n - Gi???i Th?????ng V??n H???c Thi???u Nhi M??",cat:null,price:"90.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN22.jpeg"},
                {id:"TN23", name:"Combo 4 Cu???n: B??? Tuy???n T???p Truy???n Hay D??nh Cho Thi???u Nhi",cat:null,price:"192.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN23.jpeg"},
                {id:"TN24", name:"Truy???n Kinh Th??nh D??nh Cho Thi???u Nhi",cat:null,price:"162.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/TruyenThieuNhi/TN24.jpeg"},
                
            ]},
            {id:"TM", name:"T?? m??u", quantity:0, books:[
                {id:"TM1", name:"T?? M??u - Kh??m Ph?? Phong C???nh Vi???t Nam",cat:null,price:"65.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM1.jpeg"},
                {id:"TM2", name:"T?? M??u Ho??ng T???: Ho??ng T??? Ch??n L???n",cat:null,price:"15.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM2.jpeg"},
                {id:"TM3", name:"T?? M??u Superman (T???p 4)",cat:null,price:"12.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM3.jpeg"},
                {id:"TM4", name:"T?? M??u C??ng Ch??a Xinh ?????p - T???p 8",cat:null,price:"12.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM4.jpeg"},
                {id:"TM5", name:"T?? M??u Ch??ng M??nh T???p L??m H???a S?? - 3-6 Tu???i - C??c Lo??i Hoa",cat:null,price:"30.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM5.jpeg"},
                {id:"TM6", name:"T?? M??u Ch??ng M??nh T???p L??m H???a S?? - 3-6 Tu???i - ?????ng V???t",cat:null,price:"30.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM6.jpeg"},
                {id:"TM7", name:"T?? M??u Trang Ph???c C??ng Ch??a (T???p 1)",cat:null,price:"12.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM7.jpeg"},
                {id:"TM8", name:"B?? T???p T?? M??u - Ng?????i L??nh C???u H???a Quy???n",cat:null,price:"25.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM8.jpeg"},
                {id:"TM9", name:"T??i T?? M??u C??ng Ch??a (Tr???n B??? 5 Cu???n)",cat:null,price:"70.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM9.jpeg"},
                {id:"TM10", name:"S??ch t???p t?? 5000 h??nh",cat:null,price:"90.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM10.jpeg"},
                {id:"TM11", name:"C??? T??ch T?? M??u C??ng Ch??a - N??ng Ti??n C??",cat:null,price:"16.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM11.jpeg"},
                {id:"TM12", name:"C??? T??ch T?? M??u C??ng Ch??a - C?? B?? B??n Di??m",cat:null,price:"16.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM12.jpeg"},
                {id:"TM13", name:"T?? M??u Ph????ng Ti???n Giao Th??ng - Xe Th??? Thao Si??u T???c ????? - Speedy Sport Cars",cat:null,price:"20.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/ToMau/TM13.jpeg"},

            ]},
            {id:"LC", name:"Luy???n ch???", quantity:0, books:[
                {id:"LC1", name:"Luy???n Ch??? ?????p - Ch??? ?????ng N??t Thanh, ?????m",cat:null,price:"12.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC1.jpeg"},
                {id:"LC2", name:"Luy???n Ch??? ?????p - Ch??? Nghi??ng N??t Thanh, ?????m",cat:null,price:"10.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC2.jpeg"},
                {id:"LC3", name:"Luy???n Vi???t Ti???ng Anh Tr??nh B??y Tr??n Gi???y ?? Li D??nh Cho H???c Sinh 4 - T???p 1",cat:null,price:"28.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC3.jpeg"},
                {id:"LC4", name:"Luy???n Vi???t Ti???ng Anh Tr??nh B??y Tr??n Gi???y ?? Li D??nh Cho H???c Sinh 5 - T???p 2",cat:null,price:"28.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC4.jpeg"},
                {id:"LC5", name:"Luy???n Vi???t Ch??? ?????p Ti???ng Anh - My Phonics Grade 2",cat:null,price:"32.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC5.jpeg"},
                {id:"LC6", name:"Luy???n Vi???t Ch??? ?????p Ti???ng Anh - My Phonics Grade 1",cat:null,price:"32.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC6.jpeg"},
                {id:"LC7", name:"Luy???n Vi???t Ch??? ?????p D??ng Cho H???c Sinh Ti???u H???c Quy???n 3 T???p 2",cat:null,price:"9.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC7.jpeg"},
                {id:"LC8", name:"Luy???n Vi???t Ch??? ?????p D??ng Cho H???c Sinh Ti???u H???c Quy???n 4 T???p 1",cat:null,price:"9.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC8.jpeg"},
                {id:"LC9", name:"Luy???n Vi???t Ti???ng Vi???t Cho H???c Sinh Ti???u H???c - Vui C??ng Ch??? Vi???t L???p 3 - T???p 1",cat:null,price:"16.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC9.jpeg"},
                {id:"LC10", name:"Luy???n Vi???t Ti???ng Vi???t Cho H???c Sinh Ti???u H???c - H???c Vi???t ??i???u Hay L???p 5 - T???p 1",cat:null,price:"16.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC10.jpeg"},
                {id:"LC11", name:"Luy???n Vi???t Ti???ng Vi???t Cho H???c Sinh Ti???u H???c - H???c Vi???t ??i???u Hay L???p 5 - T???p 2",cat:null,price:"16.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC11.jpeg"},
                {id:"LC12", name:"Luy???n Vi???t Ti???ng Vi???t Cho H???c Sinh Ti???u H???c - H???c Vi???t ??i???u Hay L???p 4 - T???p 2",cat:null,price:"16.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC12.jpeg"},
                {id:"LC13", name:"Luy???n Vi???t Ch??? ?????p L???p 1 - T???p 2",cat:null,price:"15.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC13.jpeg"},
                {id:"LC14", name:"Luy???n Vi???t Theo M???u Ch??? Nh??? - Ch??? Th?????ng, Ch??? Hoa (D??nh Cho H???c Sinh Ti???u H???c)",cat:null,price:"36.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC14.jpeg"},
                {id:"LC15", name:"Luy???n N??t Ch??? R??n N???t Ng?????i - V??? ?? Li C?? M???u Ch??? - L???p 1 - Quy???n 1",cat:null,price:"20.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC15.jpeg"},
                {id:"LC16", name:"Luy???n N??t Ch??? R??n N???t Ng?????i - V??? ?? Li C?? M???u Ch??? - L???p 2 - Quy???n 2",cat:null,price:"20.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC16.png"},
                {id:"LC17", name:"Luy???n N??t Ch??? R??n N???t Ng?????i - V??? ?? Li C?? M???u Ch??? - L???p 2 - Quy???n 1",cat:null,price:"20.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC17.jpeg"},
                {id:"LC18", name:"Luy???n Vi???t Ch??? ?????p L???p 3 - T???p 2",cat:null,price:"14.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC18.jpeg"},
                {id:"LC19", name:"Luy???n Vi???t Ch??? ?????p L???p 3 - T???p 1",cat:null,price:"14.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC19.jpeg"},
                {id:"LC20", name:"Luy???n Vi???t N??t C?? B???n V?? Ch??? S??? - V??? ?? Li C?? Ch??? M???u - B?? Chu???n B??? V??o L???p 1",cat:null,price:"37.000"+" VND",quantity:10,image:"assets/images/product/Sach/ThieuNhi/LuyenChu/LC20.jpeg"},
    
            ]},
        ]}
    ];
    localStorage.setItem('category', JSON.stringify(category));
    updateQuantity(category);
}
function createBestSeller() {
    var bestseller = [];
    var category = JSON.parse(localStorage.getItem('category'));
    bestseller.push(category[1].listcategory[1].books[6]); // V??n h???c.Truy???n d??i.S??ch 6
    bestseller.push(category[0].listcategory[1].books[0]);
    bestseller.push(category[0].listcategory[2].books[0]);
    bestseller.push(category[1].listcategory[0].books[0]);
    bestseller.push(category[1].listcategory[1].books[0]);
    bestseller.push(category[1].listcategory[2].books[0]);
    bestseller.push(category[1].listcategory[2].books[2]);
    bestseller.push(category[3].listcategory[0].books[0]);
    bestseller.push(category[3].listcategory[1].books[0]);
    bestseller.push(category[3].listcategory[3].books[0]);
    bestseller.push(category[3].listcategory[3].books[5]);
    bestseller.push(category[3].listcategory[4].books[0]);
    bestseller.push(category[4].listcategory[0].books[0]);
    bestseller.push(category[4].listcategory[1].books[0]);
    bestseller.push(category[4].listcategory[1].books[1]);
    bestseller.push(category[5].listcategory[0].books[0]);
    localStorage.setItem('bestseller', JSON.stringify(bestseller));
}
function addBill() {
    // c??i n??y t??? t??? e t??m hi???u :))
}
function updateQuantity(category) {
    var category = JSON.parse(localStorage.getItem('category'));
    // T??nh s??? s??ch m???i lo???i tr?????c
    for (var i = 0; i < category.length; i++) {
        for (var j = 0; j < category[i].listcategory.length; j++) {
            var a = 0;
            for (var h = 0; h < category[i].listcategory[j].books.length; h++) {
                a += (category[i].listcategory[j].books[h].quantity);
            }
            category[i].listcategory[j].quantity = a;
        }
    }
    // T??nh s??? s??ch m???i category
    for (var i  = 0; i < category.length; i++) {
        var a = 0;
        for (var j = 0; j < category[i].listcategory.length; j++) {
            a += (category[i].listcategory[j].quantity);
        }
        category[i].quantity = a;
    }
    for (var i = 0; i < category.length; i++) {
        for (var j = 0; j < category[i].listcategory.length; j++) {
            for (var h = 0; h < category[i].listcategory[j].books.length; h++) {
                category[i].listcategory[j].books[h].cat = (category[i].listcategory[j].name);
            }
        }
    }
    localStorage.setItem('category', JSON.stringify(category));
}
function renderBestseller() {
    document.getElementById("headline").innerHTML = '<h3>S???n ph???m b??n ch???y</h3>';
    var bestseller = JSON.parse(localStorage.getItem('bestseller'));
    var html = '';
    for (var i = 0; i < bestseller.length; i++) {
        html += '<li>';
        html += '<div class="product-item">';
        html += '<div class="product-top">';
        html += '<a class="product-thumb">';
        html += '<img src="' + bestseller[i].image + '" alt="">';
        html += '</a>';
        html += '<a class="buynow">Mua Ngay</a>';
        html += '</div>';
        html += '<div class="product-info">';
        html += '<a class="product-cat">' + bestseller[i].cat + '</a>';
        html += '<a class="product-name">' + bestseller[i].name + '</a>';
        html += '<div class="product-price">' + bestseller[i].price + '</div>'
        html += '</div>';
        html += '</div>';
        html += '</li>'
    }
    document.getElementById("products").innerHTML = html;
    showdetailBestseller(bestseller);
}
function backFromDiv() {
    document.getElementById("container").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("wrapper").style.display = "none";
}
function sub(quantity) {
    var a = document.getElementById('quantity').value;
    if (a > 1) {
        a--;
        document.getElementById('plus').disabled = false;
        document.getElementById('sub').disabled = false;
        document.getElementById('quantity').value =a;
    } else {
        document.getElementById('quantity').value = 0;
        document.getElementById('plus').disabled = false;
        document.getElementById('sub').disabled = true;
    }
}
function plus(quantity) {
    var a = document.getElementById('quantity').value;
    if (a == quantity - 1) {
        a++;
        document.getElementById('sub').disabled = false;
        document.getElementById('plus').disabled = true;
        document.getElementById('quantity').value = quantity;
    } else {
        a++;
        document.getElementById('quantity').value = a;
        document.getElementById('plus').disabled = false;
        document.getElementById('sub').disabled = false;
    }
}
function checkQuatity(quantity) {
    var a = document.getElementById('quantity').value;
    if (a <= 0 || isNaN(a)) { // phai nhap so, isNaN la ki tu
        document.getElementById('quantity').value = 0;
        document.getElementById('sub').disabled = true;
        document.getElementById('plus').disabled = false;
    } else {
        if (a >= quantity) {
            document.getElementById('plus').disabled = true;
            document.getElementById('sub').disabled = false;
            document.getElementById('quantity').value = quantity;
        } else {
            document.getElementById('plus').disabled = false;
            document.getElementById('sub').disabled = false;
        }
    }
}
let productSelected;
function getProductSelected(){
    return productSelected;
}
function showdetailBestseller(products) {
    let listproduct = document.querySelectorAll("#products li");
    for (let i = 0; i < listproduct.length; i++) {
        listproduct[i].addEventListener('click', () => {
            productSelected = products[i];
            var html = '';
            html += '<img src="' + products[i].image + '" alt="">';
            html += '<div id="detail-pro">';
            html += '<ul>';
            html += '<li><h1>' + products[i].name + '</h1></li>';
            html += '<hr>';
            html += '<li>Th??? lo???i: <h3>' + products[i].cat + '</h3></li>';
            html += '<hr>';
            html += '<li>Gi??: <h3>' + products[i].price + '</h3></li>';
            html += '<hr>';
            if (products[i].quantity > 0) {
                html += '<li style="color:blue; font-size:80%"><h4>C??n h??ng: ' + products[i].quantity + ' s???n ph???m</h4></li>';
                html += '<li>';
                html += 'S??? l?????ng:';
                html += '<input style="margin-left: 30px;" disabled type="button" name="" id="sub" value="-" onclick="sub(' + products[i].quantity + ')">';
                html += '<input type="number" min="0" name="" id="quantity" value="0" onchange="checkQuatity(' + products[i].quantity + ')">';
                html += '<input type="button" value="+" id="plus" onclick="plus(' + products[i].quantity + ')">';
    
            } else {
                html += '<li><h4>H???t h??ng</h4></li>';
                html += '<li>';
                html += 'S??? l?????ng:';
                html += '<input style="margin-left: 30px;" disabled type="button" name="" id="sub" value="-" onclick="sub(' + products[i].quantity + ')">';
                html += '<input type="number" min="0" name="" id="quantity" value="0" disabled>';
                html += '<input disabled type="button" value="+" id="plus" onclick="plus(' + products[i].quantity + ')">';
    
            }
            html += '</li>';
            html += '<li id="addtocart" title="Th??m v??o gi??? h??ng" onclick="addToCartPro(getProductSelected())">';
            html += '<div><i class="fas fa-solid fa-cart-shopping" ></i></div>';
            html += '</li>';
            html += '</ul>';
            html += '</div>';
            document.getElementById("detail").innerHTML = html;
            document.getElementById("wrapper").style.display = "block";
            document.getElementById("container").style.display = "block";
        });
    }
}
let currenPage;
let perPage = 8;
let start;
let end;
let totalpage;
let books=[];
function getCurrentPage(currenPage,products) {
    start = (currenPage - 1) * perPage;
    end = currenPage * perPage;
    if (end > products.length)
        end = products.length;
}
function loadPage() {
    var str = window.location.href;
    if (str.includes("&") || str.includes("?")) {
        str = str.split('?');
        var url = str[1].split('&');
        var products = JSON.parse(localStorage.getItem('category'));
        if (url.length > 1) {
            if (url[0] == "giaoduc" && url[1] == "sachgiaokhoa") {
                document.getElementById("headline").innerHTML = "<h3>S??ch gi??o khoa</h3>";
                books = products[0].listcategory[0].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "giaoduc" && url[1] == "sachthamkhao") {
                document.getElementById("headline").innerHTML = "<h3>S??ch tham kh???o</h3>";
                books = products[0].listcategory[1].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "giaoduc" && url[1] == "tudien") {
                document.getElementById("headline").innerHTML = "<h3>T??? ??i???n</h3>";
                books = products[0].listcategory[2].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "vanhoc" && url[1] == "truyenngan") {
                document.getElementById("headline").innerHTML = "<h3>Truy???n ng???n</h3>";
                books = products[1].listcategory[0].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "vanhoc" && url[1] == "truyendai") {
                document.getElementById("headline").innerHTML = "<h3>Truy???n d??i</h3>";
                books = products[1].listcategory[1].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "vanhoc" && url[1] == "tho") {
                document.getElementById("headline").innerHTML = "<h3>Th??</h3>";
                books = products[1].listcategory[2].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "vanhoc" && url[1] == "khac") {
                document.getElementById("headline").innerHTML = "<h3>V??n h???c Kh??c</h3>";
                books = products[1].listcategory[3].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "tieuthuyet" && url[1] == "ngontinh") {
                document.getElementById("headline").innerHTML = "<h3>Ti???u thuy???t Ng??n t??nh</h3>";
                books = products[2].listcategory[0].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "tieuthuyet" && url[1] == "giatuong") {
                document.getElementById("headline").innerHTML = "<h3>Ti???u Thuy???t Gi??? t?????ng</h3>";
                books = products[2].listcategory[1].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "tieuthuyet" && url[1] == "lichsu") {
                document.getElementById("headline").innerHTML = "<h3>Ti???u thuy???t l???ch s???</h3>";
                books = products[2].listcategory[2].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "kinhte" && url[1] == "quantri") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Qu???n tr???</h3>";
                books = products[3].listcategory[0].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "kinhte" && url[1] == "marketing") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Marketing</h3>";
                books = products[3].listcategory[1].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "kinhte" && url[1] == "nhanvat") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Nh??n V???t</h3>";
                books = products[3].listcategory[2].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "kinhte" && url[1] == "khoinghiep") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Kh???i nghi???p</h3>";
                books = products[3].listcategory[3].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "kinhte" && url[1] == "chungkhoan") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Ch???ng kho??n</h3>";
                books = products[3].listcategory[4].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "tamly/kynangsong" && url[1] == "tamly") {
                document.getElementById("headline").innerHTML = "<h3>S??ch T??m l??</h3>";
                books = products[4].listcategory[0].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "tamly/kynangsong" && url[1] == "kynangsong") {
                document.getElementById("headline").innerHTML = "<h3>S??ch K??? n??ng s???ng</h3>";
                books = products[4].listcategory[1].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "tamly/kynangsong" && url[1] == "hatgiongtamhon") {
                document.getElementById("headline").innerHTML = "<h3>S??ch H???t gi???ng t??m h???n</h3>";
                books = products[4].listcategory[2].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "lichsu" && url[1] == "vietnam") {
                document.getElementById("headline").innerHTML = "<h3>L???ch s??? Vi???t Nam</h3>";
                books = products[5].listcategory[0].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "lichsu" && url[1] == "thegioi") {
                document.getElementById("headline").innerHTML = "<h3>L???ch s??? Th??? gi???i</h3>";
                books = products[5].listcategory[1].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "thieunhi" && url[1] == "truyenthieunhi") {
                document.getElementById("headline").innerHTML = "<h3>Truy???n thi???u nhi</h3>";
                books = products[6].listcategory[0].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "thieunhi" && url[1] == "tomau") {
                document.getElementById("headline").innerHTML = "<h3>S??ch T?? m??u</h3>";
                books = products[6].listcategory[1].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "thieunhi" && url[1] == "luyenchu") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Luy???n ch???</h3>";
                books = products[6].listcategory[2].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "thieunhi" && url[1] == "luyenchu") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Luy???n ch???</h3>";
                books = products[6].listcategory[2].books;
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
        } else {
            if (url[0] == "giaoduc") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Gi??o d???c</h3>";
                for (var j = 0; j < products[0].listcategory.length; j++) {
                    for (var h = 0; h < products[0].listcategory[j].books.length; h++) {
                        books.push(products[0].listcategory[j].books[h]);
                    }
                }
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "vanhoc") {
                document.getElementById("headline").innerHTML = "<h3>S??ch V??n h???c</h3>";
                for (var j = 0; j < products[1].listcategory.length; j++) {
                    for (var h = 0; h < products[1].listcategory[j].books.length; h++) {
                        books.push(products[1].listcategory[j].books[h]);
                    }
                }
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "tieuthuyet") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Ti???u thuy???t</h3>";
                for (var j = 0; j < products[2].listcategory.length; j++) {
                    for (var h = 0; h < products[2].listcategory[j].books.length; h++) {
                        books.push(products[2].listcategory[j].books[h]);
                    }
                }
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "kinhte") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Kinh t???</h3>";
                for (var j = 0; j < products[3].listcategory.length; j++) {
                    for (var h = 0; h < products[3].listcategory[j].books.length; h++) {
                        books.push(products[3].listcategory[j].books[h]);
                    }
                }
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "tamly/kynangsong") {
                document.getElementById("headline").innerHTML = "<h3>S??ch T??m l??/K??? n??ng s???ng</h3>";
                for (var j = 0; j < products[4].listcategory.length; j++) {
                    for (var h = 0; h < products[4].listcategory[j].books.length; h++) {
                        books.push(products[4].listcategory[j].books[h]);
                    }
                }
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "lichsu") {
                document.getElementById("headline").innerHTML = "<h3>S??ch L???ch s???</h3>";
                for (var j = 0; j < products[5].listcategory.length; j++) {
                    for (var h = 0; h < products[5].listcategory[j].books.length; h++) {
                        books.push(products[5].listcategory[j].books[h]);
                    }
                }
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0] == "thieunhi") {
                document.getElementById("headline").innerHTML = "<h3>S??ch Thi???u nhi</h3>";
                for (var j = 0; j < products[6].listcategory.length; j++) {
                    for (var h = 0; h < products[6].listcategory[j].books.length; h++) {
                        books.push(products[6].listcategory[j].books[h]);
                    }
                }
                currenPage = 1;
                totalpage = Math.ceil(books.length / perPage)
                getCurrentPage(currenPage, books);
                renderProduct(books);
                renderListPage();
                changePage(books);
            }
            if (url[0]=="shoppingcart"){
                var html='';
                var user= JSON.parse(localStorage.getItem('userActive'));
                // check user active
                if (user == null){
                    alert("Vui l??ng ????ng nh???p!");
                    location.href="/index.html";
                    return false;
                }
                var products=JSON.parse(localStorage.getItem('cart'));
                html += '<div class="headline" id="headline"><h3 style="background-color: rgb(242, 120, 38); color: black;">Gi??? H??ng</h3></div>';
                if (products.length>0){
                    html += '<div id="listProductsBuy" >';
                    for (var i=0; i<products.length;i++){
                        html += '<ul class="productsBuy">';
                        html += '<li>' + (i+1) + '</li>';
                        html += '<li class="img-Pro">';
                        html += '<img src="' + products[i].image +'" alt="">';
                        html += '</li>';
                        html += '<li>' + products[i].name + '</li>';
                        html += '<li>S??? l?????ng: ' + products[i].quantity + '</li>';
                        html += '<li>' + products[i].price + '</li>';
                        html += '<li><i class="fas fa-regular fa-trash-can" onclick="deleteProductBuy()"></i></li>';
                        html += '</ul>';
                    }
                    html += '<div id="buy">';
                    html += '<ul>';
                    html += '<li>T???ng thanh to??n <h3 style="color: black;">' + total() + '</h3></li>';
                    html += '<li><input type="button" value="Mua h??ng (' + products.length + ')" onclick="buy()"></li>';
                    html += '</ul>';
                    html += '</div>';
                    document.getElementById("content").innerHTML=html;
                    return true;
                }
                html += '<h1>B???n ch??a ch???n s???n ph???m n??o</h1>';
                document.getElementById("content").innerHTML=html;
                return true;
            }
        }

    }
    
}
function renderProduct(products) {
    var html = '';
    for (var i = start; i < end; i++) {
        html += '<li>';
        html += '<div class="product-item">';
        html += '<div class="product-top">';
        html += '<a class="product-thumb">';
        html += '<img src="' + products[i].image + '" alt="">';
        html += '</a>';
        html += '<a class="buynow">Mua Ngay</a>';
        html += '</div>';
        html += '<div class="product-info">';
        html += '<a class="product-cat">' + products[i].cat + '</a>';
        html += '<a class="product-name">' + products[i].name + '</a>';
        html += '<div class="product-price">' + products[i].price + '</div>'
        html += '</div>';
        html += '</div>';
        html += '</li>'
    }
    document.getElementById("products").innerHTML = html;
    showDetail(products);
}
function changePage(books) {
    const listPage = document.querySelectorAll(".number-page li");
    console.log(listPage);
    for (let i = 0; i < listPage.length; i++) {
        listPage[i].addEventListener('click',() => {
            var value = i + 1;
            console.log(value);
            currenPage = value;
            changeButton();
            getCurrentPage(currenPage, books);
            renderProduct(books);
        });
    }
}
function changeButton() {
    if (currenPage < totalpage || currenPage > 1) {
        document.getElementById("btnext").className = "button-prev-next-active";
        document.getElementById("btprev").className = "button-prev-next-active";
    }
    if (currenPage == 1) {
        document.getElementById("btprev").className = "button-prev-next";
    }
    if (currenPage == totalpage) {
        document.getElementById("btnext").className = "button-prev-next";
    }
    const listPage = document.querySelectorAll(".number-page li");
    listPage[currenPage - 1].id = "active";
    for (let j = 0; j < listPage.length; j++) {
        if (j != (currenPage - 1)) {
            listPage[j].id = null;
        }
    }
}
function renderListPage() {
    var html = '';
    html += '<li id="btprev" class="button-prev-next"><i class="fas fa-chevron-circle-left" onclick="prevButton()"></i></li>';
    html += '<div class="number-page" id="number-page">'
    html += '<li id="active"><b>' + 1 + '</b></li>';
    for (var i = 2; i <= totalpage; i++) {
        html += '<li><b>' + i + '</b></li>';
    }
    html += '</div>';
    html += '<li id="btnext" class="button-prev-next-active"><i class="fas fa-chevron-circle-right" onclick="nextButton()"></i></li>'
    document.getElementById("page").innerHTML = html;
}
function nextButton() {
    currenPage++;
    if (currenPage > totalpage)
        currenPage = totalpage
    changeButton();
    getCurrentPage(currenPage, books);
    renderProduct(books);
}
function prevButton() {
    currenPage--;
    if (currenPage < 1)
        currenPage = 1
    changeButton();
    getCurrentPage(currenPage, books);
    renderProduct(books);
}
function showDetail(products) {
    let listproduct = document.querySelectorAll("#products li");
    for (let i = 0; i < listproduct.length; i++) {
        listproduct[i].addEventListener('click', () => {
            getCurrentPage(currenPage, products);
            productSelected=products[i + start];
            var html = '';
            html += '<img src="' + products[i + start].image + '" alt="">';
            html += '<div id="detail-pro">';
            html += '<ul>';
            html += '<li><h1>' + products[i + start].name + '</h1></li>';
            html += '<hr>';
            html += '<li>Th??? lo???i: <h3>' + products[i + start].cat + '</h3></li>';
            html += '<hr>';
            html += '<li>Gi??: <h3>' + products[i + start].price + '</h3></li>';
            html += '<hr>';
            if (products[i + start].quantity > 0) {
                html += '<li style="color:blue; font-size:80%"><h4>C??n h??ng: ' + products[i + start].quantity + ' s???n ph???m</h4></li>';
                html += '<li>';
                html += 'S??? l?????ng:';
                html += '<input style="margin-left: 30px;" disabled type="button" name="" id="sub" value="-" onclick="sub(' + products[i + start].quantity + ')">';
                html += '<input type="number" min="0" name="" id="quantity" value="0" onchange="checkQuatity(' + products[i + start].quantity + ')">';
                html += '<input type="button" value="+" id="plus" onclick="plus(' + products[i + start].quantity + ')">';
    
            } else {
                html += '<li><h4>H???t h??ng</h4></li>';
                html += '<li>';
                html += 'S??? l?????ng:';
                html += '<input style="margin-left: 30px;" disabled type="button" name="" id="sub" value="-" onclick="sub(' + products[i + start].quantity + ')">';
                html += '<input type="number" min="0" name="" id="quantity" value="0" disabled>';
                html += '<input disabled type="button" value="+" id="plus" onclick="plus(' + products[i + start].quantity + ')">';
    
            }
            html += '</li>';
            html += '<li id="addtocart" title="Th??m v??o gi??? h??ng" onclick="addToCartPro(getProductSelected())">';
            html += '<div><i class="fas fa-solid fa-cart-shopping" ></i></div>';
            html += '</li>';
            html += '</ul>';
            html += '</div>';
            document.getElementById("detail").innerHTML = html;
            document.getElementById("wrapper").style.display = "block";
            document.getElementById("container").style.display = "block";
        })
    }
}
function createCart(){
    var cart=[];
    if (localStorage.getItem('cart') == null){
        localStorage.setItem('cart', JSON.stringify(cart));
    } 
}
function addToCartPro(product){
    var user= JSON.parse(localStorage.getItem('userActive'));
    var cart= JSON.parse(localStorage.getItem('cart'));
    var quantity = document.getElementById("quantity").value;
    // check user active
    if (user == null){
        alert("Vui l??ng ????ng nh???p!");
        backFromDiv();
        return false;
    }
    if (quantity==0){
        alert("S??? l?????ng s???n ph???m kh??ng h???p l???!");
        return false;
    }
    cart.push(product);
    cart[cart.length-1].quantity =parseInt(document.getElementById("quantity").value);
    localStorage.setItem('cart', JSON.stringify(cart));
    backFromDiv();
    return true;
}
function stringToPrice(s) {
    var price = "";
    var count = 0;
    while (s.length > 0) {
        price = s[s.length - 1] + price;
        s = s.substring(0, s.length - 1);
        if (++count == 3 && s.length > 0) {
            count = 0;
            price = "." + price;
        }
    }
    price += " VND";
    return price;
}
function total(){
    var products= JSON.parse(localStorage.getItem('cart'));
    var price=0;
    for (var i=0; i<products.length; i++){
        var cost=products[i].price;
        cost=cost.split('VND');
        cost=cost[0].replace(".","");
        price += parseInt(cost)*products[i].quantity;
    }
    return stringToPrice(price.toString());
}