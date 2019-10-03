1// 1

const book=[ {
    title:'the Hobbit',
    auther:'J.R.R',
    readed:false
    } ,
    
    {title:'Game of throuns',
    auther:'A.D.N',
    readed:true
    }  ];
    
    for (i=0; i<book.length;i++)
    {
        if (book[i].readed)
        {
        console.log( 'You already read "'+ book[i].title +'", by '+ book[i].auther );
        
        }
    
        else {
            console.log( 'You still need to read "'+ book[i].title +'", by '+ book[i].auther );
        }
    }

// 2
const favoriteMovie = [
  {title: "The Godfather",
   duration: 50 ,
    stars: ["Marlon Brando", "Al Pacino", "James Caan"]} ,
  {title: "The Dark Knight ",
   duration: 30,
    stars: ["Christian Bale", "Heath Ledger"," Aaron Eckhart"]} ,
  
    {title: "Inception",
   duration: 20,
    stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"] } 
];


for (let i=0; i<favoriteMovie.length; i++)
  {
    
console.log(favoriteMovie[i].title+ ' For ' + favoriteMovie[i].duration+' . Stars: '+(favoriteMovie[i].stars).join(' - '));
    i++;  
  }


