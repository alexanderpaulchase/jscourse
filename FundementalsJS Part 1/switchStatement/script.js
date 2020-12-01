const day = 'Saturday';
// const day = 'Tuesday';
// const day = 'Wednesday';
// const day = 'Thursday';
// const day = 'Friday';
// const day = 'Saturday';
// const day = 'Sunday';

switch(day){
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('cry time');
        break;
    case 'Wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy weekend');
        break;
    default: 
    console.log('not valid day');
}

// same thing as a above but in a if else statement 
if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday'){
    console.log('cry time');
} else if(day === 'Wednesday' || day === 'Thursday'){
    console.log('Write code examples');
} else if(day === 'Friday'){
    console.log('Record videos');
} else if(day === 'Saturday' || day === 'Sunday'){
    console.log('Enjoy weekend');
} else {
    console.log('not valid day');
};

// and i got it right. nice
    
