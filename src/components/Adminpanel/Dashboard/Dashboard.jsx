import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { FaStore } from 'react-icons/fa';
import { getcount } from '../../../features/admin/adminSlice';
import Spinner from '../../Common/Spinner/Spinner';
import Cards from './Cards';

const Dashboard = () => {
  const dispatch = useDispatch();
  const getCount = useSelector((state) => state.admin.getCount);
  const { isLoading, isError, message, getCount: countData } = getCount || {};

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
    dispatch(getcount())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  return (
    <div>
      <h1 className="dashboard-header-text">Dashboard</h1>
      <div className="dashboard_wrapper">
        <div className="card-container">
          {dummyCards.map((card, i) => {
            let stats;
            if (countData && card.description === 'Completed Orders') {
              stats = countData.completed;
            } else if (countData && card.description === 'Pending Orders') {
              stats = countData.pending;
            } else if (countData && card.description === 'Total Orders') {
              stats = countData.total;
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
