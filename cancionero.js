function ordenarLista(listaCanciones){
    //Obtenemos el elemento ul
    let ul = document.getElementById(listaCanciones);    
    //Obtenemos la lista de li
    let lista = ul.getElementsByTagName("li");
    //Creamos el array a partir de los elementos li
    //A continuación ordenamos con sort (hay que ordenar mirando el textContent y evitando la etiqueta li
    //Por último recorremos el array ya ordenado y vamos haciendo el append en el elemento ul (sobrescribiéndolo)
    let arrayCanciones = Array.from(lista);
    arrayCanciones.sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => ul.appendChild(li));
   
}

ordenarLista("listaCanciones");