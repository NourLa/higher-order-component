import React from 'react';

const List = props => {
const {movies} =props;
if (!movies) return null;
if (!movies.length) return (<p>No movies, sorry</p>)
return(
<div className="movie-video">
{movies.map((item,index) => 
                <div className="movies-details" key={item.id} >
            
<iframe  className="movie-iframe" width="300px" height="250px" title=" "  src= {item.video} frameBorder="1" />  

                        <div className="image-name">
                            {item.title}-{item.year} </div>
                 
                      </div>)  }

</div>

)


}
export default List