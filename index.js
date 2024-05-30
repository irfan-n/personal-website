function sendMail(){
    var params = {
        name:document.getElementById("name").Value,
        email:document.getElementById("email").Value,
        message:document.getElementById("message").Value,

    };


const serviceID = "service_go1fvqr" ;
const templateID = "template_bfc9x7e";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").Value = "";
        document.getElementById("email").Value = "";
        document.getElementById("message").Value = "";
        console.log(res);
        alert("your message sent succesfully");
})
.catch(err=>console.log(err));
}