import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Funcionario = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    axios.get('https://pubadmin.onrender.com/funcionarios')
      .then((res) => {
        setFuncionarios(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://pubadmin.onrender.com/funcionarios/${id}`)
  }

  return (
    <div className="mt-5 p-5">
      <h1>Funcionarios</h1>
      <table className="table table-striped table-hover table-bordered border-dark mt-3">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            funcionarios.length > 0 ? (
              funcionarios.map((funcionario) => {
                return (
                  <tr key={funcionario.id_funcionario}>
                    <th scope="row" >{funcionario.id_funcionario}</th>
                    <td>{funcionario.nome_funcionario}</td>
                    <td>{funcionario.email_funcionario}</td>

                    <td>
                      <a href={`/funcionario/${funcionario.id_funcionario}`} className="btn btn-primary m-1" >Editar</a>
                      <a type="button" href="/funcionarios" className="btn btn-danger m-1" onClick={() => handleDelete(funcionario.id_funcionario)}>Excluir</a>
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
          <a className="btn btn-success" href="/funcionario/create">Cadastrar novo funcionario</a>
        </div>
      </div>
    </div>
  )
}

export default Funcionario
