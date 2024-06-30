import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const options = [
        { value: "$", label: "$ Dollar" },
        { value: "£", label: "£ Pound" },
        { value: "€", label: "€ Euro" },
        { value: "₹", label: "₹ Rupee" },
    ];

    return (
        <select
            className="custom-select"
            id="currencySelect"
            value={currency}
            onChange={handleCurrencyChange}
            style={{ marginLeft: '2rem', backgroundColor: '#d1e7dd', color: 'black' }}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {currency === option.value ? `Currency: ${option.label}` : option.label}
                </option>
            ))}
        </select>
    );
};

export default CurrencySelector;
