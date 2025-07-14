import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { themeColor } from "../utils/color";

function Footer() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Header must be used within a ThemeContextProvider');
    }
    const { theme } = context;

    return (
        <div style={{ backgroundColor: themeColor[theme as keyof typeof themeColor].background, display: 'flex', borderTop: '1px solid rgba(0, 0, 0, 0.25)', justifyContent: 'space-between', marginTop: '15px' }}>
            <div>
                <div>
                    <h3 style={{ margin: ' 20px 0px 15px 35px', color: 'gray' }}>
                        Company
                    </h3>
                    <ul style={{ listStyle: 'none', fontSize: '15px', color: 'gray' }}>
                        <li>
                            Features
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Affiliate Program
                        </li>
                        <li>
                            Press Kit
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <h3 style={{ margin: ' 20px 0px 15px 35px', color: 'gray' }}>
                        Support
                    </h3>
                    <ul style={{ listStyle: 'none', fontSize: '15px', color: 'gray' }}>
                        <li>
                            Account
                        </li>
                        <li>
                            Help
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            Contact Support
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <h3 style={{ margin: ' 20px 0px 15px 35px', color: 'gray' }}>
                        Legals
                    </h3>
                    <ul style={{ listStyle: 'none', fontSize: '15px', color: 'gray' }}>
                        <li>

                            Terms &amp; Conditions

                        </li>
                        <li>

                            Privacy Policy

                        </li>
                        <li>
                            Affiliate Program
                        </li>
                        <li>
                            Licensing
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Footer