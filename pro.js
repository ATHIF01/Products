function addProduct(){
   
    product={pname:pname.value,pid:pid.value,producttype:prodt.value,price:price.value,expiry:expid.value}

    if(product.pid in localStorage){
        alert("Product details already exist")
    }
    else{

        localStorage.setItem(product.pid,JSON.stringify(product))

        alert("New product details added")
    
    }
    }

    function subProduct(){

        window.location="home.html"
    }

    function search(){

        keyid=s1.value

        if(keyid in localStorage){


        pro=JSON.parse(localStorage.getItem(keyid))


        result.innerHTML=` 
        <h3 class="text-info">Employee Name: ${pro.pname} </h3>
        <h3 class="text-info">Employee Id: ${pro.pid} </h3>
        <h3 class="text-info">Employee Designation: ${pro.producttype} </h3>
        <h3 class="text-info">Employee Salary: ${pro.price} </h3>
        <h3 class="text-info">Employee Experience: ${pro.expiry} </h3>` 

    }
    else{
        result.innerHTML=""
        alert('Product details not present')
    }

    }
function logout(){
    window.location = "index.html"
    
}
function register(){

username=uname.value
password=psw.value
 
userdetails={username,password}

    if(username in localStorage){
        alert("username already exist")
window.location = "index.html"
    }
    else{
localStorage.setItem(username,JSON.stringify(userdetails))
alert("user id successfuly registerd")
window.location = "index.html"
    }
}
function login(){
    usnme=usname.value
    pass=pswrd.value
    if (usnme in localStorage) {
    data=JSON.parse(localStorage.getItem(usnme))
       if(pass==data.password) {
        window.location="product.html"
       }
       else{
        alert("incorrect password")
       }
    }
    else{
        alert("incorrect username")
    }
}