import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { FaStore } from 'react-icons/fa';
import { getcount } from '../../../features/admin/adminSlice';
import Spinner from '../../Common/Spinner/Spinner';
import Cards from './Cards';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, isError, message, getCount } = useSelector((state) => state.admin); 
  const dummyCards = [
    {
      icon: FiUsers,
      description: 'Completed Orders',
      backgroundColor: '#8BB7A2',
    },
    {
      icon: MdOutlineBusinessCenter,
      description: 'Pending Orders',
      backgroundColor: '#4D4E8D',
    },
    {
      icon: FaStore,
      description: 'Total Orders',
      backgroundColor: '#636C79',
    },
  ];

  useEffect(() => {
    const counts = dispatch(getcount());
    counts.then(response =>  setData(response?.payload) ).catch(e => {console.log(e)})
  
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }
  console.log(getCount);
  return (
    <div>
      <h1 className="dashboard-header-text">Dashboard</h1>
      <div className="dashboard_wrapper">
        <div className="card-container">
          {dummyCards.map((card, i) => {
            let stats;
            if (data && card.description === 'Completed Orders') {
              stats = data.completed;
            } else if (data && card.description === 'Pending Orders') {
              stats = data.pending;
            } else if (data && card.description === 'Total Orders') {
              stats = data.total;
            }

            return (
              <Cards
                key={i}
                icon={card.icon}
                stats={stats}
                description={card.description}
                backgroundColor={card.backgroundColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
