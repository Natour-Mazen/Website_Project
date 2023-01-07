// fonction pour afficher la date et l'heure en temps réel
function date_heure(obj)
{
        date = new Date;
        annee = date.getFullYear();
        mois = date.getMonth();
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        m = date.getMinutes();
        ladate = 'Nous sommes le ' + jours[jour] + ' ' + j +' / '+ (mois+1) + ' / ' + annee + ' , il est ' + h + ' H ' + m +' Min ' ;
        document.getElementById(obj).innerHTML = ladate;
}

// fonction pour afficher/cacher 2 images sur la page index.xhtml 
function afficher()
{
  document.getElementById('d1').src="Images/logo2.jpg";
}
function cacher()
{
  document.getElementById('d1').src="Images/logo1.jpg";
}	
// fonction pour afficher +/cacher de détails sur une partie précise dans le plan du site
function aff(){
  document.getElementById("li").style.display = "block";
}
function cach(){
  document.getElementById("li").style.display = "none";
}

// fonction qui permet de recuperer l'heure lors du chargement de la page
function recupdate()
{
	var d = new Date();
	 var m = d.getMinutes();
	 s = d.getSeconds();
}

// fonction Lorsqu’on clique sur le lien d’envoi de mail sur la page d’accueil, le mail cree contient dans son
// objet des informations sur le navigateur, le systeme d’exploitation que l’internaute utilise
function mailchange(obj){
	var date = new Date();
	var restm =  date.getMinutes() - m ;
	var rests = date.getSeconds() - s ;
	obj.href = 'mailto:mazen.al.natour@etu.univ-poitiers.fr?subject='+'Voici des informations sur votre navigateur et votre systeme d’exploitation : '+navigator.userAgent +' et '+ window.screen.width +' et '+ window.screen.height+' , Vous avez passé :  '+ restm +' min '+ rests +' s , sur la page d accueil . ';	
}	

