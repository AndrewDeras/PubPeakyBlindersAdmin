import React, { useState } from 'react';
import axios from 'axios';

const NovaUnidade = () => {
  const [unidade, setUnidade] = useState({
    cep_unidade: "",
    rua_unidade: "",
    numero_unidade: "",
    bairro_unidade: "",
    telefone_unidade: ""
  });
  console.log(unidade);

  const handleSubmit = async (e) => {
    await axios.post(`https://pubadmin.onrender.com/unidade/`, unidade);
  };



  return (
    <div className=" mt-5 p-5">
      <h1>Nova Unidade</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="cep">CEP</label>
          <input
            type="text"
            className="form-control"
            id="cep"
            name="cep"
            onChange={(e) => setUnidade({ ...unidade, cep_unidade: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="rua">RUA</label>
          <input
            type="text"
            className="form-control"
            id="rua"
            name="rua"
            onChange={(e) => setUnidade({ ...unidade, rua_unidade: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="numero">NÚMERO</label>
          <input
            type="text"
            className="form-control"
            id="numero"
            name="numero"
            onChange={(e) => setUnidade({ ...unidade, numero_unidade: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="bairro">BAIRRO</label>
          <input
            type="text"
            className="form-control"
            id="bairro"
            name="bairro"
            onChange={(e) => setUnidade({ ...unidade, bairro_unidade: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="telefone">TELEFONE</label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            onChange={(e) => setUnidade({ ...unidade, telefone_unidade: e.target.value })}
          />
        </div>
        <div className='mt-2' >
          <a href='/unidades' onClick={handleSubmit} type="button" className="btn btn-primary">
            Salvar
          </a>
        </div>
      </form>
    </div>
  )
}

export default NovaUnidade