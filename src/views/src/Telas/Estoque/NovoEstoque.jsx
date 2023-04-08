import { useState } from "react"
import axios from 'axios'


export default function NovoEstoque() {



    const [estoque, setEstoque] = useState({
        quantidade_produto: 0
    })

    const handleSubmit = async () => {
        await axios.post(`https://pubadmin.onrender.com/estoqueCreate`, estoque);
    }
    return (
        <div className="mt-5 p-5">
            <h1>Novo Estoque</h1>
            <form>
                <div className="form-group">
                    <label className='fw-bold m-2 ' htmlFor="preco">Quantidade</label>
                    <input
                        type="number"
                        className="form-control"
                        id="preco"
                        name="preco"
                        onChange={(e) => setEstoque({ ...estoque, quantidade_produto: e.target.value })}
                    />
                </div>
                <div className='mt-2' >
                    <a href='/estoque' onClick={handleSubmit} type="button" className="btn btn-primary">
                        Salvar
                    </a>
                </div>
            </form>
        </div>
    )
}