import {v2 as cloudinary} from 'cloudinary';
          
const uploader = cloudinary.config({ 
  cloud_name: 'dguargjvz', 
  api_key: '953899228785555', 
  api_secret: '***************************' 
})

export default uploader;


// import {Cloudinary} from "@cloudinary/url-gen";

// const App = () => {
//   const cld = new Cloudinary({cloud: {cloudName: 'dguargjvz'}});
// };

