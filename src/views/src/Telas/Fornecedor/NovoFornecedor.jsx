import React, { useState } from 'react';
import axios from 'axios';

const NovoFornecedor = () => {
  const [fornecedor, setFornecedor] = useState({
    nome_fornecedor: "",
  });
  console.log(fornecedor);

  const handleSubmit = async (e) => {
    await axios.post(`https://pubadmin.onrender.com/fornecedores`, fornecedor);
  };

  return (
    <div className="mt-5 p-5">
      <h1>Novo Fornecedor</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            onChange={(e) => setFornecedor({ ...fornecedor, nome_fornecedor: e.target.value })}
          />
        </div>

        <div className='mt-2' >
          <a href='/fornecedores' onClick={handleSubmit} type="button" className="btn btn-primary">
            Salvar
          </a>
        </div>
      </form>
    </div>
  )
}

export default NovoFornecedor