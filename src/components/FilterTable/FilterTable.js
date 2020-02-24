import React from 'react';

const FilterTable = ({ tableValues, calculatePrice }) => {
    return (
        <div className="toolbar bg-primary">
            <div className="toolbar__settings">
                <a href="#">Clear filter</a>

                <form className="d-flex flex-row">
                    <div className="form-group mr-2">
                        <label htmlFor="exchange">Buy advice exchange</label>
                        <input className="form-control" type="text" name="exchange" />
                    </div>

                    <div className="form-group mr-2">
                        <label htmlFor="currency">Buy advice currency</label>
                        <input className="form-control" type="text" name="currency" />
                    </div>

                    <div className="form-group mr-2">
                        <label htmlFor="currency">Buy advice currency</label>
                        <input className="form-control" type="text" name="currency" />
                    </div>

                    <div className="form-group mr-2">
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
                    {
                        tableValues.map((el, key) => (
                            <tr key={key}>
                                <td>{el.buyExchange}</td>
                                <td>{calculatePrice(el.buyPrice)}</td>
                                <td>{el.sellExchange}</td>
                                <td>{calculatePrice(el.sellPrice)}</td>
                                <td>{el.tradeAmount}</td>
                                <td>{el.arbFree}</td>
                                <td>{el.expPofit}</td>
                                <td>{el.expFees}</td>
                                <td>{el.adj}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FilterTable;