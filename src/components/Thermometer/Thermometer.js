import ReactSlider from "react-slider";
import './Thermometer.css';
import { ClimateContext, useClimate } from "../../context/ClimateContext";
import { useState, useEffect } from "react";

function Thermometer() {

  const { temperature, setTemperature } = useClimate(ClimateContext)
  const [desiredTemperature, setDesiredTemperature] = useState(temperature)

    useEffect(() => {
      const timeOutId = setTimeout(() => {

          if(temperature < desiredTemperature) {
          setDesiredTemperature(desiredTemperature  - 1)
          }if(temperature > desiredTemperature) {
            setDesiredTemperature(desiredTemperature + 1)
          }
      }, 1000)
      return () => { clearTimeout(timeOutId) }
    }, [temperature, desiredTemperature])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {desiredTemperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => { setTemperature(val) }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
