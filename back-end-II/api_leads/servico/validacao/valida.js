function validaNome(nome) {
    const regexNome = /^ [a-zA-ZÀ-ÿ\s\-']+ $/;
    const isValid = nome.length >= 2 && regexNome.test(nome);
    return isValid; 
}

function validaEmail(email) {
    const regexEmail = /^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$/;
   
    const isValid = regexEmail.test(email);
    return isValid;
}

function validaTelefone(telefone) {
    const regexTelefone = /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/;
    const isValid = regexTelefone.test(telefone);
    return isValid;

}

export function validaUsuario(nome, email, telefone) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    const telefoneValido = validaTelefone(telefone);

    

    const usuarioValido = nomeValido && emailValido && telefoneValido;

    if (usuarioValido) {
        return { status: true, mensagem: ''}
    } else{
        return { status: false, nome: nomeValido, email: emailValido , telefone: telefoneValido};
    }

    
}
