console.log("Bienvenue dans ce jeu de devinette !");


var solution = Math.floor(Math.random() * 10) + 1;

var nbrJoueur = Number(prompt("Entrez un nombre entre 0 et 10:"));

var chance=3;

if (nbrJoueur===solution)
	{
		console.log("Bravo ! La solution était "+solution);
	}

else if(nbrJoueur!==solution) 
	{
		for(var i=1;i<6;i++)
			{			
				if(nbrJoueur<solution)
					{
						alert(nbrJoueur+" est trop petit, essayez encore ! Il vous reste "+chance+" chance !");
						chance--;
						nbrJoueur = Number(prompt("Entrez un nombre nouveau nombre entre 0 et 10:"));
					}
				else if(nbrJoueur>solution)
					{
						alert(nbrJoueur+" est trop grand, essayez encore ! Il vous reste "+chance+" chance !");
						chance--;
						nbrJoueur = Number(prompt("Entrez un nombre nouveau nombre entre 0 et 10:"));
					}
				else if(nbrJoueur===solution)
					{
						alert("Bravo ! La solution était bien "+solution+" Vous avez trouvé en "+i+" essais !");
						break
					}
				
			}
		if(chance===0)
			{
				alert("Vous avez perdu ! La solution était "+solution);
			}
	}