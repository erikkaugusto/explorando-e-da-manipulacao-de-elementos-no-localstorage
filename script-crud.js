const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');

const tarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); // para impedir que recarregue a página
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); // guarda a lista de tarefas dentro da localStorage, 'tarefas' é a chave de acesso e o JSON transforma em string a variável tarefas que será armazenada na localStorage
})