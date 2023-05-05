import './styles.css';
import { useState } from 'react';

export default function App() {
  const [myApp, setMyApp] = useState('text');

  const handleChange = (event) => {
    setMyApp(event.target.value);
  };
  return (
    <>
      <h1>Me dead inside, y'all! ;D</h1>
      <img
        data-test-id="meme-image"
        src="https://api.memegen.link/images/cryingfloor.png"
        width="666px"
        alt=""
      />
      <h1>It's okay tho. I love the struggle! :P</h1>

      <form>
        <select value={myApp} onChange={handleChange}>
          <option value="Alive">Alive</option>
          <option value="Asleep">Asleep</option>
          <option value="Gone Deep">Gone Deep</option>
        </select>
      </form>
      <br />
      <br />
      <form>
        <input value="text" name="Meme" />
      </form>
      <br />
      <br />
      <form>
        <button>
          <span>
            <b>Press me button, right here! :3</b>
          </span>
        </button>
      </form>
    </>
  );
}
