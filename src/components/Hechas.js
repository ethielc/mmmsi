import React from 'react'
import './Posts.css';

const Hechas = ({posts, loading, detalleRamo}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="table-contenedor">
            <table className="content-table">
                <thead>
                    <tr>
                        <th className="th-asignatura">Asignatura</th>
                        <th className="th-profe">Tipo</th>
                        <th className="vacante">Pago</th>
                        <th className="th-detalle">Estado</th>
                        <th>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td className="td-asignatura">{post.ramo}</td>
                            <td className="td-profe">{post.tipo}</td>
                            <td className="vacante">{post.pago}</td>
                            <td className="td-estado">{post.estado}</td>
                            <td onClick={() => detalleRamo(post)} className="td-detalle"><i class="fa fa-angle-right" aria-hidden="true"></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
}

export default Hechas;