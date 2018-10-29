alert("Bienvenue dans ce jeu de devinette !");

var min = Number(prompt("Entrez un nombre minimum"));
var max = Number(prompt("Entrez un nombre maximum"));
var chance = Number(prompt("Entrez le nombre de tentatives"));


minimum = Math.ceil(min);
maximum = Math.floor(max);
var solution = Math.floor(Math.random() * (maximum - minimum +1)) + minimum;

//--------------------------------------------------------------------------------------------------------------------------------------

var nbrJoueur = Number(prompt("Entrez un nombre entre " + minimum + " et " + maximum));

if (nbrJoueur===solution)
	{
		alert("Bravo ! La solution était "+solution);
	}

else if(nbrJoueur!==solution) 
	{
		for(var i=1 ; i<chance ; i++)
			{			
				if(nbrJoueur<solution)
					{
						alert(nbrJoueur+" est trop petit, essayez encore ! Il vous reste "+ chance +" chance !");
						chance--;
						nbrJoueur = Number(prompt("Entrez un nombre entre " + minimum + " et " + maximum));
					}
				else if(nbrJoueur>solution)
					{
						alert(nbrJoueur+" est trop grand, essayez encore ! Il vous reste "+ chance +" chance !");
						chance--;
						nbrJoueur = Number(prompt("Entrez un nombre entre " + minimum + " et " + maximum));
					}
				else if(nbrJoueur===solution)
					{
						alert("Bravo ! La solution était bien "+ solution +" Vous avez trouvé en "+ i +" essais !");
						break
					}
				
			}
		if(chance===0)
			{
				alert("Vous avez perdu ! La solution était "+ solution);
			}
	}
