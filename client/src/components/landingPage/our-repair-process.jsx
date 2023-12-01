import React from "react";
import { repairProcess } from "./descriptions";

const CircularProgressBar = (props) => {
    const styles = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        paddingTop: "0",
        fontSize: "13px",
        marginRight: "15px",
        fontWeight: "bolder"
    }
    return (
        <div style={styles} className="d-flex align-items-center bg-white justify-content-center">
            <p className="text-secondary">Step {props.step}</p>
        </div>
    );
};







export default function RepairProgress() {
    const repair_process = repairProcess.map((process, index) => {
        const {key ,title ,icon ,decsription} = process;
        return (
            <div key={index} className="d-flex container" style={{zIndex: 99, margin: "0 auto", padding: '10px'}}>
               <div><CircularProgressBar step={index +  1} /></div>
               <div><p className="text-justify" style={{paddingTop: "1px", paddingLeft: '10px'}}>{decsription}</p></div>
            </div>
        )
    });
    return (
      <div className="d-flex flex-column" style={{width: "90%", margin: "10px  auto" , padding: 0}}>
        <div style={{position: "relative", left: "-32px"}} id="repair-process">{repair_process}</div>
      </div>
    );
  }


  