import React, { useState } from 'react';

interface DropdownProps {
    onChange: (ticker: string) => void;
    tickers: string[];
}

const TickerDropdown: React.FC<DropdownProps> = ({ onChange, tickers }) => {
    const [selected, setSelected] = useState(tickers[0]);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
        onChange(e.target.value);
    };

    return (
        <select className="p-2 border" value={selected} onChange={handleSelect}>
            {tickers.map((ticker) => (
                <option key={ticker} value={ticker}>
                    {ticker}
                </option>
            ))}
        </select>
    );
};

export default TickerDropdown;
