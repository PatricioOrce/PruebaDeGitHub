/*
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{

	var nombrePasajero;
	var estadoCivilPasajero;
	var edadPasajero;
	var temperaturaCorporal;
	var sexoPasajero;
	var viudosMayores=0;
	var flagMujerSoltera=false;
	var nombreMujerSolteraMasJoven;
	var edadMujerSolteraMasJoven;
	var cantidadDePasajeros;
	var viajeTotalSinDescuento;
	var pasajerosConMasDe60Años=0;
	var porcentajeAncianos;
	var viajeTotalConDescuento;
	var contadorMujeres=0;

	cantidadDePasajeros=parseInt(prompt("Ingrese cantidad de pasajeros: "));
	while(isNaN(cantidadDePasajeros))
	{
		cantidadDePasajeros=parseInt(prompt("Ingrese cantidad numerica"));
	}

	for(var i=0 ; i<cantidadDePasajeros ; i++)
	{
		nombrePasajero=prompt("Ingrese nombre del pasajero");
		while(isNaN(nombrePasajero)==false)
		{
			nombrePasajero=prompt("Ingrese un nombre VALIDO");
		}

		sexoPasajero=prompt("Ingrese sexo del pasajero");
		sexoPasajero = sexoPasajero.toUpperCase();
		while(!(sexoPasajero=="MASCULINO"||sexoPasajero=="FEMENINO"))
		{
			sexoPasajero=prompt("Ingrese sexo valido");
			sexoPasajero = sexoPasajero.toUpperCase();
		}

		switch (sexoPasajero) {
			case "FEMENINO":
				estadoCivilPasajero = prompt("Ingrese estado civil del pasajero");
				estadoCivilPasajero = estadoCivilPasajero.toUpperCase();
				while(!(estadoCivilPasajero=="CASADA"||estadoCivilPasajero=="SOLTERA"||estadoCivilPasajero=="VIUDA"))
				{
					estadoCivilPasajero = prompt("Ingrese estado civil valido");
					estadoCivilPasajero = estadoCivilPasajero.toUpperCase();
				}
				break;
			case "MASCULINO":
				estadoCivilPasajero = prompt("Ingrese estado civil del pasajero");
				estadoCivilPasajero = estadoCivilPasajero.toUpperCase();
				while(!(estadoCivilPasajero=="CASADO"||estadoCivilPasajero=="SOLTERO"||estadoCivilPasajero=="VIUDO"))
				{
					estadoCivilPasajero = prompt("Ingrese estado civil valido");
					estadoCivilPasajero = estadoCivilPasajero.toUpperCase();
				}
			default:
				break;
		}

		edadPasajero = parseInt(prompt("Ingrese edad del pasajero"));
		while(isNaN(edadPasajero)==true || edadPasajero<17 || edadPasajero>100)
		{
			edadPasajero = parseInt(prompt("Ingrese edad valida"));
		}

		temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal del pasajero"));
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<35 || temperaturaCorporal>41)
		{
			temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal valida"));
		}

		

		if(edadPasajero>60)
		{
			pasajerosConMasDe60Años++;
		}
		if(sexoPasajero=="FEMENINO")
		{
			contadorMujeres++;
		}

		switch (estadoCivilPasajero) 
		{
			case "SOLTERA":
				if(sexoPasajero=="FEMENINO")
				{
					if(flagMujerSoltera==false || edadPasajero<edadMujerSolteraMasJoven)
					{
						edadMujerSolteraMasJoven = edadPasajero;
						nombreMujerSolteraMasJoven = nombrePasajero;
						flagMujerSoltera=true;
					}
				}
				break;
			case "VIUDO":
				if(edadPasajero>60)
				{
					viudosMayores++;
				}
				break;
		
			default:
				break;
		}
	}
	
	viajeTotalSinDescuento=cantidadDePasajeros*600;
	viajeTotalConDescuento=(viajeTotalSinDescuento*25)/100;
	porcentajeAncianos=(pasajerosConMasDe60Años/cantidadDePasajeros)*100;

	document.write("La cantidad de personas con estado viudo de mas de 60 años es: "+pasajerosConMasDe60Años+"<br>");
	if(contadorMujeres>0)
	{
		document.write("El nombre de la mujer soltera mas joven es "+nombreMujerSolteraMasJoven+" y su edad es "+edadMujerSolteraMasJoven+"<br>");
	}
	else
	{
		document.write("No se ingresaron mujeres"+"<br>");
	}
	document.write("El precio del viaje total sin descuento es "+viajeTotalSinDescuento+"<br>");
	if(porcentajeAncianos>50)
	{
		document.write("El descuento es de "+viajeTotalConDescuento+" pesos <br>");
	}

}



