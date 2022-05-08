/*_______________________________________boutons________________________________________*/
let btn_notif = document.getElementById('notif');
let btn_ecrit = document.getElementById('ecrit_navigateur');
let btn_sweet = document.getElementById('sweet');
var nbr_msg = 0;

btn_notif.addEventListener('click', function(){
		window.alert('bouton cliqué !')
	});

btn_ecrit.addEventListener('click', function(){
	nbr_msg = nbr_msg + 1;
	afficheMsg(nbr_msg);
	});

btn_sweet.addEventListener('click', function(){
		Swal.fire(
  		'Bouton cliqué !',
  		'Avec sweetalert',
  		'success')
	});

function afficheMsg(nombre_msg){

let msg_aff;
		if (nombre_msg == 1)
			{
				msg_aff = 'Bouton cliqué !';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg == 2)
			{
				msg_aff = 'Bouton déjà cliqué !';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg == 3)
			{
				msg_aff = 'Rooh, encore ?!';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg == 4)
			{
				msg_aff = 'T\'abuse là';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg == 5)
			{
				msg_aff = 'T\'as pas autre chose à faire ?';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg == 6)
			{
				msg_aff = 'Y a plus d\'autres messages après';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg == 7)
			{
				msg_aff = 'Bon ok c\'était une blague, mais là je te jure y a plus rien';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg >= 8 && nombre_msg <= 11)
			{
				msg_aff = 'Plus rien à dire';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg == 12)
			{
				msg_aff = 'STOP !';
				let msg = msg_aff;
				let msgBox = document.getElementById("messages");
				let p = document.createElement("p");
				p.append(msg); //ajoute le message dans le nouvel élt <p>
				msgBox.appendChild(p);
			}
		else if (nombre_msg >= 13)
			{

			}

};
/*_______________________________________boutons________________________________________*/

/*_______________________________________compteur________________________________________*/

let nb = document.getElementById('nb');
let cpt = parseInt(nb.innerText);
let btnplus = document.getElementById('bouton_plus');
let btnmoins = document.getElementById('bouton_moins');
let reset = document.getElementById('bouton_reset');


btnplus.addEventListener('click', function(){
		cpt = cpt + 1;
		nb.innerHTML = cpt;
	});

btnmoins.addEventListener('click', function()
	{
		cpt = cpt - 1;
		nb.innerHTML = cpt;
	});

reset.addEventListener('click', function()
	{
		cpt = 0;
		nb.innerHTML = cpt;
	});

/*_______________________________________compteur________________________________________*/
