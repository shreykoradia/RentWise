import React , {useState ,useEffect} from 'react'
import Filter from '../../components/HomeComponent/FilterPanel/Filter'
import List from '../../components/HomeComponent/List/List'
import Search from '../../components/HomeComponent/SearchBarFilter/Search'
import { locationList , dataList } from '../../constants'
import Empty from '../../components/Common/Empty/Empty'
import DatePicker from "react-date-picker";


import  './styles.css'


const Home = () => {
    
    // hooks 
    const [selectedCategory, setselectedCategory] = useState(null);
    const [locations , setLocations] = useState([]);
    const [selectedPrice , setSelectedPrice] = useState([15000 , 50000]);
    const [startDate, OnChange] = useState(new Date());
    const [list, setList] = useState(dataList);
    const [inputSearch , setInputSearch] = useState('');
    const [resultFound,setResultFound] = useState(false);

    //  handleSelectCategory functionality
    const handleSelectCategory = (event , value)=> !value ? null : setselectedCategory(value)
       useEffect(()=>{
        setLocations(locationList)
    } , []);
    // handleChangedChecked Functionality
    const handleChangedChecked = (id)=>{
        const locationStateList = locations;
        const changeCheckedLocation = locationStateList.map((item)=>
        item.id === id ? {...item , checked: !item.checked} : item );
        setLocations(changeCheckedLocation)
    };
    // handleChangedPrice Functionality 
    const handleChangedPrice = (event , value) => setSelectedPrice(value);

    //For applying filters storing in Updated List

    let updatedList  = dataList;

    // applying Filter Functionality for List Component 

        const applyFilters = ()=>{
            
        // applying category filter
        if(selectedCategory){
            updatedList = updatedList.filter(
                (item) => item.category === selectedCategory
            );
        }
         // location filter (Checkbox)
         const locationChecked = locations
         .filter((item) => item.checked)
         .map((item)=>item.label.toLowerCase());
             if(locationChecked.length){
                 updatedList = updatedList.filter((item)=>
                 locationChecked.includes(item.location)) 
             }

        // price filter 
        const maxPrice = selectedPrice[1];
        const minPrice = selectedPrice[0];
        
        updatedList = updatedList.filter((item) => item.price >=minPrice &&item.price<=maxPrice)
             
         // applying Search Filters by Search Bar

         if (inputSearch) {
            updatedList = updatedList.filter(
              (item) =>
                item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
                -1
            );
          }

        // applying Date Filters
        // if(startDate){
        // updatedList = updatedList.filter( d => new Date(d.Date) - new Date() > 0)
        // }

        setList(updatedList);

        !updatedList.length ? setResultFound(false) : setResultFound(true); 
    };
        
    // useffect hook for calling the Filters 
    
           useEffect(()=>{
            applyFilters();
        } ,[selectedCategory,locations,selectedPrice,inputSearch]);

    return (
    <div className='home'> 
        {/* Search Bar Component goes here  */}
        <Search value={inputSearch} changeInput={e => setInputSearch(e.target.value)} />
        {/* Date Picker goes here */}
        <div>
        <p> MoveIn Date :</p>
        <DatePicker value={startDate} onChange={OnChange} />
        </div>
    <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
         {/* Filter Panel Goes here */}
        <Filter 
        selectToggle={handleSelectCategory} 
        selectedCategory = {selectedCategory} 
        locations={locations}
        changeChecked={handleChangedChecked}
        selectedPrice={selectedPrice}
        changedPrice = {handleChangedPrice}
        />        
    </div>
    <div className="home_list-wrap">
        {/* List Component goes here */}
        {resultFound ? <List  list={list}  /> : <Empty /> }
    </div>
    </div>
    </div>
  )
}

export default Home