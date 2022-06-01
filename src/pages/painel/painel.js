export const painelComponent = () => {
  return `
<section class="container"> 

<div class="categorias-add">
  <img src="../../assets/plus.svg" alt="">
  <p>Adicionar Categoria</p>
</div>

<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
    </div>
    <div class="modal-body">
      <p>Nome da Categoria</p>
      <input class="categoriaTitle" type="text">
      <p>Icone da Categoria</p>
      <select name="icons" class="iconSelect">
        <option value="Selecione">Selecione</option>
        <option value="casa">Casa</option>
        <option value="escola">Escola</option>
        <option value="compras">Compras</option>
        <option value="passeio">Passeio</option>
      </select>
    
      <div class="modal-body-icon">
        <div class="modal-body-img"></div>
        <div>
          <p>Cor do icone</p>
          <select name="colors" class="iconColorSelect">
            <option value="azul">Azul</option>
            <option value="rosa">Rosa</option>
            <option value="roxo">Roxo</option>
            <option value="vermelho">Vermelho</option>
          </select>
        </div>
      </div>

      <p>Descrição</p>
      <textarea class="categoriaDescricao" type="text"></textarea>

      <input type="button" value="Salvar" class="salvar">  

    </div>
  </div>

</div>

<div class="categorias-cards-container">
  
</div>
</section>

`
}