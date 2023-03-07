function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisas boas</h3>
            { //usando o jfx
                itens.length > 0 ? (
                    itens.map((itens, index) => (
                        <p key={index}>{itens}</p>
                    ))) : (<p>NAo ha itens na lista</p>)
            } 
        </>
    )
}

export default OutraLista