// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const CircularProgress = () => {
//   return (
//     <Wrapper>
//       <CircleWrap>
//         <Circle>
//           <Mask className="full-1">
//             <Fill1 />
//           </Mask>
//           <Mask className="half">
//             <Fill1 />
//           </Mask>
//           <InsideCircle>85%</InsideCircle>
//         </Circle>
//       </CircleWrap>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   display: flex;
// `;

// const CircleWrap = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 160px);
//   grid-gap: 80px;
//   margin-top: 100px;
//   margin-left: 50px;
//   width: 150px;
//   height: 150px;
//   background: #d9d7da;
//   border-radius: 50%;
// `;

// const Circle = styled.div`
//   width: 150px;
//   height: 150px;
//   position: relative;
//   border-radius: 50%;
// `;

// const Mask = styled.div`
//   width: 150px;
//   height: 150px;
//   position: absolute;
//   border-radius: 50%;

//   &.full-1 {
//     clip: rect(0px, 75px, 150px, 0px);
//     background-color: #ec0c0c;
//     animation: ${fill1Animation} ease-in-out 3s;
//     transform: rotate(130deg);
//   }
// `;

// const Fill1 = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const InsideCircle = styled.div`
//   width: 124px;
//   height: 124px;
//   border-radius: 50%;
//   background: #212020;
//   line-height: 120px;
//   text-align: center;
//   margin-top: 13px;
//   margin-left: 13px;
//   color: white;
//   position: absolute;
//   z-index: 100;
//   font-weight: 700;
//   font-size: 2em;
// `;

// const fill1Animation = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(130deg);
//   }
// `;

// export default CircularProgress;
