const frm = document.querySelector("form");
const respostaNome = document.querySelector("span");
const respostaLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.nomePaciente.value;
    pacientes.push(nome);
    let lista = "";
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    };
    respostaLista.innerText = lista;
    frm.nomePaciente.value = "";
    frm.nomePaciente.focus();
})

frm.botaoUrgencia.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("Informe o nomedo paciente a ser atendido em caráter de urgência");
        frm.nomePaciente.focus();
        return
    }
    const nome = frm.nomePaciente.value;
    pacientes.unshift(nome);
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${pacientes[i]}\n`));
    respostaLista.innerText = lista;
    frm.nomePaciente.value = "";
    frm.nomePaciente.focus();
})

frm.botaoAtender.addEventListener("click", () => {
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        frm.nomePaciente.focus();
        return
    }
    const atender = pacientes.shift();
    respostaNome.innerText = atender
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${pacientes[i]}\n`));
    respostaLista.innerText = lista;
})