import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { } from '@cloudinary/react'


const CloudinaryUploadWidget = (props) => {
  const history = useHistory();

  
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/findSpecificPlan/${props.planID}`, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }

  //   }).then((response) => {
  //     setPlan(response.data);
  //     console.log(response.data)
  //   }).catch((error) => {
  //     console.log('error in getting plan')

  //   });

  // }, []);
 
  function showUploadWidget() {
   
    window.cloudinary.openUploadWidget({
      cloudName: "wit-fitness-app",
      uploadPreset: "FitPic",
      sources: [
        "local",
        "camera",
        "instagram",
        "facebook"
      ],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: true,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#464040",
          sourceBg: "#292222",
          windowBorder: "#c7a49f",
          tabIcon: "#cc6600",
          inactiveTabIcon: "#E8D5BB",
          menuIcons: "#ebe5db",
          link: "#ffb107",
          action: "#ffcc00",
          inProgress: "#99cccc",
          complete: "#78b3b4",
          error: "#ff6666",
          textDark: "#4C2F1A",
          textLight: "#D8CFCF"
        },
        fonts: {
          default: null,
          "'Merriweather', serif": {
            url: "https://fonts.googleapis.com/css?family=Merriweather",
            active: true
          }
        }
      }
    },
      (err, result) => {
        if (!err && result && result.event === "success") {
          console.log(result.info)
          const plan = {
            image: result.info.url
          }
          axios.post(`http://localhost:8080/addImage/${props.planID}`, plan ,{
            headers: {
                'Content-Type': 'application/json',      
            }

        }).then(() => {
            history.push('/user-profile')
        }).catch((error) => {
            console.log('error in posting image ')

        });
        }
      }
    );
  }

  return (
    <div>{showUploadWidget()}</div>
  );
}

export default CloudinaryUploadWidget

// document.getElementById("upload_widget").addEventListener(
//     "click",
//     function () {
//       myWidget.open();
//     },
//     false
//   );