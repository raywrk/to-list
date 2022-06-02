const singupComponent =()=>{
  return `
    <section class="loginSection">
    <div class="componentAlert"></div>
    <div class="loginData">
        <div class="containerInputs">
                <input type="email" class="email" placeholder="email@gmail.com" required>
                <input type="text" name="username" class="username" placeholder="username" required>
                <input type="password" name="password" class="password" placeholder="password">
                <img src="../../assets/hidepassword.svg" class="imgHidePassword1"  alt="imagem de um olho para esconder a senha">
                <img src="../../assets/showPassword.svg" class="imgShowPassword1"  alt="imagem de um olho para mostrar a senha"> 
            <input type="button" value="Sing up" class="singup">  
            <p>You already have an account? <a class="singinBtn">sing in</a></p>
        </div>
    </div>
  </section>
  `
}

export { singupComponent }