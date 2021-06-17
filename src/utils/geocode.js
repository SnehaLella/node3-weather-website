const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic25laGFsZWxsYSIsImEiOiJja3BwNjZnN3EwNDk4MnBrOTg3ZTcxaWRqIn0.4GkMBNNTzZBsMLtWz26wHA&limit=1&fuzzyMatch=false'
    request({url: url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect ot location services!', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        }else{
            callback(undefined, 
             {
                 latitude: body.features[0].center[1],
                 longitude: body.features[0].center[0],
                 location: body.features[0].place_name
             })
        }
    })
 }
 
//  geocode('Philadelphia New York', (error, data) => {
//        console.log('Error', error)
//        console.log('Data',data)
//  })

 module.exports = {
   geocode: geocode
 }