import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Fornecedor = () => {
  const [fornecedor, setFornecedor] = useState([]);

  useEffect(() => {
    axios.get('https://pubadmin.onrender.com/fornecedores').then((res) => {
      setFornecedor(res.data);
    })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`https://pubadmin.onrender.com/fornecedores/${id}`)
  }


  return (
    <div className="mt-5 p-5">
      <h1>Fornecedores</h1>
      <table className="table table-striped table-hover table-bordered border-dark mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME FORNECEDOR</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {
            fornecedor.length > 0 ? (
              fornecedor.map((fornecedor) => {
                return (
                  <tr key={fornecedor.id_fornecedor}>
                    <td>{fornecedor.id_fornecedor}</td>
                    <td>{fornecedor.nome_fornecedor}</td>
                    <td>
                      <a href={`/fornecedores/${fornecedor.id_fornecedor}`} className="btn btn-primary m-1" >Editar</a>
                      <a type="button" href="/fornecedores" className="btn btn-danger m-1" onClick={() => handleDelete(fornecedor.id_fornecedor)}>Excluir</a>
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
          <a className="btn btn-success" href="/fornecedores/create">Cadastrar nova fornecedor</a>
        </div>
      </div>
    </div>
  )
}

export default Fornecedor