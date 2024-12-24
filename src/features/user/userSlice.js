import { createSlice } from "@reduxjs/toolkit";

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function fetchAddress() { 
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

   
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
 
//   return { position, address };
// }

const userState = {
  username: "",
}

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers:{
    createUser: (state, action) => {
     state.username = action.payload
    }
  } 
})

export const { createUser} = userSlice.actions;

export default userSlice.reducer