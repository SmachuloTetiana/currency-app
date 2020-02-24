import React from 'react';
import Select from 'react-select';

const ProfitCurrency = ({ options, selectedOption, onChange }) => {

    return (
        <div className="bg-primary">
            <h3 className="title">Dashboard profit currency</h3>

            <div className="d-flex flex-row mt-4">
                <Select 
                    options={options} 
                    className="select"
                    classNamePrefix="select"
                    defaultValue={{value: selectedOption.value, label: selectedOption.label}} 
                    onChange={onChange} />

                <span>Selected currency will affect all profit in dashboard</span>
            </div>
        </div>
    )
}

export default ProfitCurrency;