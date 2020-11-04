function ValidateEmail(a) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(a))
  {
    return true
  }
    alert("Mail adressi düzgün deyil!");
    return false
}

document.querySelector('button').addEventListener('click', function(){
    if(document.querySelectorAll('input')[0].value != "" && document.querySelectorAll('input')[1].value != "" && document.querySelectorAll('input')[2].value != "" && document.querySelector('input[name="gender"]:checked') != null && ValidateEmail(document.querySelectorAll('input')[5].value) != false && document.querySelectorAll('input')[6].value != "" && document.querySelectorAll('input')[7].value !=""){

    console.log(document.querySelectorAll('input')[0].value,document.querySelectorAll('input')[1].value,document.querySelectorAll('input')[2].value,document.querySelector('input[name="gender"]:checked').value,document.querySelectorAll('input')[5].value,document.querySelectorAll('input')[6].value);
    
} else{
    alert("Bütün məlumatları doldurun");
    return false
}
})