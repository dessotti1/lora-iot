import './Conta.css'

const Conta = (props) => {

    const user = props.user

    return (
        <div>
            <h1>Nome de Usuário</h1>
            <p>{user.nome}</p>
            <h1>Função</h1>
            {/* <p>{props.funcao}</p> */}
            <h1>Data de Registro</h1>
            {/* <p>{props.data}</p> */}
        </div>
    );

}

export default Conta;