import { format } from 'date-fns';



function formatarDataEHorario(data) {
  return format(data, 'dd/MM/yy HH:mm:ss');
}

function formatarSomenteData(data){
    return format(data, 'dd/MM/yy');
}

function formatarSomenteHorario(data){
    return format(data, 'HH:mm:ss');
}

export {formatarDataEHorario, formatarSomenteData, formatarSomenteHorario}
