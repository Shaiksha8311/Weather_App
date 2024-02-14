const cities = [
    {"name": "Mumbai", "temp": 30, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Delhi", "temp": 25, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Bangalore", "temp": 26, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Hyderabad", "temp": 28, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Chennai", "temp": 29, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Kolkata", "temp": 27, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Ahmedabad", "temp": 29, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Pune", "temp": 27, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Surat", "temp": 28, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Jaipur", "temp": 24, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Lucknow", "temp": 23, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Kanpur", "temp": 23, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Nagpur", "temp": 29, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Indore", "temp": 27, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Thane", "temp": 30, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Bhopal", "temp": 26, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Visakhapatnam", "temp": 28, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Pimpri-Chinchwad", "temp": 27, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Patna", "temp": 24, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Vadodara", "temp": 29, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Ghaziabad", "temp": 25, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Ludhiana", "temp": 23, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Agra", "temp": 23, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Nashik", "temp": 30, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Ranchi", "temp": 24, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Faridabad", "temp": 25, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Coimbatore", "temp": 29, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Jamshedpur", "temp": 24, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Srinagar", "temp": 15, "weather": "cold", "icon": "https://cdn-icons-png.flaticon.com/128/3845/3845731.png"},
    {"name": "Chandigarh", "temp": 23, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Mysore", "temp": 26, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Navi Mumbai", "temp": 30, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Amritsar", "temp": 22, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Vijayawada", "temp": 29, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Guwahati", "temp": 21, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Hubballi-Dharwad", "temp": 27, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Tiruchirappalli", "temp": 30, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Bareilly", "temp": 24, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Mira-Bhayandar", "temp": 30, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Thiruvananthapuram", "temp": 29, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Bhiwandi", "temp": 30, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Salem", "temp": 29, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"},
    {"name": "Gorakhpur", "temp": 23, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Gurgaon", "temp": 25, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Aligarh", "temp": 24, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Jalandhar", "temp": 23, "weather": "cool", "icon": "https://cdn-icons-png.flaticon.com/128/1163/1163763.png"},
    {"name": "Bhubaneswar", "temp": 28, "weather": "warm", "icon": "https://cdn-icons-png.flaticon.com/128/869/869869.png"}
];



// cities.forEach(city => {
//     console.log(city.name);
//     console.log(city.temp)
// });



let selectcity = document.getElementById('citySelect')
let container = document.getElementById('container')
let Submit = document.getElementById("submitButton")
Submit.addEventListener('click',function(){
    console.log(selectcity.value)
    container.innerHTML = '';
    cities.forEach(city=>{
        if (city.name === selectcity.value){
            let cityContainer = document.createElement('div');
            cityContainer.classList.add('container');
        
            let heading = document.createElement('h1');
            heading.textContent = city.name;
            cityContainer.appendChild(heading);
            let temp = document.createElement('h1');
            temp.textContent = city.temp +" C";
            cityContainer.appendChild(temp);
            let image = document.createElement('img');
            image.src = city.icon;
            cityContainer.appendChild(image);
            
        
            container.appendChild(cityContainer);
        
            
        }
    })
    
})


