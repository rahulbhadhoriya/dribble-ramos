import Control from './Control';
import EfficiencySection from './EfficiencySection';
import GetStarted from './GetStarted';
import Headline from './Headline';
import IdeasSection from './IdeasSection';
import StatsSections from './StatsSections';

export default function Main() {
  return (
    <main className="mx-16 text-black">
      <Headline />
      <StatsSections />
      <EfficiencySection />
      <IdeasSection />
      <Control />
      <GetStarted />
    </main>
  );
}
