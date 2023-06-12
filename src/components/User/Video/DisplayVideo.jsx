import './DisplayVideo.css'
import React, { useEffect, useState } from 'react';
import { getVideos, categories } from '../../../Utils/urls';
import axios from '../../../Utils/axios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';

function DisplayVideo() {
  const [categoryVideos, setCategoryVideos] = useState({});
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

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

  const handleVideoClick = (videoUrl, isLocked) => {
    if (!user && isLocked) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You can access this video only if you are logged in.",
        showConfirmButton: true,
      });
      navigate('/login'); // Navigate to the login page
    } else {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <h2 className='video-head'>Display Videos</h2>
      {Object.keys(categoryVideos).map((categoryId) => (
        <div key={categoryId}>
          <h3 className='video-name'>{categoryVideos[categoryId].category}</h3>
          <div className="video-section">
            <div className="video-container" id={`video-container-${categoryId}`}>
              {categoryVideos[categoryId].videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`video-card ${index >= 2 && !user ? 'locked' : ''}`}
                  onClick={() => handleVideoClick(video.url, index >= 2)}
                >
                  <img src={video.thumbnail_url} alt={video.title} className="video-thumbnail" />
                  <div className="video-details">
                    <h3 style={{ textAlign: "center" }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayVideo;
