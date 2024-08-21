import {useFetchHeroes} from "./useFetchHeroes";

interface Hero {
  id: number;
  name: string;
  available: boolean;
}

function HeroesList() {
  const { heroes, loading, error, setHeroes } = useFetchHeroes();

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-3xl">Heroes</h2>
      <div className="grid grid-cols-3 gap-10 p-40">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center">
            <svg viewBox="25 25 50 50">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          heroes.map((hero: Hero) => (
            <div
              key={hero.id}
              className="flex flex-row cursor-pointer border-2 rounded-xl p-4 w-72 hover:bg-slate-400/20"
              onClick={() => {
                setHeroes((prevHeroes) =>
                  prevHeroes.map((prevHero) =>
                    prevHero.id === hero.id ? { ...prevHero, available: !prevHero.available } : prevHero
                  )
                );
              }}
            >
              {hero.available ? (
                <h1 className="text-green-600">
                  {hero.id}. {hero.name} "Available"
                </h1>
              ) : (
                <h1 className="text-red-600">
                  {hero.id}. {hero.name}
                </h1>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default HeroesList;
