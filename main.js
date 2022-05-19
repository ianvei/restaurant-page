(()=>{"use strict";function e(){document.querySelector(".menu").addEventListener("click",e),console.log("this is menu");let t=document.querySelector(".body-section");console.log(t),t.remove();let n=document.createElement("div");n.classList.add("body-section"),n.setAttribute("id","menu"),document.querySelector(".body-content").appendChild(n);let d=document.createElement("div");d.classList.add("menu-item");let a=document.createElement("div");a.classList.add("food"),a.innerText="shigure don / しぐれ 丼";let o=document.createElement("div");o.classList.add("price"),o.innerText="$7.49";let l=document.createElement("div");l.classList.add("menu-item");let c=document.createElement("div");c.classList.add("food"),c.innerText="curry don / カレードン";let i=document.createElement("div");i.classList.add("price"),i.innerText="$7.99";let r=document.createElement("div");r.classList.add("menu-item");let s=document.createElement("div");s.classList.add("food"),s.innerText="niku udon / 肉 うどん";let u=document.createElement("div");u.classList.add("price"),u.innerText="$6.99";let p=document.createElement("div");p.classList.add("menu-item");let m=document.createElement("div");m.classList.add("food"),m.innerText="ochazuke / お茶漬け";let h=document.createElement("div");h.classList.add("price"),h.innerText="$4.29";let C=document.createElement("div");C.classList.add("menu-wrapper"),document.querySelector(".body-section").appendChild(C);let E=document.querySelector(".menu-wrapper");E.appendChild(d),E.appendChild(l),E.appendChild(r),E.appendChild(p),d.appendChild(a),d.appendChild(o),l.appendChild(c),l.appendChild(i),r.appendChild(s),r.appendChild(u),p.appendChild(m),p.appendChild(h)}function t(){let e=document.querySelector(".body-section");console.log(e),e.remove();let t=document.createElement("div");t.classList.add("body-section"),t.setAttribute("id","info"),document.querySelector(".body-content").appendChild(t);let n=document.createElement("div");n.classList.add("paragraph-wrapper"),document.querySelector(".body-section").appendChild(n);let d=n=document.createElement("p");d.textContent="Manpuku Modern Japanese Eatery is a concept that builds on the fundamental elements of three key words: “EAT, DRINK, and ENJOY”. These are the principles that build the foundation and set the standard for the company and staff.";let a=n=document.createElement("p");a.textContent="Established in May 2008, Manpuku brings together under one roof an assortment rice dishes, noodle dishes, and an array of speciality snacks not commonly found in the North American food market.";let o=n=document.createElement("p");o.textContent="It is with this uniqueness that strives Manpuku to become a one of a kind eatery. By providing the customers with an authentic food and service experience, customers will feel as if they have stepped into a restaurant in the heart of Japan.";let l=n=document.createElement("p");l.textContent="One of the key features of Manpuku is the U-shaped counter and open kitchen concept that allows customers to observe as well as interact with the staff.";let c=n=document.createElement("p");c.textContent="Manpuku is a welcoming place built for people coming as an individual, a couple, a family, or a group. Whether big or small, Manpuku offers comfort, service and intergrity built upon three basic principles, so please...";let i=document.createElement("h3");i.textContent="EAT DRINK ENJOY";let r=document.querySelector(".paragraph-wrapper");r.appendChild(d),r.appendChild(a),r.appendChild(o),r.appendChild(l),r.appendChild(c),r.appendChild(i)}function n(){console.log("this is loadwebpage");try{document.querySelector(".page").remove()}catch(e){console.log(e)}let d=document.getElementById("content"),a=document.createElement("div");a.classList.add("page");let o=document.createElement("div");o.classList.add("header");let l=document.createElement("div");l.classList.add("above");let c=document.createElement("div");c.classList.add("ls");let i=document.createElement("div");i.classList.add("rs");let r=document.createElement("p");r.textContent="Access";let s=document.createElement("p");s.textContent="About";let u=document.createElement("p");u.textContent="info@manpuku.jp";let p=document.createElement("p");p.textContent="Instagram";let m=document.createElement("p");m.textContent="Twitter",d.appendChild(a);let h=document.querySelector(".page");console.log(h),h.appendChild(o);let C=document.querySelector(".header");C.appendChild(l);let E=document.querySelector(".above");E.appendChild(c),E.appendChild(i);let y=document.querySelector(".ls");y.appendChild(r),y.appendChild(s),y.appendChild(u);let v=document.querySelector(".rs");v.appendChild(p),v.appendChild(m);let f=document.createElement("div");f.classList.add("below"),C.appendChild(f);let L=document.createElement("p");L.textContent="News";let b=document.createElement("p");b.textContent="Subscribe to our newsletter";let x=document.querySelector(".below");x.appendChild(L),x.appendChild(b);let g=document.createElement("div");g.classList.add("nav"),h.appendChild(g);let S=document.querySelector(".nav"),q=document.createElement("div");q.classList.add("nav-content"),S.appendChild(q);let k=document.createElement("h2");k.classList.add("main"),k.textContent="Main";let w=document.createElement("h2");w.classList.add("menu"),w.textContent="Menu";let T=document.createElement("h2");T.classList.add("Info"),T.textContent="Info";let A=document.querySelector(".nav-content");A.appendChild(k),A.appendChild(w),A.appendChild(T);let M=document.createElement("div");M.classList.add("body-content"),h.appendChild(M);let I=document.createElement("div");I.classList.add("body-section"),document.querySelector(".body-content"),M.appendChild(I);let N=document.createElement("img");N.setAttribute("src","/src/manpuku.jpeg"),N.setAttribute("alt","restaurant storefront"),N.setAttribute("class","storefront-img");let O=document.querySelector(".body-section");O.appendChild(N);let J=document.createElement("div");J.classList.add("main-content-text");let R=document.createElement("p");R.textContent="OUR STOREFRONT";let $=document.createElement("p");$.textContent="We are a restaurant in Toronto bringing the most authentic Japanese Food to the City";let j=document.createElement("p");j.textContent="写真家の川島小鳥主宰のブックレーベルpiyo piyo pressの出版２タイトル「（世界）² / 川島小鳥x仲野太賀」「花とイルカとユニコーン / 小橋陽介」とオリジナルトートバッグが再入荷しました。 以下関連商品お買い上げの方に、小橋陽介がジョウビタキを描いたpiyo piyo press（世界）²　特製ステッカーを差し上げます。",J.appendChild(R),J.appendChild($),J.appendChild(j),O.appendChild(J);let B=document.querySelector(".main"),D=document.querySelector(".Info");B.addEventListener("click",n),D.addEventListener("click",t),document.querySelector(".menu").addEventListener("click",e)}let d=!0;d&&(n(),d=!1);let a=document.querySelector(".main"),o=document.querySelector(".menu"),l=document.querySelector(".Info");o.addEventListener("click",e),a.addEventListener("click",n),l.addEventListener("click",t)})();