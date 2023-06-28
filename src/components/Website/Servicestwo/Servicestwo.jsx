import React, { useState } from 'react';

const packages = [
    { id: 1, name: 'Package 1', value: 10 },
    { id: 2, name: 'Package 2', value: 20 },
    { id: 3, name: 'Package 3', value: 30 },
    { id: 4, name: 'Package 4', value: 40 },
    { id: 5, name: 'Package 5', value: 50 },
    { id: 6, name: 'Package 6', value: 60 },
    { id: 7, name: 'Package 7', value: 70 },
    { id: 8, name: 'Package 8', value: 80 },
    { id: 9, name: 'Package 9', value: 90 },
    { id: 10, name: 'Package 10', value: 100 },
    // Add more packages as needed
  ];
const Servicestwo = () => {

    const [selectedPackages, setSelectedPackages] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
  
    const handleClick = (packageData) => {
      if (selectedPackages.some(packageItem => packageItem.id === packageData.id)) {
        // Unselect the package if it's already selected
        const updatedPackages = selectedPackages.filter(packageItem => packageItem.id !== packageData.id);
        setSelectedPackages(updatedPackages);
        recalculateTotalValue(updatedPackages);
      } else if (selectedPackages.length < 6) {
        // Select the package if it's not selected and the limit is not reached
        const updatedPackages = [...selectedPackages, packageData];
        setSelectedPackages(updatedPackages);
        recalculateTotalValue(updatedPackages);
      }
    };
  
    const recalculateTotalValue = (packages) => {
      const total = packages.reduce((acc, packageItem) => acc + packageItem.value, 0);
      setTotalValue(total);
    };
  
    const renderPackages = () => {
      return packages.map(packageData => {
        const isSelected = selectedPackages.some(packageItem => packageItem.id === packageData.id);
        return (
          <div
            key={packageData.id}
            onClick={() => handleClick(packageData)}
            className={isSelected ? 'selected' : ''}
          >
            {packageData.name}
          </div>
        );
      });
    };
    
  return (
    <div>
      {renderPackages()}

      <div>
        {/* This div will display the selected packages */}
        Selected Packages: {selectedPackages.map(packageItem => packageItem.name).join(', ')}
      </div>

      <div>
        {/* This div will display the total value of the selected packages */}
        Total Value: {totalValue}
      </div>
    </div>
  )
}

export default Servicestwo