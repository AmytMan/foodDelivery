
import React, { useEffect ,useState } from 'react';


function FoodData() {
  const [foodData , setFooData] = useState([])
  const [categoryData , setCategoryData] = useState([])
 

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const url = "http://localhost:5000/api/foodData"
        const response = await fetch(url);
        const data = await response.json()
        setFooData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[]);
  useEffect(()=>{
    const fetchCategory = async()=>{
      try {
        const url = "http://localhost:5000/api/category"
        const response = await fetch(url);
        const data = await response.json()
        setCategoryData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategory()
  },[])
  return (
    <>
    <div>
    <div className='text-info w-50'>
      <input  value={search} type='text' placeholder='search...'onChange={(e)=>setSearch(e.target.value)}/>    
      </div>
    </div>
     <hr />
    {categoryData ?( categoryData.map((cat,index)=>{
      return(
        <div key={index}>
        <div >{cat.category} 
        <hr />
        </div>
        {foodData ? (foodData.filter((item)=>(item.CategoryName === cat.category)&&(item.name.toLowerCase().includes(search.toLowerCase()))).map((filtereditem, index)=>{
      return(
        <div key={index}>
        <Cards imgSrc= {filtereditem.img}
        foodName={filtereditem.name}
        CategoryName={filtereditem.CategoryName}
        Description={filtereditem.description}
        options = {filtereditem.options[0]}/>
        </div>
      )
    })) :(
      <div>Food LOADING ...</div>
    )
     }
        </div>
      )
    })):
    (<div>Category Loading...</div>)}
    
    
    </>
  );
  
}

export default FoodData;
