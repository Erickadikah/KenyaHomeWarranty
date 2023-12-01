import React from "react";

function createOptionGroupWithCoverage(plan) {
  const optionGroups = plan.map((group) => {
    const options = group.covarage
      .filter((coverageItem) => coverageItem[1] === true)
      .map((coverageItem) => coverageItem[0]);

    if (options.length > 0) {
      return (
        <optgroup key={group.title} label={group.title}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </optgroup>
      );
    }

    return null;
  });

  return optionGroups;
}

export default createOptionGroupWithCoverage;