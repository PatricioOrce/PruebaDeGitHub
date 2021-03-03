
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota*/ 
function mostrar()
{

  var nombreDelAlumno;
  var edadDelAlumno;
  var sexoDelAlumno;
  var tipoDeCursada;
  var cantidadDeMaterias;
  var notaPromedio;
  var nombreDelMejorPromedio;
  var mejorPromedio;
  var flagMejorPromedio=false;
  var seguir;
  var nombreDelMasJovenLibre;
  var edadDelMasJovenLibre;
  var flagMasJovenLibre=false;
  var promedioNotaNoBinario;
  var promedioNotaMasculino;
  var promedioNotaFemenino;
  var acumNotaNoBinario=0;
  var acumNotaMasculino=0;
  var acumNotaFemenino=0;
  var contadorNoBinario=0;
  var contadorMasculino=0;
  var contadorFemenino=0;
  var edadCursaMasMateriasRemota;
  var nombreCursaMasMateriasRemota;
  var flagCursaMasMaterias=false;


  do
  {
    nombreDelAlumno = prompt("Ingrese nombre del alumno:");
    while(isNaN(nombreDelAlumno)==false)
    {
      nombreDelAlumno = prompt("Ingrese nombre valido.");
    }

    edadDelAlumno = parseInt(prompt("Ingrese edad del alumno:"));
    while(isNaN(edadDelAlumno)==true || edadDelAlumno<17 || edadDelAlumno>60)
    {
      edadDelAlumno = parseInt(prompt("Ingrese edad valida"));
    }

    sexoDelAlumno=prompt("Ingrese sexo del alumno:(Femenino|Masculino|No_Binario)");
    sexoDelAlumno=sexoDelAlumno.toUpperCase();
    while(!(sexoDelAlumno=="FEMENINO"||sexoDelAlumno=="MASCULINO"||sexoDelAlumno=="NO BINARIO"))
    {
      sexoDelAlumno=prompt("Ingrese sexo valido.");
      sexoDelAlumno=sexoDelAlumno.toUpperCase();
    }

    tipoDeCursada=prompt("Ingrese tipo de cursada: (Presencial|Libre|Remota)");
    tipoDeCursada=tipoDeCursada.toUpperCase();
    while(!(tipoDeCursada=="PRESENCIAL"||tipoDeCursada=="LIBRE"||tipoDeCursada=="REMOTA"))
    {
      tipoDeCursada=prompt("Ingrese un tipo valido");
      tipoDeCursada=tipoDeCursada.toUpperCase();
    }

    cantidadDeMaterias=parseInt(prompt("Ingrese cantidad de materias."));
    while(isNaN(cantidadDeMaterias)==true || cantidadDeMaterias<1 || cantidadDeMaterias>8)
    {
      cantidadDeMaterias=parseInt(prompt("Ingrese cantidad valida."));
    }

    notaPromedio = parseInt(prompt("Ingrese nota promedio."));
    while(isNaN(notaPromedio)==true || notaPromedio<0 || notaPromedio>10)
    {
      notaPromedio = parseInt(prompt("Ingrese nota valida."));
    }

    switch (tipoDeCursada) 
    {
      case "LIBRE":
          if(flagMasJovenLibre==false || edadDelAlumno<edadDelMasJovenLibre)
          {
            edadDelMasJovenLibre = edadDelAlumno;
            nombreDelMasJovenLibre = nombreDelAlumno;
            flagMasJovenLibre=true;
          }
        break;
    
      default:
        break;
    }

    switch (sexoDelAlumno) {
      case "MASCULINO":
        contadorMasculino++;
        acumNotaMasculino=acumNotaMasculino+notaPromedio;
        if(flagMejorPromedio==false || notaPromedio>mejorPromedio)
      {
        mejorPromedio=notaPromedio;
        nombreDelMejorPromedio = nombreDelAlumno;
        flagMejorPromedio=true;
      }
        break;
      case "FEMENINO":
        contadorFemenino++;
        acumNotaFemenino=acumNotaFemenino+notaPromedio;
        break;
      case "NO BINARIO":
        contadorNoBinario++;
        acumNotaNoBinario=acumNotaNoBinario+notaPromedio;
        break;
    
      default:
        break;
    }

    if(tipoDeCursada!="REMOTA")
    {
      if(flagCursaMasMaterias==false || edadDelAlumno>edadCursaMasMateriasRemota)
      {
        edadCursaMasMateriasRemota = edadDelAlumno;
        nombreCursaMasMateriasRemota = nombreDelAlumno;
        flagCursaMasMaterias=true;
      }
    }


    seguir=confirm("Desea continuar?");
  }
  while(seguir==true);
  
  promedioNotaFemenino=acumNotaFemenino/contadorFemenino;
  if(isNaN(promedioNotaFemenino)==true)
  {
    promedioNotaFemenino=0;
  }
  promedioNotaMasculino=acumNotaMasculino/contadorMasculino;
  if(isNaN(promedioNotaMasculino)==true)
  {
    promedioNotaMasculino=0;
  }
  promedioNotaNoBinario=acumNotaNoBinario/contadorNoBinario;
  if(isNaN(promedioNotaNoBinario)==true)
  {
    promedioNotaNoBinario=0;
  }

  document.write("El nombre del mejor promedio(no masculino) es: "+nombreDelMejorPromedio+" con un promedio de: "+mejorPromedio+"<br>");
  document.write("El nombre del mas joven de los alumnos entre los que la dan libre es "+nombreDelMasJovenLibre+" y su edad es: "+edadDelMasJovenLibre+"<br>");
  document.write("El promedio de nota femenino es de: "+promedioNotaFemenino+"<br>");
  document.write("El promedio de nota masculino es de: "+promedioNotaMasculino+"<br>");
  document.write("El promedio de nota No Binario es de: "+promedioNotaNoBinario+"<br>");
  document.write("El mas joven de los que cursan de forma no remota es "+nombreCursaMasMateriasRemota+" y tiene "+edadCursaMasMateriasRemota);

}
