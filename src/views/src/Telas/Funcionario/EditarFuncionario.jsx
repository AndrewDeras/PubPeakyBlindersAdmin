import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const EditarFuncionario = () => {
  const { id } = useParams();

  const [funcionario, setFuncionario] = useState({
    nome_funcionario: "",
    email_funcionario: "",
  });
  console.log(funcionario);
  useEffect(() => {
    axios.get(`https://pubadmin.onrender.com/funcionarios/${id}`).then((res) => {
      setFuncionario(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    await axios.put(`https://pubadmin.onrender.com/funcionarios/${id}`, funcionario);
  };

  return (
    <div className="mt-5 p-5">
      <h1>Editar Funcionario</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={funcionario.nome_funcionario}
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
            value={funcionario.email_funcionario}
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

export default EditarFuncionario