const request = require('request')

const forecast = ( latitude,longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=6d819040c668d7cdda912d1323bf0ad1&query= '+ latitude + ',' + longitude + '&units=f'
    request({url, json: true},(error, {body})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another search', undefined)
        }else{
            callback(undefined, 
                body.current.weather_descriptions +" . It is "+body.current.temperature +" degrees out there.")
        }
    })
}

module.exports = forecast