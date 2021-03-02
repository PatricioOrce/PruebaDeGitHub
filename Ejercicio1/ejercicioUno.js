/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio(){
	
	var tipoDeMascota;
	var tipoDePelaje;
	var edadDeMascota;
	var nombreDeMascota;
	var razaDeMascota;
	var pesoDeMascota;
	var estadoClinico;
	var temperaturaCorporal;
	var perroMasPesado;
	var flagPerroMasPesado = false;
	var continuar;
	var contadorMascotas=0;
	var contadorPerros = 0;
	var contadorGatos = 0;
	var contadorOtros = 0;
	var nombreUltimamMascotaTipoOtraCosa;
	var minimoTemperaturaDeAnimalPelado;
	var flagAnimalPelado = false
	var promedioTemperaturaPerros;
	var acumTemperaturaPerros=0;
	var promedioTemperaturaGatos;
	var acumTemperaturaGatos=0;
	var promedioTemperaturaOtro;
	var acumTemperaturaOtros=0;
	var tipoMascotaConMayorPromedioDeTemperatura;
	var sumaGatosPerros;
	var porcentajeGatosPerrosDelTotal;
	var menorCantidadMascotas;
	var mascotasEnfermas=0;
	var mascotasInternadas=0;
	var mascotasAdopcion=0;
	var estadoClinicoConMenosMascotas;
	var acumPesoAnimales=0;
	var promedioKilosAnimales;
	var porcentajeEnfermosPorTotalDeMascotas;
	var nombreEstadoClinicoConMenosMascotas;

do
{
	tipoDeMascota = prompt("Ingrese que mascota tiene. (Gato, perro u otro)");
	tipoDeMascota = tipoDeMascota.toUpperCase();

	while(!(tipoDeMascota=="GATO" || tipoDeMascota=="PERRO"||tipoDeMascota=="OTRO"))
	{
		tipoDeMascota = prompt("Ingrese una opcion valida.");
		tipoDeMascota = tipoDeMascota.toUpperCase();
	}

	nombreDeMascota = prompt("Ingrese nombre de su mascota:");
	while(isNaN(nombreDeMascota)==false)
	{
		nombreDeMascota = prompt("Ingrese un nombre valido");
	}

	tipoDePelaje = prompt("Ingrese que tipo de pelaje tiene. (Corto, Largo, Pelado)");
	tipoDePelaje = tipoDePelaje.toUpperCase();
	while(!(tipoDePelaje=="CORTO"||tipoDePelaje=="LARGO"||tipoDePelaje=="PELADO"))
	{
		tipoDePelaje = prompt("Ingrese un tipo de pelaje valido.");
		tipoDePelaje = tipoDePelaje.toUpperCase();

	}

	edadDeMascota = parseInt(prompt("Ingrese edad de la mascota."));
	while(isNaN(edadDeMascota)==true || edadDeMascota<1)
	{
		edadDeMascota = parseInt(prompt("Ingrese edad valida:"));
	}

	razaDeMascota = prompt("Ingrese raza de su mascota:");
	while(isNaN(razaDeMascota)==false)
	{
		razaDeMascota = prompt("Ingrese raza valida");
	}
	

	pesoDeMascota = parseInt(prompt("Ingrese el peso de su mascota:"));
	while(isNaN(pesoDeMascota)==true || pesoDeMascota<1)
	{
		pesoDeMascota = parseInt(prompt("Ingrese un peso coherente"));
	}

	estadoClinico = prompt("Ingrese el estado clinico:");
	estadoClinico = estadoClinico.toUpperCase();
	while(!(estadoClinico=="ENFERMO"||estadoClinico=="INTERNADO"||estadoClinico=="ADOPCION"))
	{
		estadoClinico = prompt("Ingrese un estado valido:");
		estadoClinico = estadoClinico.toUpperCase();
	}

	temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal de su mascota:"));
	while(isNaN(temperaturaCorporal)==true || (temperaturaCorporal<30||temperaturaCorporal>100))
	{
		temperaturaCorporal = parseInt(prompt("Ingrese temperatura valida:"));
	}

	contadorMascotas++;

switch (tipoDeMascota) {
	case "PERRO":	
		contadorPerros++;
		if(flagPerroMasPesado==false || pesoDeMascota>perroMasPesado)
		{
			perroMasPesado = pesoDeMascota;
			flagPerroMasPesado=true;
		}
		acumTemperaturaPerros = acumTemperaturaPerros + temperaturaCorporal;
		promedioTemperaturaPerros = acumTemperaturaPerros/contadorPerros;
		break;
	case "GATO":
		contadorGatos++
		acumTemperaturaGatos = acumTemperaturaGatos + temperaturaCorporal;
		promedioTemperaturaGatos = acumTemperaturaGatos/contadorGatos;
		break;
	case "OTRO":
		contadorOtros++;
		nombreUltimamMascotaTipoOtraCosa = nombreDeMascota;
		acumTemperaturaOtros = acumTemperaturaOtros + temperaturaCorporal;
		promedioTemperaturaOtros = acumTemperaturaOtros/contadorOtros;
		break;
	default:
		break;
}

switch (tipoDePelaje) {
	case "PELADO":
		if(flagAnimalPelado==false || temperaturaCorporal<minimoTemperaturaDeAnimalPelado)
		{
			minimoTemperaturaDeAnimalPelado = temperaturaCorporal;
			flagAnimalPelado==true;
		}
		break;

	default:
		break;
}

if(promedioTemperaturaGatos>promedioTemperaturaPerros)
{
	if(promedioTemperaturaGatos>promedioTemperaturaOtro)
	{
		tipoMascotaConMayorPromedioDeTemperatura=promedioTemperaturaGatos;
	}
	else
	{
		tipoMascotaConMayorPromedioDeTemperatura =promedioTemperaturaOtro;
	}
}
else if(promedioTemperaturaPerros>promedioTemperaturaOtros)
{
	tipoMascotaConMayorPromedioDeTemperatura=promedioTemperaturaPerros;
}


switch (estadoClinico) {
	case "ENFERMO":
		mascotasEnfermas++;
		break;
	case "ADOPCION":
		mascotasAdopcion++;
		break;
	case "INTERNADO":
		mascotasInternadas++;
		break;
	default:
		break;
}

if(mascotasEnfermas<mascotasInternadas)
{
	if(mascotasEnfermas<mascotasAdopcion)
	{
		estadoClinicoConMenosMascotas = mascotasEnfermas;
		nombreEstadoClinicoConMenosMascotas = "Enfermas";
	}
	else
	{
		estadoClinicoConMenosMascotas = mascotasAdopcion;
		nombreEstadoClinicoConMenosMascotas = "Adopcion";
	}
}
else if(mascotasInternadas<mascotasAdopcion)
{
	estadoClinicoConMenosMascotas = mascotasInternadas;
	nombreEstadoClinicoConMenosMascotas = "Internadas";
}
acumPesoAnimales = acumPesoAnimales + pesoDeMascota;




	continuar = confirm("Quiere seguir ?");
}
while(continuar==true);

sumaGatosPerros=contadorGatos+contadorPerros;
porcentajeGatosPerrosDelTotal = (sumaGatosPerros/contadorMascotas)*100;
porcentajeEnfermosPorTotalDeMascotas = (mascotasEnfermas/contadorMascotas)*100;
promedioKilosAnimales = acumPesoAnimales/contadorMascotas;


document.write("El perro mas pesado pesa "+perroMasPesado);
document.write("El porcentaje de enfermos sobre el total de mascotas es "+porcentajeEnfermosPorTotalDeMascotas);
document.write("El nombre de la ultima mascota tipo Otro es: "+nombreUltimamMascotaTipoOtraCosa);
document.write("Temperatura del animal sin pelo con menor temperatura corporal: °"+minimoTemperaturaDeAnimalPelado);
document.write("El mayor promedio de temperatura entre las mascotas es: °"+tipoMascotaConMayorPromedioDeTemperatura);
document.write("Los gatos y perros son el "+porcentajeGatosPerrosDelTotal+"% del total de mascotas.");
document.write("El estado clinico con menor cantidad de mascotas: "+nombreEstadoClinicoConMenosMascotas+" con "+estadoClinicoConMenosMascotas);
document.write("El promedio de kilos entre todas las mascotas es: "+promedioKilosAnimales);

}