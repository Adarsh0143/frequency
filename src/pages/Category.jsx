const GameCategory = ({ title, games }) => (
 
     <div className="game-category m-[30px] text-xl font-medium  ">
    <h2 className="game-category-title text-center text-3xl font-semibold underline">{title}</h2>
    <ul className="game-list">
      {games.map(game => (
        <li key={game.id} className="game-item p-[20px]">
          <a href={game.url} className="game-link">
            <img src={game.imageUrl} alt={game.name} className="game-image h-[180px] w-[200px] "/>
            <span className="game-name">{game.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
  
);

const games = [

  {
    id: 1,
    name: 'Cyberpunk',
    url: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/?snr=1_7_7_151_150_1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 2,
    name: 'GTA',
    url: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/?snr=1_7_7_151_150_1' ,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png'
  },
  {
    id: 3,
    name: 'RDR2',
    url: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/?snr=1_7_7_151_150_1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg'
  }
];

const Category = () => (
  <div className="game-catalog">
    <GameCategory title="Action Games" games={games.slice(0, 3)} />
    <hr /><br />
    <GameCategory title="RPG Games" games={games.slice(3, 6)} />
    <hr /><br />
    <GameCategory title="Strategy Games" games={games.slice(6, 9)} />
  </div>
);

export default Category;