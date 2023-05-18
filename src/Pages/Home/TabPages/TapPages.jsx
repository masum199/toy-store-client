import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const TabPages = () => {
  return (
    <div className="flex my-20 justify-center">
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Toy Cars Category</h1>
          <p className="text-gray-600">Browse through different categories of toy cars.</p>
        </div>
        <Tabs>
        <TabList className="flex my-5">
            <Tab className=" btn btn-outline btn-primary">
              Category 1
            </Tab>
            <Tab className=" btn btn-outline btn-secondary">
              Category 2
            </Tab>
            <Tab className=" btn  btn-outline btn-accent">
              Category 3
            </Tab>
          </TabList>

          <TabPanel>
            <h2>Content for Category 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content for Category 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content for Category 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabPages;
