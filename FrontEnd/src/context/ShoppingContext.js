import {createContext, useContext, useEffect, useLayoutEffect, useState} from 'react';

const ShoppingContext = createContext();

function getLocalUserData() {
    const raw = localStorage.getItem('userData');
    if (!raw || raw === 'undefined') return {};
    try {
        return JSON.parse(raw);
    } catch {
        return {};
    }
}

function getLocalProductData() {
    const raw = localStorage.getItem('productData');
    if (!raw || raw === 'undefined') return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function getLocalShippingFees() {
    const raw = localStorage.getItem('shippingFees');
    if (!raw || raw === 'undefined') return 6;
    const num = Number(raw);
    return isNaN(num) ? 6 : num;
}

export const ShoppingProvider = ({ children }) => {
    // let [search, setSearch] = useState('');
    // const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
    // const [accountData, setAccountData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
    // const [productData, setProductData] = useState(JSON.parse(localStorage.getItem('productData')) || []);
    // const [filteredProduct, setFilteredProduct] = useState([]);
    // const [shippingFees, setShippingFees] = useState(Number(localStorage.getItem('shippingFees')) || 6);
    // const [taxFees, setTaxFees] = useState(0.1);

    let [search, setSearch] = useState('');
    const [userData, setUserData] = useState(getLocalUserData());
    const [accountData, setAccountData] = useState(getLocalUserData());
    const [productData, setProductData] = useState(getLocalProductData());
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [shippingFees, setShippingFees] = useState(getLocalShippingFees());
    const [taxFees, setTaxFees] = useState(0.1);

    const api_url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${api_url}/log/get-user-data`, {
            method: 'GET',
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.status) setUserData(data.data);
            }).catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if(productData.length === 0){
            fetch(`${api_url}/product`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    if(data.status) setProductData(data.data);
                })
                .catch(err => console.log(err));
        }
    }, [search])

    useEffect(() => {
        let value = search.toLowerCase();
        // console.log(value);
        let filteredProductData = productData.filter(product =>
            product.product_name.toLowerCase().includes(value)
        );

        // console.log(filteredProductData);
        setFilteredProduct(filteredProductData);
    }, [search]);

    useLayoutEffect(() => {
        if(JSON.parse(localStorage.getItem('userData'))){
            setUserData(JSON.parse(localStorage.getItem('userData')));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    useEffect(() => {
        localStorage.setItem('productData', JSON.stringify(productData));
    }, [productData]);

    return (
        <ShoppingContext.Provider value={{ userData, setUserData, search, setSearch,
            productData: filteredProduct, setProductData, shippingFees, setShippingFees, taxFees, setTaxFees }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShoppingContext = () => useContext(ShoppingContext);