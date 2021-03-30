export const dataFormater = (data) => {
  let dataFormat = [];

  data.forEach((movie) => {
    dataFormat.push({
      nombre: movie.nombre,
      sucursal:
        movie.sucursal === "MiCine" ? "Cinepolis Santa Ana" : movie.sucursal,
      fecha: movie.fecha,
      sala: movie.sala,
      hora: movie.hora,
      asistencias: movie.asistencias,
    });
  });

  return dataFormat;
};

export const ymdFormat = (date, lang = "es-ES") => {
  let year = new Date(date).toLocaleDateString(lang, {
    year: "numeric",
  });

  let month = new Date(date).toLocaleDateString(lang, {
    month: "numeric",
  });

  let day = new Date(date).toLocaleDateString(lang, {
    day: "2-digit",
  });

  let format = `${year}-${month > 9 ? month : 0 + month}-${day}`;

  return format;
};
