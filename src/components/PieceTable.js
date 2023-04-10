import React from 'react'

export default props=>{


    const rows = props.piece.map(piece=> {
        return(
            <tr key={piece.id}>
            <td>{piece.id}</td>
            <td>{piece.clas}</td>
            <td>
                <button type="button" title="editar"
                className="btn btn-primary" onClick={e=> props.edit(piece.id)}>
                <i className="pi pi-pencil"></i>
                </button>
                <button type="button" title="excluir"
                className="btn btn-danger" onClick={e=> props.delete(piece.id)}>
                <i className="pi pi-trash"></i>
                </button>

                </td>
                </tr>
        )
    })




    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">name</th>
                    <th scope="col">acoes</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )

}