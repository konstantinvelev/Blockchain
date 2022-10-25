import { useState, useEffect, useContext } from 'react';
import * as configService from '../services/configurations';
import predefinedConfig from '../config/defaultConfig.json';
import { ConfigContext } from '../contexts/configContext';

export function Configuration() {
    let [configuration, setConfiguration] = useState(null);
    let { setConfig } = useContext(ConfigContext);

    useEffect(() => {
        if (!configuration) {
            configService.getLastConfig()
                .then((data) => {
                    if (data != null && !data.message) {
                        setConfiguration(data);
                        setConfig(data);
                    }
                    else {
                        configService.insert(predefinedConfig)
                            .then((data) => {
                                setConfiguration(data);
                                setConfig(data);
                            });
                    }
                });
        }
    }, [])

    function applyConfiguration(e) {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let input = {
            chainId: formData.get('chainId'),
            from: formData.get('from'),
            gas: formData.get('gas'),
            gasPrice: formData.get('gasPrice'),
            hash: formData.get('hash'),
            input: formData.get('input'),
            nonce: formData.get('nonce'),
            r: formData.get('r'),
            s: formData.get('s'),
            to: formData.get('to'),
            transactionIndex: formData.get('transactionIndex'),
            type: formData.get('type'),
            v: formData.get('v'),
            value: formData.get('value'),
        };

        configService.insert(input)
            .then((data) => {
                setConfiguration(data);
                setConfig(data);
            });
    };

    return (
        <div>
            <div className="config">
                <h4>Configuration</h4>
                <form onSubmit={applyConfiguration}>
                    <div className="pairs">
                        <label>ChainId</label>
                        <input type='text' className='nasted-input' name='chainId' defaultValue={configuration?.chainId} />
                        <label>From</label>
                        <input type='text' className='nasted-input' name='from' defaultValue={configuration?.from} />
                        <label>To</label>
                        <input type='text' className='nasted-input' name='to' defaultValue={configuration?.to} />
                        <label>GasPrice</label>
                        <input type='text' className='nasted-input' name='gasPrice' defaultValue={configuration?.gasPrice} />
                        <label>Hash</label>
                        <input type='text' className='nasted-input' name='hash' defaultValue={configuration?.hash} />
                        <label>Input</label>
                        <input type='text' className='nasted-input' name='input' defaultValue={configuration?.input} />
                        <label>Nonce</label>
                        <input type='text' className='nasted-input' name='nonce' defaultValue={configuration?.nonce} />
                        <label>R</label>
                        <input type='text' className='nasted-input' name='r' defaultValue={configuration?.r} />
                        <label>S</label>
                        <input type='text' className='nasted-input' name='s' defaultValue={configuration?.s} />
                        <label>Gas</label>
                        <input type='text' className='nasted-input' name='gas' defaultValue={configuration?.gas} />
                        <label>TransactionIndex</label>
                        <input type='text' className='nasted-input' name='transactionIndex' defaultValue={configuration?.transactionIndex} />
                        <label>Type</label>
                        <input type='text' className='nasted-input' name='type' defaultValue={configuration?.type} />
                        <label>V</label>
                        <input type='text' className='nasted-input' name='v' defaultValue={configuration?.v} />
                        <label>Value</label>
                        <input type='text' className='nasted-input' name='value' defaultValue={configuration?.value} />

                    </div>
                    <button>Apply</button>
                </form>
            </div>
        </div>
    );
}