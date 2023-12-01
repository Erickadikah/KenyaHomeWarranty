import React, {useState, useEffect} from 'react';
import ServiceTable from './recentRequestsTable';




function NoRequestsElement () {
  const userId = window.location.href.split('=')[1];
  return (
    <div className="recent-requests container d-flex justify-content-center align-items-center">
      <div>
        <p>You have no recent requests</p>
        <button
          className="btn btn-primary"
          style={{ display: 'grid', margin: '5px auto' }}
        >
          <a href={`/requestservice/?user=${userId}`} className="text-decoration-none text-white">
            Request Service
          </a>
        </button>
      </div>
    </div>
  );
}


export default function RecentRequests() {
  const [recentRequests, setRecentRequests] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = window.location.href.split('=')[1];
      try {
        const response = await fetch(`https://backend-phki.onrender.com/services/user/${userId}`);
        const data = await response.json();
        setRecentRequests(data.services);
        console.log(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchUserData(); // Call the fetchUserData function to get user data

  }, []);


  return (
    <div className="recent-requests" style={{paddingTop: 0}}>
      <div style={{paddingInline: "10px", marginTop: "-30px"}} className="d-flex justify-content-between">
          <div><h3>Recent Requests</h3></div>
          <div><span>view all</span></div>
      </div>
      {recentRequests &&
        (
          <div>
            {recentRequests.length > 0 ?
              <ServiceTable data={recentRequests} />
              :
              <NoRequestsElement />
            }
          </div>
        )
      }
      {!recentRequests &&
        <div style={{paddingInline: "10px", marginTop: "200px"}} className="d-flex justify-content-center">
            <div><p className='text-center'>Loading requests <span className="fade-element"><b>...</b></span></p></div>
        </div>
      }
    </div>
  );
}
