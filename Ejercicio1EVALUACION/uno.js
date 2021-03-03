/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
function mostrar()
{
	var nombreDelProducto;
	var tipoDeProducto;
	var precioDelProducto;
	var cantidadDeUnidades;
	var tipoDeInflamable;
	var marcaDelProducto;
	var contadorAlcohol=0;
	var contadorIac=0;
	var contadorQuat=0;
	var acumCantidadAlcohol=0;
	var acumCantidadIac=0;
	var acumCantidadQuat=0;
	var promedioIac;
	var promedioAlcohol;
	var promedioQuat;
	var acumUnidadesCombustible=0;
	var acumUnidadesExplosivo=0;
	var acumUnidadesIgnifugo=0;
	var tipoDeInflamableConMasUnidades;
	var cantidaddUnidadesIacMenoresA200=0;
	var marcaProductoMasCaro;
	var tipoProductoMasCaro;
	var precioDelProductoMasCaro;
	var flagProductoMasCaro=false;

	for(var i = 0 ; i<3 ; i++)
	{
		/*nombreDelProducto = prompt("Ingrese nombre del producto:");
		while(isNaN(nombreDelProducto)==false)
		{
			nombreDelProducto = prompt("Ingrese nombre valido:");
		}*/

		tipoDeProducto = prompt("Ingrese tipo de producto: ALCOHOL, IAC o QUAT ");
		tipoDeProducto = tipoDeProducto.toUpperCase();
		while(!(tipoDeProducto=="ALCOHOL"||tipoDeProducto=="IAC"||tipoDeProducto=="QUAT"))
		{
			tipoDeProducto = prompt("Ingrese tipo de producto VALIDO: ALCOHOL, IAC o QUAT ");
			tipoDeProducto = tipoDeProducto.toUpperCase();
		}

		precioDelProducto = parseInt(prompt("Ingrese precio del producto:"));
		while(isNaN(precioDelProducto)==true || precioDelProducto<100 || precioDelProducto>300)
		{
			precioDelProducto = parseInt(prompt("Ingrese precio valido:"));
		}

		cantidadDeUnidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		while(isNaN(cantidadDeUnidades)==true || cantidadDeUnidades<1 || cantidadDeUnidades>1000)
		{
			cantidadDeUnidades = parseInt(prompt("Ingrese una cantidad valida:"));
		}

		tipoDeInflamable = prompt("Ingrese tipo de inflamable: Ignifugo, combustible, explosivo");
		tipoDeInflamable = tipoDeInflamable.toUpperCase();
		while(!(tipoDeInflamable=="IGNIFUGO"||tipoDeInflamable=="COMBUSTIBLE"||tipoDeInflamable=="EXPLOSIVO"))
		{
			tipoDeInflamable = prompt("Ingrese tipo de inflamable valido");
			tipoDeInflamable = tipoDeInflamable.toUpperCase();
		}

		marcaDelProducto=prompt("Ingrese marca del producto");
		while(isNaN(marcaDelProducto)==false)
		{
			marcaDelProducto=prompt("Ingrese marca valida");
		}


		switch (tipoDeProducto) {
			case "ALCOHOL":
				contadorAlcohol++;
				acumCantidadAlcohol = acumCantidadAlcohol+cantidadDeUnidades;
				break;
			case "IAC":
				contadorIac++;
				acumCantidadIac=acumCantidadIac+cantidadDeUnidades;
				if(precioDelProducto<=200)
				{
					cantidaddUnidadesIacMenoresA200 = cantidaddUnidadesIacMenoresA200 + cantidadDeUnidades;
				}
				break;
			case "QUAT":
				contadorQuat++;
				acumCantidadQuat=acumCantidadQuat+cantidadDeUnidades;
				break;
			default:
				break;
		}

		switch (tipoDeInflamable) {
			case "COMBUSTIBLE":
				acumUnidadesCombustible=acumUnidadesCombustible+cantidadDeUnidades;
				break;
			case "EXPLOSIVO":
				acumUnidadesExplosivo=acumUnidadesExplosivo+cantidadDeUnidades;
				break;
			case "IGNIFUGO":
				acumUnidadesIgnifugo=acumUnidadesIgnifugo+cantidadDeUnidades;
				break;
			default:
				break;
		}

		if(flagProductoMasCaro==false||precioDelProducto>precioDelProductoMasCaro)
			{
				precioDelProductoMasCaro=precioDelProducto;
				marcaProductoMasCaro=marcaDelProducto;
				tipoProductoMasCaro=tipoDeProducto;
				flagProductoMasCaro=true;
			}
	}


	if(acumUnidadesCombustible>acumUnidadesExplosivo)
	{
		if(acumUnidadesCombustible>acumUnidadesIgnifugo)
		{
			tipoDeInflamableConMasUnidades = acumUnidadesCombustible;	
			nombreDelTipoInflamableConMasUnidades = "Combustible";
		}
		else
		{
			tipoDeInflamableConMasUnidades = acumUnidadesIgnifugo;
			nombreDelTipoInflamableConMasUnidades = "Ignifugo";
		}
	}
	else if(acumUnidadesExplosivo>acumUnidadesIgnifugo)
	{
		tipoDeInflamableConMasUnidades=acumUnidadesExplosivo;
		nombreDelTipoInflamableConMasUnidades = "Explosivo";
	}

	promedioAlcohol=acumCantidadAlcohol/contadorAlcohol;
	if(isNaN(promedioAlcohol)==true)
	{
		promedioAlcohol=0;
	}
	promedioIac=acumCantidadIac/contadorIac;
	if(isNaN(promedioIac)==true)
	{
		promedioIac=0;
	}
	promedioQuat=acumCantidadQuat/contadorQuat;
	if(isNaN(promedioQuat)==true)
	{
		promedioQuat=0;
	}

	
	document.write("El promedio de alcohol por cantidad es: "+promedioAlcohol+"<br>");
	document.write("El promedio de IAC por cantidad es: "+promedioIac+"<br>");
	document.write("El promedio de QUAT por cantidad es: "+promedioQuat+"<br>");
	document.write("El tipo de inflamable con mas unidades en total de la compra es el "+nombreDelTipoInflamableConMasUnidades+" con:"+tipoDeInflamableConMasUnidades+"<br>");
	document.write("Las unidades de iac con precios menores a 201 fueron:"+cantidaddUnidadesIacMenoresA200+"<br>");
	document.write("El producto mas caro cuesta "+precioDelProductoMasCaro+" su marca es "+marcaProductoMasCaro+" y su tipo es "+tipoProductoMasCaro);


}