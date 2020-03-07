// Base a ser utilizada
const alunosDaEscola = [
    {
        nome: "Henrique",
        notas: [],
        cursos: [],
        faltas: 5
    },
    {
        nome: "Edson", notas: [],
        cursos: [], faltas: 2
    },
    {
        nome: "Bruno", notas: [10, 9.8, 9.6],
        cursos: [], faltas: 0
    },
    {
        nome: "Guilherme", notas: [10, 9.8, 9.6],
        cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0
    },
    {
        nome: "Carlos", notas: [],
        cursos: [], faltas: 0
    },
    {
        nome: "Lucca", notas: [10, 9.8, 9.6],
        cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0
    }
];

// implementação
function adicionarAluno(nome) {
    alunosDaEscola.push({
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    })

    console.log(`Aluno ${nome} inserido com sucesso na lista`)
    return "Sucesso!"
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
}

function listarAlunos() {
    let formated = ''
    alunosDaEscola.forEach(obj => {
        let nomeCurso, matricula
        if (obj.cursos.length > 0) {
            nomeCurso = obj.cursos[0].nomeDoCurso
            matricula = obj.cursos[0].dataMatricula
        } else {
            nomeCurso = 'Nenhum curso para este aluno'
            matricula = 'Portanto também não há data.'
        }

        formated +=
            `
        -----------------------------
        NOME: ${obj.nome}
        NOTAS: ${obj.notas}
        CURSOS: 
            nome : ${nomeCurso}
            data matricula: ${matricula}
        FALTAS: ${obj.faltas}`
    })
    return formated
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
}

function buscarAluno(nome) {
    let aluno = ''
    let mensagem = ''
    alunosDaEscola.filter((element) => {
        if (element.nome === nome) {
            console.log(`Aluno ${element.nome} encontrado!`)
            aluno = element
        } else {
            mensagem = `Aluno ${nome} não encontrado!`
        }
    })
    return aluno != '' ? aluno : mensagem
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
}

function matricularAluno(aluno, curso) {
    let verificador = buscarAluno(aluno.nome)
    if (aluno.nome === verificador.nome) {
        verificador.cursos.push({
            nomeDoCurso: curso,
            dataMatricula: new Date
        })
        return "Cadastrado com sucesso!"
    } else {
        return "Aluno não encontrado"
    }
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
}

function aplicarFalta(aluno) {
    let verificador = buscarAluno(aluno.nome)
    if (verificador.cursos < 1) {
        return "Aluno não tem curso. Falta não aplicada."
    } else {
        verificador.faltas += 1
        return `Falta aplicada. Aluno ${verificador.nome} agora tem ${verificador.faltas} faltas!`
    }
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
}

function aplicarNota(aluno, nota) {
    let verificador = buscarAluno(aluno.nome)
    if (verificador.cursos < 1) {
        return "Aluno não tem curso. Nota não aplicada."
    } else {
        verificador.notas.push(nota)
        return `Nota aplicada. Aluno ${verificador.nome} agora tem ${verificador.notas}!`
    }
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
}

function aprovarAluno(aluno) {
    let verificador = buscarAluno(aluno.nome)
    if (verificador.cursos < 1) {
        return "Aluno não tem curso. Não pode ser aprovado."
    } else {
        let media = 0.0
        media += media + verificador.notas.reduce((a, b) => a+b)
        media = media / verificador.notas.length

        return (verificador.faltas < 4 && media >= 7) ? `Parabéns, aprovado com ${media.toFixed(1)}!` : "Reprovado! Se esforce mais."

        // Verificar condições de aprovação
    }
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. 
     * Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
     * O aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
     **/ 
}

