import React, { useState } from 'react';
import axios from 'axios';

const NovoProduto = () => {
  const [produto, setProduto] = useState({
    nome_produto: "",
    preco_produto: 0,
    img_produto: "",
    descricao: "",
    data_criacao: "",
    data_atualizacao: ""
  });
  console.log(produto);

  const handleSubmit = async (e) => {
    await axios.post(`https://pubadmin.onrender.com/createProduto`, produto);
  };

  return (
    <div className="mt-5 p-5">
      <h1>Novo Produto</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            onChange={(e) => setProduto({ ...produto, nome_produto: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="preco">Preço</label>
          <input
            type="number"
            className="form-control"
            id="preco"
            name="preco"
            onChange={(e) => setProduto({ ...produto, preco_produto: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="img">IMG</label>
          <input
            type="text"
            className="form-control"
            id="img"
            name="img"
            onChange={(e) => setProduto({ ...produto, img_produto: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="descricao">Descrição</label>
          <textarea rows="10"
            className="form-control"
            id="descricao"
            name="descricao"
            onChange={(e) => setProduto({ ...produto, descricao: e.target.value })}>
          </textarea>

        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="data">Data de Criação</label>
          <input
            type="date"
            className="form-control"
            id="data"
            name="data"
            onChange={(e) => setProduto({ ...produto, data_criacao: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="data-up">Data de Atualização</label>
          <input
            type="date"
            className="form-control"
            id="data-up"
            name="data-up"
            onChange={(e) => setProduto({ ...produto, data_atualizacao: e.target.value })}
          />
        </div>
        <div className='mt-2' >
          <a href='/produtos' onClick={handleSubmit} type="button" className="btn btn-primary">
            Salvar
          </a>
        </div>
      </form>
    </div>
  )
}

export default NovoProduto