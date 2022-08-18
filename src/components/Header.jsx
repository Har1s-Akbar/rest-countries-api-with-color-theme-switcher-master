import React from 'react'
import {useEffect, useState, useRef} from 'react'
import {Card, Input, Menu} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

function Header() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  let uniqueCountries = [...new Set(countries.map((items)=> items.region))]
  const text = useRef();
  useEffect(()=> {
    const filter= countries?.map((item)=> {
      const newArr = countries?.filter((itm)=> itm.name.toLowerCase().includes(search.toLowerCase()))
      setCountries(newArr)
    })
    
  },[search, countries])

  const fetchcountry = async() =>{
    try{
      const res = await fetch('https://restcountries.com/v2/all')
    const data = await res.json();
    setCountries(data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchcountry()
  }, []);

  if(countries.length <= 0){
    return(
      <section>
        <h1>Loading....</h1>
      </section>
    )
  }
  return (
    <section className='bg-light-bg justify-center lg:grid lg:grid-cols-4 lg:py-20 h-full w-full dark:bg-dark-blue'>
      <section className='lg:col-span-4 m-auto lg:flex-row flex-col w-11/12 flex mb-20'>
        <Input size='large' ref={text} onChange= {((e)=> setSearch(e.target.value))} placeholder='Search for a Country...' className='lg:mr-[50rem] lg:w-1/6 w-9/12 mb-10 lg:mb-0 lg:mt-0 mt-5' prefix={<SearchOutlined />}/>
        <Menu className='w-1/2 dark:bg-dark-blue'>
          <Menu.SubMenu key='submenu' className='dark:text-dark-text' title='Filter by region' >
        {uniqueCountries.map((it, index)=> 
            <Menu.Item key={index}>
              <button>
                {it}
              </button>
            </Menu.Item>
        )}
          </Menu.SubMenu>
        </Menu>
      </section>
      {countries.map((items, index)=> 
      <section className='lg:w-8/12 w-9/12 m-auto my-2'>
        <Link to={items.alpha3Code} key={index}>
        <Card className=' h-7/12 dark:bg-dark-bg dark:border-dark-bg' bordered hoverable style={{margin:'auto', marginBottom: '2rem'}} cover={<img src={items.flag} alt={items.name}/>}>
        <h1 className='font-bold dark:text-dark-text'>{items.name}</h1>
        <div className='flex flex-col'>
          <p className='font-semibold h-2 dark:text-dark-text'>Population: <span className='font-normal'>{items.population}</span></p>
          <p className='font-semibold h-2 dark:text-dark-text'>Region: <span className='font-normal'>{items.region}</span></p>
          <p className='font-semibold h-2 dark:text-dark-text'>Capital: <span className='font-normal'>{items.capital}</span></p>
        </div>
      </Card>
        </Link>
      </section>
      )}
    </section>
  )
}

export default Header 