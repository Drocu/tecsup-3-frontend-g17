const card = () => {
  const getPokemon = async () => {
    const pokemonLocal = document.getElementById('pokemonLocal');
    const pokemonRemote = document.getElementById('pokemonRemote');

    const renderPokemon = (htmlElement, pokemon) => {
      const { id, name, sprites, stats, types } = pokemon;
      htmlElement.insertAdjacentHTML('beforeend', `
          <div class="pokemon__card">
          <header class="pokemon__header">
            <img src="./img/bg-pattern-card.svg" alt="Header card image" class="pokemon__header-image">
          </header>
          <section class="pokemon__body">
            <figure class="pokemon__body-image-container">
              <img src="${sprites.other['official-artwork'].front_default}"
                alt="${name}" class="pokemon__body-image" />
            </figure>
            <h2 class="pokemon__body-id">Id: ${id}</h2>
            <h1 class="pokemon__body-title">
              ${name}
            </h1>
            <p class="pokemon__body-types">${types.map(element => element.type.name).join(', ')}
            </p>
          </section>
          <footer class="pokemon__footer">
          ${stats.map((element, index) => {
        const { base_stat, stat } = element;
        return (
          `
            <div class="pokemon__footer-stats" data-key=${index}>
              <h3 class="pokemon__footer-stats-base">${base_stat}</h3>
              <p class="pokemon__footer-stats-name">${stat.name}</p>
            </div>
          `
        );
      }).join('')}
          </footer>
        </div>
      `);
    };

    

    try {
      const response = await fetch('https://elliotxleo.github.io/tecsup-frontend-o-g17/semana-7/1-apimones-card/json/data.json');
      const data = await response.json();
      renderPokemon(pokemonLocal, data);
    } catch (error) {
      console.log(error);
    }

    try {
      const { data } = await axios('https://pokeapi.co/api/v2/pokemon/30');
      renderPokemon(pokemonRemote, data);
    } catch (error) {
      console.log(error);
    }
  };

  getPokemon();
};

export default card;