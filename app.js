const listStudent = document.querySelector('#student-list');

function renderList(doc) {

    let li = document.createElement('li')
    let nome = document.createElement('span')
    let cpf = document.createElement('span')
    let rg = document.createElement('span')
    let telefone_aluno = document.createElement('span')
    let telefone_responsavel = document.createElement('span')
    let email = document.createElement('span')
    let data_nascimento = document.createElement('span')

    nome.textContent = doc.nome;
    cpf.textContent = doc.cpf;
    rg.textContent = doc.rg;
    telefone_aluno.textContent = doc.telefone_aluno;
    telefone_responsavel.textContent = doc.telefone_responsavel;
    email.textContent = doc.email;
    data_nascimento.textContent = doc.data_nascimento;

    li.appendChild(nome);
    li.appendChild(cpf);
    li.appendChild(rg);
    li.appendChild(telefone_aluno);
    li.appendChild(telefone_responsavel);
    li.appendChild(email);
    li.appendChild(data_nascimento);

    listStudent.appendChild(li);

}

db.collection('libri-collection')
    .get()
    .then((snapshot)=>{
        snapshot.docs.forEach(
            doc=> {
                console.log(doc.data())
                renderList(doc.data())
            }
        );
    })

    const form = document.querySelector('#add-student');

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        alert('Formulário Ativo!');
    });