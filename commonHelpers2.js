import"./assets/styles-6191ac61.js";import{i as s}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const e=o.currentTarget.elements.delay.value,t=o.currentTarget.elements.state.value;new Promise((r,i)=>{setTimeout(()=>{console.log(e,t),t==="fulfilled"?r(e):i(e)},e)}).then(r=>{s.success({color:"green",position:"topRight",message:`✅ Fulfilled promise in ${e}ms`})}).catch(r=>{s.error({color:"red",position:"topRight",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
