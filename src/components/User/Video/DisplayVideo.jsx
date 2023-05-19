import React,{useEffect, useState}from 'react'
import { getVideos,showVideos ,categories} from '../../../Utils/urls';
import axios from '../../../Utils/axios';


function DisplayVideo() {
    const [categoryVideos, setCategoryVideos] = useState({});

    useEffect(() => {
        axios
          .get(categories, {
            headers: { "Content-Type": "application/json" },
          })
          .then((categoriesResponse) => {
            const categoryData = categoriesResponse.data;
            const categorizedVideos = {};
    
            const categoryPromises = categoryData.map((category) =>
              axios
                .get(`${getVideos}${category.id}`, {
                  headers: { "Content-Type": "application/json" },
                })
                .then((videosResponse) => {
                  const videos = videosResponse.data;
                  categorizedVideos[category.id] = { category: category.category_name, videos };
                })
                .catch((error) => {
                  console.error("Error fetching videos for category:", category.category_name, error);
                })
            );
    
            Promise.all(categoryPromises)
              .then(() => {
                setCategoryVideos(categorizedVideos);
              })
              .catch((error) => {
                console.error("Error fetching videos for categories:", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching categories:", error);
          });
      }, []);
    
  const handleVideoClick = (videoUrl) => {
    // Redirect to the respective YouTube video URL
    window.open(videoUrl, '_blank');
  };
  return (
    <div>
      <h2>Videos</h2>
      {Object.keys(categoryVideos).map((categoryId) => (
        <div key={categoryId}>
          <h3>{categoryVideos[categoryId].category}</h3>
          <div className="video-cards" style={{"display":"flex","flexDirection":"row"}}>
            {categoryVideos[categoryId].videos.map((video) => (
              <div key={video.id} className="video-card" onClick={() => handleVideoClick(video.url)} style={{marginRight:"10px"}}>
                <img src={video.thumbnail_url} alt={video.title} style={{"height":"100px","widows":"200px"}} />
                <div className="video-details">
                  <h3>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayVideo