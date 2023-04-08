import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Unidade = () => {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    axios.get('https://pubadmin.onrender.com/unidades').then((res) => {
      setUnidades(res.data);
    })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`https://pubadmin.onrender.com/unidade/${id}`)
  }


  return (
    <div className="mt-5 p-5">
      <h1>Unidades</h1>
      <table className="table table-striped table-hover table-bordered border-dark mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>CEP</th>
            <th>RUA</th>
            <th>NUMERO</th>
            <th>BAIRRO</th>
            <th>TELEFONE</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {
            unidades.length > 0 ? (
              unidades.map((unidade) => {
                return (
                  <tr key={unidade.id_unidade}>
                    <td>{unidade.id_unidade}</td>
                    <td>{unidade.cep_unidade}</td>
                    <td>{unidade.rua_unidade}</td>
                    <td>{unidade.numero_unidade}</td>
                    <td>{unidade.bairro_unidade}</td>
                    <td>{unidade.telefone_unidade}</td>
                    <td>
                      <a href={`/unidade/${unidade.id_unidade}`} className="btn btn-primary m-1" >Editar</a>
                      <a type="button" href="/unidades" className="btn btn-danger m-1" onClick={() => handleDelete(unidade.id_unidade)}>Excluir</a>
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
          <a className="btn btn-success" href="/unidade/create">Cadastrar nova unidade</a>
        </div>
      </div>
    </div>
  )
}

export default Unidade