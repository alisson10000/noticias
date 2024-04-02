function validaComentario() {

    var comentario;

    comentario = document.getElementById('comentario').value;

    if (comentario === "") {
        //alert('Campo comentário está vazio!!!');
        document.getElementById('comentario').focus();
        document.getElementById('mensagem')
                .innerHTML = "Campo comentário está vazio!!!";

        document.getElementById('mensagem').style.color = "white";
        // Define a cor do texto para vermelho
        document.getElementById('mensagem').style.fontSize = "20px"; 
        //// Define o tamanho da fonte como 20 pixels
        document.getElementById('mensagem').style.backgroundColor = "red"; 
        //// Define a cor de fundo como amarelo
        document.getElementById('mensagem').style.width = "800px"; 
        //// Define a largura como 200 pixels
        document.getElementById('mensagem').style.height = "100px"; 
        //// Define a altura como 100 pixels
        document.getElementById('mensagem').style.border = "2px solid red"; 
        //// Define u
        document.getElementById('mensagem').style.borderRadius = "5px";
        document.getElementById('mensagem').style.display = "visible";





    } else {
        // comentario = document.getElementById('comentario').value;

        // alert(comentario);
        document.getElementById('mensagem').style.display = "none";
        document.getElementById('mensagem').style.visibility=" hidden";
        document.getElementById('mensagem').innerHTML = "";
       // document.frmComentario.submit();
    }


}























/*function validaComentario() {
 
 var comentario;
 
 comentario = document.getElementById('comentario').value;
 
 
 if (comentario === "") {
 alert('Campo comentário vazio!!!');
 document.getElementById('mensagem').style.display = "visible";
 document.getElementById('comentario').focus();
 document.getElementById("mensagem").innerHTML = "O campo comentário está vazio";
 document.getElementById('mensagem').style.color = "white"; // Define a cor do texto para vermelho
 document.getElementById('mensagem').style.fontSize = "20px"; // Define o tamanho da fonte como 20 pixels
 document.getElementById('mensagem').style.backgroundColor = "red"; // Define a cor de fundo como amarelo
 
 document.getElementById('mensagem').style.width = "400px"; // Define a largura como 200 pixels
 document.getElementById('mensagem').style.height = "100px"; // Define a altura como 100 pixels
 document.getElementById('mensagem').style.border = "2px solid red"; // Define u
 document.getElementById('mensagem').style.borderRadius = "5px";
 
 } else {
 document.getElementById('mensagem').style.display = "none";
 document.getElementById('comentario').value = "";
 document.getElementById("mensagem").innerHTML = "";
 alert('Enviar dados');
 document.frmComentario.submit();
 }
 
 
 
 
 * 
 * */
 