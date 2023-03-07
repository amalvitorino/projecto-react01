function SeuNome({setNome}){
    
    return (
        <>
            <p>Digite o seu nome</p>
            <input type="text" placeholder="qual o seu nome" onChange={(e) =>setNome(e.target.value)}/>
        </>
    )
}
export default SeuNome