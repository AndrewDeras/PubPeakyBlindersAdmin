import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditarUnidade = () => {

  const { id } = useParams(); // Obtém o id do produto a partir dos parâmetros da rota
  const [unidade, setUnidade] = useState({
    id: id,
    cep_unidade: "",
    rua_unidade: "",
    numero_unidade: "",
    bairro_unidade: "",
    telefone_unidade: ""
  });

  useEffect(() => {
    axios.get(`https://pubadmin.onrender.com/unidade/${id}`).then((res) => {
      console.log(res.data);
      setUnidade(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    await axios.put(`https://pubadmin.onrender.com/unidade/${id}`, unidade);
  };

  return (
    <div className=" mt-5 p-5">
      <h1>Editar Produto</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="cep">CEP</label>
          <input
            type="text"
            className="form-control"
            id="cep"
            name="cep"
            value={unidade.cep_unidade}
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
            value={unidade.rua_unidade}
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
            value={unidade.numero_unidade}
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
            value={unidade.bairro_unidade}
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
            value={unidade.telefone_unidade}
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

export default EditarUnidade