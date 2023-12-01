
import React , { useEffect , useState} from 'react';
import kifaruPlan from '../../controllers/kifaruDescriptor';
import nyatiPlan from '../../controllers/nyatiDescriptor';
import ndovuPlan from '../../controllers/ndovuDescriptor';
import Kifarubtn from '../plansManager/kifaru';
import Nyatibtn from '../plansManager/Nyati';
import Ndovubtn from '../plansManager/Ndovu';
import PlanTree from './planTree';
import axios from 'axios';

export default function PlanCheckoutPage() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const plans = {
        "Nyati" : [nyatiPlan, "Nyati", <Nyatibtn />],
        "Kifaru" : [kifaruPlan, "Kifaru", <Kifarubtn />],
        "Ndovu" : [ndovuPlan, "Ndovu", <Ndovubtn />],
    }
    const plan = plans[window.location.href.split("=")[1].split("&")[0]];
    console.log(plan)
    const userId = window.location.href.split("=")[2];
    console.log({userId})

    useEffect(() => {
        axios.get(`http://localhost:3055/users/${userId}` || `http://backend-phki.onrender.com/users/${userId}`)
        .then((res) => {
            console.log(res)
        })
    })
    // console.log({user})
    return (
        <div>
            <nav className='bg-light d-flex justify-content-center align-items-center' style={{height: "50px"}}>
                <h5 className="text-center">{plan[1]} Plan</h5>
            </nav>
            <div className="container">
                <h1 className='text-center'>Features and Coverage</h1>
                <div>{<PlanTree plan={plan[0]}/>}</div>
            </div>
            <div className='container d-flex justify-content-center gap-10'>
                {plan[2]}
            </div>
        </div>
    )
}
