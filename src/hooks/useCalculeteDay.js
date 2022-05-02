const useCalculeteDay = dt => {
  const date = () => {
    let a = new Date(dt * 1000);
    let months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = a.getDate();

    let time = day + ' ' + month + ' ' + year;
    return time;
  };
  const day = date();
  return {
    day,
  };
};

export default useCalculeteDay;
