import React from 'react';

const Instances = ({ selectedOption, tableValues }) => {
    return (
        <div className="bg-primary instances-container">
            <h3 className="title">Instances</h3>

            <div className="row">
                <div className="col text-center instances-container__block">
                    <h4 className="instances-container__title">Most profit instance</h4>
                    <span>bts-{selectedOption.value}</span>
                </div>

                <div className="col text-center instances-container__block">
                    <h4 className="instances-container__title">Active instance</h4>
                    <span>{tableValues.length}</span>
                </div>

                <div className="col text-center instances-container__block">
                    <h4 className="instances-container__title">Total instance</h4>
                    <span>8</span>
                </div>
            </div>
        </div>
    )
}

export default Instances;