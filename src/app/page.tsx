import Banner from './Components/Banner/Banner';
import GreatestOutdoors from './Components/Banner/GreatestOutdoors';
import Explore from './Components/Explore/Explore';
import LiveWhere from './Components/LiveWhere/LiveWhere';

export default function Home() {
  return (
    <main>
      <Banner />
      <Explore />
      <LiveWhere />
      <GreatestOutdoors />
    </main>
  );
}
