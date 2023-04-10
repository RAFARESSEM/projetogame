import React from 'react'

export default props=>{


    const rows = props.squares.map(square=> {
        return(
            <tr key={square.id}>
            <td>{square.id}</td>
            <td>{square.name}</td>
            <td>
                <button type="button" title="editar"
                className="btn btn-primary" onClick={e=> props.edit(square.id)}>
                <i className="pi pi-pencil"></i>
                </button>
                <button type="button" title="excluir"
                className="btn btn-danger" onClick={e=> props.delete(square.id)}>
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