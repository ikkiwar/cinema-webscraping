export const dataFormater = (data) => {
  let dataFormat = [];

  data.forEach((cinema) => {
    let sucursal = cinema.sucursal;
    let movies = cinema.peliculas;
    movies.forEach((movie) => {
      dataFormat.push({
        cinema: sucursal === "MiCine" ? "Cinepolis Santa Ana" : sucursal,
        movie: movie.nombre,
        sala: movie.sala,
        hour: movie.hora,
        assistance: movie.asistencias,
      });
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
