import React, { useState } from "react";
import SearchItems from "./components/SearchItems";
import Properties from "./properties/Properties";

const Homepage = () => {
  const rev = {range:'$0 - $2500', type: 'all'}
  const [gotPlace, setGotPlace] = useState(null)
  const [filter, setFilter] = useState(rev)
  const rangeMin = parseInt(filter?.range.split(" - ")[0].split('$')[1])
  const rangeMax = parseInt(filter?.range.split(" - ")[1].split('$')[1])
  const type = filter?.type
  const value = { rangeMin, rangeMax, type }

  console.log(value)
  const properties = [
    {
      "id": 1,
      "title": "Palm Harbor",
      "price": 1500,
      "img": "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "address": "269 Green Vallye Higland Lake, New York",
      "bedrooms": "2",
      "bathrooms": "2",
      "size": "5x7",
      "location": "New York, USA",
      "type": "Houses"
    },
    {
      "id": 2,
      "title": "Red Ridden",
      "price": 1200,
      "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "address": "234 Red Vallye Park",
      "bedrooms": "3",
      "bathrooms": "2",
      "size": "4x7",
      "location": "New York, USA",
      "type": "Apartment"
    },
    {
      "id": 3,
      "title": "Reek Shayer",
      "price": 800,
      "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "address": "439 Hi salt Rise, New York",
      "bedrooms": "3",
      "bathrooms": "2",
      "size": "5x8",
      "location": "New York, USA",
      "type": "Houses"
    },
    {
      "id": 4,
      "title": "Garden Hill",
      "price": 2100,
      "img": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "address": "34 Double Rose Garden, New York",
      "bedrooms": "3",
      "bathrooms": "1",
      "size": "5x7",
      "location": "New York, USA",
      "type": "Duplex"
    },
    {
      "id": 5,
      "title": "Swiss Teknik",
      "price": 800,
      "img": "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "address": "269 Green Vallye Higland Lake, California",
      "bedrooms": "2",
      "bathrooms": "1",
      "size": "4x6",
      "location": "California, USA",
      "type": "Houses"
    },
    {
      "id": 6,
      "title": "Slam Odor",
      "price": 1800,
      "img": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "address": "346 Deep Medicine Hill, California",
      "bedrooms": "4",
      "bathrooms": "2",
      "size": "5x7",
      "location": "California, USA",
      "type": "Houses"
    },
    {
      "id": 7,
      "title": "Green Palace",
      "price": 1050,
      "img": "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "address": "Deep valley park, California",
      "bedrooms": "2",
      "bathrooms": "1",
      "size": "5x6",
      "location": "California, USA",
      "type": "Apartment"
    },
    {
      "id": 8,
      "title": "Drycell Rocket",
      "price": 2150,
      "img": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "address": "Deep Circle Road, California",
      "bedrooms": "3",
      "bathrooms": "2",
      "size": "5x8",
      "location": "California, USA",
      "type": "Duplex"
    },
    {
      "id": 9,
      "title": "Dread Simon",
      "price": 700,
      "img": "https://www.glmproperty.com/wp-content/uploads/2019/01/glm-property-inmobiliaria-los-alcazares-propiedad-1.jpg",
      "address": "269 Green Vallye Higland Lake, Los Angeles",
      "bedrooms": "2",
      "bathrooms": "1",
      "size": "4x7",
      "location": "Los Angeles, USA",
      "type": "Houses"
    },
    {
      "id": 10,
      "title": "Yellow Sober",
      "price": 1300,
      "img": "http://gestalihome.com//media/images/news/o_1esiq1dis10vg1rjin051k641anlt.jpg",
      "address": "323 Green Peace Park, Los Angeles",
      "bedrooms": "3",
      "bathrooms": "2",
      "size": "5x7",
      "location": "Los Angeles, USA",
      "type": "Houses"
    },
    {
      "id": 11,
      "title": "Tantect Carbon",
      "price": 900,
      "img": "https://i.pinimg.com/736x/c6/78/f6/c678f681262b6fbefa80a2a00b2faa4b.jpg",
      "address": "828 Highteck Park Region, Los Angeles",
      "bedrooms": "3",
      "bathrooms": "2",
      "size": "5x7",
      "location": "Los Angeles, USA",
      "type": "Apartment"
    },
    {
      "id": 12,
      "title": "Tropical Regard",
      "price": 1900,
      "img": "https://coralhomes.com.au/wp-content/uploads/2020/10/Blog35.jpg",
      "address": "326 Slam road park, Los Angeles",
      "bedrooms": "3",
      "bathrooms": "2",
      "size": "5x7",
      "location": "Los Angeles, USA",
      "type": "Duplex"
    }
  ]
  return (
    <div>
      <SearchItems
        properties={properties}
        gotPlace={gotPlace}
        setGotPlace={setGotPlace}
        filter={filter}
        setFilter={setFilter}
      />
      <Properties properties={properties}
        gotPlace={gotPlace}
        value={value}
      />
    </div>
  );
};

export default Homepage;
