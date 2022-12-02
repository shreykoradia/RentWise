import React from 'react'
import { category } from '../../../constants'
import CheckBox from '../../Common/CheckBox/CheckBox'
import FilterListToggle from '../../Common/FilterListToggle/FilterListToggle'
import SliderTrack from '../../Common/Slider/SliderTrack'
import './filter.css'

const Filter = ({selectedCategory, selectToggle , locations , changeChecked , selectedPrice , changedPrice }) => {
  return (
    <div>
        {/* Category Filter Section here currently we have only 2 in Data Houses or Apartments(building) */}
        <div className='input-group'>
            <p className='label'>Category</p>
            <FilterListToggle options={category} value={selectedCategory} selectToggle={selectToggle} />
        </div>
        {/* Location Goes here  */}
        <div className="input-group">
            <p className='label'>Location</p>
            {locations.map((location) => (
        <CheckBox
          key={location.id}
          location={location}
          changeChecked={changeChecked}
        />
      ))}
        </div>
        {/* Price range goes here */}
        <div className="input-group">
        <p className='label-range'>Price Range</p>
        <SliderTrack value={selectedPrice} changedPrice={changedPrice}/>

        </div>

    </div>
  )
}

export default Filter