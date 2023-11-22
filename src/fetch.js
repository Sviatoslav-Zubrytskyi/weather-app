// function fetch() {
//     const divArr = document.querySelectorAll(".item");
//     alert(divArr);
//     const getAPI = () => {
//         fetch("http://api.weatherapi.com/v1/forecast.json?key=3318b3493fd842e180842919232111&q=Emmen&days=7&aqi=no&alerts=no")
//             //http://api.weatherapi.com/v1/forecast.json?key=1d172d3904e246849d3183628230802&q=Stockholm&days=6&aqi=no&alerts=no
//             //http://api.weatherapi.com/v1/current.json/volumes?q=Paris&key=3318b3493fd842e180842919232111&contentType=json"
//             .then(response => response.json())
//             .then(data => {
//                 for (const [i, forecast] of Object.entries(data.forecast.forecastday)) {
//                     try {
//                         let item = divArr[i];
//                         item.children[2].innerHTML = "maxTemp";
//                         console.log(forecast)
//                     } catch (error) {
//                         console.log(error)
//                     }
//                 }
//                 // console.log(data.items)
//                 // data.items.forEach(book => {
//                 //     try {
//                 //
//                 //         }
//                 //     } catch (error) {
//                 //         console.log(error);
//                 //     }
//             })
//
//
//             .catch(error => {
//                 console.error("An error occurred:", error);
//             });
//     }
//     getAPI();
// }
//
// export default fetch;
