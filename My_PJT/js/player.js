var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const musicID = [
    {
        title: '밤하늘의 별을...',
        musician: '양정승',
        id: 'zgvI5Jqph08',
    },
    {
        title: 'Y',
        musician: '프리스타일',
        id: 'dYIT_jeUBKg',
    },
    {
        title: '응급실',
        musician: 'izi',
        id: 'E-BvyQb7mWE',
    },
    {
        title: '사랑의 바보',
        musician: '더 넛츠',
        id: 'bJxcFpSVZQY',
    },
    {
        title: '몽환의 숲',
        musician: '키네틱플로우',
        id: '2uyHtg56yTY',
    },
    {
        title: '벌써 일년',
        musician: '브라운아이즈',
        id: '-sVo6NWwK_o',
    },
    {
        title: '17171771',
        musician: '자우림',
        id: 'j_zEg4pifDU',
    },
    {
        title: '기다리다',
        musician: '윤하',
        id: 'iB3VDOQPvi0',
    },
]
const randomMusic = musicID[Math.floor(Math.random()*musicID.length)]

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '000',
        width: '000',
        videoId: randomMusic.id,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 300000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}