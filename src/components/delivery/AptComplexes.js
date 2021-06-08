import React from 'react';

export default function AptComplexes() {
    return (

        <div className="dash-content">
            <div className="user-info-title">
                <h3>Apartments & Gated Communities</h3>
            </div>

            <div className="ul-list">
                <ul className="li-items">
                    <li>1521 Camellia Blvd</li>
                    <li>1000-1200 Robley Dr</li>
                    <li>115 Republic Ave</li>
                    <li>211 Republic Ave</li>
                    <li>115 Liberty Dr</li>
                    <li>201 Prescott Blvd</li>
                    <li>210 Polly Ln</li>
                    <li>2314 Kaliste Saloom Rd</li>
                    <li>*3601 Kaliste Saloom Rd</li>
                    <li>*101 Shallowford Dr</li>
                    
                </ul>
            </div>

            <div style={{textAlign: "center", color: "var(--d-red)", marginBottom: ".5rem"}}>
                * denotes an address that requires a gate code
            </div>
        </div>
    )
}
