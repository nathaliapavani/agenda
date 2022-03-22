/**
 * Confirmar a exclusao de um contato
 * Curso Java WEB Level 1 (Servlet - jsp - JDBC)
 * https://www.youtube.com/watch?v=7VgWAxEkv_U&list=PLbEOwbQR9lqz9AnwhrrOLz9cz1-TxoiUg
 * 
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}