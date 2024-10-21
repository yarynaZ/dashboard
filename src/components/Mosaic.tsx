import React, { useState } from 'react';
import {Mosaic, MosaicWindow, MosaicNode, MosaicBranch} from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import CompanyInfoWidget from './CompanyInfoWidget';
import TickerDropdown from './TickerDropdown';

const MosaicLayout: React.FC = () => {
    const [selectedTicker, setSelectedTicker] = useState<string>('AAPL'); // Default ticker

    // List of tickers for the dropdown (based on the provided data)
    const tickers = ['AAPL', 'NVDA', 'TSLA', 'MSFT', 'AMZN', 'GOOGL', 'TSM'];

    const handleTickerChange = (ticker: string) => {
        setSelectedTicker(ticker);
    };

    const initialNodes: MosaicNode<string> = {
        direction: 'row',
        first: 'company1',
        second: {
            direction: 'column',
            first: 'company2',
            second: 'company3',
        },
    };

    return (
        <div className="p-4">
            <div className="mb-4 flex justify-center sm:justify-start">
                <TickerDropdown onChange={handleTickerChange} tickers={tickers}/>
            </div>
            <Mosaic<string>
                renderTile={(id: string) => {
                    // @ts-ignore
                    const path: MosaicBranch[] = [id];
                    return (
                        <MosaicWindow<string> title={`Company Information - ${selectedTicker}`} path={path}>
                            <CompanyInfoWidget ticker={selectedTicker}/>
                        </MosaicWindow>
                    )
                }}
                initialValue={initialNodes}
                className="h-full"
            />
        </div>
    );
};

export default MosaicLayout;
