import { useState } from 'react';

export function useMenuState() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return [isOpen, toggleMenu];
}