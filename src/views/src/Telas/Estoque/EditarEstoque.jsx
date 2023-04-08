import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'




export default function EditarEstoque() {
    const { id } = useParams();
    const [estoque, setEstoque] = useState({
        quantidade_produto: 0
    })

    useEffect(() => {
        async function getEstoque() {
            const data = await axios.get(`https://pubadmin.onrender.com/estoque/${id}`).
                then((res) => {
                    setEstoque(res.data)
                }).catch((error) => {
                    console.log(error);
                })
        }
        getEstoque();
    }, [])


    const handleSubmit = async () => {
        await axios.put(`https://pubadmin.onrender.com/estoque/${id}`, estoque);
    }

    return (
        <div className="mt-5 p-5" >
            <h1>Novo Estoque</h1>
            <form>
                <div className="form-group">
                    <label className='fw-bold m-2 ' htmlFor="preco">Quantidade</label>
                    <input
                        type="number"
                        className="form-control"
                        id="preco"
                        name="preco"
                        value={estoque.quantidade_produto}
                        onChange={(e) => setEstoque({ ...estoque, quantidade_produto: e.target.value })}
                    />
                </div>
                <div className='mt-2' >
                    <a href='/estoque' onClick={handleSubmit} type="button" className="btn btn-primary">
                        Salvar
                    </a>
                </div>
            </form>
        </div >
    )
}