// const total = parseFloat(sub1 || 0) + parseFloat(sub2 || 0) + parseFloat(sub3 || 0) + parseFloat(sub4 || 0) + parseFloat(sub5 || 0);
    // setTotal(total);

    // let min;
    // if(sub1 < sub2 && sub1 < sub3 && sub1 < sub4 && sub1 < sub5){
    //   min = sub1;
    // }else if(sub2 < sub3 && sub2 < sub4 && sub2 < sub5){
    //   min = sub2; 
    // }else if(sub3 < sub4 && sub3 < sub5){
    //   min = sub3; 
    // }else if(sub4 < sub5){
    //   min = sub4; 
    // }else{
    //   min = sub5;
    // }
    // setMinValue(min);

    // let max;
    // if(sub1 > sub2 && sub1 > sub3 && sub1 > sub4 && sub1 > sub5){
    //   max = sub1;
    // }else if(sub2 > sub3 && sub2 > sub4 && sub2 > sub5){
    //   max = sub2; 
    // }else if(sub3 > sub4 && sub3 > sub5){
    //   max = sub3; 
    // }else if(sub4 > sub5){
    //   max = sub4; 
    // }else{
    //   max = sub5;
    // }
    // setmaxValue(max);


    // ++++++++++++++++++++

    // import React, { useState } from 'react';

// const StudentResultForm = () => {
//   const [formData, setFormData] = useState({
//     rollNo: '',
//     name: '',
//     sub1: 0,
//     sub2: 0,
//     sub3: 0,
//     sub4: 0,
//     sub5: 0,
//   });

//   const [totalMarks, setTotalMarks] = useState(0);
//   const [averageMarks, setAverageMarks] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: name.startsWith('sub') ? parseFloat(value) : value,
//     });
//   };

//   const handleSubmit = () => {
//     // Calculate total and average marks
//     const total = formData.sub1 + formData.sub2 + formData.sub3 + formData.sub4 + formData.sub5;
//     const average = total / 5;

//     // Update state with calculated values
//     setTotalMarks(total);
//     setAverageMarks(average);

//     // Display results in console
//     console.log("Roll No:", formData.rollNo);
//     console.log("Name:", formData.name);
//     console.log("Subject 1:", formData.sub1);
//     console.log("Subject 2:", formData.sub2);
//     console.log("Subject 3:", formData.sub3);
//     console.log("Subject 4:", formData.sub4);
//     console.log("Subject 5:", formData.sub5);
//     console.log("Total Marks:", total);
//     console.log("Average Marks:", average);

//     // Example: Send data to a server
//     fetch('https://example.com/submit-result', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => console.log('Server Response:', data))
//       .catch(error => console.error('Error:', error));
//   };

//   return (
//     <div>
//       <h2>Student Result Form</h2>
//       <label>
//         Roll No:
//         <input type="text" name="rollNo" value={formData.rollNo} onChange={handleInputChange} />
//       </label>
//       <br />

//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//       </label>
//       <br />

//       {/* Repeat for sub1 to sub5 */}
//       {Array.from({ length: 5 }, (_, index) => (
//         <label key={`sub${index + 1}`}>
//           Subject {index + 1}:
//           <input
//             type="number"
//             name={`sub${index + 1}`}
//             value={formData[`sub${index + 1}`]}
//             onChange={handleInputChange}
//           />
//         </label>
//       ))}
//       <br />

//       <button onClick={handleSubmit}>Submit</button>

//       {/* Display results */}
//       <div>
//         <h3>Results</h3>
//         <p>Total Marks: {totalMarks}</p>
//         <p>Average Marks: {averageMarks}</p>
//       </div>
//     </div>
//   );
// };

// export default StudentResultForm;

// ==================
import './App.css';
import { useState } from 'react';

function App() {

  let [sub1, setsub1] = useState("");
  let [sub2, setsub2] = useState("");
  let [sub3, setsub3] = useState("");
  let [sub4, setsub4] = useState("");
  let [sub5, setsub5] = useState("");
  // let [total, setTotal] = useState(0);
  // let [per, setPer] = useState(0);
  // let [minValue, setMinValue] = useState(0);
  // let [maxValue, setmaxValue] = useState(0);
  // let [atkt, setAtkt] = useState(''); // ATKT status
  let [res, setres] = useState([]);
  // let [pass, setPass] = useState('');



  const btn = () => {

    var total, per = 0, min = 0, max = 0;
    // const sub1Val = parseFloat(sub1 || 0);
    // const sub2Val = parseFloat(sub2 || 0);
    // const sub3Val = parseFloat(sub3 || 0);
    // const sub4Val = parseFloat(sub4 || 0);
    // const sub5Val = parseFloat(sub5 || 0);

    // const total = sub1Val + sub2Val + sub3Val + sub4Val + sub5Val;
    total = parseFloat(sub1)+parseFloat(sub2)+parseFloat(sub3)+parseFloat(sub4)+parseFloat(sub5);

    // if (sub1Val >= 35 && sub2Val >= 35 && sub3Val >= 35 && sub4Val >= 35 && sub5Val >= 35) {
    //   per = (total / 500) * 100;
    // } else {
    //   per = 0;
    // }
    if (sub1 >= 35 && sub2 >= 35 && sub3 >= 35 && sub4 >= 35 && sub5 >= 35) {
      per = (total / 500) * 100;
    } else {
      per = 0;
    }

    // const min = Math.min(sub1Val, sub2Val, sub3Val, sub4Val, sub5Val);
    // setMinValue(min);

    // const max = Math.max(sub1Val, sub2Val, sub3Val, sub4Val, sub5Val);
    // setmaxValue(max);

    if (sub1 < sub2 && sub1 < sub3 && sub1 < sub4 && sub1 < sub5) {
      min = sub1;
    } else if (sub2 < sub3 && sub2 < sub4 && sub2 < sub5) {
      min = sub2;
    } else if (sub3 < sub4 && sub3 < sub5) {
      min = sub3;
    } else if (sub4 < sub5) {
      min = sub4;
    } else {
      min = sub5;
    }

    if (sub1 > sub2 && sub1 > sub3 && sub1 > sub4 && sub1 > sub5) {
      max = sub1;
    } else if (sub2 > sub3 && sub2 > sub4 && sub2 > sub5) {
      max = sub2;
    } else if (sub3 > sub4 && sub3 > sub5) {
      max = sub3;
    } else if (sub4 > sub5) {
      max = sub4;
    } else {
      max = sub5;
    }

    var cnt = 0, res = '';
    if (sub1 < 35) {
      cnt++;
    }
    if (sub2 < 35) {
      cnt++;
    }
    if (sub3 < 35) {
      cnt++;
    }
    if (sub4 < 35) {
      cnt++;
    }
    if (sub5 < 35) {
      cnt++;
    }
    if (cnt == 0) {
      res = "PASS"
    } else if (cnt == 1 || cnt == 2) {
      res = "ATKT";
    } else {
      res = "FAIL";
    }
    // setAtkt(res);


    const obj = {
      sub1: sub1,
      sub2: sub2,
      sub3: sub3,
      sub4: sub4,
      sub5: sub5,
      total: total,
      per: per,
      min: min,
      max: max

    }

    setres([...res, obj]);



  }

  return (
    <div className="App">

      RNO.<input type='text'></input><br></br>
      NAME:<input type='text'></input><br></br>

      SUB:1<input type='text' onChange={(e) => setsub1(e.target.value)}></input>
      SUB:2<input type='text' onChange={(e) => setsub2(e.target.value)}></input>
      SUB:3<input type='text' onChange={(e) => setsub3(e.target.value)}></input>
      SUB:4<input type='text' onChange={(e) => setsub4(e.target.value)}></input>
      SUB:5<input type='text' onChange={(e) => setsub5(e.target.value)}></input><br></br>
      <input type='button' value={"Click"} onClick={btn}></input><br></br>
      {/* <span>total:<span>{total}</span></span><br></br> */}
      {/* <span>percentage:<span>{per}</span></span><br></br> */}
      {/* <span>min:<span>{minValue}</span></span><br></br> */}
      {/* <span>max:<span>{maxValue}</span></span><br></br> */}
      {/* <span>Result:<span>{atkt}</span></span><br></br> */}

      <table border={1}>
        <thead>
          <tr>
            <th>RNO</th>
            <th>NAME</th>
            <th>SUB1</th>
            <th>SUB2</th>
            <th>SUB3</th>
            <th>SUB4</th>
            <th>SUB5</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Min</th>
            <th>Max</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {

            res.map((item, index) => (
              <tr key={index}>
                <td>{item.sub1}</td>
                <td>{item.sub2}</td>
                <td>{item.sub3}</td>
                <td>{item.sub4}</td>
                <td>{item.sub5}</td>
                <td>{item.total}</td>
                <td>{item.per}</td>
                </tr>
              
                ))

           }
        </tbody>
      </table>



    </div>
  );
}

export default App;




