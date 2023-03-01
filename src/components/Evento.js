import Button from "./Button"

function Evento(){
    function meuEvento(){
        console.log('Activando primeiro evento')
    }

    function segundoEvento(){
        console.log('Activando o segundo evento')
    }
    
    return(
        <div>
            <p>click para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento "/>
            <Button event={segundoEvento} text="Segundo Evento "/>
        </div> 
    )
}
export default Evento