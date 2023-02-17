import Slider from '@mui/material/Slider';
import {useState} from 'react'

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 10;
export default function Price() {
  const [value1, setValue1] = useState<number[]>([20, 37]);

    const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
    ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
      <div>
        <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
     </div>
  )
}
