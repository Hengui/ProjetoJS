
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

function CalcularFinanciamento() {
    const emprestimo = parseFloat(document.getElementById("emprestimos").value);
    const taxa = parseFloat(document.getElementById("taxa").value);
    const parcelas = parseInt(document.getElementById("parcelas").value);
    const entrada = parseFloat(document.getElementById("entrada").value);
    const emprestimoFinal = emprestimo - entrada;

    const resultado = document.getElementById('sac').checked ?
        calcularSAC(emprestimoFinal, taxa, parcelas) :
        calcularPRICE(emprestimoFinal, taxa, parcelas);

    exibirResultado(resultado);
}

function calcularSAC(emprestimo, taxa, parcelas) {
    const prestacoes = [];
    let saldoDevedor = emprestimo;
    const amortizacao = emprestimo / parcelas;

    for (let i = 0; i < parcelas; i++) {
        const juros = saldoDevedor * taxa / 100;
        const totalPrestacao = amortizacao + juros;
        saldoDevedor -= amortizacao;
        prestacoes.push({ prestacao: totalPrestacao.toFixed(2), juros: juros.toFixed(2), amortizacao: amortizacao.toFixed(2), saldoDevedor: saldoDevedor.toFixed(2) });
    }

    return prestacoes;
}

function calcularPRICE(emprestimo, taxa, parcelas) {
    const prestacoes = [];
    let saldoDevedor = emprestimo;
    const juros = Math.pow((1 + taxa / 100), parcelas);
    const prestacao = emprestimo * (taxa / 100 * juros) / (juros - 1);

    for (let i = 0; i < parcelas; i++) {
        const jurosPrestacao = saldoDevedor * taxa / 100;
        const amortizacaoPrestacao = prestacao - jurosPrestacao;
        saldoDevedor -= amortizacaoPrestacao;
        prestacoes.push({ prestacao: prestacao.toFixed(2), juros: jurosPrestacao.toFixed(2), amortizacao: amortizacaoPrestacao.toFixed(2), saldoDevedor: saldoDevedor.toFixed(2) });
    }

    return prestacoes;
}

function exibirResultado(resultado) {
    const tabelaResultado = document.getElementById("tabelaResultado").getElementsByTagName('tbody')[0];
    tabelaResultado.innerHTML = "";

    const tipoJuros = document.querySelector('input[name="tipo-juros"]:checked').value;

    let tabelaHTML = `<h2>${tipoJuros.toUpperCase()}</h2>`;

    resultado.forEach((item, index) => {
        tabelaHTML += `<tr><td>${index + 1}</td><td>${item.prestacao}</td><td>${item.juros}</td><td>${item.amortizacao}</td><td>${item.saldoDevedor}</td></tr>`;
    });

    tabelaResultado.innerHTML = tabelaHTML;
}



