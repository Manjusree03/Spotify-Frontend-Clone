import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SongCardComponent } from 'src/app/components/song-card/song-card.component';
import { SearchBarService } from 'src/app/services/serachbar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private audio: HTMLAudioElement;
  private isPlaying: boolean = false;
  

  playsongs:any;
  
  [x: string]: any;

  public browserAll =[
    {
      bgColor:'lightpink',
      color:'white',
      title:'Podcasts',
      image:'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5 '
    },
    {bgColor: 'green', color: 'white', title:'Pop Mix',image:'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe'},
    {bgColor: 'purple', color: 'white', title: 'Top Songs Global',image:'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg'},
    {bgColor: 'blue', color: 'white', title: 'Live streams',image:'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112'},
    {bgColor: 'pink', color: 'white', title: 'Your Discover Weekly',image:'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg'},
    {bgColor: 'blue', color: 'white', title: 'Party',image:'https://concerts.spotifycdn.com/images/live-events_category-image.jpg'},
    {bgColor: 'orange', color: 'white', title: 'Hindi',image:'https://t.scdn.co/images/713254a577a64338a450481329f0d83f.jpeg'},
    {bgColor:'red',color:'white', title:'Telugu',image:'https://t.scdn.co/images/11e89d14d7844b7eb3d26619cb662a9b.jpeg'},
    {bgColor: 'green', color: 'white', title: 'தமிழ்',image:'https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg'},
    {bgColor: 'purple', color: 'white', title: 'Movies',image:'https://t.scdn.co/images/8a0fabf4d537486e9b5a4623c921f77e.jpeg'},
    {bgColor: 'blue', color: 'white', title: 'Rock',image:'https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg'},
    {bgColor: 'pink', color: 'white', title: 'Gaming',image:'https://i.scdn.co/image/ab67706f0000000221a2087747d946f16704b8af'},
    {bgColor: 'yellow', color: 'white', title: 'Radar',image:'https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png'},
    {bgColor: 'orange', color: 'white', title: 'Summer',image:'https://t.scdn.co/images/8e508d7eb5b843a89c368c9507ecc429.jpeg'},
    {bgColor: 'lightblue', color: 'white', title: 'Love',image:'https://t.scdn.co/images/3710b68657574bc79df14bd74629e5ac'},
    {bgColor: 'orange', color: 'white', title: 'Radio',image:'https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg'},
    {bgColor:'red',color:'white', title:'Devotional',image:'https://t.scdn.co/images/a1817e719adc4716b8f7a8ccecf64d9b'},
    {bgColor: 'green', color: 'white', title: 'Peace',image:'https://t.scdn.co/images/0dcbe54ffb604b37b1ae96223f2524be'},
    {bgColor: 'purple', color: 'white', title: 'All the feels ',image:'https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38'},
    {bgColor: 'black', color: 'white', title: 'Netflix',image:'https://t.scdn.co/images/1a416fb97f5647858c7f09c9cb6e7301'},
    {bgColor: 'blue', color: 'white', title: 'Disney',image:'https://t.scdn.co/images/27922fb7882e4d078c59b29cef4111b9'},
    {bgColor: 'pink', color: 'white', title: 'Bollywood',image:'https://t.scdn.co/images/4c8b58ab42b54296ad5379514d36edac'},
    {bgColor: 'blue', color: 'white', title: 'Marathi',image:'https://t.scdn.co/images/713254a577a64338a450481329f0d83f.jpeg'},

    
];

  public songCards =[
    {  
      song_id: 1,
      thumbnail:'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
      title: 'Peaceful Piano ',
      description: 'Relax and indulge with peaceful piano pieces'
      ,
         
    },
    {
      song_id: 2,
      thumbnail:'https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5',
      title: 'Deep Focus',
      description: 'Keep calm and focus with ambient and posture',
         
    },
    {
      song_id: 3,
      thumbnail:'https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c',
      title: 'Instrumental Study ',
      description: 'Focus with soft study music in instrumental study ',
         
    },
    {
      song_id: 4,
      thumbnail:'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc',
      title: 'Focus Flow  ',
      description: 'Lounge and chillout music for your workout ',
         
    },
    {
      song_id: 5,
      thumbnail:'https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618',
      title: 'Workday Lounge ',
      description: 'Uptempto instrumental beats for everyday',
         
    },
    {
      song_id: 6,
      thumbnail:'https://i.scdn.co/image/ab67706f0000000296e08a91ef3c7a6e7bfaa9a6',
      title: 'Beats to think to ',
      description: 'Beats to think of your daily workout',
         
    },
    
  ];

  public songCards1 =[
    {  
      song_id: 1,
      thumbnail:'https://i.scdn.co/image/ab67706f00000002dcc50246430b8c5a6a4b8670',
      title: "Today's top hit ",
      description: 'Bad bunny is on top of the Hottest 50! ',
         
    },
    {
      song_id: 2,
      thumbnail:'https://i.scdn.co/image/ab67706f00000002f872077fdbbb64540b2a909c',
      title: 'Rap Caviar',
      description: 'Music from Gucci Mane,Lil Drunk ',
         
    },
    {
      song_id: 3,
      thumbnail:'https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1',
      title: 'All Out 2010 s  ',
      description: 'The biggest songs of the 2010 s  ',
         
    },
    {
      song_id: 4,
      thumbnail:'https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e',
      title: 'Rock Classics ',
      description: 'Rock legends & epic songs countinue to rock ',
         
    },
    {
      song_id: 5,
      thumbnail:'https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361',
      title: 'Chill Hits ',
      description: 'Kick back to the best new and recent chill hits  ',
         
    },
    {
      song_id: 6,
      thumbnail:'https://i.scdn.co/image/ab67706f000000027ff56ae1d186669482eb0931',
      title:'Viva Latino ',
      description: 'Todays top Latin hits elevando nuestra  ',
         
    },
    
  ];
  public songCards2 =[
    {  
      song_id: 1,
      thumbnail:'https://i.scdn.co/image/ab67706c0000da8436ea3a15c04a4b0821958ceb',
      title:'The Sound Of Mumbai IN ',
      description: 'The songs that define, unite and distinguish Mumbai IN'
         
    },
    {
      song_id: 2,
      thumbnail:'https://i.scdn.co/image/ab67706c0000da84ca51e0b1b2526295415ea0f7',
      title:'The Sound Of Kolkata IN ',
      description: 'The songs that define, unite and distinguish Kolkata IN '
         
    },
    {
      song_id: 3,
      thumbnail:'https://i.scdn.co/image/ab67706c0000da84fdad3548d41af616a7e8d64c',
      title:'The Sound Of Delhi IN  ',
      description: 'The songs that define, unite and distinguish Delhi IN   ',
         
    },
    {
      song_id: 4,
      thumbnail:'https://i.scdn.co/image/ab67706c0000da84d8f01d1da427744c3c74172d',
      title:'The Sound Of BN IN',
      description: 'The songs that define, unite and distinguish Bengaluru IN ',
         
    },
    {
      song_id: 5,
      thumbnail:'https://i.scdn.co/image/ab67706c0000da8487c680fc5e5805eaef5d4dd2',
      title:'The Sound of Chennai IN  ',
      description: 'The songs that define, unite and distinguish Chennai IN'
         
    },
    {
      song_id: 6,
      thumbnail:'https://i.scdn.co/image/ab67706c0000da84f3b38c327eb3412669e58d96',
      title:'The Sound of Hyderabad ',
      description: 'The songs that define,unite and distinguish Hyderabad IN ',
         
    },
    
  ];

  public play=[
    {
      num:'1',i:"data:image/jpeg;base64,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",ti:"Nira(Takkar)",s:"Sid Sriram",al:"Unplugged",d:"9 days ago",t:"1:52",g:"https://dns4.pendusaab.com/download/128k-wshys/Nira.mp3",
    },
    {
    num:'2',i:"https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4",ti:"Fairytale Slow     ",s:"Alexander",al:"Rybakk",d:"15 days ago",t:"1:40",g:"https://djmaza.live/files/download/id/5981"
  },
  {
    num:'3',i:"https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74",ti:"In mine Blood",s:"Imagine🐉",al:"Jamesly",d:" 4 days ago",t:"1:58",g:"https://djvikkrant.com/uploads/files/data-28/13674/Shawn%20Mendes%20-%20In%20My%20Blood%20Official%20Music(DjVikkrant.Com).mp3"
  },
  {
    num:'4',i:"https://i.scdn.co/image/ab67616d0000485147b70771cb7375cd30ceec54",ti:"good for you!",s:"Olivia",al:"Olliviaa",d:"6 days ago",t:"1:39",g:"https://www.pagalworld.com.se/files/download/id/2514"
  },
  {
    num:'5',i:"https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812",ti:"Love like this",s:"Zayn Malik",al:"Zaynalb",d:"2 days ago",t:"2:03",g:"https://cdn.xclusiveloaded.com/wp-content/uploads/2020/11/Lil_Kesh_ft_Fireboy_DML_-_Love_Like_This.mp3"
  },
  {
    num:'6',i:"https://i.scdn.co/image/ab67616d0000485199175f73407a5eb9b768b669",ti:"WildestDream",s:"TaylorSwift",al:"Taylor",d:"8 days ago",t:"2:48",g:"https://cdn.xclusiveloaded.com/wp-content/uploads/2020/11/Lil_Kesh_ft_Fireboy_DML_-_Love_Like_This.mp3"
  },
  {
    num:'7',i:"https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8",ti:"Shakke itt up",s:"Selena Gomz",al:"Breakitt",d:"4 days ago",t:"1:57",g:"https://djmaza.live/files/download/id/7050cd"
  },
  {
    num:'8',i:"https://i.scdn.co/image/ab67616d00004851c1f1b784f7ef6ad1fd13e581",ti:"Withoutt  Me",s:"Deean Lewis",al:"Fjäderltt",d:"2 days ago",t:"2:10",g:"https://pagaliworld.com/files/download/id/7617"
  },
 
  {
    num:'9',i:"data:image/jpeg;base64,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",ti:"Gasolina-(SP)",s:"Daddy Yankee",al:"Yankee",d:" 3 days ago",t:"2:43",g:"https://www.pagalworld.com.se/files/download/id/67101"
},
  {
    num:'10',i:"https://i.scdn.co/image/ab67616d00004851cc72cfa66d1146c839a0fc73",ti:"Broken Glass",s:"Gia",al:"Thatsit",d:"5 days ago",t:"1:39",g:"https://jesusful.com/wp-content/uploads/music/2022/07/sia_-_Broken_Glass_(Jesusful.com).mp3"
  },
  {
    num:'12',i:"https://i.scdn.co/image/ab67616d00004851d385d26895594fc0f309e74b",ti:"Dandelions",s:"Ruth B",al:"Fjäderlätt",d:"6 days ago",t:"2:15",g:"https://pagalworld.com.vc/files/download/id/2532"
  },
  {
    num:'13',i:"https://i.scdn.co/image/ab67616d00004851288470effcdece2beeb0cef5",ti:"Angel Baby",s:"LewisCapaldi",al:"LewisCap",d:"5 days ago",t:"2:29",g:"https://pagalworld.com.vc/files/download/id/2768"
  },
  {
    num:'14',i:"https://i.scdn.co/image/ab67616d00004851734fa44e730eb68431fa0b16",ti:"NightChanges",s:"NF",al:"FOUR",d:"7 days ago",t:"3:22",g:"https://pagaliworld.com/files/download/id/6024"
  },
  {
    num:'15',i:"https://i.scdn.co/image/ab67616d000048516304ad16edcfeba83aa04a70",ti:"Grave Yardd",s:"Duncan",al:"Laurence",d:"8 days ago",t:"2:13",g:"https://cdnsongs.com/music/data/Single_Track/202302/Graveyard/128/Graveyard_1.mp3"
  }
  ]

  public ishome : boolean =true;
  public isearch :boolean=false;
  public isPlay :boolean=false;

  constructor(private sb: SearchBarService,private router : Router){
    this.audio = new Audio();
    this.audio.src = 'https://files.gospeljingle.com/uploads/music/2023/05/Louis-Tomlinson-DonT-Let-It-Break-Your-Heart-(Gospeljingle.com).mp3';
  }

    
  ngOnInit(): void 
  {
    this.sb.ishomeabs.subscribe(status => {
      this.ishome =status;
    })
    this.sb.isSearchVisible.subscribe(status => {
      this.isearch =status;
    })
    
  }
  
  redirectToPage(title: string, description: string, thumbnail: string) {
    this.playsongs = {
      title: title,
      description: description,
      thumbnail: thumbnail,
      // audioUrl: 'https://path.to/your-audio-file.mp3',
    };
  
    // Update the observable first before navigating
    this.sb.isSearchVisible.next(false);
    this.sb.ishomeabs.next(false);
    this.isPlay=true;
  
    // Log the value of isPlay after updating the observable
    console.log('isPlay after redirecting:', this.isPlay);
  
    
  }
  
  
  onNavigation(pageName:string){
    if(pageName === 'search'){
      this.sb.isSearchVisible.next(true);
       this.sb.ishomeabs.next(false);
       this.isPlay=false;
    } 

    else if(pageName ==='library' || pageName === 'playlist' ){
      this.router.navigate(['/login']);
    }
    
    else if(pageName ==='home'){
      this.sb.isSearchVisible.next(false);
      this.sb.ishomeabs.next(true);
      this.isPlay=false;
    }
    
  

  }


  playSong(): void {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}

  // @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;

  // playSong() {
  //   const audioPlayer: HTMLAudioElement = this.audioPlayerRef.nativeElement;

  //   if (audioPlayer.paused) {
  //     audioPlayer.play();
  //   } else {
  //     audioPlayer.pause();
  //   }
  // }
  

