import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const EditarFornecedor = () => {

  const { id } = useParams();
  const [fornecedor, setFornecedor] = useState({
    id: "",
    nome_fornecedor: ""
  });
  console.log(fornecedor);

  useEffect(() => {
    axios.get(`https://pubadmin.onrender.com/fornecedores/${id}`).then((res) => {
      setFornecedor(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    await axios.put(`https://pubadmin.onrender.com/fornecedores/${id}`, fornecedor);
  };

  return (
    <div className="mt-5 p-5">
      <h1>Editar Fornecedor</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={fornecedor.nome_fornecedor}
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

export default EditarFornecedor