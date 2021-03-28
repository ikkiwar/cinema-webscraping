export const dataFormater = (data) => {
  let dataFormat = [];

  data.forEach((cinema) => {
    let sucursal = cinema.sucursal;
    let movies = cinema.peliculas;
    movies.forEach((movie) => {
      dataFormat.push({
        cinema: sucursal,
        movie: movie.nombre,
        sala: movie.sala,
        hour: movie.hora,
        assistance: movie.asistencias,
      });
    });
  });
  return dataFormat;
};
