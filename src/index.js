import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx'

ReactDOM.render(
    <App />, document.getElementById("root")
);


































// function Cards(props)
// {
//     return(
//         <div>
//             <h2>{props.name}</h2>
//             <img src={props.img} alt='avatar_img' />
//             <p>{props.tel}</p>
//             <p>{props.email}</p>
//         </div>
//     );
// }

// ReactDOM.render(
//     <div>
//         <h1>My Contacts</h1>
//         <Cards 
//             name="RaOne" 
//             img="https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/09/10/467024/197703/cartoon_character_arnold_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2086509_o.jpg" 
//             tel="+123 456 789" 
//             email="ram@gmail.com" 
//         />
//         <Cards 
//             name="Varun" 
//             img="https://blenderartists.org/uploads/default/0ffdbb1a6da5a721e3cf66c3c95b7206cb23bb20" 
//             tel="+123 345 222" 
//             email="sid@gmail.com" 
//         />
//     </div>,
//     document.getElementById("root")
//);