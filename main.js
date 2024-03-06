const form = document.getElementById('form-lista');
const nomeUsuario = document.getElementById('nome-usuario');
const telUsuario = document.getElementById('tel-usuario');
const totalContatos = document.getElementById('total-contatos');

let nomes = [];
let tel = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizarTotalContatos();
});

function formatarTelefone(telNumero){
    if(telNumero.length === 11){
        return telNumero.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else {
        return telNumero;
    }
}

function adicionaLinha(){
    if(nomes.includes(nomeUsuario.value) || tel.includes(telUsuario)){
        alert(`O nome ${nomeUsuario.value} ou telefone ${telUsuario.value} já forão inserido na lista`)
    } else {
        const corpoTabela = document.querySelector('tbody');
        const numeroTelFormatado = formatarTelefone(telUsuario.value)
        corpoTabela.innerHTML += `
            <tr>
                <td>${nomeUsuario.value}</td>
                <td>${numeroTelFormatado}</td>
            </tr>
        `
    nomes.push(nomeUsuario.value);
    tel.push(telUsuario.value);
    }

    nomeUsuario.value = '';
    telUsuario.value = '';
};

function atualizarTotalContatos(){
    let somaTotalContatos = nomes.length;
    totalContatos.innerHTML = somaTotalContatos;
}


function limparTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';
    nomes.splice(0, nomes.length);
    tel.splice(0, tel.length);
    totalContatos.innerHTML = '';
}