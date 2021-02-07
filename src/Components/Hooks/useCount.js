import { useState } from 'react';

export function useCount() {
    const [count, setCount] = useState(1);

    const onChange = (evt) => setCount(evt.target.value);

    return { count, setCount, onChange };
}