import React, { useState, useEffect } from "react";
import getData from "../../controllers/getData";
import nyatiPlan from "../../controllers/nyatiDescriptor";
import ndovuPlan from "../../controllers/ndovuDescriptor";
import kifaruPlan from "../../controllers/kifaruDescriptor";
import createOptionGroupWithCoverage from "./customerSubApps/get-covered-items";
import "../../assets/styles/customerUi/service-request-form.scss";

import axios from "axios";

export default function NewServiceRequestForm(props) {


  const khwPlans = {
    Nyati: nyatiPlan,
    Kifaru: kifaruPlan,
    Ndovu: ndovuPlan,
  };

  const [selectOptions, setSelectOptions] = useState([]);
  const [apiResponseMessage, setApiResponseMessage] = useState("");

  useEffect(() => {
    const userId = window.location.href.split("=")[1];
    getData(`https://backend-phki.onrender.com/plans/user/${userId}`)
      .then((res) => {
        //console.log(res);
        getData(`https://backend-phki.onrender.com/plans/${res.selectedPlan}`).then((res) => {
          const options = createOptionGroupWithCoverage(khwPlans[res.plan.name]);
         setSelectOptions(options);
        })
      }
    )
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const property = formData.get("property");
    const description = formData.get("description");
    const preferredDate = formData.get("preferred-date");
    const times =
      Array.from(formData.getAll("preferred-time"))[
        Array.from(formData.getAll("preferred-time")).length - 1
      ] || null;

    const imageFile = formData.get("image");

    const payLoad = {
      PropertyName: property,
      description: description,
      date: preferredDate,
      user: window.location.href.split("=")[1],
    };

    if (imageFile) {
      payLoad.image = imageFile;
    }

    try {
      const formDataPayload = new FormData();
      for (const key in payLoad) {
        formDataPayload.append(key, payLoad[key]);
      }

      axios
        .post("https://backend-phki.onrender.com/services", formDataPayload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (res) {
          setApiResponseMessage("Your Request Has Been Received");
          setTimeout(() => {
            setApiResponseMessage("");
          }, 3000);
        })
        .catch((err) => console.error(err))
        .finally(function () {
          event.target.reset();
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="request-form">
      {apiResponseMessage && (
        <div
          className="bg-primary text-white"
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            padding: "10px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          <p>{apiResponseMessage}</p>
        </div>
      )}
      <div className="bg-white shadow-sm" id="request-form">
        <div>
          <div>
            <h1 className="text-center">New service request</h1>
          </div>
        </div>
        <form
          role="form"
          name="request-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          action="https://backend-phki.onrender.com/services"
        >
          <div className="form-group">
            <label>Property Name</label>
            <select name="property" className="form-select form-control">
              {selectOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="request-description">Description</label>
            <textarea
              className="form-control"
              name="description"
              placeholder="Please describe the problem"
              id="request-description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="request-photo">Upload Photo(s)</label>
            <input
              className="form-control"
              name="image"
              id="image"
              type="file"
            />
          </div>
          <div className="form-group availability">
            <div>
              <label htmlFor="preferred-date">Preferred date</label>
              <input
                type="date"
                name="preferred-date"
                id="preferred-date"
                className="form-control"
              />
            </div>
            <div className="form-checkbox-group">
              <p className="form-text pref-time">Preferred time</p>
              <input
                type="checkbox"
                className="form-checkbox"
                id="time-1"
                name="preferred-time"
                value="8am-12pm"
              />
              <label htmlFor="time-1"> Between 8am - 12pm</label>
              <br />
              <input
                type="checkbox"
                className="form-checkbox"
                id="time-2"
                name="preferred-time"
                value="12pm-4pm"
              />
              <label htmlFor="time-2"> Between 12pm - 4pm</label>
              <br />
              <input
                type="checkbox"
                className="form-checkbox"
                id="time-3"
                name="preferred-time"
                value="4pm-8pm"
              />
              <label htmlFor="time-3"> Between 4pm - 8pm</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
