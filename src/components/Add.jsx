import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  //const [count,setCount]=useState(0);
 // let valueAdd=()=>{
 //   setCount(count+1)
 // }
const[form,setForm]=useState(
{
  Moviename:'',
  Category:'',
  Director:'',
  Year:'',
  Rating:'',
  Poster:''
}
)
function valueAdd(){console.log(form)}
function valueCap(e){
setForm({...form,[e.target.name]:e.target.value})
}
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Moviename" variant="outlined" name="Moviename"onChange={valueCap} />
    <TextField id="filled-basic" label="Category" variant="outlined"name="Category" onChange={valueCap}/>
    <TextField id="standard-basic" label="Director" variant="outlined"name="Director" onChange={valueCap}/>
    <TextField id="standard-basic" label="Year" variant="outlined" name="Year"onChange={valueCap}/>
    <TextField id="standard-basic" label="Rating" variant="outlined" name="Rating"onChange={valueCap}/>
    <TextField id="standard-basic" label="Poster" variant="outlined" name="Poster"onChange={valueCap}/>
    <Button variant="outlined"color='success' onClick={valueAdd}>Done</Button><br />
    {/* <small>count is {count}</small> */}

  </Box>
  )
}

export default Add