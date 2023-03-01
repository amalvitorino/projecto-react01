import styles from './Frase.module.css'
function Frase(){
    return (
        <div className={styles.faseContainer}>
            <p className={styles.fraseContent}>this is the component with an word</p>
        </div>
    )
}
export default Frase;