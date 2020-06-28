export default function reducer(state,action) {
    console.log(action);
    switch(action.type){
      case "CONFI_LISTA_PAIS" : {
        return {...state, listaPais : action.payload};
      }
      case "CONFI_PAIS_POR_NOMBRE" : {
        let list
        if(state.filtrarPorRegion !== ""){
          list = state.filtrarPaisPorRegion
        }else{
          list = state.listaPais
        }
        const listaPaisPorNombre = list
        .filter(pais => pais.name.toLowerCase().includes(action.payload.toLowerCase()));
        return {...state, listaPaisPorNombre};
      }
      case "FILTRAR_POR_REGION" : {
        const {regionSeleccionada} = action.payload;
        if("" === regionSeleccionada){
          return {...state,filtrarPaisPorRegion : [], filtrarPorRegion : ""}
        }
        const filtrarPaisPorRegion = state.listaPais.filter((pais) => pais.region === regionSeleccionada);
        return {...state,filtrarPaisPorRegion,filtrarPorRegion : regionSeleccionada}
      }
      default: {
        return state;
      }
    }
  } 