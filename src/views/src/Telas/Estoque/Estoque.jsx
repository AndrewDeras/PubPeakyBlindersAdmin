import { useEffect, useState } from "react"
import axios from 'axios'


export default function Estoque() {
    const [estoques, setEstoques] = useState([]);

    useEffect(() => {
        async function getEstoque() {
            const data = await axios.get("https://pubadmin.onrender.com/estoque").
                then((res) => {
                    setEstoques(res.data)
                }).catch((error) => {
                    console.log(error);
                })
        }
        getEstoque();
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://pubadmin.onrender.com/estoque/${id}`)
            .then(() => {
                setEstoques(estoques.filter((estoque) => estoque.id_Estoque !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="mt-5 p-5">
            <h1>Produtos</h1>
            <table className="table table-striped table-hover table-bordered border-dark mt-3">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Quantidade Disponivel</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        estoques.length > 0 ? (
                            estoques.map((estoque) => {
                                return (
                                    <tr key={estoque.id_Estoque}>
                                        <th scope="row" >{estoque.id_Estoque}</th>
                                        <td>{estoque.quantidade_produto}</td>
                                        <td>
                                            <a href={`/estoque/${estoque.id_Estoque}`} className="btn btn-primary m-1" >Editar</a>
                                            <a type="button" href="/estoque" className="btn btn-danger m-1" onClick={() => handleDelete(estoque.id_Estoque)}>Excluir</a>
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
                    <a className="btn btn-success" href="/estoque/create">Cadastrar estoque</a>
                </div>
            </div>
        </div>
    )
}