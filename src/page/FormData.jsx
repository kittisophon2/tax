import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const formData = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <>
    <h1>Fill in information</h1>
      <form onSubmit={submitForm}>
        <p>
          <label>เงินเดือน:</label>
          <input type="text" name="salary" onChange={handleChange} />
        </p>
        <p>
          <label>โบนัส:</label>
          <input type="text" name="bonus" onChange={handleChange} />
        </p>
        <p>
          <label>ประกันสังคมต่อเดือน:</label>
          <input type="text" name="social" onChange={handleChange} />
        </p>
        <p>
          <label>จำนวนบุตร</label>
          <input type="text" name="child"  onChange={handleChange} />
        </p>
        <p>
          <label>ค่าเบี้ยประกันชีวิต</label>
          <input type="text" name="insurance"  onChange={handleChange} />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default formData