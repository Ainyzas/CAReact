import { useState } from 'react';

export default function useFormInput(initial) {
  const [value, setValue] = useState(initial);

  function onChange(event) {
    setValue(event.target.value);
  }

  return { value, onChange };
}
