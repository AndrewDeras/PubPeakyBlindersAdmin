import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Produto = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://pubadmin.onrender.com/listProduto')
      .then((res) => {
        setProdutos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://pubadmin.onrender.com/deleteProduto/${id}`)
      .then(() => {
        setProdutos(produtos.filter((produto) => produto.id_produto !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="mt-5 p-5">
      <h1>Produtos</h1>
      <table className="table table-striped table-hover table-bordered border-dark mt-3">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">IMG</th>
            <th scope="col">Descrição</th>
            <th scope="col">Data de Criação</th>
            <th scope="col">Data de Atualização</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.length > 0 ? (
              produtos.map((produto) => {
                return (
                  <tr key={produto.id_produto}>
                    <th scope="row" >{produto.id_produto}</th>
                    <td>{produto.nome_produto}</td>
                    <td>{produto.preco_produto}</td>
                    <td>{produto.img_produto}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.data_criacao}</td>
                    <td>{produto.data_atualizacao}</td>
                    <td>
                      <a href={`/produto/${produto.id_produto}`} className="btn btn-primary m-1" >Editar</a>
                      <a type="button" href="/produtos" className="btn btn-danger m-1" onClick={() => handleDelete(produto.id_produto)}>Excluir</a>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td>Carregando...</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div className="row">
        <div className="col">
          <a className="btn btn-success" href="/produto/create">Cadastrar novo produto</a>
        </div>
      </div>
    </div>
  )
}

export default Produto
