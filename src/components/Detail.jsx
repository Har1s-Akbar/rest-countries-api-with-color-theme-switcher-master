import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Detail() {
  const {alpha3Code} = useParams();
  const [detail, setDetail] = useState([])
  console.log(detail)
  const fetchdetail = async() =>{
    try{
    const res = await fetch(`https://restcountries.com/v2/alpha/${alpha3Code}`)
    const data = await res.json();
    setDetail(data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchdetail()
  }, []);
  
  if(detail.length <= 0){
    return(
      <section className='h-screen bg-light-bg'>
        <h1>
          Loading.....
        </h1>
      </section>
    )
  }
  return (
    <section className='bg-light-bg h-full lg:h-screen dark:bg-dark-blue'>
      <Link to='/'>
      <button className='border-2 border-dark-text px-7 m-10 lg:ml-32 font-semibold bg-dark-text btn rounded'>Back</button>
      </Link>
      <section className='lg:grid flex flex-col lg:justify-center lg:items-center lg:grid-cols-2  w-full'>
        <div className='lg:w-9/12 w-10/12 m-auto'>
        <img src={detail.flag} alt={detail.name} />
        </div>
        <div className='mx-10 lg:mx-0'>
          <h1 className='lg:text-4xl text-2xl my-3 lg:my-10 font-bold dark:text-dark-text'>{detail.name}</h1>
          <div className='lg:grid lg:grid-cols-2 my-5 lg:my-0'>
          <p className='font-semibold text-left dark:text-dark-text'>Native Name: <span className='font-normal'>{detail.nativeName}</span></p>
          <p className='font-semibold dark:text-dark-text'>Top Level Domain: <span className='font-normal'>{detail.topLevelDomain}</span></p>
          <p className='font-semibold dark:text-dark-text'>Population: <span className='font-normal'>{detail.population}</span></p>
          <p className='font-semibold dark:text-dark-text'>Currencies: <span className='font-normal'>{detail.currencies[0].name}</span></p>
          <p className='font-semibold mt-20 lg:my-0 dark:text-dark-text'>Region: <span className='font-normal'>{detail.region}</span></p>
          <p className='font-semibold dark:text-dark-text'>Languages: <span className='font-normal'>{detail.languages[0]?.name}</span></p>
          <p className='font-semibold dark:text-dark-text'>Sub Region: <span className='font-normal'>{detail.subregion}</span></p>
          <p className='font-semibold col-span-2 dark:text-dark-text'>capital: <span className='font-normal'>{detail.capital}</span></p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Detail