import React, { useState } from 'react';
import Select from 'react-select';

const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState({
        value: 'usd',
        label: 'usd'
    });

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

    const handleChange = selectedOption => {
        setSelectedOption({
            value: selectedOption.value,
            label: selectedOption.label
        });
    }

    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <div className="toolbar bg-primary">
                        <div className="toolbar__settings">
                            <a href="#">Clear filter</a>

                            <form className="d-flex flex-row">
                                <div className="form-group mr-3">
                                    <label htmlFor="exchange">Buy advice exchange</label>
                                    <input className="form-control" type="text" name="exchange" />
                                </div>

                                <div className="form-group mr-3">
                                    <label htmlFor="currency">Buy advice currency</label>
                                    <input className="form-control" type="text" name="currency" />
                                </div>

                                <div className="form-group mr-3">
                                    <label htmlFor="currency">Buy advice currency</label>
                                    <input className="form-control" type="text" name="currency" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="sell_currency">Sell advice currency</label>
                                    <input className="form-control" type="text" name="sell_currency" />
                                </div>

                                <div className="form-group ml-auto align-self-end">
                                    <button type="submit" className="btn btn-primary">Filter Arbitrage</button>
                                </div>
                            </form>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Buy exchange pair</th>
                                    <th>Buy price</th>
                                    <th>Sell exchange</th>
                                    <th>Sell price</th>
                                    <th>Trade amount</th>
                                    <th>Arb%[Free%]</th>
                                    <th>Exp.profit USD</th>
                                    <th>Exp.fees USD</th>
                                    <th>Adj.</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-12 pl-lg-0 mt-lg-0 mt-3">
                            <div className="bg-primary">
                                <h3 className="title">Dashboard profit currency</h3>

                                <div className="d-flex flex-row mt-4">
                                    <Select 
                                        options={options} 
                                        className="select"
                                        classNamePrefix="select"
                                        defaultValue={{value: selectedOption.value, label: selectedOption.label}} 
                                        onChange={handleChange} />

                                    <span>Selected currency will affect all prifit in dashboard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pl-lg-0 mt-3">
                            <div className="bg-primary instances-container">
                                <h3 className="title">Instances</h3>

                                <div className="row">
                                    <div className="col text-center instances-container__block">
                                        <h4 className="instances-container__title">Most profit instance</h4>
                                        <span>bts-{selectedOption.value}</span>
                                    </div>

                                    <div className="col text-center instances-container__block">
                                        <h4 className="instances-container__title">Active instance</h4>
                                        <span>7</span>
                                    </div>

                                    <div className="col text-center instances-container__block">
                                        <h4 className="instances-container__title">Total instance</h4>
                                        <span>8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;