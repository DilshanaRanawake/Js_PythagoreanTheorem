function Calculate(){
    // alert("Button Test");
    let fn= parseFloat(document.getElementById("txt1").value);
    let sn= parseFloat(document.getElementById("txt2").value); 
    let result= Math.sqrt((fn*fn)+(sn*sn));
    document.getElementById("txtResult").value= result;
}