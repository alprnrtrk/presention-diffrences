const y=document.querySelector("#boxes"),D=document.querySelector("#leftLight"),G=document.querySelector("#rightLight"),I=document.querySelector("#dimLight");if(y){let l=function(m,p,j){return m+(p-m)*j},S=function(){r=l(r,t,u),o=l(o,e,u),s=l(s,t,i),a=l(a,e,i),n=l(n,e,i);const p=`${`circle at ${r}px ${o}px`}, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 0) 20%`;y.style.maskImage=`radial-gradient(${p})`,D.style.top=n,G.style.bottom=n,I.style.top=a,I.style.left=s,requestAnimationFrame(S)};var yt=l,ht=S;y.style.maskImage="radial-gradient(circle at 50% 50%, black 10%, rgba(0, 0, 0, 0) 30%)";let t=window.innerWidth/2,e=window.innerHeight/2,r=window.innerWidth/2,o=window.innerHeight/2,n=window.innerHeight/2,s=window.innerWidth/2,a=window.innerHeight/2;const u=.025,i=.0025;window.addEventListener("mousemove",m=>{const p=y.getBoundingClientRect();t=m.clientX-p.left,e=m.clientY-p.top}),S()}document.querySelectorAll("rail");const g=document.querySelectorAll("page"),M=document.querySelectorAll("[goto]");window.render=function(e){g[e].setAttribute("status","current"),g.forEach(r=>{r.removeAttribute("status"),r.classList.remove("active"),r.style.opacity=0}),g[e].setAttribute("status","current"),g[e].classList.add("active"),g[e].style.opacity=1,g.forEach(r=>{let o=r.getAttribute("page");o>e?(r.style.transform="translateX(100%)",r.style.pointerEvents="none"):o<e?(r.style.transform="translateX(-100%)",r.style.pointerEvents="none"):(r.style.transform="translateX(0)",r.style.pointerEvents="auto")})};M&&M.forEach(t=>{t.addEventListener("click",()=>{let e=t.getAttribute("goto");console.log(e),render(e)})});setTimeout(()=>{render(0)},100);const h=document.querySelectorAll("[page]"),d=document.querySelector("#title"),H=d.querySelector("h1"),q=H.querySelector("span"),E=d.querySelector("h2"),v=document.createElement("div"),R=document.createElement("span");v.style.cssText=`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    transition: .45s;
`;R.style.cssText=`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    line-height: 1.1;
    font-size: 2.5rem;
    font-weight: 500; /* Medium font weight */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) -10%, transparent 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`;if(h.length){let t=function(o){for(let n of o)if(n.type==="attributes"&&n.attributeName==="status"){let s=n.target.getAttribute("page");v.style.transform=`translateY(-${E.querySelector("span").clientHeight*s}px)`,H.style.width=0,setTimeout(()=>{q.textContent=n.target.getAttribute("pageName")},500),setTimeout(()=>{H.style.width=q.clientWidth,d.style.setProperty("--aviableWidth",q.clientWidth+E.clientWidth+"px")},500),setTimeout(()=>{s==h.length-1||s==0?d.style.transform="translateY(-150%)":d.style.transform="translateY(0%)"},500)}};var bt=t;h.forEach(o=>{let n=parseInt(o.getAttribute("page"))+1,s=R.cloneNode(!0);s.textContent=n<10?`0${n}`:n,v.appendChild(s)}),E.appendChild(v);const e=new MutationObserver(t),r={attributes:!0,attributeFilter:["status"]};h.forEach(o=>{e.observe(o,r)})}document.querySelectorAll("page").forEach(t=>{t.style.paddingTop=d.clientHeight+"px"});document.querySelectorAll("[titleFix]").forEach(t=>{t.style.paddingTop=d.clientHeight+"px"});const z=document.createElement("style");z.innerHTML=`
    body{
        cursor: none!important;
        overflow: hidden;
    }

    *:hover{
        cursor: none!important;
    }

    button:hover{
        cursor: none!important;
    }

    a:hover{
        cursor: none!important;
    }

    body:hover #cursor, body:hover #point {
        opacity: 1;
    }

    #cursor{
        position: fixed;
        z-index: 99999;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border: 3px solid rgba(255,255,255,.5);
        border-radius: 100%;
        opacity: 0;
        box-shadow: 0 0 10px rgba(255,255,255,.3);
        transition: opacity .45s;
        mix-blend-mode: difference;
    }
        
    #point{
        opacity: 0;
        z-index: 99999;
        content: '';
        position: absolute;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 100%;
        background-color: rgba(255,255,255,1);
        box-shadow: 0 0 10px rgba(255,255,255,.3);
        mix-blend-mode: difference;
    }
`;document.head.appendChild(z);const w=document.createElement("div"),A=document.createElement("div");var Y=window.innerWidth/2,F=window.innerHeight/2,k=window.innerWidth/2,L=window.innerHeight/2,T=window.innerWidth/2,C=window.innerHeight/2,X=.2,O=.4;w.setAttribute("id","cursor");A.setAttribute("id","point");document.body.appendChild(A);document.body.appendChild(w);window.addEventListener("mousemove",t=>{Y=t.pageX,F=t.pageY});function B(){k+=(Y-k)*X,L+=(F-L)*X,w.style.left=k+"px",w.style.top=L+"px",T+=(Y-T)*O,C+=(F-C)*O,A.style.left=T+"px",A.style.top=C+"px",requestAnimationFrame(B)}B();const $=document.querySelectorAll("[pin]");$&&$.forEach(t=>{t.style.top=t.getAttribute("y")+"%",t.style.left=t.getAttribute("x")+"%",t.addEventListener("click",()=>{Array.from($).map(e=>e.classList.remove("active")),t.classList.add("active")})});function J(t){for(let e of t)if(e.type==="attributes"&&e.attributeName==="status"){let r=e.target.getAttribute("page");const o=document.querySelectorAll("[page]")[r].querySelectorAll("[pin]");let n=0;setInterval(()=>{n!=o.length&&(o[n].click(),n++)},2e3)}}const K=new MutationObserver(J),Q={attributes:!0,attributeFilter:["status"]};document.querySelectorAll("[page]").forEach(t=>{K.observe(t,Q)});const U=document.querySelectorAll(".matrix");U.forEach(t=>{const e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;const o="01",n=t.getAttribute("font"),s=t.width/n,a=[];for(let i=0;i<s;i++)a[i]=1;setInterval(()=>{e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#6C35B2",e.font=n+"px monospace";for(let i=0;i<a.length;i++){const l=o.charAt(Math.floor(Math.random()*o.length));e.fillText(l,i*n,a[i]*n),a[i]*n>t.height&&Math.random()>.85&&(a[i]=0),a[i]++}},t.getAttribute("speed"))});const x=document.querySelector("[designer-cursor]"),b=document.querySelector("[designer-box]"),V=x.closest("page"),Z=document.querySelector("[designer-border]");function _(t){for(let e of t)e.type==="attributes"&&e.attributeName==="status"&&(setTimeout(()=>{x.classList.remove("duration-1000"),Z.style.opacity=1},1500),setTimeout(()=>{setInterval(()=>{x.style.top=b.getClientRects()[0].y+b.clientHeight+"px",x.style.left=b.getClientRects()[0].x+b.clientWidth+"px"},10)},500))}const tt=new MutationObserver(_),et={attributes:!0,attributeFilter:["status"]};tt.observe(V,et);function rt(t){for(let e of t)if(e.type==="attributes"&&e.attributeName==="status"){let r=e.target.getAttribute("page");document.querySelectorAll("[page]")[r].querySelectorAll("[reset-delay]").forEach(n=>{setTimeout(()=>{n.classList.add("!delay-0")},parseInt(n.getAttribute("reset-delay")))})}}const nt=new MutationObserver(rt),ot={attributes:!0,attributeFilter:["status"]};document.querySelectorAll("[page]").forEach(t=>{nt.observe(t,ot)});const W=document.querySelectorAll("[trigger]"),it=document.querySelectorAll("[pagination-indicator]");function st(t,e,r){return t*(1-r)+e*r}function at(t,e){let o=parseFloat(t.getAttribute("offset"))||0,n;function s(a){n||(n=a);const u=(a-n)/1e3,i=st(o,e,u);t.setAttribute("offset",i),u<1?requestAnimationFrame(s):t.setAttribute("offset",e)}requestAnimationFrame(s)}W.forEach(t=>{t.addEventListener("click",()=>{W.forEach(r=>r.classList.remove("active")),t.classList.add("active");const e=parseFloat(t.getAttribute("indicator"));it.forEach(r=>at(r,e))})});setTimeout(()=>{W[0].click()},500);const ct=document.querySelector("#pre-loader");setTimeout(()=>{ct.style.opacity=0},2e3);const lt=document.querySelectorAll("[popup]"),ut=document.querySelectorAll("[close-pop]");ut.forEach(t=>{t.addEventListener("click",()=>{document.querySelector(`[popup-id="${t.getAttribute("close-pop")}"]`).classList.remove("active")})});lt.forEach(t=>{t.addEventListener("click",()=>{document.querySelector(`[popup-id="${t.getAttribute("popup")}"]`).classList.add("active")})});const N=document.querySelector("[nav-logo]"),dt=document.querySelector("[nav-next]"),mt=document.querySelector("[nav-prev]"),pt=document.querySelector("[nav-reset]");var c;function f(t){t==0||t==document.querySelectorAll("[page]").length-1?N.style.transform="translateY(130%)":N.style.transform="translateY(0%)"}f(0);dt.addEventListener("click",()=>{c=parseInt(document.querySelector('[status="current"]').getAttribute("page")),render(c+1),f(c+1)});mt.addEventListener("click",()=>{c=parseInt(document.querySelector('[status="current"]').getAttribute("page")),render(c-1),f(c-1)});pt.addEventListener("click",()=>{render(0),f(0)});document.addEventListener("keyup",t=>{c=parseInt(document.querySelector('[status="current"]').getAttribute("page")),t.key==="ArrowRight"?(render(c+1),f(c+1)):t.key==="ArrowLeft"&&(render(c-1),f(c-1))});const gt=document.querySelectorAll("[mask-image]");function ft(t,e,r){return t+(e-t)*r}function P(t,e,r,o){const n=performance.now();function s(a){const u=a-n,i=Math.min(u/o,1),l=ft(e,r,i);t.style.cssText=`
            mask-image:linear-gradient(${t.getAttribute("mask-image")}deg, black, rgba(0, 0, 0, ${l}));
        `,i<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}gt.forEach(t=>{t.style.cssText=`
        mask-image:linear-gradient(${t.getAttribute("mask-image")}deg, black, rgba(0, 0, 0, 0));
    `,t.addEventListener("mouseenter",()=>{P(t,0,1,500)}),t.addEventListener("mouseleave",()=>{P(t,1,0,500)})});
