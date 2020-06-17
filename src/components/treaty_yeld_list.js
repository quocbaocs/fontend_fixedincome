import React from 'react'

function TreasuryYieldList(props) {

    return (
        <React.Fragment>
            {
                <div className="bond-list">
                <table className='table' width="1000" border='1'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>asset code</th>
                        <th>name</th>
                        <th>maturity</th>
                        <th>issuedate</th>
                        <th>couponrate</th>
                        <th>price</th>
                        <th>yeild</th>
                    </tr>
                    </thead>
                    <tbody>
                            {props.api.map(({ id, asset_code,name, maturity, issuedate,couponrate,price,yeild}) =>
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{asset_code}</td>
                            <td width='200'>{name}</td>
                            <td width='200'>{maturity}</td>
                            <td width='200'>{issuedate}</td>
                            <td>{couponrate}%</td>
                            <td>{price}</td>
                            <td>{yeild}</td>
                            
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
                
            }
        </React.Fragment>



    )
}

export default TreasuryYieldList;