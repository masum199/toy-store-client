import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SportsCars from '../../Categories/SportsCars';
import Truck from '../../Categories/Truck';
import MonsterCars from '../../Categories/MonsterCars';


const TabPages = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports Cars");

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(categories)
  };

  const filteredCategories = categories.filter(categorie => categorie.categorie === activeTab);
  console.log(filteredCategories)

  return (
    <div className="flex my-20 justify-center">
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Toy Cars Category</h1>
          <p className="text-gray-600">Browse through different categories of toy cars.</p>
        </div>
        <Tabs>
          <TabList className="flex justify-center my-5 ">
     
            <Tab onClick={() => handleTabClick("Sports Cars")} className="btn btn-outline btn-primary">
              Sports Cars
            </Tab>
          
            <Tab onClick={() => handleTabClick("TRUCK")} className="btn btn-outline btn-secondary">
              TRUCK
            </Tab>
            <Tab onClick={() => handleTabClick("MONSTER CAR")} className="btn btn-outline btn-accent">
              MONSTER CAR
            </Tab>
          </TabList>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
              {filteredCategories.map(categorie => (
                <SportsCars
                  key={categorie._id}
                  categorie={categorie}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
              {filteredCategories.map(categorie => (
                <Truck
                  key={categorie._id}
                  categorie={categorie}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
              {filteredCategories.map(categorie => (
                <MonsterCars
                  key={categorie._id}
                  categorie={categorie}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabPages;