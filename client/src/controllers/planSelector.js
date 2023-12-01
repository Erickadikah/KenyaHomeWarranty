import axios from "axios";
const selectPlan = async (individualPlanId, userId) => {
    try {
      const response = await axios.post(`https://backend-phki.onrender.com/plans/${individualPlanId}/${userId}/select`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
};

export default selectPlan;
