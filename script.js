document.getElementById('downloadCV').onclick = function (e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/document/d/1hWRKZxcdse8YwG5-7nVeyKXkFs7IVQTdEql3M88JcMs/export?format=pdf';
    link.download = 'Curriculo_Vitor_A.pdf';
    link.click();
};

function saudacao(nome) {

}


