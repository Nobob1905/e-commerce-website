import {Modal, Pagination} from "~/components/elements";
import styles from "./FavoriteItem.module.css";
import {FormatUSDCurrency} from "~/utils";

import clsx from "clsx";
import {Link} from "react-router-dom";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {useShoppingContext} from "~/context/ShoppingContext";
import {toast} from "react-toastify";

function FavoriteItem() {
    const itemsPerPage = 6;
    const api_url = process.env.REACT_APP_API_URL;
    const {userData} = useShoppingContext();
    const user_id = userData._id;

    const [currentProduct, setCurrentProduct] = useState({
        product_id: {
            product_name: ""
        }
    });
    const [data, setData] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const handlePageChange = useCallback((event) => {
        const newOffset = event.selected * itemsPerPage;
        setCurrentItems(data.slice(newOffset, newOffset + itemsPerPage));
    }, [data])

    useLayoutEffect(() => {
        setPageCount(Math.ceil(data.length / itemsPerPage));
        setCurrentItems(data.slice(0, itemsPerPage));
    }, [data]);

    useEffect(() => {
        fetch(`${api_url}/user/profile/wishlist?user_id=${user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) setData(data.data)
            })
            .catch(error => console.log(error))
    }, []);

    const handleRemoveProductInWishList = (item) => {
        fetch(`${api_url}/user/profile/wishlist/${item._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(dataServer => {
                console.log(dataServer);
                if(dataServer.status) {
                    let newData = [...data];

                    let filteredData = newData.filter(wish => wish._id !== item._id);
                    setData(filteredData);
                    toast.success(data.msg);
                } else{
                    toast.error(data.msg);
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h5 style={{fontWeight: "normal"}}>Favorite Item</h5>
            <ul className={clsx(styles['profile-favorite-list--inner'], 'd-flex flex-wrap p-0')}>
                {currentItems.map((item) => (
                    <li key={`wish-list-${item._id}`}
                        className={clsx(styles['profile-favorite-list__item'], `mix col-lg-4 col-md-6 col-sm-6 ${item.type}`)}>
                        <div className={clsx(styles['profile-favorite-list__item--inner'])}>
                            <div className={clsx(styles['profile-favorite-list__item-img--outer'])}>
                                <img className={clsx(styles['profile-favorite-list__item-img'])}
                                     src={`${item.product_id.product_img}`} alt=""/>
                                <ul className={clsx(styles['profile-favorite-list__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['profile-favorite-list__item-list--icon'])}>
                                        <Link className="text-dark" to={`/shop/details/${item.product_id._id}`}>
                                            <i className="fa-solid fa-eye"></i>
                                        </Link>
                                    </li>
                                    <li className={clsx(styles['profile-favorite-list__item-list--icon'])}>
                                        <Link data-bs-toggle='modal' data-bs-target='#remove-modal' onClick={() => setCurrentProduct(item)} className="text-dark">
                                            <i className="fa-solid fa-xmark"></i>
                                        </Link>
                                    </li>
                                    {/*<li className={clsx(styles['profile-favorite-list__item-list--icon'])}>*/}
                                    {/*    <Link to='/' className='text-dark'>*/}
                                    {/*        <i className="fa-solid fa-cart-shopping"></i>*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                            <div className="profile-favorite-list__item-info text-center mt-3">
                                <p className="mb-0 text-dark">{item.product_id.product_name}</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}><FormatUSDCurrency
                                    price={item.product_id.product_price}/></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>

            <Modal
                id='remove-modal'
                closeClassName='d-none'
                modalTypeClassName='modal-sm'
                modalBodyClassName='danger-bg__shop'
                modalFooterClassName="d-none"
                modalHeaderClassName="d-none"
            >
                <div className="remove-wishlist">
                    <div className="text-center">
                        <img width='200' src="/img/general/danger-zone.gif" alt=""/>
                    </div>
                    <p className='mb-0 text-center'>Are you sure to remove product "{currentProduct.product_id?.product_name || ''}" from wish list?</p>
                    <div className="text-center mt-2">
                        <button data-bs-dismiss="modal" onClick={() => handleRemoveProductInWishList(currentProduct)}
                                className="btn btn-successr">Remove
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default FavoriteItem;