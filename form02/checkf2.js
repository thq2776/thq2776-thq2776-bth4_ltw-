function check(){
    var name= f.Hovaten.value;
    var district= f.diachi.value;
    var Email= f.email.value;
    var DienThoai=f.dienthoai.value;
    var emex=/^w+@[a-aZ-Z]+?.[a-zA-Z](2,3)/;
    if(name == '')
    {
        alert('vui lòng nhập tên');
        return false;

    }
    if(district == '')
    {
        alert('vui lòng nhập địa chỉ');
        return false;

    }
    if(Email == '')
    {
        alert('vui lòng nhập email');
        return false;

    }
    if(DienThoai == '')
    {
        alert('vui lòng nhập sđt');
        return false;

    }
    if(emex.test(Email)){
        alert('Vui long nhap dung dinh dangj email');
        return false;
    }
    return true;
}