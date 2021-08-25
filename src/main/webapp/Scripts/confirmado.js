/**
 * Confirmação de exclusão
 * @author Victor de Alencar
 */

function confirma(idcon){
    let resposta = confirm('Deseja confirma a exclusão? ')
    if(resposta === true){
        window.location.href = "delete?idcon=" + idcon
    }
}

