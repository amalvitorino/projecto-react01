import { useState } from "react"
function Condicional(){

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        setEmail('')
    }
    return(
        <div>
            <h2>Cadastere seu email</h2>
            <form>
                <input type="email" placeholder="digite seu email..." 
                onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuario eh {userEmail} </p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}
export default Condicional