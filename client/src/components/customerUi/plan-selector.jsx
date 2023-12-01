import React, {useState} from 'react';
import kifaruPlan from '../../controllers/kifaruDescriptor';
import nyatiPlan from '../../controllers/nyatiDescriptor';
import ndovuPlan from '../../controllers/ndovuDescriptor';
import PlanTree from '../shared/planTree';


export default function Planselector() {
  const btnStyle = {
    borderRadius: 0,
    margin: "5px"
  }
  const khwPlans = [
    [nyatiPlan, "Nyati"],
    [kifaruPlan, "Kifaru"] ,
    [ndovuPlan, "Ndovu"],
  ];
  const userId = window.location.href.split("=")[1];
  const [selectedPlan, setSelectedPlan] = useState({plan: khwPlans[0][0], planName: "Nyati"});


  const redirectUrl = `/checkout/?plan=${selectedPlan.planName}&user=${userId}`;

  function handlePlanChange (planIndex) {
    setSelectedPlan({plan: khwPlans[planIndex][0], planName: khwPlans[planIndex][1]});
  }


  return (
    <div>
        <nav className="navbar d-flex fixed-top">
            <h5 className="text-info-emphasis">
                <a href='/' rel='noopener' className='text-decoration-none text-info-emphasis'>KHW</a>
            </h5>
        </nav>
        <div className="container d-flex flex-wrap justify-content-end" style={{marginTop: "60px"}}>
            <div style={{marginTop: "8px"}}>
              <p>Click to view plan</p>
            </div>
            <div className="btn-group-sm">
              <button className="btn btn-primary" onClick={() => handlePlanChange(0)} style={btnStyle}>Nyati</button>
              <button className="btn btn-secondary"  onClick={() => handlePlanChange(1)}style={btnStyle}>Kifaru</button>
              <button className="btn btn-dark" onClick={() => handlePlanChange(2)} style={btnStyle}>Ndovu</button>
            </div>
        </div>
        {selectedPlan &&
          <div className="container bg-white shadow-sm" style={{padding: "10px", marginTop: "20px", paddingBottom: "50px"}}>
              <h1>{selectedPlan.planName}</h1>
              <div>
                <p className='text-secondary'>Click on the + icon to see plan features</p>
                <PlanTree plan={selectedPlan.plan} />
              </div>
              <button className="btn btn-primary" style={{display: "grid", margin: "10px auto"}}> <a href={redirectUrl} className="text-decoration-none text-white" rel='noopener'>Get Started</a> </button>
          </div>
        }
    </div>
  );
}
