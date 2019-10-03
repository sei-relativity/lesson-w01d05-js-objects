// 1

function Books(r)
{
const book1=[ {
title:'the Hobbit',
auther:'J.R.R',
readed:false
} ,

{title:'Game of throuns',
auther:'A.D.N',
readed:true
}  ];


for (i=0; i<book1.length;i++)
{
   if (book1[i].readed=true){
      console.log( "You already read "+""+book1[i].title+""+"by"+""+ Booksbook1[i].auther );
   }
   else {
console.log( "You still need to read "+""+book1[i].title+""+"by"+""+ book1[i].auther );
   }
}
  
}

// 2
const favoriteMovie = [
  {title: "The Godfather",
   duration: 50 ,
    stars: "Marlon Brando, Al Pacino, James Caan"} ,
  {title: "The Dark Knight ",
   duration: 30,
    stars: "Christian Bale, Heath Ledger, Aaron Eckhart"} ,
  
    {title: "Inception",
   duration: 20,
    stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page "} 
];

function Fav()
{
  
for (let i=0; i<favoriteMovie.length; i++)
  {
console.log(favoriteMovie[i].join('-'));
    i++;
  }
}
