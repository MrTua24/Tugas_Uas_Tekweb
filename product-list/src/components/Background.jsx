// import React from 'react';

// const Background = () => {
//     return (
//         <div
//             className="fixed top-0 left-0 w-full min-h-screen bg-cover bg-center -z-10"
//             style={{
//                 backgroundImage: 'linear - gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ require('../assets/bg1.png')'})',
//       }}
//     ></div >
//   );
// };

// export default Background;
import React from 'react';

const Background = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full min-h-screen bg-cover bg-center -z-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${require('../asset/bg1.jpg')})`,
      }}
    ></div>
  );
};

export default Background;
