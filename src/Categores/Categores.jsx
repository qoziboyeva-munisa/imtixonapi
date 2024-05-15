import axios from "axios"
import { useEffect, useState } from "react"

import "./Categores.css"
import { Modal, message } from "antd"
function Categores() {
    const [category, setcategory] = useState([])
    const [open,setOpen]=useState(false)
    const [name, setName]=useState('')
    const[description, setDescription]=useState('')
    const [id, setId]=useState('')
    const url = "https://api.dezinfeksiyatashkent.uz/api/categories"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzkwYzBiNzktMWFkNy00NGM1LWE5ODMtMzUzMzMzNjZmOGU5IiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTcxNTc4MTMwNCwiZXhwIjoxNzQ3MzE3MzA0fQ.QmSNa4xuD7Nk_O3wvq5w7QCJgGfh2nCtOPHtwbq275s"
        
   
    const getCategory=()=>{
        axios({
            url:url,
            method:"GET",
            
        }).then((res)=>{
            setcategory(res.data.data);
            // console.log(res.data.data);
        }).catch((err)=>{
            console.log(err);
        })

    }
    const postCategory=(e)=>{
        e.preventDefault();
        const id = document.getElementById("id").value
        const description = document.getElementById("description").value
        const name = document.getElementById("name").value
        
        const formData = new FormData();
        formData.append("name",name)
        formData.append("description",description)
        formData.append("id",id)
        const headers={
            'Authorization': `Bearer ${token}`    
        }
        axios({
            url:url,
            method:"POST",
            data:formData,
            headers:headers
        }).then((res)=>{
            message.success("yuborildi")
        }).catch((err)=>{
            message.error("xatolik")
            console.log(err);
        })
    }

    const editCategory =(e)=>{
        e.preventDefault();
            const id = document.getElementById('id').value ; 
            const description = document.getElementById('description').value; 
            const name = document.getElementById('name').value; 
       
        setOpen(false)
        const formData = new FormData();
        formData.append("id",id);
        formData.append("description",description);
        formData.append("name",name);
        
         const headers ={
          Authorization:`Bearer ${token}`
         }
         axios({
          url:`https://api.dezinfeksiyatashkent.uz/api/categories   /${id}`,
          method:"PUT",
          data:formData,
          headers:headers,
         }).then((res)=>{
          message.success("o'zgartirildi")
          console.log(res.data.data);
         }).catch((err)=>{
          message.error("xatolik")
          console.log(err);
         })
      }

    useEffect(()=>{
        getCategory()
    },[])

    const Modali=(item)=>{
        setOpen(true)
        setName(item.name)
        setDescription(item.description)
        setId(item.id)
    
      }
    return (
      <>
         <div className="container">
            {
                category && category.map((item,index)=>(
                    <div key={index}>
                      <table className="table">
                        <tr className="tr">
                            <th className="th">
                                ID
                            </th>
                            <th className="th">
                               Text
                            </th>
                            <th className="th">
                                Name
                            </th>
                            <th className="th">
                                author
                            </th>
                            <th className="th">
                               Harakat
                            </th>
                        </tr>
                        <tr className="tr">
                       
                            <td className="td">
                                {item.id}
                            </td>
                            <td className="td">
                                {item.description}
                            </td>
                            <td className="td">
                                {item.name}
                            </td>
                            <td className="td">
                                {/* <button>Edit</button> */}
                            </td>
                            <td className="td">
                                <button onClick={()=>Modali(item)} className="editbtn" >Edit</button>
                                <button className="deletbtn" type="submit">Delete</button>
                            </td>
                        </tr>
                      </table>
                      <Modal title="Taxrirlash" open={open} onOk={Modali} onCancel={Modali} footer={null}>

                    <form onSubmit={editCategory}>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                    <input type="text"  value={description} onChange={(e)=> setDescription(e.target.value)}/>
                    <input type="text" value={id} onChange={(e)=> setId(e.target.value)}/>
                    <button type='submit'>send</button>
                    </form>
       
      </Modal>  
                     
                    </div>
                ))
            }
             <form onSubmit={postCategory}  >
                            <input className="input" type="text" id='id' />
                            <input className="input" type="text" id='description' />
                            <input className="input" type="text" id='name' />
                            <button type='submit'>Yuborish</button>
                          </form >
         </div>
      </>
    )
  }
  
  export default Categores
  