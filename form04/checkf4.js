function check(){

    var name = f.Hovaten.value;
    var day = f.Ngay.value;
    var month = f.Thang.value;
    var year = f.Nam.value;

    var carrer = f.NgheNghiep.value;




    if(name == '' || day == '' || month == '' || year == '' || carrer == '')
    {
        alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    }

    return true;
}

