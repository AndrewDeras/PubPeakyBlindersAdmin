import React, { useState } from 'react';
import axios from 'axios';

const NovoFuncionario = () => {
  const [funcionario, setFuncionario] = useState({
    nome_funcionario: "",
    email_funcionario: "",
  });
  console.log(funcionario);

  const handleSubmit = async (e) => {
    await axios.post(`https://pubadmin.onrender.com/funcionarios`, funcionario);
  };

  return (
    <div className="mt-5 p-5">
      <h1>Novo Funcionario</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            onChange={(e) => setFuncionario({ ...funcionario, nome_funcionario: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={(e) => setFuncionario({ ...funcionario, email_funcionario: e.target.value })}
          />
        </div>

        <div className='mt-2' >
          <a href='/funcionarios' onClick={handleSubmit} type="button" className="btn btn-primary">
            Salvar
          </a>
        </div>
      </form>
    </div>
  )
}

export default NovoFuncionario