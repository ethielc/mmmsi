import React from 'react';
import './Posts.css';

const Posts = ({posts, loading, detalleRamo, elegido}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
    <div className="table-contenedor">
        <table className="content-table">
            <thead>
                <tr>
                    <th>Seleccionar</th>
                    <th className="th-asignatura">Asignatura</th>
                    <th className="th-profe">Tipo</th>
                    <th className="vacante">Vacantes</th>
                    <th className="th-detalle">Detalles</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>
                            <div className="container-elegido">
                                <input onClick={() => elegido(post)} type="checkbox"/>
                            </div>
                        </td>
                        <td className="td-asignatura">{post.ramo}</td>
                        <td className="td-profe">{post.tipo}</td>
                        <td className="vacante">{post.vacantes}</td>
                        <td onClick={() => detalleRamo(post)} className="td-detalle"><i class="fa fa-angle-right" aria-hidden="true"></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Posts;