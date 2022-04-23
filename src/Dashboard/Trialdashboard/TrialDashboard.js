import React from 'react';
import NewPackage from '../AddNewpackage/NewPackage';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import ManageAllOrders from '../ManageOrder/ManageAllOrders';
import MyOrder from '../ManageOrder/MyOrder';
import Payment from '../Payment/Payment';
import Rating from '../Rating/Rating';

const TrialDashboard = () => {
    return (
        <div>
            <MakeAdmin />
            <ManageAllProduct />
            <NewPackage />
            <ManageAllOrders />
            <MyOrder />
            <Rating />
            <Payment/>
        </div>
    );
};

export default TrialDashboard;