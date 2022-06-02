const singinComponent = () =>{
  return `
    <section class="loginSection">
    <div class="componentAlert"></div>
    <div class="loginData">
        <div class="containerInputs">
            <input type="text" name="username" class="username" required placeholder="username">
                <input type="password" name="password" class="password" required placeholder="password">
                <img src="../../assets/hidepassword.svg" class="imgHidePassword" alt="">
                <img src="../../assets/showPassword.svg" class="imgShowPassword" alt=""> 
            <input type="button" value="Sing in" class="singin">  
            <p>Create an acount: <a class="singupBtn">sing up</a></p>
        </div>
    </div>
  </section>
`
}

export { singinComponent }