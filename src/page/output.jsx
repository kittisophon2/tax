import React from 'react'
import { useLocation } from 'react-router-dom'
const output = () => {
    const location = useLocation();
  const { FormData } = location.state;


  return (
    <div>
    <h1>Result</h1>
    <p>
      <strong>เงินได้ทั้งปี: {FormData.name} บาท</strong>
    </p>
    <p>
      <strong>ค่าใช้จ่าย: {FormData.job} บาท</strong>
    </p>
    <p>
      <strong>ค่าลดหย่อน: {FormData.salary} บาท</strong>
    </p>
    <p>
      <strong>เงินได้พึ่งประเมินสุทธิ: {FormData.salaryOfYear} บาท</strong>
    </p>
    <p>
      <strong>อัตราภาษี {FormData.taxRate} บาท</strong>
    </p>
    <p>
      <strong>ภาษีที่ต้องชำระ {FormData.salaryOfYear} บาท</strong>
    </p>
  </div>
  )
}

export default output