import React, { useEffect, useState } from "react";

const SumCalculator = () => {
  const [nums, setNums] = useState([]);
  const [sum, setSum] = useState(0);

  function handleInputChange(e) {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setNums((prev) => [...prev, val]);
    }
  }

  useEffect(() => {
    const total = nums.reduce((acc, ele) => acc + ele, 0);
    setSum(total);
  }, [nums]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleInputChange} />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
