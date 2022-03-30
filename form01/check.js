function check()
{
    //Lưu ý: đặt tên cho from là f
    var username=f.TenDangNhap.value;
    var password=f.MatKhau.value;

    if(username=='')
    {
        alert('Ten dang nhap kh nhap sao ma dang nhap');
        return false;
    }
    if(password=='')
    {
        alert('Nhap mat khau vo moi dang nhap dc troi oi');
        return false;
    }
    return true;
}