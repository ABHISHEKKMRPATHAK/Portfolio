async function logMovies() {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const movies = await response.json();
    console.log(movies);
  }