import React, { useEffect ,useState} from 'react'
import './Home.css'
import Chart from '../../components/Charts/Chart'
import MainCharts from '../../components/Charts/MainCharts'
import TableComponent from '../../components/Tables/TableComponent'

const Home = () => {

  const [userData, setUserData] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/users');
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    fetchUsers();
  }, []);
  
  return (
      <div className='dashboard-home-container'>
          <div className='grid-area-home1 card-container padding'>
              <h2>home component Sales</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eveniet fugit neque vero quo consequuntur maiores delectus deserunt est? Assumenda.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
          </div>
          <div className='grid-area-home2 card-container padding'>
              <h2>home component Sales</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eveniet fugit neque vero quo consequuntur maiores delectus deserunt est? Assumenda.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
          </div>
          <div className='grid-area-home3 card-container padding'><MainCharts/></div>
          <div className='grid-area-home4 card-container padding'>
              <h2>Customer List</h2>
              <TableComponent data={userData && userData} />
          </div>
          <div className='grid-area-home5 card-container padding'><Chart/></div>
          <div className='grid-area-home6 card-container padding'>
                <h2>home component Sales</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eveniet fugit neque vero quo consequuntur maiores delect
                </p>
          </div>
    </div>
  )
}

export default Home