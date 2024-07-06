const f=document.querySelector("#boxes"),K=document.querySelector("#leftLight"),Q=document.querySelector("#rightLight"),I=document.querySelector("#dimLight");if(f){let c=function(d,m,J){return d+(m-d)*J},E=function(){r=c(r,t,l),o=c(o,e,l),s=c(s,t,i),a=c(a,e,i),n=c(n,e,i);const m=`${`circle at ${r}px ${o}px`}, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 0) 20%`;f.style.maskImage=`radial-gradient(${m})`,K.style.top=n,Q.style.bottom=n,I.style.top=a,I.style.left=s,requestAnimationFrame(E)};var yt=c,ht=E;f.style.maskImage="radial-gradient(circle at 50% 50%, black 10%, rgba(0, 0, 0, 0) 30%)";let t=window.innerWidth/2,e=window.innerHeight/2,r=window.innerWidth/2,o=window.innerHeight/2,n=window.innerHeight/2,s=window.innerWidth/2,a=window.innerHeight/2;const l=.025,i=.0025;window.addEventListener("mousemove",d=>{const m=f.getBoundingClientRect();t=d.clientX-m.left,e=d.clientY-m.top}),E()}document.querySelectorAll("rail");const p=document.querySelectorAll("page"),N=document.querySelectorAll("[goto]");window.render=function(e){p[e].setAttribute("status","current"),p.forEach(r=>{r.removeAttribute("status"),r.classList.remove("active"),r.style.opacity=0}),p[e].setAttribute("status","current"),p[e].classList.add("active"),p[e].style.opacity=1,p.forEach(r=>{let o=r.getAttribute("page");o>e?(r.style.transform="translateX(100%)",r.style.pointerEvents="none"):o<e?(r.style.transform="translateX(-100%)",r.style.pointerEvents="none"):(r.style.transform="translateX(0)",r.style.pointerEvents="auto")})};N&&N.forEach(t=>{t.addEventListener("click",()=>{let e=t.getAttribute("goto");console.log(e),render(e)})});setTimeout(()=>{render(0)},100);const y=document.querySelectorAll("[page]"),u=document.querySelector("#title"),W=u.querySelector("h1"),k=W.querySelector("span"),T=u.querySelector("h2"),b=document.createElement("div"),j=document.createElement("span");b.style.cssText=`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    transition: .45s;
`;j.style.cssText=`
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
`;if(y.length){let t=function(o){for(let n of o)if(n.type==="attributes"&&n.attributeName==="status"){let s=n.target.getAttribute("page");b.style.transform=`translateY(-${T.querySelector("span").clientHeight*s}px)`,W.style.width=0,setTimeout(()=>{k.textContent=n.target.getAttribute("pageName")},500),setTimeout(()=>{W.style.width=k.clientWidth,u.style.setProperty("--aviableWidth",k.clientWidth+T.clientWidth+"px")},500),setTimeout(()=>{s==y.length-1||s==0?u.style.transform="translateY(-150%)":u.style.transform="translateY(0%)"},500)}};var bt=t;y.forEach(o=>{let n=parseInt(o.getAttribute("page"))+1,s=j.cloneNode(!0);s.textContent=n<10?`0${n}`:n,b.appendChild(s)}),T.appendChild(b);const e=new MutationObserver(t),r={attributes:!0,attributeFilter:["status"]};y.forEach(o=>{e.observe(o,r)})}document.querySelectorAll("page").forEach(t=>{t.style.paddingTop=u.clientHeight+"px"});document.querySelectorAll("[titleFix]").forEach(t=>{t.style.paddingTop=u.clientHeight+"px"});const D=document.createElement("style");D.innerHTML=`
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
`;document.head.appendChild(D);const S=document.createElement("div"),q=document.createElement("div");var M=window.innerWidth/2,X=window.innerHeight/2,C=window.innerWidth/2,$=window.innerHeight/2,H=window.innerWidth/2,Y=window.innerHeight/2,P=.2,R=.4;S.setAttribute("id","cursor");q.setAttribute("id","point");document.body.appendChild(q);document.body.appendChild(S);window.addEventListener("mousemove",t=>{M=t.pageX,X=t.pageY});function G(){C+=(M-C)*P,$+=(X-$)*P,S.style.left=C+"px",S.style.top=$+"px",H+=(M-H)*R,Y+=(X-Y)*R,q.style.left=H+"px",q.style.top=Y+"px",requestAnimationFrame(G)}G();const F=document.querySelectorAll("[pin]");F&&F.forEach(t=>{t.style.top=t.getAttribute("y")+"%",t.style.left=t.getAttribute("x")+"%",t.addEventListener("click",()=>{Array.from(F).map(e=>e.classList.remove("active")),t.classList.add("active")})});function U(t){for(let e of t)if(e.type==="attributes"&&e.attributeName==="status"){let r=e.target.getAttribute("page");const o=document.querySelectorAll("[page]")[r].querySelectorAll("[pin]");let n=0;setInterval(()=>{n!=o.length&&(o[n].click(),n++)},2e3)}}const V=new MutationObserver(U),Z={attributes:!0,attributeFilter:["status"]};document.querySelectorAll("[page]").forEach(t=>{V.observe(t,Z)});const _=document.querySelectorAll(".matrix");_.forEach(t=>{const e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;const o="01",n=t.getAttribute("font"),s=t.width/n,a=[];for(let i=0;i<s;i++)a[i]=1;setInterval(()=>{e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#6C35B2",e.font=n+"px monospace";for(let i=0;i<a.length;i++){const c=o.charAt(Math.floor(Math.random()*o.length));e.fillText(c,i*n,a[i]*n),a[i]*n>t.height&&Math.random()>.85&&(a[i]=0),a[i]++}},t.getAttribute("speed"))});const v=document.querySelector("[designer-cursor]"),h=document.querySelector("[designer-box]"),tt=v.closest("page"),et=document.querySelector("[designer-border]");function rt(t){for(let e of t)e.type==="attributes"&&e.attributeName==="status"&&(setTimeout(()=>{v.classList.remove("duration-1000"),et.style.opacity=1},1500),setTimeout(()=>{setInterval(()=>{v.style.top=h.getClientRects()[0].y+h.clientHeight+"px",v.style.left=h.getClientRects()[0].x+h.clientWidth+"px"},10)},500))}const nt=new MutationObserver(rt),ot={attributes:!0,attributeFilter:["status"]};nt.observe(tt,ot);function it(t){for(let e of t)if(e.type==="attributes"&&e.attributeName==="status"){let r=e.target.getAttribute("page");document.querySelectorAll("[page]")[r].querySelectorAll("[reset-delay]").forEach(n=>{setTimeout(()=>{n.classList.add("!delay-0")},parseInt(n.getAttribute("reset-delay")))})}}const st=new MutationObserver(it),at={attributes:!0,attributeFilter:["status"]};document.querySelectorAll("[page]").forEach(t=>{st.observe(t,at)});const O=document.querySelectorAll("[trigger]"),ct=document.querySelectorAll("[pagination-indicator]");function lt(t,e,r){return t*(1-r)+e*r}function ut(t,e){let o=parseFloat(t.getAttribute("offset"))||0,n;function s(a){n||(n=a);const l=(a-n)/1e3,i=lt(o,e,l);t.setAttribute("offset",i),l<1?requestAnimationFrame(s):t.setAttribute("offset",e)}requestAnimationFrame(s)}O.forEach(t=>{t.addEventListener("click",()=>{O.forEach(r=>r.classList.remove("active")),t.classList.add("active");const e=parseFloat(t.getAttribute("indicator"));ct.forEach(r=>ut(r,e))})});setTimeout(()=>{O[0].click()},500);const dt=document.querySelector("#pre-loader");setTimeout(()=>{dt.style.opacity=0},2e3);const mt=document.querySelectorAll("[popup]"),pt=document.querySelectorAll("[close-pop]");pt.forEach(t=>{t.addEventListener("click",()=>{document.querySelector(`[popup-id="${t.getAttribute("close-pop")}"]`).classList.remove("active")})});mt.forEach(t=>{t.addEventListener("click",()=>{document.querySelector(`[popup-id="${t.getAttribute("popup")}"]`).classList.add("active")})});const z=document.querySelector("[nav-logo]"),x=document.querySelector("[nav-next]"),w=document.querySelector("[nav-prev]"),A=document.querySelector("[nav-reset]");var g;function L(t){t==0||t==document.querySelectorAll("[page]").length-1?z.style.transform="translateY(130%)":z.style.transform="translateY(0%)",t==document.querySelectorAll("[page]").length-1?(x.classList.remove("active"),w.classList.remove("active"),A.classList.add("active")):t==0?(w.classList.remove("active"),x.classList.add("active"),A.classList.remove("active")):(x.classList.add("active"),w.classList.add("active"),A.classList.remove("active"))}L(0);x.addEventListener("click",()=>{g=parseInt(document.querySelector('[status="current"]').getAttribute("page")),render(g+1),L(g+1)});w.addEventListener("click",()=>{g=parseInt(document.querySelector('[status="current"]').getAttribute("page")),render(g-1),L(g-1)});A.addEventListener("click",()=>{render(0),L(0)});const gt=document.querySelectorAll("[mask-image]");function ft(t,e,r){return t+(e-t)*r}function B(t,e,r,o){const n=performance.now();function s(a){const l=a-n,i=Math.min(l/o,1),c=ft(e,r,i);t.style.cssText=`
            mask-image:linear-gradient(${t.getAttribute("mask-image")}deg, black, rgba(0, 0, 0, ${c}));
        `,i<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}gt.forEach(t=>{t.style.cssText=`
        mask-image:linear-gradient(${t.getAttribute("mask-image")}deg, black, rgba(0, 0, 0, 0));
    `,t.addEventListener("mouseenter",()=>{B(t,0,1,500)}),t.addEventListener("mouseleave",()=>{B(t,1,0,500)})});
