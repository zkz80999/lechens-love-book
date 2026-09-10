const photos = [
  ["0132337b3024c54e66e43c89d3c2bd87.jpg","hotel","乐辰宝，晚餐的暖光一落下，你就像电影女主角。"],["07085f4842d237ab789c03f527c24c72.jpg","hotel","宝宝穿着白裙子坐在那里，我的心就偷偷冒出小花。"],["00999661ecafb04de712100474711592.jpg","pool","莎莎在泳池边的夏天，是我最喜欢的粉色限定。"],["639b6dce925e6440010aa552ddbbbde0.jpg","pool","宝贝和蓝色池水同框，连水面都变得甜甜的。"],["865b98cdb3e85ef2ad24ed0a5e464c84.jpg","pool","老婆这一身粉色，好像把整个夏天都穿走了。"],["de14181d41842a421dbc8cd8894d9dfd.jpg","pool","乐辰宝的倒影在发光，我的喜欢也是。"],["e26897f6a2e221bffa4e8c1effa3fc60.jpg","pool","宝宝在夜晚的泳池边，漂亮得让星星都想靠近。"],["f28cda907fab62e43e582516f70d5f07.jpg","pool","莎莎回头的这一秒，我想按下时间暂停键。"],
  ["721a16405c9bacb5eed3fd837881854b.jpg","beach","宝贝站在巴厘岛的落日里，海风把我的想念也吹过去了。"],["8ea625b598c05f0e0aa7ed0cac2b46fb.jpg","beach","老婆和晚霞一起出现，是这趟海边最浪漫的画面。"],["8fb8274654f6fc2aa3335b6b088b4f82.jpg","nature","庄乐辰走到绿意和水边里，像一幅会动的夏日画。"],["c78f6b32ea1a19f1246f9fef3957aec1.jpg","nature","乐辰宝站在清澈的水边，连小树叶都在为你鼓掌。"],["2d3311efc5aa68b143ee0f9bd9033a5f.jpg","mirror","宝宝照镜子的样子好可爱，镜子里的我一定也在偷笑。"],["2ef2f4a23cdfc9ff447c32e2d6011a47.jpg","portrait","莎莎这个小表情，是我要反复收藏的可爱证据。"],["7c4bfad3d8e53892d663d03075deea06.jpg","portrait","宝贝戴上小猫耳的瞬间，我的心直接被萌化了。"],
  ["5d5e858e87339c622f9d6092bfeb385c.jpg","blossom","老婆躲在花影和面具后面，还是一下就被我认出来。"],["7d039655820a77992afc7bbe53112097.jpg","blossom","乐辰宝拿着扇子，像从春天里跑出来的小仙女。"],["8ddeda1dca1c9eafa2e4b8c942eb6413.jpg","blossom","庄乐辰和紫花一起出现，浪漫得像专属壁纸。"],["9017c51c23d4b0cf7c1f4e0c1cd0ef1b.jpg","blossom","宝宝弹着琴的样子，让我的心跳也有了旋律。"],["dbd5c5d8815b7c171255bc91a774be29.jpg","blossom","莎莎在月亮和红叶前，像我偷偷许下的愿望。"],["7425af8572f9216c722590a639fa130f.jpg","portrait","宝贝坐在镜子前，连复古的光都在偏爱你。"],["d3be9ae3603c98242acf1ac02a394db2.jpg","portrait","老婆看向镜头这一眼，够我心动好多好多次。"],
  ["de270dc88b8aab3b56b21782cadfc91d.jpg","birthday","庄乐辰的生日蛋糕要甜甜的，因为你值得所有偏爱。"],["1003df7652e17f556abf63ecd1ea4151.jpg","birthday","乐辰宝举起酒杯的这一刻，我想祝你一直开心。"],["1b205f7e822d9eecd8f23f3817d70a35.jpg","birthday","宝宝的生日晚餐，每一口都是我们的小小庆祝。"],["3bb4919b07c61cd41ec71ad751c35adc.jpg","portrait","莎莎坐在暖暖的房间里，像一颗安静又闪亮的小糖。"],["9a7f1bf8bd06b8a17eefe972bd6071fb.jpg","portrait","宝贝穿着黑裙子的时候，连空气都变得心动。"],["a5e9c35f2f307c960f160feb36cda668.jpg","hotel","老婆自在坐着的样子，是我最想珍藏的日常。"],["ac329b0a1ca647adc06539b3db1eca55.jpg","hotel","乐辰宝站在镜前，漂亮得让我忘记了呼吸。"],["b6e337a6a976e7cbe8af3b17cba20934.jpg","hotel","宝宝坐在白色沙发上，像一团软软的云落进心里。"],["f538f7e70c4a1da9606bd0eeae464374.jpg","portrait","莎莎在夜色里回头，刚好撞进我的心里。"],["2a10dfae9c22c0b8bec36d19da0226f4.jpg","dinner","宝贝的花和晚餐，都是我想认真送给你的浪漫。"],["0ae8d46f8ed0fe0f2232016921f023f3.jpg","dinner","老婆在夜晚的小院里，和我一起把以后慢慢写完。"]
];
const bookElement = document.querySelector("#book"); const secretPage = document.querySelector(".secret-page");
const assetVersion = "wechat-mobile-2";
function chapter(number,title,copy,kind) { const page = document.createElement("article"); page.className = `book-page art-page chapter-page ${kind}`; page.innerHTML = `<p class="chapter-no">${number}</p><h2>${title}</h2><p>${copy}</p><div class="wave-rule"></div>`; return page; }
photos.forEach((photo,index) => { if (index === 8) bookElement.insertBefore(chapter("02","海风、落日，<br>还有你。","远方的颜色很好看，但你在画面里，才是最好的风景。","beach"),secretPage); if (index === 15) bookElement.insertBefore(chapter("03","花影和风，<br>都偏爱你。","你总能把一个平常的瞬间，变成我想收藏很久的画面。","blossom"),secretPage); if (index === 22) bookElement.insertBefore(chapter("04","愿你每一次许愿，<br>都有我在旁边。","生日快乐不只是一句祝福，是我希望你一直被爱着。","birthday"),secretPage); const page = document.createElement("article"); page.className = `book-page art-page photo-page ${photo[1]}`; page.setAttribute("aria-label",`纪念照片 ${index + 1}`); page.innerHTML = `<figure><img data-src="assets/photos/${photo[0]}?v=${assetVersion}" alt="纪念照片 ${index + 1}" loading="eager" decoding="async"></figure><p class="caption">乐辰宝ovo</p><span class="folio">${String(index + 1).padStart(2,"0")}</span>`; bookElement.insertBefore(page,secretPage); });

const pages = [...bookElement.querySelectorAll(".book-page")];
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const pageStatus = document.querySelector("#page-status");
const orientationStatus = document.querySelector("#orientation");
const pageWidth = Number(bookElement.dataset.pageWidth) || 480;
const pageHeight = Number(bookElement.dataset.pageHeight) || 600;
const pageRatio = pageWidth / pageHeight;
const compactViewport = window.matchMedia("(max-width: 700px)").matches;
const isWeChat = /MicroMessenger/i.test(navigator.userAgent);
const compactAvailableWidth = Math.min(window.innerWidth, document.documentElement.clientWidth, 390);
const runtimeWidth = compactViewport ? Math.max(240, Math.min(pageWidth, Math.floor(compactAvailableWidth - 28))) : pageWidth;
const runtimeHeight = Math.round(runtimeWidth / pageRatio);
document.documentElement.style.setProperty("--page-ratio",pageRatio);
document.documentElement.classList.toggle("wechat-browser",isWeChat);

function loadPhoto(img,priority="low") {
  if (!img || img.getAttribute("src") || !img.dataset.src) return;
  img.fetchPriority = priority;
  img.classList.add("is-loading");
  img.addEventListener("load",()=>{
    img.classList.remove("is-loading");
    img.classList.add("is-loaded");
  },{once:true});
  img.addEventListener("error",()=>{
    img.classList.remove("is-loading");
    img.removeAttribute("src");
  },{once:true});
  img.src = img.dataset.src;
}

function loadNearbyPhotos(pageIndex) {
  const start = Math.max(0,pageIndex - 1);
  const end = Math.min(pages.length - 1,pageIndex + 4);
  for (let index=start;index<=end;index+=1) {
    const img = pages[index].querySelector("img[data-src]");
    loadPhoto(img,index===pageIndex?"high":"low");
  }
}

function loadAllPhotos() {
  pages.forEach((page,index)=>{
    const img = page.querySelector("img[data-src]");
    loadPhoto(img,index<5?"high":"auto");
  });
}

const pageFlip = new St.PageFlip(bookElement,{
  width:runtimeWidth,
  height:runtimeHeight,
  size:"stretch",
  minWidth:compactViewport?runtimeWidth:Math.round(runtimeWidth*.56),
  maxWidth:runtimeWidth,
  minHeight:compactViewport?runtimeHeight:Math.round(runtimeHeight*.56),
  maxHeight:runtimeHeight,
  drawShadow:!compactViewport,
  flippingTime:isWeChat?320:compactViewport?440:760,
  usePortrait:true,
  startZIndex:10,
  autoSize:true,
  maxShadowOpacity:compactViewport?.12:.42,
  showCover:true,
  mobileScrollSupport:false,
  clickEventForward:true,
  useMouseEvents:true,
  swipeDistance:24,
  showPageCorners:!compactViewport,
  disableFlipByClick:false
});
let currentPage=0,isTurning=false;

function updateControls(){const lastPage=pageFlip.getPageCount()-1;bookElement.dataset.edge=currentPage===0?"front":currentPage===lastPage?"back":"inside";previousButton.disabled=currentPage===0||isTurning;nextButton.disabled=currentPage===lastPage||isTurning;pageStatus.textContent=currentPage===0?"封面":currentPage===lastPage?"封底":`${String(currentPage+1).padStart(2,"0")} / ${String(lastPage+1).padStart(2,"0")}`;}
pageFlip.on("flip",event=>{currentPage=Number(event.data);loadNearbyPhotos(currentPage);updateControls();});
pageFlip.on("changeState",event=>{isTurning=event.data!=="read";updateControls();});
function updateOrientation(orientation){bookElement.dataset.layout=orientation;orientationStatus.textContent=orientation==="portrait"?"单页阅读":"双页阅读";}
pageFlip.on("init",event=>updateOrientation(event.data.mode));
pageFlip.on("changeOrientation",event=>updateOrientation(event.data));
const requestedPage=Number(new URLSearchParams(location.search).get("page"));
const initialPage=Number.isInteger(requestedPage)&&requestedPage>=0&&requestedPage<pages.length?requestedPage:0;
loadAllPhotos();
pageFlip.loadFromHTML(pages);
if(initialPage>0)pageFlip.turnToPage(initialPage);
updateControls();

previousButton.addEventListener("click",()=>{if(!isTurning){loadNearbyPhotos(currentPage-1);pageFlip.flipPrev("bottom");}});
nextButton.addEventListener("click",()=>{if(!isTurning){loadNearbyPhotos(currentPage+1);pageFlip.flipNext("bottom");}});
window.addEventListener("keydown",event=>{if(event.altKey||event.ctrlKey||event.metaKey||isTurning)return;if(event.key==="ArrowLeft"){event.preventDefault();loadNearbyPhotos(currentPage-1);pageFlip.flipPrev("bottom");}if(event.key==="ArrowRight"||event.key===" "){event.preventDefault();loadNearbyPhotos(currentPage+1);pageFlip.flipNext("bottom");}if(event.key==="Home"){loadNearbyPhotos(0);pageFlip.turnToPage(0);}if(event.key==="End"){const lastPage=pageFlip.getPageCount()-1;loadNearbyPhotos(lastPage);pageFlip.turnToPage(lastPage);}});
document.querySelector("#cover-start").addEventListener("click",event=>{event.preventDefault();event.stopPropagation();if(!isTurning){document.body.classList.add("has-started");loadNearbyPhotos(1);pageFlip.flipNext("bottom");}});
const letterDialog=document.querySelector("#letter-dialog");document.querySelector("#secret-letter").addEventListener("click",event=>{event.stopPropagation();letterDialog.showModal();});document.querySelector(".close-letter").addEventListener("click",()=>letterDialog.close());
