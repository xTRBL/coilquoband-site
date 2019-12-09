window.onload = function() {
  var audio = new Audio("assets/audio/StealingFire.mp3");
  var songPath = 'assets/audio/';
  var playlist = { songOne: 'StealingFire.mp3', songTwo: 'LockMeUp.mp3', songThree: 'LeavingInTheEvening.mp3', songFour: 'TrainDelay.mp3', songFive: 'IThinkIThink.mp3', songSix: 'MaybeItsTheSun.mp3', songSeven: 'Mischevious.mp3', songEight: 'LivingProof.mp3', songNine: 'NoTime.mp3', songTen: 'WickedWar.mp3', songEleven: 'BornaBitch.mp3', songTwelve: 'SomethingCloser.mp3', songThirteen: 'CompulsiveNecessity.mp3', songFourteen: 'Rosemary.mp3', songFifteen: 'RunnedOver.mp3', fuckTheKing: 'FuckTheKing.mp3'};
  var currentlyPlaying = "songOne";
  var isPlaying = false;

  function changeMusicState(){
    if(!isPlaying)
    {
      $('#play-pause-button').removeClass('fa-play');
      $('#play-pause-button').addClass('fa-pause');
      audio.play();
      if(currentlyPlaying == 'fuckTheKing'){
        $('.play-button-box').css({'background':"url('/assets/img/about.jpg')", 'background-size':'contain'});
      }else {
        $('.play-button-box').css({'background':"url('/assets/img/stealing-fire.jpg')", 'background-size':'contain'});
      }
      isPlaying = true;
    }
    else
    {
      $('#play-pause-button').removeClass('fa-pause');
      $('#play-pause-button').addClass('fa-play');
      audio.pause();
      isPlaying = false;
    }
  };

  $('.play-button-box').on("click",function(){
    changeMusicState();
  });

  audio.onended = function() {
      $("#play-pause-button").removeClass('fa-pause');
      $("#play-pause-button").addClass('fa-play');
  };

  function isPlaying(music) { return !music.paused; }

  $('#collapseOne .card-body').on('click', function(){
    var data = $(this);
    var song = data.find("div[data-song]");
    var songName = song.data('name');
    var songKey = song.data('song');
    if(currentlyPlaying != songKey ) {
      audio.pause();
      isPlaying = false;
      $('.card-body').removeClass('active');
      currentlyPlaying = songKey;
      data.addClass('active');
      $('.music-player .name-holder > .song-name').html(songName)
      audio = new Audio(songPath + playlist[songKey])
      audio.load();
      changeMusicState();
      $('#collapseOne').collapse('toggle')
    }
  })


  $('#click-open').on('click', function(){
    document.getElementById("mySidenav").style.width = "100%";
  })

  $('.closebtn').on('click', function(){
    document.getElementById("mySidenav").style.width = "0";
  })

  $('.social-open').on('click', function(){
    document.getElementById("mySocialnav").style.width = "100%";
  })

  $('.socialnav .closebtn').on('click', function(){
    document.getElementById("mySocialnav").style.width = "0";
  }) 
};

