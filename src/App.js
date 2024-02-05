import './App.css';
import { useState } from 'react';

function App() {

  let [roll_No, setroll_no] = useState("");
  let [name, setname] = useState("");
  let [sub1, setsub1] = useState("");
  let [sub2, setsub2] = useState("");
  let [sub3, setsub3] = useState("");
  let [sub4, setsub4] = useState("");
  let [sub5, setsub5] = useState("");
  let [res, setres] = useState([]);
  let [reset, setreset] = useState([]);



  const btn = () => {

    var total, per = 0, min = 0, max = 0;

    total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5);

    if (sub1 >= 35 && sub2 >= 35 && sub3 >= 35 && sub4 >= 35 && sub5 >= 35) {
      per = (total / 5).toFixed(2);
    } else {
      per = 0;
    }

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

    var cnt = 0, result = '';
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
      result = "PASS"
    } else if (cnt == 1 || cnt == 2) {
      result = "ATKT";
    } else {
      result = "FAIL";
    }

    const obj = {
      roll_No: roll_No,
      name: name,
      sub1: sub1,
      sub2: sub2,
      sub3: sub3,
      sub4: sub4,
      sub5: sub5,
      total: total,
      per: per,
      min: min,
      max: max,
      result: result
    }
    setres([...res, obj]);
    setreset([...reset, obj]);
    setroll_no("");
    setname("");
    setsub1("");
    setsub2("");
    setsub3("");
    setsub4("");
    setsub5("");

  }
  const selectper = (e) => {
    // alert(e.target.value);
    const demo = reset.filter((item, index) => {
      return item.per >= parseFloat(e.target.value);
    })
    setres(demo);
  }

  const selectres = (e) => {
    // alert(e.target.value);
    const demo1 = reset.filter((item, index) => {
      return item.result == (e.target.value);
    })
    setres(demo1);
  }

  const btnall = () => {
    // alert();
    setres([...reset]);
  }

  const btnsort = () => {
    const demo2 =([...reset]);
    demo2.sort((a,b)=>b.per - a.per);
    setres(demo2);
  }



  return (
    <div>
      <p className='title'>🖤STUDENT Result...!</p>
      <div className="App">

        R_NO.<input type='number' value={roll_No} onChange={(e) => setroll_no(e.target.value)} className='input'></input><br></br>
        NAME<input type='text' value={name} onChange={(e) => setname(e.target.value)} className='input'></input><br></br>

        SUB:1<input type='number' value={sub1} onChange={(e) => setsub1(e.target.value)} className='input'></input><br></br>
        SUB:2<input type='number' value={sub2} onChange={(e) => setsub2(e.target.value)} className='input'></input><br></br>
        SUB:3<input type='number' value={sub3} onChange={(e) => setsub3(e.target.value)} className='input'></input><br></br>
        SUB:4<input type='number' value={sub4} onChange={(e) => setsub4(e.target.value)} className='input'></input><br></br>
        SUB:5<input type='number' value={sub5} onChange={(e) => setsub5(e.target.value)} className='input'></input><br></br>
        <input type='button' value={"Click"} onClick={btn} className='btn'></input><br></br>

        <select onChange={selectper} className='all1'>
          <option disabled>Percentage</option>
          <option value={"90"}>90+ Percentage</option>
          <option value={"80"}>80+ Percentage</option>
          <option value={"70"}>70+ Percentage</option>
          <option value={"60"}>60+ Percentage</option>
          <option value={"50"}>50+ Percentage</option>
          <option value={"33"}>33+ Percentage</option>
          <option value={"0"}>0+ Percentage</option>
        </select>

        <select onChange={selectres} className='all1'>
          <option disabled>RESULT</option>
          <option value={"PASS"}>PASS</option>
          <option value={"FAIL"}>FAIL</option>
          <option value={"ATKT"}>ATKT</option>
        </select>

        <input type='button' value={"ALL"} onClick={btnall} className='all'></input>
        <input type='button' value={"SORTALL"} onClick={btnsort} className='all'></input>


        <table border={1} className='table'>
          <thead>
            <tr>
              <th className='head'>RNO</th>
              <th className='head'>NAME</th>
              <th className='head'>SUB1</th>
              <th className='head'>SUB2</th>
              <th className='head'>SUB3</th>
              <th className='head'>SUB4</th>
              <th className='head'>SUB5</th>
              <th className='head'>Total</th>
              <th className='head'>Percentage</th>
              <th className='head'>Min</th>
              <th className='head'>Max</th>
              <th className='head'>Result</th>
            </tr>
          </thead>
          <tbody>
            {
              res.map((item, index) => (
                // <tr key={index} style={{ backgroundColor: getBackgroundColor(item.result) }}>
                <tr key={index} style={{ backgroundColor: item.result === "PASS" ? 'green':item.result === "ATKT" ? 'blue' : 'red'}}>
                  <td className='head'>{item.roll_No}</td>
                  <td className='head'>{item.name}</td>
                  <td className='head'>{item.sub1}</td>
                  <td className='head'>{item.sub2}</td>
                  <td className='head'>{item.sub3}</td>
                  <td className='head'>{item.sub4}</td>
                  <td className='head'>{item.sub5}</td>
                  <td className='head'>{item.total}</td>
                  <td className='head'>{item.per}</td>
                  <td className='head'>{item.min}</td>
                  <td className='head'>{item.max}</td>
                  <td className='head'>{item.result}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );

  // function getBackgroundColor(result) {
  //   switch (result) {
  //     case "PASS":
  //       return "green";
  //     case "ATKT":
  //       return "blue";
  //     case "FAIL":
  //       return "red";
  //     default:
  //       return "";
  //   }
  // }
}

export default App;




