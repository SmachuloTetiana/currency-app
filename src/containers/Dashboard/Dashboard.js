import React, { useState } from 'react';

import ProfitCurrency from '../../components/ProfitCurrency/ProfitCurrency';
import Instances from '../../components/Instances/Instances';
import FilterTable from '../../components/FilterTable/FilterTable';

const Dashboard = () => {
    const tableValues = [
        {
            buyExchange: 'HITBTC/IOTA-USD',
            buyPrice: 0.33063,
            sellExchange: 'BINANCE/IOTA-USD',
            sellPrice: 0.334,
            tradeAmount: 353.3,
            arbFree: '1.01%[0.15%]',
            expProfit: 1,
            expFees: 0.2,
            adj: null
        },
        {
            buyExchange: 'HITBTC/IOTA-USD',
            buyPrice: 65.50671,
            sellExchange: 'BINANCE/IOTA-USD',
            sellPrice: 69.57002,
            tradeAmount: 2.1449,
            arbFree: '0.27%[0.15%]',
            expProfit: 0.2,
            expFees: 0.2,
            adj: null
        },
        {
            buyExchange: 'HITBTC/IOTA-USD',
            buyPrice: 0.33063,
            sellExchange: 'BINANCE/IOTA-USD',
            sellPrice: 0.334,
            tradeAmount: 353.3,
            arbFree: '1.01%[0.15%]',
            expProfit: 1,
            expFees: 0.2,
            adj: null
        },
        {
            buyExchange: 'HITBTC/IOTA-USD',
            buyPrice: 65.50671,
            sellExchange: 'BINANCE/IOTA-USD',
            sellPrice: 69.57002,
            tradeAmount: 2.1449,
            arbFree: '0.27%[0.15%]',
            expProfit: 0.2,
            expFees: 0.2,
            adj: null
        },
        {
            buyExchange: 'HITBTC/IOTA-USD',
            buyPrice: 0.33063,
            sellExchange: 'BINANCE/IOTA-USD',
            sellPrice: 0.334,
            tradeAmount: 353.3,
            arbFree: '1.01%[0.15%]',
            expProfit: 1,
            expFees: 0.2,
            adj: null
        },
    ];

    const calculatePriceByCurrency = price => {
        switch(selectedOption.value) {
            case 'eur':
            return (price * 0.8).toFixed(2);
            case 'uah':
            return (price * 25).toFixed(2)
            default:
            return price.toFixed(2);
        }
    };
    
    const options = [
        {
            value: 'usd',
            label: 'usd'
        },
        {
            value: 'eur',
            label: 'eur'
        },
        {
            value: 'uah',
            label: 'uah'
        }
    ];

    
    const [selectedOption, setSelectedOption] = useState({
        value: options[0].value,
        label: options[0].label
    });

    const handleCurrencyChange = selectedOption => {
        setSelectedOption({
            value: selectedOption.value,
            label: selectedOption.label
        });
    }

    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <FilterTable tableValues={tableValues} calculatePriceByCurrency={calculatePriceByCurrency} />
                </div>

                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-12 pl-lg-0 mt-lg-0 mt-3">
                            <ProfitCurrency options={options} selectedOption={selectedOption} onChange={handleCurrencyChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pl-lg-0 mt-3">
                            <Instances selectedOption={selectedOption} tableValues={tableValues} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;