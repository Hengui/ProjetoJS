// Codigo da barra de Nav.

openMenu.addEventListener('click', () => {

	menu.style.display = "flex"

	menu.style.right = (menu.offsetWidth * -1) + 'px'


	setTimeout(()=> {

		menu.style.opacity = '1'

		menu.style.right = "0"

		openMenu.style.display = 'none'
	}, 10);
})

closeMenu.addEventListener('click', () => {

	menu.style.opacity = '0'

	menu.style.right = (menu.offsetWidth * -1) + 'px'

	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})


const lists = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');

function ativaMenu() {
    for (let list of lists) {
        list.classList.remove('ativo');
    }
    this.classList.add('ativo');
    const index = Array.from(lists).indexOf(this);
    const position = index * 70; 
    indicator.style.transform = `translateX(${position}px)`;
}

for (let list of lists) {
    list.addEventListener('mouseenter', ativaMenu); 
}

// Desativação dos icones de redes no footer.
window.onload = function() {
	desativarLinks();
};

function desativarLinks() {
	var links = document.querySelectorAll("ul li a[href^='https://facebook.com/exemplo'], ul li a[href^='https://twitter.com/exemplo'], ul li a[href^='https://linkedin.com/exemplo']");

	links.forEach(function(link) {
		link.removeAttribute("href");
		link.style.pointerEvents = "none";
	});
}

// Formulario de concordo e discordo

document.getElementById("formConcordoDiscordo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    var opcaoSelecionada = document.querySelector('input[name="opcao"]:checked').value;

    if (opcaoSelecionada === "discordo") {
        window.location.href = "https://www.google.com"; // Redireciona para o Google
    } else {
        alert("Obrigado por concordar com os termos."); // Mensagem de agradecimento
        document.getElementById("sectionConcordoDiscordo").style.display = "none"; // Oculta o formulário
        // Aqui você pode redirecionar para a página inicial do site
        window.location.href = "http:/layout.html"; // Redireciona para a página inicial do site
    }
});