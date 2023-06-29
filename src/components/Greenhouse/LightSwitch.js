import './LightSwitch.css';
import { ThemeContext, useTheme } from '../../context/ThemeContext';

function LightSwitch() {

  const { themeName, setThemeName } = useTheme(ThemeContext);

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on"
      onClick={() => setThemeName('day')}>DAY</div>
      <div className="off"
      onClick={() => setThemeName('night')}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
